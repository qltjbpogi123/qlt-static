function checkMonthlyAll() {
    if ($("#monthly_all").is(":checked")) {
        let mx = $(".monthly_bill").length,
            c,
            v;
        $(".monthly_bill").each(function () {
            $(this).prop("checked", true);
            c = $(this).val();
            v = $("#monthly_amount_" + c).val();
            if (c == mx) {
                $("#monthly_pay_" + c)
                    .val(v)
                    .attr("required", "")
                    .removeAttr("readonly")
                    .attr("min", 1)
                    .removeClass("bg-gray-200")
                    .addClass("fw-bold");
            } else {
                $("#monthly_pay_" + c)
                    .val(v)
                    .attr("required", "")
                    .attr("readonly", "")
                    .attr("min", v)
                    .addClass("bg-gray-200 fw-bold");
            }
        });
    } else {
        $(".monthly_bill").each(function () {
            $(this).prop("checked", false);
            let c = $(this).val();
            $("#monthly_pay_" + c)
                .val("")
                .attr("readonly", "")
                .removeAttr("required")
                .addClass("bg-gray-200")
                .removeClass("fw-bold");
        });
    }
    totalPayment();
}

function checkOtherAll() {
    if ($("#other_all").is(":checked")) {
        $(".other_bill").each(function () {
            $(this).prop("checked", true);
            let c = $(this).val();
            $("#other_pay_" + c)
                .val($("#other_amount_" + c).val())
                .attr("required", "")
                .removeAttr("readonly")
                .removeClass("bg-gray-200")
                .addClass("fw-bold");
        });
    } else {
        $(".other_bill").each(function () {
            $(this).prop("checked", false);
            let c = $(this).val();
            $("#other_pay_" + c)
                .val("")
                .attr("readonly", "")
                .removeAttr("required")
                .addClass("bg-gray-200")
                .removeClass("fw-bold");
        });
    }
    totalPayment();
}

function checkMonthlyBill(r) {
    let c,
        v,
        p = r - 1;
    $(".monthly_bill").each(function () {
        c = $(this).val();
        if (c < r) {
            $(this).prop("checked", true);
            v = $("#monthly_amount_" + c).val();
            $("#monthly_pay_" + c)
                .val(v)
                .attr("required", "")
                .attr("readonly", "")
                .attr("min", v)
                .addClass("bg-gray-200 fw-bold");
        } else if (c == r) {
            if ($("#monthly_" + c).is(":checked")) {
                $("#monthly_pay_" + c)
                    .val($("#monthly_amount_" + c).val())
                    .attr("required", "")
                    .attr("min", 1)
                    .removeAttr("readonly")
                    .removeClass("bg-gray-200")
                    .addClass("fw-bold");
            } else {
                $("#monthly_pay_" + c)
                    .val("")
                    .attr("readonly", "")
                    .removeAttr("required")
                    .attr("min", 0)
                    .addClass("bg-gray-200")
                    .removeClass("fw-bold");
                if (r > 1) {
                    $("#monthly_pay_" + p)
                        .val($("#monthly_amount_" + p).val())
                        .attr("required", "")
                        .attr("min", 1)
                        .removeAttr("readonly")
                        .removeClass("bg-gray-200")
                        .addClass("fw-bold");
                }
            }
        } else {
            $(this).prop("checked", false);
            $("#monthly_pay_" + c)
                .val("")
                .attr("readonly", "")
                .removeAttr("required")
                .attr("min", 0)
                .addClass("bg-gray-200")
                .removeClass("fw-bold");
        }
    });
    // console.log(c, v, p, r);
    totalPayment();
}

function checkOtherBill(r) {
    if ($("#other_" + r).is(":checked")) {
        $("#other_pay_" + r)
            .val($("#other_amount_" + r).val())
            .attr("required", "")
            .removeAttr("readonly")
            .removeClass("bg-gray-200")
            .addClass("fw-bold");
    } else {
        $("#other_pay_" + r)
            .val("")
            .attr("readonly", "")
            .removeAttr("required")
            .addClass("bg-gray-200")
            .removeClass("fw-bold");
    }
    totalPayment();
}

function totalPayment() {
    let month_pay = 0,
        other_pay = 0,
        month_ttl = 0,
        other_ttl = 0,
        month_check = 0,
        month_all = 0,
        other_check = 0,
        other_all = 0;

    $(".monthly_bill").each(function () {
        if ($(this).is(":checked")) {
            month_pay += parseFloat($("#monthly_pay_" + $(this).val()).val());
            if (isNaN(month_pay)) {
                month_pay = 0;
            }
            month_ttl += parseFloat(
                $("#monthly_amount_" + $(this).val()).val()
            );
            // console.log('m'+$(this).val(), $('#monthly_pay_'+$(this).val()).val(), $('#monthly_amount_'+$(this).val()).val());
            month_check++;
        }
        month_all++;
    });

    $(".other_bill").each(function () {
        if ($(this).is(":checked")) {
            other_pay += parseFloat($("#other_pay_" + $(this).val()).val());
            if (isNaN(other_pay)) {
                other_pay = 0;
            }
            other_ttl += parseFloat($("#other_amount_" + $(this).val()).val());
            // console.log('o'+$(this).val(), $('#other_pay_'+$(this).val()).val(), $('#other_amount_'+$(this).val()).val());
            other_check++;
        }
        other_all++;
    });

    let overall_bill =
        parseFloat($("#bills-total").val()) +
        parseFloat($("#logs-total").val());
    let overall_ttl = parseFloat(month_ttl + other_ttl);
    let overall_pay = parseFloat(month_pay + other_pay);

    let remaining = overall_bill - overall_pay;
    // $('#total_check').text(overall_ttl.toLocaleString());
    // $('#total_pay').val(overall_pay.toLocaleString())
    // $('#amount_pay').val(overall_pay);
    // $('#id_amount').attr('min', overall_pay);
    // console.log(month_pay, month_ttl, other_pay, other_ttl);

    $("#monthly_check").text(month_ttl.toLocaleString());
    $("#other_check").text(other_ttl.toLocaleString());
    $("#monthly_pay").text(month_pay.toLocaleString());
    $("#other_pay").text(other_pay.toLocaleString());

    $("#total-bill").text(overall_bill.toLocaleString());
    $("#total-check").text(parseFloat(month_ttl + other_ttl).toLocaleString());
    $("#total-pay").text(overall_pay.toLocaleString());
    $("#remaining").text(
        parseFloat(overall_bill - overall_pay).toLocaleString()
    );
    // console.log(overall_bill, month_ttl, other_ttl, overall_pay, overall_bill, overall_pay);

    $("#to_pay").val(overall_pay);
    $("#id_amount").attr("min", overall_pay);
    // if (overall_pay > 0) {
    //     $("#id_amount").attr("min", overall_pay);
    // } else {
    //     $("#id_amount").attr("min", 0);
    // }

    // let test1 = 0.00;
    // $('#change').text(test1.toLocaleString());

    if (month_check == month_all) {
        $("#monthly_all").prop("checked", true);
    } else {
        $("#monthly_all").prop("checked", false);
    }

    if (other_check == other_all) {
        $("#other_all").prop("checked", true);
    } else {
        $("#other_all").prop("checked", false);
    }
}

function copyToPay() {
    $("#id_amount").val($("#id_amount").attr("min"));
}
