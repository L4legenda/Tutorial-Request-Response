(function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", 'http://127.0.0.1:8000');

    xhr.setRequestHeader('Authorization', 'Token 123');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

    xhr.onload = function () {
        console.log(xhr.response);
    }

    xhr.onerror = function () {
        console.log("error");
    }

    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            alert(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
            alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
        }
    };

    xhr.send(JSON.stringify({
        'awesome': 'name',
    }))



    // Example FormData

    const fileElement = document.querySelector('#file')

    const formData = new FormData();
    formData.append("string", "qwe")
    formData.append("number", "1")
    formData.append("file", fileElement.files[0])

    xhr.send(formData)

})()