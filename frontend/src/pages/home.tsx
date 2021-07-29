import React   from 'react'
import Home from '../components/layout/Home';
import Wrapper from '../components/layout/Wrapper';
import NavBar from '../components/navbar/NavBar';
import { isAuth } from '../components/utils/isAuth';
import { isUser } from '../components/utils/isUser';
import { useMeQuery } from '../generated/graphql';

interface homeProps {

}

const home: React.FC<homeProps> = ({ }) => {
    const [{ data, fetching }] = useMeQuery()
    isAuth()
    return (
        <>
            <Wrapper>
                <NavBar />
                <Home/>
            </Wrapper>
            </>
        );
}

export default home