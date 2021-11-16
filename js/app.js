document.querySelector('#generate-names').addEventListener('submit', loadNames);




//Execute the function to query the API
function loadNames(e) {
    e.preventDefault();


    //Read the values from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //Build the URL
    let url = 'http://uinames.com/api/?';
    //Read the origin and append to the URL
    if(origin !== ''){
        url += `?region=${origin}&`;
    }

    console.log(url);

}
