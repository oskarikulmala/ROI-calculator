$(document).ready(function() {
  $('#spend, #visitors, #price-per-visitor, #leads-calculated-percent, #sales-opportunities-percent, #sales-actual-percent, #average-sale').change(function() {

    // Defaults.
    var spend = 20000;
    var visitors = 20000;
    var price_per_visitor = 1;
    var leads_calculated_percent = 20;
    var leads_calculated_amount = 4000;
    var sales_opportunities_percent = 5;
    var sales_opportunities_amount = 200;
    var sales_actual_percent = 5;
    var sales_actual_amount = 10;
    var average_sale = 1500;
    var total_sale = 15000
    var revenue = -5000;
    var roi = -25;

    // Get values needed for calculations.
    if($('#spend').val()) { spend = $('#spend').val(); }
    if($('#visitors').val()) { visitors = $('#visitors').val(); }
    if($('#leads-calculated-percent').val()) { leads_calculated_percent = $('#leads-calculated-percent').val() }
    if($('#sales-opportunities-percent').val()) { sales_opportunities_percent = $('#sales-opportunities-percent').val(); }
    if($('#sales-actual-percent').val()) { sales_actual_percent = $('#sales-actual-percent').val(); }
    if($('#average-sale').val()) { average_sale = $('#average-sale').val(); }

    // Calculate.
    $('#price-per-visitor').val(Math.round((spend / visitors) * 100) / 100);
    leads_calculated_amount = (leads_calculated_percent / 100) * visitors;
    $('#leads-calculated-amount').val(Math.round(leads_calculated_amount * 100) / 100);

    sales_opportunities_amount = (sales_opportunities_percent / 100) * leads_calculated_amount;
    $('#sales-opportunities-amount').val(Math.round(sales_opportunities_amount * 100) / 100);

    sales_actual_amount = (sales_actual_percent / 100) * sales_opportunities_amount;
    $('#sales-actual-amount').val(Math.round(sales_actual_amount * 100) / 100);

    total_sale = sales_actual_amount*average_sale;
    $('#total-sale').val(Math.round((total_sale) * 100) / 100);
    revenue = total_sale - spend;
    $('#revenue').val(Math.round((revenue) * 100) / 100);
    $('#roi').val((revenue/spend) * 100);
  });
});
