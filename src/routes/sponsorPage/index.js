import React from "react";
import "./indexTemp.css";
import classes from "./index.module.css";
import Grid from "./grid";
import { InView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';


// const xyz="http://localhost:3000/Brochuree.pdf";
const DownloadFile=()=>{
  // const fileName=url.split('/',).pop();
    const atag=document.createElement('a');
    atag.href="../../assets/Bronchuree.pdf";
    // atag.setAttribute('download',fileName)
    // document.body.appendChild(atag);
    atag.download="Bronchuree.pdf";
    atag.click();
    // atag.remove();
}

const Sponsor = () => {

  const backgroundImagee="../../assets/1080940.jpg";

  const DownloadFile=()=>{
    // const fileName=url.split('/',).pop();
      const atag=document.createElement('a');
      atag.href="../../assets/Bronchuree.pdf";
      // atag.setAttribute('download',fileName)
      // document.body.appendChild(atag);
      atag.download="Bronchuree.pdf";
      atag.click();
      // atag.remove();
  }
  return (
    <div className="spons-conatiner" initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    }}
    >
      <InView triggerOnce>{({ inView, ref }) => (
        <Tilt  glareEnable={true} glareColor= "#194555"  tiltMaxAngleX={10} tiltMaxAngleY={10} >
  <div className="hello" ref={ref} style={{ animation: inView ? `${classes.goRight} 1s forwards .3s ease` : "none" }}>

        {/* <div className="hello"> */}
          <div className="blurBG"></div>
          {/* <ul className="my-list"> */}
          <h1 className="EA" >Why Sponsor Us?</h1>
          <h3 >
           <li> Sponsoring the hackathon provides a unique opportunity to connect
            with the brightest minds in the industry. By partnering with us, you
            will be able to showcase your brand to a highly engaged and talented
            audience of developers, designers, and entrepreneur.</li>
            <br />
            <li>Sponsorships put your brand visuals in front of large audiences who
            haven"t heard of your businesses. It is an effective way to build brand
            loyalty and establish an emotional connection with customers.
            <br /></li>
            <li>
            By sponsoring our hackathon, you can differentiate your brand and
            create a lasting impression in the minds of your target audience.
            Sponsoring us can enhance your business's image by demonstrating
            your commitment to spreading positive messages and supporting the
            community</li>
            <br /><li>
            By partnering with us, you can create positive brand associations.
            Moreover, sponsoring the hackathon is an investment in the future. By
            supporting the next generation of innovators, you are helping to
            create a better world. You are helping to nurture creativity,
            encourage innovation, and inspire new ideas.</li>
            <br />
          </h3>
          {/* </ul> */}
        </div>
        </Tilt>
        )}</InView>
        <br />
        <br />
        <InView triggerOnce>{({ inView, ref }) => (
           <Tilt glareEnable={true} glareColor= "#194555"  tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div className="hello" ref={ref} style={{ animation: inView ? `${classes.goLeft} 1s forwards .3s ease` : "none" }}>
          {/* <ul className="my-list"> */}
          <h1 className="EA">Why be our Title Sponsor?</h1>
          <h3>
            <li>
            Being a title sponsor, your brand will be prominently displayed and
            recognized throughout the hackathons. This will increase your brand
            awareness and recognition among a tech-savvy audiences
            </li><br />
           
            <li>
            We will offer our title sponsor to conduct workshops to spread
            product   awareness and enhance brand reach among the target audience
            </li><br />
            <li>
            The title sponsors brand name and logo &ill be used everywhere i.e
            in all the posters, social media etc</li>
            <br />
           
            <li>
            Sponsoring a hackathon can also show your commitment to the tech
            community and support for innovation and entrepreneurship</li>
          </h3>
          {/* </ul> */}
        </div>
        </Tilt>
         )}</InView>
        <br />
        <br />
        <InView triggerOnce>{({ inView, ref }) => (
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} >
        <div className="hello" ref={ref} style={{ animation: inView ? `${classes.goRight} 1s forwards .3s ease` : "none" }}>
        <h1 className="EA"> SPONSORSHIP PACKAGE</h1>
        <Grid />
        </div>
        </Tilt>
        )}</InView>
        <br />
        <br />

        <InView triggerOnce>{({ inView, ref }) => (
        <div className="hello" ref={ref} style={{ animation: inView ? `${classes.goLeft} 1s forwards .3s ease` : "none" }}>
          <h1 className="EA">Contact Us</h1>
          <div className="row">
            <h2>Feel free to reach us at :</h2>
            <h3>
              IIIT Bhubaneswar Gothapatna,<br/>Malipada Bhubaneswar,<br/> Odisha 751003<br/>
              https://hack-iiit-bh.pages.dev
            </h3>
          </div>



          <div className="row">
            <h2>Email-Us</h2>
            <h3>For Sponsorship<h3/>sponsorship.hackiiitbh@iiit-bh.ac.in<br/> For any other
              queries <br/><b>tech-society@iiit-bh.ac.in</b>
            </h3>
          </div>

          <div className="row">
            <h2>Person-In-Charge</h2>
            <h3>
              Rajashree Mohanty<br/>
              Assistant Placement Officer<br/>
              +91 7992991136<br/>
              rajashree@iiit-bh.ac.in
              <br/><br/><br/>
              Swoyam Siddharth Nayak <br/>
              Tech Secretary <br/>
              +91 7608086659 <br/>
              tech-society@iiit-bh.ac.in 
              <br/><br/>
              Ayush Kumar <br/>
              Pr Marketing & Sponsorship Head, Hack IIITBh<br/>
              +91 9060445435<br/>
              sponsorship.hackiiitbh@iiit-bh.ac.in
            </h3>
          </div>

          <div className="row">
            <button className="btn" onClick={DownloadFile }>Download</button>
          </div>
        </div>
        )}</InView>
      
    </div>
  );
};

export default Sponsor;
