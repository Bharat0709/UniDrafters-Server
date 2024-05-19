var vForm = document.getElementById('mgform');
var vInput = document.getElementById('mail');

vForm.onsubmit = function () {
  console.log('submit');
  if (this.hid == 'bulk') {
    location = '/submit/' + encodeURIComponent(vInput.value);
  }
  if (this.hid == 'list') {
    location = '/validate/' + encodeURIComponent(vInput.value);
  }
  if (this.hid == 'inv') {
    location = '/invoice/' + encodeURIComponent(vInput.value);
  }

  return false;
};
