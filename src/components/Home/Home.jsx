import React, { useState } from "react";
import classes from "./Home.css";
import HeroImg from "../../img/HeroImg.png";
// import heroElipse from "../../img/heroelipse.png";

function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  return (
    <div className={classes.heroMain} style={{padding:"30px",backgroundColor:""}}>
      {/* <img src={heroElipse} alt="" className={classes.heroElipse} /> */}
      <div className={classes.hero}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-left">
            <h1>Welcome to Rajyog Wellness</h1>
            <p className={classes.subtitle}>
              Transform Your Health, Naturally and transform Your Life Through Mindful Movement
            </p>
            <p className={classes.description}>
              Discover how yoga can support your journey to wellness by managing lifestyle disorders such as stress, hypertension, diabetes, depression, and more. Our specialized classes combine traditional practices with modern insights to help you regain control over your body, mind, and overall health.
            </p>
            <button className="btn btn-primary" onClick={handleShow}>
              Book Appointment
            </button>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={HeroImg} alt="Yoga Illustration" className="img-fluid" />
          </div>
        </div>

        {/* Modal */}
        {showForm && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enrollment Form</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    className="form-control"
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={handleClose}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

