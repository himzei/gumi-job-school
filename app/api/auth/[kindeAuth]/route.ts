import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// `export const GET = handleAuth()`이면 next build(페이지 데이터 수집) 시 모듈이 로드될 때
// handleAuth()가 바로 실행되어 KINDE_* 환경변수 검사에 실패합니다.
// 첫 API 요청 시에만 핸들러를 만들면 빌드는 통과합니다. (운영/로그인 시에는 .env에 Kinde 값 필수)
type KindeAppRouteContext = { params: Promise<{ kindeAuth: string }> };
type KindeGetHandler = (req: Request, ctx: KindeAppRouteContext) => Promise<Response>;

let kindeGetHandler: KindeGetHandler | null = null;

function getKindeGetHandler(): KindeGetHandler {
  if (!kindeGetHandler) {
    kindeGetHandler = handleAuth() as KindeGetHandler;
  }
  return kindeGetHandler;
}

export function GET(request: Request, context: KindeAppRouteContext) {
  return getKindeGetHandler()(request, context);
}
