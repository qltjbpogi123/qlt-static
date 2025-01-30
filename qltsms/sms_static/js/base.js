document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        const tooltip = new bootstrap.Tooltip(tooltipTriggerEl); // Default initialization

        // When the checkbox is clicked (toggled), hide the tooltip
        const checkbox = tooltipTriggerEl.querySelector("input");
        if (checkbox) {
            checkbox.addEventListener("click", function () {
                tooltip.hide(); // Hide the tooltip when toggled
            });
        }

        // Optionally, hide the tooltip if the mouse leaves the checkbox area
        tooltipTriggerEl.addEventListener("mouseleave", function () {
            tooltip.hide();
        });
    });
});

function initializeTooltips() {
    // Hide all existing tooltips
    const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        if (tooltip) {
            tooltip.hide(); // Hide the tooltip if it exists
        }

        // Initialize new tooltip
        new bootstrap.Tooltip(tooltipTriggerEl);

        // Hide tooltip on focusout
        tooltipTriggerEl.addEventListener("focusout", function () {
            var tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
            if (tooltip) {
                tooltip.hide();
            }
        });
    });
}

function get_csrftoken(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
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
const csrftoken = get_csrftoken("csrftoken");

/**
 * Debounce function to delay the execution of a function.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The time to wait (in milliseconds).
 * @param {boolean} immediate - If true, trigger the function on the leading edge instead of the trailing.
 * @returns {Function} A debounced version of the provided function.
 */
function debounce(func, wait, immediate = false) {
    let timeout;

    return function (...args) {
        const context = this;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}
