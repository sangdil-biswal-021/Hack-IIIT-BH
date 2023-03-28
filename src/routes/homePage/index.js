import classes from "./index.module.css";
import { useLottie } from "lottie-react";
import logoAnim from "../../assets/logoAnimated.json";
import { HashLink } from "react-router-hash-link";
import { InView } from 'react-intersection-observer';

export default function HomePage() {
    const options = {
        animationData: logoAnim,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <>
            <section className={classes.headerSection}>
                <InView triggerOnce>{({ inView, ref }) => (
                    <div className={classes.lottieAnim} ref={ref} style={{ animation: inView ? `${classes.goUp} 1s forwards .3s ease` : "none" }}>{View}</div>
                )}</InView>
                <InView triggerOnce>{({ inView, ref }) => (
                    <div className={classes.date} ref={ref} style={{ animation: inView ? `${classes.goUp} 1s forwards .6s ease` : "none" }}>XX - YY JULY 2023</div>
                )}</InView>
                <InView triggerOnce>{({ inView, ref }) => (
                    <div className={classes.headerDesc} ref={ref} style={{ animation: inView ? `${classes.goUp} 1s forwards .9s ease` : "none" }}>Unleash your creativity and problem-solving skills in a weekend of innovation, collaboration, and fun. Showcase your talent, win prizes, and make a difference with cutting-edge technology!</div>
                )}</InView>
                <InView triggerOnce>{({ inView, ref }) => (
                    <HashLink className={classes.btnWrap} to="#" ref={ref} style={{ animation: inView ? `${classes.scaleToFull} 1s forwards 1.2s` : "none" }}>
                        <div className={classes.svgicon} id="svg-6" data-svg-icon="assets/img/icons/shape.svg"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 188 61">
                            <path className={classes.btnPath} d="M874,554.154L893.08,524h146.67L1060,552.843,1039.75,583H893.08Z" transform="translate(-873 -523)" ></path>
                        </svg></div>
                        <span>REGISTER</span>
                    </HashLink>
                )}</InView>
            </section>

            <section className={classes.sponsorsScrollWrap}>
                <div className={classes.sponsorsScroll}>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                    <div className={classes.sScrollCard}>
                        <img src="https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg" alt="sponsor" />
                    </div>
                </div>
            </section>

            <section className={classes.prizesSec}>
                <div className={classes.headerText}>
                    <InView triggerOnce>{({ inView, ref }) => (
                        <div ref={ref} style={{ animation: inView ? `${classes.goDown} 1s forwards ease` : "none" }}>WIN LOADS OF EXCITING</div>
                    )}</InView>
                    <InView triggerOnce>{({ inView, ref }) => (
                        <div ref={ref} style={{ animation: inView ? `${classes.scaleToFull} 1.2s forwards ease-out` : "none" }}>PRIZES AND SWAGS</div>
                    )}</InView>
                </div>

                <div className={classes.decoratedBtnWrap}>
                    <div className={classes.decoratedBtn}>PRIZES</div>
                    <div className={classes.decoratedBtn}>SPONSORED TRACKS</div>
                    <div className={classes.decoratedBtn}>SWAGS</div>
                </div>

                <div className={classes.prizesTab}>
                    Hey
                </div>
            </section>
        </>
    );
}