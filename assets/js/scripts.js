(function() {
    var header = document.querySelector(".link-back");

    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 10
        },
        offset : 300
    });
    headroom.init();

}());