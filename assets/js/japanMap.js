(async () => {
    const map = "/assets/svg/map-full.svg"; // パスは適宜
    const container = document.querySelector('#map');
    const res = await fetch(map);

    if (res.ok) {
        const svg = await res.text();
        container.innerHTML = svg;

        const regions = ['hokkaido', 'tohoku', 'kanto', 'chubu', 'kinki', 'chugoku', 'shikoku', 'kyusyu-okinawa'];
        const regionGroups = {};
        regions.forEach(region => {
            regionGroups[region] = Array.from(document.querySelectorAll(`g.${region}`));
            regionGroups[region].forEach(e => {
                e.style.cursor = 'pointer';
                e.style.transition = 'filter 1s ease';

                e.addEventListener('click', () => {
                    window.location.href = `/src/regions/${region}/index.html`;
                });
            });
        });

        regions.forEach(region => {
            regionGroups[region].forEach(elem => {
                elem.addEventListener('mouseover', () => {
                    regionGroups[region].forEach(e => {
                        e.classList.add('hover-bright');
                    });
                });

                elem.addEventListener('mouseleave', () => {
                    regionGroups[region].forEach(e => {
                        e.classList.remove('hover-bright');
                    });
                });
            });
        });
    }
})();
