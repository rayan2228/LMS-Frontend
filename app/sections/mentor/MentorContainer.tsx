import { FC } from "react"
import Container from "~/components/Container"
import Flex from "~/components/Flex"
import Title from "~/components/Title"
import MentorCard from "./MentorCard"

const MentorContainer: FC = () => {
    return (
        <section style={{ background: "url(/mentor/bg.png) no-repeat center", backgroundSize: "cover" }} className=" py-32 bg-cover">
            <Title title="Our Team" className=" items-center" subtitle="Meet Our Professional 
Instructors" subtitleClass="font-bold text-heading  text-[40px] w-[590px] text-center leading-10" />
            <Container>
                <Flex className="items-center  mt-12 flex-wrap justify-between">
                    <MentorCard designation="uxui design" name="Jhon doe" imageSrc="/mentor/team1.jpg" socialLinks={{ facebook: "/", linkedin: "/", youtube: "/" }} />
                    <MentorCard designation="uxui design" name="Jhon doe" imageSrc="/mentor/team2.jpg" socialLinks={{ facebook: "/", linkedin: "/", youtube: "/" }} />
                    <MentorCard designation="uxui design" name="Jhon doe" imageSrc="/mentor/team3.jpg" socialLinks={{ facebook: "/", linkedin: "/", youtube: "/" }} />
                </Flex>
            </Container>
        </section>
    )
}
export default MentorContainer