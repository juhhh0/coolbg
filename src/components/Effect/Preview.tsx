import { createFFmpeg } from "@ffmpeg/ffmpeg";
import { useEffect, useState } from "react";

export default function Preview({ images }: { images: any[] }) {
  const [video, setVideo] = useState("");
  const ffmpeg = createFFmpeg({ log: true });

  const download = async () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = video;
    downloadLink.download = "output.mp4";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    const createVideo = async () => {
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
      }

      for (let i = 0; i < images.length; i++) {
        const imageData = images[i].imageData.split(",")[1];
        const byteCharacters = atob(imageData);
        const byteNumbers = new Array(byteCharacters.length);
        for (let j = 0; j < byteCharacters.length; j++) {
          byteNumbers[j] = byteCharacters.charCodeAt(j);
        }
        const byteArray = new Uint8Array(byteNumbers);

        ffmpeg.FS("writeFile", `image${i + 1}.png`, byteArray);
      }

      await ffmpeg.run(
        "-framerate",
        "1",
        "-i",
        "image%d.png",
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "output.mp4"
      );

      const data = ffmpeg.FS("readFile", "output.mp4");
      const videoBlob = new Blob([data.buffer], { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);

      setVideo(videoUrl);
    };
    createVideo();
  }, [images]);

  return (
    <div>
      <video className="w-72" controls src={video}></video>
      <button className="btn" onClick={download}>Download</button>
    </div>
  );
}
