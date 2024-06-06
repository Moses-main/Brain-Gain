// import React from "react";
// import ReactDOM from "react-dom/client";

// // uncomment this section of the code
// // import 'bootstrap/dist/css/bootstrap.min.css';

// import "./index.css";
// import App from "./App";
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
      {/* Tweet */}
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://wwww.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less than 140 characters</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourHandle</span>
    </span>
  );
}

const Time = () => {
  <span className="time">3h ago</span>;
};

const ReplyButton = () => {
  <i className="fa fa-reply reply-button" aria-hidden="true" />;
};

const RetweetButton = () => {
  <i className="fa fa-retweet retweet-button" aria-hidden="true" />;
};

const LikeButton = () => {
  <i className="fa fa-heart like-button" aria-hidden="true" />;
};

const MoreOptionsButton = () => {
  <i className="fa fa-ellipsis-o-right" aria-hidden="true" />;
};

ReactDOM.render(<Tweet />, document.getElementById("root"));
