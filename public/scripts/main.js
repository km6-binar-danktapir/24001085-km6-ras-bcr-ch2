import App from "./App.js";

const displayedCarsSection = document.getElementById("displayed-cars-section");
const cariMobilBtn = document.getElementById("cari-mobil-btn");

App.initData();

cariMobilBtn.addEventListener("click", () => {
    const filteredCars = App.filter();

    if (filteredCars.length != 0) {
        // if there are cars with corresponding filters, then do:
        displayedCarsSection.innerHTML = `<div class="row g-4" id="displayed-cars"></div>`;

        const carsContainer = document.getElementById("displayed-cars");

        filteredCars.forEach((car) => {
            carsContainer.innerHTML += car.render();
        });
    } else if (displayedCarsSection.innerHTML !== "") {
        // if search result is empty (no cars found), then do:
        displayedCarsSection.innerHTML = `<div class="card">
                    <div class="card-body" id="cars-container"></div>
                </div>`;
        const carsContainer = document.getElementById("cars-container");
        carsContainer.innerHTML = `<h2 style="text-align: center">No cars found</h2>`;
    }
});
