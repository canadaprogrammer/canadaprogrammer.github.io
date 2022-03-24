// TYPING EFFECT
window.onload = function () {
  // TYPING EFFECT 1
  function typingEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    let timer = setInterval(function () {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        let element = document.querySelector('#typewrite');
        let dataType = element.getAttribute('data-type');
        if (dataType) {
          // TYPING EFFECT 2
          new txtType(element, JSON.parse(dataType));
        }
        clearInterval(timer);
      }
    }, speed);
  }

  setTimeout(function () {
    const manualTyping = document.querySelector('.manual');
    typingEffect(manualTyping, 300);
  }, 400);

  // TYPING EFFECT 2
  let txtType = function (el, dataType) {
    this.dataType = dataType;
    this.el = el;
    this.loopNum = 0;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  txtType.prototype.tick = function () {
    let i = this.loopNum % this.dataType.length;
    let fullTxt = this.dataType[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };
};
