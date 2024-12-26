import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"
import BlogCard from "./BlogCard"

const BlogContainer = () => {
    return (
        <section className=" bg-[#e4e4e430] py-40">
            <Title title="Latest Blog" className="items-center " subtitle="Latest Updates & Articles" subtitleClass="font-bold text-heading  text-[40px] w-[590px] text-center  leading-10 " />
            <Container>
                <Flex className="items-center  flex-wrap justify-between mt-10">
                    <BlogCard category="Development" date="26 Mar, 2023" link="/" altText="blog" imageSrc="./blog/blog1.jpg" authorName="jhon sajib" authorImageSrc="./course/author1.png" authorRole="mern stack" title="The Complete Web Developer Guideline 2023" />
                    <BlogCard category="Development" date="26 Mar, 2023" link="/" altText="blog" imageSrc="./blog/blog1.jpg" authorName="jhon sajib" authorImageSrc="./course/author1.png" authorRole="mern stack" title="The Complete Web Developer Guideline 2023" />
                    <BlogCard category="Development" date="26 Mar, 2023" link="/" altText="blog" imageSrc="./blog/blog1.jpg" authorName="jhon sajib" authorImageSrc="./course/author1.png" authorRole="mern stack" title="The Complete Web Developer Guideline 2023" />
                </Flex>
            </Container>
        </section>
    )
}
export default BlogContainer