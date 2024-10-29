const inputJobManangement = document.getElementById("linkUrl");
const jobManagementButtonCopy = document.getElementById("job-management-btn-copy");

$(document).ready(function () {
    $(".basic-info-select").select2({
        minimumResultsForSearch: Infinity,
    });
    $(function () {
        $("#datepicker").datepicker();
    });
});

jobManagementButtonCopy.onclick = function () {
    navigator.clipboard.writeText(inputJobManangement.value);
    alert("Copy đường dẫn thành công");
};
