import codingSvg from "../../assets/coding.svg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <img src={codingSvg} alt="codingSvg" className={styles.image} />
      <h1 style={{marginTop: '2rem', marginBottom:'2rem'}}> Hi, &#128075; I'm Ersen</h1>
      <h4>I’m currently learning Full-Stack Development Languages.</h4>
      <h4>
        I've already known HTML, Css, JavaScript, ReactJS, SQL, Linux,
        Python.
      </h4>
      <h4>
        <a href="70ozturkersen@gmail.com" className={styles.anchor}>Send email</a> :
        70ozturkersen@gmail.com
      </h4>
    </div>
  );
};

export default About;
