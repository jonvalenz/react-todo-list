import { useState } from "react";
import CATEGORYTYPE from "../../constants/category-types";

export default function NewCategory(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState(0);

  const handleNewCategory = () => {
    props.createNewCategory(name, type);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleNewCategory}>New Category</button>
      <span>
        <label>
          <input
            type="radio"
            checked={type === CATEGORYTYPE.LIST}
            onChange={() => setType(CATEGORYTYPE.LIST)}
          />
          List
        </label>
        <label>
          <input
            type="radio"
            checked={type === CATEGORYTYPE.NOTE}
            onChange={() => setType(CATEGORYTYPE.NOTE)}
          />
          Note
        </label>
      </span>
    </div>
  );
}
