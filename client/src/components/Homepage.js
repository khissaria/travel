import React from 'react';
import di from '../images/di.png'
import disc from '../images/disc.png'
import ideas from '../images/idea.png';


const Homepage = () => {
    

    return (

        <div className="w-full border-l-2 px-4 ">
            <div>
                <div className="p-0 pt-12 md:pt-1 bg-purple-400 w-full md:h-80 rounded-xl text-center flex md:flex-row flex-col justify-center items-center">
                    <div className="text-white font-mono  ml-16 text-left">
                        <h1 className="md:text-4xl text-3xl font-semibold">A platfom to know about amazing things you could do in amazing places.</h1>
                    </div>
                    <img src={ideas} alt="cover" className=" md:h-80 mr-2 ml-auto" />
                </div>
                <div className="flex flex-row flex-wrap justify-center md:justify-start m-4">
                    <div className="rounded m-2 p-6 bg-purple-100 text-5xl opacity-80">🚀</div>
                    <div className="rounded m-2 p-6 bg-pink-100 text-5xl opacity-80">‍💬</div>
                </div>
                <div className="mt-20 ">
                    <h1 className="text-4xl text-center mb-10 font-semibold">How it works?</h1>
                    <div className="flex flex-col justify-center mb-40 md:mb-4">
                        <div className="flex flex-col md:flex-row px-10 pt-24  my-2">
                            <img src={disc} alt="review" className="md:w-1/2" />
                            <div className="md:m-12 my-4">
                                <h1 className="text-4xl my-2 font-bold">Add a location and get started</h1>
                                <p className="text-xl ">Add a city you live or are travelling to and let the community come together and help you get your itinerary created.  </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row px-10 pt-24 my-2">
                            <div className="md:m-12 my-4">
                                <h1 className="text-4xl my-2 font-bold">Discuss things2do</h1>
                                <p className="text-xl">Suggest things2do for a location and be a part in amazing travel experiences of hundreds of people.</p>
                            </div>
                            <img src={di} alt="discuss" className="md:w-1/2" />
                        </div>

                        <div className="border p-10 rounded md:m-10 m-4 flex">
                            <div className=" md:text-left flex md:flex-row flex-col">
                                <div className="m-4">
                                    <h1 className="text-2xl font-semibold">Developed by Kaushal Hissaria.</h1>
                                    <p className="text-xl py-2">Design adaptation from Rutik Wankhade -
                                        <a href='https://themakersclub.vercel.app/' alt='rutik' target='_blank'>
                                            <span>themakersclub</span></a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Homepage;
