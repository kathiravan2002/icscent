import React, { useState } from 'react'


function Registerpage() {

    const [activeYear, setActiveYear] = useState("2025");

    const keyDatesData = {
        "2025": [
            {
                date: "08th January, 2025",
                event: "Paper Submission Deadline Final Extension",
            },
            {
                date: "13th January, 2025",
                event: "Author Acceptance Notification Description",
            },
            {
                date: "28th January, 2025",
                event: "Conference Date",
            },
        ],
        "2024": [
            {
                date: "06th September, 2024",
                event: "Paper Submission Deadline Final Extension",
            },
            {
                date: "11th September, 2024",
                event: "Author Acceptance Notification Description",
            },
            {
                date: "24th September, 2024",
                event: "Conference Date",
            },
        ],
    };


    return (
        <div>
            <section className="relative bg-center  bg-cover" style={{ backgroundImage: ('url(/images/datebanner.jpg)') }}>
                <div className="absolute inset-0 bg-[#000] opacity-65"></div>
                <div className="relative max-w-[1200px] mx-auto 2xl:px-0 px-4 py-10 ">
                    <h2 className="poppins-semibold text-white text-xl text-center">Mark Your Calendar</h2>
                    <p className="poppins-bold text-white text-3xl text-center mt-2">Important Dates</p>
                    <div className="max-w-6xl mx-auto px-4 mt-6">
                        <div className="flex justify-center gap-4 mb-8">
                            {Object.keys(keyDatesData).map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    className={`px-6 py-2 poppins-semibold rounded-full transition-all duration-300 cursor-pointer ${activeYear === year
                                            ? "bg-[#881B1B] text-white shadow-md scale-105"
                                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                            {keyDatesData[activeYear].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-5 hover:shadow-xl transition-all duration-300"
                                >
                                    <p className="poppins-bold text-[#881B1B] text-lg text-center">
                                        {item.date}
                                    </p>
                                    <p className="poppins-semibold text-base text-center mt-4">
                                        {item.event}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Registerpage