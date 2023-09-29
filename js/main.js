const form = document.getElementById("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const datosUsuario = [];
    const name = document.getElementById("name").value;
    const lastName = document.getElementById ("lastName").value;
    const birthDay = document.getElementById ("birthDay").value;
    datosUsuario.push(name, lastName, birthDay)
    fetch("https://jsonplaceholder.typicode.com/users.json", {
        method: "POST",
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            nacimiento: birthDay
        })
    })
    .then(res => res.json())
    .then(data => {
        const name = document.getElementById("name").value= "";
        const lastName = document.getElementById ("lastName").value= "";
        const birthDay = document.getElementById ("birthDay").value= "";
        alert("Se envío los datos!");
    })    
    .catch(error => console.log(error))
})