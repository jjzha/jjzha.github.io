export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024",
    institution: "IT University of Copenhagen",
    degree: "Ph.D. in Natural Language Processing",
    thesis: "Computational Job Market Analysis with Natural Language Processing",
    thesisUrl: "https://arxiv.org/abs/2404.18977",
    advisor: "Barbara Plank & Rob van der Goot",
  },
  {
    year: "2020",
    institution: "University of Groningen",
    degree: "M.Sc. Information Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2018",
    institution: "University of Groningen",
    degree: "B.Sc. Information Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  }
];
