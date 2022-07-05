import { useState, useMemo } from "react";
import Services from "./services/category-service";
import NewCategory from "./components/category/new-category";
import Category from "./components/category/category";

function App() {
  console.log("Re-rendered");
  const [categories, setCategories] = useState(Services.getCategories());

  const createNewCategory = (name, type) => {
    Services.addCategory(name, type);
    setCategories([...Services.getCategories()]);
  };

  const categoryList = useMemo(
    () =>
      categories.map((category, index) => (
        <Category key={index} update={setCategories} {...category}></Category>
      )),
    [categories]
  );

  return (
    <div>
      <ul>{categoryList}</ul>
      <NewCategory
        createNewCategory={createNewCategory}
        update={setCategories}
      ></NewCategory>
    </div>
  );
}

export default App;
