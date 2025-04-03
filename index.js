document.addEventListener("DOMContentLoaded", () => {
    const formButton = document.querySelector("#btn_form");
    
    if (formButton) {
        formButton.addEventListener("click", handleFormSubmit);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();

    const fields = [
        { input: "#name", message: "O campo Nome deve ser preenchido." },
        { input: "#email", message: "O campo Email deve ser preenchido." },
        { input: "#menssage", message: "O campo Mensagem deve ser preenchido." }
    ];

    let isValid = true;

    fields.forEach(({ input, message }) => {
        const fieldIsValid = validateField(document.querySelector(input), message);
        if (!fieldIsValid) isValid = false;
    });

    if (isValid) {
        showSuccessMessage("Obrigado! Em breve retornarei sua mensagem.");
    }
}

function validateField(input, message) {
    if (!input) return false;

    let errorSpan = input.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error-message")) {
        errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        input.parentNode.insertBefore(errorSpan, input.nextSibling);
    }

    if (input.value.trim() === "") {
        errorSpan.textContent = message;
        input.classList.add("input-error");
        return false;
    } else {
        errorSpan.textContent = "";
        input.classList.remove("input-error");
        return true;
    }
}

function showSuccessMessage(message) {
    let successMessage = document.querySelector(".success-message");

    if (!successMessage) {
        successMessage = document.createElement("p");
        successMessage.classList.add("success-message");
        const form = document.querySelector("#btn_form").closest("form");
        form.appendChild(successMessage);
    }

    successMessage.textContent = message;
}



document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function() {
        let card = this.closest('.card');
        let dropdownContent = card.querySelector(".dropdown-content");

        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "block";
            card.classList.add("expanded");
        } else {
            dropdownContent.style.display = "none";
            card.classList.remove("expanded");
        }
    });
});