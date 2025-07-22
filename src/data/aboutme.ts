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
    "I'm a postdoc in Natural Language Processing at Aalborg University (Copenhagen) advised by Prof. <a href='https://bjerva.github.io/'><u>Johannes Bjerva</u></a> and Prof. <a href='https://vbn.aau.dk/en/persons/153280'><u>Euan Lindsay</u></a>. My research is currently at the intersection of NLP and Education. Additionally, I'm affiliated to the <a href='https://www.aicentre.dk/'><u>Pioneer Centre for Artifical Intelligence</u></a>. <br><br> Previously, I was a PhD Student in NLP at the IT University of Copenhagen (ITU) advised by Prof. <a href='http://bplank.github.io'><u>Barbara Plank</u></a> and Prof. <a href='http://robvanderg.github.io'><u>Rob van der Goot</u></a>. I was part of <a href='http://nlpnorth.github.io'><u>NLPnorth</u></a> at ITU and <a href='https://mainlp.github.io'><u>MaiNLP</u></a> at the Ludwig Maximilian University of Munich (LMU).<br><br>My research has a strong applied side, where I am trying to answer questions such as: <ul><li>How effectively can large language models generate or provide feedback on student assignments? (e.g., <a href='https://arxiv.org/pdf/2502.12927'><u>[1]</u></a>)</li><li>What methods can be used to extract long informative subspans from text, and how can these methods be improved? (e.g., <a href='https://aclanthology.org/2022.naacl-main.366/'><u>[1]</u></a> <a href='https://aclanthology.org/2023.acl-long.662/'><u>[2]</u></a> <a href='https://aclanthology.org/2024.eacl-long.35/'><u>[3]</u></a>)</li><li>What do multilingual benchmarks reveal about the performance and generalization limits of large language models across different downstream tasks? (e.g., <a href='https://aclanthology.org/2024.acl-long.620/'><u>[1]</u></a> <a href='https://openreview.net/forum?id=k3gCieTXeY'><u>[2]</u></a> <a href='https://aclanthology.org/2025.naacl-long.600/'><u>[3]</u></a>)</li></ul><br><br> <i>Feel free to reach out to me if any of my work is interesting and you have ideas or would like to collaborate!</i>",
  email: "jjz (at) cs.aau.dk",
  imageUrl:
    "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Zw6i1v0AAAAJ&citpid=1",
  googleScholarUrl: "https://scholar.google.nl/citations?user=Zw6i1v0AAAAJ&hl=en",
  githubUsername: "jjzha",
  linkedinUsername: "jjzha",
  // twitterUsername: "mjjzha",
  blueskyUsername: "mjjzha",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
