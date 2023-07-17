import {FC} from 'react';
import {DataType} from '../main-content/types';

type Props = {
    selectedFilms?: DataType[];
};

export type Component = FC<Props>;
