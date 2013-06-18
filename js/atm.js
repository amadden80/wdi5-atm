var checking_balance = 1000.00;
var savings_balance = 1000.00;

function deposit_into_checking(){

  var amount_input = parseFloat($('#checking input[name=amount]').val());
  checking_balance += amount_input;
  $('#checking span.balance').text(checking_balance);


  // $('#checking ')

  console.log(amount_input);
}

$(document).ready(
  function(){

    $('#checking .deposit').click(deposit_into_checking);

  }
);
