/* Synced Offlo-Pay countdowns */
(() => {
  const target = new Date("2027-01-01T00:00:00+05:30").getTime();
  const groups = document.querySelectorAll(".beta-countdown-group");

  function update() {
    let left = Math.max(0, target - Date.now()) / 1000;
    const values = {
      days: Math.floor(left / 86400),
      hours: Math.floor(left / 3600) % 24,
      minutes: Math.floor(left / 60) % 60,
      seconds: Math.floor(left) % 60
    };

    groups.forEach(group => {
      Object.entries(values).forEach(([unit, value]) => {
        const el = group.querySelector(`[data-${unit}]`);
        if (el) el.textContent = String(value).padStart(2, "0");
      });
    });
  }

  update();
  setInterval(update, 1000);
})();
