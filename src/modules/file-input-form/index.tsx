import React, {memo} from 'react';
import {FileInput, StyledModal, Wrapper, StyledTitle} from './styles';
import {Component, TFormValues} from './types';
import {useForm} from 'react-hook-form';
import readXlsxFile from 'read-excel-file';
import {FILE} from './consts';
import {Button} from 'antd';
import {TFilms} from '../page/types';

const FileInputForm: Component = ({setFilms, isOpen}) => {
    const {register, handleSubmit} = useForm<TFormValues>();

    const onSubmit = async (data: TFormValues) => {
        // eslint-disable-next-line no-console
        const result = await readXlsxFile(data?.file[0]).then((rows) => {
            return rows;
        });
        setFilms(result as TFilms);
    };

    return (
        <StyledModal
            open={isOpen}
            footer={null}
            centered
            closeIcon={false}
        >
            <Wrapper onSubmit={handleSubmit(onSubmit)}>
                <StyledTitle>Выберите файл xml</StyledTitle>
                <FileInput type="file" {...register(FILE)} />
                <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                >
                    Подтвердить
                </Button>
            </Wrapper>
        </StyledModal>
    );
};

export default memo(FileInputForm);
