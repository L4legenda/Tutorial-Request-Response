(function () {

    const filesElement = document.querySelector("#file");

    const files = filesElement.files;

    const formData = new FormData();
    formData.append('file', files[0]);
    axios.post("http://127.0.0.1:8000", formData);


    let reader = new FileReader();
    reader.readAsText(files[0]);

    reader.onload = function () {
        console.log(reader.result);
        axios.post("http://127.0.0.1:8000", {
            'file': reader.result
        });
    };

})()