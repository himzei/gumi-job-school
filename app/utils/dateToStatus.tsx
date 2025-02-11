export function statusDate(
  startRec: string,
  endRec: string,
  startRel: string,
  endRel: string
) {
  // 오늘 날짜를 "YYYY.MM.DD" 형식으로 가져오기
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10).replace(/-/g, ".");

  // 날짜 형식을 Date 객체로 변환하는 함수
  const parseDate = (dateStr: string) => new Date(dateStr.replace(/\./g, "-"));

  // 오늘 날짜 객체 생성
  const todayDate = parseDate(todayStr);

  let status;
  // 날짜 비교
  if (todayDate >= parseDate(startRec) && todayDate <= parseDate(endRec)) {
    status = "모집중";
  } else if (
    todayDate >= parseDate(startRel) &&
    todayDate <= parseDate(endRel)
  ) {
    status = "진행중";
  } else {
    status = "";
  }

  return (
    <>
      {status === "모집중" ? (
        <p className="rounded-full bg-primary/20 px-2 py-1 text-xs leading-5 text-primary">
          모집중
        </p>
      ) : status === "진행중" ? (
        <p className="rounded-full bg-green-500/20 px-2 py-1 text-xs leading-5 text-green-500">
          진행중
        </p>
      ) : (
        <p></p>
      )}
    </>
  );
}
