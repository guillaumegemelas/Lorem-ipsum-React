const Content = (props) => {
  console.log(props);
  return (
    <div className="greyBloc">
      {" "}
      <h1> {props.title}</h1>
      <p> {props.description} </p>
    </div>
  );
};

export default Content;
