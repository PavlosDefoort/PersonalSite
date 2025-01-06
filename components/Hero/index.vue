<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-black"
    id="home"
  >
    <canvas id="space" class="h-full w-full absolute"> </canvas>
    <h1
      class="animate-once animate-ease-linear animate-fade font-bodoni lg:text-6xl md:text-5xl text-3xl text-blue-50 absolute"
    >
      Pavlos Defoort
    </h1>
    <h3
      class="animate-once animate-ease-linear animate-fade font-mono text-lg sm:text-xl text-slate-100 absolute top-2/3"
    >
      Scroll to start your journey
    </h3>
  </section>
</template>

<script setup lang="js">
import { Application, Assets, Sprite, MeshRope, Point } from 'pixi.js';


onMounted(async () =>
{
    // Create a new application
    const app = new Application();
    console.log(document.getElementById('space'));

    // Initialize the application
    await app.init({ canvas: document.getElementById('space'), resizeTo: window });

    // Append the application canvas to the document body

    // Load the star texture
    const starTexture = await Assets.load('https://pixijs.com/assets/star.png');

    const starAmount = 1000;
    let cameraZ = 0;
    const fov = 50;
    const baseSpeed = 0.025;
    let speed = 0;
    let warpSpeed = 0;
    const starStretch = 5;
    const starBaseSize = 0.05;

    // Create the stars
    const stars = [];

    for (let i = 0; i < starAmount; i++)
    {
        const star = {
            sprite: new Sprite(starTexture),
            z: 0,
            x: 0,
            y: 0,
        };

        star.sprite.anchor.x = 0.5;
        star.sprite.anchor.y = 0.7;
        randomizeStar(star, true);
        app.stage.addChild(star.sprite);
        stars.push(star);
    }

    function randomizeStar(star, initial)
    {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

        // Calculate star positions with radial random coordinate so no star hits the camera.
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;

        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }

    // Change flight speed every 5 seconds
    setInterval(() =>
    {
        warpSpeed = warpSpeed > 0 ? 0 : 1;
    }, 5000);

    // Listen for animate update
    app.ticker.add((time) =>
    {
        // Simple easing. This should be changed to proper easing function when used for real.
        speed += (warpSpeed - speed) / 20;
        cameraZ += time.deltaTime * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; i++)
        {
            const star = stars[i];

            if (star.z < cameraZ) randomizeStar(star);

            // Map star 3d position to 2d with really simple projection
            const z = star.z - cameraZ;

            star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
            star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

            // Calculate star scale & rotation.
            const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
            const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
            const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
            const distanceScale = Math.max(0, (2000 - z) / 2000);

            star.sprite.scale.x = distanceScale * starBaseSize;
            // Star is looking towards center so that y axis is towards center.
            // Scale the star depending on how fast we are moving, what the stretchfactor is
            // and depending on how far away it is from the center.
            star.sprite.scale.y
                = distanceScale * starBaseSize
                + (distanceScale * speed * starStretch * distanceCenter) / app.renderer.screen.width;
            star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
        }
    });


    // Load the texture for rope.
    const trailTexture = await Assets.load('https://pixijs.com/assets/trail.png');

    const historyX = [];
    const historyY = [];
    // historySize determines how long the trail will be.
    const historySize = 100;
    // ropeSize determines how smooth the trail will be.
    const ropeSize = 100;
    const points = [];

    // Create history array.
    for (let i = 0; i < historySize; i++)
    {
        historyX.push(0);

        historyY.push(0);
    }
    // Create rope points.
    for (let i = 0; i < ropeSize; i++)
    {
        points.push(new Point(0, 0));
    }

    // Create the rope
    const rope = new MeshRope({ texture: trailTexture, points });

    // Set the blendmode
    rope.blendmode = 'add';

    app.stage.addChild(rope);

    let mouseposition = null;

    app.stage.eventMode = 'static';
    app.stage.hitArea = app.screen;
    app.stage.on('mousemove', (event) =>
    {
        mouseposition = mouseposition || { x: 0, y: 0 };
        mouseposition.x = event.global.x;
        mouseposition.y = event.global.y;
    });

    // Listen for animate update
    app.ticker.add(() =>
    {
        if (!mouseposition) return;

        // Update the mouse values to history
        historyX.pop();
        historyX.unshift(mouseposition.x);
        historyY.pop();
        historyY.unshift(mouseposition.y);
        // Update the points to correspond with history.
        for (let i = 0; i < ropeSize; i++)
        {
            const p = points[i];

            // Smooth the curve with cubic interpolation to prevent sharp edges.
            const ix = cubicInterpolation(historyX, (i / ropeSize) * historySize);
            const iy = cubicInterpolation(historyY, (i / ropeSize) * historySize);

            p.x = ix;
            p.y = iy;
        }
    });

    /**
     * Cubic interpolation based on https://github.com/osuushi/Smooth.js
     */
    function clipInput(k, arr)
    {
        if (k < 0) k = 0;
        if (k > arr.length - 1) k = arr.length - 1;

        return arr[k];
    }

    function getTangent(k, factor, array)
    {
        return (factor * (clipInput(k + 1, array) - clipInput(k - 1, array))) / 2;
    }

    function cubicInterpolation(array, t, tangentFactor = 1)
    {
        const k = Math.floor(t);
        const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
        const p = [clipInput(k, array), clipInput(k + 1, array)];

        t -= k;
        const t2 = t * t;
        const t3 = t * t2;

        return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
    }
})
</script>
