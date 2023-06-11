import classes from "./index.module.css";
import { useLottie } from "lottie-react";
import logoAnim from "../../assets/comingSoon.json";
import { HashLink } from "react-router-hash-link";
import { InView } from 'react-intersection-observer';
import myImg from "../../assets/bottomVC.png";
import myImg1 from "../../assets/sideVC.png";

function Prizes(){
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
                    <div className={classes.parallaX} ref={ref} style={{ animation: inView ? `${classes.goUp} 1s forwards .3s ease` : "none" }}>
                        <img src ={myImg} alt="none"/>
                        </div>
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
        </>
    );
}

export default Prizes;