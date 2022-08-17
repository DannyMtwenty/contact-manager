import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  login,
  logout,
} from "./actions";

export default function AddPeopleForm(props) {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    props.add_people(input);
    e.preventDefault();

    setInput("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name..."
          handleInputChange={input}
          value={input}
          onChange={handleInputChange}
        />
        <input type="submit" onClick={() => dispatch(increment())} />
      </form>
    </div>
  );
}
