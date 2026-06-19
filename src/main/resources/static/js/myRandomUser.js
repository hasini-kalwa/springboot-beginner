function myrandomUser() {
    fetch('/api/users/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('user-image').src = data.image;
            document.getElementById('user-name').textContent = data.name;
            document.getElementById('user-gender').textContent = data.gender;
        })
        .catch(error => {
            console.error('Error fetching random user:', error);
        }); 
}