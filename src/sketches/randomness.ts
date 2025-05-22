import p5 from 'p5';
import { AdvancedWalker, Walker } from '@/domains/walker';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import type {
  RandomDistributionGraphKeys,
  RandomDistributionRecords,
} from '@/types';

export const RandomWalker = function (p: p5) {
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

export const AdvancedRandomWalker = function (p: p5) {
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

export const NormalDistributionGraph = function (p: p5) {
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
