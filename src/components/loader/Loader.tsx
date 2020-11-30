import React from 'react';
import styled from "styled-components";
import ReactLoading from "react-loading";

const LoaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
`;
const Spinner = styled(ReactLoading)`
    position: absolute;
    top: 50%;
    left: 50%;
`

export const Loader = () => {
    return (
        <LoaderWrapper>
            <Spinner type="spin" color="crimson" height={70} width={70} />
        </LoaderWrapper>
    )
}
