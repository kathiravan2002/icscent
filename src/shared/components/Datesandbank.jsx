import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRightLong, FaCalendarDays } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, CreditCard } from 'lucide-react';
import { HiChevronDoubleRight } from 'react-icons/hi';

function Datesandbank() {
    const dates = [
        {
            title: 'Abstract Submission Deadline',
            date: '04-11-2025',
        },
        {
            title: 'Full Paper Submission Deadline',
            date: '12-11-2025',
        },
        {
            title: 'Notification of Acceptance',
            date: '18-11-2025',
        },
        {
            title: 'Final Paper Submission',
            date: '21-11-2025',
        },
        {
            title: 'Registration Deadline',
            date: '21-11-2025',
        },
        {
            title: 'Conference Dates',
            date: '26-11-2025',
        },
    ];
    return (
        <div>
             <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Important Dates</h2>
                    </div>
                </div>
            </div>



            {/* <section className="2xl:px-0 px-4 lg:py-15 py-10 max-w-[800px]  mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1e1b4b]">Important Dates</h2>
                <div className="space-y-4 ">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className="flex group hover:-translate-y-1 duration-300 lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 items-center bg-gray-100 rounded-md p-4 md:px-20 shadow-sm"
                        >
                            <div className="text-base md:text-lg poppins-medium text-[#1e1b4b]">{item.title}</div>
                            <div className="text-base md:text-lg poppins-semibold text-[#1e1b4b]">{item.date}</div>
                        </div>
                    ))}
                </div>
            </section> */}
            <section className="2xl:px-0 px-4 lg:py-15 py-10 max-w-[1400px]  mx-auto ">
                <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px]  text-center">
                    Important Dates
                </h2>
                <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 py-5">
                    <div className="space-y-3">
                        <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">For the International Conference on Science, Engineering and Technology, staying informed about deadlines is vital for a smooth and successful conference experience. Below, we have outlined all the significant deadlines for paper submission, acceptance notifications, registration, and other key milestones. We encourage participants to review these dates carefully and plan accordingly to ensure active participation.</p>
                    </div>
                </section>

                <div className="grid gap-6 md:grid-cols-2 mt-4 max-w-[1100px]  mx-auto">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <span className="text-lg poppins-medium text-gray-700">
                                    {item.title}
                                </span>
                                <span className="text-lg poppins-semibold text-[#1e1b4b] bg-yellow-100 px-4 py-1 rounded-full">
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default Datesandbank