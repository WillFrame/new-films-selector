import {Dispatch, FC, SetStateAction} from 'react';
import {DataType} from '../main-content/types';

type Props = {
    currentFilm?: DataType;
    setCurrentFilm: Dispatch<SetStateAction<DataType | undefined>>;
};

export type Component = FC<Props>;
