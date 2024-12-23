import { FC } from "react";
import Flex from "~/components/Flex"
import Image from "~/components/Image"

interface TestimonialCardProps {
    feedback: string;
    clientImg: string;
    clientName: string;
    designation: string;
}3

const TestimonialCard: FC<TestimonialCardProps> = ({ feedback, clientImg, clientName, designation }) => {
    return (
        <div className="mx-5 rounded-lg bg-white p-5 relative overflow-hidden">
            <Image sources={[{ srcSet: "/testimonial/texture.png" }]} alt="texture" className="absolute top-0 left-0" />
            <Image sources={[{ srcSet: "/testimonial/wave.png" }]} alt="texture" className="absolute bottom-0 left-0" />
            <Flex className="items-center gap-1 my-3">
                {Array.from({ length: 5 }, (_, i) => (
                    <svg
                        key={i}
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.93519 0.738354C6.18448 0.236621 6.90021 0.236621 7.1495 0.738354L8.58528 3.62811C8.684 3.8268 8.87369 3.96461 9.09316 3.9971L12.2852 4.46963C12.8394 4.55167 13.0605 5.23238 12.6604 5.62451L10.3558 7.883C10.1973 8.03829 10.1249 8.26128 10.1618 8.48004L10.6988 11.6618C10.792 12.2143 10.2129 12.635 9.71636 12.3756L6.85623 10.8817C6.65958 10.7789 6.42511 10.7789 6.22846 10.8817L3.36833 12.3756C2.87174 12.635 2.2927 12.2143 2.38593 11.6618L2.92292 8.48004C2.95984 8.26128 2.88738 8.03829 2.72893 7.883L0.424286 5.62451C0.0241436 5.23237 0.245317 4.55167 0.799528 4.46963L3.99153 3.9971C4.211 3.96461 4.40069 3.8268 4.4994 3.62811L5.93519 0.738354Z"
                            fill={i < 5 ? "#F57005" : "#E4E4E4"}
                        />
                    </svg>
                ))}
            </Flex>
            <p className="font-medium text-lg text-text">{feedback}</p>
            <Flex className="py-3  rounded-lg items-center gap-3 ">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image sources={[{ srcSet: clientImg }]} alt={"aa"} />
                </div>
                <Flex className="gap-3 items-center justify-between flex-grow">
                    <div>
                        <h3 className="font-bold text-base text-heading">{clientName}</h3>
                        <h4 className="font-medium text-text text-xs uppercase">{designation}</h4>
                    </div>
                </Flex>
            </Flex>
        </div>
    )
}
export default TestimonialCard