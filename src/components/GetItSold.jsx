import { getItSold } from "../assets/assets";

const highlightData = [
    {
        image: getItSold.topSales,
        title: 'Top Residential Sales Last 5 Years',
        desc: 'Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.'
    },
    {
        image: getItSold.dontList,
        title: 'Don\'t Just List it...',
        desc: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.'
    },
    {
        image: getItSold.guideBuyers,
        title: 'Guide to Buyers',
        desc: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!'
    },
]

export default function GetItSold() {
    return (
        <section className="flex flex-col gap-8 p-8 md:p-16 lg:p-20 bg-bg-light">
            <div>
                <h2 className="eyebrow">Highlights</h2>
                <h3 className="lead text-bg-dark">GET IT SOLD</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-bg-dark font-source-sans">
                {highlightData.map(({ image, title, desc}, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-6 lg:gap-4 p-8 items-center justify-center w-full shadow-lg"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full md:w-1/2 lg:w-full"
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-lg md:text-2xl">{title}</h3>
                            <span className="w-4/5 h-1 bg-accent"></span>
                            <p>{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}