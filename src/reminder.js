function delayedReminder(message, delay) {
  const timerId = setTimeout(() => {
    console.log(message);
  }, delay);

  return timerId; // Important for Jest to track the timer
}

module.exports = { delayedReminder };
