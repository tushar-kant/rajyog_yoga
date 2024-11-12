// Dashboard.js
import React from "react";
import Home from "./Home";
import YogaInfo from "./YogaInfo";
import Testimonials from "./Testimonials";
import MembershipPricing from "./MembershipPricing";
import YogaTherapyPrinciples from "./YogaTherapyPrinciples";
import MovingText from "./MovingText";
import YogaBenefits from "./YogaBenefits";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Optional sidebar or navigation could go here */}
      
      {/* Main content area */}
      <div className="content">
        <Home />
        <MovingText />

        <YogaTherapyPrinciples />
        <YogaBenefits />
        <MembershipPricing />

        <Testimonials />
   <div className="m-4"><br /></div>
   <div className="m-4"></div>

        <YogaInfo />
      </div>
    </div>
  );
}

export default Dashboard;
