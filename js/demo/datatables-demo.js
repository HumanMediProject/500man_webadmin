// Call the dataTables jQuery plugin

let table = undefined;

$(document).ready(function() {
  table = $('#dataTable').DataTable();
});

const addRow = (data)=>{
  data.forEach((realrow)=>{
    table.row.add([realrow["성함"], realrow["주소"], realrow["수당"], realrow["진행 수업"], realrow["연락처"], realrow["계좌정보"]]).draw();
  });
}

