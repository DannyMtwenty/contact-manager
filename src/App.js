import "./App.css";
import PeopleList from "./PeopleList";
import AddPeopleForm from "./AddPeopleForm";
import React from "react";

function App() {
  const [people, setPeople] = React.useState([]);

 

  function addPeople(name) {
    setPeople([...people, name]);
  }

  return (
    <div className="App">
      <div className="App-body">
        <AddPeopleForm add_people={addPeople} />
        <PeopleList data={people} />
      </div>
    </div>
  );
}

export default App;
