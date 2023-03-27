import classes from "./index.module.css";
import { useLottie } from "lottie-react";
import logoAnim from "../../assets/logoAnimated.json";

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
            </section>
        </>
    );
}