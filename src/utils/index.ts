import type { SketchDetails } from '@/types';
import * as d3 from 'd3';

export const dateParse = d3.timeParse('%Y-%m-%d');

export const dateFormatter = (
  dateStr: string,
  shortVersion: boolean = false,
): string => {
  return new Date(dateStr).toLocaleDateString('en-za', {
    weekday: undefined,
    month: 'short',
    year: shortVersion ? undefined : 'numeric',
    day: shortVersion ? undefined : 'numeric',
  });
};

export function createSketch({
  title,
  sketch,
}: Omit<SketchDetails, 'id' | 'isPlaying'>): SketchDetails {
  return {
    title,
    id: 0,
    sketch,
    isPlaying: false,
  };
}
