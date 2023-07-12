import React from "react";
import Links from "../Links";
import { Portfolio, Contact } from "../../files/Info";

const BasicPage = () => {
  return (
    <div className="basicPage">
      <h1>Shaiaz Ali</h1>
      <p>
        Bachelor of Computer Science <br />
        American International University - Bangladesh <br />
        <br />
        Email: shaiaz.ali@gmail.com <br />
        <h2>Contact Information:</h2>
        <div className="displayBlock">
          {Contact.map((contact) => (
            <Links key={contact.name} text={contact.name} link={contact.url} />
          ))}
        </div>
      </p>
      <div>
        <h2>Porfolio Projects:</h2>
        <div className="displayBlock" style={{}}>
          {Portfolio.map((portfolio) => (
            <Links
              key={portfolio.name}
              text={portfolio.name}
              link={portfolio.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicPage;
