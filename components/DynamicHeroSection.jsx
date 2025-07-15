import React from 'react'

const DynamicHeroSection = ({ img, title, subTitle }) => {
    return (
        <>
            <div className="relative w-full h-80">
                <img
                    src={img}
                    alt="About Us Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/40 bg-opacity-40"></div>
            </div>
            <div className="absolute md:top-1/4 top-1/6 right-1/4 text-white flex  items-center justify-center mx-auto w-full px-4">
                <div className="flex flex-col items-start">
                    <h2 className="text-sm font-light py-2 ">
                        {title}
                    </h2>
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {subTitle}
                    </h1>
                </div>
            </div>

        </>
    )
}

export default DynamicHeroSection
