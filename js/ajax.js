let form = document.getElementById('my-form');
let data = new FormData(form);
let button = document.getElementById('my-form-button')
let successMessage = document.getElementsByClassName('success');

function ajax(method, action, data, success, error) {

    // alert("hello");
    let xhr = new XMLHttpRequest();
    xhr.open(method, action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

button.onclick = function (){
    // alert("hello");
    ajax(
        "post",
        "https://formspree.io/emma@emma-kearney.com",
        new FormData(form),
        success(),
        validate()
    )
}

// button.addEventListener('click', event => {
//     ajax(form.method, form.action, data, success, error);
//     // show the message!!!
//     form.reset()
//     button.style.display = 'none';
//     successMessage.style.display = 'block';
//     return true;
// });




