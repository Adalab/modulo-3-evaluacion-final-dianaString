import { v4 as uuidv4 } from 'uuid';

const callToApi = (LINK) => {
    return fetch(LINK)
        .then(response => response.json())
        .then(dataApi => {
            const moviesData = dataApi.map((movie) => {
                return {
                    id: uuidv4(),
                    poster: movie.poster,
                    name: movie.movie,
                    phrase: movie.full_line,
                    year: movie.year,
                    audio: movie.audio,
                    director: movie.director,
                };
            });
            return moviesData;
        });
};

export default callToApi;