import { type SketchDetails } from '@/types';
import type p5 from 'p5';

export class Sketch {
  width: number;
  height: number;
  readonly title: string;
  isPlaying: boolean;
  setupCallback: (p: p5, w: number, h: number) => void;
  drawCallback: (p: p5, w: number, h: number) => void;

  constructor({
    width = 500,
    height = 300,
    setup,
    draw,
    title,
  }: Omit<SketchDetails, 'id' | 'isPlaying'>) {
    this.width = width;
    this.height = height;
    this.title = title;
    this.isPlaying = false;
    this.setupCallback = setup;
    this.drawCallback = draw;
  }

  public sketch(p: p5) {
    p.setup = () => {
      p.createCanvas(this.width, this.height);
      this.setupCallback(p, this.width, this.height);
    };

    p.draw = () => {
      this.drawCallback(p, this.width, this.height);
    };
  }
}
