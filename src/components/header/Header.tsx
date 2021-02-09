import React from "react";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <h1 className="icon">
        Chuck<span>Jocker</span>
      </h1>
      <div className="solganContenaire center">
        <h4 className="superbold slogan">
          i'hope this <span>laugh you</span> a little with chuck
        </h4>
        <p className="sloganParagraph my-1">
          Pause, Chill and crack some jokes
        </p>
      </div>
    </header>
  );
};

export default Header;
