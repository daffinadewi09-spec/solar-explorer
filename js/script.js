function toggleMusic() {

    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");

    if (!music) {
        alert("Audio tidak ditemukan!");
        return;
    }

    if (music.paused) {

        music.play()
        .then(() => {

            if (btn) {
                btn.innerHTML = "⏸ Pause";
            }

        })
        .catch((error) => {

            console.error("Gagal memutar audio:", error);

            alert(
                "Audio gagal diputar. Cek file audio/space.mp3"
            );

        });

    } else {

        music.pause();

        if (btn) {
            btn.innerHTML = "▶ Musik";
        }

    }

}

function playClick() {

    const click =
    document.getElementById("clickSound");

    if (!click) return;

    click.currentTime = 0;
    click.play();

}

function showPlanet(planet, button) {

    document
    .querySelectorAll(".planet-buttons button")
    .forEach(btn => {

        btn.classList.remove("active-planet");

    });

    if (button) {
        button.classList.add("active-planet");
    }

    const img = document.getElementById("planet-img");
    const name = document.getElementById("planet-name");
    const description = document.getElementById("planet-description");
    const data = document.getElementById("planet-data");
    const fact = document.getElementById("planet-fact");

    if (!img) return;

    // MERKURIUS
    if (planet === "merkurius") {

        img.src = "images/merkurius.jpg";

        name.innerHTML = "Merkurius";

        description.innerHTML =
        "Merkurius adalah planet terdekat dengan Matahari dan merupakan planet terkecil di Tata Surya.";

        data.innerHTML = `
            <li>Diameter: 4.879 km</li>
            <li>Jumlah Satelit: 0</li>
            <li>Jarak ke Matahari: 57,9 juta km</li>
        `;

        fact.innerHTML =
        "Satu tahun di Merkurius hanya berlangsung sekitar 88 hari Bumi.";

    }

    // VENUS
    else if (planet === "venus") {

        img.src = "images/venus.jpg";

        name.innerHTML = "Venus";

        description.innerHTML =
        "Venus adalah planet kedua dari Matahari dan planet terpanas di Tata Surya.";

        data.innerHTML = `
            <li>Diameter: 12.104 km</li>
            <li>Jumlah Satelit: 0</li>
            <li>Jarak ke Matahari: 108,2 juta km</li>
        `;

        fact.innerHTML =
        "Venus berputar berlawanan arah dibanding sebagian besar planet lainnya.";

    }

    // BUMI
    else if (planet === "bumi") {

        img.src = "images/bumi.jpg";

        name.innerHTML = "Bumi";

        description.innerHTML =
        "Bumi adalah satu-satunya planet yang diketahui mendukung kehidupan.";

        data.innerHTML = `
            <li>Diameter: 12.742 km</li>
            <li>Jumlah Satelit: 1 (Bulan)</li>
            <li>Jarak ke Matahari: 149,6 juta km</li>
        `;

        fact.innerHTML =
        "71% permukaan Bumi tertutup oleh air.";

    }

    // MARS
    else if (planet === "mars") {

        img.src = "images/mars.jpg";

        name.innerHTML = "Mars";

        description.innerHTML =
        "Mars dikenal sebagai Planet Merah karena permukaannya kaya akan oksida besi.";

        data.innerHTML = `
            <li>Diameter: 6.779 km</li>
            <li>Jumlah Satelit: 2</li>
            <li>Jarak ke Matahari: 227,9 juta km</li>
        `;

        fact.innerHTML =
        "Mars memiliki gunung tertinggi di Tata Surya yaitu Olympus Mons.";

    }

    // JUPITER
    else if (planet === "jupiter") {

        img.src = "images/jupiter.jpg";

        name.innerHTML = "Jupiter";

        description.innerHTML =
        "Jupiter adalah planet terbesar di Tata Surya.";

        data.innerHTML = `
            <li>Diameter: 139.820 km</li>
            <li>Jumlah Satelit: 95+</li>
            <li>Jarak ke Matahari: 778,5 juta km</li>
        `;

        fact.innerHTML =
        "Lebih dari 1.300 planet Bumi dapat dimasukkan ke dalam Jupiter.";

    }

    // SATURNUS
    else if (planet === "saturnus") {

        img.src = "images/saturnus.jpg";

        name.innerHTML = "Saturnus";

        description.innerHTML =
        "Saturnus terkenal karena sistem cincinnya yang sangat indah.";

        data.innerHTML = `
            <li>Diameter: 116.460 km</li>
            <li>Jumlah Satelit: 146+</li>
            <li>Jarak ke Matahari: 1,43 miliar km</li>
        `;

        fact.innerHTML =
        "Cincin Saturnus tersusun dari miliaran partikel es dan batu.";

    }

    // URANUS
    else if (planet === "uranus") {

        img.src = "images/uranus.jpg";

        name.innerHTML = "Uranus";

        description.innerHTML =
        "Uranus adalah planet es raksasa yang memiliki kemiringan sumbu unik.";

        data.innerHTML = `
            <li>Diameter: 50.724 km</li>
            <li>Jumlah Satelit: 27</li>
            <li>Jarak ke Matahari: 2,87 miliar km</li>
        `;

        fact.innerHTML =
        "Uranus tampak seperti berguling saat mengelilingi Matahari.";

    }

    // NEPTUNUS
    else if (planet === "neptunus") {

        img.src = "images/neptunus.jpg";

        name.innerHTML = "Neptunus";

        description.innerHTML =
        "Neptunus adalah planet terjauh dari Matahari.";

        data.innerHTML = `
            <li>Diameter: 49.244 km</li>
            <li>Jumlah Satelit: 14</li>
            <li>Jarak ke Matahari: 4,50 miliar km</li>
        `;

        fact.innerHTML =
        "Neptunus memiliki angin tercepat di Tata Surya, mencapai lebih dari 2.000 km/jam.";

    }

}

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 1500);

});