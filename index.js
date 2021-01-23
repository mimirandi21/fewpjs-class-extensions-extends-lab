class Polygon {
	constructor(arr) {
		this.arr = arr;
	}

	get countSides() {
		return this.arr.length;
	}

	get perimeter() {
		return this.arr.reduce((a, c) => a + c, 0);
	}
}

class Triangle extends Polygon {
	get isValid() {
		return this.arr[0] + this.arr[1] > this.arr[2] === true &&
			this.arr[0] + this.arr[2] > this.arr[1] === true &&
			this.arr[1] + this.arr[2] > this.arr[0] === true
			? true
			: false;
	}
}

class Square extends Polygon {
	get isValid() {
		return this.perimeter / 4 === this.arr[0];
	}

	get area() {
		return (this.perimeter / 4) * (this.perimeter / 4);
	}
}
