import AnchorLink from 'react-anchor-link-smooth-scroll';
import RudzyLogo from '../images/rudzy_logo.png';
import CV from '../documents/CV_Gabriel_DEALMEIDA_2020.pdf';

const navigation = [
    {name: 'A propos', href: '#about'},
    {name: 'CV', href: '#cv'},
    {name: 'Moi', href: '#about-me'},
];

export default function MainPage() {
    return (
        <div>
            <div id="homepage" className="bg-hero-bg bg-no-repeat bg-cover overflow-hidden h-screen">
                <div className="bg-gray-900 bg-opacity-80 h-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                            <section
                                className="flex flex-col align-center items-center justify-center h-screen text-center gap-8">
                                <div className="-mt-24 rounded-full h-48 w-48 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-bg-pp bg-center bg-no-repeat bg-cover rounded-full h-44 w-44"/>
                                </div>
                                <div className="text-4xl tracking-tight font-extrabold text-white sm:text-4xl md:text-4xl">
                                    <span className="text-center uppercase">Bonjour ! Je m'appelle Gabriel DE ALMEIDA - Développeur web.</span>
                                </div>
                                <div className="text-2l text-white">
                                    <span className="text-center">situé à Lyon, France.</span>
                                </div>
                                <AnchorLink href="#about" className="mt-20 bg-yellow-300 hover:bg-yellow-400 p-4">
                                    A propos de moi
                                </AnchorLink>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex flex-col w-full">
                        <div className="text-center"><span className="bg-yellow-300 px-2">A propos</span></div>
                        <div className="text-center text-4xl text-white capitalize font-bold pt-1">Découvrez en plus !
                        </div>

                        <div className="mt-32 flex gap-12 items-center text-white">
                            <div className="text-3xl text-left w-2/3 text-justify">
                                <h1 className="mb-4">Pour me décrire professionnellement,</h1>
                                <p>Je suis un développeur passionné par la conception de sites Web.
                                    J'aime développer des sites Web simples, propres et fluides qui offrent une réelle
                                    valeur ajoutée à l'utilisateur final.
                                    Fournir un travail dans les délais et le budget qui répond aux exigences est ma
                                    façon d'opérer.
                                </p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center gap-8">
                                <div
                                    className="rounded-full h-20 w-20 flex items-center justify-center bg-black text-9xl text-white">2
                                </div>
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
                        <div className="text-center text-4xl text-white capitalize font-bold pt-1">
                            Un bref résumé de mon CV
                        </div>

                        <div className="mt-24 flex gap-14 items-center text-white">
                            <div className="text-3xl text-left w-1/2 text-justify">
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
                            <div className="text-3xl text-left w-1/2 text-justify">
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
                            <a href={CV} className="bg-yellow-300 hover:bg-yellow-400 p-4" download>
                                Téléchargez mon CV
                            </a>
                        </div>
                    </section>
                </div>
            </div>
            <div id="hire-me" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex flex-col w-full justify-center items-center gap-14">
                        <h1 className="text-4xl font-extrabold text-white">Mon profil vous intéresse ?</h1>
                        <a href="mailto:gabriel.dealmeida69@gmail.com"
                           className="bg-yellow-300 hover:bg-yellow-400 p-4">Contactez-moi !</a>
                    </section>
                </div>
            </div>
            <div id="about-me" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex flex-col w-full">
                        <div className="text-center"><span className="bg-yellow-300 px-2">Moi</span></div>
                        <div className="text-center text-4xl text-white capitalize font-bold pt-1">
                            La vie d'un développeur
                        </div>

                        <div className="mt-24 flex gap-14 items-center text-white">
                            <div className="text-3xl text-left w-1/2 text-justify flex gap-6">
                                <div className="rounded-full h-64 w-64 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-me-z bg-center bg-no-repeat bg-cover rounded-full h-60 w-60"/>
                                </div>
                                <div className="rounded-full h-64 w-64 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-z bg-center bg-no-repeat bg-cover rounded-full h-60 w-60"/>
                                </div>
                            </div>
                            <div className="text-3xl text-left w-1/2 text-justify">
                                Passionné depuis mon enfance par l'automobile et propriétaire d'un véhicule sportif japonais,
                                je consacre une partie de mon temps libre à étudier la mécanique, photographier mon
                                véhicule, organiser des sorties sur circuit ainsi qu'à réaliser des partenariats via mon
                                compte Instagram.
                            </div>
                        </div>

                        <div className="mt-24 flex gap-14 items-center text-white">
                            <div className="text-3xl text-left w-1/2 text-justify">
                                Egalement passionné d'art, précisément par le dessin d'animés, je consacre une partie
                                de mon temps à réaliser des dessins afin de perfectionner mon niveau. Le dessin me permet
                                d'exprimer ma créativité et mes pensées.
                            </div>
                            <div className="text-3xl text-left w-1/2 text-justify flex justify-end gap-6">
                                <div className="rounded-full h-60 w-60 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-naruto bg-center bg-no-repeat bg-cover rounded-full h-56 w-56"/>
                                </div>
                                <div className="rounded-full h-60 w-60 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-goku bg-center bg-no-repeat bg-cover rounded-full h-56 w-56"/>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
            <div id="footer" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <section className="py-24 flex w-full justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                {navigation.map((item) => (
                                    <AnchorLink key={item.name} href={item.href}
                                       className="font-sm text-white hover:text-yellow-300">
                                        {item.name}
                                    </AnchorLink>
                                ))}
                            </div>
                            <div className="flex justify-end gap-6">
                                <span className="text-white">Copyright © 2021 Rudzy. Tout droit réservé.</span>
                                <a href="https://www.facebook.com/gabriel.vilela.5439087" target="_blank"
                                   rel="noreferrer">
                                    <svg height="511pt"
                                         className="h-6 w-6 fill-current text-yellow-300 hover:text-blue-600 transition duration-300"
                                         viewBox="0 0 511 511.9" width="511pt" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/>
                                    </svg>

                                </a>
                                <a href="https://www.instagram.com/rudzy_350" target="_blank" rel="noreferrer">
                                    <svg height="511pt"
                                         className="h-6 w-6 fill-current text-yellow-300 hover:text-red-500 transition duration-300"
                                         viewBox="0 0 511 511.9" width="511pt" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/>
                                        <path
                                            d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/>
                                        <path
                                            d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/nRudzy" target="_blank" rel="noreferrer">
                                    <svg height="511pt"
                                         className="h-6 w-6 fill-current text-yellow-300 hover:text-white transition duration-300"
                                         viewBox="0 0 511 511.9" width="511pt" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g>
                                                <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
                                                c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
                                                c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
                                                c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
                                                c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
                                                c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
                                                c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
                                                c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
                                                c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <img className="h-10 w-10" src={RudzyLogo} alt=""/>
                            <div className="text-white text-xl font-extrabold ml-6">Rudzy</div>
                        </div>

                    </section>
                </div>
            </div>
        </div>


    )
}
