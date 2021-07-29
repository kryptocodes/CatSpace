import React from 'react'

interface CardProps {
  data:any
}

const Card: React.FC<CardProps> = ({data}) => {
    return (<>
        <div key={data?.id} className=" rounded-lg shadow-lg overflow-hidden border w-full  bg-white mx-auto">
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic"/>
        </div>
            <span className="pt-1 ml-2 font-bold text-sm">{data?.creator?.username }</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
        <img className="w-full bg-cover" src={data?.image }/>
    <div className="px-3 pb-2">
      <div className="pt-2">
        <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">{data?.upvoteCount} likes</span>
      </div>
    
     
    </div>
  </div>
        </>);
        }

export default Card