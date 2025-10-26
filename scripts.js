// Function to show the Projects section when clicked
function showProjects() {
    // Hide other sections and show the iframe with index1.html content
    document.getElementById("projects-section").classList.add("hidden");
    document.getElementById("project-iframe").classList.remove("hidden");
}

// Modal functionality for images
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
