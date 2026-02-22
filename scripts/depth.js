document.addEventListener('DOMContentLoaded', () => {
  const visualContainer = document.querySelector('.hero-visual');

  // Initialize PIXI
  const app = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundAlpha: 0,
    antialias: true
  });

  visualContainer.appendChild(app.view);

  // Load assets
  const img = PIXI.Sprite.from('images/img.png');
  const depthMap = PIXI.Sprite.from('images/depth.png');
  const displacementFilter = new PIXI.DisplacementFilter(depthMap);

  app.stage.addChild(img);
  app.stage.addChild(depthMap);

  depthMap.visible = false;
  img.filters = [displacementFilter];

  // Interaction logic
  window.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    displacementFilter.scale.x = (centerX - e.clientX) / 100;
    displacementFilter.scale.y = (centerY - e.clientY) / 100;
  });
});