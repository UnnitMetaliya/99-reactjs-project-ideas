import React, { useState } from "react";
import Note from "./Note";
function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    cont: "",
  });

  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prevInput) => {
      if (name === "title") {
        return {
          title: value,
          cont: prevInput.content,
        };
      } else if (name === "content") {
        return {
          title: prevInput.title,
          cont: value,
        };
      }
    });
  }

  function handleclick(event) {
    event.preventDefault();
    props.onAdd(input);
    setInput({
      title: "",
      cont: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={input.cont}
        />
        <button onClick={handleclick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
