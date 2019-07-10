// Better Billbee by iMaxxx
var settings;
var gridChecker;

// Einstellungen laden
chrome.storage.sync.get({
  customerNoticeBold: false,
  shipOndblClick: false,
  showBtnShip: false
}, function(items) {
  settings = items;
});

function gridLoaded() {
    $('[data-resource-id="Versand"]').after($.parseHTML('<table id="shippingRow" style="width:100%" class="table table-bordered table-condensed table-hover">' + localStorage.getItem('betterBillbee.shippingRow') + "</table>"));
    if(localStorage.getItem('betterBillbee.shippingRow')) {
      $('.ng-binding:contains("Sort")').parent().html("Markieren als ").append($('[ng-model="vm.sentOrPacked"]'));
      $('.table-striped thead').html("");

      $('#shippingRow td').first().remove();
      $('#shippingRow td').first().remove();

      localStorage.setItem('betterBillbee.shippingRow','');
    }

    
  }

$( document ).ready(function() {
  gridChecker = setInterval(() => {
    if($('[name="formShipBulkOrder"]')) {
      clearInterval(gridChecker);
      gridLoaded();

      //Kunden-Code ausführen (customer.js)
      runCustomOnShipping();

      
    }
  }, 1000);
});


