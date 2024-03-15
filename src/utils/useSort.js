import { useBooksActions } from '../contexts/BookContext';
import { useState } from 'react';

export default function useSort() {
  const { dispatch } = useBooksActions();

  const [sortOption, setSortOption] = useState('');
  // Sort dispatch action

  const handleSort = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    dispatch({ type: 'SORT', payload: { newSortOption } });
  };

  return { sortOption, handleSort, setSortOption }
}