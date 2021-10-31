$('img#BlueprintImage').addClass('img-enlargeable').click(function () {
    var src = $(this).attr('src');
    src = src.replace("\\", "/");
    console.log(src);
    var modal;

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: '10000',
        top: '0',
        left: '0',
        cursor: 'zoom-out'
    }).click(function () {
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function (e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
});