// /* Set the width of the side navigation to 250px */
// function openNav() {
//   document.getElementById("slideOutNav").style.width = "506px";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   document.getElementById("slideOutNav").style.width = "0";
// }


 // Add pop up modal when user clicks on search icon

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".closeButton");

function toggleModal() {
    modal.classList.toggle("showModal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick); 

