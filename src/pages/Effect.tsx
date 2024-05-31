import { useState } from "react";
import { Sketch } from "../sketchs/sketch";
import Preview from "../components/Effect/Preview";
import Settings from "../components/Effect/Settings";

export default function Effect() {
  const [images, setImages] = useState([] as any[]);
  const [bgColor, setBgColor] = useState("#000000");
  const [objColor, setObjColor] = useState("#ffffff");

  return (
    <>
      <section className="w-full flex flex-col gap-10 xl:flex-row h-full px-10 py-8">
        <Sketch bgColor={bgColor} objColor={objColor} setImages={setImages} />
        <div>
          <Settings setBgColor={setBgColor} setObjColor={setObjColor} />
          {images.length > 0 && <Preview images={images} />}
        </div>
      </section>
    </>
  );
}
