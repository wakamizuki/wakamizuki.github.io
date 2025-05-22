window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#local-activities-and-sightseeing .row");
    const regionName = "chubu"; // 表示したい地域
    const spinner = document.getElementById("spinner");
    const loadMoreBtn = document.getElementById("load-more-btn");

    let filteredActivities = [];
    let loadedCount = 0;
    const itemsPerClick = 8;
    let loadCount = 0;

    if (typeof activities !== 'undefined' && Array.isArray(activities)) {
        filteredActivities = activities.filter(activity => activity.region === regionName);

        const loadNextActivities = () => {
            const nextBatch = loadCount === 0
                ? filteredActivities.slice(loadedCount, loadedCount + Math.ceil(itemsPerClick / 2))
                : filteredActivities.slice(loadedCount, loadedCount + itemsPerClick);

            const render = () => {
                nextBatch.forEach(activity => {
                    const cardElement = document.createElement("div");
                    cardElement.classList.add("col-6", "col-md-4", "col-lg-3", "p-0", "pl-2", "pb-1");

                    cardElement.innerHTML = `
                        <div class="card custom-card">
                            <a href="${activity.link}">
                                <img src="${activity.image}" class="card-img-top" alt="${activity.title}" loading="lazy">
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">${activity.title}</h4>
                                <p class="card-text">${activity.description}</p>
                                
                            </div>
                        </div>
                    `;
                    container.appendChild(cardElement);
                });

                loadedCount += nextBatch.length;
                if (loadedCount >= filteredActivities.length) {
                    if (loadMoreBtn) loadMoreBtn.style.display = "none";
                }
                loadCount++;
                if (spinner) spinner.style.display = "none";
            };

            if (loadCount === 0) {
                render();
            } else {
                if (spinner) spinner.style.display = "block";
                setTimeout(render, 700);
            }
        };

        // 初期読み込み
        loadNextActivities();

        // ボタンのイベント
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener("click", loadNextActivities);
        }
    }
});
