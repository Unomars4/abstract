import p5 from 'p5';
import {
  AdvancedWalker,
  DownRightWalker,
  DynamicWalker,
  Walker,
} from '@/domains/walker';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

/**
 * Sketch displaying a Basic 4 direction walker
 */
const RandomWalker = function (p: p5) {
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
};

/*
 * Sketch displaying a 8 directional walker
 */
const AdvancedRandomWalker = function (p: p5) {
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
};

/*
 * Walker has a higher tendancy to go down and to the right
 */
const DownRightRandomWalker = function (p: p5) {
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
};

/**
 * Sketch with a walker that has a higher tendancy to follow the users mouse position
 */
const DynamicRandomWalker = function (p: p5) {
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
};

/**
 * Sketch displaying how evenly distributed random are generated
 * for numbers between 1-20
 */
const NormalDistributionGraph = function (p: p5) {
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
};

/**
 * Sketch displaying Gaussian distributed randomness using circle positions
 * as indicators
 */
const GaussianGraph = function (p: p5) {
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
};

/**
 * Sketch displaying Gaussian distributed color splattering
 */
const GaussianColorSplatter = function (p: p5) {
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
};

/**
 * Sketch displaying the Gaussian walker
 * Gaussian distribution used to determine the walkers step size
 */
const GaussianWalker = function (p: p5) {
  const walker;
};

export default [
  GaussianColorSplatter,
  GaussianGraph,
  DynamicRandomWalker,
  DownRightRandomWalker,
  NormalDistributionGraph,
  RandomWalker,
  AdvancedRandomWalker,
];
