const Title = (props) => {
  console.log(props);
  return <h1 className={props.title}> {props.title}</h1>;
};

export default Title;
