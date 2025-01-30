function toggleDiv(n) {
    $("#div-" + n).slideToggle("fast", "linear");
}

function copyContent(n, x = "") {
    // let elem = this;
    let copy = document.createElement("textarea");
    switch (x) {
        case "dash":
            let dash = n.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            dash = dash.replace(/[^a-zA-Z0-9]/g, "-");
            dash = dash.replace(/-+/g, "-");
            copy.value = dash.toUpperCase();
            break;
        case "mac":
            let mac_arr = n.match(/.{1,2}/g),
                i = 0,
                mac = "";
            while (i < mac_arr.length) {
                if (mac != "") {
                    mac += ":";
                }
                console.log(mac);
                mac += mac_arr[i];
                i++;
            }
            copy.value = mac.toUpperCase();
            break;
        case "uppercase":
            copy.value = n.toUpperCase();
            break;
        case "lowercase":
            copy.value = n.toLowerCase();
            break;
        default:
            copy.value = n;
    }
    document.body.appendChild(copy);
    copy.select();
    copy.focus();
    document.execCommand("copy");
    document.body.removeChild(copy);

    // /* For HTTPS */
    // let div = document.querySelector(n);
    // div.select();
    // /* For mobile devices */
    // div.setSelectionRange(0, 99999);
    // /* Copy the text inside the text field */
    // copy = div.value;
    // /* For HTTPS */
    // navigator.clipboard.writeText(n);
    // copy.execCommand("copy");
    // copy.focus();

    let bttn = event.currentTarget;
    if (bttn.hasAttribute("data-bs-toggle")) {
        bttn.title = "Copied!";
        let ttip = new bootstrap.Tooltip(bttn),
            prev_ttl = "",
            prev_ttip = document.getElementById(
                bttn.getAttribute("aria-describedby")
            );

        if (bttn.hasAttribute("data-prev-title")) {
            prev_ttl = bttn.getAttribute("data-prev-title");
        } else {
            prev_ttl = prev_ttip.children[1].innerHTML;
            bttn.setAttribute("data-prev-title", prev_ttl);
        }

        prev_ttip.remove();
        ttip.show();

        bttn.addEventListener("hidden.bs.tooltip", function () {
            bttn.title = prev_ttl;
            new bootstrap.Tooltip(bttn);
            let excess = document.querySelectorAll(".bs-tooltip-auto");
            excess.forEach((exc) => {
                exc.remove();
            });
        });
    }
}
