import React from "react";

export default function AddPeopleForm(props) {
  const [input, setInput] = React.useState("");

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
        <input type="submit" />
      </form>
    </div>
  );
}
