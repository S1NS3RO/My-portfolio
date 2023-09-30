const projects = [
  /* Exemplo para novos projetos
 {
    date: "Dd/Mm/Aaaa",
    name: "",
    src: "/images/projectImagem",
    github: "Repositório",
    deploy: "Hospedagem",
    link: "Ver mais",
    desc: "",
    code: { //Deletar o que for false
      html5: true,
      css3: true,
      javascript: true,
      reactjs: false,
      nextjs: false,
      tailwindcss: false,
      typescript: false,
    }, */
  {
    date: "01/09/2023",
    name: "Gerador de Senhas",
    src: "/images/projects/GeradorDeSenhas.jpg",
    github: "https://github.com/S1NS3RO/Password-generator",
    deploy: "https://s1ns3ro.github.io/Password-generator",
    link: "/password-generator",
    desc: "Este foi o meu primeiro projeto usando JavaScript, serve para gerar senhas seguras com caracteres aleatórios, o número de caracteres pode ser definido pelo usuário",
    code: {
      html5: true,
      css3: true,
      javascript: true,
    },
  },
  {
    date: "08/09/2023",
    name: "Lista de Tarefas",
    src: "/images/projects/ListaDeTarefas.jpg",
    github: "https://github.com/S1NS3RO/Lista-de-tarefas",
    deploy: "https://s1ns3ro.github.io/Lista-de-tarefas",
    link: "/lista-de-tarefas",
    desc: "Permite a criação, conclusão e exclusão de tarefas em lista",
    code: {
      html5: true,
      css3: true,
      javascript: true,
    },
  },
  {
    date: "03/09/2023",
    name: "Horas do Dia",
    src: "/images/projects/HorasDoDia.jpg",
    github: "https://github.com/S1NS3RO/Horas-do-dia",
    deploy: "https://s1ns3ro.github.io/Horas-do-dia",
    link: "/horas-do-dia",
    desc: "Mostra da data e hora em tempo real e apresenta mudanças visuais de acordo com o período do dia",
    code: {
      html5: true,
      css3: true,
      javascript: true,
    },
  },
  {
    date: "14/09/2023",
    name: "Calculadora de Imc",
    src: "/images/projects/CalculadoraImc.jpg",
    github: "https://github.com/S1NS3RO/Calculadora-imc",
    deploy: "https://calculadora-imc-dusky.vercel.app",
    link: "/calculadora-imc",
    desc: "Calcula o índice de massa corporal do usuário",
    code: {
      html5: true,
      css3: true,
      javascript: true,
    },
  },
];

export default projects;
