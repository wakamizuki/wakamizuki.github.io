let loadedCount = 0;
const itemsPerClick = 150;
let loadCount = 0;

function loadNextActivities() {
    const container = document.querySelector("#local-activities-and-sightseeing .row");
    const nextBatch = loadCount === 0
        ? activities.slice(loadedCount, loadedCount + Math.ceil(itemsPerClick / 2))
        : activities.slice(loadedCount, loadedCount + itemsPerClick);
    const spinner = document.getElementById("spinner");

    const render = () => {
        nextBatch.forEach(activity => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("col-6", "col-md-4", "col-lg-2", "p-0", "pl-2", "pb-1");
            cardElement.innerHTML = `
                <div class="card custom-card">
                    <a href="${activity.link}">
                        <img src="${activity.image}" class="card-img-top" alt="${activity.title}" loading="lazy">
                    </a>
                    <div class="card-body p-1">
                        <h4 class="card-title">${activity.title}</h4>
                        <p class="card-text">${activity.description}</p>
                    </div>
                </div>
            `;
            container.appendChild(cardElement);
        });
        loadedCount += nextBatch.length;
        if (loadedCount >= activities.length) {
            document.getElementById("load-more-btn").style.display = "none";
        }
        loadCount++;
        // スピナー非表示
        if (spinner) spinner.style.display = "none";
    };

    if (loadCount === 0) {
        render();
    } else {
        if (spinner) spinner.style.display = "block"; // スピナー表示
        const delay = 100;
        setTimeout(render, delay);
    }
}


window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded"); // ← これを追加
    const sakuraContainer = document.querySelector('.sakura-container');
    if (sakuraContainer) {
        const isMobile = window.innerWidth <= 768; // モバイルの幅を768pxに設定
        const numberOfSakura = isMobile ? 35 : 60; // モバイルの場合は50、それ以外は100
        for (let i = 0; i < numberOfSakura; i++) {
            const sakura = document.createElement('div');
            if (Math.random() < 0.5) {
                sakura.classList.add('dark'); // 50%で濃い色を適用
            }
            sakura.classList.add('sakura');
            sakura.style.left = Math.random() * 100 + 'vw';
            sakura.style.top = -35 + Math.random() * 30 + 'vh';  // -10vh 〜 20vh の範囲
            sakura.style.animationDelay = Math.random() * 0.4 + 's';  // 0〜0.5秒の間に開始
            sakura.style.animationDuration = 1.0 + Math.random() * 2.2 + 's';  // 0.8〜1.5秒で落下完了
            sakuraContainer.appendChild(sakura);
        }
    }
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('gradient-wrapper').style.display = 'block';
        loadNextActivities();
        const loadMoreButton = document.getElementById("load-more-btn");
        loadMoreButton.addEventListener("click", () => {
            loadNextActivities();
        });
    }, 300);
});
