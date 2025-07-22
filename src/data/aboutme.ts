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
    "I'm a postdoc in Natural Language Processing at Aalborg University (Copenhagen), advised by <a href='https://bjerva.github.io/'>Prof. Johannes Bjerva</a> and <a href='https://vbn.aau.dk/en/persons/153280'>Prof. Euan Lindsay</a>. My research is currently at the intersection of NLP and Education. Additionally, I'm affiliated with the <a href='https://www.aicentre.dk/'>Pioneer Centre for Artificial Intelligence</a>.</p><p>Previously, I was a PhD student in NLP at the IT University of Copenhagen (ITU), advised by <a href='http://bplank.github.io'>Prof. Barbara Plank</a> and <a href='http://robvanderg.github.io'>Prof. Rob van der Goot</a>. I was part of <a href='http://nlpnorth.github.io'>NLPnorth</a> at ITU and <a href='https://mainlp.github.io'>MaiNLP</a> at the Ludwig Maximilian University of Munich (LMU).</p><p>My research has a strong applied side. I’m interested in questions such as:</p><ul><li>How effectively can large language models generate or provide feedback on student assignments? (<a href='https://arxiv.org/pdf/2502.12927'>[1]</a>)</li><li>What methods can be used to extract long informative subspans from text, and how can these methods be improved? (<a href='https://aclanthology.org/2022.naacl-main.366/'>[1]</a>, <a href='https://aclanthology.org/2023.acl-long.662/'>[2]</a>, <a href='https://aclanthology.org/2024.eacl-long.35/'>[3]</a>)</li><li>What do multilingual benchmarks reveal about the performance and generalization limits of large language models across different downstream tasks? (<a href='https://aclanthology.org/2024.acl-long.620/'>[1]</a>, <a href='https://openreview.net/forum?id=k3gCieTXeY'>[2]</a>, <a href='https://aclanthology.org/2025.naacl-long.600/'>[3]</a>)</li></ul><p><em>Feel free to reach out to me if any of my work is interesting and you have ideas or would like to collaborate.</em>",
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
