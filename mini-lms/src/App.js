import "./App.css";
import "./index.css";
import PropTypes from "proptypes";

function App() {
  return (
    <div className="App">
      <Comment
        author="Moses Sunday"
        message="This is the message i have for you"
        likes={4}
      />
      <CustomTest myCustomProp="not_three_letters" />,
    </div>
  );
}

function customValidator(props, propName, componentName) {
  // here, propName === "myCustomProp"
  if (props[propName].length !== 3) {
    return new Error(
      "Invalid prop `" +
        propName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Length is not 3."
    );
  }
}

const CustomTest = ({ myCustomProp }) => <span>{myCustomProp}</span>;
CustomTest.propTypes = {
  myCustomProp: customValidator,
};

function Comment({ author, message, likes }) {
  return (
    <div>
      <div className="author ">{author} </div>
      <div className="message "> {message}</div>
      <div className="likes ">{likes > 0 ? likes : 0} </div>
      <br />
      <br />
    </div>
  );
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.required,
  likes: PropTypes.number,
};

export default App;
