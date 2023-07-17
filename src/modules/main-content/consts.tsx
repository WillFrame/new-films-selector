import React from 'react';
import {ColumnsType} from 'antd/es/table';
import {DataType, EDataType} from './types';
import {Tag} from 'antd';

export const COLON = ':';
export const MINUTES = 60;

export const columns: ColumnsType<DataType> = [
    {
        title: 'Имя',
        dataIndex: EDataType.Name,
        key: EDataType.Name,
    },
    {
        title: 'Жанр',
        dataIndex: EDataType.Genre,
        key: EDataType.Genre,
        render: (tags: string) => (
            <>
                {tags.split(', ').map((tag, index) => 
                    <Tag color="blue" key={index}>{tag}</Tag>,
                )}
            </>
        ),
        onFilter: (value: string | number | boolean, record) => record[EDataType.Genre].includes(value.toString()),
    },
    {
        title: 'Год',
        dataIndex: EDataType.Year,
        key: EDataType.Year,
        sorter: (a, b) => a[EDataType.Year] - b[EDataType.Year],
    },
    {
        title: 'Оценка',
        dataIndex: EDataType.Rating,
        key: EDataType.Rating,
        sorter: (a, b) => a[EDataType.Rating] - b[EDataType.Rating],
    },
    {
        title: 'Длительность',
        dataIndex: EDataType.Duration,
        key: EDataType.Duration,
        sorter: (a, b) => {
            const arrA = a[EDataType.Duration].split(COLON).map(item => Number(item));
            const arrB = b[EDataType.Duration].split(COLON).map(item => Number(item));
            return (arrA[0] * MINUTES + arrA[1]) - (arrB[0] * MINUTES + arrB[1]);
        },
    },
];
