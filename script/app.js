(function () {
  let asciiContainer = document.getElementById("ascii");
  let capturing = false;

  camera.init({
    width: 400,
    height: 150,
    fps: 30,
    mirror: true,

    onFrame: function (canvas) {
      ascii.fromCanvas(canvas, {
        callback: function (asciiString) {
          asciiContainer.innerHTML = asciiString;
        },
      });
    },

    onSuccess: function () {
      document.getElementById("info").style.display = "none";

      const button = document.getElementById("button");
      button.style.display = "block";
      button.onclick = function () {
        if (capturing) {
          camera.pause();
          button.innerText = "resume";
        } else {
          camera.start();
          button.innerText = "pause";
        }
        capturing = !capturing;
      };
    },

    onError: function (error) {
      //log error
    },

    onNotSupported: function () {
      document.getElementById("info").style.display = "none";
      asciiContainer.style.display = "none";
      document.getElementById("unsupported").style.display = "block";
    },
  });
})();
