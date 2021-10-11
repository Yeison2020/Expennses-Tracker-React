import "./card.css";
// this props just add another class next the other one
// This Allow to use the Card as a wrapper
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
