import React, { useEffect } from 'react'
import { usePostsQuery } from '../../generated/graphql';
import { Button } from '../button/button';
import AddPhoto from './AddPhoto';
import Card from './Card';
import Stories from './Stories';

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({ }) => {
    const [{ data, fetching }] = usePostsQuery()
     useEffect(() => {
         if (!fetching) {
            console.log(data?.posts)
        }
    }, [fetching,data])
    return (
        <>
            <div className="container mx-auto">
                <AddPhoto />
                <div className="grid grid-cols-4">
                    <div>

                    </div>
                    <div className="col-span-4 lg:col-span-2 md:col-span-12 w-full mx-auto">
            {!fetching && data.posts.map((v, i) =>
                <>
                
                <div className="p-2">
                    <Card data={v} />
                </div>
                </>
                        )}
                        </div>
           <div className="lg:order-2 justify-content-end flex ml-auto md:order-1 order-1">
                        <Stories />
                        </div>
                </div>
                </div>
        </>
        
        );
}

export default Home