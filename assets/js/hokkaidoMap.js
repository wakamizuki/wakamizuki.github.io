(async () => {
    const map = "/assets/svg/map-hokkaido-full.svg"; // パスは適宜
    const container = document.querySelector('#map');
    const res = await fetch(map);

    if (res.ok) {
        const svg = await res.text();
        container.innerHTML = svg;
    }
})();
