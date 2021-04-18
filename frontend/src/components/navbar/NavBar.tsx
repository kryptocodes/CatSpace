import React from 'react'
import AboutIcon from '../../assets/icons/AboutIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import { SearchBar } from '../input/search'

interface NavBarProps {

}

const SVGICONS = [
    { value: <HomeIcon/>},
    { value: <AboutIcon /> },
    { value: <ProfileIcon/>}
]

const NavBar: React.FC<NavBarProps> = ({ }) => {
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
                                <div className="p-4">
                                    {v.value}
                                </div>
                            )}
                            
                    </div>
                        </div>
                    </div>
                </div>
        </>);
        }

export default NavBar