const sampleCategories = [
  {
    id: 0,
    name: "Fruits",
    type: 0,
    items: [
      { name: "apple", done: true },
      { name: "banana", done: false },
      { name: "orange", done: false },
    ],
  },
  {
    id: 1,
    name: "Exercises",
    type: 0,
    items: [
      { name: "Backflip", done: true },
      { name: "Front Flip", done: false },
      { name: "Jumpin Jack", done: false },
    ],
  },
];

let Categories = JSON.parse(localStorage.getItem("Categories"));

if (Categories === null)
  localStorage.setItem("Categories", JSON.stringify(sampleCategories));

function updateLocalCategories() {
  localStorage.setItem("Categories", JSON.stringify(Categories));
}

function getCategories() {
  return Categories;
}

function getCategoryByID(id) {
  return Categories.find((category) => category.id === id);
}

function addCategory(name, type) {
  Categories.push({
    id: Categories.length,
    name: name,
    items: type === 0 ? [] : undefined,
    type,
  });
  updateLocalCategories();
}

function removeCategoryByID(id) {
  getCategories().splice(
    Categories.findIndex((category) => category.id === id),
    1
  );
  updateLocalCategories();
}

function getItem(categoryID, index) {
  return getCategoryByID(categoryID).items[index];
}

function getItems(categoryID, index) {
  return getCategoryByID(categoryID).items;
}

function setItem(categoryID, index, item) {
  getCategoryByID(categoryID).items[index] = item;
  updateLocalCategories();
}

function addItem(categoryID, item) {
  getCategoryByID(categoryID).items.push(item);
  updateLocalCategories();
}

function updateNote(id, note) {
  getCategoryByID(id).note = note;
  updateLocalCategories();
}

function removeItem(categoryID, index) {
  getCategoryByID(categoryID).items.splice(index, 1);
  updateLocalCategories();
}

const ListService = {
  updateLocalCategories,
  getCategories,
  getCategoryByID,
  addCategory,
  removeCategoryByID,
  getItem,
  setItem,
  addItem,
  removeItem,
  getItems,
  updateNote,
};

export default ListService;
