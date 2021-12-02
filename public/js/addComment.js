document.querySelector("#add-comment").addEventListener("submit",evt=>{
    evt.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const userObj={
        name:document.querySelector("#name").value,
        description:document.querySelector("#description").value,
        blogid: id
    }
    fetch("/api/comments/",{
        method:"POST", 
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/profile"
            alert("all good")
        } else {
            alert("An Error Occurred")
        }
    })
})