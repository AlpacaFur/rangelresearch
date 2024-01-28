import ButtonLink from "@/components/buttonLink"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigationBar"
import QualtricsButton from "@/components/qualtricsButton"

export default function Home() {
  return (
    <div className="bg-white">
      <NavigationBar />

      <div className="mt-6 bg-transparent w-full flex items-center px-5">
        <div className="rounded bg-gradient-to-r from-brown1 to-brown2 w-full items-center flex justify-center mr-3">
          <h1 className="text-brown5 text-6xl w-1/2 m-auto bg-transparent font-julius title font-bold text-center">
            Families and Schools Research Project
          </h1>
          <div className="rounded bg-brown3 w-1/3 grid items-center justify-center mx-7">
            <h1 className="text-4xl text-gray-purple w-84 bg-transparent font-bold pb-5">
              Qualtrics Interest Form
            </h1>
            <div className="bg-transparent flex justify-center">
              <QualtricsButton />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-gray mt-6 w-full flex items-center">
        <div className="rounded bg-transparent w-1/3 items-center grid justify-center mr-3">
          <h1 className="text-3xl w-84 bg-transparent text-gray-purple font-bold">
            The Project
          </h1>
          <div>
            <ButtonLink text="About Project" url="/about" />
          </div>
        </div>

        <div className="rounded bg-transparent w-2/3 grid items-center justify-center">
          <h1 className="text-slate-800 text-xl w-100 bg-transparent mr-10">
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
        <div className="rounded bg-transparent border-4 border-brown5 w-full p-5 mx-16 mb-16">
          <p className="text-slate-800 text-xl w-100 bg-transparent mb-5">
            The voices of parents and educators are at the heart of our
            research. By conducting comprehensive interviews with parents, we
            aim to gain nuanced insights into their experiences and perceptions
            within the educational system. Additionally, interviews with school
            faculty and administrators provide us with diverse perspectives on
            the role and impact of parental involvement.
          </p>
          <p className="text-slate-800 text-xl w-100 bg-transparent">
            In exploring these dynamics, our project ultimately seeks to
            identify effective strategies that enhance student learning
            experiences and understand the practices that support academic and
            personal growth. We are committed to developing innovative,
            inclusive approaches that enrich the educational journey for every
            student.
          </p>
        </div>
      </div>
      <div className="my-10 inline-block bg-transparent w-full justify-center">
        <div className="flex items-center justify-center bg-transparent w-full">
          <img src="/photos/home1.png" className="" alt="Home Image" />
        </div>
      </div>

      <div className="my-10 inline-block bg-transparent w-full justify-center">
        <div className="m-auto bg-brown1 w-96 pt-7 flex justify-center rounded">
          <h1 className="text-3xl text-gray-purple w-84 bg-transparent font-bold">
            Our Research Values
          </h1>
        </div>

        <div className="flex bg-transparent mt-10 w-full">
          <div className="mx-5 bg-brown1 w-full inline-block justify-center rounded p-8">
            <div className="m-auto rounded-full w-16 bg-brown4 flex justify-center">
              <h1 className="bg-transparent mt-3 font-bold text-3xl text-brown5">
                1.
              </h1>
            </div>

            <div className="my-5 m-auto bg-white bg-opacity-75 w-auto px-10 border-2 border-brown5 pt-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple w-84 bg-transparent font-bold">
                Transparency
              </h1>
            </div>

            <h1 className="text-brown5 w-84 bg-transparent text-center">
              We value open and clear communication with the parents, educators,
              and schools we partner with. Participants will be in direct
              contact with research team members and choose how much information
              to share.
            </h1>
          </div>

          <div className="mx-5 bg-brown2 w-full inline-block justify-center rounded p-8">
            <div className="m-auto rounded-full w-16 bg-brown4 flex justify-center">
              <h1 className="bg-transparent mt-3 font-bold text-3xl text-brown5">
                2.
              </h1>
            </div>

            <div className="bg-opacity-75 my-5 m-auto bg-white w-auto px-10 border-2 border-brown5 pt-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple bg-transparent font-bold">
                Security & Privacy
              </h1>
            </div>

            <h1 className="text-brown5 w-84 bg-transparent text-center">
              We value protecting participant information and maintaining
              privacy. We take several steps to ensure participants&apos;
              confidentiality in adherence to Brown University&apos;s
              Institutional Review Board.
            </h1>
          </div>

          <div className="mx-5 bg-brown3 w-full inline-block justify-center rounded p-8">
            <div className="m-auto rounded-full w-16 bg-brown4 flex justify-center">
              <h1 className="bg-transparent mt-3 font-bold text-3xl text-brown5">
                3.
              </h1>
            </div>

            <div className="bg-opacity-75 my-5 m-auto bg-white w-auto px-10 border-2 border-brown5 pt-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple w-84 bg-transparent font-bold">
                Catalyzing Positive Change
              </h1>
            </div>

            <h1 className="text-brown5 w-84 bg-transparent text-center">
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
