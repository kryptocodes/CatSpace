import React   from 'react'
import Dashboard from '../components/layout/Dashboard';
import Wrapper from '../components/layout/Wrapper';
import NavBar from '../components/navbar/NavBar';
import { isAuth } from '../components/utils/isAuth';
import { useMeQuery } from '../generated/graphql';

interface homeProps {

}

const dashboard: React.FC<homeProps> = ({ }) => {
    const [{ data, fetching }] = useMeQuery()
    isAuth()
    return (
        <>
            <Wrapper>
                <NavBar />
                <Dashboard username={data?.me.username}/>
            </Wrapper>
            </>
        );
}

export default dashboard