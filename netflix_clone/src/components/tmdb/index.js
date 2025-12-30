const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlkYmM3Yjc4YmJhZDZjNjI4NWI3MTI4MTU4MWRhMiIsIm5iZiI6MTc2Njg0MDc2My42NDQsInN1YiI6IjY5NGZkOWJiYzM4YzMxYTJjZjdhYzA5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PYuY3VdjKvm4JpYHm2PaIMb-MxI3-HnrvPdsBAElX1o'; // Use the Read Access Token here
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/day`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.results);
        


        return (data.results)// This will show the list of trending movies
    } catch (error) {
        console.error('Fetch error:', error);
    }
}