import React from 'react'
import { TbPointFilled } from 'react-icons/tb';

function Scope() {

    const data = [
        {
            title: "Pure and Applied Sciences",
            content: "Physics, chemistry, biology, mathematics, and environmental sciences, fostering innovative approaches that solve global challenges and drive sustainable advancements across various interdisciplinary scientific fields worldwide."
        },
        {
            title: "Engineering Disciplines",
            content: "Civil, mechanical, electrical, electronics, computer, and chemical engineering, encouraging creative, practical, and technology-driven solutions that transform industries, infrastructure, and communities while addressing pressing environmental and societal issues globally."
        },
        {
            title: "Emerging Technologies",
            content: "Artificial intelligence, robotics, nanotechnology, renewable energy, biotechnology, Internet of Things (IoT), and quantum computing, supporting innovations that enhance industry efficiency, sustainability, and overall quality of life worldwide."
        },
    ]
    return (
        <div>
             <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Scope of the Conference </h2>
                        {/* <h2 className="text-[48px] opacity-10 text-start poppins-bold text-white lg:block hidden">About Us</h2> */}
                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className=" flex items-center  justify-center ">
                        <img src="/images/mission.jpg" alt="aboutus" className="max-w-[505px] mx-auto rounded-[35px] border-4 border-[#881B1B] lg:block hidden" />
                    </div>
                    <div className="space-y-5 lg:space-y-0 flex   flex-col justify-center">
                        <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">Conference Focus Areas</h2>
                        <div className=" flex items-center   justify-center max-w-[550px] mx-auto ">
                            <img src="/images/mission.jpg" alt="aboutus" className=" rounded-[35px] border-4 border-[#881B1B] block lg:hidden " loading='lazy' />
                        </div>
                        <div className="space-y-3 mt-4">
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Science, Engineering and Technology covers a wide range of disciplines, including pure and applied sciences, fostering innovative research, sustainable solutions, and impactful advancements across multiple global scientific domains.</p>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">ICSCENT embraces all branches of engineering and technology, encouraging cutting-edge innovations, interdisciplinary approaches, and practical applications that address industrial, environmental, and societal challenges, while promoting creativity and collaboration among global researchers.</p>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The conference serves as a platform for uniting academia, industry, and research institutions, enabling knowledge exchange, joint projects, and partnerships that drive progress, shape future technologies, and contribute to sustainable global development.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px]  text-center">Research Areas</h2>
                <div className="space-y-2 mt-4">
                    {data.map((item, index) => (
                        <div className="space-y-2">
                            <h2 className="poppins-semibold text-xl text-[#881B1B] ">{item.title}</h2>
                            <div className="flex items-center gap-2 "><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Scope