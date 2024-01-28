import ButtonLink from "@/components/buttonLink"
import { CircleText } from "@/components/CircleText"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigationBar"
import QualtricsButton from "@/components/qualtricsButton"
import { HomePage } from "@/strings"
import { PageProps } from "@/types"
import NavigationBarESP from "@/components/navigationBarESP"



export default function Home({language: maybeLanguage}: PageProps) {

  const language = maybeLanguage ?? 'english'

  const strings = HomePage;

  return (
    <div className="bg-white flex flex-col">
      {language === "english" ? <NavigationBar /> : <NavigationBarESP/> }

      <div className="mt-6 w-full flex items-center">
        <div className="flex rounded bg-gradient-to-r from-brown1 to-brown2 w-full items-center  justify-center mr-3 p-5 gap-8 flex-col md:flex-row">
          <h1 className="text-brown5 md:text-6xl text-4xl font-julius title font-bold text-center flex-2 my-5 max-w-xl md:max-w-5xl">
            {strings.header.title[language]}
          </h1>
          <div className="rounded bg-brown3 grid items-center justify-center mx-7 p-8 sm:p-16 flex-1 max-w-xl">
            <h1 className="text-4xl text-gray-purple w-84 font-bold pb-5 text-center">
            {strings.header.surveyTitle[language]}
            </h1>
            <div className=" flex justify-center">
              <QualtricsButton text={strings.header.surveyButton[language]} language={language} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-gray mt-6 flex flex-wrap py-8 md:py-16 md:justify-center gap-y-5 gap-x-20 px-5">

        <div className="rounded items-center grid justify-center mr-3 gap-5">
          <h1 className="text-3xl w-84 text-gray-purple font-bold">
          {strings.body.header[language]}
          </h1>
          <div>
            <ButtonLink text={strings.body.aboutButton[language]} url={language === "english" ? "/about" : "/aboutESP" } />
          </div>
        </div>

        <div className="rounded grid items-center justify-center">
          {strings.body.welcome[language]}
        </div>
      </div>

      <div className="bg-light-gray w-full flex items-center justify-center">
        <div className="rounded border-4 border-brown5 p-5 mx-4 mb-16">
          <p className="text-slate-800 text-xl w-100 mb-5 max-w-prose">
            {strings.body.description.paragraph1[language]}
          </p>
          <p className="text-slate-800 text-xl w-100 max-w-prose">
          {strings.body.description.paragraph2[language]}
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
            {strings.values.title[language]}
          </h1>
        </div>

        <div className="flex flex-row mt-10 flex-wrap justify-center gap-10">
          <div className="bg-brown1 flex flex-col justify-center rounded p-8 max-w-md items-center">
            <CircleText content={"1"}/>

            <div className="my-5 bg-white bg-opacity-75 px-10 border-2 border-brown5 py-2 flex justify-center rounded justify-self-stretch">
              <h1 className="text-xl text-gray-purple font-bold">
                {strings.values.value1.title[language]}
              </h1>
            </div>

            <h1 className="text-brown5 text-center max-w-prose">
              {strings.values.value1.description[language]}
            </h1>
          </div>

          <div className="bg-brown1 flex flex-col justify-center rounded p-8 max-w-md items-center">
            <CircleText content={"2"}/>

            <div className="my-5 bg-white bg-opacity-75 px-10 border-2 border-brown5 py-2 flex justify-center rounded justify-self-stretch">
              <h1 className="text-xl text-gray-purple font-bold">
                {strings.values.value2.title[language]}
              </h1>
            </div>

            <h1 className="text-brown5 text-center max-w-prose">
              {strings.values.value2.description[language]}
            </h1>
          </div>

          <div className="bg-brown1 flex flex-col rounded p-8 max-w-md items-center">
            <CircleText content={"3"}/>

            <div className="my-5 bg-white bg-opacity-75 px-10 border-2 border-brown5 py-2 flex justify-center rounded justify-self-stretch">
              <h1 className="text-xl text-gray-purple font-bold">
                {strings.values.value3.title[language]}
              </h1>
            </div>

            <h1 className="text-brown5 text-center max-w-prose">
              {strings.values.value3.description[language]}
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
