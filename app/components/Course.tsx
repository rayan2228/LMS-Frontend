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
        <div className="w-[32%] relative bg-white rounded-xl p-8 shadow-custom transition-all courseTitleHover capitalize hover:border-primary border ">
            {/* Course Thumbnail */}
            <div className="absolute top-0 -translate-y-1/2 right-0 w-56 h-56 border-8 border-[#E4E4E4] rounded-full ">
                <Image sources={[{ srcSet: imageSrc }]} alt="Course thumbnail" />
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center z-50 absolute  -translate-y-1/2 top-10 left-0 hover:bg-secondary transition-colors cursor-pointer">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5408 2.91734C17.5543 1.79805 16.1859 1.18164 14.6875 1.18164C12.5802 1.18164 11.246 2.44023 10.4979 3.49609C10.3038 3.77008 10.1386 4.04481 10 4.30332C9.86137 4.04481 9.69629 3.77008 9.50215 3.49609C8.75402 2.44023 7.41984 1.18164 5.3125 1.18164C3.81414 1.18164 2.44566 1.79809 1.45918 2.91738C0.518242 3.98512 0 5.41512 0 6.94395C0 8.60813 0.649727 10.156 2.04473 11.815C3.29148 13.2979 5.08512 14.8263 7.16211 16.5962C7.93605 17.2557 8.73641 17.9377 9.58848 18.6832L9.61406 18.7057C9.72453 18.8024 9.86227 18.8507 10 18.8507C10.1377 18.8507 10.2755 18.8023 10.3859 18.7057L10.4115 18.6832C11.2636 17.9377 12.0639 17.2557 12.838 16.5961C14.9149 14.8263 16.7085 13.2979 17.9553 11.815C19.3503 10.1559 20 8.60813 20 6.94395C20 5.41512 19.4818 3.98512 18.5408 2.91734ZM12.0779 15.7042C11.4107 16.2727 10.724 16.8579 10 17.4873C9.27602 16.8579 8.58934 16.2728 7.92203 15.7041C3.85723 12.2404 1.17188 9.95203 1.17188 6.94395C1.17188 5.70059 1.58613 4.54574 2.33836 3.69219C3.09922 2.82895 4.15543 2.35352 5.3125 2.35352C6.9191 2.35352 7.95766 3.34328 8.54594 4.17359C9.07363 4.91828 9.34898 5.66898 9.44289 5.95715C9.52145 6.19836 9.74633 6.3616 10 6.3616C10.2537 6.3616 10.4786 6.19836 10.5571 5.95715C10.651 5.66898 10.9264 4.91828 11.4541 4.17356C12.0423 3.34328 13.0809 2.35352 14.6875 2.35352C15.8446 2.35352 16.9008 2.82895 17.6616 3.69219C18.4139 4.54574 18.8281 5.70059 18.8281 6.94395C18.8281 9.95203 16.1428 12.2404 12.0779 15.7042Z" fill="white" />
                    </svg>

                </div>
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
