import React from 'react'
import { TbPointFilled } from 'react-icons/tb';


function About() {


const data =[
    {
        title:"Knowledge Enhancement",
        content:"Gain deep insights into recent advancements, emerging research trends, and breakthrough technological innovations in science, engineering, and technology, empowering participants to stay updated and competitive in their respective professional and academic fields."
    },
    {
        title:"Networking Opportunities",
        content:"Connect and interact with renowned researchers, industry leaders, innovators, and academicians worldwide, building meaningful relationships that foster collaboration, mentorship, and professional growth while expanding your global research and innovation network."
    },
    {
        title:"Research Visibility",
        content:"Present and showcase your work to an international audience, gaining recognition while receiving valuable expert feedback that refines research quality and enhances credibility within global scientific, engineering, and technological communities."
    },
    {
        title:"Publication Opportunities",
        content:"Get accepted papers published in high-quality journals or indexed conference proceedings, increasing research visibility, academic credibility, and citation potential while contributing to global scientific, engineering, and technological knowledge databases."
    },
    {
        title:"Exposure to Innovations",
        content:"Discover cutting-edge tools, technologies, and research methodologies shaping the future of science, engineering, and technology, while gaining practical insights into their applications in solving complex, real-world challenges."
    },
]


    return (
        <div>
            <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">About The Conference</h2>
                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className=" flex items-center  justify-center ">
                        <img src="/images/aboutus.jpg" alt="aboutus" className="max-w-[505px] mx-auto rounded-[35px] border-4 border-[#881B1B] lg:block hidden" />
                    </div>
                    <div className="space-y-5 lg:space-y-0 flex   flex-col justify-center">
                        <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">Welcome to ICSCENT 2025</h2>
                        <div className=" flex items-center   justify-center max-w-[550px] mx-auto ">
                            <img src="/images/aboutus.jpg" alt="aboutus" className=" rounded-[35px] border-4 border-[#881B1B] block lg:hidden " loading='lazy' />
                        </div>
                        <div className="space-y-3 mt-4">
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Science, Engineering and Technology  serves as a premier platform for researchers, academicians, industry professionals, and innovators to present their latest research and technological developments. It encourages knowledge sharing, idea exchange, and collaborative problem-solving to address challenges in today’s rapidly evolving world.</p>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">This conference brings together experts from diverse disciplines to explore advancements in science, engineering, and technology. With a strong focus on interdisciplinary collaboration, ICSCENT promotes the integration of research and innovation to develop sustainable, impactful solutions that benefit both industry and society.</p>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Participants will have the opportunity to present papers, engage in panel discussions, attend keynote sessions, and network with leading professionals. ICSCENT aims to inspire new research directions, strengthen academic-industry ties, and contribute to the global scientific and technological community.The Selective accepted papers of our International Conference on Science, Engineering and Technology will be recommended to publish in the indexed Journals. </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px]  text-center">Benefits of Participation</h2>
                <div className="space-y-2 mt-4">
                    {data.map((item,index)=>(
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

export default About