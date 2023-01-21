import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const list = links.map(link =>(
    <a key={link} href={"#" + link}>
      {link}
      </a>
     
  ))

  return  (<nav>{list}</nav>)
  
}

export default NavBar;
