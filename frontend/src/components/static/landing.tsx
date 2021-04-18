import React from 'react'
import styled from "@emotion/styled"
import { Button } from '../button/button'
import NextLink from 'next/link'

interface landingProps {

}

const Cover = styled.section`
    background-image: ${() => `url(${require('../../assets/image/kat.webp')})`};
    background-size: cover;
    background-position: top;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        background-image: unset !important;
    }
`

const CoverWrap = styled.div`
    width: 100%;
    min-height: 100vh;
`

const landing: React.FC<landingProps> = ({}) => {
        return (
          <>
            <Cover>
              <CoverWrap>
              <main className="pt-32 mx-auto max-w-7xl px-4">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Cat Space</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Be it a picture of a cute kitten in a cup, or an purr-rr picture. CatSpace is the purrfect platform to discover cat content
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <NextLink href="/signup">
                        <Button size="small" ring="small" className="text-lg">Sign up</Button>
              </NextLink>
          </div>
        </div>
      </main>
      </CoverWrap>
      </Cover>
            </>
        );
}

export default landing