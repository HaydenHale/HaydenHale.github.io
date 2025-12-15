var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
     
      var hitZoneSize = 20;
      var damageFromObstacle = 50;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = 800;
      sawBladeHitZone.y = 200;
      hitZoneSize.y = hitZoneSize.y - 5
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      

        var hitZoneSize = 20;
      var damageFromObstacle = 100;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = 1100;
      sawBladeHitZone.y = 275;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      if (sawBladeHitZone.x < -200) {
        sawBladeHitZone.x = canvasWidth;
      }


      // var enemy = game.createGameItem("enemy", 25, velocityX, rotationalVelocity);
      // var redSquare = draw.rect(50, 50, "red");
      // redSquare.x = -25;
      // redSquare.y = -25;
      // enemy.addChild(redSquare);
      // enemy.x = 400;
      // enemy.y = groundY - 50;
      // game.addGameItem(enemy);
      // var velocityX = enemy.velocityX -1;
      // var rotationalVelocity = 20;
      // enemy.onPlayerCollision = function () {
      //   game.changeIntegrity(-10)
      // };
      // enemy.onPlayerCollision = function () {
      //   game.changeIntegrity(-10)
      // };
      // enemy.onProjectileCollision = function () {
      //   game.increaseScore(100);
      //   enemy.fadeOut();
      // }
      function createEnemy(x, y) {
  var enemy = game.createGameItem("enemy", 25); 
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = 400;
      enemy.y = groundY - 50;
      game.addGameItem(enemy);
      var velocityX = enemy.velocityX -= 10;
      var rotationalVelocity = 20;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10)
      };
      // enemy.onPlayerCollision = function () {
      //   game.changeIntegrity(-10)
      // };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      }
        var enemy = game.createGameItem("enemy", 25, velocityX, rotationalVelocity);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = 800;
      enemy.y = groundY - 100;
      game.addGameItem(enemy);
      enemy.velocityX = -10;
      var rotationalVelocity = 20;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10)
      };
      // enemy.onPlayerCollision = function () {
      //   game.changeIntegrity(-10)
      // };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      }
        var enemy = game.createGameItem("enemy", 25, velocityX, rotationalVelocity);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = 1200;
      enemy.y = groundY - 50;
      game.addGameItem(enemy);
      var velocityX = enemy.velocityX -= 100;
      var rotationalVelocity = 20;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10)
      };
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10)
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      }
  }
      createEnemy(400, groundY - 10);
      createEnemy(800, groundY - 100);
      createEnemy(1200, groundY - 50);
      
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
