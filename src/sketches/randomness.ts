import p5 from 'p5';
import { AdvancedWalker, Walker } from '@/domains/walker';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

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
  let randoms = [];
  p.setup = function () {
    p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  };
};
