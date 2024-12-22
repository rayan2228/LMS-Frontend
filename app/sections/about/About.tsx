import { FC } from "react";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Flex from "~/components/Flex";
import Image from "~/components/Image";
import Title from "~/components/Title";

// Reusable Icon and Text Component with dynamic circle color
const FeatureItem: FC<{ icon: JSX.Element, text: string, circleColor?: 'primary' | 'secondary' }> = ({ icon, text, circleColor = 'primary' }) => (
    <Flex className="w-1/2 font-bold text-xl text-heading items-center gap-4">
        <div className={`rounded-full p-3 ${circleColor === 'primary' ? 'bg-primary' : 'bg-secondary'}`}>
            {icon}
        </div>
        <h4>{text}</h4>
    </Flex>
);

const About: FC = () => {
    // Reusable SVG icon
    const arrowIcon = (
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2454 12.8379C5.05696 12.8379 4.86851 12.7658 4.72495 12.6222L0.215947 8.11306C-0.0719823 7.82527 -0.0719823 7.35994 0.215947 7.07215C0.503741 6.78436 0.96893 6.78436 1.25686 7.07215L5.2454 11.0607L13.7432 2.56301C14.031 2.27522 14.4962 2.27522 14.7841 2.56301C15.0719 2.85094 15.0719 3.31613 14.7841 3.60406L5.766 12.6222C5.62244 12.7658 5.43385 12.8379 5.2454 12.8379Z" fill="white" />
        </svg>
    );

    return (
        <section className="my-32">
            <Container>
                <Flex className="gap-16 items-center">
                    <div className="w-1/2 relative">
                        <div className="absolute top-0 -left-44 bg-white rounded-xl pt-10 pb-7 px-14 shadow-custom text-center">
                            <h4 className="font-bold text-[40px] text-secondary">+230</h4>
                            <p className="font-semibold text-xl text-text">Awesome Awards</p>
                            <div className="absolute -top-0 left-8 bg-primary -translate-y-1/2 p-3 rounded-xl">
                                <Image sources={[{ srcSet: "about/trophy.png" }]} alt="award" />
                            </div>
                            <div className="absolute top-20 -left-16 rotation -translate-y-1/2 p-3 rounded-xl -z-10">
                                <Image sources={[{ srcSet: "about/oval.png" }]} alt="award" />
                            </div>
                        </div>
                        <div className="rounded-[500px] overflow-hidden w-max ml-auto">
                            <Image sources={[{ srcSet: "about/about.jpg" }]} alt="about" />
                        </div>
                        <div className="rounded-[500px] overflow-hidden w-max absolute -left-44 bottom-0 border-[10px] border-white">
                            <Image sources={[{ srcSet: "about/about1.jpg" }]} alt="about" />
                        </div>
                        <div className="absolute bottom-0 left-16 bg-primary -translate-y-1/2 p-3 rounded-xl z-20">
                            <Image sources={[{ srcSet: "/bulb.png" }]} alt="award" />
                        </div>
                        <div className="absolute -bottom-20 left-16 movement -translate-y-1/2 p-3 rounded-xl z-10">
                            <Image sources={[{ srcSet: "about/fly.png" }]} alt="award" />
                        </div>
                        <div className="absolute -bottom-8 -left-48 rotation -translate-y-1/2 p-3 rounded-xl -z-10">
                            <Image sources={[{ srcSet: "about/dots.png" }]} alt="award" />
                        </div>
                    </div>
                    <div>
                        <Title title="about us" subtitle="Establishing a community that encourages lifelong learning" subtitleClass="font-bold text-[40px] text-heading leading-[47px]" />
                        <p className="font-semibold text-lg text-text leading-6 mt-10">
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                        </p>
                        <div className="bg-[#F6F6F6] rounded-xl mt-10 relative">
                            <p className="font-semibold text-base text-text leading-6 pt-14 pb-6 pl-32">
                                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <div className="absolute top-0 left-0 rounded-xl">
                                <Image sources={[{ srcSet: "about/shape.png" }]} alt="award" />
                                <h3 className="font-bold text-xl text-white absolute top-1 right-5">Flexible Classes</h3>
                                <div className="absolute bottom-5 left-5">
                                    <Image sources={[{ srcSet: "about/presentation.png" }]} alt="presentation" />
                                </div>
                            </div>
                        </div>
                        <Flex className="flex-wrap mt-10 gap-y-4">
                            {/* Reuse the FeatureItem component with different circle colors */}
                            <FeatureItem icon={arrowIcon} text="Free Incoming method" circleColor="primary" />
                            <FeatureItem icon={arrowIcon} text="Provide Best Support" circleColor="secondary" />
                            <FeatureItem icon={arrowIcon} text="Expert Many Teacher" circleColor="secondary" />
                            <FeatureItem icon={arrowIcon} text="Lifetime access" circleColor="primary" />
                        </Flex>
                        <Button text="Discover More" link="/about" className="bg-primary mt-10" />
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default About;
