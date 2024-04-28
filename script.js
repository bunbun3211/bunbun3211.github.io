// script.js
document.addEventListener("DOMContentLoaded", function() {

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
