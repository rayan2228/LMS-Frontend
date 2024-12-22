import { FC } from "react"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"

const MentorContainer: FC = () => {
    return (
        <section style={{ background: "url(/mentor/bg.png) no-repeat center", backgroundSize: "cover" }} className=" py-32 bg-cover">
            <Title title="Our Team" className=" justify-center" />
            <Container>
                <Flex className="items-center gap-x-6 mt-[180px] flex-wrap gap-y-44">
                    <div>hello</div>
                </Flex>
            </Container>
        </section>
    )
}
export default MentorContainer