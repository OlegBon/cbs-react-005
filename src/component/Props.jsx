const Props = ({ stateTaskThird, setStateTaskThird }) => {
  return (
    <>
      {console.log("Render Props")}
      <h2>Props component</h2>
      <button onClick={() => setStateTaskThird(stateTaskThird + 10)}>
        Change Props state
      </button>
    </>
  );
};

export default Props;
