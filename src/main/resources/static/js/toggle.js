var users = [
    {
        name: "John Doe",
        gender: "male",
        image: "/images/john.png"
    },
    {
        name: "Jane Doe",
        gender: "female",
        image: "/images/jane.png"
    }
];

var id = 0;

function toggleUser() {
    id = (id + 1) % 2;

    var user = users[id];

    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-gender").textContent = user.gender;
    document.getElementById("user-image").src = user.image;
}