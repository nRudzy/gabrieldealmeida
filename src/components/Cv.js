import CV from "../documents/CV_Gabriel_DEALMEIDA_2020.pdf";

export default function Cv() {
    return (
        <div id="cv" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto">
                <section className="py-24 flex flex-col w-full">
                    <div className="text-center"><span className="bg-yellow-300 px-2">CV</span></div>
                    <div className="text-center text-4xl text-white capitalize font-bold pt-1">
                        Un bref résumé de mon CV
                    </div>

                    <div className="mt-24 flex flex-col gap-14 items-center text-white px-4 lg:flex-row">
                        <div className="w-full text-3xl text-left lg:w-1/2 text-justify">
                            <div className="mb-4 capitalize">Mon expérience</div>
                            <div className="border-l-4 border-yellow-300 divide-y divide-white px-4">
                                <div className="py-4">
                                    <p className="text-2xl font-extrabold">Développeur Web Front</p>
                                    <p className="text-sm">Zucchetti / 2021</p>
                                    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et,
                                        eveniet iusto magni maiores molestiae numquam porro possimus sapiente
                                        voluptates? Dicta, id.</p>
                                </div>
                                <div className="py-4">
                                    <p className="text-2xl font-extrabold">Développeur FullStack</p>
                                    <p className="text-sm">HumanSourcing / 2020 - 2021</p>
                                    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et,
                                        eveniet iusto magni maiores molestiae numquam porro possimus sapiente
                                        voluptates? Dicta, id.</p>
                                </div>
                                <div className="py-4">
                                    <p className="text-2xl font-extrabold">Stage Développeur FullStack</p>
                                    <p className="text-sm">EDF CNPE Saint-Alban / 2018 - 2019</p>
                                    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et,
                                        eveniet iusto magni maiores molestiae numquam porro possimus sapiente
                                        voluptates? Dicta, id.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-3xl text-left lg:w-1/2 text-justify">
                            <div className="mb-4 capitalize">Ma formation</div>
                            <div className="border-l-4 border-yellow-300 divide-y divide-white px-4">
                                <div className="py-4">
                                    <p className="text-2xl font-extrabold">Master 1 TIW</p>
                                    <p className="text-sm">Université Claude Bernard / 2019 - 2020</p>
                                    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et,
                                        eveniet iusto magni maiores molestiae numquam porro possimus sapiente
                                        voluptates? Dicta, id.</p>
                                </div>
                                <div className="py-4">
                                    <p className="text-2xl font-extrabold">Licence Informatique</p>
                                    <p className="text-sm">Université Claude Bernard / 2016 - 2019</p>
                                    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et,
                                        eveniet iusto magni maiores molestiae numquam porro possimus sapiente
                                        voluptates? Dicta, id.</p>
                                </div>
                                <div className="py-4">
                                    <p className="text-2xl font-extrabold">Baccalauréat ES</p>
                                    <p className="text-sm">Lycée du Parc / 2013 - 2016</p>
                                    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A, accusamus ad alias aliquam consequuntur culpa cumque cupiditate et,
                                        eveniet iusto magni maiores molestiae numquam porro possimus sapiente
                                        voluptates? Dicta, id.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 flex flex-col gap-2 items-center text-white px-4">
                        <div className="text-3xl text-left mb-4 capitalize w-full">Mes compétences</div>
                        <div className="w-full flex flex-col gap-8 sm:gap-14 sm:flex-row">
                            <div className="w-full text-3xl text-left sm:w-1/2 text-justify">
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
                            <div className="w-full text-3xl text-left sm:w-1/2 text-justify">
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
                        <a href={CV} className="bg-yellow-300 hover:bg-yellow-400 p-4" download>
                            Téléchargez mon CV
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
