import React from 'react';

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quisquam ipsa quidem tempora eveniet porro voluptatum repellendus repellat quaerat deleniti iure suscipit libero, quam doloremque enim. Cupiditate, sint error
          veritatis possimus odio maiores corporis quibusdam?
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
