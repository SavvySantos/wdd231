document.addEventListener("DOMContentLoaded", () => {
    const levelList = document.querySelector("#level-details");
    const buttonContainer = document.querySelector(".level-buttons");

    const membershipLevels = [
        {
            id: "np",
            title: "Non-Profit",
            price: 0,
            description: "Designed for registered non-profit organizations that want basic access to the chamber community and resources without membership fees.",
            benefits: [
                "Access to general chamber events;",
                "Listing in the basic member directory;",
                "Monthly chamber newletter;",
                "Eligibility for community partnerships",
                "Access to educational resources",
                "Limited event discount (or none -- up to you)"
            ]
        },
        {
            id: "bronze",
            title: "Bronze Membership",
            price: 150,
            description: "A great entry-level membership for small businesses wanting visibility and participation in chamber activities.",
            benefits: [
                "All NP benefits;",
                "Small event discount (5-10%);",
                "Access to member-only workshop;",
                "Inclusion in business networking mixers;",
                "Ability to post to community job board;",
                "Basic advertising oppertunities (e.g., one social media spotlight per year)"
            ]
        },
        {
            id: "silver",
            title: "Silver Membership",
            price: 250,
            description: "Ideal for growiing businesses that want stronger visibility, advertising advantages, and greater involvement in the commjnity.",
            benefits: [
                "All Bronze benefits;",
                "Medium event discount (10-15%);",
                "Priority access to training + business development workshops;",
                "Two spotlight advertising positions per year;",
                "Inclusion in featured member lists;",
                "Eligible for sponsorship opportunities;",
                "Access to enhanced analytics for advertising placements"
            ]
        },
        {
            id: "gold",
            title: "Gold Membership",
            price: 350,
            description: "Premium level designed for established businesses seeking maximum visibility, priority placement, and the highest-value chamber benefits.",
            benefits: [
                "All Silver benefits;",
                "Largest event discount (20% or more);",
                "Unlimited spotlight advertising opportunities;",
                "Feature placement on home page;",
                "Reserved booth space at major chamber events;",
                "VIP access at all networking events;",
                "Priority sponsorship opportunities;",
                "Personalized business strategy session or consulting hour;",
                "Early registration for major programs & expos"
            ]
        },
    ];

    function displayButtons() {
        membershipLevels.forEach(level => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
            <h3>${level.title}</h3>
            <p class="price">$${level.price}</p>
            <button class="info-btn"> More Info</button>
            `;

            const infoBtn = card.querySelector(".info-btn");
            infoBtn.addEventListener("click", () => displayLevelDetails(level));

            buttonContainer.appendChild(card);
        });
    }

    function displayLevelDetails(level) {
        const benefitList = level.benefits.map(b => `<li>${b}</li>`).join("");

        levelList.innerHTML = `
            <button id='closeModal'>❌</button>
            <h2>${level.title} - $${level.price}</h2>
            <p class="level-description"><strong>Level Description: </strong></p><p class="description">${level.description}</p>
            <p class="benefits-label"><strong>Benefits: </strong></p>
            <ul class="benefit-list">${benefitList}</ul>
            `;

        levelList.showModal();

        const closeModal = document.querySelector("#closeModal");

        closeModal.addEventListener("click", () => {
            levelList.close();
        });
    }
    
    displayButtons();
});