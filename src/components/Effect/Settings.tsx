export default function Settings({
  setBgColor,
  setObjColor,
}: {
  setBgColor: any;
  setObjColor: any;
}) {
  return (
      <div className="py-10 flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="color"
            onChange={(e) => {
                // @ts-ignore
                setBgColor(e.target.value);
            }}
            />
            <label>Background Color</label>
        </div>
        <div className="flex gap-2">
          <input
            type="color"
            onChange={(e) => {
                // @ts-ignore
                setObjColor(e.target.value);
            }}
            />
            <label>Background Color</label>
        </div>
        <button className="btn" id="save-btn">Preview</button>
      </div>
  );
}
