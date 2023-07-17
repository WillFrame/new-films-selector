import {Dispatch, FC, SetStateAction} from 'react';
import {FILE} from './consts';
import {TFilms} from '../page/types';

export type TFormValues = {
    [FILE]: FileList;
};

type Props = {
    setFilms: Dispatch<SetStateAction<TFilms | undefined>>;
    isOpen: boolean;
};

export type Component = FC<Props>;
