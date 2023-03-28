import classes from "./index.module.css";
import { useLottie } from "lottie-react";
import logoAnim from "../../assets/logoAnimated.json";
import { HashLink } from "react-router-hash-link";

export default function HomePage() {
    const options = {
        animationData: logoAnim,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <>
            <section className={classes.headerSection}>
                <div className={classes.lottieAnim}>{View}</div>
                <div className={classes.date}>XX - YY JULY 2023</div>
                <div className={classes.headerDesc}>Unleash your creativity and problem-solving skills in a weekend of innovation, collaboration, and fun. Showcase your talent, win prizes, and make a difference with cutting-edge technology!</div>
                <HashLink className={classes.btnWrap} to="#">
                    <div className={classes.svgicon} id="svg-6" data-svg-icon="assets/img/icons/shape.svg"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 188 61">
                        <path className={classes.btnPath} d="M874,554.154L893.08,524h146.67L1060,552.843,1039.75,583H893.08Z" transform="translate(-873 -523)" ></path>
                    </svg></div>
                    <span>REGISTER</span>
                </HashLink>
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
                    <div >WIN LOADS OF EXCITING</div>
                    <div>PRIZES AND SWAGS</div>
                </div>
            </section>
        </>
    );
}