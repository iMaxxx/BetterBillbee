// Better Billbee by iMaxxx
var gridChecker;
var settings = false;

chrome.storage.sync.get({
  customerNoticeBold: false,
  shipOndblClick: false,
  showBtnShip: false
}, function(items) {
  settings = items;
});

function gridLoaded() {
  //Mit Doppelclick versenden
  if(settings.shipOndblClick) {
    $('#gridBody>tr').on('dblclick',function(){
      $('#chkSelected' + $(this).attr('data-id')).click(); 
      $('#btnShipOrders').click();
    });
  }


  //Zeilen mit Kunden-Nachricht fett darstellen
  if(settings.customerNoticeBold) $('td>.fa-envelope').parent().parent().css('font-weight','bold');
}




$( document ).ready(function() {
 
  //Versenden-Button neu positionieren
  if(settings.showBtnShip) {
    $('#btnCreateLabels').after($('#btnShipOrders'));
    $('#btnShipOrders').attr('style','');
  }

  // Prüfen, ob das Grid geladen wurde. ToDo: Richtiges Event finden
  gridChecker = setInterval(() => {
    if($('#gridBody>tr')) {
      gridLoaded();
      clearInterval(gridChecker);
    }
  }, 1000);

  //BetterBillbee-Button hinzufügen
  $('#actionbuttons').append('<a class="btn disabled" id="btnBetterBillbee" href="# data-placement="bottom" data-original-title="Better Billbee aktiv">BetterBillbee</a>');
  // 


});




document.addEventListener('DOMContentLoaded', function () {
  // Plugin geladen
  //chrome.runtime.openOptionsPage();
}, false);