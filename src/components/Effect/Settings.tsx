export default function Settings({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10 flex flex-col gap-4">
      {children}
      <button className="btn" id="save-btn">
        Preview
      </button>
    </div>
  );
}
