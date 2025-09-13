import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong, FaCircleUser } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {

    const organizing = [

        {
            name: "Dr. Sutikno",
            university: "  University of Diponegoro",
            expertise: " Department of Informatics",
            country: "Indonesia"
        },
        {
            name: "Dr. Marwan Ramdhany Edy",
            university: "Universitas Negeri Makassar",
            expertise: " Department of Informatics and Computer Engineering",
            country: "Indonesia"
        },

        {
            name: "Dr. Yogi Pratama",
            university: "Al Insyirah Institute of Health and Technology",
            expertise: " Department of Medical Informatics",
            country: "Indonesia"
        },
        {
            name: "Dr. Citra Fathia Palembang",
            university: "Pattimura University",
            expertise: " Department of Computer Science",
            country: " Indonesia "
        },

        {
            name: "Dr. Rustam Asnawi",
            university: "Universitas Negeri Yogyakarta",
            expertise: "Department of Electrical Engineering",
            country: " Indonesia"
        },
    ]

    const technical = [


        {
            name: "Dr. Shakar Ahmed Aziz",
            university: "Duhok University",
            expertise: " Department of Mathematics",
            country: "  Iraq"
        },
        {
            name: "Dr. Mujtaba Korai",
            university: "Gachon University Korea",
            expertise: " Department of Computer Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: " Department of Computer Science and Engineering",
            country: " Lebanon"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            university: "Metropolitan Autonomous University",
            expertise: "Department of Electronics Engineering",
            country: "Mexico"
        },
        {
            name: "Dr. Marcelo M S Souza",
            university: " Universidade Federal do Ceará",
            expertise: "Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Ali Rizwan",
            university: " King Abdulaziz University",
            expertise: " Department of Industrial Engineering",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Ammar Amjad",
            university: " National Yang ming chiao tung university",
            expertise: "Department of Computer Science and Engineering ",
            country: "Taiwan"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            university: "International School of Information Processing Sciences",
            expertise: "Department of Computer Science and Engineering ",
            country: "France"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: " National University of Singapore",
            expertise: " Department of Electronics and Communication Engineering",
            country: "Singapore"
        },
        {
            name: "Dr. Samuel Akpan Robinson",
            university: " University of Uyo",
            expertise: "Department of Computer Science and Cyber Security",
            country: " Nigeria"
        },
        {
            name: "Dr. Sharmin Akter",
            university: "Daffodil International University",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: " Department of Computer Science and Engineering",
            country: " Uganda"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: " Qatar University",
            expertise: " Research Scientist at Qatar Mobility Innovations Center",
            country: " Qatar"
        },
        {
            name: "Dr. Puneet Sharma",
            university: "  UiT The Arctic University of Norway",
            expertise: " Department of Automation and Process Engineering",
            country: " Norway"
        },
        {
            name: "Dr.C.B. Sivaparthipan",
            university: "Adhiyamaan College of Engineering",
            expertise: "Department of Computer Science and Engineering ",
            country: " India"
        },
        {
            name: "Dr. Kabelo Given Chuma",
            university: " University of South Africa",
            expertise: " Department of Information Science",
            country: "South Africa"
        },
        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: " Botswana"
        },
        {
            name: "Dr. Asma Sbeih",
            university: "Palestine Ahliya University",
            expertise: "Department of Information Technology ",
            country: "Palestine"
        },
        {
            name: "Dr. Putri Mentari Endraswari",
            university: "  University of Bangka Belitung",
            expertise: " Department of Information Technology",
            country: "Indonesia"
        },
        {
            name: "Dr. Ledan Qian",
            university: "  Wenzhou University",
            expertise: " Department of Information Technology",
            country: "China"
        }
    ];



    const editorial = [
        {
            name: "Dr. Qian Liu",
            university: " Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering department ",
            country: " New Zealand"
        },
         {
            name: "Dr. Kolawole Yusuf Obiwusi",
            university: "Summit University",
            expertise: " Department of Mathematics and Computer Science",
            country: "Nigeria"
        },

       
        {
            name: "Dr. Mohammad Javad Fadaeieslam",
            university: "Semnan University",
            expertise: " Department of Electrical and Computer Engineering",
            country: " Iran"
        },
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: " Department of Information Technology",
            country: "Vietnam"
        },
        {
            name: "Dr.M. Karthick",
            university: "Nandha college of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Saminda Premaratne",
            university: " University of Moratuwa",
            expertise: "   Department of Information Technology",
            country: "Sri Lanka"
        },
        {
            name: "Dr. Stephen Obono Ekwe",
            university: "  University of Cape Town",
            expertise: " Department of Electrical Engineering",
            country: " South Africa"
        },
        {
            name: "Dr.  Sakthivel Velusamy",
            university: " Konkuk University",
            expertise: " Department of Aerospace Information Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Philippines"
        },
         {
            name: "Dr. Folasade M. Dahunsi",
            university: "Federal University of Technology",
            expertise: " Department of Computer Science and Engineering",
            country: "Nigeria"
        },
        {
            name: "Dr. Nor Musliza Mustafa",
            university: " Selangor Islamic University",
            expertise: "Department of Creative Multimedia and Computing",
            country: "Malaysia"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "  Federal University of Roraima",
            expertise: " Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Omar Bin Samin",
            university: " Institute of Management Sciences",
            expertise: " Department of Information and Technology",
            country: "Pakistan"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering ",
            country: "Cyprus"
        },
         {
            name: "Dr. Sirajuddin Qureshi",
            university: "  Beijing University of Technology",
            expertise: " Department of Information Technology",
            country: "China"
        },
        
        
        {
            name: "Dr. Twana A. Hamad",
            university: " Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Kuwait"
        },
        {
            name: "Dr.M. Rajalakshmi",
            university: "Jyothi Engineering College",
            expertise: "Department of Mechatronics Engineering",
            country: " India"
        },
        {
            name: "Dr. Syed Asim Ali Shah",
            university: "Bahria University",
            expertise: " Department of Software Engineering",
            country: "Pakistan"
        },
      
        {
            name: "Dr. Maryam Anwer",
            university: " Majma university",
            expertise: " Department of Industrial Engineering",
            country: " Saudi Arabia"
        },
        {
            name: "Dr.A. Gabriel ",
            university: "Sharda University",
            expertise: "Department of Information Technology ",
            country: " Uzbekistan "
        },
        {
            name: "Dr.  Huiliang Zhao",
            university: "Guizhou minzu University",
            expertise: " Department of product design",
            country: "China"
        },
        {
            name: "Dr.K. Karthika",
            university: "sri sairam college of Engineering",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
          {
            name: "Dr. Asghar Ali Shah",
            university: "Bahria University",
            expertise: " Department of computer science",
            country: "Pakistan"
        },
        {
            name: "Dr. Qiushi Yang",
            university: "City University of Hong Kong",
            expertise: " Department of Electronic Engineering",
            country: "China"
        },
       
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: " Department of Digital Forensics & Cyber Security",
            country: " United Kingdom"
        },
        {
            name: "Dr.R. Gopi",
            university: "Dhanalakshmi Srinivasan Engineering",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        }
    ];



    // const committeeData = [

    //     {
    //         firstLetter: 'A',
    //         members: 'Abraham Musa Peter',
    //         university: 'Federal University Lokoja',
    //         location: 'Nigeria'
    //     },
    //     {
    //         firstLetter: 'C',
    //         members: 'Chandan Jyoti Kumar',
    //         university: 'Cotton University',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'A',
    //         members: 'Aria Hendrawan',
    //         university: 'Universitas Semarang',
    //         location: 'Indonesia'
    //     },
    //     {
    //         firstLetter: 'S',
    //         members: 'Suvarna Pawar',
    //         university: 'MIT Art, Design & Technology University',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'O',
    //         members: 'Omar Bin Samin',
    //         university: 'Institute of Management Sciences',
    //         location: 'Pakistan'
    //     },
    //     {
    //         firstLetter: 'A',
    //         members: 'Ardhendu Mandala',
    //         university: 'University of North Bengal',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'A',
    //         members: 'Abolfazl Gandomi',
    //         university: 'Islamic Azad University',
    //         location: 'Iran'
    //     },
    //     {
    //         firstLetter: 'R',
    //         members: 'Robin Prakash Mathur',
    //         university: 'Lovely Professional University',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'L',
    //         members: 'Lamia Abed Noor Muhammed',
    //         university: 'University of Al-Qadisiyah',
    //         location: 'Iraq'
    //     },
    //     {
    //         firstLetter: 'S',
    //         members: 'Sakshi Gupta',
    //         university: 'Amity University Noida',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'E',
    //         members: 'Egoigwe Sochima Vincent',
    //         university: 'University of Nigeria',
    //         location: 'Nigeria'
    //     },
    //     {
    //         firstLetter: 'S',
    //         members: 'Subhash Panwar',
    //         university: 'Govt. Engineering College Bikaner',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'M',
    //         members: 'Mohammad Javad Fadaeieslam',
    //         university: 'Semnan University',
    //         location: 'Iran'
    //     },
    //     {
    //         firstLetter: 'S',
    //         members: 'Sukanya Saxena',
    //         university: 'Indian Institute of technology Varanasi BHU',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'S',
    //         members: 'Sajib Kumar Mitra',
    //         university: 'University of Dhaka',
    //         location: 'Bangladesh'
    //     },
    //     {
    //         firstLetter: 'Z',
    //         members: 'Zahid Farooq',
    //         university: 'National institute of Technology Srinagar',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'C',
    //         members: 'Citra Fathia Palembang',
    //         university: 'Pattimura University',
    //         location: 'Indonesia'
    //     },
    //     {
    //         firstLetter: 'M',
    //         members: 'Meenakshi Gupta',
    //         university: 'National University of Singapore',
    //         location: 'Singapore'
    //     },
    //     {
    //         firstLetter: 'D',
    //         members: 'P.P.G Dinesh Asanka',
    //         university: 'University of Kelaniya',
    //         location: ' Sri Lanka'
    //     },
    //     {
    //         firstLetter: 'A',
    //         members: 'R.S. Aiswarya ',
    //         university: 'KPR Institute of Engineering and Technology',
    //         location: 'India'
    //     },
    //     {
    //         firstLetter: 'G',
    //         members: 'Grace Egbi Alilu',
    //         university: 'Hallmark University',
    //         location: 'Nigeria'
    //     },

    // ]



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
                {/* <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[26px] text-center mb-10">
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
                </div> */}
                <div className="">
                    <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[26px] text-center mb-5 scroll-mt-[120px]" id="organizing-committee">
                        Organizing Committee
                    </h2>
                    <div className="space-y-2">
                        {organizing.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#881B1B]' />
                                <p className="leading-relaxed "><span className=" text-[#881B1B] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[26px] text-center mt-10 mb-5 scroll-mt-[120px]" id="technical-committee">
                        Technical Program Committee
                    </h2>
                    <div className="space-y-2">
                        {technical.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#881B1B]' />
                                <p className="leading-relaxed "><span className=" text-[#881B1B] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[26px] text-center mt-10 mb-5 scroll-mt-[120px]" id="advisory-committee">
                        International Advisory Board Committee Members
                    </h2>
                    <div className="space-y-2">
                        {editorial.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#881B1B]' />
                                <p className="leading-relaxed "><span className=" text-[#881B1B] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Editorial