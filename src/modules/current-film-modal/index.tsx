import React from 'react';
import {Modal} from 'antd';
import {Component} from './types';
import {Wrapper, TitleText, SmallText} from './styles';

const CurrentFilmModal: Component = ({currentFilm, setCurrentFilm}) => {
    return (
        <Modal
            open={!!currentFilm}
            centered
            footer={false}
            onCancel={() => setCurrentFilm(undefined)}
        >
            <Wrapper>
                <TitleText>{currentFilm?.name}</TitleText>
                <SmallText>Жанры: {currentFilm?.genre}</SmallText>
                <SmallText>Рейтинг: {currentFilm?.rating}</SmallText>
                <SmallText>Год: {currentFilm?.year}</SmallText>
                <SmallText>Длительность: {currentFilm?.duration}</SmallText>
            </Wrapper>
        </Modal>
    );
};

export default CurrentFilmModal;
