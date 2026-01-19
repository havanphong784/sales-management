async function addComponent(id, patch) {
  const a = await (await fetch(patch)).text();
  document.getElementById(id).innerHTML = a;
}

addComponent("header", "./src/components/header.html");
