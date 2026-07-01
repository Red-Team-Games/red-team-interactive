// Falling code rain — red palette, terminal characters
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');

  const CHARS  = '01アイウエオカキクケコサシスセソ!@#$%{}[]<>ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const FSIZE  = 14;

  let W, H, cols, drops;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cols  = Math.floor(W / FSIZE);
    drops = Array.from({ length: cols }, () => Math.random() * -(H / FSIZE));
  }

  function tick() {
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, 0, W, H);

    ctx.font = `${FSIZE}px 'Share Tech Mono', monospace`;

    for (let i = 0; i < cols; i++) {
      const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
      const x  = i * FSIZE;
      const y  = drops[i] * FSIZE;

      // Bright white head, very dim red trail
      ctx.fillStyle = Math.random() > 0.97 ? '#888888' : '#3a0000';
      ctx.fillText(ch, x, y);

      if (y > H && Math.random() > 0.972) drops[i] = 0;
      drops[i] += 0.6;
    }
  }

  resize();
  setInterval(tick, 45);
  window.addEventListener('resize', resize);
})();
