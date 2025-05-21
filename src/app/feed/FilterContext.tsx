import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FilterState = {
  positions: string[];
  age: string | null;
};

export type FilterContextType = {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  removeFilter: (type: 'positions' | 'age', value?: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function useFilterContext() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilterContext must be used within FilterProvider');
  return ctx;
}

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({ positions: [], age: null });

  function removeFilter(type: 'positions' | 'age', value?: string) {
    if (type === 'positions' && value) {
      setFilters(f => ({ ...f, positions: f.positions.filter(p => p !== value) }));
    } else if (type === 'age') {
      setFilters(f => ({ ...f, age: null }));
    }
  }

  return (
    <FilterContext.Provider value={{ filters, setFilters, removeFilter }}>
      {children}
    </FilterContext.Provider>
  );
} 