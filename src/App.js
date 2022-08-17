import "./App.css";
import PeopleList from "./PeopleList";
import AddPeopleForm from "./AddPeopleForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount, login, logout } from "./actions";

function App() {
  let counter = useSelector((state) => state.counter);
  let isLogged = useSelector((state) => state.isLogged);
  let dispatch = useDispatch();

  const [people, setPeople] = React.useState([]);

  function addPeople(name) {
    setPeople([...people, name]);
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <br></br>
      <h4>
        {isLogged ? <h4>This is the content</h4> : "authentication needed!"}
      </h4><br></br>
      <div className="App-body">
        <AddPeopleForm add_people={addPeople} />
        <PeopleList data={people} />
      </div>
    </div>
  );
}

export default App;
