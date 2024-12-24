import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"

const BlogContainer = () => {
    return (
        <section className="bg-green-300">
            <Title title="Latest Blog" className="items-center " subtitle="Latest Updates & Articles" subtitleClass="font-bold text-heading  text-[40px] w-[590px] text-center  leading-10 " />
            <Container>
                <Flex>
                    <div>
                        <img src="/images/blog1.jpg" alt="blog" className="w-full h-[400px] object-cover" />
                        <div className="p-4">
                            <h1 className="text-2xl font-bold text-heading">How to become a good programmer</h1>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget turpis eget nunc.</p>
                    </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}
export default BlogContainer