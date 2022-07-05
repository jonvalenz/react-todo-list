import { useState, useMemo } from "react";
import ListItem from "../list/list-item";
import NewListItem from "../list/new-list-item";
import Services from "../../services/category-service";

export default function ListCategory(props) {
  const [items, setItems] = useState(props.items);

  return useMemo(() => {
    const getItems = () => Services.getItems(props.id);
    const removeListItem = (index) => {
      Services.removeItem(props.id, index);
      setItems([...getItems()]);
    };

    const toggleDone = (index, item) => {
      Services.setItem(props.id, index, item);
    };

    const addListItem = (name) => {
      Services.addItem(props.id, { name, done: false });
      setItems([...getItems()]);
    };
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <ListItem
              key={index}
              remove={() => removeListItem(index)}
              toggle={() => toggleDone(index, { ...item, done: !item.done })}
              {...item}
            ></ListItem>
          ))}
        </ul>
        <NewListItem addListItem={addListItem}></NewListItem>
      </div>
    );
  }, [items, props.id]);
}
