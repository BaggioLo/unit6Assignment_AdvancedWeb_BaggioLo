const request = new XMLHttpRequest();
const url = 'https://api.github.com/users';

request.open('GET', url);

request.onload = function (){
    if(request.status >= 200 && request.status < 300){
    const posts = JSON.parse(request.responseText);
    console.log(posts);

    let output = '';
    for (let i in posts){
        output += '<div class="user">'+
        '<img src="'+posts[i].avatar_url+'" width="70" height="70">' + 
        '<ul>'+
        '<li>ID: '+posts[i].id+'</li>'+
        '<li>ID: '+posts[i].login+'</li>'+
        '</ul>'+
        '</div>';
    }

    document.getElementById('users').innerHTML = output;

    }else if(request.status === 404){
        alert('The url was not found');
    } 
    request.send();
}





// Adding function onto button

document.getElementById('button').addEventListener('click', request.onload)

