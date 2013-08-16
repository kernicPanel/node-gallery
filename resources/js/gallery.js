$(function(){
  (function($, undefined) {
    $.extend($.infinitescroll.prototype,{
      _callback_masonry: function infscr_callback_masonry (newElements) {
        $(this).masonry('appended',$(newElements));
      }
    });
  })(jQuery);

  var $container = $('#links');

  /*
   *var container = document.querySelector('#links'),
   *  msnry = new Masonry( container, {
   *  // options
   *  columnWidth: 256,
   *  "gutter": 10,
   *  "isFitWidth": true,
   *  itemSelector: '.item'
   *});
   */

  $container.masonry({
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

  /*
   *$container.isotope({
   *  itemSelector : '.element'
   *});
   */

  $container.infinitescroll({
    debug: true,
    //navSelector  : '#page_nav',    // selector for the paged navigation
    //binder: $('body'),
    nextSelector : '#nextPage',  // selector for the NEXT link (to page 2)
    itemSelector : '.item',     // selector for all items you'll retrieve
    loading: {
      finishedMsg: 'No more pages to load.',
      img: 'http://i.imgur.com/qkKy8.gif'
    }
  },

  function( newElements ) {
    $container.masonry( 'addItems', $( newElements ) );
    $container.imagesLoaded(function(){
      $container.masonry(  );
    });
    console.log("newElements : ", newElements);
  });

  /*
   *$container.imagesLoaded(function(){
   *  $container.masonry(  );
   *});
   */
});

