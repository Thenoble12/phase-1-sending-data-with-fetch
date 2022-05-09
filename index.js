// Add your code here
const destinationURL = "http://localhost:3000/users"

function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail,
    }

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData), 
};

return fetch(destinationURL, configurationObject)
    .then(response => response.json())
    .then(object => {
        let p = document.createElement('p');
        p.innerHTML = `ID: ${object.id}, NAME: ${object.name}, EMAIL: ${object.email}`;
        document.body.appendChild(p);        
    })
    .catch(error => {
        alert("Error!");
        let p = document.createElement('p');
        p.innerHTML = `ERROR: ${error.message}`
        document.body.appendChild(p);
    });

}