import React from 'react';
import '../styles/SocialMedia.css';
import LinkedInImg from '../assets/linkedin.svg';
import GitHubImg from '../assets/github.svg';

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        className="media-tag linkedin-tag"
        href="https://www.linkedin.com/in/shichatim"
        target="_blank"
        rel="noreferrer"
      >
        <div className="linkedin-bg"></div>
        <img
          type="image"
          src={LinkedInImg}
          alt="View Timofey on LinkedIn"
          className="social-icon"
        />
      </a>
      <a
        className="media-tag github-tag"
        href="https://github.com/timshicha"
        target="_blank"
        rel="noreferrer"
      >
        <div className="github-bg"></div>
        <img
          type="image"
          src={GitHubImg}
          alt="View Timofey on GitHub"
          className="social-icon"
        />
      </a>
    </div>
  );
}

export default SocialMedia;
