import { useState } from 'react';
import { Filters } from '../types/product';
import { CheckboxGroup } from './ui/CheckboxGroup';

type SidebarFiltersProps = {
  onFilterChange: (filters: Filters) => void;
};

export const SidebarFilters = ({ onFilterChange }: SidebarFiltersProps) => {
  const [filters, setFilters] = useState<Filters>({});

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <aside className="w-full md:w-1/4 p-4 border-r">
      <h3 className="text-xl font-bold mb-4">Filtros</h3>

      <CheckboxGroup
        options={['GLUTEN', 'GLUTEN_FREE', 'VEGAN', 'KETO']}
        selectedOptions={filters.type || []}
        onChange={(selected) => setFilters((prev) => ({ ...prev, type: selected }))}
        label="Tipo de Pan"
      />

      <CheckboxGroup
        options={['CHOCOLATE', 'CANELA', 'VAINILLA', 'FRESA', 'PLATANO', 'NUEZ', 'MANTEQUILLA']}
        selectedOptions={filters.flavor || []}
        onChange={(selected) => setFilters((prev) => ({ ...prev, flavor: selected }))}
        label="Sabor"
      />

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="onSale"
            checked={filters.onSale || false}
            onChange={(e) => setFilters((prev) => ({ ...prev, onSale: e.target.checked }))}
            className="mr-2"
          />
          En oferta
        </label>
      </div>

      <button
        onClick={applyFilters}
        className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition"
      >
        Aplicar filtros
      </button>
    </aside>
  );
};
