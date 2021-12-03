document.querySelector("form#signup").addEventListener("submit",(e)=>{

    e.preventDefault();
    console.log("Hit the event listener. Signup")
    const fetchObj = {
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value,
        username: document.querySelector("#signup-username").value,
    }
    fetch("/api/users/signup",{
        method:"POST",
        body:JSON.stringify(fetchObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            return alert("Sign Up Successful")
        } else {
            res.json().then(userData=>{
                // location.href = `/profile/${data.id}`
                // const hbsUser = userData.get({plain:true});
                res.render("profile",userData)
            })
        }
    })
})
