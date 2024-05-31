import React from "react";

export default function Input({
  type,
  label,
  set,
  defaultValue,
  min,
  max,
  step,
  double,
  value,
}: {
  type: string;
  label: string;
  set: any;
  defaultValue: any;
  min?: number;
  max?: number;
  step?: number;
  double?: boolean;
  value?: any;
}) {
  const setValue = (e: any) => {
    set(e.target.value);
  };
  return (
    <div className="flex w-full items-center justify-between h-10">
      <label>{label}</label>

      <div className="flex gap-4">
        <input
          type={type}
          defaultValue={defaultValue}
          onChange={setValue}
          min={min}
          max={max}
          value={value}
          step={step}
        />
        {double && (
          <input
            type="number"
            onChange={setValue}
            value={value}
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
          />
        )}
      </div>
    </div>
  );
}
