class Number {
	constructor() {
		this.value = 42;
	}

	getValue() {
		return this.value;
	}

	setValue(value) {
		this.value = value;
	}
}

export default new Number();
