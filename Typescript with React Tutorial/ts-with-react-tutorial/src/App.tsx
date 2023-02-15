import { Counter } from "./Counter";
// import { TextField } from "./TextField";

const App = () => {
  return (
    // <TextField
    //   text='lol'
    //   person={{ firstName: "Bob", lastName: "Michelle" }}
    //   ok={true}
    //   handleChange={(e) => {
    //     console.log(e);
    //   }}
    // />
    <Counter>
      {({ count, setCount }) => (
        <div>
          {count}
          <button onClick={() => setCount(count + 1)}></button>
        </div>
      )}
    </Counter>
  );
};

export default App;
