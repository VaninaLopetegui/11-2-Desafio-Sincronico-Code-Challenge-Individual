const form = document.getElementById("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const datosUsuario = [];
    const name = document.getElementById("name").value;
    const lastName = document.getElementById ("lastName").value;
    const birthDay = document.getElementById ("birthDay").value;
    datosUsuario.push(name, lastName, birthDay)
    datosUsuario.push(name, lastName, birthDay)
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datosUsuario),
    })
    .then(res => {
        if(res.ok){
        return res.json();
    }})
    .then(data => {
        const name = document.getElementById("name").value= "";
        const lastName = document.getElementById ("lastName").value= "";
        const birthDay = document.getElementById ("birthDay").value= "";
        alert("Se envío los datos!");
        console.log(data)
    })    
    .catch(error => console.log(error))
})