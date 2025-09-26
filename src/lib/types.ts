export type Scholarship = {
  title: string;
  description: string;
  eligibility: string;
  link: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Language = 'en' | 'hi' | 'gu';

export type LanguageContent = {
  header: {
    title: string;
    nav: {
      education: string;
      status: string;
      scholarships: string;
      faq: string;
    };
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  education: {
    title: string;
    subtitle: string;
    card1: {
      title: string;
      description: string;
    };
    card2: {
      title: string;
      description: string;
    };
    videoTitle: string;
    videoDescription: string;
  };
  statusChecker: {
    title: string;
    description: string;
    steps: string[];
    cta: string;
  };
  scholarships: {
    title: string;
    subtitle: string;
    scholarships: Scholarship[];
  };
  awareness: {
    title: string;
    subtitle: string;
    stories: {
      name: string;
      story: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    faqs: FAQ[];
  };
  chatbot: {
    title: string;
    placeholder: string;
    initialMessage: string;
  };
  footer: {
    tagline: string;
    credits: string;
  };
  languages: {
    en: string;
    hi: string;
    gu: string;
  }
};
