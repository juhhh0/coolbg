import {
  P5CanvasInstance,
  ReactP5Wrapper,
  SketchProps,
} from "@p5-wrapper/react";

type MySketchProps = SketchProps & {
  bgColor: string;
  objColor: string;
  speed: number;
  videoDuration: number;
};

function sketch(p5: P5CanvasInstance<MySketchProps>) {
  let uBgColor = "#000000";
  let uObjColor = "#ffffff";
  let uSpeed = 1;
  let uVideoDuration = 10;
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  let streams: any[] = [];
  let letterSize = 20;
  let letter: any;
  let font: any;

  let setVideoImages = (images: any[]) => {};
  let setIsLoading = (loading: boolean) => {};

  p5.preload = () => {
    font = p5.loadFont("assets/whitrabt.ttf");
  };

  p5.setup = () => {
    p5.createCanvas(600, 400);
    let x = 0;
    for (let i = 0; i <= p5.width / letterSize; i++) {
      // @ts-ignore
      let stream = new Stream();
      stream.generateLetters(x, p5.random(-2000, 0));
      streams.push(stream);
      x += letterSize;
    }
    p5.textSize(letterSize);
    p5.textFont(font);
  };

  p5.updateWithProps = (props: any) => {
    if (props.bgColor) uBgColor = props.bgColor;
    if (props.objColor) uObjColor = props.objColor;
    if (props.setVideoImages) setVideoImages = props.setVideoImages;
    if (props.setIsLoading) setIsLoading = props.setIsLoading;
    if (props.text) string = props.text;
    if (props.videoDuration) uVideoDuration = props.videoDuration;


    if (props.speed != uSpeed) {
      uSpeed = props.speed;

      streams = [];
      let x = 0;
      for (let i = 0; i <= p5.width / letterSize; i++) {
        // @ts-ignore
        let stream = new Stream();
        stream.generateLetters(x, p5.random(-2000, 0));
        streams.push(stream);
        x += letterSize;
      }
    }
  };

  p5.draw = () => {
    p5.background(p5.color(uBgColor));
    streams.forEach(function (stream) {
      stream.render();
    });
  };

  function RandomLetter(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switchInterval = p5.round(p5.random(20, 30));

    this.setToRandomLetter = function () {
      if (p5.frameCount % this.switchInterval == 0) {
        this.value = string[p5.round(p5.random(0, string.length - 1))];
      }
    };

    this.rain = function () {
      if (this.y >= p5.height) {
        this.y = 0;
      } else {
        this.y += this.speed;
      }
    };
  }

  function Stream() {
    this.letters = [];
    this.totalLetters = p5.round(p5.random(5, 10));
    this.speed = p5.random(5, 10) * uSpeed;

    this.generateLetters = function (x: number, y: number) {
      for (let i = 0; i <= this.totalLetters; i++) {
        // @ts-ignore
        letter = new RandomLetter(x, y, this.speed);
        letter.setToRandomLetter();
        this.letters.push(letter);
        y -= letterSize;
      }
    };

    this.render = function () {
      this.letters.forEach(function (letter: any) {
        p5.fill(p5.color(uObjColor));
        p5.text(letter.value, letter.x, letter.y);
        letter.rain();
        letter.setToRandomLetter();
      });
    };
  }

  p5.saveVideo = () => {
    setIsLoading(true);
    p5.saveFrames("frame", "png", uVideoDuration, 22, (images: any) => {
      setVideoImages(images);
    });
  };

  const saveBtn = document.querySelector("#save-btn");
  saveBtn?.addEventListener("click", () => p5.saveVideo());
}

export function Sketch({
  bgColor,
  objColor,
  speed,
  text,
  setVideoImages,
  setIsLoading,
  videoDuration
}: {
  bgColor: string;
  objColor: string;
  speed: number;
  text: string;
  setVideoImages: (images: any[]) => void;
  setIsLoading: (loading: boolean) => void;
  videoDuration: number;
}) {
  return (
    <>
      <div className="bg-black border border-grey w-full xl:!h-[calc(100vh_-_160px)] xl:w-1/2 flex justify-center items-center">
        <ReactP5Wrapper
          sketch={sketch}
          bgColor={bgColor}
          objColor={objColor}
          speed={speed}
          text={text}
          setIsLoading={setIsLoading}
          setVideoImages={setVideoImages}
          videoDuration={videoDuration}
        />
      </div>
    </>
  );
}
