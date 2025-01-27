import Container from "~/components/Container";
import Flex from "~/components/Flex";
import Image from "~/components/Image";
import Oval from "./shapes/Oval";
import BgShape from "./shapes/BgShape";
import { FC } from "react";
import ZicZac from "./shapes/ZicZac";
import Button from "~/components/Button";

const Banner: FC = () => {
  return (
    <section
      style={{ background: "url(/banner/bg.png) no-repeat center center /cover" }}
      className="pt-28 pb-40 relative  "
    >
      {/* ZicZac decoration */}
      <ZicZac />

      {/* Pencil Image */}
      <span className="absolute bottom-14 left-32 movement">
        <Image
          sources={[{ srcSet: "/banner/pencil.png" }]}
          alt="pencil"
          width={"100%"}
        />
      </span>

      <Container>
        <Flex className="items-center">
          {/* Text Section */}
          <div>
            <h1 className="font-bold text-[70px] text-heading w-[550px] leading-[70px]">
              Come along as we begin our learning{" "}
              <span className="relative">
                journey
                <Oval />
              </span>
            </h1>
            <p className="text-base text-text leading-8 mt-10">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary,
            </p>
            <Button text="Try for free" link="/about" className="bg-secondary mt-10" />
          </div>

          {/* Image Section */}
          <div className="relative z-10">
            <BgShape />

            {/* Arrow Image */}
            <span className="absolute -bottom-32 -left-64 movement">
              <Image
                sources={[{ srcSet: "/banner/arrow.png" }]}
                alt="arrow"
                width={"100%"}
              />
            </span>

            {/* Bulb Image */}
            <span className="absolute top-10 left-24 movement">
              <Image
                sources={[{ srcSet: "/banner/bulb.png" }]}
                alt="bulb"
                width={"100%"}
              />
            </span>

            {/* Dots Image (Behind Other Elements) */}
            <span className="absolute top-10 left-0 -z-10 rotation">
              <Image
                sources={[{ srcSet: "/banner/dots.png" }]}
                alt="dots"
                width={"100%"}
              />
            </span>

            {/* Book Image */}
            <span className="absolute -bottom-16 left-[40%] movement">
              <Image
                sources={[{ srcSet: "/banner/book.png" }]}
                alt="book"
                width={"100%"}
              />
            </span>

            {/* Banner Image */}
            <div className="ml-auto rounded-tl-full rounded-bl-full border-[17px] border-white overflow-x-hidden border-r-0">
              <Image
                sources={[{ srcSet: "/banner/banner.jpg" }]}
                alt="banner"
                width={"100%"}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
