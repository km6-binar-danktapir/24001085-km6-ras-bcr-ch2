import App from "./App.js";

const displayedCarsSection = document.getElementById("displayed-cars-section");
const cariMobilBtn = document.getElementById("cari-mobil-btn");

App.initData();

cariMobilBtn.addEventListener("click", () => {
    const filteredCars = App.filter();

    if (filteredCars.length != 0) {
        displayedCarsSection.innerHTML = `<div class="card">
                    <div class="card-body" id="cars-container"></div>
                </div>`;

        const carsContainer = document.getElementById("cars-container");
        
        filteredCars.forEach((car) => {
            carsContainer.innerHTML += car.render();
        });
    }
});
