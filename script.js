fetch('texas.jpg').then(response => { // texas.jpg comes from the root directory. 
    return response.blob();
}).then(blob => {
    document.getElementById('texxas').src = URL.createObjectURL(blob);
}).catch(error => {
    console.log('error!!!!');
    console.error(error);
});
