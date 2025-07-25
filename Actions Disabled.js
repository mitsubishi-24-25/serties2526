document.addEventListener("DOMContentLoaded", function () {
    // Block developer tools, view source, copy, cut
    document.addEventListener("keydown", function (e) {
      const key = e.key.toLowerCase();
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (key === "i" || key === "j")) ||
        (e.ctrlKey && ["u", "c", "x"].includes(key)) // 'x' added here
      ) {
        e.preventDefault();
        alert("Action disabled by SHS Coordinator.");
      }
    });

    // Disable right-click
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      alert("Action disabled by SHS Coordinator.");
    });

    // Disable copy
    document.addEventListener("copy", function (e) {
      e.preventDefault();
      alert("Action disabled by SHS Coordinator.");
    });

    // Disable cut
    document.addEventListener("cut", function (e) {
      e.preventDefault();
      alert("Action disabled by SHS Coordinator.");
    });

    // Disable drag
    document.addEventListener("dragstart", function (e) {
      e.preventDefault();
      alert("Action disabled by SHS Coordinator.");
    });

    // Prevent long tap and gestures (mobile)
    document.addEventListener("touchstart", function (e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener("gesturestart", function (e) {
      e.preventDefault();
    });
  });