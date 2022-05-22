import { Field } from "formik";
import React from "react";

interface Props {
  name: string;
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
}

const TailwindInput: React.FC<Props> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {name}
      </label>
      <Field
        className="w-full p-3 text-sm border-gray-200 rounded-lg"
        placeholder={placeholder || ""}
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
};

export default TailwindInput;
