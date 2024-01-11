const interval = 60000; // milliseconds
const phases = document.querySelector('.phases');
const bodyTag = document.querySelector('body');
const textProximity = document.querySelectorAll('.text-proximity-now');

let currentHour, dayOfMonth;

// Call immediately
myCallback();

// Then every "interval" milliseconds thereafter
const ticker = setInterval(myCallback, interval);


function myCallback() {

  // Get & set values
  // -----------------

    const now = new Date();
    monthInt = now.getMonth() + 1; // getMonth() returns 0-11
    dayOfMonth = now.getDate(); // today's day of month
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

    // Update the bodyTag
    bodyTag.setAttribute('data-date-is-even', dateIsEven(dayOfMonth) ? 'true' : 'false');
    bodyTag.setAttribute('data-side-matters', sideMatters(currentHour) ? 'true' : 'false');

    // Edge case: it's the 31st or 2/29, so two odd days in a row:
    bodyTag.setAttribute('data-move-required', (dayOfMonth == 31 || (dayOfMonth == 29 && monthInt == 2 ) ) ? 'false' : 'true');

    // Update proximity text
    updateEach(textProximity, dateIsEven(dayOfMonth) ? evenDayText : oddDayText);

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
    return testDate % 2 === 0;
  }
}

function sideMatters(testHour) {
  return(testHour > 0 || testHour < 18);
}

