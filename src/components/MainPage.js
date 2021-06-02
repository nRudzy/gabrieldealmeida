import AnchorLink from 'react-anchor-link-smooth-scroll';
// import RudzyLogo from '../images/rudzy_logo.png';
import CV from '../documents/CV_Gabriel_DEALMEIDA_2020.pdf';

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
            <div id="about" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex flex-col w-full">
                        <div className="text-center"><span className="bg-yellow-300 px-2">A propos</span></div>
                        <div className="text-center text-4xl text-white capitalize font-bold pt-1">Découvrez en plus !</div>

                        <div className="mt-32 flex gap-12 items-center text-white">
                            <div className="text-3xl text-left w-2/3 text-justify">
                                <h1 className="mb-4">Pour me décrire professionnellement,</h1>
                                <p>Je suis un développeur passionné par la conception de sites Web.
                                    J'aime développer des sites Web simples, propres et fluides qui offrent une réelle valeur ajoutée à l'utilisateur final.
                                    Fournir un travail dans les délais et le budget qui répond aux exigences est ma façon majeure d'opérer.
                                </p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center gap-8">
                                <div className="rounded-full h-20 w-20 flex items-center justify-center bg-black text-9xl text-white">2</div>
                                <p className="text-2xl">Années d'Expérience</p>
                            </div>
                        </div>

                        <div className="mt-32 flex gap-12 items-center text-white">
                            <div className="text-left w-1/4 text-justify sm:w-full">
                                <h1 className="mb-4 text-2xl">Nom: </h1>
                                <p className="font-extrabold">Gabriel DE ALMEIDA</p>
                            </div>
                            <div className="text-left w-1/4 text-justify sm:w-full">
                                <h1 className="mb-4 text-2xl">Age: </h1>
                                <p className="font-extrabold">25 ans</p>
                            </div>
                            <div className="text-left w-1/4 text-justify sm:w-full">
                                <h1 className="mb-4 text-2xl">Numéro: </h1>
                                <p className="font-extrabold">(+33) 0636530570</p>
                            </div>
                            <div className="text-left w-1/4 text-justify sm:w-full">
                                <h1 className="mb-4 text-2xl">Email: </h1>
                                <p className="font-extrabold">gabriel.dealmeida69@gmail.com</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div id="cv" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex flex-col w-full">
                        <div className="text-center"><span className="bg-yellow-300 px-2">CV</span></div>
                        <div className="text-center text-4xl text-white capitalize font-bold pt-1">Un bref résumé de mon CV</div>

                        <div className="mt-24 flex gap-14 items-center text-white">
                            <div className="text-3xl text-left w-1/2 text-justify">
                                <div className="mb-4 capitalize">Ma formation</div>
                                <div className="border-l-4 border-yellow-300 divide-y divide-white px-4">
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">Master 1 TIW</p>
                                        <p className="text-sm">Université Claude Bernard / 2019 - 2020</p>
                                        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et, eveniet iusto magni maiores molestiae numquam porro possimus sapiente voluptates? Dicta, id.</p>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">Licence Informatique</p>
                                        <p className="text-sm">Université Claude Bernard / 2016 - 2019</p>
                                        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et, eveniet iusto magni maiores molestiae numquam porro possimus sapiente voluptates? Dicta, id.</p>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">Baccalauréat ES</p>
                                        <p className="text-sm">Lycée du Parc / 2013 - 2016</p>
                                        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et, eveniet iusto magni maiores molestiae numquam porro possimus sapiente voluptates? Dicta, id.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-3xl text-left w-1/2 text-justify">
                                <div className="mb-4 capitalize">Mon expérience</div>
                                <div className="border-l-4 border-yellow-300 divide-y divide-white px-4">
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">Développeur Web Front</p>
                                        <p className="text-sm">Zucchetti / 2021 - 2023</p>
                                        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et, eveniet iusto magni maiores molestiae numquam porro possimus sapiente voluptates? Dicta, id.</p>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">Développeur FullStack</p>
                                        <p className="text-sm">HumanSourcing / 2020 - 2021</p>
                                        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et, eveniet iusto magni maiores molestiae numquam porro possimus sapiente voluptates? Dicta, id.</p>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">Stage Développeur FullStack</p>
                                        <p className="text-sm">EDF CNPE Saint-Alban / 2018 - 2019</p>
                                        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et, eveniet iusto magni maiores molestiae numquam porro possimus sapiente voluptates? Dicta, id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24 flex flex-col gap-2 items-center text-white">
                            <div className="text-3xl text-left mb-4 capitalize w-full">Mes compétences</div>
                            <div className="w-full flex gap-14">
                                <div className="text-3xl text-left w-1/2 text-justify">
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">PHP</p>
                                            <p>90%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-11/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">JavaScript</p>
                                            <p>80%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-9/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">SQL</p>
                                            <p>85%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-10/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">Java / J2EE</p>
                                            <p>60%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-7/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">HTML / CSS</p>
                                            <p>100%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-full h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">Git</p>
                                            <p>90%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-11/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-3xl text-left w-1/2 text-justify">
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">Symfony</p>
                                            <p>80%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-9/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">ReactJS / VueJS</p>
                                            <p>70%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-8/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">PostgreSQL / phpMyAdmin</p>
                                            <p>85%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-10/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">Spring</p>
                                            <p>50%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-6/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">ElasticSearch</p>
                                            <p>60%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-7/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pb-2 text-lg capitalize">
                                            <p className="capitalize">RabbitMQ</p>
                                            <p>70%</p>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-600 mb-4">
                                            <div className="w-8/12 h-2 rounded-full bg-yellow-300"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24 flex gap-14 items-center justify-center">
                            <a href={CV} className="bg-yellow-300 hover:bg-yellow-400 p-4" download>Téléchargez mon CV</a>
                        </div>
                    </section>
                </div>
            </div>
            <div id="portfolio" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden">
            </div>
            <div id="contact" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden">
            </div>
        </div>


    )
}
