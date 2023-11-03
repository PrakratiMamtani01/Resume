// Function to handle modal
function handleModal(openBtn, modal, closeBtn) {
    openBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
}

// Handle modals
handleModal(
    document.getElementById("CoursesBtn"),
    document.getElementById("CoursesModal"),
    document.getElementById("CloseCourses")
);

handleModal(
    document.getElementById("SkillsBtn"),
    document.getElementById("SkillsModal"),
    document.getElementById("CloseSkills")
);

handleModal(
    document.getElementById("ContactBtn"),
    document.getElementById("ContactModal"),
    document.getElementById("CloseContact")
);


function setupFlashcardModal(openBtnId, modalId, flashcards_class, nextBtnId, closeBtnId) {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    const flashcards = modal.querySelectorAll(flashcards_class);
    const closeBtn = document.getElementById(closeBtnId);

    let currentFlashcardIndex = 0;

    function showFlashcard(index) {
        flashcards.forEach((flashcard, i) => {
            flashcard.style.display = i === index ? "block" : "none";
        });
    }

    openBtn.addEventListener("click", function () {
        modal.style.display = "block";
        currentFlashcardIndex = 0;
        showFlashcard(currentFlashcardIndex);
    });

    const nextBtn = document.getElementById(nextBtnId);

    nextBtn.addEventListener("click", function () {
        console.log("Here")
        // Hide the current flashcard
        flashcards[currentFlashcardIndex].style.display = "none";

        // Move to the next flashcard
        currentFlashcardIndex++;

        // If we reach the end, loop back to the first flashcard
        if (currentFlashcardIndex >= flashcards.length) {
            currentFlashcardIndex = 0;
        }

        // Show the next flashcard
        flashcards[currentFlashcardIndex].style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        flashcards.forEach(flashcard => (flashcard.style.display = "none"));
    });
}


// Set up the Work Flashcards
setupFlashcardModal("WorkBtn", "flashcardsWorkModal", ".work", "nextWorkFlashcard", "closeWorkFlashcards");

// Set up the Leadership Flashcards
setupFlashcardModal("LeadBtn", "flashcardsLeadModal", ".leadership", "nextLeadFlashcard", "closeLeadFlashcards");



// Changing greeting
const greeting = Array('Bonjour!!', 'Hola!!', 'Ciao!!', 'Welcome!!', 'Marhaba!!', "Hello!!");
const greet = document.getElementById("greet");
greet.innerHTML = "Hello!!";
idx = 0;


setInterval(function() {
    greet.innerHTML = greeting[idx];
    idx += 1;
    idx = idx % greeting.length;
}, 1000);
