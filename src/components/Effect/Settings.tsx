import Input from "../Input";

export default function Settings({
  children,
  setVideoDuration,
  videoDuration,
  isLoading,
}: {
  children: React.ReactNode;
  videoDuration: number;
  isLoading: boolean;
  setVideoDuration: (duration: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4 w-full max-w-xl">
      <div className="flex flex-col gap-3 pb-4 w-full">
        <h3>Effect Settings</h3>
        {children}
      </div>
      <div className="flex flex-col gap-3 pb-4 w-full">
        <h3>Video Settings</h3>
        <Input
          type="range"
          label="Duration (seconds)"
          set={setVideoDuration}
          defaultValue={10}
          min={5}
          max={15}
          double={true}
          value={videoDuration}
        />
        <button className="btn" id="save-btn">
          {isLoading ? (
            <img src="/assets/spinner.svg" alt="" />
          ) : (
            "Generate Video"
          )}
        </button>
      </div>
    </div>
  );
}
