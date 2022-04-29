
function toggleClock() {
    // get the clock
    var myClock = document.getElementById("clock");

    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;

    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('clockButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'flex') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = 'View More';
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'flex';
      // change button text
      clockButton.innerHTML = 'View Less';
    }
    
  }

 






