export interface Publication {
  year?: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // === Working Papers (2025) ===
  {
    year: "2025",
    conference: "Technical Report",
    title: "Sailor2: Sailing in South-East Asia with Inclusive Multilingual LLMs",
    authors: "Longxu Dou, Qian Liu, Fan Zhou, Changyu Chen, ... (30 authors), Mike Zhang, Shiqi Chen, Tianyu Pang, Chao Du, Xinyi Wan, Wei Lu, Min Lin",
    paperUrl: "https://arxiv.org/pdf/2502.12982",
    codeUrl: "https://huggingface.co/collections/sailor2/sailor2-models-674d472668f3816be3f231bc",
  },
  {
    year: "2025",
    conference: "Under Review",
    title: "SEFL: Harnessing Large Language Model Agents to Improve Educational Feedback Systems",
    authors: "Mike Zhang, Amalie Pernille Dilling, Léon Gondelman, Niels Erik Ruan Lyngdorf, Euan D. Lindsay, Johannes Bjerva",
    paperUrl: "https://arxiv.org/pdf/2502.12927",
    codeUrl: "https://github.com/jjzha/sefl",
  },
  {
    year: "2025",
    conference: "Under Review",
    title: "HIFI-KPI: A Dataset for Hierarchical KPI Extraction from Earnings Filings",
    authors: "Rasmus T. Aavang, Giovanni Rizzi, Rasmus Tjalk-Bøggild, Alexandre Iolov, Mike Zhang, Johannes Bjerva",
    paperUrl: "https://arxiv.org/pdf/2502.15411",
    codeUrl: "",
  },

  // === Conference Proceedings (2025) ===
  {
    // year: "2025",
    conference: "CVPR'25",
    title: "All Languages Matter: Evaluating LMMs on Culturally Diverse 100 Languages",
    authors: "Ashmal Vayani, Dinura Dissanayake, Hasindri Watawana, ... (Other Authors), Mike Zhang, Mahardika Krisna Ihsani, ... (Other Authors), Fahad Khan",
    paperUrl: "https://arxiv.org/pdf/2411.16508.pdf",
    codeUrl: "https://mbzuai-oryx.github.io/ALM-Bench/",
  },
  {
    // year: "2025",
    conference: "CHI'25",
    title: "How Do Hackathons Foster Creativity? Towards AI Collaborative Evaluation of Creativity at Scale",
    authors: "Jeanette Falk, Yiyi Chen, Janet Rafner, Mike Zhang, Johannes Bjerva, Alexander Nolte",
    paperUrl: "https://arxiv.org/abs/2503.04290",
    codeUrl: "",
  },
  {
    // year: "2025",
    conference: "EDUCON'25",
    title: "The Responsible Development of Automated Student Feedback with Generative AI",
    authors: "Euan Lindsay, Mike Zhang, Aditya Johri, Johannes Bjerva",
    paperUrl: "https://arxiv.org/abs/2308.15334",
    codeUrl: "",
  },
  {
    // year: "2025",
    conference: "C3NLP'25 // NB-REAL'25",
    title: "DaKultur: Evaluating the Cultural Awareness of Language Models for Danish with Native Speakers",
    authors: "Max Müller-Eberstein*, Mike Zhang*, Elisa Bassignana, Peter Brunsgaard Trolle, Rob van der Goot",
    paperUrl: "",
    codeUrl: "",
  },
  {
    // year: "2025",
    conference: "NAACL'25",
    title: "SHADES: Towards a Multilingual Assessment of Stereotypes in Large Language Models",
    authors: "Margaret Mitchell, Giuseppe Attanasio, ... (Other Authors), Mike Zhang, Sydney Zink, Zeerak Talat",
    paperUrl: "",
    codeUrl: "",
  },
  {
    // year: "2025",
    conference: "ICLR'25",
    title: "INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge",
    authors: "Angelika Romanou, Negar Foroutan, Anna Sotnikova, ... (Other Authors), Mike Zhang, Imanol Schlag, Marzieh Fadaee, Sara Hooker, Antoine Bosselut",
    paperUrl: "https://arxiv.org/pdf/2411.19799.pdf",
    codeUrl: "https://huggingface.co/datasets/CohereForAI/include-base-44",
  },
  {
    // year: "2025",
    conference: "NoDaLiDa'25",
    title: "SnakModel: Lessons Learned from Training an Open Danish Large Language Model",
    authors: "Mike Zhang*, Max Müller-Eberstein*, Elisa Bassignana, Rob van der Goot",
    paperUrl: "https://arxiv.org/pdf/2412.12956.pdf",
    codeUrl: "https://github.com/nlpnorth/snakmodel/",
  },
  {
    // year: "2025",
    conference: "NoDaLiDa'25",
    title: "MorSeD: Morphological Segmentation of Danish and its Effect on Language Modeling",
    authors: "Rob van der Goot, Anette Jensen, Emil Allerslev Schledermann, Mikkel Wildner Kildeberg, Nicolaj Larsen, Mike Zhang, Elisa Bassignana",
    paperUrl: "https://dspace.ut.ee/server/api/core/bitstreams/4b696e54-6f7b-47f3-bfae-5f6f4590751a/content",
    codeUrl: "https://bitbucket.org/robvanderg/morsed",
  },

  // === Conference Proceedings (2024) ===
  {
    // year: "2024",
    conference: "SEFI'24",
    title: "Leveraging Large Language Models for Actionable Course Evaluation Student Feedback to Lecturers",
    authors: "Mike Zhang, Euan Lindsay, Frederik Bode Thorbensen, Danny Bøgsted Poulsen, Johannes Bjerva",
    paperUrl: "https://zenodo.org/records/14254832",
    codeUrl: "",
  },
  {
    // year: "2024",
    conference: "LREC-COLING'24",
    title: "Can Humans Identify Domains?",
    authors: "Maria Barrett*, Max Müller-Eberstein*, Elisa Bassignana*, Amalie Brogaard Pauli*, Mike Zhang*, Rob van der Goot*",
    paperUrl: "https://aclanthology.org/2024.lrec-main.245.pdf",
    codeUrl: "https://bitbucket.org/robvanderg/humans-and-domains/src",
  },
  {
    // year: "2024",
    conference: "ACL'24",
    title: "Aya Dataset: An Open-access Collection for Multilingual Instruction Tuning",
    authors: "Shivalika Singh, Freddie Vargus, Daniel D’souza, ... (Other Authors), Mike Zhang, Ramith Hettiarachchi, Joseph Wilson, ... (Other Authors), Sara Hooker",
    paperUrl: "https://aclanthology.org/2024.acl-long.620.pdf",
    codeUrl: "https://huggingface.co/datasets/CohereForAI/aya_dataset",
  },
  {
    // year: "2024",
    conference: "NLP4HR'24",
    title: "Deep Learning-based Computational Job Market Analysis: A Survey on Skill Extraction and Classification from Job Postings",
    authors: "Elena Senger, Mike Zhang, Rob van der Goot, Barbara Plank",
    paperUrl: "https://aclanthology.org/2024.nlp4hr-1.1.pdf",
    codeUrl: "",
  },
  {
    // year: "2024",
    conference: "NLP4HR'24",
    title: "Rethinking Skill Extraction in the Job Market Domain using Large Language Models",
    authors: "Khanh Cao Nguyen, Mike Zhang, Syrielle Montariol, Antoine Bosselut",
    paperUrl: "https://aclanthology.org/2024.nlp4hr-1.3.pdf",
    codeUrl: "https://github.com/epfl-nlp/SCESC-LLM-skill-extraction",
  },
  {
    // year: "2024",
    conference: "NLP4HR'24",
    title: "JOBSKAPE: A Framework for Generating Synthetic Job Postings to Enhance Skill Matching",
    authors: "Antoine Magron, Anna Dai, Mike Zhang, Syrielle Montariol, Antoine Bosselut",
    paperUrl: "https://aclanthology.org/2024.nlp4hr-1.4.pdf",
    codeUrl: "https://github.com/magantoine/JobSkape",
  },
  {
    // year: "2024",
    conference: "EACL'24",
    title: "Entity Linking in the Job Market Domain",
    authors: "Mike Zhang, Rob van der Goot, Barbara Plank",
    paperUrl: "https://aclanthology.org/2024.findings-eacl.28.pdf",
    codeUrl: "https://github.com/jjzha/el_esco",
  },
  {
    // year: "2024",
    conference: "EACL'24",
    title: "NNOSE: Nearest Neighbor Occupational Skill Extraction",
    authors: "Mike Zhang, Rob van der Goot, Min-Yen Kan, Barbara Plank",
    paperUrl: "https://aclanthology.org/2024.eacl-long.35.pdf",
    codeUrl: "https://github.com/mainlp/nnose",
  },

  // === Conference Proceedings (2023) ===
  {
    // year: "2023",
    conference: "ACL'23",
    title: "ESCOXLM-R: Multilingual Taxonomy-driven Pre-training for the Job Market Domain",
    authors: "Mike Zhang, Rob van der Goot, Barbara Plank",
    paperUrl: "https://aclanthology.org/2023.acl-long.662.pdf",
    codeUrl: "https://github.com/mainlp/escoxlmr",
  },

  // === Conference Proceedings (2022) ===
  {
    // year: "2022",
    conference: "EMNLP'22",
    title: "Evidence > Intuition: Transferability Estimation for Encoder Selection",
    authors: "Elisa Bassignana*, Max Müller-Eberstein*, Mike Zhang, Barbara Plank",
    paperUrl: "https://aclanthology.org/2022.emnlp-main.283.pdf",
    codeUrl: "https://github.com/mainlp/logme-nlp/tree/logme-integration",
  },
  {
    // year: "2022",
    conference: "RecSysHR'22",
    title: "Skill Extraction from Job Postings using Weak Supervision",
    authors: "Mike Zhang, Kristian Nørgaard Jensen, Rob van der Goot, Barbara Plank",
    paperUrl: "https://arxiv.org/pdf/2209.08071",
    codeUrl: "https://github.com/jjzha/skill-extraction-weak-supervision",
  },
  {
    // year: "2022",
    conference: "LREC'22",
    title: "Kompetencer: Fine-grained Skill Classification in Danish Job Postings via Distant Supervision and Transfer Learning",
    authors: "Mike Zhang, Kristian Nørgaard Jensen, Barbara Plank",
    paperUrl: "https://aclanthology.org/2022.lrec-1.46.pdf",
    codeUrl: "https://github.com/jjzha/kompetencer",
  },
  {
    // year: "2022",
    conference: "NAACL'22",
    title: "SkillSpan: Hard and Soft Skill Extraction from English Job Postings",
    authors: "Mike Zhang*, Kristian Nørgaard Jensen*, Sif Dam Sonniks, Barbara Plank",
    paperUrl: "https://aclanthology.org/2022.naacl-main.366.pdf",
    codeUrl: "https://github.com/kris927b/SkillSpan",
  },
  {
    // year: "2022",
    conference: "EMNLP'22",
    title: "Experimental Standards for Deep Learning in Natural Language Processing Research",
    authors: "Dennis Ulmer, Elisa Bassignana, Max Müller-Eberstein, Daniel Varab, Mike Zhang, Christian Hardmeier, Barbara Plank",
    paperUrl: "https://aclanthology.org/2022.findings-emnlp.196.pdf",
    codeUrl: "https://github.com/Kaleidophon/awesome-experimental-standards-deep-learning",
  },

  // === Workshops (2021 & earlier) ===
  {
    // year: "2021",
    conference: "NoDaLiDa'21",
    title: "De-identification of Privacy-related Entities in Job Postings",
    authors: "Kristian Nørgaard Jensen, Mike Zhang, Barbara Plank",
    paperUrl: "https://aclanthology.org/2021.nodalida-main.21.pdf",
    codeUrl: "https://github.com/kris927b/JobStack",
  },
  {
    // year: "2021",
    conference: "EMNLP'21",
    title: "Cartography Active Learning",
    authors: "Mike Zhang, Barbara Plank",
    paperUrl: "https://aclanthology.org/2021.findings-emnlp.36v2.pdf",
    codeUrl: "https://github.com/jjzha/cal",
  },
  {
    // year: "2019",
    conference: "WMT'19",
    title: "The Effect of Translationese in Machine Translation Test Sets",
    authors: "Mike Zhang, Antonio Toral",
    paperUrl: "https://aclanthology.org/W19-5208.pdf",
    codeUrl: "https://github.com/jjzha/translationese",
  },
  {
    // year: "2019",
    conference: "SemEval'19",
    title: "Grunn2019 at SemEval-2019 Task 5: Shared Task on Multilingual Detection of Hate",
    authors: "Mike Zhang, Roy David, Leon Graumans, Gerben Timmerman",
    paperUrl: "https://aclanthology.org/S19-2069.pdf",
    codeUrl: "https://github.com/jjzha/sharedhate",
  },
];

