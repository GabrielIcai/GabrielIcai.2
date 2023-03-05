import countapi from 'countapi-js';

countapi.visits().then((result) => {
    console.log(result.value);});

    countapi.visits().then((result) => {
        document.getElementById("visit-counter").innerHTML = result.value;
      });