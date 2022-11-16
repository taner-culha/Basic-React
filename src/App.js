import Color from "./components/Color";
import Counter from "./components/Counter";
import Form from "./components/Form";
import User from "./components/User";

const user={
  name:"Taner Culha",
  age:27,
  city:"Istanbul",
};
function App() {
  return (
    <div >
      <User data={user} friends={["Ahmet", "Mehmet"]}/>
      <hr/>
      <Counter/>
      <hr/>
      <Color/>
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
