var borderRange = document.getElementById('border-range');
var paddingRange = document.getElementById('padding-range');
var contentRange = document.getElementById('content-range');

var borderColor = document.getElementById('border-color');
var paddingColor = document.getElementById('padding-color');
var contentColor = document.getElementById('content-color');

var borderRadius = document.getElementById('border-radius');
var paddingRadius = document.getElementById('padding-radius');
var contentRadius = document.getElementById('content-radius');

var borderBox = document.querySelector('.border');
var paddingBox = document.querySelector('.padding');
var contentBox = document.querySelector('.content');
var imgBox = document.querySelector('img');

borderRange.addEventListener('change', function() {
  borderBox.style.padding = borderRange.value + 'px';
});
paddingRange.addEventListener('change', function() {
  paddingBox.style.padding = paddingRange.value + 'px';
});
contentRange.addEventListener('change', function() {
  contentBox.style.padding = contentRange.value + 'px';
});


borderColor.addEventListener('change', function() {
  borderBox.style.backgroundColor = borderColor.value;
});
paddingColor.addEventListener('change', function() {
  paddingBox.style.backgroundColor = paddingColor.value;
});
contentColor.addEventListener('change', function() {
  contentBox.style.backgroundColor = contentColor.value;
});

borderRadius.addEventListener('change', function() {
  borderBox.style.borderRadius = borderRadius.value + 'px';
});
paddingRadius.addEventListener('change', function() {
  paddingBox.style.borderRadius = paddingRadius.value + 'px';
});
contentRadius.addEventListener('change', function() {
  contentBox.style.borderRadius = contentRadius.value + 'px';
  imgBox.style.borderRadius = contentRadius.value + 'px';
});
