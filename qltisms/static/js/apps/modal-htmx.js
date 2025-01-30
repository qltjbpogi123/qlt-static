document.addEventListener("DOMContentLoaded", function () {
    const modalHtmx = document.getElementById("modal-htmx");
    const modalHtmxContent = document.getElementById("modal-htmx-content");

    if (modalHtmx) {
        const modalHtmxInstance = new Modal(modalHtmx);

        document
            .querySelectorAll('[data-modal-target="modal-htmx"]')
            .forEach((button) => {
                button.addEventListener("click", function () {
                    modalHtmxInstance.show();
                });
            });

        document.body.addEventListener("click", function (e) {
            if (e.target.hasAttribute("data-modal-hide")) {
                const modalId = e.target.getAttribute("data-modal-hide");
                const modalInstance = new Modal(
                    document.getElementById(modalId)
                );
                modalInstance.hide();
                modalHtmxContent.innerHTML = "";
            }
        });

        document.body.addEventListener("htmx:afterSwap", function () {
            initializeModalHtmxShowHide();
        });

        function initializeModalHtmxShowHide() {
            document
                .querySelectorAll('[data-modal-target="modal-htmx"]')
                .forEach((button) => {
                    button.addEventListener("click", function () {
                        modalHtmxInstance.show();
                    });
                });

            document
                .querySelectorAll('[data-modal-hide="modal-htmx"]')
                .forEach((button) => {
                    button.addEventListener("click", function () {
                        modalHtmxInstance.hide();
                    });
                });
        }

        initializeModalHtmxShowHide();
    }
});
