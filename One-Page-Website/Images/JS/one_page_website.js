
    // Function to open the modal and display the clicked image
    function openModal(imgElement) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("modalImg");
        modal.style.display = "flex"; // Display the modal
        modalImg.src = imgElement.src; // Set modal image to clicked image
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none"; // Hide the modal
    }

    // Close the modal if the user clicks outside the image
    window.onclick = function(event) {
        var modal = document.getElementById("myModal");
        if (event.target === modal) {
            closeModal(); // Close modal if clicked outside
        }
    }
