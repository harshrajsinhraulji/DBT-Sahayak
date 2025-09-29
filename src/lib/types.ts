
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

export type Resource = {
  name: string;
  description: string;
  link: string;
}

export type Myth = {
  myth: string;
  fact: string;
}

export type Fact = {
    fact: string;
    explanation: string;
}

export type Language = 'en' | 'hi' | 'gu';

export type LanguageContent = {
  header: {
    title: string;
    nav: {
      education: string;
      videos: string;
      status: string;
      scholarships: string;
      myths: string;
      faq: string;
      contact: string;
      about: string;
      resources: string;
      governance: string;
      aboutTeam: string;
      printKit: string;
      requestDrive: string;
    };
    login: string;
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
    comparison: {
        title: string;
        subtitle: string;
        feature: string;
        linked: string;
        seeded: string;
        features: {
            feature: string;
            linked: string;
            seeded: string;
        }[];
    }
  };
  videos: {
    title: string;
    subtitle: string;
    videos: {
      title: string;
      description: string;
    }[];
  };
  statusChecker: {
    title: string;
    description: string;
    steps: string[];
    cta: string;
  };
   takeAction: {
    title: string;
    subtitle: string;
    card1: {
      title: string;
      description: string;
      cta: string;
    };
    card2: {
      title: string;
      description: string;
      cta: string;
    };
  };
  scholarships: {
    title: string;
    subtitle: string;
    scholarships: Scholarship[];
  };
  mythBusters: {
    title: string;
    subtitle: string;
    resultText: string;
    myths: Myth[];
    facts: Fact[];
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
  contact: {
    title: string;
    subtitle: string;
    helpline: string;
    resources: string;
    bankForms: Resource[];
  },
  about: {
    title: string;
    mandate: {
        title: string;
        subtitle: string;
        aboutText: string[];
        orgChartTitle: string;
    },
    institutionalFramework: {
        title: string;
        subtitle: string;
        points: {
            title: string;
            description: string;
        }[];
    },
    ourTeam: {
        title: string;
        subtitle: string;
    }
  },
  printKit: {
    title: string;
    subtitle: string;
    poster: {
      title: string;
      subtitle: string;
      point1: string;
      point2: string;
      cta: string;
    };
    flyer1: {
      title: string;
      text: string;
      stepsTitle: string;
      steps: string[];
    };
    flyer2: {
      title: string;
      text: string;
      myths: {
        title: string;
        list: string[];
      };
      tip: string;
    };
    instructions: {
      printButton: string;
      visitWebsite: string;
      mythLabel: string;
      footer: string;
    };
  };
  footer: {
    tagline: string;
    credits: string;
    navigation: string;
    resources: string;
    about: string;
    learnMore: string;
    github: string;
    telegram: string;
  };
  languages: {
    en: string;
    hi: string;
    gu: string;
  }
};

