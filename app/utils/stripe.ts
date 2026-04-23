import Stripe from "stripe";

// Stripe 싱글톤 — 모듈 로드 시점이 아니라 첫 사용 시에만 생성 (STRIPE_SECRET_KEY 없이도 홈·게시물 목록이 로드됨)
let stripeClient: Stripe | null = null;

/**
 * 서버에서 Stripe API 호출이 필요할 때 사용합니다.
 * 키가 없으면 결제/구독 관련 액션에서만 명시적으로 실패합니다.
 */
export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY가 설정되지 않았습니다. 결제 기능을 사용할 수 없습니다."
    );
  }
  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      apiVersion: "2025-01-27.acacia",
      typescript: true,
    });
  }
  return stripeClient;
}
