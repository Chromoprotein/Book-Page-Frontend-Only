import { sortBooks } from "./SortBooks";

const bookOrganizerReducer= (state, action) => {

    const { type, payload } = action;
    const { query, fuse, newSortOption, bookArray } = payload;

    const { results } = state;

    switch (type) {
    case 'search':
        if (!query) {
            return { ...state, results: [] };
        }
        const searchResults = fuse.search(query).map(result => result.item);
        return { ...state, results: searchResults };

    case 'sort':
        const sortedBooks = sortBooks([...results], newSortOption);
        return { ...state, results: sortedBooks };

    case 'reset':
        return { ...state, results: bookArray };

    default:
        throw new Error(`Unhandled action type: ${type}`);
    }
};
export default bookOrganizerReducer;