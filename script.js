const productsArray = [
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];

let paintingsArray = [];
let actionFiguresArray = [];

function separateItens(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    let product = productsArray[i];
    if (product.type === "Paintings") {
      paintingsArray.push(product);
    } else if (product.type === "Action Figures") {
      actionFiguresArray.push(product);
    } else {
      return "Tipo não reconhecido";
    }
  }
}

console.log(separateItens(productsArray));

const paintingsList = document.querySelector(".paintingsLista");

for (let i = 0; i < paintingsArray.length; i++) {
  let paintingProduct = paintingsArray[i];

  let liPaintings = document.createElement("li");
  liPaintings.id = "li_paintings";
  liPaintings.classList.add("li_paintings");

  let cardPaintings = document.createElement("figure");
  cardPaintings.classList.add("cardPaintings");

  let imagePaintingList = document.createElement("img");
  imagePaintingList.src = paintingProduct.image;
  imagePaintingList.id = "imagePaintingList";
  imagePaintingList.classList.add("imagePaintingList");

  let titlePaitingList = document.createElement("h3");
  titlePaitingList.innerText = paintingProduct.name;
  titlePaitingList.id = "titlePaintingList";
  titlePaitingList.classList.add("titlePaintingList");

  let pricePaintingList = document.createElement("p");
  pricePaintingList.innerText = paintingProduct.price;
  pricePaintingList.id = "pricePaintingList";
  pricePaintingList.classList.add("pricePaintingList");

  cardPaintings.appendChild(imagePaintingList);

  liPaintings.append(cardPaintings, titlePaitingList, pricePaintingList);

  paintingsList.appendChild(liPaintings);
}

let sectionPaintingList = document.querySelector(".Paintings");

sectionPaintingList.appendChild(paintingsList);

const actionFigureList = document.querySelector(".actionFiguresList");
for (let i = 0; i < actionFiguresArray.length; i++) {
  let actionFigureProduct = actionFiguresArray[i];

  let liActionFigure = document.createElement("li");
  liActionFigure.id = "li_action_figure";
  liActionFigure.classList.add("li_action_figure");

  let cardActionFigure = document.createElement("figure");
  cardActionFigure.classList.add("cardActionFigure");

  let imageActionFigure = document.createElement("img");
  imageActionFigure.src = actionFigureProduct.image;
  imageActionFigure.id = "imgActionFigure";
  imageActionFigure.classList.add("imgActionFigure");

  let titleActionFigure = document.createElement("h3");
  titleActionFigure.innerText = actionFigureProduct.name;
  titleActionFigure.id = "titleActionFigure";
  titleActionFigure.classList.add("titleActionFigure");

  let priceActionFigure = document.createElement("p");
  priceActionFigure.innerText = actionFigureProduct.price;
  priceActionFigure.id = "priceActionFigure";
  priceActionFigure.classList.add("priceActionFigure");

  cardActionFigure.appendChild(imageActionFigure);

  liActionFigure.append(cardActionFigure, titleActionFigure, priceActionFigure);

  actionFigureList.appendChild(liActionFigure);
}

let sectionActionFigures = document.querySelector(".actionFigures");

sectionActionFigures.appendChild(actionFigureList);
