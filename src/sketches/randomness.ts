import p5 from 'p5';
import {
  AdvancedWalker,
  DownRightWalker,
  DynamicWalker,
  GaussianWalker,
  LevyFlightWalker,
  PerlinStepWalker,
  Walker,
} from '@/domains/walker';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import { createSketch } from '@/utils';

/**
 * Sketch displaying a Basic 4 direction walker
 */
const RandomWalker = createSketch({
  title: 'Basic 4 direction walker',
  sketch: function (p: p5) {
    let walker: Walker;
    p.setup = function () {
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
      walker = new Walker(p);
      p.background(255);
    };

    p.draw = function () {
      walker.step();
      walker.show();
    };
  },
});

/*
 * Sketch displaying a 8 directional walker
 */
const AdvancedRandomWalker = createSketch({
  title: '8 directional walker',
  sketch: function (p: p5) {
    let walker: AdvancedWalker;
    p.setup = function () {
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
      walker = new AdvancedWalker(p);
      p.background(255);
    };

    p.draw = function () {
      walker.step();
      walker.show();
    };
  },
});

/*
 * Walker has a higher tendancy to go down and to the right
 */
const DownRightRandomWalker = createSketch({
  title: 'Walker with tendancy to go down and to the right',
  sketch: function (p: p5) {
    let walker: DownRightWalker;
    p.setup = function () {
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
      walker = new DownRightWalker(p);
      p.background(255);
    };

    p.draw = function () {
      walker.step();
      walker.show();
    };
  },
});

/**
 * Sketch with a walker that has a higher tendancy to follow the users mouse position
 */
const DynamicRandomWalker = createSketch({
  title: 'Walker looking for the mouse.',
  sketch: function (p: p5) {
    let walker: DynamicWalker;

    p.setup = function () {
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
      walker = new DynamicWalker(p);
      p.background(255);
    };

    p.draw = function () {
      const mouseX = p.mouseX,
        mouseY = p.mouseY;

      walker.step({
        mouseX,
        mouseY,
        screenWidth: SCREEN_WIDTH,
        screenHeight: SCREEN_HEIGHT,
      });

      walker.show();
    };
  },
});

/**
 * Sketch displaying how evenly distributed random are generated
 * for numbers between 1-20
 */
const NormalDistributionGraph = createSketch({
  title: 'Normal Distribution graph over time between 1 - 20',
  sketch: function (p: p5) {
    const randomCounts: number[] = [],
      totalBars = 20,
      widthOfBars = SCREEN_WIDTH / totalBars;

    p.setup = function () {
      p.background(255);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
      for (let i = 0; i < totalBars; i++) {
        randomCounts[i] = 0;
      }
    };

    p.draw = function () {
      p.background(255);
      let randomNumber = p.floor(p.random(randomCounts.length));
      randomCounts[randomNumber]++;
      p.fill(170, 170, 170);

      for (let i = 0; i < randomCounts.length; i++) {
        p.rect(
          i * widthOfBars,
          SCREEN_HEIGHT - randomCounts[i],
          widthOfBars - 1,
          randomCounts[i],
        );
      }
    };
  },
});

/**
 * Sketch displaying Gaussian distributed randomness using circle positions
 * as indicators
 */
const GaussianGraph = createSketch({
  title: 'Gaussian distributed randomness using circle positions as indicators',
  sketch: function (p: p5) {
    p.setup = function () {
      p.background(255);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    };

    p.draw = function () {
      const x = 60 * p.randomGaussian() + SCREEN_WIDTH / 2;

      p.noStroke();
      p.fill(0, 10);
      p.circle(x, SCREEN_HEIGHT / 2, 16);
    };
  },
});

/**
 * Sketch displaying Gaussian distributed color splattering
 */
const GaussianColorSplatter = createSketch({
  title: 'Gaussian distributed paint splattering',
  sketch: function (p: p5) {
    const std = 60;

    p.setup = function () {
      p.background(255);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    };

    p.draw = function () {
      const x = p.randomGaussian(SCREEN_WIDTH / 2, std),
        y = p.randomGaussian(SCREEN_HEIGHT / 2, std),
        circleFill = p.color(`hsla(${Math.floor(x)}, 100%, 50%, 0.15)`);

      p.noStroke();
      p.fill(circleFill);
      p.circle(x, y, 16);
    };
  },
});

/**
 * Sketch displaying the Gaussian walker
 * Gaussian distribution used to determine the walkers step size
 */
const GaussianWalkerSketch = createSketch({
  title: 'Gaussian distribution determining walkers step size.',
  sketch: function (p: p5) {
    let walker: GaussianWalker;

    p.setup = function () {
      p.background(255);
      walker = new GaussianWalker(p);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    };

    p.draw = function () {
      walker.step();
      walker.show();
    };
  },
});

/**
 * Sketch displaying custom distribution randomness or levy flight, Walker takes larger random steps
 * every some often to reduce oversampling.
 */
const CustomDistributionWalker = createSketch({
  title: 'Walker utilising Levy flight randomness.',
  sketch: function (p: p5) {
    let walker: LevyFlightWalker;

    p.setup = function () {
      p.background(255);
      walker = new LevyFlightWalker(p);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    };

    p.draw = function () {
      walker.step();
      walker.show();
    };
  },
});

/**
 * Sketch displaying Perlin noise randomness, Walker's step size is mapped to
 * the result of the noise function.
 */
const PerlinStepSizeWalker = createSketch({
  title: 'Perlin noise walker, walker step size mapped to noise',
  sketch: function (p: p5) {
    let walker: PerlinStepWalker;

    p.setup = function () {
      p.background(255);
      walker = new PerlinStepWalker(p);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    };

    p.draw = function () {
      walker.step();
      walker.show();
    };
  },
});

/*
 * Sketch displaying 2D noise with the noiseDetail function to determine the colors
 * on the sketch
 */
const TwoDimNoise = createSketch({
  title: '2D Noise',
  sketch: function (p: p5) {
    p.setup = function () {
      p.background(255);
      p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    };

    p.draw = function () {
      const noiseLevel = 255,
        noiseFactor = 0.02;

      for (let i = 0; i < SCREEN_HEIGHT; i++) {
        for (let j = 0; j < SCREEN_WIDTH; j++) {
          const nx = noiseFactor * j,
            ny = noiseFactor * i;

          p.noiseDetail(2, 0.25);

          const c = noiseLevel * p.noise(nx, ny);

          p.stroke(c);
          p.point(j, i);
        }
      }
    };
  },
});

export default [
  PerlinStepSizeWalker,
  CustomDistributionWalker,
  GaussianWalkerSketch,
  GaussianColorSplatter,
  GaussianGraph,
  DynamicRandomWalker,
  DownRightRandomWalker,
  RandomWalker,
  AdvancedRandomWalker,
];
