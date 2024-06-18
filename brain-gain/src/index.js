// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );

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
// import moment from "moment";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

var testTweet = {
  message: "Something about cats.",
  gravatar: "205521854/1bc31a75e7411f18d4ffbe84cc2002e5.jpeg?size=256",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

// Props

// function handleAction(event) {
//   console.log("child did", event);
// }

// function Parent() {
//   return <Child onAction={handleAction} />;
// }

// function Child({ onAction }) {
//   return <button onClick={onAction}>Click here</button>;
// }
// Components

function Avatar({ hash }) {
  var url = `https://gravatar.com/userimage/${hash}`;

  return (
    <img
      src={url}
      // src="https://gravatar.com/userimage/205521854/1bc31a75e7411f18d4ffbe84cc2002e5.jpeg?size=256"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { title, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{title}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = () => {
  <span className="time">3h ago</span>;
};

const ReplyButton = () => {
  <i className="fa fa-reply reply-button" aria-hidden="false" />;
};

const RetweetButton = () => {
  <i className="fa fa-retweet retweet-button" aria-hidden="false" />;
};

const LikeButton = () => {
  <i className="fa fa-heart like-button" aria-hidden="false" />;
};

const MoreOptionsButton = () => {
  <i className="fa fa-ellipsis-o-right" aria-hidden="false" />;
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
