import "../assets/styles/main.scss";
import { listOBJ } from "./obj";

const listContainer = document.querySelector(".list-container");

const generateList = () => {
  Object.entries(listOBJ).forEach((data) => {
    console.log(data);

    generateCategory(data);
  });
};

const generateCategory = (data) => {
  const title = capitalizeString(data[0]);
  const arrayList = data[1];

  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");

  const categoryTitle = document.createElement("h2");
  categoryTitle.classList.add("category-title");

  const categoryItems = document.createElement("div");
  categoryItems.classList.add("category-items");

  listContainer.appendChild(categoryContainer);
  categoryContainer.appendChild(categoryTitle);
  categoryContainer.appendChild(categoryItems);

  categoryTitle.innerText = `${title}`;

  for (let i = 0; i < arrayList.length; i++) {
    generateItem(categoryItems, arrayList[i]);
  }
};

const generateItem = (parent, item) => {
  const itemContainer = document.createElement("a");
  itemContainer.target = "_blank";

  const itemName = document.createElement("p");
  itemName.classList.add("item-name");

  const itemDesc = document.createElement("p");
  itemDesc.classList.add("item-desc");

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("item-price");

  parent.appendChild(itemContainer);
  itemContainer.appendChild(itemName);
  itemContainer.appendChild(itemDesc);
  itemContainer.appendChild(itemPrice);

  itemContainer.href = `${item.url}`;
  itemName.innerText = `${item.name}`;
  itemDesc.innerText = `${item.description}`;
  itemPrice.innerText = `${item.price}`;
};

const capitalizeString = (string) => {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
};

generateList();
