document.addEventListener('DOMContentLoaded', function () {
    // Modal Ecommerce Con Pasarela de Pago
    const videoBtn1 = document.getElementById('video-1-uOLPjbHugl');
    const videoModal1 = document.getElementById('videoModal');
    if (videoBtn1 && videoModal1) {
        videoBtn1.addEventListener('click', function (e) {
            e.preventDefault();
            const videoSrc = videoBtn1.getAttribute('href');
            const modalBody = videoModal1.querySelector('.modal-body');
            modalBody.innerHTML = `<video controls autoplay style="width:100%"><source src="${videoSrc}" type="video/mp4"></video>`;
            const modal = new bootstrap.Modal(videoModal1);
            modal.show();
            videoModal1.addEventListener('hidden.bs.modal', function () {
                modalBody.innerHTML = '';
            }, { once: true });
        });
    }

    // Modal Inventario PyQT5
    const videoBtn2 = document.getElementById('py_proyect');
    const videoModal2 = document.getElementById('pyqt5Modal');
    if (videoBtn2 && videoModal2) {
        videoBtn2.addEventListener('click', function (e) {
            e.preventDefault();
            const videoSrc = videoBtn2.getAttribute('href');
            const modalBody = videoModal2.querySelector('.modal-body');
            modalBody.innerHTML = `<video controls autoplay style="width:100%"><source src="${videoSrc}" type="video/mp4"></video>`;
            const modal = new bootstrap.Modal(videoModal2);
            modal.show();
            videoModal2.addEventListener('hidden.bs.modal', function () {
                modalBody.innerHTML = '';
            }, { once: true });
        });
    }

    // Modal Barbería Cuidalook
    // 1. Agrega el modal en tu HTML (antes de </body>):
    // <div class="modal fade" id="barberiaModal" tabindex="-1" aria-labelledby="barberiaModalLabel" aria-hidden="true">
    //   <div class="modal-dialog modal-lg modal-dialog-centered">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h5 class="modal-title" id="barberiaModalLabel">Proyecto Barbería Cuidalook</h5>
    //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    //       </div>
    //       <div class="modal-body">
    //         <!-- El video se insertará aquí -->
    //       </div>
    //     </div>
    //   </div>
    // </div>

    const videoBtn3 = document.getElementById('barberia');
    const videoModal3 = document.getElementById('barberiaModal');
    if (videoBtn3 && videoModal3) {
        videoBtn3.addEventListener('click', function (e) {
            e.preventDefault();
            const videoSrc = videoBtn3.getAttribute('href');
            const modalBody = videoModal3.querySelector('.modal-body');
            modalBody.innerHTML = `<video controls autoplay style="width:100%"><source src="${videoSrc}" type="video/mp4"></video>`;
            const modal = new bootstrap.Modal(videoModal3);
            modal.show();
            videoModal3.addEventListener('hidden.bs.modal', function () {
                modalBody.innerHTML = '';
            }, { once: true });
        });
    }
});