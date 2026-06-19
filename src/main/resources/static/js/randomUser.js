

function randomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user = data.results[0];
        var fullName = user.name.title + " " + user.name.first + " " + user.name.last;
        document.getElementById("user-name").textContent = fullName;
        document.getElementById("user-gender").textContent = user.gender;
        document.getElementById("user-image").src = user.picture.large;
    })
    .catch(function(error){
        console.log("Error fetching random user:", error);
    })
    
}