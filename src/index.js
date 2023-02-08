const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const detailImage = document.querySelector("#ramen-detail img")
const detailName = document.querySelector("#ramen-detail h2")
const detailRestaurant = document.querySelector("#ramen-detail h3")
ramenDetail.appendChild(detailImage, detailName, detailRestaurant)
const detailRating = document.querySelector("#rating-display")
const detailComment = document.querySelector("#comment-display")
const form = document.getElementById("new-ramen")
const formName = document.getElementById("new-name")
const formRestaurant = document.getElementById("new-restaurant")
const formImage = document.getElementById("new-image")
const formRating = document.getElementById("new-rating")
const formComment = document.getElementById("new-comment")
const formTwo = document.getElementById("edit-ramen")
const editRating = document.querySelector("#edit-ramen #new-rating")
const editComment = document.querySelector("#edit-ramen #new-comment")

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(data => {
   data.forEach(ramen => {
    addRamen(ramen)
   })
   updatedFeaturedRamen(data[0])
})
/*Adding Ramen to top Div*/
function addRamen(ramen) {
    const menuItem = document.createElement("img")
    menuItem.src = ramen.image
    ramenMenu.append(menuItem)
    menuItem.addEventListener("click", () => {
        detailImage.src = ramen.image
        detailName.textContent = ramen.name
        detailRestaurant.textContent = ramen.restaurant
        detailRating.innerHTML = ramen.rating
        detailComment.textContent = ramen.comment
    })
}
//New Ramen Form Event Listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const addedRamen = {};
    addedRamen.name = formName.value
    addedRamen.restaurant = formRestaurant.value
    addedRamen.image = formImage.value
    addedRamen.rating = formRating.value
    addedRamen.comment = formComment.value  
    addRamen(addedRamen);
})

//Loading the first Ramen on page load
function updatedFeaturedRamen(ramen) {
    detailImage.src = ramen.image
        detailName.textContent = ramen.name
        detailRestaurant.textContent = ramen.restaurant
        detailRating.innerHTML = ramen.rating
        detailComment.textContent = ramen.comment
}

//Updating Rating and Comment
formTwo.addEventListener("submit", (e) => {
    e.preventDefault();
    detailRating.innerHTML = editRating.value
    detailComment.textContent = editComment.value
})