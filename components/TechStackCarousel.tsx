import Image from "next/image";
import { techStackIcons } from "./constants";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const TechStackCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent>
        {techStackIcons.map((icon) => (
          <CarouselItem
            key={icon}
            className="grid items-center justify-center basis-[90.66px]"
          >
            <Image
              src={`/tech/${icon}`}
              alt={icon}
              width={48}
              height={48}
              className="select-none"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default TechStackCarousel;
