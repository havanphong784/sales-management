async function addComponent(id, patch) {
  const a = await (await fetch(patch)).text();
  document.getElementById(id).innerHTML = a;
}
addComponent("header", "./src/components/header.html");
addComponent("sidebar", "./src/components/sidebar.html");

let sidebar = document.getElementById("sidebar");
function closeSidebar() {
  sidebar.style.display = "none";
  document.getElementById("menu-btn").style.display = "block";
}
function openSidebar() {
  sidebar.style.display = "block";
  document.getElementById("menu-btn").style.display = "none";
}

addComponent("content", "./src/pages/dashboard.html");
