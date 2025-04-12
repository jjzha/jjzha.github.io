export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "02/24 - Present",
    title: "Postdoctoral Researcher",
    company: "Aalborg University",
    description:
      "Investigating Educational Feedback tools for improving student learning.",
    advisor: "Johannes Bjerva & Euan D. Lindsay",
    companyUrl: "https://aau.dk/",
  },
  {
    date: "10/23 - 11/23",
    title: "Ph.D. Research Visitor",
    company: "EPFL",
    description:
      "Worked synthetic data and Large Language Models for Skill Extraction.",
    advisor: "Syrielle Montariol & Antoine Bosselut",
    companyUrl: "https://nus.com",
  },
  {
    date: "02/23 - 07/23",
    title: "Ph.D. Research Visitor",
    company: "National University of Singapore",
    description:
      "Worked Retrieval Augmented methods for Skill Extraction.",
    advisor: "Min-Yen Kan",
    companyUrl: "https://nus.com",
  },
  {
    date: "07/22 - 12/22",
    title: "Ph.D. Research Intern",
    company: "NEC Laboratories Europe GmBH",
    description:
      "Investigated data-centric methods to improve Open Information Extraction.",
    advisor: "Kiril Gashteovski",
    companyUrl: "https://neclab.eu/",
  },
];
