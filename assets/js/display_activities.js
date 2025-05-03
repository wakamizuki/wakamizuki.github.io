// splash.js
window.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector("#local-activities-and-sightseeing .row");
    // 安全に activities が存在しているかチェックも可
    if (typeof activities !== 'undefined' && Array.isArray(activities)) {
        activities.forEach(activity => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("col-6", "col-md-4", "col-lg-3", "p-0", "pl-2", "pb-1");

            cardElement.innerHTML = `
                <div class="card custom-card">
                    <a href="${activity.link}">
                        <img src="${activity.image}" class="card-img-top" alt="${activity.title}">
                    </a>
                    <div class="card-body">
                        <h2 class="card-title">${activity.title}</h2>
                        <p class="card-text">${activity.description}</p>
                        <a href="${activity.link}" class="btn btn-primary">See more</a>
                    </div>
                </div>
            `;
            container.appendChild(cardElement);
        });
    }

});