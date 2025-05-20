export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "20 May 2025",
    title: "Preprint of fs1 is out.",
    description: "We show that scaling reasoning via simple test-time scaling can improve factuality in LLMs.",
    link: "https://huggingface.co/papers/2505.11140",
  },
  {
    date: "29 April 2025",
    title: "Official print of Shades is out",
    description: "SHADES: Towards a Multilingual Assessment of Stereotypes in Large Language Models is now available in the ACL anthology.",
    link: "https://aclanthology.org/2025.naacl-long.600.pdf",
  },
  {
    date: "28 April 2025",
    title: "Talk at AI and Labour Market Workshop",
    description: "Gave a talk at the AI and Labour Market Workshop at the University of Ghent about retrieval augmented skill extraction.",
    link: "https://sites.google.com/view/ai-lm-workshop/home?authuser=0",
  },
  {
    date: "10 April 2025",
    title: "Kaleidoscope Pre-print Released!",
    description: "A new multilingual benchmark for evaluating VLMs on exams is out.",
    link: "https://arxiv.org/pdf/2504.07072",
  },
  // {
  //   date: "21 February 2025",
  //   title: "Area Chair for ACL 2025",
  //   description: "I'll be serving as an Area Chair for ACL 2025.",
  //   link: "",
  // },
  // {
  //   date: "17 February 2025",
  //   title: "LLM Agents for Educational Feedback Pre-print Released",
  //   description: "A Pre-print on leveraging LLM agents for educational feedback is out!",
  //   link: "https://arxiv.org/abs/2502.12927",
  // },
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

