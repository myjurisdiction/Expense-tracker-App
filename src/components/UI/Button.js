import "./Button.css";

function Button(props) {
  function buttonActionHandler() {
    props.showForm();
  }

  return (
    <button onClick={buttonActionHandler} className="button" type="submit">
      {props.children}
    </button>
  );
}

export default Button;
