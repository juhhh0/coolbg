import { useState } from "react";
import { Sketch } from "../sketchs/sketch";
import Preview from "../components/Effect/Preview";
import Settings from "../components/Effect/Settings";
import Input from "../components/inputs/Input";

export default function Effect() {
  const [images, setImages] = useState([] as any[]);
  const [bgColor, setBgColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#ffffff");
  const [text, setText] = useState("juh");
  const [speed, setSpeed] = useState(1);

  return (
    <>
      <section className="w-full flex flex-col gap-10 xl:flex-row h-full px-10 py-8">
        <Sketch
          bgColor={bgColor}
          objColor={textColor}
          speed={speed}
          text={text}
          setImages={setImages}
        />
        <div className="w-full flex flex-wrap gap-10 items-end xl:items-start py-10">
          <Settings>
            <Input
              type="color"
              label="Background Color"
              set={setBgColor}
              defaultValue="#000000"
            />
            <Input
              type="color"
              label="Text Color"
              set={setTextColor}
              defaultValue="#ffffff"
            />
            <Input type="text" label="Text" set={setText} defaultValue="juh" />
            <Input
              type="range"
              label="Speed"
              set={setSpeed}
              defaultValue="1"
              min={0.1}
              max={1}
              step={0.1}
            />
          </Settings>
          {images.length > 0 && <Preview images={images} />}
        </div>
      </section>
    </>
  );
}
