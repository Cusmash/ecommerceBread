import { JSX } from 'react';

type CheckboxGroupProps = {
  options: string[];
  selectedOptions: string[];
  onChange: (updatedSelected: string[]) => void;
  label?: string;
};

export const CheckboxGroup = ({ options, selectedOptions, onChange, label }: CheckboxGroupProps): JSX.Element => {
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="mb-4">
      {label && <label className="block font-semibold mb-2">{label}</label>}
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
