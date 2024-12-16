import { FC } from "react"
import Button from "~/components/Button"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Image from "~/components/Image"

const About: FC = () => {
    return (
        <section className="my-32">
            <Container>
                <Flex className="gap-16 items-center">
                    <div className="w-1/2 relative ">
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
                            <Image sources={[{ srcSet: "about/bulb.png" }]} alt="award" />
                        </div>
                        <div className="absolute -bottom-20 left-16 movement -translate-y-1/2 p-3 rounded-xl z-10">
                            <Image sources={[{ srcSet: "about/fly.png" }]} alt="award" />
                        </div>
                        <div className="absolute -bottom-8 -left-48 rotation -translate-y-1/2 p-3 rounded-xl -z-10">
                            <Image sources={[{ srcSet: "about/dots.png" }]} alt="award" />
                        </div>
                    </div>
                    <div>
                        <Flex className="items-center gap-4">
                            <h3 className="font-bold text-2xl text-primary">About Us</h3>
                            <Flex className="items-center gap-1">
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.84 6.58039L0 12.2604V8.65039L3.59 6.58039L0 4.51039V0.900391L9.84 6.58039Z" fill="#F57005" />
                                </svg>
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.84 6.58039L0 12.2604V8.65039L3.59 6.58039L0 4.51039V0.900391L9.84 6.58039Z" fill="#F57005" />
                                </svg>
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.84 6.58039L0 12.2604V8.65039L3.59 6.58039L0 4.51039V0.900391L9.84 6.58039Z" fill="#F57005" />
                                </svg>
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.84 6.58039L0 12.2604V8.65039L3.59 6.58039L0 4.51039V0.900391L9.84 6.58039Z" fill="#F57005" />
                                </svg>
                            </Flex>

                        </Flex>
                        <h2 className="font-bold text-[40px] text-heading leading-[47px]">Establishing a community that encourages lifelong learning</h2>
                        <p className="font-semibold text-lg text-text leading-6 mt-10">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks </p>
                        <div className="bg-[#F6F6F6] rounded-xl mt-10 relative">
                            <p className="font-semibold text-base text-text leading-6 pt-14 pb-6 pl-32 ">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <div className="absolute top-0 left-0 rounded-xl">
                                <Image sources={[{ srcSet: "about/shape.png" }]} alt="award" />
                                <h3 className="font-bold text-xl text-white absolute top-1 right-5">Flexible Classes</h3>
                                <div className="absolute  bottom-5 left-5">
                                    <Image sources={[{ srcSet: "about/presentation.png" }]} alt="presentation" />
                                </div>
                            </div>
                        </div>
                        <Flex className="flex-wrap mt-10 gap-y-4">
                            <Flex className="w-1/2 font-bold text-xl text-heading items-center gap-4">
                                <div className="rounded-full p-3 bg-primary">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.2454 12.8379C5.05696 12.8379 4.86851 12.7658 4.72495 12.6222L0.215947 8.11306C-0.0719823 7.82527 -0.0719823 7.35994 0.215947 7.07215C0.503741 6.78436 0.96893 6.78436 1.25686 7.07215L5.2454 11.0607L13.7432 2.56301C14.031 2.27522 14.4962 2.27522 14.7841 2.56301C15.0719 2.85094 15.0719 3.31613 14.7841 3.60406L5.766 12.6222C5.62244 12.7658 5.43385 12.8379 5.2454 12.8379Z" fill="white" />
                                    </svg>
                                </div>
                                <h4>Free Incoming method</h4>
                            </Flex>
                            <Flex className="w-1/2 font-bold text-xl text-heading items-center gap-4">
                                <div className="rounded-full p-3 bg-primary">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.2454 12.8379C5.05696 12.8379 4.86851 12.7658 4.72495 12.6222L0.215947 8.11306C-0.0719823 7.82527 -0.0719823 7.35994 0.215947 7.07215C0.503741 6.78436 0.96893 6.78436 1.25686 7.07215L5.2454 11.0607L13.7432 2.56301C14.031 2.27522 14.4962 2.27522 14.7841 2.56301C15.0719 2.85094 15.0719 3.31613 14.7841 3.60406L5.766 12.6222C5.62244 12.7658 5.43385 12.8379 5.2454 12.8379Z" fill="white" />
                                    </svg>
                                </div>
                                <h4>Provide Best Support</h4>
                            </Flex>
                            <Flex className="w-1/2 font-bold text-xl text-heading items-center gap-4">
                                <div className="rounded-full p-3 bg-primary">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.2454 12.8379C5.05696 12.8379 4.86851 12.7658 4.72495 12.6222L0.215947 8.11306C-0.0719823 7.82527 -0.0719823 7.35994 0.215947 7.07215C0.503741 6.78436 0.96893 6.78436 1.25686 7.07215L5.2454 11.0607L13.7432 2.56301C14.031 2.27522 14.4962 2.27522 14.7841 2.56301C15.0719 2.85094 15.0719 3.31613 14.7841 3.60406L5.766 12.6222C5.62244 12.7658 5.43385 12.8379 5.2454 12.8379Z" fill="white" />
                                    </svg>
                                </div>
                                <h4>Expert Many Teacher </h4>
                            </Flex>
                            <Flex className="w-1/2 font-bold text-xl text-heading items-center gap-4">
                                <div className="rounded-full p-3 bg-primary">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.2454 12.8379C5.05696 12.8379 4.86851 12.7658 4.72495 12.6222L0.215947 8.11306C-0.0719823 7.82527 -0.0719823 7.35994 0.215947 7.07215C0.503741 6.78436 0.96893 6.78436 1.25686 7.07215L5.2454 11.0607L13.7432 2.56301C14.031 2.27522 14.4962 2.27522 14.7841 2.56301C15.0719 2.85094 15.0719 3.31613 14.7841 3.60406L5.766 12.6222C5.62244 12.7658 5.43385 12.8379 5.2454 12.8379Z" fill="white" />
                                    </svg>
                                </div>
                                <h4>Lifetime access </h4>
                            </Flex>
                        </Flex>
                        <Button text="Discover More" link="/about" className="bg-primary  mt-10" />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}
export default About