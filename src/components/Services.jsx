import { services } from "../assets/assets";

const serviceData = [
    {
        image: services.service1,
        title: 'Real Estate Done Right',
        desc: 'Nervous about your property adventure? Don\'t be. Whether you\'re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!'
    },
    {
        image: services.service2,
        title: 'Commercial & Residential',
        desc: 'Large or small, condo or mansion, we can find it and get at the price that\'s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.'
    },
    {
        image: services.service3,
        title: 'Rely on Expertise',
        desc: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.'
    },
]

export default function Services() {
    return (
        <section className="flex flex-col gap-8 p-8 md:p-16 lg:p-20 bg-bg-light">
            <div>
                <h2 className="eyebrow">Our Services</h2>
                <h3 className="lead text-bg-dark">GUIDING YOU HOME</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-bg-dark font-source-sans">
                {serviceData.map(({ image, title, desc}, index) => (
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