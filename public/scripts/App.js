import Car from "./Car.js";

const carsData = require("../data/cars.min.json");

function getTimeStamp(date, time) {
    const dateParts = date.split("-").map(Number);
    const timeParts = time.split(":").map(Number);
    const timestamp = new Date(
        parseInt(dateParts[0]),
        parseInt(dateParts[1] - 1),
        parseInt(dateParts[2]),
        parseInt(timeParts[0]),
        parseInt(timeParts[1])
    );
    console.log(timestamp);

    return timestamp;
}

export default class App {
    constructor() {
        throw new Error("Cannot instantiate App object");
    }

    static run() {
        /**
         * fetch data from json files
         */
        Car.init(carsData);
    }

    static filter() {
        /**
         * filter berdasarkan input fields
         */
        const driverOption = document.getElementById("pilih-driver").value;
        const selectedDate = document.getElementById("date-picker").value;
        const selectedWaktuJemput =
            document.getElementById("waktu-jemput").value;
        const passengersCapacity =
            document.getElementById("jumlah-penumpang").value;

        const waktuJemputTimestamp = getTimeStamp(
            selectedDate,
            selectedWaktuJemput
        );

        const filteredCars = Car.records.filter((car) => {
            if (
                car.hasOption(driverOption) &&
                waktuJemputTimestamp >= car.availableAt
            ) {
                if (passengersCapacity !== "") {
                    const parsedPassengersCapacity =
                        parseInt(passengersCapacity);
                    return car.capacity >= parsedPassengersCapacity;
                }
                return true;
            }
            return false;
        });
        return filteredCars;
    }
}
