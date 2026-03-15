import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Fiverr</h5>
              </div>
              <h3>03/2023 - Present</h3>
            </div>
            <p>
              Delivering scalable, secure, and modern mobile and web applications 
              tailored to diverse client needs across industries. Built apps using 
              the MERN stack, Next.js, and Flutter.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>COMSATS University Islamabad</h5>
              </div>
              <h3>09/2021 - 07/2025</h3>
            </div>
            <p>
              Abbottabad Campus. Built an AI-powered Hotel & Restaurant Management 
              System using MERN, Flutter, and MongoDB for my Final Year Project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FSC Computer Science</h4>
                <h5>Jinnah Jame School and College</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p>
              Haripur, Pakistan. Completed Matriculation (2018 - 2019) from the same 
              institution, building a strong foundation in computer science and mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
