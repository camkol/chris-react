import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const socialLinks = [
  {
    url: "soon to come",
    className: "facebook",
    icon: "fa-facebook",
    animationClass: "fa-beat",
  },
  {
    url: "https://www.youtube.com/channel/UCXwneEFGcoYM6NQhtaZkk2Q",
    className: "youtube",
    icon: "fa-youtube",
    animationClass: "fa-fade",
  },
  {
    url: "https://www.instagram.com/theblaqksheep/",
    className: "instagram",
    icon: "fa-instagram",
    animationClass: "fa-beat-fade",
  },
  {
    url: "soon to come",
    className: "",
    icon: "fa-soundcloud",
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
        <div className="contact">
          <div>
            <a
              style={{ color: "white", "--fa-animation-duration": "2s" }}
              href="#"
            >
              <i className="fab fa-facebook fa-4x fa-beat"></i>
            </a>
          </div>
          <div>
            <a
              style={{
                color: "white",
                "--fa-animation-duration": "2s",
                "--fa-fade-opacity": "0.6",
              }}
              href="https://www.youtube.com/channel/UCXwneEFGcoYM6NQhtaZkk2Q"
              target="_blank"
            >
              <i className="fab fa-youtube fa-4x fa-fade"></i>
            </a>
          </div>
          <div>
            <a
              style={{
                color: "white",
                "--fa-beat-fade-opacity": "0.1",
                "--fa-beat-fade-scale": "1.25",
              }}
              href="https://www.instagram.com/theblaqksheep/"
              target="_blank"
            >
              <i className="fab fa-instagram fa-4x fa-beat-fade"></i>
            </a>
          </div>
          <div>
            <a style={{ color: "white" }} href="#">
              <i className="fab fa-soundcloud fa-4x fa-bounce"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
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
