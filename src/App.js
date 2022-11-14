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
    </div>
  );
}

export default App;
