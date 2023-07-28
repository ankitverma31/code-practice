function isUblockOriginInstalled(callback) {
    var img = document.createElement('img');
    img.src = 'https://ublockorigin.com/img/icon-48.png';
    img.onload = function() {
      if ((typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 48) || (typeof img.width !== 'undefined' && img.width === 48)) {
        callback(true);
      } else {
        callback(false);
      }
    };
    img.onerror = function() {
      callback(false);
    };
  }
  
  isUblockOriginInstalled(function(installed) {
    if (installed) {
      console.log('uBlock Origin is installed.');
    } else {
      console.log('uBlock Origin is NOT installed.');
    }
  });