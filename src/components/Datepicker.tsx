import React, {ChangeEvent} from 'react';

interface DatepickerProps {
  id: string
  label: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean

}

const currentDate = new Date().toISOString().split('T')[0]

function Datepicker(props: DatepickerProps) {
  const {id, label, className, onChange, required} = props
  return (
    <div className={className}>
      <label htmlFor={id}
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}:</label>
      <input
        required={required}
        name={id}
        max={currentDate}
        onChange={onChange}
        type="date"
        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 h-11"
        placeholder="Select date"/>

    </div>
  );
}

export default Datepicker;