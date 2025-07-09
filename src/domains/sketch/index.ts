import { type SketchDetails } from '@/types';
import type p5 from 'p5';

export class Sketch {
  constructor({ title }: Omit<SketchDetails, 'id' | 'isPlaying'>) {}

  public sketch(p: p5) {}
}
