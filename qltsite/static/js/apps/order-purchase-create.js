$(document).ready(function () {});

$("#id_currency").on("change", function () {
    changeCurrency();
});

$("#id_peso").on("input", function () {
    let currency = $("#id_currency").val();
    if (currency != "0" && currency != "") {
        changePaidPeso();
        changeBankPeso();
        changeItemsPeso();
    } else {
        $(".php-value-js").text("0.00");
    }
});

$("#id_amount, #id_bank").on("input", function () {
    let currency = $("#id_currency").val();
    if (currency != "0" && currency != "") {
        changePaidPeso();
        changeBankPeso();
    } else {
        $("#paid-peso").text("0.00");
        $("#paid-bank").text("0.00");
    }
});

// $(".quantity-item-js, .unit-item-js").on("input", function () {
//     let row = $(this).attr("data-row");
//     console.log("row:", row);
//     changeItemValue(row);
// });

function changeCurrency() {
    let curr = $("#id_currency").val();
    if (curr == "0") {
        $("#id_peso_div").attr("hidden", "");
        $("#id_peso").removeAttr("required");
        $(".php-value-div").attr("hidden", "");
        $(".php-value-js").text("0.00");
    } else {
        $("#id_peso_div").removeAttr("hidden");
        $("#id_peso").attr("required", "");
        $(".php-value-div").removeAttr("hidden");
        changePaidPeso();
        changeBankPeso();
        changeItemsPeso();
    }
}

function changePaidPeso() {
    // if ($("#id_currency").val() == "0") {
    //     $("#paid-peso").text("0.00");
    // } else {
    let peso = $("#id_peso").val() ?? 0,
        paid = $("#id_amount").val() ?? 0,
        text = (peso * paid).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    $("#paid-peso").text(text);
    // }
}

function changeBankPeso() {
    // if ($("#id_currency").val() == "0") {
    //     $("#paid-bank").text("0.00");
    // } else {
    let peso = $("#id_peso").val() ?? 0,
        bank = $("#id_bank").val() ?? 0,
        text = (peso * bank).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    $("#bank-peso").text(text);
    // }
}

function changeItemValue(n) {
    let quantity = $("#quantity-" + n).val() ?? 0,
        unit = $("#unit-" + n).val() ?? 0,
        total = quantity * unit,
        currency = $("#id_currency").val(),
        carton = $("#carton-" + n).val() ?? 0;

    $("#total-item-" + n).attr("data-value", total);
    if (total > 0) {
        $("#total-item-" + n).val(
            total.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        );
    } else {
        $("#total-item-" + n).val("");
    }
    totalItemValue();

    if (currency != "0" && currency != "") {
        let peso = $("#id_peso").val() ?? 0;
        changeItemPeso(n, peso);
        totalItemPeso(peso);
    }

    if (carton > 0) {
        changeCarton(n);
    }
}

function totalItemValue() {
    let overall = 0;
    $(".total-item-js").each(function () {
        overall += parseFloat($(this).attr("data-value") ?? 0);
    });
    $("#overall-price").attr("data-value", overall);
    if (overall > 0) {
        $("#overall-price").val(
            overall.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        );
    } else {
        $("#overall-price").val("");
    }
}

function changeItemsPeso() {
    // console.log("changeItemsPeso()");
    // if ($("#id_currency").val() == "0") {
    //     $(".php-value-js").text("0.00");
    // } else {
    let peso = $("#id_peso").val() ?? 0,
        item;
    $(".id-item-js").each(function () {
        item = $(this).val();
        changeItemPeso(item, peso);
    });
    totalItemPeso(peso);
    // }
}

function changeItemPeso(n, peso) {
    let quantity = $("#quantity-" + n).val() ?? 0,
        unit = $("#unit-" + n).val() ?? 0,
        total = peso * unit * quantity;
    $("#unit-peso-" + n).text(
        (peso * unit).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    );
    $("#total-peso-" + n).text(
        total.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    );
    // totalItemPeso(peso);
}

function totalItemPeso(peso) {
    let overall = $("#overall-price").attr("data-value") ?? 0;
    $("#overall-peso").text(
        (peso * overall).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    );
}

function changeCarton(n) {
    let ctn = $("#carton-" + n).val(),
        quantity = $("#quantity-" + n).val(),
        unit = 0;
    if (!isNaN(ctn) && !isNaN(quantity)) {
        if (ctn > 0 && quantity > 0) {
            unit = quantity / ctn;
        }
    }
    $("#carton-unit-" + n).text(
        unit.toLocaleString("en-US", { maximumFractionDigits: 2 })
    );
    totalCartons();
}

function totalCartons() {
    let carton,
        total = 0;
    $(".carton-item-js").each(function () {
        carton = parseFloat($(this).val());
        if (!isNaN(carton) && carton > 0) total += carton;
    });
    $("#overall-carton").val(
        total.toLocaleString("en-US", { maximumFractionDigits: 2 })
    );
}

function changeCBM() {
    let cbm,
        total = 0;
    $(".cbm-item-js").each(function () {
        cbm = parseFloat($(this).val());
        if (!isNaN(cbm) && cbm > 0) total += cbm;
    });
    $("#overall-cbm").val(total.toLocaleString());
}
