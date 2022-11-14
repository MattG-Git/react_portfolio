import React from 'react';

export default function Resume() {
  return (
    <div className="text-center">
      <h1>Download my Resume</h1>
      <p>Thank you for stopping by, please download my resume and let me know what you think or if you have any questions. </p>
      <a href="./assets/Matt_Goldhammer_Resume.pdf" onclick="window.open('Matt_Goldhammer_Resume.pdf', '_blank' 'fullscreen=yes'); return false:">My Resume</a>
    </div>
  );
}