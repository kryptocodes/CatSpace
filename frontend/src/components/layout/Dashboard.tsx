import React from 'react'

interface DashboardProps {
    username?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username="niku" }) => {
    const Board = () => (
          <ul className="list-reset flex">
                    <li className="text-center py-5 border-b-2 border-solid border-transparent border-teal">
                        <a href="#" className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-lg font-bold tracking-tight mb-1">{`@${username}`}</div>
                                    </a>
                                </li>
                            </ul>
    )
    return (
        <div className="">
            <div className="mb-32">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tailwind_bg.jpg" alt="" className="w-full h-72"/>
                <div className="bg-white shadow">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
                         <div className=" w-full lg:w-1/4">
                            <img src="https://i.guim.co.uk/img/media/8a13052d4db7dcd508af948e5db7b04598e03190/0_294_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bcaa4eed2c1e6dab61c41a61e41433d9" className="rounded-full h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24" />
                     </div>
                        <div className="w-full lg:w-1/2 ">
                            <Board/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center grid-cols-3 divide-x">
                <div>
                 
                </div>
                <div>
                    <h1>No Post</h1>
                </div>
                <div></div>
            </div>
            </div>
        );
}

export default Dashboard