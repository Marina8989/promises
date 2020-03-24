/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const mar = obj => {
    const cards = document.querySelector(".cards");
    const card = document.createElement("div");
    const newImage = document.createElement("img");
    const cardInfo = document.createElement("div");
    const h3 = document.createElement("h3");
    const pUserName = document.createElement("p");
    const pLocation = document.createElement("p");
    const pProfile = document.createElement("p");
    const a = document.createElement("a");
    const pFollowers = document.createElement("p");
    const pFollowing = document.createElement("p");
    const pBio = document.createElement("p");

    card.classList.add("card");
    newImage.src =
        "https://previews.123rf.com/images/captainvector/captainvector1602/captainvector160218152/52863657-smiley-face-showing-thumbs-up.jpg";
    cardInfo.classList.add(card - info);
    h3.classList.add("name");
    pUserName.classList.add("username");

    pLocation.textContent = "Location: ";
    pProfile.textContent = "Profile: ";
    pFollowers.textContent = "Followers: ";
    pFollowing.textContent = "Following: ";
    pBio.textContent = "Bio: ";

    pProfile.appendChild(a);
    cardInfo.appendChild(h3);
    cardInfo.appendChild(pUserName);
    cardInfo.appendChild(pLocation);
    cardInfo.appendChild(pProfile);
    cardInfo.appendChild(pFollowers);
    cardInfo.appendChild(pFollowing);
    cardInfo.appendChild(pBio);

    card.appendChild(newImage);
    card.appendChild(cardInfo);

    document.body.appendChild(card);
};

axios.get("https://api.github.com/users/Marina8989");