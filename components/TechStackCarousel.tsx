import TechIcon from "./utils/TechIcon";
import { techStackIcons } from "./constants";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const TechStackCarousel = () => (
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
          <TechIcon tech={icon} size={42} />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);
export default TechStackCarousel;
