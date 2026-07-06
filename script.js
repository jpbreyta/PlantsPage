// Controls the visibility and animation of the toast notification
const showToast = (message) => {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");

    if (toast && toastMessage) {
        toastMessage.innerText = message;
        
        // Displays the toast
        toast.classList.remove("opacity-0", "translate-y-4");

        // Hides the toast after 3 seconds
        setTimeout(() => {
            toast.classList.add("opacity-0", "translate-y-4");
        }, 3000);
    }
};