type LanguageVariants = {
  english: string | JSX.Element,
  spanish: string | JSX.Element,
}

type StringContents = StringsData | LanguageVariants

interface StringsData {
  [x: string]: StringContents;
}

export const HomePage = {
  header: {
    title: {
      english: "Families and Schools Research Project",
      spanish: "Estudio de Familias y Escuelas"
    },
    surveyTitle: {
      english: "Qualtrics Interest Form",
      spanish: "Qualtrics Encuesta de Interés"
    },
    surveyButton: {
      english: "Qualtrics Survey",
      spanish: "Encuesta Qualtrics"
    },
  },
  body: {
    header: {
      english: "The Project",
      spanish: "El Proyecto"
    },
    aboutButton: {
      english: "About Project",
      spanish: "Sobre el Proyecto"
    },
    welcome: {
      english: <h1 className="text-slate-800 text-xl max-w-prose">
      Welcome to the{" "}
      <text className="font-semibold">Families and Schools Project</text>,
      a research study exploring the collaborative relationships between
      parents and educators in shaping students’ educational success. Our
      goal is to uncover how the{" "}
      <text className="font-semibold">bonds</text> between parents and
      their children&apos;s schools{" "}
      <text className="font-semibold">shape</text> the landscape of
      educational success.{" "}
    </h1>,
      spanish: <h1 className="text-slate-800 text-xl max-w-prose">
      Bienvenido al <text className="font-semibold">Estudio de Familias y Escuelas</text>, una investigación que explora las relaciones de colaboración entre los padres y educadores para dar forma al éxito educativo de los estudiantes. Nuestra meta es descubrir cómo los <text className="font-semibold">vínculos</text> entre los padres y las escuelas de sus hijos <text className="font-semibold">dan forma</text> al panorama del éxito educativo.
    </h1>
    },
    description: {
      paragraph1: {
        english: "The voices of parents and educators are at the heart of our research. By conducting comprehensive interviews with parents, we aim to gain nuanced insights into their experiences and perceptions within the educational system. Additionally, interviews with school faculty and administrators provide us with diverse perspectives on the role and impact of parental involvement.", 
        spanish: "En el fondo de nuestra investigación se encuentran las voces de padres y educadores. A través de entrevistas esclarecedoras con los padres, obtenemos una comprensión más profunda de su paso por el sistema educativo. Además, las entrevistas con la facultad y los administradores de la escuela nos ofrecen diversas perspectivas sobre el papel y el impacto de la participación de los padres."
      },
      paragraph2: {
        english: "In exploring these dynamics, our project ultimately seeks to identify effective strategies that enhance student learning experiences and understand the practices that support academic and personal growth. We are committed to developing innovative, inclusive approaches that enrich the educational journey for every student.", 
        spanish: "Al explorar estas dinámicas, en definitiva, nuestro proyecto aspira a identificar estrategias efectivas que mejoren las experiencias de aprendizaje de los estudiantes y entender prácticas que apoyan el desarrollo académico y personal de los estudiantes. Estamos comprometidos a desarrollar enfoqueinnovadores e inclusivos que enriquezcan el paso educativo de cada estudiante."
      },
    }
  },
  values: {
    title: {
      english: "Our Research Values",
      spanish: "Valores de Investigación"
    },
    value1: {
      title: {
        english: "Transparency",
        spanish: "Transparencia"
      },
      description: {
        english: "We value open and clear communication with the parents, educators, and schools we partner with. Participants will be in direct contact with research team members and choose how much information to share.",
        spanish: "Valoramos la comunicación abierta y clara con los padres, educadores y escuelas con las que nos asociamos. Los participantes estarán en contacto directo con los miembros del equipo de investigación y elegirán cuánta información compartirán."
      },
    },
    value2: {
      title: {
        english: "Security & Privacy",
        spanish: "Seguridad y Privacidad"
      },
      description: {
        english: "We value protecting participant information and maintaining privacy. We take several steps to ensure participants' confidentiality in adherence to Brown University's Institutional Review Board.",
        spanish: "Valoramos proteger la información de los participantes y mantener la confidencialidad. Tomamos varias medidas para garantizar la confidencialidad de los participantes de conformidad con la Junta de Revisión Institucional de la Universidad de Brown."
      },
    },
    value3: {
      title: {
        english: "Catalyzing Positive Change",
        spanish: "Catalizar el Cambio Positivo"
      },
      description: {
        english: "We value our partnerships with participants as foundations for studying and building school communities that better serve students, families, and educators.",
        spanish: "Valoramos nuestras colaboraciones con los participantes como base para estudiar y cultivar comunidades escolares que sirvan mejor a los estudiantes, las familias y los educadores."
      },
    },
  }
} as const