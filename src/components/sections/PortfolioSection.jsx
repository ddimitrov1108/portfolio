import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionMain from "./components/SectionMain";

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="h-screen grid items-center">
      <div className="hidden-section w-full">
        <SectionHeader number={3} text="<things i have built>" />
        <SectionMain>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          accusamus id porro cumque distinctio eos quos, ullam doloremque nam
          cupiditate sint ea optio, neque suscipit esse est animi eum aperiam
          quam. Temporibus non, voluptatum ullam deleniti ut numquam, modi ea
          corporis omnis blanditiis voluptas! Possimus officiis alias quis?
          Ipsum, nulla.
        </SectionMain>
        <SectionFooter text="</things i have built>" />
      </div>
    </div>
  );
}
