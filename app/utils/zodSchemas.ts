import { conformZodMessage } from "@conform-to/zod";
import { z } from "zod";

export const siteSchema = z.object({
  name: z.string().min(1).max(35),
  description: z.string().min(1).max(255),
  subdirectory: z.string().min(1).max(40),
});

export const PostSchema = z.object({
  title: z.string().min(1).max(100),
  coverImage: z.string().min(1),
  smallDescription: z.string().min(1).max(200),
  articleContent: z.string().min(1),
});

export const EmailSchema = z.object({
  name: z
    .string()
    .min(1, "이름을 입력하세요.")
    .max(10, "이름은 최대 10자까지 가능합니다."),
  email: z
    .string()
    .min(1, "이메일을 입력하세요.")
    .max(40, "이메일은 최대 40자까지 가능합니다.")
    .email("유효한 이메일을 입력하세요."),
  phone: z
    .string()
    .min(1, "전화번호를 입력하세요.")
    .max(12, "전화번호는 최대 12자까지 가능합니다."),
  message: z.string().min(10, "메시지는 최소 10자 이상 입력해야 합니다."),
  private: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집에 동의해야 합니다.",
  }),
});

export function SiteCreationSchema(options?: {
  isSubdirectoryUnique: () => Promise<boolean>;
}) {
  return z.object({
    subdirectory: z
      .string()
      .min(1)
      .max(40)
      .regex(/^[a-z]+$/, "Subdirectory must only use lowercase letters")
      .transform((value) => value.toLocaleLowerCase())
      .pipe(
        z.string().superRefine((email, ctx) => {
          if (typeof options?.isSubdirectoryUnique !== "function") {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            });
            return;
          }
          return options.isSubdirectoryUnique().then((isUnique) => {
            if (!isUnique) {
              ctx.addIssue({
                code: "custom",
                message: "Subdirectory is already taken...",
              });
            }
          });
        })
      ),
    name: z.string().min(1).max(35),
    description: z.string().min(1).max(255),
  });
}
