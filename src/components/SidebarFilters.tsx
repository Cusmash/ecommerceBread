import { useState } from 'react';
import { Filters } from '../types/product';
import { CheckboxGroup } from './ui/CheckboxGroup';
import { PriceRangeCheckboxGroup } from './ui/PriceRangeCheckboxGroup';

type SidebarFiltersProps = {
  onFilterChange: (filters: Filters) => void;
  onClearFilters: () => void;
};

const priceRanges = [
  { label: '< 20', from: 0, to: 20 },
  { label: '20 - 50', from: 20, to: 50 },
  { label: '50 - 100', from: 50, to: 100 },
  { label: '> 100', from: 100, to: null },
];

export const SidebarFilters = ({ onFilterChange, onClearFilters }: SidebarFiltersProps) => {
  const [filters, setFilters] = useState<Filters>({});
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const applyFilters = () => {
    let priceFrom: number | undefined = undefined;
    let priceTo: number | undefined = undefined;
    if(filters.onSale === false) {
      
    }

    if (selectedPriceRanges.length > 0) {
      const selectedRanges = priceRanges.filter((r) => selectedPriceRanges.includes(r.label));

      priceFrom = Math.min(...selectedRanges.map((r) => r.from));
      const validTos = selectedRanges.map((r) => r.to).filter((to) => to !== null) as number[];
      priceTo = validTos.length > 0 ? Math.max(...validTos) : undefined;
    }

    onFilterChange({
      ...filters,
      priceFrom,
      priceTo,
    });
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

      <PriceRangeCheckboxGroup
        options={priceRanges}
        selectedOptions={selectedPriceRanges}
        onChange={setSelectedPriceRanges}
        label="Precio"
      />

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="onSale"
            checked={filters.onSale || false}
            onChange={(e) => 
              setFilters((prev) => {
                const { onSale, ...rest } = prev;
                if (e.target.checked) {
                  return { ...rest, onSale: true };
                } else {
                  return rest;
                }
              })
            }
            className="mr-2"
          />
          En oferta
        </label>
      </div>

      <button
        onClick={applyFilters}
        className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition mb-2"
      >
        Aplicar filtros
      </button>
{/* 
      <button
        onClick={onClearFilters}
        className="bg-gray-500 text-white w-full py-2 rounded hover:bg-gray-600 transition"
      >
        Limpiar filtros
      </button> */}
    </aside>
  );
};
