import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from 'react-i18next';

export default function HomePage() {
    const { t } = useTranslation();

    return (
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
                                <span className="text-center uppercase">{t('hello')}.</span>
                            </div>
                            <div className="text-2l text-white">
                                <span className="text-center">{t('basedInLyon')}</span>
                            </div>
                            <AnchorLink href="#about" className="mt-20 bg-yellow-300 hover:bg-yellow-400 p-4">
                                {t('aboutMe')}
                            </AnchorLink>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
