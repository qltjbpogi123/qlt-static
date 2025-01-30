// Custom SMS script start here
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-send-sms").onsubmit = function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(this);
        const modalFooter = document.getElementById("modal-footer-sms"); // Make sure this is the right element

        // Show loading indicator
        // $('#modal-custom-sms').modal('hide');

        // Show loading indicator
        const loadingAlert = Swal.fire({
            title: "Proccessing",
            html: "<p>SMS being processed!<br>Please do not close or refresh the page.</p>",
            icon: "info",
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        fetch(this.action, {
            method: "POST",
            body: formData,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRFToken": getCookie("csrftoken"), // Include CSRF token
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // modalFooter.style.display = 'block'; // Show the button again
                //  $('#modal-custom-sms').modal('hide'); // Close the modal

                if (data.type === "success") {
                    Swal.fire({
                        title: "Success!",
                        text: "SMS has been sent successfully!",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        icon: data.type,
                        title: data.title,
                        text: data.message,
                    });
                }
                loadingAlert.close();
            })
            .catch((error) => {
                //  modalFooter.style.display = 'block'; // Show the button again
                console.error("Error:", error);

                // Custom error handling based on the message
                if (
                    error.message.includes("Failed to acquire, LTE not active")
                ) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "An unexpected error occurred",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "SMS is busy. Please try again.",
                    });
                }
                loadingAlert.close();
            });
    };
});

function sms_custom_count() {
    let message_length = $("#id_custom_message").val().length;
    if (message_length > 160) {
        $("#sms-custom-count").html(
            message_length +
                " / 157  &nbsp;( " +
                Math.ceil(message_length / 157) +
                " )"
        );
    } else {
        $("#sms-custom-count").text(message_length + " / 160");
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}
// Custom SMS script end here
