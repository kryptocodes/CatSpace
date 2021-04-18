import React from 'react'
import styled from "@emotion/styled"

interface WrapperProps {

}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (<>
        <Cover>
            {children}
    </Cover>
        </>);
}
        
const Cover = styled.section`
    background-color: #e9e4e0;
    min-height:100vh;
`

export default Wrapper