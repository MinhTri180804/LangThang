// variables
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// data

let dataDrinks = {
    coffee: [
        {
            id: 1,
            name: "Cà Phê Đen",
            subName: "Cà Phê",
            price: 19000,
            img: "img/drink_menu/cafe1.png",
            tag: 1
        },
        {
            id: 2,
            name: "Cà Phê Sữa",
            subName: "Cà Phê",
            price: 25000,
            img: "img/drink_menu/cafe2.png",
            tag: 1
        },
        {
            id: 3,
            name: "Cà Phê Thường",
            subName: "Cà Phê",
            price: 17000,
            img: "img/drink_menu/cafe3.png",
            tag: 1
        },
        {
            id: 4,
            name: "Cà Phê Phô Mai",
            subName: "Cà Phê",
            price: 28000,
            img: "img/drink_menu/cafe4.png",
            tag: 1
        },
        {
            id: 5,
            name: "Cà Phê Tuyết",
            subName: "Cà Phê",
            price: 39000,
            img: "img/drink_menu/cafe5.png",
            tag: 1
        },
    ],

    milkTea: [
        {
            id: 1,
            name: "Trà Sữa Đường Đen",
            subName: "Trà sữa",
            price: 25000,
            img: "img/drink_menu/ts1.png",
            tag: 2
        },

        {
            id: 2,
            name: "Trà Sữa Matcha",
            subName: "Trà sữa",
            price: 32000,
            img: "img/drink_menu/ts2.png",
            tag: 2
        },
        {
            id: 3,
            name: "Trà Sữa Khoai Môn",
            subName: "Trà sữa",
            price: 36000,
            img: "img/drink_menu/ts3.png",
            tag: 2
        },
        {
            id: 4,
            name: "Trà Sữa Chesse",
            subName: "Trà sữa",
            price: 33000,
            img: "img/drink_menu/ts4.png",
            tag: 2
        },
        {
            id: 5,
            name: "Trà Sữa Ca Cao",
            subName: "Trà sữa",
            price: 28000,
            img: "img/drink_menu/ts5.png",
            tag: 2
        },
    ],

    soda: [
        {
            id: 1,
            name: "Soda Đào",
            subName: "Soda",
            price: 30000,
            img: "img/drink_menu/soda1.png",
            tag: 3
        },

        {
            id: 2,
            name: "Soda Nho",
            subName: "Soda",
            price: 27000,
            img: "img/drink_menu/soda2.png",
            tag: 3
        },
        {
            id: 3,
            name: "Soda Dâu",
            subName: "Soda",
            price: 36000,
            img: "img/drink_menu/soda3.png",
            tag: 3
        },
        {
            id: 4,
            name: "Soda Chanh",
            subName: "Soda",
            price: 28000,
            img: "img/drink_menu/soda4.png",
            tag: 3
        },
        {
            id: 5,
            name: "Soda Ngân Hà",
            subName: "Soda",
            price: 45000,
            img: "img/drink_menu/soda5.png",
            tag: 3
        },
    ]
}

let dataCakes = [
    {
        id: 1,
        name: "Bánh Cuộn Nho Khô",
        subName: "Bánh ngọt",
        price: 30000,
        img: "img/cake/banh1.png",
        tag: 4
    },

    {
        id: 2,
        name: "Bánh Nướng Mè",
        subName: "Bánh ngọt",
        price: 27000,
        img: "img/cake/banh2.png",
        tag: 4
    },

    {
        id: 3,
        name: "Bánh Sừng",
        subName: "Bánh ngọt",
        price: 20000,
        img: "img/cake/banh3.png",
        tag: 4
    },

    {
        id: 4,
        name: "Bánh Mật Ngọt",
        subName: "Bánh ngọt",
        price: 22000,
        img: "img/cake/banh4.png",
        tag: 4
    },

    {
        id: 5,
        name: "Bánh Cuộn Mức Dâu",
        subName: "Bánh ngọt",
        price: 45000,
        img: "img/cake/banh5.png",
        tag: 4
    },

    {
        id: 6,
        name: "Bánh Trứng Muối",
        subName: "Bánh ngọt",
        price: 32000,
        img: "img/cake/banh6.png",
        tag: 4
    },

    {
        id: 7,
        name: "Bánh Quế Mật Ong",
        subName: "Bánh ngọt",
        price: 36000,
        img: "img/cake/banh7.png",
        tag: 4
    },

    {
        id: 8,
        name: "Bánh Trứng Nướng",
        subName: "Bánh ngọt",
        price: 42000,
        img: "img/cake/banh8.png",
        tag: 4
    },

]


let listCartData = [];

// get Element
const spaceImg = $('.img__space');
const form = $('.blur');
const statusAddCart = $('.status');
const listStatus = $('.list__status');
const closeForm = $('.icon__close-form');
const itemNavbar = $$('.item__navbar-content');
const shopCart = $('.icon__shop-header i');
const showCart = $('.cart');
const buttonBackCart = $('.button__back');
const avatarUser = $('.user__login-img');
const optionsAvatarUser = $('.user__option-login');
const optionsMenus = $$('li.option__menu-item');
const menuDrinks = $$('.list__drink');
const listDrinkCoffee = $('.list__drink-coffee');
const listDrinkMilkTea = $('.list__drink-milkTea');
const listDrinkSoda = $('.list__drink-soda');
const listCakes = $('.list__cake');
const quantity = $('.cart__quanlity span.quanlity');
const totalBill = $('.content__total-bill');
const totalMoney = $('.cart__total-content');
const numberCart = $('.quatity__cart');
const buttonBuy = $('.button__buy');
const linkCart = $('.user__item-option-cart');
const historyOrder = $('.history__order');
const closeHistoryOrder = $('.icon__close-history-order');
let listBillOrder = $('.list__order');
// variables Cart
let listCart = document.querySelector('.list__cart');
let isNotNull = false;
// app start

function app() {
    renderDrinks();
    renderCakes();
}

app();

// function render 

function renderDrinks() {
    renderDrinkCoffee();
    renderDrinkMilkTea();
    renderDrinkSoda();
}

function renderDrinkCoffee() {
    const htmls = dataDrinks.coffee.map((drink, index) => {
        return renderCoffee(drink, index);
    })
    listDrinkCoffee.innerHTML = htmls.join('');
}

function renderDrinkMilkTea() {
    const htmls = dataDrinks.milkTea.map((drink, index) => {
        return renderMilk(drink, index)
    });
    listDrinkMilkTea.innerHTML = htmls.join('');
}

function renderDrinkSoda() {
    const htmls = dataDrinks.soda.map((drink, index) => {
        return renderSoda(drink, index);
    })
    listDrinkSoda.innerHTML = htmls.join('');
}

// function render cake
function renderCakes() {
    const htmls = dataCakes.map((cake, index) => {
        return `
                             <li class="box__item cake__item">
                                <div class="box__item-img cake__item-img">
                                    <img srcset="${cake.img} 2x" alt="" class="img-drink">
                                </div>
                                <div class="box__item-content cake__item-content">
                                    <div class="box__item-info cake__item-info">
                                        <div class="item__content-name cake__content-name">${cake.name}</div>
                                        <div class="item__content-price cake__content-price">${convert(cake.price)} VNĐ</div>
                                    </div>
                                    <div class="box__item-like cake__item-like">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div class="box__item-btn cake__item-btn">
                                    <button class="button button-add" onclick="addCart(${cake.tag}, ${index},${index + dataDrinks.coffee.length + dataDrinks.milkTea.length + dataDrinks.soda.length})">
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </li>`
    })
    listCakes.innerHTML = htmls.join('')
}

// variable render
function renderCoffee(drink, index) {
    return `
        <li class="box__item drink-coffee drink__item">
            <div class="box__item-img drink__item-img">
                <img srcset="${drink.img} 2x" alt="" class="img-drink">
            </div>
            <div class="box__item-content drink__item-content">
                <div class="box__item-info drink__item-info">
                    <div class="item__content-name drink__content-name">${drink.name}</div>
                    <div class="item__content-price drink__content-price">${convert(drink.price)}</div>
                </div>
                <div class="box__item-like drink__item-like">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="box__item-btn drink__item-btn">
                <button class="button button-add" onclick="addCart(${drink.tag}, ${index},${index + 0})">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </li>`
}

function renderMilk(drink, index) {
    return `
    <li class="box__item drink__item">
        <div class="box__item-img drink__item-img">
            <img srcset="${drink.img} 2x" alt="" class="img-drink">
        </div>
        <div class="box__item-content drink__item-content">
            <div class="box__item-info drink__item-info">
                <div class="item__content-name drink__content-name">${drink.name}</div>
                <div class="item__content-price drink__content-price">${convert(drink.price)}</div>
            </div>
            <div class="box__item-like drink__item-like">
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <div class="box__item-btn drink__item-btn">
            <button class="button button-add" onclick="addCart(${drink.tag}, ${index},${index + dataDrinks.coffee.length})">
                Thêm vào giỏ hàng
            </button>
        </div>
    </li>`
}

function renderSoda(drink, index) {
    return `
    <li class="box__item drink__item">
        <div class="box__item-img drink__item-img">
            <img srcset="${drink.img} 2x" alt="" class="img-drink">
        </div>
        <div class="box__item-content drink__item-content">
            <div class="box__item-info drink__item-info">
                <div class="item__content-name drink__content-name">${drink.name}</div>
                <div class="item__content-price drink__content-price">${convert(drink.price)}</div>
            </div>
            <div class="box__item-like drink__item-like">
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <div class="box__item-btn drink__item-btn">
            <button class="button button-add" onclick="addCart(${drink.tag}, ${index},${index + dataDrinks.coffee.length + dataDrinks.milkTea.length})">
                Thêm vào giỏ hàng
            </button>
        </div>
    </li>`
}


// function handleEvents
optionsMenus.forEach((option, index) => {
    let menuDrink = menuDrinks[index];
    option.addEventListener('click', () => {
        $('.option__menu-item.active').classList.remove('active');
        option.classList.add('active');

        $('.list__drink.active').classList.remove('active');
        menuDrink.classList.add('active');
    })
})

itemNavbar.forEach((item, index) => {
    item.addEventListener('click', () => {
        $('.item__navbar-content.active').classList.remove('active');
        item.classList.add('active');
    })
})

linkCart.addEventListener('click', () => {
    showCart.classList.add('active');
})

shopCart.addEventListener('click', () => {
    showCart.classList.add('active');
})

buttonBackCart.addEventListener('click', () => {
    showCart.classList.remove('active');
})

closeForm.addEventListener('click', () => {
    form.style.display = 'none';
    document.body.style.overflow = 'auto';
})

closeHistoryOrder.addEventListener('click', () => {
    historyOrder.style.display = 'none';
})

function openHistoryOrder() {
    historyOrder.style.display = 'block';
}


var currentSlide = 0;
var slideInterval = setInterval(next, 3000);
var slides = document.querySelectorAll('.img__space');

function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    $('.img__space.active').classList.remove('active');
    slides[currentSlide].classList.add('active');
}

function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    $('.img__space.active').classList.remove('active');
    slides[currentSlide].classList.add('active');

}

// function handle addCart

function addCart(tag, indexData, indexList) {
    if (tag == 1) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataDrinks.coffee[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    } else if (tag == 2) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataDrinks.milkTea[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    } else if (tag == 3) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataDrinks.soda[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    } else if (tag == 4) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataCakes[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    }

    statusAddCart.style.display = 'block';
    let status = document.createElement('li');
    status.classList.add('item__status');
    status.innerHTML = `
                        <div class="item__status-container">
                            <h3>THÊM SẢN PHẨM THÀNH CÔNG</h3>
                            <div class="icon__success">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="item__status-message">
                                “Bạn đã thêm sản phẩm vào giỏ hàng <i class="fa-solid fa-cart-shopping"></i>”
                            </div>
                        </div>`
    listStatus.appendChild(status);
    removeStatus(status);
    resetCart();
}

function removeStatus(status) {
    setTimeout(() => {
        listStatus.removeChild(status);
    }, 1000);
}

function settingQuantity(idList, quantity) {
    listCartData[idList].quantity = quantity;
    if (quantity <= 0) {
        delete listCartData[idList]
        resetCart();
    }
    resetCart();
}

function removeCart(idList) {
    delete listCartData[idList];
    resetCart();
}


function resetCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    let resultPrice = 0;
    quantity.innerHTML = 0;
    numberCart.innerHTML = 0;
    totalBill.innerHTML = 0 + " VNĐ";
    totalMoney.innerHTML = 0 + " VNĐ";
    listCartData.forEach((item, index) => {
        if (item != null) {
            console.log(item);
            count += item.quantity;
            totalPrice += item.price * item.quantity;
            resultPrice = totalPrice + 15000;
            let newDiv = document.createElement('div');
            newDiv.classList.add('item__cart');
            newDiv.innerHTML = `
                            <div class="item__cart-content">
                                <div class="item__cart-img">
                                    <img srcset="${item.img} 2x" alt="">
                                </div>
                                <div class="item__cart-info">
                                    <div class="cart__info-name">${item.name}</div>
                                    <div class="cart__info-subname">${item.subName}</div>
                                    <div class="cart__info-price">${convert(item.price)} VNĐ</div>
                                </div>
                            </div>
                            <div class="setting__quantily">
                                <div class="setting__quantily-btn">
                                    <button class="button__quantily-down" onclick="settingQuantity(${item.ID__LIST}, ${item.quantity - 1})">-</button>
                                    <div class="number__quantily">${item.quantity}</div>
                                    <button class="button__quantily-up" onclick="settingQuantity(${item.ID__LIST}, ${item.quantity + 1})">+</button>
                                </div>
    
                                <div class="setting__quantily-remove">
                                    <button class="btn__remove" onclick="removeCart(${item.ID__LIST})">Xóa</button>
                                </div>
                            </div>`
            listCart.appendChild(newDiv);
        }
        quantity.innerHTML = count;
        numberCart.innerHTML = count;
        totalBill.innerHTML = convert(totalPrice) + 'VND';
        totalMoney.innerHTML = convert(resultPrice) + 'VND';
    })


}

function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}

// get data form
buttonBuy.addEventListener('click', () => {
    for (let i = 0; i < listCartData.length; i++) {
        if (listCartData[i] != null) {
            isNotNull = true;
        }

    }

    if (isNotNull) {
        form.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    let result = listCartData.reduce((acc, item) => {
        if (item != null) {
            return {
                ...item
            }
        }
    }, []);
    console.log(result);
})
