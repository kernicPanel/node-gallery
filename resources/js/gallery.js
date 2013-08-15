window.onload = function () {
  console.log("load : ");
  var container = document.querySelector('#links'),
    msnry = new Masonry( container, {
    // options
    columnWidth: 256,
    "gutter": 10,
    "isFitWidth": true,
    itemSelector: '.item'
  });

  document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {index: link, event: event},
    links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
  };
};
