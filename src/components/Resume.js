import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Download my Resume</h1>
      <p>Thank you for stopping by, please download my resume and let me know what you think or if you have any questions. </p>
      <a href="./assets/Matt_Goldhammer_Resume.pdf" onclick="window.open('myPDF.pdf', '_blank' 'fullscreen=yes'); return false:">My Resume</a>
    </div>
  );
}