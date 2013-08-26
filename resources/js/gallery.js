$(function(){

  var $container = $('#links'), gallery;
  //var $container = $('#links');

  $container.imagesLoaded(function(){
    $container.masonry({
      columnWidth: 256,
      "gutter": 10,
      "isFitWidth": true,
      itemSelector: '.item'
    });
  });

  //document.getElementById('links').onclick = function (event) {
  $container.on('click', function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {
      index: link,
      event: event,
      onslidecomplete: function (index, slide) {
        if (index === 1) {
          $container.infinitescroll('retrieve');
        }
      }
    },


    links = $(this).find('a');
    links = links.toArray();
    gallery = blueimp.Gallery(links, options);
  });

  $container.infinitescroll({
    //debug: true,
    //navSelector  : '#page_nav',    // selector for the paged navigation
    //binder: $('body'),
    bufferPx: 600,
    nextSelector : '#nextPage',  // selector for the NEXT link (to page 2)
    itemSelector : '.item',     // selector for all items you'll retrieve
    loading: {
      msgText: "Chargement...",
      finishedMsg: 'Just married',
      img: '../img/loader.gif'
    }
  },

  function( newElements ) {
    $container.append(newElements);
    $container.masonry( 'appended', $( newElements ) );
    $container.imagesLoaded(function(){
      $container.masonry(  );
    });
    gallery.add(newElements);
  });

});

