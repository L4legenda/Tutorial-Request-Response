(function () {
    axios.get("http://127.0.0.1:8000", {
        firstName: 'Fred',
        lastName: 'Fred',
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
            console.log(error);
    });

    async function request() {
        const response = await axios.get("http://127.0.0.1:8000", {
            firstName: 'Fred',
            lastName: 'Fred',
        });
        console.log(response.data);
    }



    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });

    instance.get("url").then(function (response) {
        console.log(response);
    })

    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


})()