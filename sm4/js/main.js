const headerButtons = document.querySelectorAll('.header-button');
const tabs = document.querySelectorAll('.tab');

for (let i = 0; i < headerButtons.length; i++) {
  headerButtons[i].addEventListener('click', function() {
    for (let j = 0; j < tabs.length; j++) {
      if (j === i) {
        tabs[j].classList.add('tab_active');
        headerButtons[j].classList.add('header-button_active');
      } else {
        tabs[j].classList.remove('tab_active');
        headerButtons[j].classList.remove('header-button_active');
      }
    }
  });
}