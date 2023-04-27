import React, {ChangeEvent} from 'react';

interface Option {
  label: string,
  value: number
}

interface SelectProps {
  id: string;
  label: string,
  options: Option[]
  className?: string,
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean
}

function Select(props: SelectProps) {
  const {label, options, id, onChange, className, required} = props
  return (
    <div className={className}>
      <label htmlFor={id}
             className="block mb-2 text-sm font-medium text-gray-900">{label}:
      </label>
      <select required={required} name={id} onChange={onChange} id={id}
              className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 h-11">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;