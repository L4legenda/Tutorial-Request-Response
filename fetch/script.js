(function(){

    const response = fetch("http://127.0.0.1:8000", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            'awesome': 'name',
        })
    })


    // Example #1

    response.then(response => response.json())
            .then(data => alert(data))
            .catch((error) => {
                console.error('Error:', error)
              });


    
    async function request(){
        const response = await fetch("http://127.0.0.1:8000", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                'awesome': 'name',
            })
        });

        const data = await response.json();

        const response2 = await fetch("http://127.0.0.1:8000", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                'awesome': 'name',
            })
        });

        const data2 = await response2.json();
    }

})()