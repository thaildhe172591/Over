document.addEventListener('DOMContentLoaded', function () {
    var agreeCheckbox = document.querySelector('input[name="terms"]');
    var video = document.querySelector('video');
  
    agreeCheckbox.addEventListener('change', function () {
      if (agreeCheckbox.checked) {
        video.play();
        video.addEventListener('ended', function () {
          video.currentTime = 0;
          video.play();
        });
      } else {
        video.pause();
      }
    });
  });
  
