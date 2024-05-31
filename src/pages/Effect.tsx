import { useState } from "react";
import { Sketch } from "../sketchs/sketch";
import Preview from "../components/Effect/Preview";
import Settings from "../components/Effect/Settings";
import Input from "../components/Input";

export default function Effect() {
    const [isLoading, setIsLoading] = useState(false);

  const [videoImages, setVideoImages] = useState([] as any[]);
  const [videoDuration, setVideoDuration] = useState(10);

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
          setVideoImages={setVideoImages}
          setIsLoading={setIsLoading}
          videoDuration={videoDuration}
        />
        <div className="w-full flex flex-col gap-10 xl:items-start py-10">
          <Settings setVideoDuration={setVideoDuration} videoDuration={videoDuration} isLoading={isLoading}>
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
          {videoImages.length > 0 && <Preview isLoading={isLoading} images={videoImages} setIsLoading={setIsLoading}/>}
        </div>
      </section>
    </>
  );
}
