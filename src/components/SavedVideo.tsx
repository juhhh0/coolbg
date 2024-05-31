import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { useEffect, useState } from "react";

const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.1/dist/esm";

export default function SavedVideo({ images }: { images: any[] }) {
  const [video, setVideo] = useState("");
  const ffmpeg = createFFmpeg({ log: true });
  
  const convertImagesToVideo = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    for (let i = 0; i < images.length; i++) {
      const imageData = images[i].imageData.split(",")[1]; // Get the base64 data part
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

    const downloadLink = document.createElement('a');
    downloadLink.href = videoUrl;
    downloadLink.download = 'output.mp4';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
      <h2>saved video</h2>
      <div style={{ display: "flex" }}>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              style={{ display: "block", maxWidth: "400px" }}
              id="base64image"
              src={image.imageData}
            />
          );
        })}
      </div>
      <video controls src={video}></video>
      <button onClick={convertImagesToVideo}>donwload</button>
    </div>
  );
}
