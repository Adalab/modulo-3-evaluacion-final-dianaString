import { v4 as uuidv4 } from 'uuid';

const callToApi = (LINK) => {
    return fetch(LINK)
        .then(response => response.json())
        .then(dataApi => {
            const scenesData = dataApi.map((scene) => {
                return {
                    id: uuidv4(),
                    poster: scene.poster,
                    name: scene.movie,
                    phrase: scene.full_line,
                    year: scene.year,
                    audio: scene.audio,
                    director: scene.director,
                };
            });
            return scenesData;
        });
};

export default callToApi;