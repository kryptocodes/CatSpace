import React from 'react'
import AboutIcon from '../../assets/icons/AboutIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import { SearchBar } from '../input/search'


import NextLink from 'next/link'
import { useLogoutMutation } from '../../generated/graphql'



interface NavBarProps {

}

const SVGICONS = [
    {
        value: <HomeIcon />,
        link: '/home'
    },
    {
        value: <AboutIcon />,
     link: '/home'},
    {
        value: <ProfileIcon />,
     link: '/home'}
]

const NavBar: React.FC<NavBarProps> = ({ }) => {
     
    const [, logout] = useLogoutMutation();
    const CN = "relative bg-white border-b-2 bg-white rounded-b-3xl"
    return (<>
         <div className={`${CN}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex  justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
                        <div className="flex justify-center lg:w-0 lg:flex-1">
                            <SearchBar className="w-1/2"/>
                    </div>
                    <div className="flex mx-auto">
                       
                        {SVGICONS.map((v) =>
                            <>
                                 <NextLink href={v?.link}>
                                <div className="p-4">
                                    {v.value}
                                    </div>
                                   </NextLink> 
                                </>
                        )}
                        
                        <div className="p-4">
                            <button onClick={async () => {
                            logout()
          }}
       >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
                            </button>

                        </div>
                            
                    </div>
                        </div>
                    </div>
                </div>
        </>);
        }

export default NavBar