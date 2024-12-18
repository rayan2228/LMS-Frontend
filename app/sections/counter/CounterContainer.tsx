import { FC } from "react"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import CounterCard from "./CounterCard"

const CounterContainer: FC = () => {
    return (
        <section style={{ background: "url(/counter/counterbg.png) no-repeat " }} className="bg-cover border-b border-b-primary py-24">
            <Container>
                <Flex className="gap-6 ">
                    <CounterCard number={"30.30k"} description="Student Enrolled" />
                    <CounterCard number={"40.30k"} description="Class completed" />
                    <CounterCard number={"88.9%"} description="satisfaction rate" />
                    <CounterCard number={"6.30+"} description="Top instructors" />
                </Flex>
            </Container>
        </section>
    )
}
export default CounterContainer