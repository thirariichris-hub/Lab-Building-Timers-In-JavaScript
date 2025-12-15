function countdownTimer(seconds) {
  let remainingTime = seconds;

  const timerId = setInterval(() => {
    console.log(remainingTime);
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timerId);
    }
  }, 1000);

  return timerId; // Important for Jest to track the timer
}

module.exports = { countdownTimer };
