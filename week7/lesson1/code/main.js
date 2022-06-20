class calculator {

    calculator(total, x, operator) {
        this.setTotal(total);
        this.setX(x);
        this.setOperator(operator);
    }

    calculate() {

        console.log("total = " + this.total);
        console.log("x = " + this.x);
        console.log("operand = " + this.operator);

        switch(this.operator) {
            case "+":
                this.add();
                break;
            case "-":
                this.diff();
                break;
            case "*":
                this.multiply();
                break;
            case "/":
                this.divide();
                break;
            case "√":
                this.sqrt();
                break;
        }
    }

    add() {
        this.total = this.total + this.x;
    }

    diff() {
        this.total = this.total - this.x;
    }

    multiply() {
        this.total = this.total * this.x;
    }

    divide() {
        this.total = this.total / this.x;
    }

    sqrt() {
        this.total = Math.sqrt(this.total);
    }

    setTotal(total) {
        this.total = total;
    }

    setX(x) {
        this.x = x;
    } 

    setOperator(operator) {
        this.operator = operator;
    }
}

window.onload = function() {
    let items = document.getElementsByClassName('calculator__item');
    let field = document.getElementsByClassName('calculator__total')[0];
    let operator = document.getElementsByClassName('calculator__operator')[0];

    let calc = new calculator(0, 0, "+");

    calc.setTotal(0);
    calc.setX(0);
    calc.setOperator("+");
    field.innerHTML = "0";

    for(let item of items) {
        item.addEventListener('click', function() {
            /*
            
            0 + 12 * 5 + 
            
            */

            if(this.innerHTML == "+") {
                operator.innerHTML = "+";
                calc.calculate();
                calc.setOperator("+");
                field.textContent = "";
            } else if (this.innerHTML == "-") {
                operator.innerHTML = "-";
                calc.calculate();
                calc.setOperator("-");
                field.textContent = "";
            } else if (this.innerHTML == "*") {
                operator.innerHTML = "*";
                calc.calculate();
                calc.setOperator("*");
                field.textContent = "";
            } else if (this.innerHTML == "/") {
                operator.innerHTML = "/";
                calc.calculate();
                calc.setOperator("/");
                field.textContent = "";
            } else if (this.innerHTML == "=") {
                calc.calculate();
                operator.innerHTML = "=";
                field.textContent = calc.total;
            } else if (this.innerHTML == "√") {
                calc.calculate();
                calc.setOperator("sqrt");
                calc.calculate();
                field.textContent = calc.total;
            }

            if((this.innerHTML >= '0' && this.innerHTML <= '9') || (this.innerHTML === '.')) {
                if(field.innerHTML === "0") {
                    field.innerHTML = "";
                }
                field.textContent += this.innerHTML;
            }

            if(this.innerHTML === "AC") {
                calc.setTotal(0);
                calc.setX(0);
                calc.setOperator("+");
                field.innerHTML = "0";
            }

            calc.setX(+(field.innerHTML));
        });
    }
};