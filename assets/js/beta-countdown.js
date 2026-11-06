/* OFFLOPAY-BETA-COUNTDOWN-JS */

(function () {
  const launchDate = new Date(
    "2027-01-01T00:00:00+05:30"
  ).getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const statusEl = document.getElementById("beta-status");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    return;
  }

  function updateCountdown() {
    const now = Date.now();
    const difference = launchDate - now;

    if (difference <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";

      if (statusEl) {
        statusEl.textContent =
          "OffloPay Open Beta launch target reached!";
      }

      clearInterval(timer);
      return;
    }

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);

})();

/* END OFFLOPAY-BETA-COUNTDOWN-JS */
