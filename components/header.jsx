const Header = ({ onMenuBtnClick }) => {

  return (
    <header className="header">
      {/* header profile */}
      <div className="profile">
        <div className="title">Denis Declercq</div>
        <div className="subtitle">Fullstack Devoloper React.js / Node.js</div>

        {/*
			  <div className="subtitle subtitle-typed">
                <div className="typing-title">
                  <p>Fullstack Devoloper React.js / Node.js</p>
                  <p>Developer</p>
                  <p>Freelancer</p>
                </div>
			  </div>
			  */}
      </div>

      {/* menu btn */}
      <a href="#" className="menu-btn" onClick={onMenuBtnClick}>
        <span></span>
      </a>

      {/* menu */}
      <div className="top-menu">
        <ul>
          <li className="active">
            <a href="#about-card">
              <span className="icon ion-person"></span>
              <span className="link">About</span>
            </a>
          </li>
          <li>
            <a href="#resume-card">
              <span className="icon ion-android-list"></span>
              <span className="link">Resume</span>
            </a>
          </li>
          <li>
            <a href="#works-card">
              <span className="icon ion-paintbrush"></span>
              <span className="link">Works</span>
            </a>
          </li>
          <li>
            <a href="#blog-card">
              <span className="icon ion-chatbox-working"></span>
              <span className="link">Blog</span>
            </a>
          </li>
          <li>
            <a href="#contacts-card">
              <span className="icon ion-at"></span>
              <span className="link">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
