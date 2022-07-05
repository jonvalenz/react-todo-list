import Services from "../../services/category-service";
import CATEGORYTYPE from "../../constants/category-types";
import NoteCategory from "./note-category";
import ListCategory from "./list-category";

export default function Category(props) {
  const removeCategory = () => {
    Services.removeCategoryByID(props.id, 1);
    props.update([
      ...(Services.getCategories().length > 0 ? Services.getCategories() : []),
    ]);
  };

  let toRender = null;

  if (props.type === CATEGORYTYPE.LIST)
    toRender = <ListCategory {...props}></ListCategory>;
  else toRender = <NoteCategory {...props}></NoteCategory>;

  return (
    <div>
      <div>{props.name}</div>
      {toRender}
      <input type="button" value={"Delete"} onClick={removeCategory} />
    </div>
  );
}
