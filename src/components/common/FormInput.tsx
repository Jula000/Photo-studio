import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  textarea = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-400">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onChange={onChange}
          className="mt-1 p-3 block w-full bg-zinc-800 border-about-bg rounded-md shadow-sm text-white"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="mt-1 p-3 block w-full bg-zinc-800 border-about-bg rounded-md shadow-sm text-white"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;
