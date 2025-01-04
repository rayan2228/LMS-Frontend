import Button from "~/components/Button"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Image from "~/components/Image"

const Prefooter = () => {
    return (
        <section >
            <Container>
                <Flex className="items-center justify-between px-20 py-10 rounded-lg" style={{ background: "url(/prefooter/bg.png) no-repeat center center / cover" }}>
                    <div className="max-w-[400px]">
                        <h4 className="text-secondary text-right font-water text-[52px]">Get your quality</h4>
                        <h2 className="text-white font-bold  text-[48px] ">Skills certificate
                            from the edulerns</h2>
                            <Button text="Get Started Now" link="/about" className="bg-secondary " />
                    </div>
                    <div>
                        <Image sources={[{ srcSet: "/prefooter/lady.png" }]} alt="illustration" />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}
export default Prefooter