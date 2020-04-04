import React from "react";

function Mask({ addr, lat, lng, name }) {
  return (
    <div>
      <h2>약국이름: {name}</h2>
      <h3>약국주소: {addr}</h3>
      <p>
        위도: {lat} / 경도 {lng}
      </p>
    </div>
  );
}

export default Mask;
