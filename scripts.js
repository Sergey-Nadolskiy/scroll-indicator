// When the page is loaded
$(document).ready(function() {
  // Update progress indicator
  changeProgress();

  // When user scroll page
  $(window).scroll(function() {
    // Update progress indicator
    changeProgress();
  });

});

// Update progress indicator
function changeProgress() {

  var wScroll = $(this).scrollTop(),
    dHeight = $(document).height(),
    wHeight = $(window).innerHeight(),
    progress = ((wScroll + wHeight) / dHeight) * 100,
    gradient = '#ff0000';


  // check progress & set gradient
  if (progress <= 25) {
    gradient = '#ff0000';
  }
  if (progress > 25 && progress <= 50) {
    gradient = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,140,0,1) 50%)';
  }
  if (progress > 50 && progress <= 75) {
    gradient = 'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,140,0,1) 50%, rgba(255,215,0,1) 100%)';
  } else if (progress > 75 && progress < 100) {
    gradient = 'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,140,0,1) 25%, rgba(255,215,0,1) 50%, rgba(0,128,0,1) 100%)';
  } else if (progress == 100) {
    gradient = 'rgba(0,128,0,1)';
  }

  // update progress background and width
  $('.scroll-indicator').css({
    'width': `${ progress }%`,
    'background': `${ gradient }`
  });

} // end function changeProgress();
