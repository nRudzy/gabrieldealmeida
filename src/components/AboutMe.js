import {useTranslation} from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div id="about-me" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto">
                <section className="py-24 flex flex-col w-full">
                    <div className="text-center"><span className="bg-yellow-300 px-2">{t('me')}</span></div>
                    <div className="text-center text-4xl text-white capitalize font-bold pt-1">{t('developerLife')}</div>

                    <div className="mt-24 flex flex-col gap-14 items-center text-white lg:flex-row">
                        <div className="flex flex-col gap-14 items-center text-white sm:flex-row">
                            <div className="rounded-full h-64 w-64 flex items-center justify-center bg-yellow-300">
                                <div className="bg-me-z bg-center bg-no-repeat bg-cover rounded-full h-60 w-60"/>
                            </div>
                            <div className="rounded-full h-64 w-64 flex items-center justify-center bg-yellow-300">
                                <div className="bg-z bg-center bg-no-repeat bg-cover rounded-full h-60 w-60"/>
                            </div>
                        </div>
                        <div className="w-full px-4 text-xl sm:text-3xl lg:w-1/2 text-justify">{t('firstPersonalDescription')}</div>
                    </div>

                    <div className="mt-24 flex flex-col-reverse gap-14 items-center text-white lg:flex-row">
                        <div className="w-full px-4 text-xl sm:text-3xl lg:w-1/2 text-justify">{t('secondPersonalDescription')}</div>
                        <div className="flex flex-col gap-14 items-center text-white sm:flex-row">
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
    )
}
