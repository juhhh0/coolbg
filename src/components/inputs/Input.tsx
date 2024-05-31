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
    <div className="flex w-full justify-between h-10">
      <label>{label}</label>

      <input
        type={type}
        defaultValue={defaultValue}
        onChange={(e) => {
          // @ts-ignore
          set(e.target.value);
        }}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}
