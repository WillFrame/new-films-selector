import moment from 'moment';
import {DataType} from '../main-content/types';
import {COLON, MINUTES} from '../main-content/consts';

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

export const getFilmValue = (film: DataType, date: number) => {
    const durationItems = film?.duration.split(COLON).map(item => Number(item));
    const duration = durationItems[0] * MINUTES + durationItems[1];
    return (film.rating * 10) + Math.floor((40 + film.year - date) / 2) + Math.floor((30 - (duration / 6)));
};

export const getSmartRandomFilm = (films: DataType[]) => {
    const date = Number(moment().format('YYYY'));
    const filmsValues = films
        .map(item => getFilmValue(item, date))
        .map((_, index, array) => {
            let value = 0;
            for (let i = 0; i <= index; i++) {
                value += array[i];
            }

            return value;
        });

    const randomInt = getRandomInt(filmsValues[filmsValues.length - 1]);

    for (let i = 0; i < filmsValues.length; i++) {
        if (filmsValues[i] >= randomInt) {
            return films[i];
        }
    }
};
