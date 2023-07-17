import moment from 'moment';
import {TFilms} from '../page/types';
import {Data, EDataType} from './types';

export const getGenres = (data: Data[]) => data
    .map(({genre}) => genre.split(', '))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(value => ({text: value, value}));

export const getFilms = (data?: TFilms) => data
    ? (
        data?.slice(1).map((item, index) => ({
            key: index,
            [EDataType.Name]: item[0],
            [EDataType.Genre]: item[1],
            [EDataType.Year]: item[2],
            [EDataType.Rating]: item[3],
            [EDataType.Duration]: moment(item[4]).utc().format('HH:mm'),
        }))
    ) : [];
