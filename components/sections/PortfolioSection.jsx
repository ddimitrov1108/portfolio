import Image from "next/image";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <Section id="portfolio" className="py-32">
      <SectionHeader className="mb-14">
        Featured Projects
        <h4 className="normal-case mt-3 font-bold text-black text-3xl">
          Each project is a unique piece of development 🧩
        </h4>
      </SectionHeader>

      <div className="grid gap-20">
        <div className="p-6 bg-white rounded-2xl flex flex-col lg:flex-row gap-8 shadow-lg">
          <div className="w-full h-full max-w-[600px] max-h-[240px] md:max-h-[300px]">
            <Link
              href="https://sellstone.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sellstone-screen.webp"
                alt="sellstone-screen.webp"
                width={1920}
                height={300}
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg overflow-hidden transition-all duration-[10000ms] ease-in-out hover:object-bottom"
              />
            </Link>
          </div>

          <div className="w-fit flex flex-col gap-6 py-4 text-center">
            <h1 className="text-xl font-bold">Marketing landing page</h1>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio beatae praesentium officia, dolor molestias alias.
              Dignissimos obcaecati debitis minus. Nisi eius id incidunt iusto
              nobis beatae, qui quas. Voluptas in ratione praesentium. Error
              quos, dolorum quidem rem culpa veritatis deserunt expedita dicta
              at aspernatur fuga numquam sint. Exercitationem mollitia
              voluptates aspernatur deserunt doloremque, ipsum, aliquid natus
              dicta, nobis provident a.
            </p>

            <div>test</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
