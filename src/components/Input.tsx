import React, {ChangeEventHandler} from 'react';

interface InputProps {
  id: string,
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
}

function Input(props: InputProps) {
  const {id, label, onChange, className} = props
  return (
    <div className={className}>
      {label &&
          <label htmlFor={id}
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}:
          </label>
      }
      <input
        type="text"
        onChange={onChange}
        id={id}
        className="py-3 border border-gray-300 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 h-11"/>
    </div>
  );
}

export default Input;