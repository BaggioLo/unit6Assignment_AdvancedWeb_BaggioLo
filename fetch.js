// const url = 'https://api.github.com/users';



const fetchLoad = () => {
    fetch('https://api.github.com/users')
    .then(res => {
        return res.json()
    })
    .then((data) => {
        let output = '';
        for (let i in data){
        output += '<div class="user">'+
        '<img src="'+data[i].avatar_url+'" width="70" height="70">' + 
        '<ul>'+
        '<li>ID: '+data[i].id+'</li>'+
        '<li>ID: '+data[i].login+'</li>'+
        '</ul>'+
        '</div>';
    }

    document.getElementById('users').innerHTML = output;
    })
}



// Adding function onto button

document.getElementById('button').addEventListener('click', fetchLoad)








