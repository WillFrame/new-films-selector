import React, {useState} from 'react';
import FileInputForm from '../file-input-form';
import {Component, TFilms} from './types';
import {Wrapper} from './styles';
import MainContent from '../main-content';

const Page: Component = () => {    
    const [films, setFilms] = useState<TFilms>();

	return (
        <Wrapper>
            <FileInputForm setFilms={setFilms} isOpen={!films} />
            <MainContent films={films} />
        </Wrapper>
	);
};

export default Page;
