import ButtonLink from "@/components/buttonLink"
import FooterESP from "@/components/footerESP"
import NavigationBarESP from "@/components/navigationBarESP"
import { LanguageSelector, SurveyURLs } from "@/strings"

export default function Home() {
  return (
    <div className="bg-gray flex flex-col">
      <NavigationBarESP />

      <div className="flex-col bg-white h-full mt-7 flex justify-center items-center p-10 max-w-4xl self-center w-full">
        <div className="max-w-prose flex flex-col">
          <h1 className="text-4xl text-brown5 w-84 bg-transparent font-semibold">
            Sobre Proyecto
          </h1>

          <p className="bg-white mt-5 text-gray-purple">
            ¿Cómo contribuyen las relaciones entre familias y escuelas al
            desarrollo de comunidades educativas efectivas? ¿Qué prácticas se
            pueden implementar para fortalecer la colaboración y el
            entendimiento entre padres y educadores, mejorando el entorno
            educativo general?
          </p>

          <hr className="h-0.5 w-60 my-6 bg-brown5 border-0 self-center"></hr>

          <p className="bg-white mt-3 text-gray-purple">
            El Estudio de Familias y Escuelas busca abordar estas preguntas a
            través de las perspectivas de padres, maestros y directores de San
            Antonio, Texas. La integración de estas diversas perspectivas nos
            permite explorar de manera más holística cómo los padres y
            educadores navegan en la comunidad escolar y, en el fondo, ilumina
            cómo se pueden fortalecer estas relaciones
          </p>

          <p className="bg-white mt-3 text-gray-purple">
            Se invita a <b className="bg-white">los padres</b> a compartir sus
            experiencias con las escuelas de sus hijos y reflexiones sobre su
            experiencia con estas comunidades escolares.
          </p>

          <p className="bg-white mt-3 text-gray-purple">
            Se invita a <b className="bg-white">los maestros</b> a compartir
            experiencias que hayan tenido con los padres de sus alumnos y
            reflexiones sobre cómo involucrar a las familias dentro de la
            estructura de la escuela.
          </p>

          <p className="bg-white mt-3 text-gray-purple">
            Se invita a <b className="bg-white">los directores</b> a compartir
            experiencias que hayan tenido en la construcción y liderazgo de una
            comunidad escolar que incluya a los padres y maestros de los
            estudiantes y reflexiones sobre el papel de las relaciones
            familia-escuela en apoyar a los estudiantes.
          </p>

          <p className="bg-white mt-3 text-gray-purple">
            Este estudio está aprobado por el Programa de Protección de la
            Investigación Humana de Brown (STUDY262) y financiado por una
            subvención de La Fundación Spencer.
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

          <div className="bg-brown1 h-64 rounded">
            <img
              src="/photos/about2.png"
              className="h-full object-cover rounded"
              alt="..."
            />
          </div>

          <div className="bg-brown1 h-64 rounded">
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
            <h1 className="text-4xl text-brown5 w-84 bg-transparent font-semibold">
              ¿Interesada en participar?
            </h1>

            <p className="mt-5 font-bold text-gray-purple">
              Complete la encuesta y, si es seleccionado, reciba $40.
            </p>

            <p className="bg-white mt-5 text-gray-purple">
              ¡Queremos saber por ustedes, padres y educadores de la escuela
              primaria de San Antonio! Complete la encuesta para tener la
              oportunidad de compartir sus experiencias. Un miembro del equipo
              de investigación se comunicará con los seleccionados para una
              entrevista para programar una entrevista de 60 minutos.
            </p>

            <div className="flex justify-center flex-wrap gap-5 mt-5">
              <div className="flex justify-center">
                <ButtonLink
                  text="ENCUESTA DE INTERÉS DE LOS PADRES"
                  url={SurveyURLs.parents + LanguageSelector.spanish}
                />
              </div>

              <div className="flex justify-center">
                <ButtonLink
                  text="ENCUESTA DE INTERÉS DE LOS EDUCADORES"
                  url={SurveyURLs.teachersAndPrincipals + LanguageSelector.spanish}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterESP />
    </div>
  )
}
