document.addEventListener('DOMContentLoaded', function () {
  // Evita que los enlaces con data-bs-toggle="modal" recarguen la página
  document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });

  // Maneja el cambio de video en el modal único
  var videoModal = document.getElementById('videoModal');
  if (videoModal) {
    var modalVideo = document.getElementById('modalVideo');
    var videoSource = modalVideo.querySelector('source');

    videoModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget;
      var videoUrl = button.getAttribute('data-video');
      if (videoUrl) {
        videoSource.src = videoUrl;
        modalVideo.load();
        modalVideo.play();
      }
    });

    videoModal.addEventListener('hidden.bs.modal', function () {
      modalVideo.pause();
      videoSource.src = '';
      modalVideo.load();
    });
  }
});
