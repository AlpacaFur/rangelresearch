import ButtonLink from "@/components/buttonLink"
import { CircleText } from "../components/circleText"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigationBar"
import QualtricsButton from "@/components/qualtricsButton"

export default function Home() {
  return (
    <div className="bg-white flex flex-col">
      <NavigationBar />

      <div className="mt-6 w-full flex items-center">
        <div className="flex rounded bg-gradient-to-r from-brown1 to-brown2 w-full items-center  justify-center mr-3 p-5 gap-8 flex-col md:flex-row">
          <h1 className="text-brown5 md:text-6xl text-4xl font-julius title font-bold text-center flex-2 my-5 max-w-xl md:max-w-5xl">
            Families and Schools Research Project
          </h1>
          <div className="rounded bg-brown3 grid items-center justify-center mx-7 p-8 sm:p-16 flex-1 max-w-xl">
            <h1 className="text-4xl text-gray-purple w-84 font-bold pb-5 text-center">
              Qualtrics Interest Form
            </h1>
            <div className=" flex justify-center">
              <QualtricsButton />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-gray mt-6 flex flex-wrap py-8 md:py-16 md:justify-center gap-y-5 gap-x-20 px-5">

        <div className="rounded items-center grid justify-center mr-3 gap-5">
          <h1 className="text-3xl w-84 text-gray-purple font-bold">
            The Project
          </h1>
          <div>
            <ButtonLink text="About Project" url="/about" />
          </div>
        </div>

        <div className="rounded grid items-center justify-center">
          <h1 className="text-slate-800 text-xl max-w-prose">
            Welcome to the{" "}
            <text className="font-semibold">Families and Schools Project</text>,
            a research study exploring the collaborative relationships between
            parents and educators in shaping students’ educational success. Our
            goal is to uncover how the{" "}
            <text className="font-semibold">bonds</text> between parents and
            their children&apos;s schools{" "}
            <text className="font-semibold">shape</text> the landscape of
            educational success.{" "}
          </h1>
        </div>
      </div>

      <div className="bg-light-gray w-full flex items-center justify-center">
        <div className="rounded border-4 border-brown5 p-5 mx-4 mb-16">
          <p className="text-slate-800 text-xl w-100 mb-5 max-w-prose">
            The voices of parents and educators are at the heart of our
            research. By conducting comprehensive interviews with parents, we
            aim to gain nuanced insights into their experiences and perceptions
            within the educational system. Additionally, interviews with school
            faculty and administrators provide us with diverse perspectives on
            the role and impact of parental involvement.
          </p>
          <p className="text-slate-800 text-xl w-100 max-w-prose">
            In exploring these dynamics, our project ultimately seeks to
            identify effective strategies that enhance student learning
            experiences and understand the practices that support academic and
            personal growth. We are committed to developing innovative,
            inclusive approaches that enrich the educational journey for every
            student.
          </p>
        </div>
      </div>
      <div className="my-10 w-full justify-center">
        <div className="flex items-center justify-center w-full">
          <img src="/photos/home1.png" alt="Home Image" className="rounded" />
        </div>
      </div>

      <div className="my-10 items-center flex flex-col">
        <div className="bg-brown1 p-8 flex rounded">
          <h1 className="text-3xl text-gray-purple font-bold">
            Our Research Values
          </h1>
        </div>

        <div className="flex flex-row mt-10 flex-wrap justify-center gap-10">
          <div className="bg-brown1 flex flex-col justify-center rounded p-8 max-w-md items-center">
            <CircleText content={"1"}/>

            <div className="my-5 bg-white bg-opacity-75 px-10 border-2 border-brown5 py-2 flex justify-center rounded justify-self-stretch">
              <h1 className="text-xl text-gray-purple font-bold">
                Transparency
              </h1>
            </div>

            <h1 className="text-brown5 text-center max-w-prose">
              We value open and clear communication with the parents, educators,
              and schools we partner with. Participants will be in direct
              contact with research team members and choose how much information
              to share.
            </h1>
          </div>

          <div className="bg-brown2 flex flex-col justify-center rounded p-8 max-w-md items-center">
            <CircleText content={"2"}/>

            <div className="bg-opacity-75 my-5 bg-white px-10 border-2 border-brown5 py-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple font-bold">
                Security & Privacy
              </h1>
            </div>

            <h1 className="text-brown5 text-center max-w-prose">
              We value protecting participant information and maintaining
              privacy. We take several steps to ensure participants&apos;
              confidentiality in adherence to Brown University&apos;s
              Institutional Review Board.
            </h1>
          </div>

          <div className="bg-brown3 flex flex-col justify-center rounded p-8 max-w-md items-center">
            <CircleText content={"3"}/>

            <div className="bg-opacity-75 my-5 bg-white px-10 border-2 border-brown5 py-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple font-bold">
                Catalyzing Positive Change
              </h1>
            </div>

            <h1 className="text-brown5 text-center max-w-prose">
              We value our partnerships with participants as foundations for
              studying and building school communities that better serve
              students, families, and educators.
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
