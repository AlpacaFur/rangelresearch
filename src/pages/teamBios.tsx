import React from "react"
import TeamMember from "../components/TeamMember"
import Member from "../interfaces/interfaces"
import NavigationBar from "@/components/navigationBar"
import Footer from "@/components/footer"
import Link from "next/link"

const team: Member[] = [
  {
    name: "Serena Levin (she/her)",
    photo: "serena.jpeg",
    bio: "Serena is a Senior from Westport, CT studying Education and International and public Affairs at Brown University. She has worked as a research assistant with Dr. Rangel since Fall 2021, examining how parental involvement is impacted by social class, race, and ethnicity. Because of this work, Serena is now working on her honors thesis with Dr. Rangel, aimed at understanding the intersections of race and social class concerning PTA involvement. Outside of research Serena’s interests include teaching, health education, policy reform, running, reading, and her dog!",
    esp: 0,
  },
  {
    name: "John Bellaire (he/him)",
    photo: "john.jpeg",
    bio: "John is a junior from Winchester, MA studying Education and International and Public Affairs at Brown University. John has worked as a research assistant with Dr. Rangel since Spring 2022 on projects examining parenting practices intersectionally. John’s interests include youth mentorship, secondary social studies instruction, legislative advocacy, backpacking, volleyball, and the color purple.",
    esp: 0,
  },
]

const pi: Member[] = [
  {
    name: "David Enrique Rangel, Ph.D",
    photo: "david.png",
    bio: "As a sociologist of education, Dr. Rangel studies the relationship between education and social inequality, with emphasis on the Latinx experience in the United States. In particular, his research examines family-school relations, focusing on how social class, race, ethnicity, and the broader social context structure relations within-families, between families, and between families and schools. His work documents Latinx parent’s experiences in school settings to understand if, how, and to what extent Latinx parents pass on educational advantages to their children. His most recent work has appeared in various outlets, including the American Educational Research Journal, Sociological Perspectives, Journal of Racial and Ethnic Health Disparities, and Social Science and Medicine – Population Health.",
    esp: 0,
  },
]

const pc: Member[] = [
  {
    name: "Anna Ryu (she/her)",
    photo: "anna.jpeg",
    bio: "Anna is a junior from Albany, NY, studying Education and Chemistry at Brown University. Her interests in Education include teaching STEM at the secondary school level in more equitable, empathetic ways. She began working with Dr. Rangel in Spring 2023 and supports the team’s organizational and logistical work. Beyond academic interests, she enjoys working with students, spending time with family, and playing the oboe.",
    esp: 0,
  },
]

const TeamBioPage: React.FC = () => {
  return (
    <div className="">
      <NavigationBar />
      
      <div className="flex flex-row justify-center">
        <div className="flex flex-col max-w-6xl">
          <h1 className="text-4xl text-brown5 text-center font-semibold my-8">
            Our Team
          </h1>
          <div className="bg-white p-8">
            <h2 className="text-3xl font-semibold mb-6 bg-white text-gray-purple">
              Principal Investigator
            </h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {pi.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
          <hr className="border-t border-orange-700 my-12" />
          <div className="bg-white p-8">
            <h2 className="text-3xl font-semibold mb-6 bg-white text-gray-purple">
              Research Assistants
            </h2>
            {team.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
          <hr className="border-t border-orange-700 my-12" />
          <div className="bg-white p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 bg-white text-gray-purple">
              Project Coordinator
            </h2>
            {pc.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
          <div className="bg-white p-8 mb-8">
            <h1 className=" text-2xl text-gray-purple w-84 bg-transparent font-semibold">
              Contact Us{" "}
            </h1>
            <div className="mb-8" style={{ marginBottom: "10px" }} />
            <p className=" text-gray-purple w-84 bg-transparent">
              If you have any questions or would like to be in touch with a member
              of the research team, please email us at{" "}
              <Link
                href="mailto:familiesandschools@brown.edu"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500 bg-transparent"
              >
                familiesandschools@brown.edu
              </Link>
              . To contact the study’s principal investigator, David Rangel, please
              email{" "}
              <Link
                href="mailto:david_rangel@brown.edu"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500 bg-transparent"
              >
                david_rangel@brown.edu
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TeamBioPage
