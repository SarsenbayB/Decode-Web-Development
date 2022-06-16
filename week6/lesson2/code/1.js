window.onload = function() {
    login();
}

let users = [
    {
        'username': 'assyl',
        'password': '12345a'
    },
    {
        'username': 'test1',
        'password': 'aaa123' 
    }
];

let username, password;


function hideSignIn() {
    let signItems = document.getElementsByClassName('header__sign-item');

    for(let x of signItems) {
        x.style.display = 'none';
    }    
}

function validation(username, password) {
    console.log(username + " " + password);
    for(let user of users) {
        
        console.log(user.username + " " + user.password);
        if(user.username == username && user.password == password) {
            hideSignIn();
            return true;
        }
    }
 
    return false;
}

function login() {
    let signIn = document.querySelector('.header__sign-item_in');
    let modalWindow = document.querySelector('.header__sign-in-modal');
    let username = document.querySelector('.user-input input');
    let password = document.querySelector('.password-input input');

    let save = document.querySelector('.sign-in__save');
    let cancel = document.querySelector('.sign-in__cancel');

    let signInBlock = document.querySelector('.sign-in__inner');

    signIn.addEventListener('click', function() {
        modalWindow.style.display = 'block';
    });

    save.addEventListener('click', function() {
        if(validation(username.value, password.value)) {
            let signBlock = document.querySelector('.header__sign-list');
            let li = document.createElement('li');
            li.className = 'header__item';

            let a = document.createElement('a');
            a.textContent = username.value;

            li.append(a);
            signBlock.append(li);

            modalWindow.style.display = 'none';
        } else {
            let errorMessage = document.createElement('p');
            errorMessage.textContent = 'Your username or password is not valid. Please enter again!';

            username.value = "";
            password.value = "";

            signInBlock.append(errorMessage);
        }
    });

    cancel.addEventListener('click', function() {
        modalWindow.style.display = 'none';
    });
}