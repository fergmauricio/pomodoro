let isRunning = false;

self.onmessage = function (e) {
  if (isRunning) return;

  isRunning = true;

  const state = e.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tic() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tic, 1000);
  }

  tic();
};
