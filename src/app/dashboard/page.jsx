import CoursesCard from "@/components/CourseCard"
import InternshipCard from "@/components/Internships"
import StudentProfile from "@/components/StudentProfile"

export default function Page() {
  return (
    <div className="py-12 px-24 flex flex-col md:flex-row justify-between space-x-4">

        <CoursesCard name="Courses"/>
        <StudentProfile name="Student Profile" />
        <InternshipCard />
      
    </div>
  )
}
