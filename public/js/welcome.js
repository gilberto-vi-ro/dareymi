
/*============================================================
 SCROLLSPY
==============================================================*/

if (document.querySelector("body").getAttribute("data-my-spy")=="scroll"){
  var section = document.querySelectorAll(".scrollspy");
  var sections = {};
  var i = 0;

  var dataOffset = document.querySelector("body").getAttribute("data-my-offset");
  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = (e.offsetTop - dataOffset);
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var dataTarget = document.querySelector("body").getAttribute("data-my-target");
    for (i in sections) {
      
      if (sections[i] <= scrollPosition ) {
          if (document.querySelector(dataTarget+' .active'))
              document.querySelector(dataTarget+' .active').classList.remove('active');
           document.querySelector(dataTarget+' a[href="#' + i + '"]').classList.add('active');
      }
    }
  };
}