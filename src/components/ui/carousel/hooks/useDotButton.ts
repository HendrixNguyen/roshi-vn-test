import { useCallback, useEffect, useState } from "react";
import { CarouselApi } from "..";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export default function useDotButton(emblaApi: CarouselApi): UseDotButtonType {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    setScrollSnaps(emblaApi?.scrollSnapList() ?? []);
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() ?? 0);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi?.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}
