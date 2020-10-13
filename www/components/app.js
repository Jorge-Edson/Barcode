// This is a JavaScript file

$(document).on("click","#codeBar",function(){
     cordova.plugins.barcodeScanner.scan(
      function (result) {
        switch (result.text)
        {
          case "280720550": $('#produto1').modal(); break;
          case "989895555": $('#produto2').modal(); break;
          case "85236987": $('#produto3').modal(); break;
          case "85369877444": $('#produto4').modal(); break;
          default: alert("Produto não encontrado."); break;
        }
      },
      function (error) {
          alert("Escaneamento falhou: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Alinhe a câmera com o código de barras", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: true // iOS and Android
      }
   );
})