import React from 'react'
import { Button } from '../components/button/button'

interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
    return (
      <>
       <Button className={"text-white"}>Hello world</Button>
        <p className="mt-5 h-screen text-center text-5xl">Hello world</p>
      </>
    );
}

export default index