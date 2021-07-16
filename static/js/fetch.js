// fetch is API, no method, it will by default do GET request
// convert the response into json, then pass in finished product of json data as argument into another method
// asynchronous
// fetch('./static/data.json')
//     .then(res => res.json())
//     .then(data => console.log(data))

// old way, build the request object, status code, response text, once set then get data

// instantiate it
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    // to pull the data; || means OR, && means AND
    if (xhr.readyState === 4 && xhr.status === 200) {
        // data is being put into xhr's object's responseText
        // convert the string into javascript object, you can't use string as JS object, so JS has to take that string and covert it 
        console.log(JSON.parse(this.responseText));
        // console.log(typeof(this.responseText))
    }
}

// where you want to open that data,
xhr.open('GET', './static/data.json')
// execute the function when the connection is successful
xhr.send()

// == only checks for value equality; strict
// === checks for value equality and data equality; less strict

