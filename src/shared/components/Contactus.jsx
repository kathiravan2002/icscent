import React, { useState } from 'react'
import { IoLocation, IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FileText, Mail, Building, Phone } from 'lucide-react';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoIosMail } from 'react-icons/io';


function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            const response = await fetch('https://icscent.com/api/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const result = await response.text();
            setStatus(result);
            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        
        <div>
            {/* Header Section */}
            <div className=" lg:h-65 h-60  bg-[#881B1B]" >
                <div className="h-full flex justify-center  items-center w-full">
                    <div className=" flex flex-col  lg:mt-20 mt-22 w-[1800px] ">
                        <h2 className="text-[24px] md:text-[36px]  text-center poppins-semibold text-white "> Contact Us</h2>
                    </div>
                </div>
            </div>

            <div className="text-black max-w-[800px] mx-auto py-8 px-4">
                <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl poppins-semibold text-[#881B1B] mb-2">Get in Touch</h3>
                        <p className="text-base inter-regular leading-[30px] opacity-85 text-center">
                            We’d love to hear from you! Whether you have questions about submissions,
                            registration, or general conference details, our team is ready
                            to assist you.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center">
                        <h4 className="text-xl poppins-semibold text-[#881B1B] mb-2">Conference Secretariat</h4>
                        <p className="text-base inter-regular leading-[30px] opacity-85 mb-4">International Conference on Science, Engineering and Technology</p>
                        <div className="flex gap-5 justify-center">
                            <div className="flex gap-2  items-center"><IoIosMail className='flex text-[24px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify "> info.icscent@gmail.com</p></div>
                            <div className="flex gap-2  items-center"><IoLocation className='flex text-[24px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify "> Bogor, Indonesia</p></div>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-2xl poppins-semibold text-center py-4 text-[#881B1B]">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block poppins-semibold mb-1">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#881B1B] rounded-md p-2 poppins-medium shadow-sm text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1">Last Name *</label>
                                    <input
                                        type="text"
                                        name="secondname"
                                        value={formData.secondname}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#881B1B] rounded-md p-2 poppins-medium shadow-sm text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#881B1B] rounded-md poppins-medium p-2 shadow-sm text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1 ">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#881B1B] rounded-md p-2 poppins-medium shadow-sm text-base"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block poppins-semibold mb-1">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFileInputChange}
                                    rows="3"
                                    required
                                    className="w-full border-2 border-gray-300 outline-[#881B1B] rounded-md poppins-medium p-2 shadow-sm text-base resize-none"
                                ></textarea>
                            </div>

                            <div className="text-center w-fit group overflow-hidden rounded-md mx-auto">
                                <button
                                    type="submit"
                                    className="bg-[#881B1B]  cursor-pointer hover:bg-[#881B1B] text-white poppins-medium px-6 py-2 rounded-md shadow-md group-hover:scale-110 duration-300"
                                >
                                    {status === 'Sending...' ? 'Submitting...' : 'Send Message'}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contactus