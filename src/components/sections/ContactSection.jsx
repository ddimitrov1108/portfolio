import SectionHeader from "./components/SectionHeader";

export default function ContactSection() {
  return (
    <div id="contact" className="h-screen flex items-start py-4 lg:items-center">
      <div className="hidden-section w-full grid justify-start">
        <SectionHeader number={4} text="Say Hi" />
        <div className="section-main">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            alias quia earum in blanditiis consectetur quo voluptatem nisi.
            Aliquam sunt ipsa, molestiae a fugit quidem delectus ducimus quam
            reiciendis cupiditate non at velit ipsam. Officiis autem magnam
            voluptas asperiores? Cum, numquam? Deserunt, fugit minus quis dolor
            reiciendis non culpa. Eveniet, nulla eligendi quae exercitationem
            ipsam, molestias, enim asperiores reiciendis esse cumque aperiam
            hic? Quis alias sit nostrum sequi pariatur, ipsum ad, magni
            repellat, optio totam dignissimos. Sint ea tenetur delectus
            molestias, doloremque veritatis accusantium obcaecati debitis. Nemo
            aperiam ducimus dicta veniam, architecto, animi eaque, reprehenderit
            unde voluptatem assumenda error ab!
          </p>
        </div>
      </div>
    </div>
  );
}
