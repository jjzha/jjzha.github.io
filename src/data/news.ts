export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // {
  //   date: "2 March 2025",
  //   title: "NoDaLiDa 2025 Appearance",
  //   description: "I'll be at NoDaLiDa 2025.",
  //   link: "",
  // },
  {
    date: "10 April 2025",
    title: "Kaleidoscope Pre-print Released!",
    description: "A new multilingual benchmark for evaluating VLMs on exams is out.",
    link: "https://arxiv.org/pdf/2504.07072",
  },
  {
    date: "21 February 2025",
    title: "Area Chair for ACL 2025",
    description: "I'll be serving as an Area Chair for ACL 2025.",
    link: "",
  },
  {
    date: "20 February 2025",
    title: "Sailor2 Technical Report Released",
    description: "The Sailor2 Technical Report is out!",
    link: "https://arxiv.org/abs/2502.12982",
  },
  {
    date: "17 February 2025",
    title: "LLM Agents for Educational Feedback Pre-print Released",
    description: "A Pre-print on leveraging LLM agents for educational feedback is out!",
    link: "https://arxiv.org/abs/2502.12927",
  },
  // {
  //   date: "23 January 2025",
  //   title: "Shades Accepted to NAACL'25",
  //   description: "Shades: Multilingual Assessment of Stereotypes in LLMs got accepted to NAACL'25.",
  //   link: "",
  // },
  // {
  //   date: "22 January 2025",
  //   title: "Include Benchmark Accepted to ICLR'25",
  //   description: "The Include Benchmark is now accepted to ICLR'25 as Spotlight.",
  //   link: "https://arxiv.org/pdf/2411.19799",
  // },
  // {
  //   date: "19 December 2024",
  //   title: "Talk on Snakmodel at University of Amsterdam",
  //   description: "Gave a talk about Snakmodel at the University of Amsterdam.",
  //   link: "https://arxiv.org/pdf/2412.12956?",
  // },
];

