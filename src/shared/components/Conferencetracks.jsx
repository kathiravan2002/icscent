import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaDatabase, FaHandPointRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoArrowRedoSharp, IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Conferencetracks() {


    const roles = [
        {
            title: 'Artificial Intelligence & Machine Learning',
            duties: [
                'Innovations, applications, and trends in AI, deep learning, and data-driven solutions.'
            ]
        },
        {
            title: 'Computer Science & Information Technology',
            duties: [
                'Software development, cloud computing, cybersecurity, and data analytics.'
            ]
        },
        {
            title: 'Electronics & Communication Engineering',
            duties: [
                'VLSI design, wireless communication, IoT, and embedded systems.'
            ]
        },
        {
            title: 'Mechanical & Industrial Engineering',
            duties: [
                'Manufacturing technologies, robotics, automation, and sustainable design.'
            ]
        },
        {
            title: 'Civil & Environmental Engineering',
            duties: [
                'Smart cities, green construction, structural innovations, and environmental sustainability.'
            ]
        },
        {
            title: 'Energy & Power Systems',
            duties: [
                'Renewable energy, smart grids, and energy-efficient technologies.'
            ]
        },
        {
            title: 'Materials Science & Nanotechnology',
            duties: [
                'Advanced materials, composites, and nanotech applications.'
            ]
        },

        {
            title: 'Applied Physics & Chemistry',
            duties: [
                'Theoretical and experimental advancements in physical and chemical sciences.'
            ]
        },
        {
            title: 'Biomedical Engineering & Health Technologies',
            duties: [
                'Medical devices, healthcare innovations, and bioinformatics.'
            ]
        },
        // {
        //     title: 'Interdisciplinary Innovations',
        //     duties: [
        //         ' Cross-domain research combining science, engineering, and technology for societal impact.'
        //     ]
        // }
    ];
    return (
        <div>

            <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Conference Tracks</h2>
                    </div>
                </div>
            </div>
            {/* <div className=" lg:h-70 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center lg:items-end items-center w-full">
                    <div className=" flex flex-col  lg:mt-10 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Conference Tracks</h2>
                        <h2 className="text-[48px] opacity-10 text-start poppins-bold text-white lg:block hidden">Conference Tracks</h2>
                    </div>
                </div>
            </div> */}

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Science, Engineering and Technology offers a diverse range of specialized tracks designed to foster in-depth discussions and knowledge exchange across multiple disciplines. Each track serves as a dedicated platform for researchers, academicians, industry experts, and students to share innovative ideas, present cutting-edge research, and explore emerging trends. These tracks aim to bridge the gap between theory and practice, encourage interdisciplinary collaboration, and promote advancements that address real-world challenges.</p>
                </div>
            </section>
            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <div className="text-center mb-8">
                    <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px]  text-center">Conference Tracks</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {roles.map((r) => (
                        <article key={r.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl text-[#881B1B] poppins-semibold">{r.title}</h3>

                            </div>

                            <ul className="space-y-2  list-disc px-4">
                                {r.duties.map((d, i) => (
                                    <li key={i} className="text-base inter-regular leading-[30px] opacity-85  text-justify ">{d}</li>
                                ))}
                            </ul>

                        </article>
                    ))}
                </div>

            </section>
            {/* <div className=" lg:h-70 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center lg:items-end items-center w-full">
                    <div className=" flex flex-col  lg:mt-10 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Conference Tracks</h2>
                        <h2 className="text-[48px] opacity-10 text-start poppins-bold text-white lg:block hidden">Our Scope</h2>
                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">

                <h2 className="text-gray-800 poppins-semibold text-[34px]  text-center">Conference <span className="text-[#fcac45] ">Tracks</span></h2>
                <div className="space-y-5 mt-4">
                    {tracks.map((item, index) => (
                        <div className="space-y-3">
                            <h2 className="text-[20px]  poppins-semibold ">{item.title}</h2>
                            <div className="flex gap-2 justify-center items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </section> */}



        </div>
    )
}

export default Conferencetracks