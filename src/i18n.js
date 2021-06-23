import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    hello: "Hi ! I'm Gabriel DE ALMEIDA - Web Developer",
                    basedInLyon: "based in Lyon, France.",
                    aboutMe: "About me",
                    about: "About",
                    knowMeMore: "Know me more",
                    toDescribeMe: "To describe myself professionally,",
                    personalDescription: "I'm a developer with a passion for web design. I like to develop simple, clean and fluid websites that provide real value to the end user. Delivering work on time and on budget that meets client's requirements is how I operate.",
                    yearsOfExperience: "Years of Experience",
                    name: "Name",
                    age: "Age",
                    phoneNumber: "Phone number",
                    personalMail: "E-mail",
                    cv: "Resume",
                    resumeSummary: "A summary of my resume",
                    myExperience: "My Experience",
                    myFormation: "My Education",
                    mySkills: "My Skills",
                    downloadMyResume: "Download my resume",
                    interestedByMe: "Interested in working with me",
                    contactMe: "Contact me",
                    me: "Me",
                    developerLife: "About my life",
                    firstPersonalDescription: "Passionate about cars since I was a child and owner of a Japanese sports car, I spend part of my free time studying mechanics, photographing my car, organizing track trips and practicing drifting.",
                    secondPersonalDescription: "I'm also passionate about art, specifically cartooning, and I devote part of my time to drawing in order to improve my skills. Drawing allows me to express my creativity and my thoughts.",
                    copyright: "Copyright © 2021 Rudzy. All rights reserved.",
                }
            },
            fr: {
                translation: {
                    hello: "Bonjour ! Je m'appelle Gabriel DE ALMEIDA - Développeur web",
                    basedInLyon: "situé à Lyon, France.",
                    aboutMe: "A propos de moi",
                    about: "A propos",
                    knowMeMore: "Découvrez en plus",
                    toDescribeMe: "Pour me décrire professionnellement,",
                    personalDescription: "Je suis un développeur passionné par la conception de sites Web. J'aime développer des sites Web simples, propres et fluides qui offrent une réelle valeur ajoutée à l'utilisateur final. Fournir un travail dans les délais et le budget qui répond aux exigences est ma façon d'opérer.",
                    yearsOfExperience: "Années d'expérience",
                    name: "Nom",
                    age: "Age",
                    phoneNumber: "Number",
                    personalMail: "Email",
                    cv: "CV",
                    resumeSummary: "Un bref résumé de mon CV",
                    myExperience: "Mon expérience",
                    myFormation: "Ma formation",
                    mySkills: "Mes compétences",
                    downloadMyResume: "Téléchargez mon CV",
                    interestedByMe: "Mon profil vous intéresse",
                    contactMe: "Contactez-moi",
                    me: "Moi",
                    developerLife: "La vie d'un développeur",
                    firstPersonalDescription: "Passionné depuis mon enfance par l'automobile et propriétaire d'un véhicule sportif japonais, je consacre une partie de mon temps libre à étudier la mécanique, photographier mon véhicule, organiser des sorties sur circuit ainsi qu'à m'entraîner au drift.",
                    secondPersonalDescription: "Également passionné d'art, précisément par le dessin animé, je consacre une partie de mon temps à réaliser des dessins afin de perfectionner mon niveau. Le dessin me permet d'exprimer ma créativité et mes pensées.",
                    copyright: "Copyright © 2021 Rudzy. Tout droit réservé.",
                }
            }
        },
        lng: "fr", // if you're using a language detector, do not define the lng option
        fallbackLng: "fr",

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
