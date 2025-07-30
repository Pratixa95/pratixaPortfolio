// 
import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import logo from './assets/PortfolioImg/logo.png';
import profileImg from './assets/PortfolioImg/pratixa_image.png';
import projectImg from './assets/PortfolioImg/project.png';
import mailIcon from './assets/PortfolioImg/mail_icon.png';
import phoneIcon from './assets/PortfolioImg/phone_icon.png';



const App = () => {
  return (
    <div className="container-fluid m-0 p-0 mainDiv">
    <Nav/>
      {/* Home Section */}
      <section id="home" >
      <div className="row m-4 d-flex align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <p className="mainTxt">Hello, I'm Pratixa Joshi</p> <br />
          <p className="lead">
            I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Bachelor of Computer Application graduate from India.
          </p> <br />
          <p className='sublead'>
            I've worked with startups as a core developer and delivered custom freelance projects. Passionate about learning new technologies and solving problems through code.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={profileImg}
            alt="Pratixa Joshi"
            className="img-fluid"
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>
        
      </section>

      {/* Skills Section */}
      <section id="skills" className="">
        <div className="bg-light txtDiv">
          <p className='title'><u>Skills</u></p>
        </div>

        <div className="row m-2 g-4 fs-5 justify-content-center">
          {[
            {
              title: 'Web Design',
              desc: 'I love design — its the foundation of every web project I build.',
            },
            {
              title: 'Web Development',
              desc: 'Experienced in full stack development and deploying real-world apps.',
            },
            {
              title: 'Problem Solving',
              desc: 'Strong in tackling technical and real-life problems with creative thinking.',
            },
          ].map((skill, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{skill.title}</h5>
                  <p className="card-text">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <h2 className="mb-3">TECH I'M FAMILIAR WITH</h2>
          <hr className="mx-auto" style={{ width: '100px' }} />
        </div>

        <table className="table table-bordered fs-5 text-center mt-3">
          <tbody>
            <tr>
              <td>HTML5</td>
              <td>JavaScript</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>CSS3</td>
              <td>Git</td>
              <td>React.js</td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>Bootstrap</td>
              <td>Express.js</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* project section */}
    <section id="project" className=" ">
    <div className="mb-4 bg-light txtDiv">
      <p className='title'><u>Project</u></p>
    </div>

    <div className="row justify-content-center">
      <div className="col-12 col-md-10">
        <div className="card bg-warning shadow-lg">
          <img
            src={projectImg}
            alt="Project"
            className="img-fluid card-img-top"
            style={{height: 'auto', maxHeight: '500px' }}
          />
          <div className="card-body">
            <p className="card-text text-justify projectTxt">
              A fully functional React.js-based frontend integrated with a Django backend.
              Features include a responsive layout, smooth UI/UX, and API integration.
              <br />
              <strong>Stack used:</strong> React.js, CSS3, Bootstrap 5, Django.
            </p>
          </div>
        </div>
      </div>
    </div>
  
</section>


      {/* Experience Section */}
      <section id="experience" className="">
        <div className="mb-4 bg-light txtDiv">
          <p className='title'><u>Experience</u></p>

          {/* <img
            src="src/assets/PortfolioImg/experience.png"
            alt="Experience"
            className="img-fluid"
            style={{ height: '80px', width: '300px' }}
          /> */}

        </div>

        <div className="row fs-5 m-2">
          <div className="col-md-8">
            <h3>Back-Office Executive- <a href="https://trishulaindia.com/" target="_blank" rel="noopener noreferrer">Trishula India</a></h3>
            <p>
              Handled international marketing operations, export documentation, product orders, invoicing, and social media at Vadodara. Led 5S audits and Kaizen projects.
            </p>
            <p><strong>Dec 2020-Nov 2022</strong></p>

            <h3 className="mt-4">Front-Desk Executive – <a href="https://samarthdiamond.com/" target="_blank" rel="noopener noreferrer">Samarth Diamond</a></h3>
            <p>
              Led software operations, trained staff on 5S/Kaizen, conducted monthly audits, and mentored a team of 30-35 in Visnagar.
            </p>
            <p><strong>June 2017-Oct 2019</strong></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="">
      <div className="container-fluid p-1 text-white contactDiv ">
      
        <div className='col-12 contactTxt'>
          <p className="text-center">Let's Connect</p>
        </div>
        <div className="row m-0 p-0 text-center d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
        <div className="card border-0 text-white d-flex flex-column align-items-center justify-content-center eventFooter1">
        <img src={mailIcon} style={{ height: '30px', width: '30px' }} alt="email" />
        <p className="mt-2 mb-1">mahetapratixa7695@gmail.com</p>
        </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-4">
        <div className="card border-0 text-white d-flex flex-column align-items-center justify-content-center eventFooter2">
        <img src={phoneIcon} style={{ height: '30px', width: '30px' }} alt="phone" />
        <p className="mt-2 mb-1">+91-7574026950</p>
        </div>
        </div>
      </div>
      </div> 
      </section> */}
    <section id="contact" className="contact-section py-5">
  <div className="container text-white">
    {/* Title */}
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h2 className="contactTxt">Let's Connect</h2>
      </div>
    </div>

    {/* Contact Cards */}
    <div className="row justify-content-center text-center">
      {/* Email */}
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
        <div className="card contact-card shadow-sm p-3 h-100 d-flex flex-column justify-content-center align-items-center">
          <img src={mailIcon} alt="Email" className="mb-2" style={{ height: '30px', width: '30px' }} />
          <p className="mb-0">mahetapratixa7695@gmail.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
        <div className="card contact-card shadow-sm p-3 h-100 d-flex flex-column justify-content-center align-items-center">
          <img src={phoneIcon} alt="Phone" className="mb-2" style={{ height: '30px', width: '30px' }} />
          <p className="mb-0">+91-7574026950</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default App;
