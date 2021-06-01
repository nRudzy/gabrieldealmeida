import AnchorLink from 'react-anchor-link-smooth-scroll';
// import RudzyLogo from '../images/rudzy_logo.png';

export default function MainPage() {
    return (
        <div>
            <div className="bg-hero-bg bg-no-repeat bg-cover overflow-hidden h-screen">
                <div id="homepage" className="bg-gray-900 bg-opacity-80 h-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                            <section className="flex flex-col align-center items-center justify-center h-screen text-center gap-8">
                                <div className="-mt-24 rounded-full h-48 w-48 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-bg-pp bg-center bg-no-repeat bg-cover rounded-full h-44 w-44"/>
                                </div>
                                <div className="text-4xl tracking-tight font-extrabold text-white sm:text-4xl md:text-4xl">
                                    <span className="text-center uppercase">Bonjour ! Je m'appelle Gabriel DE ALMEIDA - Développeur web.</span>
                                </div>
                                <div className="text-2l text-white">
                                    <span className="text-center">situé à Lyon, France.</span>
                                </div>
                                <AnchorLink href="#about" className="mt-20 bg-yellow-300 hover:bg-yellow-400 p-4">A propos de moi</AnchorLink>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden h-screen">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex flex-col w-full">
                        <div className="text-center"><span className="bg-yellow-300 px-2">A propos</span></div>
                        <div className="text-center text-4xl text-white capitalize font-bold pt-1">Découvrez en plus !</div>

                        <div className="about-desc mt-32 flex gap-12 items-center text-white">
                            <div className="text-3xl text-left w-2/3 text-justify">
                                <h1 className="mb-4">Salut, je suis <span className="">Gabriel</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate debitis deserunt doloremque dolorum facilis fuga magnam nam natus nemo nihil nisi perspiciatis, quia quidem reiciendis reprehenderit similique sint voluptatum?</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center gap-8">
                                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-300 text-6xl text-black">2</div>
                                <p className="text-2xl">années d'expérience</p>
                            </div>
                        </div>
                        {/*<div className="w-full flex">*/}
                        {/*    <div className="w-full flex gap-4">*/}

                        {/*    </div>*/}
                        {/*    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-300 text-6xl text-black">2</div>*/}
                        {/*    <p className="text-2xl">années d'expérience</p>*/}
                        {/*</div>*/}
                    </section>
                </div>
            </div>
            <div id="cv" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden h-screen">
            </div>
            <div id="portfolio" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden h-screen">
            </div>
            <div id="contact" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden h-screen">
            </div>
        </div>


    )
}
