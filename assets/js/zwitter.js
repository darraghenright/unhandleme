(function() {

  'use strict';

  var alert = document.getElementById('alert'),
      group = document.getElementById('group'),
      name  = document.getElementById('name'),
      regex = /^\w{1,15}$/;

  name.addEventListener('input', function() {
    if (!regex.test(this.value)) {
      group.classList.add('has-error');
    } else {
      group.classList.remove('has-error');
    }
  }, false);

  // elem.innerHTML = ['@', '&#8203', name.value].join('');
  // window.prompt('Press Ctrl + C and Enter', elem.textContent);

})();


