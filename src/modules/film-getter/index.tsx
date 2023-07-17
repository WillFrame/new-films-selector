import React, {memo, useState} from 'react';

import {Component} from './types';
import {Wrapper} from './styles';
import {Button} from 'antd';
import {getRandomInt, getSmartRandomFilm} from './utils';
import {DataType} from '../main-content/types';
import CurrentFilmModal from '../current-film-modal';

const FilmGetter: Component = ({selectedFilms}) => {
    const [currentFilm, setCurrentFilm] = useState<DataType>();
    const isDisabled = !selectedFilms?.length;

    const getRandomFilm = () => {
        if (selectedFilms) {
            setCurrentFilm(selectedFilms[getRandomInt(selectedFilms?.length)]);
        }
    };

    const getSmartRandom = () => {
        if (selectedFilms) {
            setCurrentFilm(getSmartRandomFilm(selectedFilms));
        }
    };

    return (
        <Wrapper>
            <Button
                size="large"
                disabled={isDisabled}
                onClick={getRandomFilm}
            >
                Полный рандом
            </Button>
            <Button
                size="large"
                type="primary"
                disabled={isDisabled}
                onClick={getSmartRandom}
            >
                Умный рандом
            </Button>
            <CurrentFilmModal
                currentFilm={currentFilm}
                setCurrentFilm={setCurrentFilm}
            />
        </Wrapper>
    );
};

export default memo(FilmGetter);
