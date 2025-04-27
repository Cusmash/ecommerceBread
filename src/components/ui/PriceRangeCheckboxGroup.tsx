import { JSX } from 'react';

type PriceRange = {
  label: string;
  from: number;
  to: number | null;
};

type PriceRangeCheckboxGroupProps = {
  options: PriceRange[];
  selectedOptions: string[];
  onChange: (updatedSelected: string[]) => void;
  label?: string;
};

export const PriceRangeCheckboxGroup = ({ options, selectedOptions, onChange, label }: PriceRangeCheckboxGroupProps): JSX.Element => {
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
          <label key={option.label} className="inline-flex items-center">
            <input
              type="checkbox"
              value={option.label}
              checked={selectedOptions.includes(option.label)}
              onChange={() => handleCheckboxChange(option.label)}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};
