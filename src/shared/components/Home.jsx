import React from 'react'
import Marquee from 'react-fast-marquee';
import { AiFillCalendar } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Home() {

    const date = [
        {
            title: "Abstract Submission Deadline",
            date: "08-05-2025"
        },
        {
            title: "Notification of Acceptance",
            date: "19-05-2025"
        },
        {
            title: "Conference Registration Deadline",
            date: "22-05-2025"
        },
        {
            title: "Conference Event Dates",
            date: "28-05-2025"
        },

    ]

    const imageItems = [
        { src: '/images/associates/1.png', },
        { src: '/images/associates/2.jpg', },
        { src: '/images/associates/3.jpg', },
        { src: '/images/associates/4.jpg', },
        { src: '/images/associates/5.jpg', },
        { src: '/images/associates/6.jpg', },
        { src: "/images/associates/scopus.png", },
        { src: "/images/associates/8.jpg", },
        { src: "/images/associates/9.jpg", },
        { src: "/images/associates/10.jpg", },
        { src: "/images/associates/11.jpg", },
    ];

    return (
        <div >
            <section>
                <div className="flex lg:flex-row flex-col lg:h-screen lg:border-b-2 border-[#881B1B]">
                    <div className="xl:block hidden flex-55"><img src="/images/home1.jpg" alt=" image" className='lg:h-screen ' /></div>
                    <div className="flex flex-col flex-50  justify-center items-center mx-auto  space-y-2 px-4 mt-32 lg:mt-0 ">
                        <div className="max-w-[500px]"> <img src="/images/ICSCENT lOGO.png" alt="image" className="" /></div>
                        <h2 className="  text-lg poppins-medium text-center">Bogor, Indonesia</h2>
                        <p className=" lg:text-lg text-base inter-medium lg:text-center text-justify leading-[30px]  ">The International Conference on Science, Engineering and Technology brings together global innovators to exchange knowledge, showcase research, and explore groundbreaking advancements across diverse scientific and engineering fields.</p>
                        <div className="flex sm:flex-row flex-col xl:gap-20 gap-5 lg:mt-5 mt-0 ">
                            {/* <Link to="/contact-us">
                                <div className="bg-[#881B1B] text-white rounded-lg duration-300 group overflow-hidden">
                                    <button className='lg:text-lg text-base inter-semibold py-2 px-5 cursor-pointer flex gap-2 items-center group-hover:scale-110 duration-300'>Contact Us <FaArrowRightLong className='group-hover:translate-x-1 duration-300 '/></button>
                                </div>
                            </Link> */}
                            <Link to="/paper-submission">
                                <div className="bg-[#881B1B] text-white rounded-lg duration-300 group overflow-hidden">
                                    <button className='lg:text-lg text-base inter-semibold py-2 px-4 cursor-pointer flex gap-2 items-center group-hover:scale-110 duration-300'>Register Here <FaArrowRightLong className='group-hover:translate-x-1 duration-300 ' /></button>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </section>



            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pt-15 pt-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className=" flex items-center  justify-center ">
                        <img src="/images/aboutus.jpg" alt="aboutus" className="max-w-[505px] mx-auto rounded-[35px] border-4 border-[#881B1B] lg:block hidden" />
                    </div>
                    <div className="space-y-5 lg:space-y-0 flex  flex-col  justify-center">
                        <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">About Us</h2>
                        <div className=" flex items-center   justify-center max-w-[400px] mx-auto ">
                            <img src="/images/aboutus.jpg" alt="aboutus" className=" rounded-[35px] border-4 border-[#881B1B] block lg:hidden " loading='lazy' />
                        </div>
                        <div className="space-y-3 mt-4  ">
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Science, Engineering and Technology is a leading global forum uniting researchers, academicians, and industry professionals to exchange knowledge, present innovations, and explore solutions in science, engineering, and technology.</p>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">ICSCENT provides opportunities for participants to engage in interactive discussions, present research findings, and network with global experts. It encourages interdisciplinary collaboration to address real-world challenges and promote sustainable, impactful technological advancements.</p>
                        </div>

                        <div className="lg:mt-5">
                            <div className="space-y-2">
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#881B1B] ">Global Platform</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Brings together researchers, academicians, industry professionals, and innovators from around the world.</p></div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#881B1B] ">Knowledge Exchange</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Encourages sharing of latest research findings, technological advancements, and innovative solutions.</p></div>
                                </div>

                            </div>

                        </div>
                        <Link to="/about" className='flex justify-end items-end'>
                            <div className="bg-[#881B1B] w-fit  text-white rounded-lg duration-300 lg:mt-4 mt-2 group overflow-hidden">
                                <button className='lg:text-lg text-base inter-bold py-2 px-4 cursor-pointer flex gap-2 items-center group-hover:scale-110 duration-300'>Read more <FaArrowRightLong className='group-hover:translate-x-1 duration-300 ' /></button>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 lg:py-10 xl:py-10 2xl:py-16 ">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#881B1B] to-transparent"></div>
            </div>



            <section className="max-w-[1400px] mx-auto  2xl:px-0 px-4 lg:pb-15 pb-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className="space-y-5 lg:space-y-0">
                        <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">Our Mission</h2>
                        <div className=" flex items-center   justify-center max-w-[400px] mx-auto ">
                            <img src="/images/mission.jpg" alt="mission" className=" rounded-[35px] border-4 border-[#881B1B] block lg:hidden " loading='lazy' />
                        </div>

                        <div className="space-y-3 mt-4">
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Our mission is to create a dynamic platform for researchers, scientists, engineers, and academicians to share their latest findings, exchange innovative ideas, and foster collaborative partnerships. The International Conference on Science, Engineering and Technology aims to bridge the gap between research and real-world applications by encouraging interdisciplinary discussions and promoting cutting-edge technological advancements that address global challenges.</p>
                        </div>

                        <div className="mt-5">
                            <div className="space-y-2">
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#881B1B] ">Networking Opportunities</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Facilitate meaningful professional connections that may lead to future collaborations and projects.</p></div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#881B1B] ">Cutting-Edge Insights</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Highlight the latest trends, tools, and technologies shaping the future of science and engineering.</p></div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#881B1B] ">Publication Opportunities</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Offer avenues for high-quality research papers to be published in reputed journals and conference proceedings.</p></div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className=" flex items-center  justify-center ">
                        <img src="/images/mission.jpg" alt="mission" className="max-w-[505px] mx-auto rounded-[35px] border-4 border-[#881B1B] lg:block hidden" />
                    </div>
                </div>
            </section>

            <div className="max-w-[1450px] mx-auto">
                <div className=" lg:mt-10    px-4">
                    <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px] text-center">Indexed Journals</h2>
                    <p className="text-center inter-medium opacity-85 text-[18px] leading-[30px] max-w-[1000px] mx-auto mt-4">The Selective accepted papers of our International Conference on Science, Engineering and Technology will be recommended to publish in the following index & publisher Journals.</p>
                </div>
                <Marquee direction='right'  pauseOnClick pauseOnHover>
                    <div className="  flex  pb-10 pt-10 ">
                        {imageItems.map((item, index) => (
                            <div key={index} className=" flex justify-center mr-10  py-5" >
                                <img src={item.src} alt="images" className=" w-[300px] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duratiom-300" />
                            </div>
                        ))}
                    </div>
                </Marquee>

            </div>


        </div>
    )
}

export default Home