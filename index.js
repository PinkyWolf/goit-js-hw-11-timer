const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  timer: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const now = Date.now();
    const time = this.targetDate - now;
    this.updateTime(time);
    this.timerFinish(time);
  }, 1000);

  updateTime(time) {
    refs.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    refs.mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    refs.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  timerFinish(time) {
    if (time < 0) {
      clearInterval(this.setInt);
      refs.timer.textContent = "Finally";
    }
  }
};
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("june 01, 2021"),
});

