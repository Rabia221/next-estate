import React from 'react'

const BannerSection = () => {
    return (
        <>
            <div className=" bg-[#27ae60] text-white py-10 px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold">
                        Do You Have Questions?
                    </h3>
                    <p className="text-sm mt-1">
                        We'll help you to grow your career and growth.
                    </p>
                </div>
                <button className="mt-4 md:mt-0 md:ml-4 bg-white text-[#27ae60] px-6 py-4 rounded-full font-medium text-sm shadow">
                    Contact Us Today
                </button>
            </div>

        </>
    )
}

export default BannerSection
