// Saves options to chrome.storage
function save_options() {
    var customerNoticeBold = document.getElementById('customerNoticeBold').checked;
    var shipOndblClick = document.getElementById('shipOndblClick').checked;
    var showBtnShip = document.getElementById('showBtnShip').checked;
    

    chrome.storage.sync.set({
        customerNoticeBold: customerNoticeBold,
        shipOndblClick: shipOndblClick,
        showBtnShip: showBtnShip
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Einstellungen gespeichert. Bitte Billbee-Seite aktualisieren!';
      setTimeout(function() {
        status.textContent = '';
      }, 1750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      customerNoticeBold: false,
      shipOndblClick: false,
      showBtnShip: false
    }, function(items) {
        document.getElementById('customerNoticeBold').checked = items.customerNoticeBold;
        document.getElementById('shipOndblClick').checked = items.shipOndblClick;
        document.getElementById('showBtnShip').checked = items.showBtnShip;
        
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);