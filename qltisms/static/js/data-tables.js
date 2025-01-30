function parseCustomDate(dateString) {
    const months = {
        'Jan.': 'January', 'Feb.': 'February', 'Mar.': 'March', 'Apr.': 'April', 'May': 'May', 'Jun.': 'June',
        'Jul.': 'July', 'Aug.': 'August', 'Sep.': 'September', 'Oct.': 'October', 'Nov.': 'November', 'Dec.': 'December'
    };

    const monthName = dateString.split(' ')[0];
    const fullDateString = dateString.replace(monthName, months[monthName]);
    const formattedDateString = fullDateString.replace('p.m.', 'PM').replace('a.m.', 'AM');

    return new Date(formattedDateString);
}

document.addEventListener('DOMContentLoaded', function() {
    const filterAccounts = document.getElementById("filterAccountsSelect");
    const filterDate = document.getElementById("filterDateSelect");

    if (filterAccounts) {
        setupAccountFilter();
    }

    if (filterDate) {
        setupDateFilter();
    }

    $('#dataTable').DataTable();
});

function setupAccountFilter() {
    const table = $('#dataTable').DataTable();

    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        const selectedType = $('#filterAccountsSelect option:selected').val();
        const typeColumn = table.cell(dataIndex, 2).node() ? table.cell(dataIndex, 2).node().getAttribute('data-type') : null;
        const statusColumn = table.cell(dataIndex, 5).node() ? table.cell(dataIndex, 5).node().getAttribute('data-type') : null;

        if (selectedType === 'all' || typeColumn === selectedType || statusColumn === selectedType) {
            return true;
        }
        return false;
    });

    $('#filterAccountsSelect').on('change', function() {
        table.draw();
    });
}

function setupDateFilter() {
    const table = $('#dataTable').DataTable();

    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        const selectedDuration = $('#filterDateSelect option:selected').val();
        const purchaseDate = table.cell(dataIndex, 2).data();
        const purchaseDateObj = parseCustomDate(purchaseDate);
        const now = new Date();
        let startDate;

        switch (selectedDuration) {
            case 'this_week':
                startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
                break;
            case 'this_month':
                startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
                break;
            case 'last_3_months':
                startDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
                break;
            case 'last_6_months':
                startDate = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
                break;
            case 'this_year':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
            default:
                startDate = new Date(0); // Include all dates
        }

        if (selectedDuration === 'all') {
            return true;
        }

        if (purchaseDateObj instanceof Date && !isNaN(purchaseDateObj)) {
            return purchaseDateObj >= startDate;
        }
        return false;
    });

    $('#filterDateSelect').on('change', function() {
        table.draw();
    });
}