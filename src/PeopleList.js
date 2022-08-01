import React from "react";

function PeopleList(props) {
  const contacts = props.data;

  const arr = props.data;
  
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);

  return (
    <div className="contacts">
      <ul>{listItems}</ul>
    </div>
  );
}

export default PeopleList;
