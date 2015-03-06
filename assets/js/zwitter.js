(function(d, w) {

  'use strict';

  var elem = d.createElement('div'),
      form = d.forms.twitter,
      list = form.classList,
      re   = /^\w{1,15}$/;

  form.addEventListener('input', function() {
    if (list.contains('form-init')) {
      list.remove('form-init');
    }
    if (re.test(this.handle.value)) {
      list.remove('form-error');
    } else {
      list.add('form-error');
    }
  }, false);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (re.test(this.handle.value)) {
      elem.innerHTML = ['@', '&#8203', this.handle.value].join('');
      w.prompt('Press Ctrl + C and Enter', elem.textContent);
    }
  }, false);

})(document, window);
