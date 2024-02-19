const Functional = (props) => {
  const IncreaseValue=()=>{
        props.value=props.value+2;  //props cannot e change inside child component
  }
  return (
    <div>
      <h1>Child Component</h1>
      <h1>{props.object.name}</h1>
      <h1>{props.object.age}</h1>
      <h1>{props.object.address}</h1>
      <div>{props.value}</div>
      <button onClick={IncreaseValue}>Click</button>
    </div>
  );
};
export default Functional;
