import React from 'react'

const Intro = () => {
  return (
    <div className="intro">
       
    <h2>About Me</h2>
    <p>As a passionate Front-End Developer, I specialize in crafting responsive, visually appealing, and user-friendly websites and web applications. With a deep understanding of HTML5, CSS3, JavaScript, and TypeScript, I bring designs to life, ensuring seamless user experiences across all devices. My expertise in React.js, Angular, and modern front-end frameworks enables me to build dynamic and interactive user interfaces.
I focus on performance optimization, accessibility, and clean code practices, ensuring every project meets the highest standards. Collaborating closely with designers and back-end developers, I ensure that UI/UX visions are transformed into functional, interactive applications. With experience in using tools like Git, Webpack, and SASS, I streamline the development process and deliver maintainable code.
Constantly learning and adapting to new technologies, I am committed to enhancing my skills to stay ahead of the latest trends in web development. Whether it’s building a single-page application or optimizing existing websites, I aim to provide efficient solutions that meet both user needs and business goals.
    </p>
   <h2>My Skills</h2>
   <div className="skillContainer">
     <div className="skillItems">HTML: <div className="skills hundred"></div></div>
     <div className="skillItems">CSS: <div className="skills S5"></div></div>
     <div className="skillItems">TYPESCRIPT: <div className="skills hundred"></div></div>
     <div className="skillItems">JAVASCRIPT: <div className="skills S5"></div></div>

     <div className="skillItems">REACT: <div className="skills fifty"></div></div>
     <div className="skillItems">NEXT.JS: <div className="skills t5"></div></div>
   </div>  

</div>
  )
}

export default Intro