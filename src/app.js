const canvas = document.getElementById("canvas");
const player = {
  "color": "green",
  "x": 3,
  "y": 3,
  "size": 1,
  "speed": 1,
  "is_colliding": false
}

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  document.getElementById("debugBtn").addEventListener("click", () => debugPre.classList.toggle("active"))
  const debug = (x, y, is_colliding) => {
    const debugPre = document.getElementById("debugPre")

    debugPre.innerHTML = `
<strong style="color: green;">player</strong> = {
  "player.<strong style="color: #ff9933;">x</strong>": <span style="color: blueviolet;">${x}</span>,
  "player.<strong style="color: #ff9933;">y</strong>": <span style="color: blueviolet;">${y}</span>,
  "is_colliding": <span style="color: blueviolet;">${is_colliding}</span>
}
      `
  }
  debug(player.x, player.y);

  // if browser support canvas.
  canvas.width = 10;
  canvas.height = 10;

  function draw() {
    is_colliding(player)
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    square(ctx, player.x, player.y, player.size, player.size, player.color)
    debug(player.x, player.y, player.is_colliding)

  }

  function is_colliding(object) {
    // Verifica colisão horizontal e vertical (x)
    if (object.x == canvas.height - object.size || object.x == 0
      ||
      object.y == canvas.height - object.size || object.y == 0) {
      object.is_colliding = true
    } else {
      object.is_colliding = false
    }
  }

  window.requestAnimationFrame(() => {
    draw()

    document.addEventListener("keypress", event => {
      //#region MOVIMENTO
      if (event.key == "ArrowRight" && player.x < canvas.width - player.size) {
        player.x += player.speed
        draw()
      }
      if (event.key == "ArrowDown" && player.y < canvas.height - player.size) {
        player.y += player.speed
        draw()
      }
      if (event.key == "ArrowLeft" && player.x > 0) {
        player.x -= player.speed
        draw()
      }
      if (event.key == "ArrowUp" && player.y > 0) {
        player.y -= player.speed
        draw()
      }
      //#endregion
    })
  });

} else {
  // if browser no support canvas.
  document.body.innerHTML = `
  <h1 class="unsupport">Sorry, but your browser <strong>don't support Canvas</strong>! :(</h1>
  <h2 class="unsupport">Try to use <strong>Firefox</strong> or <strong>Google Chrome</strong>!</h2>
  <h2 class="unsupport">Or Update your browser!</h2>
  `
}

function draw(ctx) {
}

function square(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h)
}

function circle(ctx, x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}