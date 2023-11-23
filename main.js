class Item {
  constructor(id, name, url, status) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.status = status;
  }
}

class List {
  constructor() {
    this.myList = [
      {
        id: 1,
        name: "Google",
        url: "www.google.com",
        status: false,
      },
      {
        id: 2,
        name: "2",
        url: "www.google.com",
        status: false,
      },
      {
        id: 3,
        name: "3",
        url: "www.google.com",
        status: false,
      },
      {
        id: 4,
        name: "4",
        url: "www.google.com",
        status: false,
      },
      {
        id: 5,
        name: "5",
        url: "www.google.com",
        status: false,
      },
    ];
  }

  addToList(newItem) {
    this.myList.push(newItem);
  }
}

const list = new List();

// ----- Dom Objects ----- //
const $listItems = document.querySelector("[data-list]");

// ----- Load Storage ----- //
const saveLocal = () => {
  localStorage.setItem("list", JSON.stringify(list.myList));
};

const restoreLocal = () => {
  const items = JSON.parse(localStorage.getItem("list"));
  if (!localStorage.list) {
    updateList();
  } else {
    list.myList = items;
    updateList();
  }
};

const addItem = () => {
  updateList();
};

const updateList = () => {
  $listItems.innerHTML = "";
  for (let item of list.myList) createItem(item);
  saveLocal();
};

const createItem = (item) => {
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";
  $checkbox.name = "r";
  $checkbox.id = item.id;
  if (item.status === true) {
    $checkbox.checked = true;
  } else {
    $checkbox.checked = false;
  }

  const $label = document.createElement("label");
  $label.for = item.id;
  $label.textContent = item.name;

  const $hyperlink = document.createElement("a");
  $hyperlink.href = item.url;
  $hyperlink.target = "_blank";

  $listItems.appendChild($checkbox);
  $listItems.appendChild($hyperlink);
  $hyperlink.appendChild($label);

  $checkbox.addEventListener("click", () => {
    item.status = !item.status;
    updateList();
  });
};

restoreLocal();
