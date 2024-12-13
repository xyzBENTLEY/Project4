var dreamCar = {
    make: "BMW M4",
    model: "Competition",
    color: "red",
    year: 2025,
    bodyStyle: "Luxury Sports Car",
    price: 124675
   };

   alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;