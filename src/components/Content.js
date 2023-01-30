import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  console.log(props);
  return (
    <div className="greyBloc">
      {" "}
      <Title></Title>
      {props.title}
      <Description></Description> {props.description}
    </div>
  );
};

export default Content;
