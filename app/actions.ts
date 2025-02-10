"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import {
  EmailSchema,
  PostSchema,
  SiteCreationSchema,
} from "./utils/zodSchemas";
import prisma from "./utils/db";
import { requireUser } from "./utils/requireUser";
import { stripe } from "./utils/stripe";
import nodemailer from "nodemailer";
import { Prisma, TypeOfVote } from "@prisma/client";
import { JSONContent } from "@tiptap/react";
import { revalidatePath } from "next/cache";

export async function CreateSiteAction(prevState: any, formData: FormData) {
  const user = await requireUser();

  // const [subStatus, sites] = await Promise.all([
  //   prisma.subscription.findUnique({
  //     where: {
  //       userId: user.id,
  //     },
  //     select: {
  //       status: true,
  //     },
  //   }),
  //   prisma.site.findMany({
  //     where: {
  //       userId: user.id,
  //     },
  //   }),
  // ]);

  if (!user) {
    return redirect(`/api/auth/login`);
  }

  const submission = await parseWithZod(formData, {
    schema: SiteCreationSchema({
      async isSubdirectoryUnique() {
        const existingSubDirectory = await prisma.site.findUnique({
          where: {
            subdirectory: formData.get("subdirectory") as string,
          },
        });
        return !existingSubDirectory;
      },
    }),
    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.site.create({
    data: {
      description: submission.value.description,
      name: submission.value.name,
      subdirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });

  return redirect("/dashboard/sites");
}

export async function CreatePostAction(prevState: any, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: PostSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.post.create({
    data: {
      title: submission.value.title,
      smallDescription: submission.value.smallDescription,
      slug: String(Date.now()),
      articleContent: JSON.parse(submission.value.articleContent),
      image: submission.value.coverImage,
      userId: user.id,
      siteId: formData.get("siteId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function EditPostAction(prevState: any, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: PostSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.post.update({
    where: {
      userId: user.id,
      id: formData.get("articleId") as string,
    },
    data: {
      title: submission.value.title,
      smallDescription: submission.value.smallDescription,
      slug: String(Date.now()),
      articleContent: JSON.parse(submission.value.articleContent),
      image: submission.value.coverImage,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function DeletePostAction(formData: FormData) {
  const user = await requireUser();
  await prisma.post.delete({
    where: {
      userId: user.id,
      id: formData.get("articleId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function UpdateImageAction(formData: FormData) {
  const user = await requireUser();

  await prisma.site.update({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
    data: {
      imageUrl: formData.get("imageUrl") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function DeleteSiteAction(formData: FormData) {
  const user = await requireUser();

  await prisma.site.delete({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
  });

  return redirect(`/dashboard/sites`);
}

export async function CreateSubscription() {
  const user = await requireUser();

  let stripeUserId = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      customerId: true,
      email: true,
      firstName: true,
    },
  });

  if (!stripeUserId?.customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: stripeUserId?.email,
      name: stripeUserId?.firstName,
    });

    stripeUserId = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        customerId: stripeCustomer.id,
      },
    });
  }

  const session = await stripe.checkout.sessions.create({
    customer: stripeUserId.customerId as string,
    mode: "subscription",
    billing_address_collection: "auto",
    payment_method_types: ["card"],
    line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
    customer_update: {
      address: "auto",
      name: "auto",
    },
    success_url: "http://localhost:3000/dashboard/payment/success",
    cancel_url: "http://localhost:3000/dashboard/payment/cancelled",
  });

  return redirect(session.url as string);
}

export async function SendMailAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const submission = parseWithZod(formData, {
    schema: EmailSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `[한국직업교육학원 상담신청서] ${name} (${email})`,
      html: `<p>${message}</p>`,
    });
    console.log("이메일 전송 성공");
    return {
      status: "success",
      message: "문의하기 전송이 완료되었습니다.",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "전송 도중 문제가 발생했습니다. 디시 시도해 주세요",
    };
  }
}

export async function updateUsername(prevState: any, formData: FormData) {
  const user = await requireUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const username = formData.get("username") as string;

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      username: username,
    },
  });

  // revalidatePath("/settings");

  return {
    message: "successfull ",
  };
}

// r
export async function createCommunity(prevState: any, formData: FormData) {
  const user = await requireUser();

  try {
    const name = formData.get("name") as string;

    console.log(name, user.id);

    const data = await prisma.subreddit.create({
      data: {
        name: name,
        userId: user.id,
      },
    });

    return redirect(`/r/${data.name}`);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          message: "이 커뮤니티 이름은 이미 사용하고 있습니다.",
          status: "error",
        };
      }
    }
    throw e;
  }
}

// r -> update
export async function updateSubDescription(prevState: any, formData: FormData) {
  const user = await requireUser();

  const subName = formData.get("subName") as string;
  const description = formData.get("description") as string;

  try {
    await prisma.subreddit.update({
      where: {
        name: subName,
      },
      data: {
        description: description,
      },
    });

    return {
      status: "success",
      message: "커뮤니티 설명이 업데이트 되었습니다. ",
    };
  } catch {
    return {
      status: "error",
      message: "업데이트 도중 문제가 발생했습니다. 디시 시도해 주세요",
    };
  }
}

export async function createCommunityPost(
  { jsonContent }: { jsonContent: JSONContent },
  formData: FormData
) {
  const user = await requireUser();

  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const subName = formData.get("subName") as string;

  const ok = await prisma.subreddit.findUnique({
    where: {
      name: subName,
    },
  });

  if (!ok) {
    await prisma.subreddit.create({
      data: {
        name: subName,
      },
    });
  }

  const data = await prisma.postreddit.create({
    data: {
      title: title,
      imageString: imageUrl ?? undefined,
      subName: subName,
      userId: user.id,
      textContent: jsonContent ?? undefined,
    },
  });

  return redirect(`/post/${data.id}`);
}

export async function handleVote(formData: FormData) {
  const user = await requireUser();

  const postId = formData.get("postId") as string;
  const voteDirection = formData.get("voteDirection") as TypeOfVote;

  const vote = await prisma.vote.findFirst({
    where: {
      postredditId: postId,
      userId: user.id,
    },
  });

  if (vote) {
    if (vote.voteType === voteDirection) {
      await prisma.vote.delete({
        where: {
          id: vote.id,
        },
      });

      return revalidatePath("/r");
    } else {
      await prisma.vote.update({
        where: {
          id: vote.id,
        },
        data: {
          voteType: voteDirection,
        },
      });

      return revalidatePath("/r");
    }
  }

  await prisma.vote.create({
    data: {
      voteType: voteDirection,
      userId: user.id,
      postredditId: postId,
    },
  });

  return revalidatePath("/r");
}

export async function createComment(formData: FormData) {
  const user = await requireUser();

  const comment = formData.get("comment") as string;
  const postId = formData.get("postId") as string;

  const data = await prisma.comment.create({
    data: {
      text: comment,
      userId: user.id,
      postredditId: postId,
    },
  });

  revalidatePath(`/post/${postId}`);
}
