document.addEventListener("DOMContentLoaded", function () {
  var captureButton = document.getElementById("captureButton");

  captureButton.addEventListener("click", function () {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
      var downloadLink = document.createElement("a");
      console.log("dddddddd", dataUrl);
      downloadLink.href = dataUrl;
      downloadLink.download = "screenshot.png";
      downloadLink.click();
    });
  });
});
