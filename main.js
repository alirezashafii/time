const clock = document.querySelector(".clock");

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hour === 0) hour = 12;

  if (hour > 12) {
    session = "PM";
    hour = hour - 12;
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second + " " + session;

  clock.innerText = time;
}

document.addEventListener("DOMContentLoaded", () => {
  currentTime();
});

setInterval(currentTime, 1000);

// GSAP - HOME section
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.out" },
});

tl.fromTo(
  "main",
  { scale: 0.8, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    duration: 2.5,
    ease: "elastic.out(1.5, 1",
  }
);

tl.fromTo(
  ".clock",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, ease: "sine.in", duration: 0.6 },
  "<20%"
);
