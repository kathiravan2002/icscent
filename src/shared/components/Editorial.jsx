import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {


    const committeeData = [
       
        {
            firstLetter: 'A',
            members: 'Abraham Musa Peter',
            university: 'Federal University Lokoja',
            location: 'Nigeria'
        },
        {
            firstLetter: 'C',
            members: 'Chandan Jyoti Kumar',
            university: 'Cotton University',
            location: 'India'
        },
        {
            firstLetter: 'A',
            members: 'Aria Hendrawan',
            university: 'Universitas Semarang',
            location: 'Indonesia'
        },
        {
            firstLetter: 'S',
            members: 'Suvarna Pawar',
            university: 'MIT Art, Design & Technology University',
            location: 'India'
        },
        {
            firstLetter: 'O',
            members: 'Omar Bin Samin',
            university: 'Institute of Management Sciences',
            location: 'Pakistan'
        },
        {
            firstLetter: 'A',
            members: 'Ardhendu Mandala',
            university: 'University of North Bengal',
            location: 'India'
        },
        {
            firstLetter: 'A',
            members: 'Abolfazl Gandomi',
            university: 'Islamic Azad University',
            location: 'Iran'
        },
        {
            firstLetter: 'R',
            members: 'Robin Prakash Mathur',
            university: 'Lovely Professional University',
            location: 'India'
        },
        {
            firstLetter: 'L',
            members: 'Lamia Abed Noor Muhammed',
            university: 'University of Al-Qadisiyah',
            location: 'Iraq'
        },
        {
            firstLetter: 'S',
            members: 'Sakshi Gupta',
            university: 'Amity University Noida',
            location: 'India'
        },
        {
            firstLetter: 'E',
            members: 'Egoigwe Sochima Vincent',
            university: 'University of Nigeria',
            location: 'Nigeria'
        },
        {
            firstLetter: 'S',
            members: 'Subhash Panwar',
            university: 'Govt. Engineering College Bikaner',
            location: 'India'
        },
        {
            firstLetter: 'M',
            members: 'Mohammad Javad Fadaeieslam',
            university: 'Semnan University',
            location: 'Iran'
        },
        {
            firstLetter: 'S',
            members: 'Sukanya Saxena',
            university: 'Indian Institute of technology Varanasi BHU',
            location: 'India'
        },
        {
            firstLetter: 'S',
            members: 'Sajib Kumar Mitra',
            university: 'University of Dhaka',
            location: 'Bangladesh'
        },
        {
            firstLetter: 'Z',
            members: 'Zahid Farooq',
            university: 'National institute of Technology Srinagar',
            location: 'India'
        },
        {
            firstLetter: 'C',
            members: 'Citra Fathia Palembang',
            university: 'Pattimura University',
            location: 'Indonesia'
        },
        {
            firstLetter: 'M',
            members: 'Meenakshi Gupta',
            university: 'National University of Singapore',
            location: 'Singapore'
        },
        {
            firstLetter: 'D',
            members: 'P.P.G Dinesh Asanka',
            university: 'University of Kelaniya',
            location: ' Sri Lanka'
        },
         {
            firstLetter: 'A',
            members: 'R.S. Aiswarya ',
            university: 'KPR Institute of Engineering and Technology',
            location: 'India'
        },
        {
            firstLetter: 'G',
            members: 'Grace Egbi Alilu',
            university: 'Hallmark University',
            location: 'Nigeria'
        },

    ]



    return (
        <div>
             <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Editorial Board</h2>
                    </div>
                </div>
            </div>
            <section className="max-w-[1300px] mx-auto px-4 py-12">
                <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[26px] text-center mb-10">
                    Meet Our Editorial Board Members
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {committeeData.map((section, index) =>
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="p-3 flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-[#fcac45] flex items-center justify-center text-white text-xl poppins-semibold mb-4">
                                    {section.firstLetter}
                                </div>
                                <p className="text-lg inter-medium leading-[30px] opacity-85 text-justify">Dr. {section.members},</p>
                                <p className="text-base inter-medium leading-[30px]  text-justify text-[#881B1B]">{section.university},</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">{section.location}.</p>

                            </div>
                        </div>
                    )}
                </div>
            </section>


        </div>
    )
}

export default Editorial