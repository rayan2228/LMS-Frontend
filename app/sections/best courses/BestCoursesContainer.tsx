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
                <Flex className="items-center gap-x-6 mt-[180px] flex-wrap gap-y-44">
                    <Course imageSrc="/course/course1.png" authorImage="/course/author1.png" authorName="Guy Hawkins" authorRole="Project Manager" lessons={15} price="$450.00" title="Management Consultants in Competitive Markets" duration="20 hours" rating={4} reviews={25} link="" />
                    <Course imageSrc="/course/course2.png" authorImage="/course/author2.png" authorName="Guy Hawkins" authorRole="Project Manager" lessons={150} price="$550.00" title="The Ultimate Developer Course
For Future Learner" duration="20 hours" rating={5} reviews={25} link="" />
                    <Course imageSrc="/course/course3.png" authorImage="/course/author3.png" authorName="Guy Hawkins" authorRole="Project Manager" lessons={300} price="$150.00" title="The Special HTML & CSS
 Bootcamp Edition " duration="20 hours" rating={5} reviews={25} link="" />

                </Flex>
            </Container>
        </section>
    )
}
export default BestCoursesContainer