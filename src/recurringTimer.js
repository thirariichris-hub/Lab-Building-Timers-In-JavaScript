let intervalId = null;

function recurringTimer(message, interval) {
  intervalId = setInterval(() => {
    console.log(message);
  }, interval);

  return intervalId; // Return ID so Jest can track it
}

function stopRecurringTimer() {
  clearInterval(intervalId);
}

module.exports = { recurringTimer, stopRecurringTimer };
