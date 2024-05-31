import React from "react";
import { useState } from "react";
import { Sketch } from "../components/sketch";
import SavedVideo from "../components/SavedVideo";

export default function Effect() {
  const [bgColor, setBgColor] = useState("#000000");
  const [objColor, setObjColor] = useState("#ffffff");
  const [images, setImages] = useState([] as any[]);
  return (
    <>
      <input
        type="color"
        onChange={(e) => {
          // @ts-ignore
          setBgColor(e.target.value);
        }}
      />
      <input
        type="color"
        onChange={(e) => {
          // @ts-ignore
          setObjColor(e.target.value);
        }}
      />
      <button id="save-btn">save</button>
      <Sketch bgColor={bgColor} objColor={objColor} setImages={setImages} />
      {images.length > 0 && <SavedVideo images={images} />}
    </>
  );
}
