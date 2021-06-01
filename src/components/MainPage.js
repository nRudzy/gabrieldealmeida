const navigation = [
    {name: 'A propos', href: '#about'},
    {name: 'CV', href: '#'},
    {name: 'Portfolio', href: '#'},
    {name: 'Contact', href: '#'},
];

export default function MainPage() {
    return (
        <div>
            <div className="bg-hero-bg bg-no-repeat bg-cover overflow-hidden h-screen">
                <div id="homepage" className="bg-gray-900 bg-opacity-80 h-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:w-full lg:pb-28 xl:pb-32">
                            <main className="flex flex-col align-center items-center justify-center h-screen text-center gap-8">
                                <div className="-mt-24 rounded-full h-48 w-48 flex items-center justify-center bg-yellow-300">
                                    <div className="bg-bg-pp bg-center bg-no-repeat bg-cover rounded-full h-44 w-44"/>
                                </div>
                                <div className="text-4xl tracking-tight font-extrabold text-white sm:text-4xl md:text-4xl">
                                    <span className="text-center uppercase">Bonjour ! Je m'appelle Gabriel DE ALMEIDA - Développeur web.</span>
                                </div>
                                <div className="text-2l text-white">
                                    <span className="text-center">situé à Lyon, France.</span>
                                </div>
                                <a href="#about" className="mt-20 bg-yellow-300 hover:bg-yellow-400 p-4">A propos de moi</a>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden h-screen">
            </div>
        </div>


    )
}
