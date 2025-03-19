export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  blueskyUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Mike Zhang",
  title: "Postdoc",
  institution: "Aalborg University (Copenhagen)",
  // Note that links work in the description
  description:
    "I'm a postdoc in Natural Language Processing at Aalborg University (Copenhagen) advised by Prof. <a href='https://bjerva.github.io/'><u>Johannes Bjerva</u></a> and Prof. <a href='https://vbn.aau.dk/en/persons/153280'><u>Euan Lindsay</u></a>. My research is currently at the intersection of NLP and Education. Additionally, I'm affiliated to the <a href='https://www.aicentre.dk/'><u>Pioneer Centre for Artifical Intelligence</u></a> <br><br> Previously, I was a PhD Student in NLP at the IT University of Copenhagen (ITU) advised by Prof. <a href='http://bplank.github.io'><u>Barbara Plank</u></a> and Prof. <a href='http://robvanderg.github.io'><u>Rob van der Goot</u></a>. I was part of <a href='http://nlpnorth.github.io'><u>NLPnorth</u></a> at ITU and <a href='https://mainlp.github.io'><u>MaiNLP</u></a> at the Ludwig Maximilian University of Munich (LMU). I worked on Computational Job Market Analysis (/ NLP for HR), where we investigated how to extract information (e.g., skills) from job ads data and match these to existing taxonomies. <br><br> <i>Feel free to reach out to me if any of my work is interesting and you have ideas or would like to collaborate!</i>",
  email: "jjz (at) cs.aau.dk",
  imageUrl:
    "",
  googleScholarUrl: "https://scholar.google.nl/citations?user=Zw6i1v0AAAAJ&hl=en",
  githubUsername: "jjzha",
  linkedinUsername: "jjzha",
  // twitterUsername: "mjjzha",
  blueskyUsername: "mjjzha",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
