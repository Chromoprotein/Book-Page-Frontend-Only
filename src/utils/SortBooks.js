export function sortBooks(books, criteria, reversed) {
    let sortedBooks = books.sort((a, b) => {
        if (criteria === 'author') {
            // Split the author names by space and take the last element as the last name
            const lastNameA = a[criteria].split(' ').pop().toUpperCase();
            const lastNameB = b[criteria].split(' ').pop().toUpperCase();
            // Compare the last names
            if (lastNameA < lastNameB) return -1;
            if (lastNameA > lastNameB) return 1;
        }
        else if (criteria === 'title') {
            // Remove unnecessary a, an, or the from the book title
            const getTitleWithoutArticle = (title) => {
                return title.replace(/^(a |an |the )/i, '').toUpperCase();
            };
            const nameA = getTitleWithoutArticle(a[criteria]);
            const nameB = getTitleWithoutArticle(b[criteria]);
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        } else if (criteria === 'stars') {
            return b[criteria] - a[criteria];
        }
        return 0;
    });

    return reversed ? sortedBooks.reverse() : sortedBooks; // Reverse the sorted array if needed
};