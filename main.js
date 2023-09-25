// // / To do:

// //1. - commento il markup statico per ricrearlo dinamicamente in Javascript utilizzando un ciclo forEach e templete literal;
// // 2. prendo l'elemento in cui stampare i post (oggetti dell'array fornito);
// // 3. prendo il bottone;
// // 4. creo una funzione che cambia il colore e una che incrementa
// 5. creo una condizione se l'immagine non è presente;
// 6. inverto ordine data 

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsList = document.querySelector(".posts-list");



posts.forEach(post => {

    let date = post.created; 
        
    const dateParts = date.split("-");

    date = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    console.log(date)

    if (!post.author.image) {
        const authorInitials = justFirstLetters(post.author.name);
        postsList.innerHTML += `
        <div class="post" id="${post.id}">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${authorInitials}                   
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="${post.media}">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <button class="like-button  js-like-button" href="#" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </button>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            `
        
    } else {
        postsList.innerHTML += `
        <div class="post" id="${post.id}">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="${post.media}">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <button class="like-button  js-like-button" href="#" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </button>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            ` 
    }


//    buttons
    
        const btns = document.querySelectorAll(".like-button");
        const likesCount = document.querySelectorAll(".js-likes-counter");
        
        btns.forEach((btn, index) => {
            let currentLikes = parseInt(likesCount[index].innerHTML);
    
        
            btn.addEventListener("click", function () {
                btn.classList.add("red-color");
                currentLikes++; 
                likesCount[index].innerHTML = currentLikes;
            });
        });



     
        
  
});



// estrarre iniziali delle parole 

function justFirstLetters(string) {

    const words = string.split(' ');
    const firstLetters = words.map(parola => parola.charAt(0));
    return firstLetters;
}

