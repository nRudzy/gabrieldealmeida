import {useTranslation} from "react-i18next";

export default function HireMe() {
    const { t } = useTranslation();

    return (
        <div id="hire-me" className="bg-gray-800 bg-no-repeat bg-cover overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <section className="py-24 flex flex-col w-full justify-center items-center gap-14">
                    <h1 className="text-4xl font-extrabold text-white text-center">{t('interestedByMe')} ?</h1>
                    <a href="mailto:gabriel.dealmeida69@gmail.com" className="bg-yellow-300 hover:bg-yellow-400 p-4">{t('contactMe')} !</a>
                </section>
            </div>
        </div>
    );
}
