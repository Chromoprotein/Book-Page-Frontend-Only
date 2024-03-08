export const sortBooks = (books, sortOption) => {
    return books.sort((a, b) => {
        let valA, valB;

        const getTitleWithoutArticle = (title) => {
            return title.replace(/^(a |an |the )/i, '').toUpperCase();
        };

        switch (sortOption) {
            case 'Title A-Z':
            case 'Title Z-A':
                valA = getTitleWithoutArticle(a.title);
                valB = getTitleWithoutArticle(b.title);
                break;
            case 'Author A-Z':
            case 'Author Z-A':
                valA = a.author.split(' ').pop().toUpperCase(); // Assuming sorting by last name
                valB = b.author.split(' ').pop().toUpperCase();
                break;
            case 'Rating 1-5':
                return a.stars - b.stars;
            case 'Rating 5-1':
                return b.stars - a.stars;
            default:
                return 0;
        }

        if (valA < valB) return sortOption.endsWith('Z-A' || '1-5') ? 1 : -1;
        if (valA > valB) return sortOption.endsWith('Z-A' || '1-5') ? -1 : 1;
        return 0;
    });
};