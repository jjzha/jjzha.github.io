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
    year: "2020-2024",
    institution: "IT University of Copenhagen",
    degree: "Ph.D. in Natural Language Processing",
    advisor: "Barbara Plank & Rob van der Goot",
  },
  {
    year: "2018-2020",
    institution: "University of Groningen",
    degree: "M.Sc. Information Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2015-2018",
    institution: "University of Groningen",
    degree: "B.Sc. Information Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  }
];
