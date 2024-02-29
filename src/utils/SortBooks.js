export const sortBooks = (books, sortOption) => {
    return books.sort((a, b) => {
        let valA, valB;

        const getTitleWithoutArticle = (title) => {
            return title.replace(/^(a |an |the )/i, '').toUpperCase();
        };

        switch (sortOption) {
            case 'title-asc':
            case 'title-desc':
                valA = getTitleWithoutArticle(a.title);
                valB = getTitleWithoutArticle(b.title);
                break;
            case 'author-asc':
            case 'author-desc':
                valA = a.author.split(' ').pop().toUpperCase(); // Assuming sorting by last name
                valB = b.author.split(' ').pop().toUpperCase();
                break;
            case 'rating-asc':
                return a.stars - b.stars;
            case 'rating-desc':
                return b.stars - a.stars;
            default:
                return 0;
        }

        if (valA < valB) return sortOption.endsWith('desc') ? 1 : -1;
        if (valA > valB) return sortOption.endsWith('desc') ? -1 : 1;
        return 0;
    });
};