let timer = null;

function startCountdown() {
  const target = new Date(
    document.getElementById("targetDate").value
  ).getTime();

  if (!target) return;

  clearInterval(timer);

  timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("display").innerText = "Time's Up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const spans = document.querySelectorAll("#display span");
    spans[0].innerText = String(days).padStart(2, "0");
    spans[1].innerText = String(hours).padStart(2, "0");
    spans[2].innerText = String(minutes).padStart(2, "0");
    spans[3].innerText = String(seconds).padStart(2, "0");
  }, 1000);
}
