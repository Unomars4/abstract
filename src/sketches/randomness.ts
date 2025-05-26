import p5 from 'p5';
import {
  AdvancedWalker,
  DownRightWalker,
  DynamicWalker,
  Walker,
} from '@/domains/walker';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

// Basic 4 direction walker
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

// 8 direction walker
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

//Walker has a higher tendancy to go down and to the right
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

//Walker has a higher tendancy to go down and to the right
const DynamicRandomWalker = function (p: p5) {
  let walker: DynamicWalker;
  p.setup = function () {
    p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    walker = new DynamicWalker(p);
    p.background(255);
  };

  p.draw = function () {
    walker.step();
    walker.show();
  };
};

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

export default [
  DynamicRandomWalker,
  DownRightRandomWalker,
  NormalDistributionGraph,
  RandomWalker,
  AdvancedRandomWalker,
];
