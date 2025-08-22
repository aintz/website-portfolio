import { useTranslation } from "react-i18next"

export default function AboutMe(){
    const { t } = useTranslation()

    return(
        <div className="window-content about-wrapper">
            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center salutation">{t('salutation')}</p>
                <p className="font-left baloo-chettan-2">{t('aboutmeDes')}</p>
            </div>
            <div className="dashed-line"></div>

            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center title">TECH STACK</p>
                <div className="tech-stack">
                    <p className="font-left baloo-chettan-2">React</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Typescript</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Javascript</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">HTML5</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">CSS3</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">GraphQL</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Bootsrap</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Figma</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Vite</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Github</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Agile</p>
                    <span className="pg-separator player-2 font-shadow">|</span>
                    <p className="font-left baloo-chettan-2">Jira</p>
                </div>
            </div>
            <div className="dashed-line"></div>

            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center title">{t('workExp')}</p>
                <div className="work-column">
                    <div className="work-experience">
                        <p className="player-2 date">2022-2025</p>
                        <div className="work-row">
                            <p className="font-left baloo-chettan-2">Product Engineer</p>
                            <p className=" baloo-chettan-2 t-right">Payfit</p>
                        </div>
                    </div>
                    <div className="work-experience">
                        <p className="player-2 date">2018-2022</p>
                        <div className="work-row">
                            <p className="font-left baloo-chettan-2">Fullstack developer</p>
                            <p className="baloo-chettan-2 t-right">La Fábrica de Sombreros</p>
                        </div>
                    </div>
                    <div className="work-experience">
                        <p className="player-2 date">2016-2018</p>
                        <div className="work-row">
                            <p className="font-left baloo-chettan-2">Fullstack developer</p>
                            <p className=" baloo-chettan-2 t-right">Finanzarel</p>
                        </div>
                    </div>
                    <div className="work-experience">
                        <p className="player-2 date">2018-Present</p>
                        <div className="work-row">
                            <p className="font-left baloo-chettan-2">Freelance Fullstack developer</p>
                            <p className=" baloo-chettan-2 t-right"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashed-line"></div>
            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center title">{t('studies')}</p>
                <div className="work-column">
                    <div className="work-row">
                        <p className="font-left baloo-chettan-2">{t('central')}</p>
                        <p className="baloo-chettan-2 t-right">Universidad Central de Venezuela</p>
                    </div>
                    <div className="work-row">
                        <p className="font-left baloo-chettan-2">UX-UI Design</p>
                        <p className=" baloo-chettan-2 t-right">AllWoman Barcelona</p>
                    </div>
                </div>
            </div>
            

        </div>
    ) 
}