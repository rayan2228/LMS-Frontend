import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"
import TopicCard from "~/components/TopicCard"

const FavTopicContainer = () => {
    return (
        <section style={{ background: "url(/favTopics/bg.png) no-repeat center", backgroundSize: "cover" }} className=" py-32">
            <Title title="Our Categories" className="text-white justify-center" />
            <h2 className="font-bold text-[40px] text-white text-center">Favorite Topics To Learn</h2>
            <Container>
                <Flex className=" mt-10 items-center">
                    <TopicCard />
                    <TopicCard />
                    <TopicCard />
                    <TopicCard />
                </Flex>
            </Container>
        </section>
    )
}
export default FavTopicContainer