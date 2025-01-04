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
const imageProduct = document.getElementById(`image-product`);
const thumbnailNumber = document.querySelectorAll(`#product-thumbnail`);

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
const addToCart = document.getElementById(`addToCart`);
const listProduct = document.getElementById(`listProduct`);
const numbeOfCards = document.getElementById(`numbeOfCards`);

const addProductToCart = () => {
  if (number > 0) {
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
      listProduct.prepend(newCard);
      numbeOfCards.style.opacity = `1`;
      numbeOfCards.innerText = `${number}`;
      removeCard.onclick = () => {
        newCard.remove();
        number -= 1;
        if (number === 0) {
          numbeOfCards.style.opacity = `0`;
        }
        numbeOfCards.innerText = `${number}`;
      };
    }
  }
};
console.log(addToCart);
addToCart.addEventListener(`click`, addProductToCart);
