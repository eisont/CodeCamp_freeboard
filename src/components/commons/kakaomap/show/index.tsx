import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const KakaoMapShowPage = (props: any) => {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c7f2a4ed139b34fb703d663cc6f45a2&autoload=false";
    // ? & === 쿼리스트링
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem?.useditemAddress?.lat === null
              ? "33.450701"
              : props.data?.fetchUseditem?.useditemAddress?.lat,
            props.data?.fetchUseditem?.useditemAddress?.lng === null
              ? "126.570667"
              : props.data?.fetchUseditem?.useditemAddress?.lng
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.data?.fetchUseditem?.useditemAddress?.lat,
          props.data?.fetchUseditem?.useditemAddress?.lng
        );
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 마우스 드래그로 지도 이동 가능여부를 설정합니다
        map.setDraggable(false);
        // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
        map.setZoomable(false);
      });
    };
  }, [props.data?.fetchUseditem]);

  return (
    <>
      <div id="map" style={{ width: 792, height: 400 }}></div>
    </>
  );
};

export default KakaoMapShowPage;
