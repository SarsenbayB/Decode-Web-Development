"use strict"

window.onload = function(){
    const form = document.getElementById('form');

    const formImg = document.getElementById('form_img');
    const formPreview = document.querySelector('.file_preview');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefalut();

        // let error = formValidate(from);

        let formData = new FormData(form)
        formData.append('image', fromImg.files[0]);

        if(error) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if(response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
            } else {
                alert('Ошибка!');
            }
        } else {
            alert('Заполните обязательные поля!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let idx = 0; idx < formReq.length; ++idx) {
            const input = formReq[idx];
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if(input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
    }

    // Image Preview
    formImg.addEventListener('change', ()=>{
        uploadFile(formImg.files[0]);
    });

    function uploadFile(file) {
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Только изображения!');
            formImg.value = '';
            return;
        }

        if(file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть меньше чем 2 Мб.');
            return;
        }

        let reader = new FileReader();
        reader.onload = function(e) {
            formPreview.innerHTML = `<img src="${e.target.result}"></img>`;
        }
        reader.onerror = function(e) {
            alert('Ошибка!');
        }
        reader.readAsDataURL(file);
    }
};