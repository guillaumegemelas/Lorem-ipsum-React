import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  console.log(props);
  return (
    <div className="greyBloc">
      {" "}
      <Title title={props.title} />
      <Description description={props.description} />
    </div>
  );
};

export default Content;
