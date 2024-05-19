products = [
    {
        name: "Thyme Honey",
        img: "/assets/img/products/honey/thyme-honey.png",
        price: "10.00",
        type: "honey",
        description: "Product only in the summer months when thyme blossoms. It's aromatic taste and golden color are it's most prominent characteristics. In Greece it is considered a luxury item "
    },
    {
        name: "Blossom Honey",
        img: "/assets/img/products/honey/blossom-honey.png",
        price: "8.00",
        type: "honey",
        description: "Blossom honey is produced year round. Every day it's taste is unique and unpredictable beacause the bees collect pollen from the available flowers in their vicinity."
    },
    {
        name: "Carob Honey",
        img: "/assets/img/products/honey/carob-honey.png",
        price: "10.00",
        type: "honey",
        description: "Eating this honey fresh gives of a very strong erthy flavor not for everyone. Leaving it to mature transforms it into brown gold!"
    },
    {
        name: "Sage Honey",
        img: "/assets/img/products/honey/sage-honey.png",
        price: "12.00",
        type: "honey",
        description: "Sage honey has a delicate flavor and light color. It is known for its soothing properties and is often used in herbal remedies."
    },
    {
        name: "Erica Honey",
        img: "/assets/img/products/honey/erica-honey.png",
        price: "12.00",
        type: "honey",
        description: "Erica honey is prized for its dark color and rich, robust flavor. It is often sought after for its high antioxidant content."
    },
    {
        name: "Chewing Propolis",
        img: "/assets/img/products/other/chewing-propolis.png",
        price: "10.00",
        type: "other",
        description: "Chewing propolis is known for its natural antibiotic and anti-inflammatory properties. It supports oral health and boosts the immune system."
    },
    {
        name: "Royal Jelly",
        img: "/assets/img/products/other/royal-jelly.png",
        price: "8.00",
        type: "other",
        description: "Royal jelly is a nutrient-rich substance produced by worker bees. It is used as a dietary supplement to promote vitality and overall health."
    },
    {
        name: "Edible Honeycomb",
        img: "/assets/img/products/other/edible-honeycomb.png",
        price: "10.00",
        type: "other",
        description: "Edible honeycomb offers a unique and natural way to enjoy honey. It provides a sweet, chewy texture and is perfect for adding to cheese boards or desserts."
    },
    {
        name: "Fresh Pollen",
        img: "/assets/img/products/other/fresh-pollen.png",
        price: "12.00",
        type: "other",
        description: "Fresh pollen is a highly nutritious bee product packed with vitamins, minerals, and proteins. It is often used as a dietary supplement for energy and immune support."
    },
    {
        name: "Beeswax Candles",
        img: "/assets/img/products/non-edible/beeswax-candles.png",
        price: "15.00",
        type: "non-edible",
        description: "Natural, handcrafted beeswax candles in various shapes and sizes. Long-lasting, clean-burning, and have a natural honey scent."
    },
    {
        name: "Beeswax Wraps",
        img: "/assets/img/products/non-edible/beeswax-wraps.png",
        price: "12.00",
        type: "non-edible",
        description: "Eco-friendly, reusable food wraps made from beeswax. A sustainable alternative to plastic wrap that keeps food fresh."
    },
    {
        name: "Propolis Tincture",
        img: "/assets/img/products/other/propolis-tincture.png",
        price: "20.00",
        type: "other",
        description: "A liquid extract of propolis known for its medicinal properties. Provides immune support, and has anti-inflammatory and antibacterial properties."
    },
    {
        name: "Honey Soap",
        img: "/assets/img/products/non-edible/honey-soap.png",
        price: "8.00",
        type: "non-edible",
        description: "Handcrafted soap made with honey and beeswax. Moisturizing, antibacterial, and suitable for sensitive skin."
    },
    {
        name: "Beeswax Lip Balm",
        img: "/assets/img/products/non-edible/beeswax-lip-balm.png",
        price: "5.00",
        type: "non-edible",
        description: "Natural lip balm made with beeswax, honey, and essential oils. Moisturizing, protective, and soothing for lips."
    }
];

function createHoneyProduct(product) {
    if (product.type !== "honey") return;

    return `
        <div class="product" onclick="showProduct('${ product.name }')">
            <img class="product-img" src="${ product.img }" alt="">
            <h4 class="product-text" data-translate="thyme-honey">${ product.name }</h4>
            <p class="product-price">&#8364;${ product.price }/kg</p>
        </div>
    `;
}

function createOtherProduct(product) {
    if (product.type !== "other") return;

    return `
        <div class="product" onclick="showProduct('${ product.name }')">
            <img class="product-img" src="${ product.img }" alt="">
            <h4 class="product-text" data-translate="thyme-honey">${ product.name }</h4>
            <p class="product-price">&#8364;${ product.price }/kg</p>
        </div>
    `;
}

function createNonEdibleProduct(product){
    if (product.type !== "non-edible") return;

    return `
        <div class="product" onclick="showProduct('${ product.name }')">
            <img class="product-img" src="${ product.img }" alt="">
            <h4 class="product-text" data-translate="thyme-honey">${ product.name }</h4>
            <p class="product-price">&#8364;${ product.price }/kg</p>
        </div>
    `;
}

function pushProducts() {
    const honey = document.getElementById('honey-scroll');
    honey.innerHTML = products.map(createHoneyProduct).join('');

    const other = document.getElementById('other-scroll');    
    other.innerHTML = products.map(createOtherProduct).join('');

    const nonEdible = document.getElementById('non-edible-scroll');
    nonEdible.innerHTML = products.map(createNonEdibleProduct).join('');
}

window.onload = pushProducts;

function showProduct(name) {
    const product = products.find(ps => ps.name === name);
    if (!product) return;

    const productContainer = document.getElementById('popup-container');
    productContainer.innerHTML = `
        <div id="product-popup" class="popup">
            <div class="popup-container">
                <div class="popup-content">
                    <div class="close-btn-container">
                        <span class="close-btn" onclick="closePopup()">&times;</span>
                    </div>                                        
                    <img src="${ product.img }" alt="">
                    <div class="product-info">
                        <h2>${ product.name }</h2>                
                        <p>${ product.description }</p>
                        <p><strong>Price:</strong> &#8364;${ product.price }</p>
                    </div>                 
                </div>
            </div>            
        </div>
    `;

    document.getElementById('product-popup').style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('product-popup');
    popup.innerHTML = '';
    popup.style.display = 'none';
}

