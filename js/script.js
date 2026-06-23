// =========================
// MUSIC
// =========================

function toggleMusic() {

    const music =
    document.getElementById("bg-music");

    const btn =
    document.getElementById("music-btn");

    if (!music) return;

    if (music.paused) {

        music.play();

        if (btn) {

            btn.innerHTML =
            "⏸ Pause";

        }

    } else {

        music.pause();

        if (btn) {

            btn.innerHTML =
            "▶ Musik";

        }

    }

}

// =========================
// CLICK SOUND
// =========================

function playClick() {

    const click =
    document.getElementById("clickSound");

    if (!click) return;

    click.currentTime = 0;

    click.play();

}

// =========================
// GO TO PLANET PAGE
// =========================

function goPlanet() {

    playClick();

    window.location.href =
    "planet.html";

}

// =========================
// PLANET DATA
// =========================

function showPlanet(planet, button) {

    const img =
    document.getElementById("planet-img");

    const name =
    document.getElementById("planet-name");

    const desc =
    document.getElementById("planet-description");

    const data =
    document.getElementById("planet-data");

    const fact =
    document.getElementById("planet-fact");

    if (!img) return;

    document
    .querySelectorAll(".planet-buttons button")
    .forEach(btn => {

        btn.classList.remove(
            "active-planet"
        );

    });

    if (button) {

        button.classList.add(
            "active-planet"
        );

    }

    const planets = {

        merkurius: {

            img:"images/merkurius.jpg",

            name:"Merkurius",

            desc:"Merkurius adalah planet terdekat dengan Matahari dan merupakan planet terkecil di Tata Surya.",

            data:`
                <li>Diameter: 4.879 km</li>
                <li>Satelit: 0</li>
                <li>Jarak: 57,9 juta km</li>
            `,

            fact:"Satu tahun di Merkurius hanya 88 hari Bumi."

        },

        venus: {

            img:"images/venus.jpg",

            name:"Venus",

            desc:"Venus adalah planet terpanas di Tata Surya.",

            data:`
                <li>Diameter: 12.104 km</li>
                <li>Satelit: 0</li>
                <li>Jarak: 108,2 juta km</li>
            `,

            fact:"Venus berputar berlawanan arah dengan sebagian besar planet."

        },

        bumi: {

            img:"images/bumi.jpg",

            name:"Bumi",

            desc:"Bumi adalah satu-satunya planet yang diketahui mendukung kehidupan.",

            data:`
                <li>Diameter: 12.742 km</li>
                <li>Satelit: 1</li>
                <li>Jarak: 149,6 juta km</li>
            `,

            fact:"71% permukaan Bumi tertutup air."

        },

        mars: {

            img:"images/mars.jpg",

            name:"Mars",

            desc:"Mars dikenal sebagai Planet Merah.",

            data:`
                <li>Diameter: 6.779 km</li>
                <li>Satelit: 2</li>
                <li>Jarak: 227,9 juta km</li>
            `,

            fact:"Olympus Mons adalah gunung tertinggi di Tata Surya."

        },

        jupiter: {

            img:"images/jupiter.jpg",

            name:"Jupiter",

            desc:"Jupiter adalah planet terbesar di Tata Surya.",

            data:`
                <li>Diameter: 139.820 km</li>
                <li>Satelit: 95+</li>
                <li>Jarak: 778,5 juta km</li>
            `,

            fact:"Lebih dari 1.300 Bumi bisa masuk ke Jupiter."

        },

        saturnus: {

            img:"images/saturnus.jpg",

            name:"Saturnus",

            desc:"Saturnus terkenal dengan cincin indahnya.",

            data:`
                <li>Diameter: 116.460 km</li>
                <li>Satelit: 146+</li>
                <li>Jarak: 1,43 miliar km</li>
            `,

            fact:"Cincin Saturnus tersusun dari es dan batu."

        },

        uranus: {

            img:"images/uranus.jpg",

            name:"Uranus",

            desc:"Uranus adalah planet es raksasa.",

            data:`
                <li>Diameter: 50.724 km</li>
                <li>Satelit: 27</li>
                <li>Jarak: 2,87 miliar km</li>
            `,

            fact:"Uranus tampak berguling saat mengelilingi Matahari."

        },

        neptunus: {

            img:"images/neptunus.jpg",

            name:"Neptunus",

            desc:"Neptunus adalah planet terjauh dari Matahari.",

            data:`
                <li>Diameter: 49.244 km</li>
                <li>Satelit: 14</li>
                <li>Jarak: 4,5 miliar km</li>
            `,

            fact:"Kecepatan anginnya bisa mencapai 2.000 km/jam."

        }

    };

    const p =
    planets[planet];

    if (!p) return;

    img.src = p.img;

    name.innerHTML = p.name;

    desc.innerHTML = p.desc;

    data.innerHTML = p.data;

    fact.innerHTML = p.fact;

}

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add(
            "loader-hide"
        );

    }, 1200);

});

// =========================
// COUNTER ANIMATION
// =========================

function animateValue(id, end, speed) {

    const obj =
    document.getElementById(id);

    if (!obj) return;

    let start = 0;

    const timer =
    setInterval(() => {

        start++;

        obj.innerHTML = start;

        if (start >= end) {

            clearInterval(timer);

        }

    }, speed);

}

window.addEventListener("load", () => {

    animateValue(
        "sun-count",
        1,
        100
    );

    animateValue(
        "planet-count",
        8,
        100
    );

    animateValue(
        "moon-count",
        285,
        10
    );

    animateValue(
        "asteroid-count",
        1000,
        1
    );

});
