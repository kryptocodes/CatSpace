import React from 'react'
import { NavbarStatic } from '../components/navbar/navbarStatic';
import Landing from '../components/static/landing'



const index = ({}) => {
    return (
      <>
        <div style={{ background: "#e9e4e0" }}>
          <NavbarStatic/>
          <Landing />
        </div>
      </>
    );
}

export default index