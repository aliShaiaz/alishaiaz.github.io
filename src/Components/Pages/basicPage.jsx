import React from "react";
import URLs from "./url";

const BasicPage = () => {
  return (
    <div className="basicPage">
      <h1>Shaiaz Ali</h1>
      <p>
        Bachelor of Computer Science <br />
        American International University - Bangladesh <br />
        <br />
        Email: shaiaz.ali@gmail.com <br />
        FB: <URLs url={"https://facebook.com/alishaiaz"} />
        <br />
        LinkedIn: <URLs url={"https://www.linkedin.com/in/alishaiaz/"} />
        <br />
        Github: <URLs url={"https://github.com/alishaiaz"} />
        <br />
      </p>
      <div>
        <h2>Porfolio:</h2>
        <div>
          <a href="https://www.alishaiaz.me/dec">
            Electronic Devices Project Website (Group 7)
          </a>
        </div>
        <div>
          <a href="https://p-cf.alishaiaz.me">Crowdfunding Website</a>
        </div>
        <div>
          <a href="https://github.com/aliShaiaz/Crowdfunding-Website">
            Crowdfunding Website (Repo)
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicPage;
