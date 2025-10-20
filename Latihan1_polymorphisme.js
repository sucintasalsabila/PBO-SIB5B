class Vehicle {
    move() {
        console.log("Kendaraan Bergerak");
    }
}

class Car {
    move() {
        console.log("Mobil Berjalan di Jalan Raya");
    }
}

class Boat {
    move() {
        console.log("Kapal berlayar di laut");
    }
}

const vehicle = new Vehicle();
vehicle.move();