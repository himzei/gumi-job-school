"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Maps = () => {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_KAKAO_KEY;

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        // 결과값 위치 좌표
        let coords = new window.kakao.maps.LatLng(33.5563, 126.79581);

        // 지도를 담을 영역의 DOM 레퍼런스
        let container = document.getElementById("map");

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        let options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: coords, // 지도의 중심좌표
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        map.setCenter(coords);
      });
    });
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }} />;
};

export default Maps;
