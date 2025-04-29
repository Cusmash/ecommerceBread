import { JSX } from 'react';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

export const Checkbox = ({ label, checked, onChange, className = '' }: CheckboxProps): JSX.Element => {
  return (
    <div className="mb-4">
        {label && <label className="block font-semibold mb-2">{label}</label>}
        <label className={`inline-flex items-center space-x-2 ${className}`}>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="form-checkbox h-3.5 w-3.5 text-primary focus:ring-0"
        />
        <span className="text-sm">{label}</span>
        </label>
    </div>
  );
};
