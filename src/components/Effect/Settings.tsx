export default function Settings({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-lg">
      {children}
      <button className="btn" id="save-btn">
        Preview
      </button>
    </div>
  );
}
