import React, {ChangeEvent} from 'react';

interface InputProps {
  id: string,
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string
  required?: boolean
}

function Input(props: InputProps) {
  const {id, label, onChange, className, required} = props
  return (
    <div className={className}>
      {label &&
          <label htmlFor={id}
                 className="block mb-2 text-sm font-medium text-gray-900">{label}:
          </label>
      }

      <input
        required={required}
        name={id}
        type="text"
        onChange={onChange}
        id={id}
        className="py-3 border border-gray-300 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 h-11"/>

    </div>
  );
}

export default Input;