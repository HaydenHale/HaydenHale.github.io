$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid(1400, 750);

    // TODO 2 - Create Platforms
    createPlatform(50, 650, 100, 20, "#4B8B3B");
    createPlatform(400, 550, 180, 20, "#FFA500");
    createPlatform(700, 450, 150, 20, "#FFFFFF");
    createPlatform(700, 675, 100, 30, "#66e3ffff");
    createPlatform(950, 325, 25, 250, "blue");
    createPlatform(700, 300, 100, 10, "cyan");
    createPlatform(400, 250, 100, 20, "green");
    createPlatform(700, 150, 25, 10, "#bbbbfbff");
    createPlatform(900, 150, 100, 10, "red");

    // TODO 3 - Create Collectables
    createCollectable("commonSample", 700, 600);
    // TODO 4 - Create Cannons

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
