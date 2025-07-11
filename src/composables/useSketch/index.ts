export default function useSketch({
  title,
  sketchFunc,
}: {
  title: string;
  sketchFunc: () => void;
}) {
  return { sketchFunc, title };
}
