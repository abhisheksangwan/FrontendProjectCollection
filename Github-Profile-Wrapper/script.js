let userNameInput = document.getElementById('userName');
let showDetailsButton = document.getElementById('showDetails');
let profileInfoDiv = document.getElementById('profileInfo');
let repoInfoDiv = document.getElementById('repoInfo');
let squareDiv = document.querySelectorAll('.square');
let grid = document.getElementsByClassName('grid');

function showRepoInfo(userName){
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then((res) => res.json())
        .then(data =>{
            // console.log(data);
            repoInfoDiv.innerHTML = `<div class="totalRepos">Total Repos: ${data.length}</div>`
             for(let i=0;i<data.length;i++){

                repoInfoDiv.innerHTML +=  `<div class="grid ">
                <div class="repoName"><strong>Repo Name: </strong> ${data[i].name}</div>
                <div class="description"><strong>Description:</strong> ${data[i].description} </div>
                <div class="language"><strong>Language: </strong> ${data[i].language} </div>
                <button class = "repoButton"><a href=${data[i].html_url} target ="_blank" >Check Project</a></button>   
            </div>
            </br>
            </br>
                </div>`
            }
        })
}

function showDetails(){
    let userName = userNameInput.value;
    //request data from server: fetch api
    fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then((data)=> {
        // console.log(data);
        profileInfoDiv.innerHTML = ` <div class="card">
            <div class="cardImage"><img src=${data.avatar_url} width =200px alt=${data.name}></div>
            <div class="cardBody">
            <div class="cardTitle"><strong>Name: </strong> ${data.name}</div>
            <div class="cardSubheading"><strong>UserName: </strong> <i>${data.login}</i></div>
            <div class="cardText">
                <p><strong>Bio: </strong> ${data.bio}</p>
                <p><strong>Followers: </strong>${data.followers} <strong>Following: </strong> ${data.following}</p>
                <button><a href=${data.html_url} >Check My Profile</a></button>
            </div>
        </div>
    </div>`

    showRepoInfo(userName)
    })

    //Promise-> accepted,rejected ,pending
    // let p = new Promise((resolve, reject)=>{
    //     let x = 1+44;
    //     if(x==2)
    //      resolve('Success');
    //     reject('Failed');

    // })
    // p.then((data) => console.log(data)).catch((err) => console.log(err));

    
}
showDetailsButton.addEventListener('click',showDetails);