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
        name: "Lego BD-1",
        url: "https://amzn.to/3RbCfWt",
        status: false,
      },
      {
        id: 2,
        name: "Grippers",
        url: "https://amzn.to/47LEKnT",
        status: false,
      },
      {
        id: 3,
        name: "Air Fryer",
        url: "https://amzn.to/3TcEL0n",
        status: false,
      },
      {
        id: 4,
        name: "Clamping Squares",
        url: "https://amzn.to/47K2dpI",
        status: false,
      },
      {
        id: 5,
        name: "Stream Deck",
        url: "whttps://amzn.to/3TcEXwD",
        status: false,
      },
      {
        id: 6,
        name: "Saw Guide",
        url: "https://amzn.to/3sS50OA",
        status: false,
      },
      {
        id: 7,
        name: "Digital Angle Gauge",
        url: "https://amzn.to/3GdHn6c",
        status: false,
      },
      {
        id: 8,
        name: "Digital Protractor",
        url: "https://amzn.to/49PrSyP",
        status: false,
      },
      {
        id: 9,
        name: "3D Printer",
        url: "https://amzn.to/47IjSOr",
        status: false,
      },
      {
        id: 10,
        name: "Computer Mic",
        url: "https://amzn.to/3SYdM8r",
        status: false,
      },
      {
        id: 11,
        name: "Steering Wheel PC/PS5 Version",
        url: "https://amzn.to/3Rcgtlq",
        status: false,
      },
      {
        id: 12,
        name: "Shifter PC/PS5 Version",
        url: "https://amzn.to/3GxoDyZ",
        status: false,
      },
      {
        id: 13,
        name: "Car Tuner",
        url: "https://86speed.com/vishnu-openflash-tuning-table-tablet-oft-v2",
        status: false,
      },
      {
        id: 14,
        name: "Gun Barrel 3.7 Grey Threaded",
        url: "https://tactical.dev/collections/p365xl-products/products/ki-td-barrel-for-p365?variant=40131618308199",
        status: false,
      },
      {
        id: 15,
        name: "Mag Grip",
        url: "https://tactical.dev/collections/p365xl-products/products/12-round-extra-long-pinky-extension-for-sig-p365-xl",
        status: false,
      },
      {
        id: 16,
        name: "Right Handed Gun Rail",
        url: "https://tactical.dev/collections/p365xl-products/products/p365-pro-ledge",
        status: false,
      },
      {
        id: 17,
        name: "Tool Chest",
        url: "https://www.homedepot.com/p/Husky-Heavy-Duty-52-in-15-Drawer-Matte-Black-Tool-Chest-Combo-H52CH6TR9HDV4/319594785",
        status: false,
      },
      {
        id: 18,
        name: "?????",
        url: "https://www.bestbuy.com/site/sony-playstation-5-console-marvels-spider-man-2-bundle-full-game-download-included-white/6565065.p?skuId=6565065",
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
