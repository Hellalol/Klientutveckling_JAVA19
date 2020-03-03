let test = document.getElementById('test');

if (Modernizr.flash) {
  console.log("Flash is supported");
  test.innerHTML = "Flash is supported";
} else {
  console.error("Flash is not supported");
  test.innerHTML = "Flash is not supported";
}