// splash.js

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded"); // ← これを追加
    const sakuraContainer = document.querySelector('.sakura-container');
    if (sakuraContainer) {
        
        for (let i = 0; i < 100; i++) {
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

        const container = document.querySelector("#local-activities-and-sightseeing .row");

        // 安全に activities が存在しているかチェックも可
        if (typeof activities !== 'undefined' && Array.isArray(activities)) {
            activities.forEach(activity => {
                const cardElement = document.createElement("div");
                cardElement.classList.add("col-6", "col-md-4", "col-lg-2", "p-0", "pl-2", "pb-1");

                cardElement.innerHTML = `
                    <div class="card custom-card">
                        <a href="${activity.link}">
                            <img src="${activity.image}" class="card-img-top" alt="${activity.title}">
                        </a>
                        <div class="card-body p-1">
                            <h2 class="card-title">${activity.title}</h2>
                            <p class="card-text">${activity.description}</p>
                            
                        </div>
                    </div>
                `;
                container.appendChild(cardElement);
            });
        }
    }, 2000);
});
//<a href="${activity.link}" class="btn btn-primary">See more</a>
