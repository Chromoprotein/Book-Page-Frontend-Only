import { useBooksActions } from '../contexts/BookContext';
import { useState, useCallback } from 'react';

export default function useSort() {
  const { dispatch } = useBooksActions();

  // The state of the sorting option
  const [sortOption, setSortOption] = useState('Title A-Z');

  const handleSort = useCallback((e) => {
    setSortOption(e.target.value);
  }, []);

  const handleSortRun = useCallback(() => {
    dispatch({ type: 'SORT', payload: { sortOption } });
  }, [sortOption, dispatch])

  return { sortOption, handleSort, handleSortRun, setSortOption }
}