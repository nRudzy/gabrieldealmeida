import CV from "../documents/CV_Gabriel_DEALMEIDA_2020.pdf";
import {useTranslation} from "react-i18next";

export default function Cv() {
    const { t, i18n } = useTranslation();

    const experiences = [
        {job: "Développeur Web Front", job_en: "Front Web Developer", company: 'Zucchetti France (ex. HumanSourcing)', period: '2021', description: '', description_en: ''},
        {job: "Développeur FullStack", job_en: "Fullstack Web Developer", company: 'HumanSourcing', period: '2020 - 2021', description: '', description_en: ''},
        {job: "Stage Développeur FullStack", job_en: "Intern Fullstack Developer", company: 'EDF CNPE Saint-Alban', period: '2018', description: '', description_en: ''},
    ];

    const educations = [
        {education: "Master 1 TIW", education_en: "IT Master Degree", school: 'Université Claude Bernard', school_en: 'Claude Bernard University', period: '2019 - 2020', description: '', description_en: ''},
        {education: "Licence Informatique", education_en: "IT Licence Degree", school: 'Université Claude Bernard', school_en: 'Claude Bernard University', period: '2016 - 2019', description: '', description_en: ''},
        {education: "Baccalauréat ES", education_en: "High School Diploma in Economy", school: 'Lycée du Parc', school_en: 'Parc High School', period: '2013 - 2016', description: '', description_en: ''},
    ];

    return (
        <div id="cv" className="bg-gray-700 bg-no-repeat bg-cover overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto">
                <section className="py-24 flex flex-col w-full">
                    <div className="text-center"><span className="bg-yellow-300 px-2">{t('cv')}</span></div>
                    <div className="text-center text-4xl text-white capitalize font-bold pt-1">{t('resumeSummary')}</div>

                    <div className="mt-24 flex flex-col gap-14 items-center text-white px-4 lg:flex-row">
                        <div className="w-full text-3xl text-left lg:w-1/2 text-justify">
                            <div className="mb-4 capitalize">{t('myExperience')}</div>
                            <div className="border-l-4 border-yellow-300 divide-y divide-white px-4">
                                {experiences.map((item) => (
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">{i18n.language === 'fr-FR' ? item.job : item.job_en}</p>
                                        <p className="text-sm">{item.company} / {item.period}</p>
                                        <p className="mt-4 text-sm">{i18n.language === 'fr-FR' ? item.description : item.description_en}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full text-3xl text-left lg:w-1/2 text-justify">
                            <div className="mb-4 capitalize">{t('myFormation')}</div>
                            <div className="border-l-4 border-yellow-300 divide-y divide-white px-4">
                                {educations.map((item) => (
                                    <div className="py-4">
                                        <p className="text-2xl font-extrabold">{i18n.language === 'fr-FR' ? item.education : item.education_en}</p>
                                        <p className="text-sm">{i18n.language === 'fr-FR' ? item.school : item.school_en} / {item.period}</p>
                                        <p className="mt-4 text-sm">{i18n.language === 'fr-FR' ? item.description : item.description_en}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 flex flex-col gap-2 items-center text-white px-4">
                        <div className="text-3xl text-left mb-4 capitalize w-full">{t('mySkills')}</div>
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
                            {t('downloadMyResume')}
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
