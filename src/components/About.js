export default function About() {
    return (
        <div id="about" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden min-h-screen">
            <div className="max-w-3xl mx-auto sm:max-w-7xl sm:mx-auto">
                <section className="py-24 flex flex-col w-full">
                    <div className="text-center"><span className="bg-yellow-300 px-2">A propos</span></div>
                    <div className="text-center text-4xl text-white capitalize font-bold pt-1">Découvrez en plus !
                    </div>

                    <div className="mt-32 flex flex-col gap-12 items-center justify-center text-white sm:flex-row">
                        <div className="w-full px-8 text-xl lg:text-3xl text-left sm:w-2/3 text-justify">
                            <h1 className="mb-4">Pour me décrire professionnellement,</h1>
                            <p>Je suis un développeur passionné par la conception de sites Web.
                                J'aime développer des sites Web simples, propres et fluides qui offrent une réelle
                                valeur ajoutée à l'utilisateur final.
                                Fournir un travail dans les délais et le budget qui répond aux exigences est ma
                                façon d'opérer.
                            </p>
                        </div>
                        <div className="w-1/3 flex flex-col items-center justify-center gap-8 mt-6">
                            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-black text-9xl text-white">2</div>
                            <p className="text-2xl sm:text-center">Années d'Expérience</p>
                        </div>
                    </div>

                    <div className="mt-32 flex flex-col gap-6 lg:gap-12 items-center text-white lg:flex-row px-4">
                        <div className="text-center lg:w-1/4 lg:w-full">
                            <h1 className="mb-4 text-2xl">Nom: </h1>
                            <p className="font-extrabold">Gabriel DE ALMEIDA</p>
                        </div>
                        <div className="text-center lg:w-1/4 lg:w-full">
                            <h1 className="mb-4 text-2xl">Age: </h1>
                            <p className="font-extrabold">25 ans</p>
                        </div>
                        <div className="text-center lg:w-1/4 lg:w-full">
                            <h1 className="mb-4 text-2xl">Numéro: </h1>
                            <p className="font-extrabold">(+33) 0636530570</p>
                        </div>
                        <div className="text-center lg:w-1/4 lg:w-full">
                            <h1 className="mb-4 text-2xl">Email: </h1>
                            <p className="font-extrabold">gabriel.dealmeida69@gmail.com</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
