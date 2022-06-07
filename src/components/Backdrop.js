function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />;
  // custom onClick prop passing to react's <div> onClick prop
}

export default Backdrop;
