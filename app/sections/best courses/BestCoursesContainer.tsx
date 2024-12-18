import Container from "~/components/Container"
import Course from "~/components/Course"
import Flex from "~/components/Flex"

const BestCoursesContainer = () => {
    return (
        <section style={{ background: "url(/course/coursebg.png) no-repeat center" }} className="bg-cover py-32" >
            <Container>
                <div className="text-center font-bold">
                    <h2 className="text-2xl text-primary">Best Course</h2>
                    <h2 className="text-[40px] text-heading">Featured Course On This Month</h2>
                </div>
                <Flex className="items-center gap-6 mt-56">
                    <Course />
                    <Course />
                    <Course />
                </Flex>
            </Container>    
        </section>
    )
}
export default BestCoursesContainer