$(document).ready(function () {
  if (
    !$('#myCanvas').tagcanvas({
      textColour: '#39007a',
      outlineThickness: 0.5,
      outlineColour: '#FE0853',
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    })
  ) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
});
