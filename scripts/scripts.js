const interval = 60000; // milliseconds
const phases = document.querySelector('.phases');

// Call immediately
myCallback();

// Then every "interval" milliseconds thereafter
const ticker = setInterval(myCallback, interval);


function myCallback() {

  // Get the current date and time
  const now = new Date();

  // Get the day of the month
  const dayOfMonth = now.getDate();

  // Check if the day of the month is odd or even
  const isEvenDate = dayOfMonth % 2 === 0;

  // Set the data-current-date attribute accordingly to affect styling
  phases.setAttribute("data-current-date", isEvenDate ? "even" : "odd");

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

}
