import React from 'react'
import "./game2.scss"
const Collapsible = ({ title, content }) => {
  const handleClick = () => {
    const contentElement = document.getElementById(title);
    contentElement.classList.toggle("active");
    if (contentElement.style.display === "block") {
      contentElement.style.display = "none";
    } else {
      contentElement.style.display = "block";
    }
  };

  return (
    <div>
      <button type="button" className="collapsible" onClick={handleClick}>
        {title}
      </button>
      <div className="content" id={title}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapsible;

   

