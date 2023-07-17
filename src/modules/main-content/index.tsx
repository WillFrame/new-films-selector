import React, {useMemo, useState} from 'react';

import {Component, DataType} from './types';
import {TableWrapper, Wrapper} from './styles';
import {Table} from 'antd';
import {columns} from './consts';
import {getFilms, getGenres} from './utils';
import FilmGetter from '../film-getter';

const MainContent: Component = ({films}) => {
    const [selectedFilms, setSelectedFilms] = useState<DataType[]>();
    const data = getFilms(films);
    
    const rowSelection = {
        onChange: (_: React.Key[], selectedRows: DataType[]) => {
            setSelectedFilms(selectedRows);
        },
    };

    const columnsWithFilters = useMemo(() => {
        const newData = columns;
        newData[1]['filters'] = getGenres(data);
        return data.length ? newData : undefined;
    }, [data]);

    return (
        <Wrapper>
            <TableWrapper>
                <Table
                    rowSelection={rowSelection}
                    columns={columnsWithFilters || columns}
                    dataSource={data}
                    pagination={false}
                    showSorterTooltip={false}
                />
            </TableWrapper>
            <FilmGetter selectedFilms={selectedFilms} />
        </Wrapper>
    );
};

export default MainContent;
