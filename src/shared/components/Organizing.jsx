import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Organizing() {

    



    const roles = [
        {
            title: 'Conference Chair',
            duties: [
                'Provide overall leadership and strategic direction for the conference.',
                'Chair major planning meetings and approve the conference program and policies.',
                'Represent the conference in external communications and partnerships.'
            ]
        },
        {
            title: 'Co-Chair',
            duties: [
                'Support the Conference Chair in decision-making and execution.',
                'Coordinate subcommittees and stand in when the Chair is unavailable.',
                'Help resolve logistical or program-related issues during the event.'
            ]
        },
        {
            title: 'Program Chair',
            duties: [
                'Lead the technical program, define tracks and session formats.',
                'Oversee abstract/paper review process and make acceptance recommendations.',
                'Organize keynote and invited speaker sessions.'
            ]
        },
        {
            title: 'Organizing Secretary',
            duties: [
                'Manage conference administration, correspondence, and documentation.',
                'Coordinate schedules, meetings, and deadlines across committees.',
                'Serve as a primary point of contact for participants and partners.'
            ]
        },
        {
            title: 'Finance Chair',
            duties: [
                'Prepare and manage the conference budget and financial reports.',
                'Handle registration revenue, sponsorship funds, and reimbursements.',
                'Ensure transparent accounting and compliance with institutional policies.'
            ]
        },
        {
            title: 'Publicity & Outreach Chair',
            duties: [
                'Develop marketing strategy and manage conference promotion channels.',
                'Coordinate social media, email campaigns, and press releases.',
                'Engage with sponsors, partners, and academic networks for visibility.'
            ]
        },
        {
            title: 'Proceedings & Publications Editor',
            duties: [
                'Manage paper collection, formatting, and submission to proceedings.',
                'Coordinate with publishers and indexing services for post-conference publication.',
                'Ensure quality control and adherence to publication standards.'
            ]
        },
        // {
        //     title: 'Local Arrangements Coordinator',
        //     duties: [
        //         'Arrange venue logistics, accommodation, and on-site facilities.',
        //         'Coordinate catering, audio-visual needs, signage, and transportation.',
        //         'Manage on-site volunteers and venue-related troubleshooting.'
        //     ]
        // },
        {
            title: 'Sponsorship & Fundraising Lead',
            duties: [
                'Identify and approach potential sponsors and partners.',
                'Prepare sponsorship packages and manage sponsor relations.',
                'Ensure sponsor deliverables and visibility commitments are fulfilled.'
            ]
        },
        {
            title: 'Volunteers Coordinator',
            duties: [
                'Recruit, train, and manage volunteers for registration, sessions, and logistics.',
                'Prepare volunteer schedules and task assignments for smooth operations.',
                'Serve as the contact for volunteer issues during the conference.'
            ]
        }
    ];
    return (
        <div>
            <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white ">Organizing Committee</h2>
                    </div>
                </div>
            </div>
            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The Organizing Committee of ICSCENT consists of experienced academicians, industry leaders, and researchers who work together to design and execute a world-class conference. Their collective expertise ensures high-quality sessions, diverse participation, and impactful discussions, creating a platform that fosters innovation, collaboration, and meaningful contributions to science, engineering, and technology globally.</p>
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Committed to excellence, the committee manages every aspect of the event, from paper review and speaker selection to partnerships and logistics. Their dedication guarantees a seamless experience for participants, encouraging knowledge exchange, professional networking, and the advancement of groundbreaking ideas that shape the future of multiple disciplines worldwide.</p>
                </div>
            </section>
            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <div className="text-center mb-8">
                    <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px]  text-center">Organizing Committee — Roles & Responsibilities</h2>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
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

        </div>
    )
}

export default Organizing