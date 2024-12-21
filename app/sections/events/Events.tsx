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

                        <Flex className="bg-white rounded-full w-[392px] h-[392px] p-20 box-border  z-20 flex-col">
                            <h3 className="text-heading font-bold text-2xl text-center">Register Now and
                                Get a <span className="text-secondary">50% Discount</span></h3>
                            <Flex className="mt-6 flex-wrap justify-center items-center gap-6 relative after:w-[1px] after:h-full  after:bg-[#F1F2FD] after:absolute after:left-1/2 after:top-0 after:content-[''] before:w-[80%] before:h-[1px]  before:bg-[#F1F2FD] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:content-[''] ">
                                <Flex className="bg-[#F1F2FD] text-primary rounded-xl py-2  px-6 capitalize flex items-center justify-center flex-col  ">
                                    <h5 className="font-bold text-2xl">52</h5>
                                    <h6 className="text-sm text-heading">days</h6>
                                </Flex>
                                <Flex className="bg-[#F1F2FD] text-primary rounded-xl py-2  px-6 capitalize flex items-center justify-center flex-col  ">
                                    <h5 className="font-bold text-2xl">52</h5>
                                    <h6 className="text-sm text-heading">days</h6>
                                </Flex>
                                <Flex className="bg-[#F1F2FD] text-primary rounded-xl py-2  px-6 capitalize flex items-center justify-center flex-col">
                                    <h5 className="font-bold text-2xl">52</h5>
                                    <h6 className="text-sm text-heading">days</h6>
                                </Flex>
                                <Flex className="bg-[#F1F2FD] text-primary rounded-xl py-2  px-6 capitalize flex items-center justify-center flex-col">
                                    <h5 className="font-bold text-2xl">52</h5>
                                    <h6 className="text-sm text-heading">days</h6>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}
export default Events