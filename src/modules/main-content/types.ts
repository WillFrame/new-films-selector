import {FC} from 'react';
import {TFilms} from '../page/types';

type Props = {
    films?: TFilms;
};

export enum EDataType {
    Key = 'key',
    Name = 'name',
    Genre = 'genre',
    Year = 'year',
    Rating = 'rating',
    Duration = 'duration',
}

export interface DataType {
    [EDataType.Name]: string;
    [EDataType.Genre]: string;
    [EDataType.Year]: number;
    [EDataType.Rating]: number;
    [EDataType.Duration]: string;
}

export type Data = {
    key: number;
    name: string;
    genre: string;
    year: number;
    rating: number;
    duration: string;
};

export type Component = FC<Props>;
