const baseUrl = "https://www.googleapis.com/books/v1/volumes/"
const max_result = 20

const getBooks = async (searchQuery) => {
    const params = {
        printType: 'books',
        maxResults: max_result,
        startIndex: searchQuery.page * max_result,
        q: searchQuery.query
    }
    const url = new URL(baseUrl);
    Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
    );
    
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    return response.json();
}

export { getBooks, }