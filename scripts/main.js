import App from "./App.js";

App.initData();

const cariMobilBtn = document.getElementById("cari-mobil-btn");

cariMobilBtn.addEventListener("click", () => {
    const displayedCarsSection = document.getElementById("displayed-cars-section");
    const filteredCars = App.filter();

    if (filteredCars.length != 0) {
        // if there are cars with corresponding filters, then do:
        displayedCarsSection.innerHTML = `<div class="row g-4" id="displayed-cars"></div>`;

        const carsContainer = document.getElementById("displayed-cars");

        filteredCars.forEach((car) => {
            carsContainer.innerHTML += car.render();
        });
    } else {
        displayedCarsSection.innerHTML = "";
    }
});
