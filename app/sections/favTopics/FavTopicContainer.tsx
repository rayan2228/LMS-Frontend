import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"
import TopicCard from "./TopicCard"
import { FC } from "react"

const FavTopicContainer: FC = () => {
    return (
        <section style={{ background: "url(/favTopics/bg.png) no-repeat center", backgroundSize: "cover" }} className=" py-32">
            <Title title="Our Categories" className="items-center text-white" subtitle="Favorite Topics To Learn" subtitleClass="font-bold text-heading  text-[40px] w-[590px] text-center text-white leading-10 " />
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