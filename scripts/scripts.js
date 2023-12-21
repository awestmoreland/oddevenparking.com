const interval = 60000; // milliseconds
const phases = document.querySelector('.phases');
const header = document.querySelector('.page-header');
const headerTextToday = document.querySelector('.header-text-today');
const headerTextOddEvenNow = document.querySelectorAll('.header-text-odd-even-now');
const headerTextOddEvenNext = document.querySelectorAll('.header-text-odd-eve-next');
const headerTextProximityNow = document.querySelectorAll('.header-text-proximity-now');
const headerTextProximityNext = document.querySelectorAll('.header-text-proximity-next');

let currentHour, dayOfMonthNow, dayOfMonthNex;

// Call immediately
myCallback();

// Then every "interval" milliseconds thereafter
const ticker = setInterval(myCallback, interval);


function myCallback() {

  // Get & set values
  // -----------------

    const now = new Date();
    dayOfMonthNow = now.getDate(); // today's day of month

    dayOfMonthNext = new Date(now);
    dayOfMonthNext.setDate(now.getDate() + 1); // tomorrow's day of month

    currentHour = now.getHours();

    // Set the target time (start of phase = 1 AM)
    const phaseStart = new Date();
    phaseStart.setHours(1, 0, 0, 0); // 1 AM


  // Perform calculations
  // --------------------

    // Calculate the time difference in milliseconds
    const timeDifference = now - phaseStart;

    // Calculate the total number of milliseconds in a day
    const totalMillisecondsInADay = 24 * 60 * 60 * 1000;

    // Calculate the elapsed percentage of the current 24h phase
    const percentageElapsed = Math.floor((timeDifference / totalMillisecondsInADay) * 100);


  // Update the page
  // ---------------

  // set negative left margin equal to percentage of current phase elapsed
    phases.style.marginLeft = `-${percentageElapsed}%`;

    // Set the data-current-date attribute accordingly to affect styling
    phases.setAttribute("data-current-date", dateIsEven(dayOfMonthNow) ? "even" : "odd");

    // Update the header
    header.classList.add(dateIsEven(dayOfMonthNow) ? 'is-even' : 'is-odd');
    header.classList.remove(dateIsEven(dayOfMonthNow) ? 'is-odd' : 'is-even');
    header.setAttribute('data-side-matters', sideMatters(currentHour) ? 'true' : 'false');
    headerTextToday.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    updateEach(headerTextOddEvenNow, dateIsEven(dayOfMonthNow) ? 'even' : 'odd');
    updateEach(headerTextOddEvenNext, dateIsEven(dayOfMonthNext) ? 'odd' : 'even');
    updateEach(headerTextProximityNow, dateIsEven(dayOfMonthNow) ? 'furthest from' : 'closest to');
    updateEach(headerTextProximityNext, dateIsEven(dayOfMonthNext) ? 'closest to' : 'furthest from');
}

function updateEach(elements, text) {
  elements.forEach(element => {
    element.textContent = text;
  });
}


function dateIsEven(testDate) {
  // Up until 1am, the day is still the previous day
  if (currentHour < 1) {
    return testDate % 2 === 1;
  }
  // After 1am, the day is the current day
  else {
    // This needs calculating in case it's a 31-day month
    return testDate % 2 === 0;
  }
}

function sideMatters(testHour) {
  return(testHour > 0 || testHour < 18);
}
