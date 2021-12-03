document.querySelector("form#login").addEventListener("submit",(e)=>{
    e.preventDefault();
    const fetchObj = {
        email: document.querySelector("#login-email").value,
        password: document.querySelector("#login-password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(fetchObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            return alert("Logged in!")
        } else {
            res.json().then(data=>{
                location.href = `/profile/${data.id}`
            })
        }
    })
})

