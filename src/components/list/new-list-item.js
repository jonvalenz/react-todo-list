import { useState } from "react";

export default function NewListItem(props) {
    const [name, setName] = useState("");
  
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => props.addListItem(name)}>Add Item</button>
      </div>
    );
  }