import React, {ChangeEventHandler} from 'react';

interface ButtonProps {
  label: string
  onChange?: ChangeEventHandler<HTMLButtonElement>
  className?: string
}

function Button(props: ButtonProps) {
  const {label, onChange, className} = props
  return (
    <div className={className}>
      <button type="button"
              onChange={onChange}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none h-11">{label}
      </button>
    </div>
  );
}

export default Button;