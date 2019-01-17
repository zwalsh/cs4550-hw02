(function () {
	"use strict";

	function Calculator(textBox) {
		this.textBox = textBox;
		this.value = "";
		this.leftHandValue = 0;
		this.operation = "";
		
		this.plusEquals = function() {
			switch (this.operation) {
				case "+":
					console.log('adding');
					this.leftHandValue = Number(this.value) + this.leftHandValue;
					break;
				case "-":
					console.log('subtracting');
					this.leftHandValue = this.leftHandValue - Number(this.value);
					break;
				case "*":
					console.log('multiplying');
					this.leftHandValue = this.leftHandValue * Number(this.value);
					break;
				case "/":
					console.log('dividing');
					this.leftHandValue = this.leftHandValue / Number(this.value);
					break;
			}
			this.value = "";
			this.operation = "+";
			this.updateTextBox();
		}

		this.updateTextBox = function() {
			if (this.value == "") {
				this.textBox.value = this.leftHandValue;
			} else {
				this.textBox.value = this.value;
			}
		}


		this.numberPressed = function(num) {
			this.value += num;
			this.updateTextBox();
		}
		
		this.clear = function() {
			this.value = "0";
			this.updateTextBox();
		}
	}

	var calculator;

	function init() {
		var textBox = document.getElementById("calc-screen");
		calculator = new Calculator(textBox);
		let buttons = document.getElementsByClassName("number");
		for (let i = 0; i < buttons.length; i++) {
			let btn = buttons[i];
			btn.addEventListener("click", function (evt) {
				calculator.numberPressed(evt.target.innerText);
			});
		}
		var plus = document.getElementById("plus");
		plus.addEventListener("click", function () {
			calculator.plusEquals(); 
		});
	}

	
	window.addEventListener("load", init);
})();
