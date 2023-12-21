const interval = 60000; // milliseconds
const phases = document.querySelector('.phases');
const header = document.querySelector('.page-header');
const headerTextToday = document.querySelector('.header-text-today');
const headerTextOddEvenNow = document.querySelector('.header-text-odd-even-now');
const headerTextOddEvenNext = document.querySelector('.header-text-odd-eve-next');
const headerTextProximityNow = document.querySelector('.header-text-proximity-now');
const headerTextProximityNext = document.querySelector('.header-text-proximity-next');
const currentHour = new Date().getHours();

// Call immediately
myCallback();

// Then every "interval" milliseconds thereafter
const ticker = setInterval(myCallback, interval);


function myCallback() {

  // Get the current date and time
  const now = new Date();

  // Get the day of the month
  const dayOfMonth = now.getDate();

  // Set the data-current-date attribute accordingly to affect styling
  phases.setAttribute("data-current-date", dateIsEven() ? "even" : "odd");

  // Set the target time (start of phase = 1 AM)
  const phaseStart = new Date();
  phaseStart.setHours(1, 0, 0, 0); // 1 AM

  // Calculate the time difference in milliseconds
  const timeDifference = now - phaseStart;

  // Calculate the total number of milliseconds in a day
  const totalMillisecondsInADay = 24 * 60 * 60 * 1000;

  // Calculate the elapsed percentage of the current 24h phase
  const percentageElapsed = Math.floor((timeDifference / totalMillisecondsInADay) * 100);

  // set negative left margin equal to percentage of current phase elapsed
  phases.style.marginLeft = `-${percentageElapsed}%`;

  // Update the header
  header.classList.add(dateIsEven() ? 'is-even' : 'is-odd');
  header.classList.remove(dateIsEven() ? 'is-odd' : 'is-even');
  headerTextToday.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  headerTextOddEvenNow.textContent = dateIsEven() ? 'even' : 'odd';
  headerTextOddEvenNext.textContent = dateIsEven() ? 'odd' : 'even';
  headerTextProximityNow.textContent = dateIsEven() ? 'furthest from' : 'closest to';
  headerTextProximityNext.textContent = dateIsEven() ? 'closest to' : 'furthest from';
}

function dateIsEven() {
  // Up until 1am, the day is still the previous day
  if (currentHour < 1) {
    return dayOfMonth % 2 === 1;
  }
  // After 1am, the day is the current day
  else {
    // This needs calculating in case it's a 31-day month
    return dayOfMonth % 2 === 0;
  }
}
