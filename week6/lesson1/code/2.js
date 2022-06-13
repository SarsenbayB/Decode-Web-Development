window.onload = function() {
    let button = document.getElementsByClassName('todo__button')[0];
    let input = document.getElementsByClassName('todo__input')[0];
    let ul = document.getElementsByClassName('todo__ul')[0];

    // let ulArray = Array.prototype.slice.call(ul.children);

    button.addEventListener('click', addToDo);

    function addToDo() {

        function exception(error) {
            alert(error);
            input.value = "";
        }

        if(input.value.length < 10) {
            exception("You are not enter the task!");
            return;
        }

        if(input.value[0] < 'A' || input.value[0] > 'Z') {
            exception("Your task should started with uppercase!");
            return;
        }
 
        let li = document.createElement('li');
        li.className = 'todo__item';

        li.textContent = input.value;

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        li.append(checkbox);

        li.addEventListener('click', function(){

            if(this.children[0].checked) {
                this.style = "text-decoration: line-through;"
            } else {
                this.style = "text-decoration: none;"
            }
            // console.log(this.children[0].checked);
        });

        ul.append(li);

        input.value = ""

        // ulArray = Array.prototype.slice.call(ul.children);
    }
}