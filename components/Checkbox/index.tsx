import Image from "next/image";
import React from "react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`rounded-[8px] w-7 h-7 border-4 border-black flex items-center justify-center ${
          checked && "bg-default-100"
        }`}
      >
        {checked && (
          <Image
            src="/cat-paw-white.svg"
            alt="Checked"
            width={16}
            height={16}
          />
        )}
      </div>
      <span className="ml-2">{label}</span>
    </label>
  );
};
/** Heres how to use it
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    <Checkbox
        label="Tuxedo cat"
        checked={isChecked}
        onChange={handleCheckboxChange}
    />
 */
