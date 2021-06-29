import "./Card.css";

function Card(props) {
  const classess = "Card " + props.className;
  return <div className={classess}>{props.children}</div>;
}

export default Card;
