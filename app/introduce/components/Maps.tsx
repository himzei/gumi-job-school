"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Maps() {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=e75dd28fe1c972761b6479a76b390c0b&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(
            36.12565226012276,
            128.342190731102
          ),
          level: 2,
        };

        var map = new window.kakao.maps.Map(container, options);
        var markerPosition = new window.kakao.maps.LatLng(
          36.12565226012276,
          128.342190731102
        );
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-[400px]">
        <div id="map" style={{ width: "100%", height: "100%" }}>
          ddafsdsa
        </div>
      </div>
    </main>
  );
}
