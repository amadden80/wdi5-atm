var checking_balance = 1000.00;
var savings_balance = 1000.00;

function deposit_into_checking(){
  var amount_input = parseFloat($('#checking input[name=amount]').val());
  checking_balance += amount_input;
  $('#checking span.balance').text(checking_balance);
  $('#checking').removeClass('overdrawn');
}

function withdraw_from_checking(){
  var amount_input = parseFloat($('#checking input[name=amount]').val());
  if(amount_input <= checking_balance){
    checking_balance -= amount_input;
    $('#checking span.balance').text(checking_balance);
    $('#checking').removeClass('overdrawn');
  } else {
    $('#checking').addClass('overdrawn');
    alert('Sorry, you don\'t have enough money...');
  }
}

function deposit_into_savings(){
  var amount_input = parseFloat($('#savings input[name=amount]').val());
  savings_balance += amount_input;
  $('#savings span.balance').text(savings_balance);
  $('#savings').removeClass('overdrawn');
}

function withdraw_from_savings(){
  var amount_input = parseFloat($('#savings input[name=amount]').val());
  if(amount_input <= savings_balance){
    savings_balance -= amount_input;
    $('#savings span.balance').text(savings_balance);
    $('#savings').removeClass('overdrawn');
  } else {
    $('#savings').addClass('overdrawn');
    alert('Sorry, you don\'t have enough money...');
  }
}

$(document).ready(function(){
  $('#checking .deposit').click(deposit_into_checking);
  $('#checking .withdraw').click(withdraw_from_checking);
  $('#savings .deposit').click(deposit_into_savings);
  $('#savings .withdraw').click(withdraw_from_savings);
});
