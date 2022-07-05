import { useState } from "react";

export default function ListItem(props) {
    const [done, setDone] = useState(props.done);
    return (
      <div>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            props.toggle();
            setDone(!done);
          }}
        ></input>
        {props.name}
        <input
          type="button"
          value={"Delete"}
          onClick={() => props.remove(props.index)}
        />
      </div>
    );
  }