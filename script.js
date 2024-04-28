// script.js
document.addEventListener("DOMContentLoaded", function() {
  // サンプルのメニューデータ
  const menuData = [
    { name: "まぐろ", price: 100 },
    { name: "サーモン", price: 100 },
    { name: "えび", price: 100 },
    { name: "いくら", price: 100 },
    { name: "納豆巻き", price: 100 },
    { name: "ぶり", price: 100 },
    { name: "〆さば", price: 100 },
    // 他のメニューアイテムも同様に追加
  ];

  const menuSection = document.getElementById("menu");

  // メニューデータを元にHTMLを生成して追加する関数
  function renderMenuItems() {
    menuData.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;

      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;

      const itemPrice = document.createElement("span");
      itemPrice.textContent = `¥${item.price}`;

      menuItem.appendChild(itemName);
      menuItem.appendChild(itemDescription);
      menuItem.appendChild(itemPrice);

      menuSection.appendChild(menuItem);
    });
  }

  // メニューを表示する関数を呼び出す
  renderMenuItems();
});
