import styled from '@emotion/styled';
import {Modal} from 'antd';

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding: 30px;
`;

export const StyledModal = styled(Modal)`
    width: 420px !important;
`;

export const FileInput = styled.input`
    width: max-content;
`;

export const StyledTitle = styled.h1`
    margin: 0;
`;
