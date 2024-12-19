import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { Link } from "@remix-run/react";

// Define types for props to improve readability and reusability
interface CourseProps {
    imageSrc: string;
    duration: string;
    rating: number;
    reviews: number;
    title: string;
    authorImage: string;
    authorName: string;
    authorRole: string;
    price: string;
    lessons: number;
    link: string;
}

const Course: React.FC<CourseProps> = ({
    imageSrc,
    duration,
    rating,
    reviews,
    title,
    authorImage,
    authorName,
    authorRole,
    price,
    lessons,
    link,
}) => {
    return (
        <div className="w-[32%] relative bg-white rounded-xl p-8 hover:shadow-lg transition-all courseTitleHover capitalize hover:border-primary border ">
            {/* Course Thumbnail */}
            <div className="absolute top-0 -translate-y-1/2 right-0 w-56 h-56 border-8 border-[#E4E4E4] rounded-full overflow-hidden">
                <Image sources={[{ srcSet: imageSrc }]} alt="Course thumbnail" />
            </div>

            {/* Duration Badge */}
            <h4 className="bg-primary inline-block font-semibold text-sm text-white px-3 py-2 rounded-lg">
                {duration}
            </h4>

            {/* Rating Section */}
            <Flex className="my-5 items-center gap-2 text-sm text-heading">
                <Flex className="items-center gap-1">
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
                                fill={i < rating ? "#F57005" : "#E4E4E4"}
                            />
                        </svg>
                    ))}
                </Flex>
                <span>({reviews} Reviews)</span>
            </Flex>

            {/* Course Title */}
            <h2 className="max-w-[300px]">
                <Link to={link} className="font-bold text-heading text-xl inline  courseTitle ">
                    {title}
                </Link>
            </h2>

            {/* Author and Price Section */}
            <Flex className="bg-[#F1F2FD] py-3 px-5 rounded-lg items-center gap-3 mt-7">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={authorImage} alt={authorName} />
                </div>
                <Flex className="gap-3 items-center justify-between flex-grow">
                    <div>
                        <h3 className="font-bold text-base text-heading">{authorName}</h3>
                        <h4 className="font-medium text-text text-xs uppercase">{authorRole}</h4>
                    </div>
                    <div>
                        <h5 className="font-bold text-primary text-xl">{price}</h5>
                        <h6 className="font-medium text-secondary text-sm">{lessons} Lessons</h6>
                    </div>
                </Flex>
            </Flex>
        </div>
    );
};

export default Course;
