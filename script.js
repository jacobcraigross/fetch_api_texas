fetch('texas.jpg').then(response => {
    return response.blob();
}).then(blob => {
    document.getElementById('texxas').src = URL.createObjectURL(blob);
}).catch(error => {
    console.log('error!!!!');
    console.error(error);
});
