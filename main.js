var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "ค่าดัชนีมวลกายของคุณคือ " + bmi + " ซึ่งหมายความว่า " + "คุณมีน้ำหนักน้อย";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "ค่าดัชนีมวลกายของคุณคือ " + bmi + " ซึ่งหมายความว่า " + "คุณเป็นคนปกติ";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "ค่าดัชนีมวลกายของคุณคือ " + bmi + " ซึ่งหมายความว่า " + "คุณมีน้ำหนักเกิน";
	} else if (bmi >= 30) {
		measure = "ค่าดัชนีมวลกายของคุณคือ " + bmi + " ซึ่งหมายความว่า " + "คุณเป็นโรคอ้วน";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "ไม่อนุญาตให้ใช้ค่าลบ";
	}
}
