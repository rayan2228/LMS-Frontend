import Button from "~/components/Button"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Image from "~/components/Image"

const Events = () => {
    return (
        <section style={{ background: "url(/event/bg.png) no-repeat center", backgroundSize: "cover" }} className=" py-5">
            <Container>
                <Flex className="items-center justify-between text-white  relative">
                    <div>
                        <h2 className="font-bold text-[40px] ">Create Your Free Account</h2>
                        <div className="bg-[rgba(255,252,252,0.12)] rounded-lg p-5 mt-5 ">
                            <p>Get started with educAct today. Create your free account now!</p>
                        </div>

                        <Button text="Join Now" link="/register" className="bg-secondary mt-10" />
                    </div>
                    <Flex className="items-center  ">
                        <div className="absolute top-1/2 -right-24 -translate-y-1/2 z-10 " >
                            <Image sources={[{ srcSet: "/event/shape.png" }]} alt="illustration" className="scaling" />
                        </div>
                        <Flex className="bg-white rounded-full w-[392px] h-[392px] p-20 box-border  z-20">
                            <h3 className="text-heading font-bold text-2xl text-center">Register Now and
                                Get a <span className="text-secondary">50% Discount</span></h3>
                                <Flex className="mt-10">
                                    <div></div>
                                </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}
export default Events