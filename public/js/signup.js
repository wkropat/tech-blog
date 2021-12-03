document.querySelector("form#signup").addEventListener("submit",(e)=>{
        e.preventDefault();
        const userObj={
            username:document.querySelector("#signup-username").value,
            password:document.querySelector("#signup-password").value,
            email:document.querySelector("#signup-email").value,
        }
        fetch("/api/users",{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                const userObj={
                    email:document.querySelector("#signup-email").value,
                    password:document.querySelector("#signup-password").value,
                }
                fetch("/api/users/login",{
                    method:"POST",
                    body:JSON.stringify(userObj),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(res=>{
                    if(res.ok){
                       location.href = "/profile"}})
            } else {
                alert("Unable to create user")
            }
        })
    })