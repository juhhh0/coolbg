import React from "react";

export default function Input({
  type,
  label,
  set,
  defaultValue,
  min,
  max,
  step,
}: {
  type: string;
  label: string;
  set: any;
  defaultValue: any;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="flex gap-2">
      <input
        type={type}
        defaultValue={defaultValue}
        className="text-black"
        onChange={(e) => {
          // @ts-ignore
          set(e.target.value);
        }}
        min={min}
        max={max}
        step={step}
      />
      <label>{label}</label>
    </div>
  );
}
