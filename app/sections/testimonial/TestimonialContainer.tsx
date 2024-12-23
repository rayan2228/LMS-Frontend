import { FC, useEffect, useState } from "react";
import Container from "~/components/Container";
import TestimonialCard from "./TestimonialCard";
import Title from "~/components/Title";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="absolute rounded-lg -bottom-36 left-[48%] bg-primary w-16 h-16  flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 hover:bg-secondary transition-colors cursor-pointer"
            onClick={onClick}
        >
            <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_324_36005)">
                    <path d="M16.5042 9.18443L3.31779 9.18443L7.2866 5.21561C7.35822 5.14645 7.41534 5.06371 7.45464 4.97223C7.49394 4.88074 7.51462 4.78235 7.51549 4.68279C7.51635 4.58323 7.49738 4.48449 7.45968 4.39234C7.42198 4.30019 7.3663 4.21647 7.2959 4.14607C7.22549 4.07567 7.14178 4.01999 7.04962 3.98229C6.95747 3.94459 6.85874 3.92562 6.75918 3.92648C6.65962 3.92735 6.56122 3.94803 6.46974 3.98733C6.37826 4.02663 6.29552 4.08375 6.22635 4.15537L0.977594 9.40412C0.837024 9.54474 0.758056 9.73542 0.758056 9.93425C0.758056 10.1331 0.837023 10.3238 0.977593 10.4644L6.22635 15.7131C6.36777 15.8497 6.55718 15.9253 6.75378 15.9236C6.95038 15.9219 7.13844 15.843 7.27747 15.704C7.41649 15.565 7.49535 15.3769 7.49706 15.1803C7.49877 14.9837 7.42319 14.7943 7.2866 14.6529L3.31779 10.6841L16.5042 10.6841C16.703 10.6841 16.8938 10.6051 17.0344 10.4645C17.175 10.3238 17.254 10.1331 17.254 9.93425C17.254 9.73539 17.175 9.54467 17.0344 9.40405C16.8938 9.26343 16.703 9.18443 16.5042 9.18443Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_324_36005">
                        <rect width="17.9957" height="17.9957" fill="white" transform="translate(0.00805664 0.936401)" />
                    </clipPath>
                </defs>
            </svg>



        </div>
    );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="absolute rounded-lg -bottom-36 right-[40%] bg-primary w-16 h-16  flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 hover:bg-secondary transition-colors cursor-pointer"
            onClick={onClick}
        >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50004 9.75006L14.6895 9.75006L10.7198 13.7198C10.6482 13.789 10.591 13.8718 10.5517 13.9633C10.5124 14.0548 10.4917 14.1532 10.4909 14.2528C10.49 14.3523 10.509 14.4511 10.5467 14.5433C10.5844 14.6354 10.6401 14.7192 10.7105 14.7896C10.7809 14.86 10.8647 14.9157 10.9568 14.9534C11.049 14.9911 11.1478 15.0101 11.2473 15.0092C11.3469 15.0084 11.4453 14.9877 11.5368 14.9484C11.6283 14.9091 11.7111 14.8519 11.7803 14.7803L17.0303 9.53031C17.1709 9.38967 17.2499 9.19893 17.2499 9.00006C17.2499 8.80119 17.1709 8.61046 17.0303 8.46981L11.7803 3.21981C11.6388 3.08319 11.4494 3.0076 11.2527 3.0093C11.0561 3.01101 10.868 3.08989 10.7289 3.22895C10.5899 3.368 10.511 3.55611 10.5093 3.75276C10.5076 3.94941 10.5832 4.13886 10.7198 4.28031L14.6895 8.25006L1.50004 8.25006C1.30113 8.25006 1.11036 8.32908 0.969708 8.46973C0.829056 8.61038 0.750039 8.80115 0.750039 9.00006C0.750039 9.19897 0.829056 9.38974 0.969708 9.53039C1.11036 9.67104 1.30113 9.75006 1.50004 9.75006Z" fill="white" />
            </svg>
        </div>
    );
};

export { SampleNextArrow, SamplePrevArrow };

const TestimonialContainer: FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Only render on the client
    }, []);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section
            style={{ background: "url(/testimonial/bg.png) no-repeat center center / cover" }}
            className="py-32"
        >
            <Container>
                <Title
                    title="Our Team"
                    className="items-center text-center"
                    subtitle="What Our Student Feedback"
                    subtitleClass="font-bold text-heading text-[40px] w-[590px] mx-auto leading-10"
                />
                <div className="mt-10">
                    {isClient && (
                        <Slider {...settings}>
                            <TestimonialCard
                                clientImg="/course/author1.png"
                                clientName="Savannah Nguyen"
                                feedback="Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet."
                                designation="UI/UX Designer"
                            />
                            <TestimonialCard
                                clientImg="/course/author2.png"
                                clientName="Cameron Williamson"
                                feedback="Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet."
                                designation="Web Developer"
                            />
                            <TestimonialCard
                                clientImg="/course/author3.png"
                                clientName="Leslie Alexander"
                                feedback="Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet."
                                designation="Product Manager"
                            />
                        </Slider>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default TestimonialContainer;
