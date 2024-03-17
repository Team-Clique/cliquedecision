import React from "react"; // Importing React library

// Component for the footer section
const Footer = () => {
  // Social media icons and their respective links
  const socialContent = [
    {
      icon: "fa-facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: "fa-twitter",
      link: "https://twitter.com/",
    },
    {
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="d-lg-flex align-items-center justify-content-between"> {/* Container for footer content */}
      <div className="logo text-center"> {/* Placeholder for logo */} 
      </div>
      <ul className="d-flex justify-content-center social-icon style-none"> {/* List of social media icons */}
        {socialContent.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer"> {/* Link to social media platforms */}
              <i className={`fa ${val.icon}`}></i> {/* Social media icon */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer; // Exporting the Footer component as default
