async function loadMenu() {
    const response = await fetch("data/menu.json");
    const data = await response.json();

    displayCategory("tacos", data.menu);
    displayCategory("drinks", data.drinks);
}

function displayCategory(categoryId, items) {
    const container = document.getElementById(categoryId);

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-card");

        let priceText = `$${item.price.toFixed(2)}`;
        if(item.loadedPrice) {
            priceText += ` / Loaded $${item.loadedPrice.toFixed(2)}`;
        }

        if (item.extraMeatPrice) {
            priceText += ` (+$${item.extraMeatPrice.toFixed(2)} extra meat)`;
        }

        div.innerHTML = `
            <span class="menu-name">${item.name}</span>
            <span class="menu-dots"></span>
            <span class="menu-price">${priceText}</span>
            <span class="menu-desc">${item.description}</span>
        `;
        
        
        
        
        /*`
        <h3>${item.name} - ${priceText}</h3>
        <p>${item.description}</p>
        `;*/

        container.appendChild(div);





       /* div.innerHTML = `
        <h3>${item.name} - $${item.price.toFixed(2)}</h3>
        <p>${item.description}</p>
        `;

        container.appendChild(div);*/
    });
}

loadMenu();