import React, {MouseEventHandler} from 'react';

interface ButtonProps {
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string;
  disable?: boolean
}

function Button(props: ButtonProps) {
  const {label, onClick, className, disable} = props
  return (
    <div className={className}>
      <button type="button"
              disabled={disable}
              onClick={onClick}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none h-11">{label}
      </button>
    </div>
  );
}

export default Button;