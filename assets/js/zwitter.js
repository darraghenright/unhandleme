(function() {

  'use strict';

  var elem = document.createElement('div'),
      form = document.forms.twitter,
      list = form.classList,
      re   = /^\w{1,15}$/;

  form.addEventListener('input', function() {
    if (list.contains('form-init')) {
      list.remove('form-init');
    }
    if (re.test(this.username.value)) {
      list.remove('form-error');
    } else {
      list.add('form-error');
    }
  }, false);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (re.test(this.username.value)) {
        elem.innerHTML = ['@', '&#8203', this.username.value].join('');
        var r = window.prompt('Press Ctrl + C and Enter', elem.textContent);
        alert(r);
    }
  }, false);

})();
