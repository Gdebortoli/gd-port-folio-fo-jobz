import React from 'react';

function Footer() {


  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/Gdebortoli"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/g-debortoli/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/19327601/gigi-d"
    }
  ]

  return (
    <footer className="w-100 p-1 fixed-bottom flex">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;