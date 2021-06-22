import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from './static/Footer';
import AboutMe from './AboutMe';
import HireMe from './HireMe';
import Cv from "./Cv";
import About from "./About";
import HomePage from "./HomePage";

export default function MainPage() {
    return (
        <div>
            <div className="w-full bg-none fixed bottom-0 flex justify-end">
                <AnchorLink href="#homepage" className="p-3 mr-4 mb-4 text-right bg-yellow-300 rounded-full">
                    <svg height="511pt"
                         className="h-4 w-4 fill-current text-black animate-pulse"
                         viewBox="0 0 511 511.9" width="511pt" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <path d="M466.22,205.787L263.553,3.12c-4.16-4.16-10.923-4.16-15.083,0L45.804,205.787c-21.803,21.803-21.803,57.28,0,79.083
                                    s57.28,21.803,79.083,0l77.781-77.781v251.584c0,29.397,23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333V207.088
                                    l77.781,77.781c21.803,21.803,57.28,21.803,79.083,0C488.001,263.088,488.001,227.589,466.22,205.787z"/>
                            </g>
                        </g>
                    </svg>
                </AnchorLink>
            </div>
            <HomePage/>
            <About/>
            <Cv/>
            <HireMe/>
            <AboutMe/>
            <Footer/>
        </div>


    )
}
