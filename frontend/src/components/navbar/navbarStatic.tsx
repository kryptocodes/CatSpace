import React from 'react'
import { Button } from '../button/button'

import NextLink from 'next/link'

export type navbarStaticProps = {
    Link?: string;
    bgColor?: string;
    text?: string;
}

export const NavbarStatic: React.FC<navbarStaticProps> = ({ Link = "#",bgColor,text = "Log in" }) => {
    const CN = "relative border-b-2 bg-white rounded-b-3xl"
    return (
        <>
            <div className={`${bgColor} ${CN}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex  justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NextLink href="/">
                                <img loading="lazy" draggable="false" className="h-8 lg:h-12 w-auto sm:h-10" src="https://img.stickers.cloud/packs/8870de0b-34e7-4d6b-8c66-6d70742dcdb2/webp/990c4d76-d2c1-4385-92cc-6e192be723f0.webp" alt="" />
                            </NextLink>
                        </div>
                        <div className="flex justify-end lg:w-0 lg:flex-1">
                            <NextLink href={Link}>
                                <Button size="sm" className="shadow-none text-sm ">{text}</Button>
                            </NextLink>
                         </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

