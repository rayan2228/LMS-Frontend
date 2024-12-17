import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"
import ServiceCard from "./ServiceCard"
import { FC } from "react"

const Service: FC = () => {
    return (
        <section className=" py-32 relative bg-no-repeat bg-cover" style={{ background: "url(/service/servicetopbg.png) #F6F6F6" }}>
            <Title title="Our Service" className="justify-center" />
            <Container>
                <h2 className="font-bold text-heading m-auto text-[40px] w-[590px] text-center leading-10 mt-8">Creating a Lifelong Learning Best Community </h2>
                <Flex className="mt-20 gap-6 items-center z-10 relative">
                    <ServiceCard heading="Exclusive Coach" decryption="Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit " src="/education.png" />
                    <ServiceCard heading="Creative Minds" decryption="Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit " src="/bulb.png" />
                    <ServiceCard heading="Video Tutorials" decryption="Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit " src="/video.png" />
                    <ServiceCard heading="Worlds Record" decryption="Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit " src="/worlds.png" />
                </Flex>
            </Container>
            <div className="absolute bottom-0 left-0  w-full h-60 z-0" style={{ background: "url(/service/servicebottombg.png) #f57005" }}></div>
        </section>
    )
}
export default Service