counters = document.querySelectorAll('.stat-number');

counters.forEach((element) => {

  element.innerHTML = 0;

  const updateCounter = () => {
    const targetNum = +element.getAttribute('data-target');
    let startingNum = +element.innerHTML;
    let increament = Math.round(targetNum / 5);
    if (startingNum < targetNum) {
      element.innerHTML = startingNum + increament;
      setTimeout(updateCounter, 100);
    }
  }
  updateCounter();
});