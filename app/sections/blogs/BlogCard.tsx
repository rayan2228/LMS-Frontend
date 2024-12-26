import { Link } from "@remix-run/react";
import { FC } from "react";
import Flex from "~/components/Flex";
import Image from "~/components/Image";

interface BlogCardProps {
    imageSrc: string;
    altText: string;
    category: string;
    date: string;
    title: string;
    authorImageSrc: string;
    authorName: string;
    authorRole: string;
    link: string;
}

const BlogCard: FC<BlogCardProps> = ({
    imageSrc,
    altText,
    category,
    date,
    title,
    authorImageSrc,
    authorName,
    authorRole,
    link,
}) => {
    return (
        <div className="w-[390px] shadow-lg rounded-xl relative courseTitleHover after:absolute  after:bg-[#6c74c741] after:rounded-xl after:transition-all after:top-0 after:left-0 after:w-full after:h-0 after:z-10  hover:after:h-full">
            <Image sources={[{ srcSet: imageSrc }]} alt={altText} classNameImg="w-full rounded-xl" />
            <div className="p-4 absolute -bottom-[20%] left-1/2 -translate-x-1/2 bg-white w-[85%] shadow-lg rounded-xl z-30">
                <Flex className="w-full items-center justify-between">
                    <h4 className="bg-primary inline-block font-semibold text-sm text-white px-3 py-2 rounded-lg">
                        {category}
                    </h4>
                    <h5 className="font-semibold text-base text-secondary">{date}</h5>
                </Flex>
                <h2 className="my-2">
                    <Link to={link} className="font-bold text-heading text-2xl inline courseTitle">
                        {title}
                    </Link>
                </h2>
                <Flex className="rounded-lg items-center gap-3 ">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image sources={[{ srcSet: authorImageSrc }]} alt={authorName} />
                    </div>
                    <Flex className="gap-3 items-center justify-between">
                        <div>
                            <h3 className="font-bold text-base text-heading">{authorName}</h3>
                            <h4 className="font-medium text-text text-xs uppercase">{authorRole}</h4>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </div>
    );
};

export default BlogCard;
