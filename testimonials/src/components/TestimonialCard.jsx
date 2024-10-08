import Arrows from "./Arrows";

const TestimonialCard = ({ element, index, setIndex }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <p className="text-xl font-medium text-blue-500">
                    Testimonials
                </p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What clients are saying
                </h1>

                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img
                            className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                            src={element.image}
                            alt="client photo"
                        />

                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">
                                    {element.name}
                                </p>
                                <p className="text-blue-200">{element.job}</p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                {element.text}
                            </p>
                            <Arrows index={index} setIndex={setIndex} />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default TestimonialCard;
