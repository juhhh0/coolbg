import {
  P5CanvasInstance,
  ReactP5Wrapper,
  SketchProps,
} from "@p5-wrapper/react";

type MySketchProps = SketchProps & {
  bgColor: string;
  objColor: string;
};

function sketch(p5: P5CanvasInstance<MySketchProps>) {
  let bgColor = "#000000";
  let objColor = "#ffffff";
  let setSavesImages = (images: any[]) => {};

  p5.setup = () => {
    p5.createCanvas(600, 400, p5.WEBGL);
  };

  p5.updateWithProps = (props: any) => {
    if (props.bgColor) bgColor = props.bgColor;
    if (props.objColor) objColor = props.objColor;
    if (props.setImages) setSavesImages = props.setImages;
  };

  p5.draw = () => {
    p5.background(p5.color(bgColor));
    p5.noStroke();
    p5.push();
    p5.fill(p5.color(objColor));
    p5.rotateZ(p5.frameCount * 0.01);
    p5.box(100);
    p5.pop();
  };

  p5.saveVideo = () => {
    p5.saveFrames("frame", "png", 1, 5, (images: any) => {
      setSavesImages(images);
    });
  };

  const saveBtn = document.querySelector("#save-btn");
  saveBtn?.addEventListener("click", () => p5.saveVideo());
}

export function Sketch({
  bgColor,
  objColor,
  setImages,
}: {
  bgColor: string;
  objColor: string;
  setImages: (images: any[]) => void;
}) {
  return (
    <>
      <div className="bg-black border border-grey w-full xl:!h-[calc(100vh_-_160px)] xl:w-1/2 flex justify-center items-center">
        <ReactP5Wrapper
          sketch={sketch}
          bgColor={bgColor}
          objColor={objColor}
          setImages={setImages}
        />
      </div>
    </>
  );
}
