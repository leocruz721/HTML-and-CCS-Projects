function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}



// Function to open the modal and display the clicked image
function openModal(imgElement) {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the modal image element
    var modalImg = document.getElementById("modalImg");

    // Display the modal
    modal.style.display = "flex";

    // Set the source of the modal image to the clicked thumbnail's image source
    modalImg.src = imgElement.src;
}

// Function to close the modal when the close button (x) is clicked
function closeModal() {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Hide the modal
    modal.style.display = "none";
}

// Optional: Close the modal if the user clicks anywhere outside the modal image
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


