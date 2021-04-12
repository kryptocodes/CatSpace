import React from 'react'
import { Button } from '../components/button/button'
import { Input } from '../components/input/input'

interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
    return (
      <>
       <Button>Hello world</Button>
        <p className="mt-5 h-screen text-center bg-kat-primary text-5xl">Hello world</p>
        <Input error="error"/>
      </>
    );
}

export default index