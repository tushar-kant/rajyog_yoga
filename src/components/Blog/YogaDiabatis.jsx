import React from "react";

// Sample image imports for the blog
import yogaImg from "../../img/Yoga/img11.jpeg";

function YogaBlog() {
  return (
    <div style={blogContainerStyle}>
      <header style={headerStyle}>
        <h1>10 Effective Yoga Poses for Lowering Blood Pressure</h1>
        <p style={introStyle}>
          High blood pressure, or hypertension, is a common health issue that
          can increase the risk of heart disease, stroke, and other
          complications. Yoga, with its focus on relaxation, deep breathing, and
          mindful movement, can be an effective tool for managing blood pressure.
          By promoting relaxation and reducing stress, yoga can help to lower
          blood pressure naturally. Here are ten yoga poses that can assist in
          reducing blood pressure and enhancing overall well-being.
        </p>
      </header>

      <section style={poseSectionStyle}>
        <h2>Yoga Poses</h2>
        <div style={poseContainerStyle}>
          <Pose
            title="Sukhasana (Easy Pose) with Pranayama"
            description="Sit cross-legged with a straight spine. Close your eyes, rest your hands on your knees, and begin deep, slow breathing (Pranayama), focusing on each inhale and exhale."
            benefits="This gentle seated pose combined with focused breathing calms the mind, reduces stress, and enhances oxygen flow, which can help lower blood pressure."
          />
          <Pose
            title="Balasana (Child’s Pose)"
            description="Kneel on the floor, sit back on your heels, and extend your arms forward, lowering your torso to the floor. Rest your forehead on the mat."
            benefits="This resting pose gently stretches the spine and calms the nervous system, reducing tension and promoting relaxation."
          />
          <Pose
            title="Virasana (Hero Pose)"
            description="Kneel on the floor with your knees together and your feet slightly apart. Sit back between your feet, lengthening the spine."
            benefits="Virasana promotes deep breathing and relaxation, calming the mind and body, which can aid in reducing blood pressure."
          />
          {/* Repeat the <Pose /> component for other yoga poses */}
        </div>
      </section>

      <section style={tipsSectionStyle}>
        <h3>Tips for Practicing Yoga to Lower Blood Pressure</h3>
        <ul style={tipsListStyle}>
          <li>Practice Regularly: Aim to include these poses in your routine at least 3-4 times a week for best results.</li>
          <li>Focus on Deep Breathing: Slow, deep breathing activates the parasympathetic nervous system, which is essential for lowering blood pressure.</li>
          <li>Avoid Strenuous Poses: Stick to gentle, restorative poses and avoid poses that require intense exertion, which could temporarily increase blood pressure.</li>
          <li>Listen to Your Body: Avoid any pose that feels uncomfortable or strains your muscles. Yoga should feel rejuvenating, not taxing.</li>
          <li>End with Savasana: This calming pose allows your body to absorb the benefits of the practice fully.</li>
        </ul>
      </section>

      <footer style={footerStyle}>
        <p>
          Practicing these yoga poses regularly can make a positive difference in
          your blood pressure and overall health. As with any new fitness
          regimen, it’s always wise to consult with a healthcare professional,
          especially if you have any health conditions. Embrace a balanced yoga
          practice, and enjoy the journey to a healthier, more relaxed you.
        </p>
      </footer>
    </div>
  );
}

const blogContainerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#fff",
  color: "#333",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "40px",
};

const introStyle = {
  fontSize: "1.1rem",
  color: "#555",
  lineHeight: "1.5",
};

const poseSectionStyle = {
  marginBottom: "40px",
};

const poseContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const tipsSectionStyle = {
  marginBottom: "40px",
};

const tipsListStyle = {
  listStyleType: "disc",
  marginLeft: "20px",
  fontSize: "1rem",
};

const footerStyle = {
  textAlign: "center",
  fontSize: "1rem",
  color: "#555",
};

function Pose({ title, description, benefits }) {
  return (
    <div style={poseStyle}>
      <h3>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
      <p style={benefitsStyle}>{benefits}</p>
    </div>
  );
}

const poseStyle = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

const descriptionStyle = {
  fontSize: "1rem",
  color: "#555",
  marginBottom: "10px",
};

const benefitsStyle = {
  fontSize: "1rem",
  color: "#444",
  fontStyle: "italic",
};

export default YogaBlog;
