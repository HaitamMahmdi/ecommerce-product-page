// the dropDown list

const dropDown = document.querySelector(`[aria-label="dropdown-link-list"]`);
const dropDownList = document.querySelector(`[aria-label="d-link-list"]`);
const closeDropDown = document.querySelector(`[aria-label="closeDropDown"]`);
const showDropDownList = () => {
  dropDownList.style.cssText = `display: block;`;
};
const hideDropDownList = () => {
  dropDownList.style.cssText = `display: none;`;
};

dropDown.addEventListener("click", showDropDownList);
closeDropDown.addEventListener("click", hideDropDownList);

// change the Images in ProductCard:
const imageProduct = document.querySelector(`.ProductCard #image-product`);
const thumbnailNumber = document.querySelectorAll(
  `.ProductCard #product-thumbnail`
);
// in  768px ~ 1440px screens
let isclikd = null;
const changeImageProduct = (e) => {
  const imgN = e.target.getAttribute(`thumbnail-number`);
  if (isclikd) {
    isclikd.style.cssText = `filter: opacity(1); border-color:transparent;`;
    isclikd = e.target;
    imageProduct.src = `./images/image-product-${imgN}.jpg`;
    e.target.style.cssText = `filter: opacity(0.4); border-color:hsl(26, 100%, 55%);`;
  } else {
    isclikd = e.target;
    imageProduct.src = `./images/image-product-${imgN}.jpg`;
    e.target.style.cssText = `filter: opacity(0.4); border-color:hsl(26, 100%, 55%);`;
  }
};

thumbnailNumber.forEach((el) => {
  el.addEventListener(`click`, changeImageProduct);
});

// open and close ProductOverview & change the Images in  ProductOverview
const imageProductOverview = document.querySelector(
  `#ProductOverview #image-product`
);
const thumbnailNumberOverview = document.querySelectorAll(
  `#ProductOverview #product-thumbnail`
);
// in  768px ~ 1440px screens
let isclikdOverview = null;
const changeImageProductInOverview = (e) => {
  const imgN = e.target.getAttribute(`thumbnail-number`);
  if (isclikdOverview) {
    console.log(isclikdOverview);
    isclikdOverview.style.cssText = `filter: opacity(1); border-color:transparent;`;
    isclikdOverview = e.target;
    imageProductOverview.src = `./images/image-product-${imgN}.jpg`;
    e.target.style.cssText = `filter: opacity(0.4); border-color:hsl(26, 100%, 55%);`;
  } else {
    isclikdOverview = e.target;
    console.log(isListOpen);
    imageProductOverview.src = `./images/image-product-${imgN}.jpg`;
    e.target.style.cssText = `filter: opacity(0.4); border-color:hsl(26, 100%, 55%);`;
  }
};

thumbnailNumberOverview.forEach((el) => {
  el.addEventListener(`click`, changeImageProductInOverview);
});

const previousButtonInOverview = document.querySelector(
  `#ProductOverview #previousButton`
);
const nextButtonInOverview = document.querySelector(
  `#ProductOverview #nextButton`
);
let imgNumberO = 0;
const nextImageInOverview = () => {
  if (imgNumberO < 4) {
    imgNumberO += 1;
    imageProductOverview.src = ` ./images/image-product-${imgNumberO}.jpg`;
  } else {
    imgNumberO = 1;
    imageProductOverview.src = ` ./images/image-product-${imgNumberO}.jpg`;
  }
};
const previousImgInOverview = () => {
  if (imgNumberO > 1) {
    imgNumberO -= 1;
    imageProductOverview.src = ` ./images/image-product-${imgNumberO}.jpg`;
  } else {
    imgNumberO = 4;
    imageProductOverview.src = ` ./images/image-product-${imgNumberO}.jpg`;
  }
};
nextButtonInOverview.addEventListener(`click`, nextImageInOverview);
previousButtonInOverview.addEventListener(`click`, previousImgInOverview);

const mainContainer = document.getElementById(`mainContainer`);
const ProductOverview = document.getElementById(`ProductOverview`);
const closeProductOverview = document.getElementById(`closeProductOverview`);
const imageProductDiv = document.querySelector(`.ProductCard #imageProduct`);
console.log(imageProductDiv);
let isappend = false;
const addProductOverview = () => {
  if (!isappend) {
    isappend = true;
    ProductOverview.style.display = `block `;
  }
};
const closePOverview = () => {
  if (isappend) {
    isappend = false;
    ProductOverview.style.display = `none `;
  }
};
if (screen.width >= 1024) {
  imageProductDiv.addEventListener(`click`, addProductOverview);
}

closeProductOverview.addEventListener(`click`, closePOverview);

// in phons 325px ~ 768px:
const previousButton = document.querySelector(`.ProductCard #previousButton`);
const nextButton = document.querySelector(`.ProductCard #nextButton`);
let imgNumber = 0;
const nextImage = () => {
  if (imgNumber < 4) {
    imgNumber += 1;
    imageProduct.src = ` ./images/image-product-${imgNumber}.jpg`;
  } else {
    imgNumber = 1;
    imageProduct.src = ` ./images/image-product-${imgNumber}.jpg`;
  }
};
const previousImg = () => {
  if (imgNumber > 1) {
    imgNumber -= 1;
    imageProduct.src = ` ./images/image-product-${imgNumber}.jpg`;
  } else {
    imgNumber = 4;
    imageProduct.src = ` ./images/image-product-${imgNumber}.jpg`;
  }
};
nextButton.addEventListener(`click`, nextImage);
previousButton.addEventListener(`click`, previousImg);
// increase/decrease count

const plusButton = document.getElementById(`plusButton`);
const minusButton = document.getElementById(`minusButton`);
const count = document.getElementById(`count`);
let number = 0;
const products = [];

const updateingCount = (e) => {
  const elementId = e.currentTarget.id;
  console.log(e.currentTarget);
  if (elementId === `plusButton`) {
    number += 1;
  } else if (elementId === `minusButton` && number - 1 >= 0) {
    number -= 1;
  }
  count.innerText = number;
};
plusButton.addEventListener(`click`, updateingCount);
minusButton.addEventListener(`click`, updateingCount);

// add/remove product from/to cart  & updateing the count number.

const cart = document.querySelector(`[aria-label="cart"]`);
const cartIcon = document.getElementById(`cartIcon`);
const addToCart = document.getElementById(`addToCart`);
const listProduct = document.getElementById(`listProduct`);
const numbeOfCards = document.getElementById(`numbeOfCards`);
const cartIsEmptyTitle = document.getElementById(`cartIsEmptyTitle`);
const Chackout = document.getElementById(`Chackout`);
Chackout.remove();
let isListOpen = false;
const openAndCloseListProduct = () => {
  if (isListOpen) {
    listProduct.style.display = `none`;
  } else {
    listProduct.style.display = `block`;
  }
  isListOpen = !isListOpen;
};
cartIcon.addEventListener(`click`, openAndCloseListProduct);
const addProductToCart = () => {
  if (number > 0) {
    cartIsEmptyTitle.remove();
    for (let i = 0; i < number; i++) {
      const newCard = document.createElement(`div`);
      const productImg = document.createElement(`img`);
      const productNameAndPrice = document.createElement(`div`);
      const productName = document.createElement(`p`);
      const productPrice = document.createElement(`p`);
      const removeCard = document.createElement(`div`);
      newCard.setAttribute(`class`, `card`);
      newCard.setAttribute(`id`, `card${i}`);
      productImg.setAttribute(`src`, `./images/image-product-1-thumbnail.jpg`);
      productImg.setAttribute("alt", `No Image Found!`);
      productImg.setAttribute(`class`, `product-img`);
      productNameAndPrice.setAttribute(`class`, `text`);

      removeCard.innerHTML = ` <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                  </svg>`;
      productName.textContent = `Fall Limited Edition Sneakers`;
      productPrice.textContent = `$125.00 x${number} $${125 * number}`;
      productNameAndPrice.append(productName);
      productNameAndPrice.append(productPrice);
      newCard.append(productImg);
      newCard.append(productNameAndPrice);
      newCard.append(removeCard);
      listProduct.append(newCard);
      numbeOfCards.style.opacity = `1`;
      numbeOfCards.innerText = `${number}`;
      removeCard.onclick = () => {
        newCard.remove();
        number -= 1;
        if (number === 0) {
          numbeOfCards.style.opacity = `0`;
          Chackout.remove();
          listProduct.append(cartIsEmptyTitle);
          count.innerText = number;
        }
        numbeOfCards.innerText = `${number}`;
      };
    }
    listProduct.append(Chackout);
  }
};
console.log(addToCart);
addToCart.addEventListener(`click`, addProductToCart);
