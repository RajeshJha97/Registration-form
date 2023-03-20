const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  // preventing the default behaviour of forms
  e.preventDefault();
  // selecting all the inputs
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function (input) {
    // clearing checkbox
    console.log(input.type);
    if (input.type === 'checkbox') {
      input.checked = false;
    }
    // clearing remaining forms data
    else {
      input.value = '';
    }
  });
});
