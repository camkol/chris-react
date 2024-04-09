import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const contactLinks = [
  {
    url: "#",
    icon: "fa-facebook",
    styles: { "--fa-animation-duration": "2s" },
    animationClass: "fa-beat",
  },
  {
    url: "https://www.youtube.com/channel/UCXwneEFGcoYM6NQhtaZkk2Q",
    icon: "fa-youtube",
    styles: { "--fa-animation-duration": "2s", "--fa-fade-opacity": "0.6" },
    animationClass: "fa-fade",
  },
  {
    url: "https://www.instagram.com/theblaqksheep/",
    icon: "fa-instagram",
    styles: { "--fa-beat-fade-opacity": "0.1", "--fa-beat-fade-scale": "1.25" },
    animationClass: "fa-beat-fade",
  },
  {
    url: "#",
    icon: "fa-soundcloud",
    styles: {},
    animationClass: "fa-bounce",
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProducerInfo />

      <footer></footer>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div id="title">
        <div className="deconstructed">
          Wrap'em Up N Rubber bands!
          <div>Wrap'em Up N Rubber bands!</div>
          <div>Wrap'em Up N Rubber bands!</div>
          <div>Wrap'em Up N Rubber bands!</div>
          <div>Wrap'em Up N Rubber bands!</div>
        </div>
      </div>
    </header>
  );
};

const ProducerInfo = () => {
  return (
    <section className="producer-info">
      <div className="producer-bio" id="contactHolder"></div>
      <div id="contactHold">
        <ContactLinks links={contactLinks} />
      </div>
    </section>
  );
};

const ContactLinks = ({ links }) => {
  return (
    <div className="contact">
      {links.map((link, index) => (
        <div key={index}>
          <a
            style={{ color: "white", ...link.styles }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab ${link.icon} fa-4x ${link.animationClass}`}></i>
          </a>
        </div>
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
