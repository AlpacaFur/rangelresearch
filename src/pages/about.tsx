import Footer from "@/components/footer"
import NavigationBar from "@/components/navigationBar"
import ParentsSurveyButton from "@/components/parentsSurveyBtn"
import PrincipalsAndTeachersSurveyButton from "@/components/principalsTeachersSurveyBtn"

export default function Home() {
  return (
    <div className="bg-gray flex flex-col">
      <NavigationBar />

        <div className="flex-col bg-white h-full mt-7 flex justify-center items-center p-10 max-w-4xl self-center w-full">
          <div className="max-w-prose flex flex-col">
          <h1 className="text-4xl text-brown5 font-semibold">
            About Project
          </h1>
          <p className="bg-white mt-5 text-gray-purple">
            How do the relationships between families and schools contribute to
            developing effective educational communities? What practices can be
            implemented to strengthen collaboration and understanding between
            parents and educators, enhancing the overall educational environment?
          </p>
          <hr className="h-0.5 w-60 my-6 bg-brown5 border-0 self-center"></hr>
          <p className="bg-white mt-3 text-gray-purple">
            These are questions that the Families and Schools research study seeks
            to address through the perspectives of parents, teachers, and
            principals within San Antonio, Texas. Integrating these diverse
            perspectives allows us to more holistically explore how parents and
            educators navigate the school community, ultimately illuminating how
            these relationships may be strengthened.
          </p>
          <p className="bg-white mt-3 text-gray-purple text-left">
            <b className="bg-white text-left">Parents</b> are invited to share
            their experiences with their children&apos;s schools and reflections
            on their experience with these school communities.
          </p>
          <p className="bg-white mt-3 text-gray-purple">
            <b className="bg-white text-gray-purple">Teachers</b> are invited to
            share experiences they&apos;ve had with their students&apos; parents
            and reflections on their abilities to engage with families within the
            structure of the school.
          </p>
          <p className="bg-white mt-3 text-gray-purple">
            <b className="bg-white text-gray-purple text-left">Principals</b> are
            invited to share experiences they&apos;ve had in building and leading
            a school community that includes students&apos; parents and teachers
            and reflections on the role of family-school relationships in
            supporting student outcomes.
          </p>
          {/* <p className="bg-white mt-3 text-gray-purple">
        This study is approved by Brown&apos;s Human Research Protection Program
        (STUDY262) and funded by a grant from The Spencer Foundation.
        </p> */}
          <p className="bg-white mt-3 text-gray-purple">
            This study is approved by Brown&apos;s Human Research Protection
            Program (STUDY262) and funded by a grant from The Spencer Foundation.
          </p>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center items-center">
        <div className="flex h-64 justify-center gap-5 max-w-4xl">
          <div className="bg-brown1 h-64 rounded">
            <img
              src="/photos/about1.jpeg"
              className="h-full object-cover rounded"
              alt="..."
            />
          </div>

          <div className="bg-brown2 h-64 justify-center rounded">
            <img
              src="/photos/about2.png"
              className="h-full object-cover rounded"
              alt="..."
            />
          </div>

          <div className="bg-brown3 h-64 justify-center rounded">
            <img
              src="/photos/about3.jpeg"
              className="h-full object-cover rounded"
              alt="..."
            />
          </div>
        </div>

        <div
          className="flex-col bg-white mt-7 flex justify-center items-center p-10 max-w-4xl self-center w-full"
          id="survey-block"
        >
          <div className="max-w-prose">
            <h1 className="text-4xl text-brown5 font-semibold">
              Take Our Surveys
            </h1>
            <p className="bg-white mt-5 text-gray-purple">
              Parents and educators interested in participating may complete a
              brief demographic survey. This survey helps us ensure that we hear
              from parents and educators of various backgrounds and school types.
              At the end of the survey, you will be prompted to provide your
              contact information for interview scheduling purposes only.
            </p>
            <div className="flex justify-center flex-wrap gap-5 mt-5">
              <div className="flex justify-center">
                <ParentsSurveyButton />
              </div>
              <div className="flex justify-center">
                <PrincipalsAndTeachersSurveyButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
