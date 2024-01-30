import ButtonLink from "@/components/buttonLink"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigationBar"
import { LanguageSelector, SurveyURLs } from "@/strings"

export default function Home() {
  return (
    <div className="bg-gray flex flex-col">
      <NavigationBar />

      <div className="flex-col bg-white h-full mt-7 flex justify-center items-center p-10 max-w-4xl self-center w-full">
        <div className="max-w-prose flex flex-col">
          <h1 className="text-4xl text-brown5 font-semibold">About Project</h1>
          <p className="bg-white mt-5 text-gray-purple">
            How do the relationships between families and schools contribute to
            developing effective educational communities? What practices can be
            implemented to strengthen collaboration and understanding between
            parents and educators, enhancing the overall educational
            environment?
          </p>
          <hr className="h-0.5 w-60 my-6 bg-brown5 border-0 self-center"></hr>
          <p className="bg-white mt-3 text-gray-purple">
            The Families and Schools research study seeks to answer these
            questions through the perspectives of parents, teachers, and
            principals in San Antonio area elementary schools. Hearing from a
            range of elementary school parents, faculty, and administrators will
            help us understand different perspectives and ideas on how to make
            schools a better place for everyone.
          </p>
          <p className="bg-white mt-3 text-gray-purple text-left">
            <b>Parents</b> are invited to share their experiences with their
            children’s schools and reflections on their experience with their
            school communities.
          </p>
          <p className="bg-white mt-3 text-gray-purple">
            <b>Teachers</b> are invited to share experiences they’ve had with
            their students’ parents and reflections on engaging families within
            the structure of the school.
          </p>
          <p className="bg-white mt-3 text-gray-purple">
            <b>Principals</b> are invited to share experiences they’ve had in
            building and leading a school community that includes students’
            parents and teachers and reflections on the role of family-school
            relationships in supporting student success.
          </p>
          <p className="bg-white mt-3 text-gray-purple">
            This study is approved by Brown&apos;s Human Research Protection
            Program (STUDY262) and funded by a grant from The Spencer
            Foundation.
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
              Interested in participating?
            </h1>
            <p className="mt-5 font-bold text-gray-purple">
              Complete the survey and, if selected, receive $40.
            </p>
            <p className="bg-white mt-5 text-gray-purple">
              We want to hear from you, San Antonio elementary school parents
              and educators! Complete the survey for the chance to share your
              experiences. Those selected for an interview will be contacted by
              a research team member to schedule a 60-minute interview.
            </p>
            <div className="flex justify-center flex-wrap gap-5 mt-5">
              <div className="flex justify-center">
                <ButtonLink
                  text="PARENTS SURVEY"
                  url={SurveyURLs.parents + LanguageSelector.english}
                />
              </div>
              <div className="flex justify-center">
                <ButtonLink
                  text="TEACHERS & PRINCIPALS SURVEY"
                  url={SurveyURLs.teachersAndPrincipals + LanguageSelector.english}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
