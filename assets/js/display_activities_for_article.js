// splash.js
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#local-activities-and-sightseeing .row");
    // 安全に activities が存在しているかチェックも可
    if (typeof activities !== 'undefined' && Array.isArray(activities)) {
        activities.forEach(activity => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("col-lg-6", "col-md-12", "col-sm-4","col-6", "p-0", "pl-2", "pb-1");

            cardElement.innerHTML = `
                <div class="card custom-card custom-card-small">
                    <a href="${activity.link}">
                        <img src="${activity.image}" class="card-img-top" alt="${activity.title}">
                    </a>
                    <div class="card-body p-0">
                        <h2 class="card-title">${activity.title}</h2>
                        <p class="card-text">${activity.description}</p>
                    </div>
                </div>
            `;
            container.appendChild(cardElement);
        });
    }

});
/*
                            <div class="col-lg-6 col-md-12 col-sm-4 col-4 p-0 pl-2 pb-1">
                                <div class="card custom-card custom-card-small">
                                    <a href="/src/activities/Odawara_Castle.html">
                                        <img src="/assets/images/Odawara_Castle_1.jpg" class="card-img-top"
                                            alt="odawara-castle-and-history">
                                    </a>
                                    <div class="card-body p-0">
                                        <h2 class="card-title">Odawara Castle</h2>
                                        <p class="card-text">Odawara Castle offers a glimpse into Japan’s samurai past with its
                                            well-preserved
                                            architecture and scenic views.</p>
                                        
                                    </div>
                                </div>
                            </div>
*/