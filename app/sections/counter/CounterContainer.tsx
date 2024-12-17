import { FC } from "react"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import CounterCard from "./CounterCard"

const CounterContainer: FC = () => {
    return (
        <section style={{ background: "url(/counter/counterbg.png) no-repeat " }} className="bg-cover border-b border-b-primary py-24">
            <Container>
                <Flex className="gap-6 ">
                    <CounterCard />
                    <CounterCard />
                    <CounterCard />
                    <CounterCard />
                </Flex>
            </Container>
        </section>
    )
}
export default CounterContainer