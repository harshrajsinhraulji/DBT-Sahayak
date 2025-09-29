
import type { Language, LanguageContent } from './types';

export const pageContent: Record<Language, LanguageContent> = {
  en: {
    header: {
      title: "DBT Sahayak",
      nav: {
        education: "Learn",
        videos: "Videos",
        status: "Check Status",
        takeAction: "Take Action",
        scholarships: "Schemes",
        myths: "Myth Busters",
        faq: "FAQ",
        contact: "Contact",
        about: "About Us",
        resources: "Resources",
        governance: "Governance",
        aboutTeam: "About Team",
        printKit: "Print Kit",
        requestDrive: "Request a Drive",
        formChecker: "AI Form Check",
        eligibilityChecker: "Eligibility Checker",
        awareness: "DBT Schemes",
        dbtMap: "Performance Map",
      },
      login: "Login/Register"
    },
    hero: {
      tagline: "India's Direct Benefit Transfer, simplified.",
      title: "A Comprehensive Guide to the DBT Ecosystem",
      subtitle: "From subsidies and pensions to wages and scholarships, understand how Direct Benefit Transfer (DBT) impacts millions of lives across India. Ensure you are DBT-ready.",
      cta: "Explore DBT Schemes",
    },
    education: {
      title: "Knowledge is Power",
      subtitle: "Understand the essentials for hassle-free benefit disbursement.",
      card1: {
        title: "Aadhaar Linked Account",
        description: "Your Aadhaar number is connected to your bank account, primarily for identity verification (e-KYC). This does NOT guarantee receipt of government benefits.",
      },
      card2: {
        title: "DBT-Enabled Aadhaar Seeded Account",
        description: "Your Aadhaar is mapped to a specific bank account on the National Payments Corporation of India (NPCI) server. This is MANDATORY to receive Direct Benefit Transfers (DBT).",
      },
      comparison: {
        title: "Side-by-Side Comparison",
        subtitle: "Key differences at a glance.",
        feature: "Feature",
        linked: "Aadhaar Linked",
        seeded: "DBT-Enabled (Seeded)",
        features: [
            { feature: "Purpose", linked: "Identity verification (KYC)", seeded: "Receiving government benefits (DBT)" },
            { feature: "Mechanism", linked: "Connected to bank's internal system.", seeded: "Mapped via national NPCI server." },
            { feature: "DBT Funds", linked: "Does NOT guarantee receipt.", seeded: "GUARANTEES receipt of DBT funds." },
            { feature: "Requirement", linked: "Good practice for banking.", seeded: "MANDATORY for all DBT Schemes." },
        ]
      }
    },
    videos: {
      title: "Watch & Learn",
      subtitle: "Watch these short videos to understand Aadhaar seeding better.",
      videos: [
        { title: "What is DBT?", description: "Learn the basics of Direct Benefit Transfer." },
        { title: "Linking vs Seeding", description: "Understand the crucial difference." },
        { title: "How to Seed", description: "A step-by-step guide to get it done." },
        { title: "Common Myths", description: "Debunking popular misconceptions." },
      ]
    },
    statusChecker: {
      title: "Check Your Aadhaar & Bank Account Seeding Status",
      description: "It's crucial to verify that your bank account is properly seeded with Aadhaar to receive DBT payments. Follow these simple steps on the official UIDAI portal.",
      steps: [
        "Visit the official UIDAI website (myaadhaar.uidai.gov.in). The status shown is fetched from the NPCI server and is the definitive source.",
        "Go to 'My Aadhaar' > 'Aadhaar Services' > 'Check Aadhaar/Bank Linking Status'.",
        "Enter your Aadhaar number and the security code.",
        "An OTP will be sent to your registered mobile number. Enter it to see your active seeding status.",
        "This will show you which bank account is currently seeded to receive DBT funds."
      ],
      cta: "Check Status on UIDAI Portal",
    },
     takeAction: {
      title: "Take Action Now",
      subtitle: "You've learned the importance of a DBT-enabled account. Here's how you can move forward.",
      card1: {
        title: "Track Your Journey",
        description: "If your account is not DBT-enabled, our personalized dashboard will guide you through every step, from downloading the form to checking your final status.",
        cta: "Go to Dashboard"
      },
      card2: {
        title: "Request a Drive",
        description: "We conduct free awareness seminars at schools, colleges, and local communities. Fill out a simple form to request a drive in your area.",
        cta: "Request an Awareness Drive"
      }
    },
    scholarships: {
      title: "DBT Scheme Explorer",
      subtitle: "Explore the wide range of schemes under DBT, from scholarships to pensions and subsidies.",
      categories: {
        all: "All",
        scholarships: "Scholarships",
        pensions: "Pensions",
        subsidies: "Subsidies",
      },
      schemes: [
        {
          title: "Post-Matric Scholarship for SC/OBC/EBC",
          description: "Financial aid for students from Scheduled Castes, Other Backward Classes, and Economically Backward Classes for studies beyond matriculation.",
          eligibility: "Parental income limits apply (e.g., up to ₹2.5 lakh for SC).",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 250000, categories: ['SC', 'OBC', 'EBC'], occupations: ['Student'] }
        },
        {
          title: "National Means-cum-Merit Scholarship (NMMS)",
          description: "For meritorious students of economically weaker sections to prevent drop-outs at class VIII.",
          eligibility: "Parental income up to ₹3.5 lakh. Must have scored at least 55% in Class VII.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 350000, occupations: ['Student'] }
        },
        {
          title: "Central Sector Scheme of Scholarship (CSSS)",
          description: "For meritorious students from low-income families to meet expenses while pursuing higher studies.",
          eligibility: "Top 20th percentile in Class XII, parental income < ₹4.5 lakh.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 450000, occupations: ['Student'] }
        },
         {
          title: "PM-KISAN Samman Nidhi",
          description: "An income support scheme providing ₹6,000 per year in three installments to all eligible farmer families.",
          eligibility: "All land-holding farmer families.",
          link: "https://pmkisan.gov.in/",
          category: "subsidy",
          eligibilityCriteria: { occupations: ['Farmer'] }
        },
        {
          title: "National Social Assistance Programme (NSAP)",
          description: "Provides financial assistance to the elderly, widows, and persons with disabilities under various components like old-age pensions.",
          eligibility: "Varies by scheme component, generally for BPL households.",
          link: "https://nsap.nic.in/",
          category: "pension",
          eligibilityCriteria: { minAge: 60 }
        },
        {
            title: "PAHAL (LPG Subsidy)",
            description: "Subsidy on LPG cooking gas cylinders is directly transferred to the bank accounts of eligible consumers.",
            eligibility: "All households with a domestic LPG connection.",
            link: "https://dbtbharat.gov.in/scheme/pahal/",
            category: "subsidy",
            eligibilityCriteria: {}
        },
        {
          title: "Indira Gandhi National Old Age Pension Scheme",
          description: "A component of NSAP, providing a monthly pension to elderly persons belonging to a BPL household.",
          eligibility: "Age 60+ years, from a BPL family.",
          link: "https://nsap.nic.in/nsap/About_NSAP/ignop_guidelines.pdf",
          category: "pension",
          eligibilityCriteria: { minAge: 60 }
        },
        {
          title: "Top Class Education for SC Students",
          description: "Provides full financial support for SC students in premier institutions like IITs, IIMs, and NITs.",
          eligibility: "SC students admitted to notified institutions. Parental income < ₹8 lakh.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 800000, categories: ['SC'], occupations: ['Student'] }
        },
        {
            title: "Prime Minister's Scholarship Scheme for RPF/RPSF",
            description: "Professional degree scholarships for the dependent wards of Railway Protection Force (RPF) personnel.",
            eligibility: "Wards of serving/ex-personnel. Minimum 60% in 12th/Diploma/Graduation.",
            link: "https://scholarships.gov.in/",
            category: "scholarship",
            eligibilityCriteria: { occupations: ['Student'] }
        },
         {
          title: "Pre-Matric Scholarships for Minorities",
          description: "To support minority community students for education from Class I to X.",
          eligibility: "Students from Muslim, Christian, Sikh, Buddhist, Jain, Parsi communities. Parental income < ₹1 lakh.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 100000, categories: ['Minority'], occupations: ['Student'] }
        },
         {
          title: "Atal Pension Yojana (APY)",
          description: "A government-backed pension scheme targeted at the unorganised sector.",
          eligibility: "Any citizen of India between 18-40 years of age.",
          link: "https://www.npscra.nsdl.co.in/scheme-details.php",
          category: "pension",
          eligibilityCriteria: { minAge: 18, maxAge: 40 }
        },
        {
          title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
          description: "Provides deposit-free LPG connections to women from adult BPL households.",
          eligibility: "Woman from a BPL household without an LPG connection in her name.",
          link: "https://www.pmuy.gov.in/",
          category: "subsidy",
          eligibilityCriteria: {}
        }
      ],
    },
    mythBusters: {
      title: "Myth Busters",
      subtitle: "Test your knowledge! Can you tell the difference between a DBT myth and a fact?",
      resultText: "You're now a certified Myth & Fact expert! Share your knowledge to help others.",
      myths: [
        {
          myth: "If my bank account is linked to Aadhaar, I will automatically get my DBT funds.",
          fact: "This is a major myth. Your account must be 'Seeded' with Aadhaar for DBT. Linking is just for KYC and is a separate process."
        },
        {
          myth: "I can receive my DBT funds in any of my Aadhaar-linked bank accounts.",
          fact: "This is a myth. You can only receive DBT payments in the ONE bank account that is currently seeded with your Aadhaar."
        },
        {
          myth: "My bank has my Aadhaar card photocopy, so my account is seeded.",
          fact: "This is a myth. Submitting a photocopy is not enough. You must fill out the specific 'Aadhaar Seeding Consent Form' and explicitly request seeding."
        },
        {
          myth: "If my seeding fails, it's an issue with the NPCI or UIDAI.",
          fact: "This is a myth. The responsibility for updating the NPCI mapper rests solely with the banks. You must follow up directly with your bank branch."
        },
        {
          myth: "DBT is only for scholarships.",
          fact: "This is a huge myth. DBT is a platform for over 300 schemes, including pensions (NSAP), subsidies (PM-KISAN, PAHAL), and wage payments (MGNREGA)."
        }
      ],
      facts: [
        {
          fact: "You must submit a specific 'Aadhaar Seeding Consent Form' to your bank to enable DBT.",
          explanation: "This is a fact. Simply having a linked account is not enough; you must give explicit consent for seeding."
        },
        {
          fact: "Only one bank account can be Aadhaar-seeded for DBT at any given time.",
          explanation: "This is a fact. If you seed a new account, it automatically de-links the previous one from the NPCI mapper."
        },
        {
          fact: "If biometric authentication fails, there are alternative ways to get benefits.",
          explanation: "This is a fact. Government guidelines include an 'exception handling mechanism' to ensure you still get benefits."
        },
        {
          fact: "If your name on Aadhaar and the bank account don't match exactly, seeding will fail.",
          explanation: "This is a fact. Your name must be identical in both records for the seeding process to succeed."
        },
        {
          fact: "You can check your Aadhaar seeding status on both the UIDAI and NPCI websites.",
          explanation: "This is a fact. Both official portals provide a facility to check which bank account is currently seeded for DBT."
        }
      ]
    },
    awareness: {
        title: "The Scope of DBT in India",
        subtitle: "DBT is more than just scholarships. It's a unified platform for over 300 schemes across 50+ ministries. Explore the major categories.",
        tableHeaders: {
            scheme: "Key Schemes",
            ministry: "Implementing Ministry",
            beneficiaries: "Beneficiaries"
        },
        categories: [
            {
                category: "Subsidies",
                description: "Direct financial support to reduce the cost of essential goods.",
                schemes: [
                    { name: "PAHAL (LPG subsidy), Fertilizer subsidy (pilot), Food subsidy (PDS in some states)", ministry: "Ministry of Petroleum, Ministry of Chemicals & Fertilizers, Ministry of Consumer Affairs", beneficiaries: "Households using LPG, farmers, ration card holders" }
                ]
            },
            {
                category: "Income Support",
                description: "Direct cash transfers to supplement the income of citizens.",
                schemes: [
                    { name: "PM-KISAN Samman Nidhi (₹6000/year to farmers), State-level farmer income support", ministry: "Ministry of Agriculture & Farmers’ Welfare", beneficiaries: "Small and marginal farmers" }
                ]
            },
            {
                category: "Wage Payments",
                description: "Direct payment of wages for public works programs.",
                schemes: [
                    { name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)", ministry: "Ministry of Rural Development", beneficiaries: "Rural households seeking employment" }
                ]
            },
            {
                category: "Social Security Pensions",
                description: "Regular financial assistance for vulnerable populations.",
                schemes: [
                    { name: "National Social Assistance Programme (NSAP), Old-age, Widow, and Disability pensions", ministry: "Ministry of Rural Development, State Social Welfare Depts", beneficiaries: "Elderly, widows, disabled persons" }
                ]
            },
            {
                category: "Healthcare-linked",
                description: "Financial aid for medical expenses and maternal care.",
                schemes: [
                    { name: "Janani Suraksha Yojana (JSY), Ayushman Bharat reimbursements, PMMVY", ministry: "Ministry of Health & Family Welfare, MoWCD", beneficiaries: "Pregnant women, newborns, low-income patients" }
                ]
            },
            {
                category: "Educational Benefits",
                description: "Support for students to continue their education.",
                schemes: [
                    { name: "Scholarships (pre-matric, post-matric), Fellowships, Mid-day meal cash transfers", ministry: "Ministry of Education, Ministry of Social Justice, Ministry of Minority Affairs", beneficiaries: "Students (SC, ST, OBC, minorities, etc.)" }
                ]
            },
            {
                category: "Housing & Asset Support",
                description: "Financial assistance for building homes and creating assets.",
                schemes: [
                    { name: "Pradhan Mantri Awas Yojana (PMAY), Indira Awaas Yojana (IAY - old)", ministry: "Ministry of Housing & Urban Affairs, MoRD", beneficiaries: "Rural and urban poor families" }
                ]
            },
             {
                category: "Relief & Emergency Transfers",
                description: "Immediate financial aid during disasters or emergencies.",
                schemes: [
                    { name: "PM Garib Kalyan Yojana (COVID relief), State-level disaster relief funds", ministry: "Ministry of Finance, State Relief Departments", beneficiaries: "Poor households, migrants, disaster-affected families" }
                ]
            },
             {
                category: "Others",
                description: "Targeted welfare schemes for specific communities.",
                schemes: [
                    { name: "Direct cash transfers for differently-abled, Tribal welfare schemes, Minority welfare DBTs", ministry: "Ministry of Social Justice, Ministry of Tribal Affairs, MoMA", beneficiaries: "Differently-abled, tribals, minorities" }
                ]
            }
        ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions about Aadhaar seeding and DBT.",
      faqs: [
        {
          question: "What is the difference between Aadhaar linking and Aadhaar seeding?",
          answer: "Aadhaar linking connects your Aadhaar to a bank account for identity verification (KYC). Aadhaar seeding is a separate, specific process of mapping your Aadhaar to a single bank account on the NPCI server to receive Direct Benefit Transfers (DBT). Seeding is mandatory for scholarships and other schemes.",
        },
        {
          question: "Can I have multiple Aadhaar-seeded accounts?",
          answer: "No, you can only have one Aadhaar-seeded account for receiving DBT at any given time. If you seed a new account, the previous one gets de-linked automatically. The subsidy will be credited to the last bank account that was successfully seeded.",
        },
        {
          question: "My DBT payment failed. What should I do?",
          answer: "First, check your seeding status on the UIDAI portal. If it's inactive or linked to the wrong account, visit your bank branch with the seeding form. Also, ensure your name and other details match exactly between your bank and Aadhaar records.",
        },
        {
          question: "How do I change my bank account to receive DBT funds?",
          answer: "To change your DBT-enabled account, you must visit the branch of the *new* bank where you want to receive funds. Submit the Aadhaar seeding consent form there. They will update the NPCI mapper, which automatically overrides the old account.",
        },
        {
          question: "My name is different in my Aadhaar card versus my bank account. What should I do?",
          answer: "You must get your name corrected in one of the documents so they match exactly. You can visit an Aadhaar Enrolment Centre to update your Aadhaar details, or your bank branch to update your bank records. The name must be identical for seeding to succeed.",
        },
        {
            question: "Is there a deadline for Aadhaar seeding?",
            answer: "There is no official deadline, but it is highly recommended to complete the process as soon as possible. Many schemes will not disburse funds to non-seeded accounts, so you may miss out on benefits if you delay."
        },
        {
          question: "Is Aadhaar mandatory to receive my pension or subsidy?",
          answer: "While Aadhaar is the preferred and most efficient method, the Supreme Court has ruled that essential benefits cannot be denied solely for lack of an Aadhaar number. If you don't have Aadhaar, you can use alternate government-approved IDs as specified by the scheme.",
        },
        {
          question: "How do I know that DBT funds have come to my account?",
          answer: "If you have enabled SMS alerts from your bank, you will receive a notification. You can also check your account balance via ATM, your bank's mobile app, internet banking, or by visiting a Bank Mitra/Correspondent.",
        },
      ],
    },
    contact: {
      title: "Contact & Resources",
      subtitle: "Find official contact information and downloadable bank forms.",
      helpline: "National Scholarship Portal Helpline: 0120 - 6619540",
      resources: "Bank Aadhaar Seeding Forms",
      bankForms: [
        { name: "State Bank of India (SBI)", description: "Aadhaar seeding application form for SBI customers.", link: "https://sbi.co.in/documents/16012/25194947/Aadhaar+Seeding+Process+for+Customers+of+Other+Banks+having+SBI+account.pdf" },
        { name: "Punjab National Bank (PNB)", description: "Aadhaar seeding application form for PNB customers.", link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35" },
        { name: "Bank of Baroda (BOB)", description: "Aadhaar seeding application form for BOB customers.", link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf" },
        { name: "HDFC Bank", description: "Aadhaar seeding application form for HDFC customers.", link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c" },
        { name: "ICICI Bank", description: "Aadhaar seeding instructions for ICICI customers.", link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card" },
        { name: "Axis Bank", description: "Aadhaar seeding application form for Axis customers.", link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf" }
      ]
    },
     about: {
      title: "About The DBT Mission",
      mandate: {
        title: "DBT Mission Mandate",
        subtitle: "The official mandate and history of Direct Benefit Transfer in India.",
        aboutText: [
            "The Direct Benefit Transfer (DBT) scheme was launched on January 1st, 2013, as a major governance reform to overhaul the welfare delivery system in India.",
            "Its primary goal is to improve the flow of government subsidies and benefits by re-engineering existing processes for simpler, faster, and more accurate delivery to beneficiaries, while reducing fraud and duplication.",
            "The DBT Mission, the nodal body for implementation, was initially in the Planning Commission, moved to the Department of Expenditure in 2013, and since 2015, has operated under the Cabinet Secretariat to give its work more impetus.",
            "DBT leverages the JAM trinity (Jan Dhan bank accounts, Aadhaar unique ID, and Mobile phones) to provide a transparent and efficient platform for transferring benefits directly into beneficiaries' accounts."
        ],
        orgChartTitle: "DBT Mission Organizational Structure"
      },
      institutionalFramework: {
        title: "Institutional Framework",
        subtitle: "The key government bodies that make DBT possible.",
        points: [
            {
                title: "DBT Mission (Cabinet Secretariat)",
                description: "The nodal agency responsible for policy, coordination, and overseeing the nationwide implementation of DBT."
            },
            {
                title: "Finance Ministry (CGA & PFMS)",
                description: "The Controller General of Accounts (CGA) runs the Public Financial Management System (PFMS), the core electronic platform for all DBT payments and reconciliation."
            },
            {
                title: "NPCI (National Payments Corporation of India)",
                description: "Operates the Aadhaar Payment Bridge (APB), the system that uses the Aadhaar number to route benefits to the correct bank account."
            },
            {
                title: "UIDAI (Aadhaar)",
                description: "Provides the unique identity verification (e-KYC) and authentication services that underpin the entire DBT framework."
            },
             {
                title: "Implementing Ministries & States",
                description: "Individual ministries (e.g., Rural Development for MGNREGA) and State Governments manage their own schemes and beneficiary lists, which integrate with the central DBT platforms."
            }
        ]
      },
      ourTeam: {
          title: "About The Team",
          subtitle: "The students behind DBT Sahayak for SIH 2025."
      }
    },
    printKit: {
      title: "Printable Awareness Kit",
      subtitle: "Download and print these materials for offline campaigns in schools and communities.",
      poster: {
        title: "Is Your Bank Account Ready for Your Scholarship?",
        subtitle: "Don't let a simple mistake stop your funds! Make sure your account is DBT-Enabled.",
        point1: "A DBT-Enabled (Aadhaar Seeded) account is MANDATORY for all government scholarships.",
        point2: "Just 'linking' your Aadhaar is NOT enough. Seeding is a separate, crucial step.",
        cta: "Check Your Status Today!",
      },
      flyer1: {
        title: "How to Get DBT-Ready",
        text: "Follow these steps to ensure your bank account is seeded with Aadhaar and ready for Direct Benefit Transfer (DBT).",
        stepsTitle: "4 Simple Steps:",
        steps: [
          "Download the 'Aadhaar Seeding Form' from your bank's website or our portal.",
          "Fill the form completely. Use our AI Form Checker online to avoid errors.",
          "Visit your bank branch with the form and a copy of your Aadhaar card.",
          "Submit the documents and get an acknowledgement slip.",
        ],
      },
      flyer2: {
        title: "DBT Facts & Myths",
        text: "Don't fall for common misconceptions about the scholarship process.",
        myths: {
          title: "Common Myths:",
          list: [
            "My Aadhaar-linked account will automatically get the scholarship.",
            "I can receive funds in any of my accounts.",
            "Aadhaar seeding is a one-time process and never needs to be checked.",
          ],
        },
        tip: "Pro Tip: Always check your seeding status on the official UIDAI website before scholarship season!",
      },
      instructions: {
        printButton: "Prepare Kit for Printing",
        visitWebsite: "For more tools and information, visit:",
        mythLabel: "Myth:",
        footer: "This kit is for educational and awareness purposes only. Produced by DBT Sahayak.",
      },
    },
    footer: {
      tagline: "Bridging the gap between citizens and government welfare through technology.",
      credits: "An initiative for Smart India Hackathon 2025.",
      navigation: "Navigation",
      resources: "Resources",
      about: "About",
      learnMore: "Learn More",
      github: "GitHub",
      telegram: "Telegram"
    },
    languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી"
    }
  },
  hi: {
    header: {
      title: "डीबीटी सहायक",
      nav: {
        education: "जानें",
        videos: "वीडियो",
        status: "स्थिति जांचें",
        takeAction: "कार्रवाई करें",
        scholarships: "योजनाएं",
        myths: "मिथक तोड़ें",
        faq: "अक्सर पूछे जाने वाले प्रश्न",
        contact: "संपर्क",
        about: "हमारे बारे में",
        resources: "संसाधन",
        governance: "शासन",
        aboutTeam: "टीम के बारे में",
        printKit: "प्रिंट किट",
        requestDrive: "ड्राइव का अनुरोध करें",
        formChecker: "एआई फॉर्म जांच",
        eligibilityChecker: "पात्रता जांचकर्ता",
        awareness: "डीबीटी योजनाएं",
        dbtMap: "प्रदर्शन मानचित्र",
      },
      login: "लॉगिन/रजिस्टर करें"
    },
    hero: {
      tagline: "भारत का प्रत्यक्ष लाभ हस्तांतरण, सरलीकृत।",
      title: "डीबीटी पारिस्थितिकी तंत्र के लिए एक व्यापक गाइड",
      subtitle: "सब्सिडी और पेंशन से लेकर मजदूरी और छात्रवृत्ति तक, समझें कि प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) पूरे भारत में लाखों लोगों के जीवन को कैसे प्रभावित करता है। सुनिश्चित करें कि आप डीबीटी-तैयार हैं।",
      cta: "डीबीटी योजनाएं देखें",
    },
    education: {
      title: "ज्ञान ही शक्ति है",
      subtitle: "परेशानी मुक्त लाभ वितरण के लिए आवश्यक बातें समझें।",
      card1: {
        title: "आधार लिंक्ड खाता",
        description: "आपका आधार नंबर पहचान सत्यापन (ई-केवाईसी) के लिए आपके बैंक खाते से जुड़ा होता है। यह सरकारी लाभों की प्राप्ति की गारंटी नहीं देता है।",
      },
      card2: {
        title: "डीबीटी-सक्षम आधार सीडेड खाता",
        description: "प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए आपका आधार भारतीय राष्ट्रीय भुगतान निगम (एनपीसीआई) सर्वर पर एक विशिष्ट बैंक खाते से मैप किया गया है। यह अनिवार्य है।",
      },
       comparison: {
        title: "आमने-सामने तुलना",
        subtitle: "एक नज़र में મુખ્ય अंतर।",
        feature: "विशेषता",
        linked: "आधार लिंक्ड",
        seeded: "डीबीटी-सक्षम (सीडेड)",
        features: [
            { feature: "उद्देश्य", linked: "पहचान सत्यापन (केवाईसी)", seeded: "सरकारी लाभ प्राप्त करना (डीबीटी)" },
            { feature: "तंत्र", linked: "बैंक की आंतरिक प्रणाली से जुड़ा।", seeded: "राष्ट्रीय एनपीसीआई सर्वर के माध्यम से मैप किया गया।" },
            { feature: "डीबीटी फंड", linked: "प्राप्ति की गारंटी नहीं।", seeded: "डीबीटी फंड की प्राप्ति की गारंटी देता है।" },
            { feature: "आवश्यकता", linked: "बैंकिंग के लिए अच्छी आदत।", seeded: "सभी डीबीटी योजनाओं के लिए अनिवार्य।" },
        ]
      }
    },
    videos: {
      title: "देखें और जानें",
      subtitle: "आधार सीडिंग को बेहतर ढंग से समझने के लिए ये छोटे वीडियो देखें।",
      videos: [
        { title: "डीबीटी क्या है?", description: "प्रत्यक्ष लाभ हस्तांतरण की मूल बातें जानें।" },
        { title: "लिंकिंग बनाम सीडिंग", description: "महत्वपूर्ण अंतर को समझें।" },
        { title: "कैसे सीड करें", description: "इसे पूरा करने के लिए चरण-दर-चरण मार्गदर्शिका।" },
        { title: "आम मिथक", description: "लोकप्रिय भ्रांतियों का खंडन।" },
      ]
    },
    statusChecker: {
      title: "अपने आधार और बैंक खाता सीडिंग स्थिति की जाँच करें",
      description: "डीबीटी भुगतान प्राप्त करने के लिए यह सत्यापित करना महत्वपूर्ण है कि आपका बैंक खाता आधार के साथ ठीक से सीड किया गया है। आधिकारिक यूआईडीएआई पोर्टल पर इन सरल चरणों का पालन करें।",
      steps: [
        "आधिकारिक यूआईडीएआई वेबसाइट (myaadhaar.uidai.gov.in) पर जाएं। दिखाई गई स्थिति एनपीसीआई सर्वर से प्राप्त की जाती है और यह निश्चित स्रोत है।",
        "यूआईडीएआई पर: 'माई आधार' > 'आधार सेवाएं' > 'आधार/बैंक लिंकिंग स्थिति जांचें' पर जाएं।",
        "अपना आधार नंबर और सुरक्षा कोड दर्ज करें।",
        "आपके पंजीकृत मोबाइल नंबर पर एक ओटीपी भेजा जाएगा। अपनी सक्रिय सीडिंग स्थिति देखने के लिए इसे दर्ज करें।",
        "इससे पता चलेगा कि कौन सा बैंक खाता वर्तमान में डीबीटी फंड प्राप्त करने के लिए सीड किया गया है।"
      ],
      cta: "यूआईडीएआई पोर्टल पर स्थिति जांचें",
    },
     takeAction: {
      title: "अभी कार्रवाई करें",
      subtitle: "आपने डीबीटी-सक्षम खाते के महत्व को जान लिया है। यहां बताया गया है कि आप आगे कैसे बढ़ सकते हैं।",
      card1: {
        title: "अपनी यात्रा को ट्रैक करें",
        description: "यदि आपका खाता डीबीटी-सक्षम नहीं है, तो हमारा व्यक्तिगत डैशबोर्ड आपको हर कदम पर मार्गदर्शन करेगा, फॉर्म डाउनलोड करने से लेकर आपकी अंतिम स्थिति की जाँच करने तक।",
        cta: "डैशबोर्ड पर जाएं"
      },
      card2: {
        title: "एक ड्राइव का अनुरोध करें",
        description: "हम स्कूलों, कॉलेजों और स्थानीय समुदायों में मुफ्त जागरूकता सेमिनार आयोजित करते हैं। अपने क्षेत्र में ड्राइव का अनुरोध करने के लिए एक साधारण फॉर्म भरें।",
        cta: "जागरूकता ड्राइव का अनुरोध करें"
      }
    },
    scholarships: {
      title: "डीबीटी योजना एक्सप्लोरर",
      subtitle: "डीबीटी के तहत योजनाओं की विस्तृत श्रृंखला का अन्वेषण करें, छात्रवृत्ति से लेकर पेंशन और सब्सिडी तक।",
      categories: {
        all: "सभी",
        scholarships: "छात्रवृत्तियाँ",
        pensions: "पेंशन",
        subsidies: "सब्सिडी",
      },
      schemes: [
        {
          title: "SC/OBC/EBC के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
          description: "अनुसूचित जाति, अन्य पिछड़ा वर्ग और आर्थिक रूप से पिछड़े वर्ग के छात्रों को मैट्रिक के बाद की पढ़ाई के लिए वित्तीय सहायता।",
          eligibility: "माता-पिता की आय सीमा लागू (जैसे, SC के लिए ₹2.5 लाख तक)।",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 250000, categories: ['SC', 'OBC', 'EBC'], occupations: ['Student'] }
        },
        {
          title: "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति (NMMS)",
          description: "आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों के लिए ताकि वे आठवीं कक्षा में पढ़ाई न छोड़ें।",
          eligibility: "माता-पिता की आय ₹3.5 लाख तक। सातवीं कक्षा में कम से कम 55% अंक होने चाहिए।",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 350000, occupations: ['Student'] }
        },
        {
          title: "कॉलेज/विश्वविद्यालय के छात्रों के लिए CSSS",
          description: "कम आय वाले परिवारों के मेधावी छात्रों को उच्च अध्ययन के दौरान खर्चों को पूरा करने के लिए।",
          eligibility: "बारहवीं कक्षा में शीर्ष 20 प्रतिशत में, माता-पिता की आय < ₹4.5 लाख।",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 450000, occupations: ['Student'] }
        },
         {
          title: "पीएम-किसान सम्मान निधि",
          description: "एक आय सहायता योजना जो सभी पात्र किसान परिवारों को तीन किस्तों में प्रति वर्ष ₹6,000 प्रदान करती है।",
          eligibility: "सभी भूमि-धारक किसान परिवार।",
          link: "https://pmkisan.gov.in/",
          category: "subsidy",
          eligibilityCriteria: { occupations: ['Farmer'] }
        },
        {
          title: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)",
          description: "वृद्धों, विधवाओं और विकलांग व्यक्तियों को वृद्धावस्था पेंशन जैसे विभिन्न घटकों के तहत वित्तीय सहायता प्रदान करता है।",
          eligibility: "योजना के घटक के अनुसार बदलता है, आम तौर पर बीपीएल परिवारों के लिए।",
          link: "https://nsap.nic.in/",
          category: "pension",
          eligibilityCriteria: { minAge: 60 }
        },
        {
            title: "पहल (एलपीजी सब्सिडी)",
            description: "एलपीजी रसोई गैस सिलेंडरों पर सब्सिडी सीधे पात्र उपभोक्ताओं के बैंक खातों में स्थानांतरित की जाती है।",
            eligibility: "घरेलू एलपीजी कनेक्शन वाले सभी परिवार।",
            link: "https://dbtbharat.gov.in/scheme/pahal/",
            category: "subsidy",
            eligibilityCriteria: {}
        },
        {
          title: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना",
          description: "एनएसएपी का एक घटक, जो एक बीपीएल परिवार के वृद्ध व्यक्तियों को मासिक पेंशन प्रदान करता है।",
          eligibility: "आयु 60+ वर्ष, एक बीपीएल परिवार से।",
          link: "https://nsap.nic.in/nsap/About_NSAP/ignop_guidelines.pdf",
          category: "pension",
          eligibilityCriteria: { minAge: 60 }
        },
        {
          title: "SC छात्रों के लिए टॉप क्लास शिक्षा",
          description: "आईआईटी, आईआईएम और एनआईटी जैसे प्रमुख संस्थानों में एससी छात्रों के लिए पूर्ण वित्तीय सहायता प्रदान करता है।",
          eligibility: "अधिसूचित संस्थानों में प्रवेश पाने वाले एससी छात्र। माता-पिता की आय < ₹8 लाख।",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 800000, categories: ['SC'], occupations: ['Student'] }
        },
        {
            title: "आरपीएफ/आरपीएसएफ के लिए प्रधानमंत्री छात्रवृत्ति योजना",
            description: "रेलवे सुरक्षा बल (आरपीएफ) के कर्मियों के आश्रित बच्चों के लिए व्यावसायिक डिग्री छात्रवृत्ति।",
            eligibility: "सेवारत/पूर्व कर्मियों के आश्रित। 12वीं/डिप्लोमा/स्नातक में न्यूनतम 60%।",
            link: "https://scholarships.gov.in/",
            category: "scholarship",
            eligibilityCriteria: { occupations: ['Student'] }
        },
        {
          title: "अल्पसंख्यकों के लिए प्री-मैट्रिक छात्रवृत्ति",
          description: "अल्पसंख्यक समुदाय के छात्रों को कक्षा I से X तक की शिक्षा के लिए समर्थन देना।",
          eligibility: "मुस्लिम, ईसाई, सिख, बौद्ध, जैन, पारसी समुदायों के छात्र। माता-पिता की आय < ₹1 लाख।",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 100000, categories: ['Minority'], occupations: ['Student'] }
        },
        {
          title: "अटल पेंशन योजना (APY)",
          description: "असंगठित क्षेत्र को लक्षित करने वाली एक सरकार समर्थित पेंशन योजना।",
          eligibility: "18-40 वर्ष की आयु के बीच भारत का कोई भी नागरिक।",
          link: "https://www.npscra.nsdl.co.in/scheme-details.php",
          category: "pension",
          eligibilityCriteria: { minAge: 18, maxAge: 40 }
        },
        {
          title: "प्रधानमंत्री उज्ज्वला योजना (PMUY)",
          description: "वयस्क बीपीएल परिवारों की महिलाओं को जमा-मुक्त एलपीजी कनेक्शन प्रदान करता है।",
          eligibility: "एक बीपीएल परिवार की महिला जिसके नाम पर कोई एलपीजी कनेक्शन नहीं है।",
          link: "https://www.pmuy.gov.in/",
          category: "subsidy",
          eligibilityCriteria: {}
        }
      ],
    },
     mythBusters: {
      title: "मिथक तोड़ें",
      subtitle: "अपने ज्ञान का परीक्षण करें! क्या आप डीबीटी मिथक और तथ्य के बीच अंतर बता सकते हैं?",
      resultText: "अब आप एक प्रमाणित मिथक और तथ्य विशेषज्ञ हैं! दूसरों की मदद करने के लिए अपना ज्ञान साझा करें।",
      myths: [
        {
          myth: "यदि मेरा बैंक खाता आधार से जुड़ा हुआ है, तो मुझे स्वतः ही मेरी डीबीटी निधि मिल जाएगी।",
          fact: "यह एक बड़ा मिथक है। आपके खाते को डीबीटी के लिए आधार के साथ 'सीड' किया जाना चाहिए। लिंकिंग केवल केवाईसी के लिए है।"
        },
        {
          myth: "मैं अपने किसी भी आधार-लिंक्ड बैंक खाते में अपनी डीबीटी निधि प्राप्त कर सकता हूँ।",
          fact: "यह एक मिथक है। आप केवल उसी एक बैंक खाते में डीबीटी भुगतान प्राप्त कर सकते हैं जो वर्तमान में आपके आधार के साथ सीड किया गया है।"
        },
        {
          myth: "मेरे बैंक के पास मेरे आधार कार्ड की फोटोकॉपी है, इसलिए मेरा खाता सीडेड है।",
          fact: "यह एक मिथक है। आपको विशिष्ट 'आधार सीडिंग सहमति फॉर्म' भरना होगा और स्पष्ट रूप से सीडिंग का अनुरोध करना होगा।"
        },
        {
          myth: "यदि मेरी सीडिंग विफल हो जाती है, तो यह एनपीसीआई या यूआईडीएआई के साथ एक समस्या है।",
          fact: "यह एक मिथક है। एनपीसीआई मैपर को अपडेट करने की जिम्मेदारी पूरी तरह से बैंकों की है। आपको अपनी बैंक शाखा से संपर्क करना होगा।"
        },
        {
          myth: "डीबीटी केवल छात्रवृत्ति के लिए है।",
          fact: "यह एक बहुत बड़ा मिथक है। डीबीटी 300 से अधिक योजनाओं के लिए एक मंच है, जिसमें पेंशन (एनएसएपी), सब्सिडी (पीएम-किसान, पहल), और मजदूरी भुगतान (मनरेगा) शामिल हैं।"
        }
      ],
      facts: [
        {
          fact: "डीबीटी को सक्षम करने के लिए आपको अपने बैंक में एक विशिष्ट 'आधार सीडिंग सहमति फॉर्म' जमा करना होगा।",
          explanation: "यह एक तथ्य है। केवल एक लिंक किया हुआ खाता होना पर्याप्त नहीं है; आपको सीडिंग के लिए स्पष्ट सहमति देनी होगी।"
        },
        {
          fact: "किसी भी समय डीबीटी के लिए केवल एक बैंक खाता आधार-સીડ किया जा सकता है।",
          explanation: "यह एक तथ्य है। यदि आप कोई नया खाता सीड करते हैं, तो यह स्वचालित रूप से पिछले खाते को एनपीसीआई मैपर से डी-लिंक कर देता है।"
        },
        {
          fact: "यदि बॉयोमीट्रिक प्रमाणीकरण विफल हो जाता है, तो लाभ प्राप्त करने के वैकल्पिक तरीके हैं।",
          explanation: "यह एक तथ्य है। सरकारी दिशानिर्देशों में एक 'अपवाद हैंडलिंग तंत्र' शामिल है ताकि यह सुनिश्चित हो सके कि आपको लाभ मिले।"
        },
        {
          fact: "यदि आधार और बैंक खाते पर आपका नाम बिल्कुल मेल नहीं खाता है, तो सीडिंग विफल हो जाएगी।",
          explanation: "यह एक तथ्य है। सीडिंग પ્રક્રિયા के सफल होने के लिए आपका नाम दोनों रिकॉर्ड में समान होना चाहिए।"
        },
        {
          fact: "आप यूआईडीएआई और एनपीसीआई दोनों वेबसाइटों पर अपनी आधार सीडिंग स्थिति की जांच कर सकते हैं।",
          explanation: "यह एक तथ्य है। दोनों आधिकारिक पोर्टल यह जांचने की सुविधा प्रदान करते हैं कि वर्तमान में कौन सा बैंक खाता डीबीटी के लिए सीड किया गया है।"
        }
      ]
    },
    awareness: {
        title: "भारत में डीबीटी का दायरा",
        subtitle: "डीबीटी सिर्फ छात्रवृत्ति से कहीं बढ़कर है। यह 50+ मंत्रालयों की 300 से अधिक योजनाओं के लिए एक एकीकृत मंच है। प्रमुख श्रेणियों का अन्वेषण करें।",
        tableHeaders: {
            scheme: "प्रमुख योजनाएं",
            ministry: "कार्यान्वयन मंत्रालय",
            beneficiaries: "लाभार्थी"
        },
        categories: [
            {
                category: "सब्सिडी",
                description: "आवश्यक वस्तुओं की लागत को कम करने के लिए प्रत्यक्ष वित्तीय सहायता।",
                schemes: [
                    { name: "पहल (एलपीजी सब्सिडी), उर्वरक सब्सिडी (पायलट), खाद्य सब्सिडी (कुछ राज्यों में पीडीएस)", ministry: "पेट्रोलियम मंत्रालय, रसायन और उर्वरक मंत्रालय, उपभोक्ता मामले मंत्रालय", beneficiaries: "एलपीजी का उपयोग करने वाले परिवार, किसान, राशन कार्ड धारक" }
                ]
            },
            {
                category: "आय सहायता",
                description: "नागरिकों की आय को पूरक करने के लिए प्रत्यक्ष नकद हस्तांतरण।",
                schemes: [
                    { name: "पीएम-किसान सम्मान निधि (किसानों को ₹6000/वर्ष), राज्य स्तरीय किसान आय सहायता", ministry: "कृषि एवं किसान कल्याण मंत्रालय", beneficiaries: "छोटे और सीमांत किसान" }
                ]
            },
            {
                category: "मजदूरी भुगतान",
                description: "सार्वजनिक निर्माण कार्यक्रमों के लिए मजदूरी का सीधा भुगतान।",
                schemes: [
                    { name: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा)", ministry: "ग्रामीण विकास मंत्रालय", beneficiaries: "रोजगार चाहने वाले ग्रामीण परिवार" }
                ]
            },
            {
                category: "सामाजिक सुरक्षा पेंशन",
                description: "कमजोर आबादी के लिए नियमित वित्तीय सहायता।",
                schemes: [
                    { name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (एनएसएपी), वृद्धावस्था, विधवा और विकलांगता पेंशन", ministry: "ग्रामीण विकास मंत्रालय, राज्य समाज कल्याण विभाग", beneficiaries: "बुजुर्ग, विधवाएं, विकलांग व्यक्ति" }
                ]
            },
            {
                category: "स्वास्थ्य सेवा से जुड़ा",
                description: "चिकित्सा खर्च और मातृ देखभाल के लिए वित्तीय सहायता।",
                schemes: [
                    { name: "जननी सुरक्षा योजना (जेएसवाई), आयुष्मान भारत प्रतिपूर्ति, पीएमएमवीवाई", ministry: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय, महिला एवं बाल विकास मंत्रालय", beneficiaries: "गर्भवती महिलाएं, नवजात शिशु, कम आय वाले रोगी" }
                ]
            },
            {
                category: "शैक्षिक लाभ",
                description: "छात्रों को अपनी शिक्षा जारी रखने के लिए सहायता।",
                schemes: [
                    { name: "छात्रवृत्ति (प्री-मैट्रिक, पोस्ट-मैट्रिक), फेलोशिप, मध्याह्न भोजन नकद हस्तांतरण", ministry: "शिक्षा मंत्रालय, सामाजिक न्याय मंत्रालय, अल्पसंख्यक मामले मंत्रालय", beneficiaries: "छात्र (एससी, एसटी, ओबीसी, अल्पसंख्यक, आदि)" }
                ]
            },
            {
                category: "आवास और संपत्ति सहायता",
                description: "घर बनाने और संपत्ति बनाने के लिए वित्तीय सहायता।",
                schemes: [
                    { name: "प्रधानमंत्री आवास योजना (पीएमएवाई), इंदिरा आवास योजना (आईएवाई - पुरानी)", ministry: "आવાસ एवं शहरी मामलों के मंत्रालय, ग्रामीण विकास मंत्रालय", beneficiaries: "ग्रामीण और शहरी गरीब परिवार" }
                ]
            },
            {
                category: "राहत और आपातकालीन हस्तांतरण",
                description: "आपदाओं या आपात स्थितियों के दौरान तत्काल वित्तीय सहायता।",
                schemes: [
                    { name: "पीएम गरीब कल्याण योजना (कोविड राहत), राज्य स्तरीय आपदा राहत कोष", ministry: "वित्त मंत्रालय, राज्य राहत विभाग", beneficiaries: "गरीब परिवार, प्रवासी, आपदा प्रभावित परिवार" }
                ]
            },
            {
                category: "अन्य",
                description: "विशिष्ट समुदायों के लिए लक्षित कल्याणकारी योजनाएं।",
                schemes: [
                    { name: "विकलांगों के लिए प्रत्यक्ष नकद हस्तांतरण, जनजातीय कल्याण योजनाएं, अल्पसंख्यक कल्याण डीबीटी", ministry: "सामाजिक न्याय मंत्रालय, जनजातीय मामले मंत्रालय, अल्पसंख्यक मामले मंत्रालय", beneficiaries: "विकलांग, आदिवासी, अल्पसंख्यक" }
                ]
            }
        ]
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "आधार सीडिंग और डीबीटी के बारे में सामान्य प्रश्नों के उत्तर प्राप्त करें।",
      faqs: [
        {
          question: "आधार लिंकिंग और आधार सीडिंग में क्या अंतर है?",
          answer: "आधार लिंकिंग आपके आधार को पहचान सत्यापन (केवाईसी) के लिए बैंक खाते से जोड़ता है। आधार सीडिंग आपके आधार को प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए एनपीसीआई सर्वर पर एक ही बैंक खाते से मैप करने की एक अलग, विशिष्ट प्रक्रिया है। छात्रवृत्ति और अन्य योजनाओं के लिए सीडिंग अनिवार्य है।",
        },
        {
          question: "क्या मेरे पास कई आधार-सीडेड खाते हो सकते हैं?",
          answer: "नहीं, आपके पास किसी भी समय डीबीटी प्राप्त करने के लिए सिर्फ एक आधार-सीडेड खाता हो सकता है। यदि आप कोई नया खाता सीड करते हैं, तो पिछला खाता स्वचालित रूप से डी-लिंक हो जाता है। सब्सिडी अंतिम सफलतापूर्वक सीड किए गए बैंक खाते में जमा की जाएगी।",
        },
        {
          question: "मेरा डीबीटी भुगतान विफल हो गया। मुझे क्या करना चाहिए?",
          answer: "सबसे पहले, यूआईडीएआई पोर्टल पर अपनी सीडिंग स्थिति की जांच करें। यदि यह निष्क्रिय है या गलत खाते से जुड़ा हुआ है, तो सीडिंग फॉर्म के साथ अपनी बैंक शाखा में जाएँ। यह भी सुनिश्चित करें कि आपके बैंक और आधार रिकॉर्ड के बीच आपका नाम और अन्य विवरण बिल्कुल मेल खाते हैं।",
        },
        {
          question: "डीबीटी फंड प्राप्त करने के लिए मैं अपना बैंक खाता कैसे बदलूं?",
          answer: "अपना डीबीटी-सक्षम खाता बदलने के लिए, आपको उस *नए* बैंक की शाखा में जाना होगा जहां आप फंड प्राप्त करना चाहते हैं। वहां आधार सीडिंग सहमति फॉर्म जमा करें। वे एनपीसीआई मैपर को अपडेट कर देंगे, जो पुराने खाते को स्वचालित रूप से ओवरराइड कर देगा।",
        },
        {
          question: "मेरा नाम मेरे आधार कार्ड बनाम मेरे बैंक खाते में अलग है। मुझे क्या करना चाहिए?",
          answer: "आपको अपने नाम को किसी एक दस्तावेज़ में ठीक करवाना होगा ताकि वे बिल्कुल मेल खाएं। आप अपने आधार की विवरण अपडेट करने के लिए किसी आधार नामांकन केंद्र पर जा सकते हैं, या अपने बैंक रिकॉर्ड को अपडेट करने के लिए अपनी बैंक शाखा में जा सकते हैं। सीडिंग के सफल होने के लिए नाम एक जैसा होना चाहिए।",
        },
        {
          question: "क्या आधार सीडिंग की कोई समय सीमा है?",
          answer: "कोई आधिकारिक समय सीमा नहीं है, लेकिन जल्द से जल्द प्रक्रिया पूरी करने की दृढ़ता से सिफारिश की जाती है। कई योजनाएं गैर-सीडेड खातों में धन का वितरण नहीं करेंगी, इसलिए यदि आप देरी करते हैं तो आप लाभों से वंचित रह सकते हैं।",
        },
        {
          question: "क्या मेरी पेंशन या सब्सिडी प्राप्त करने के लिए आधार अनिवार्य है?",
          answer: "जबकि आधार पसंदीदा और सबसे कुशल तरीका है, सुप्रीम कोर्ट ने फैसला सुनाया है कि सिर्फ आधार संख्या न होने के कारण आवश्यक लाभों से इनकार नहीं किया जा सकता है। यदि आपके पास आधार नहीं है, तो आप योजना द्वारा निर्दिष्ट वैकल्पिक सरकारी-अनुमोदित आईडी का उपयोग कर सकते हैं।",
        },
        {
          question: "मुझे कैसे पता चलेगा कि मेरे खाते में डीबीटी फंड आ गया है?",
          answer: "यदि आपने अपने बैंक से एसएमएस अलर्ट सक्षम किया है, तो आपको एक सूचना प्राप्त होगी। आप एटीएम, अपने बैंक के मोबाइल ऐप, इंटरनेट बैंकिंग के माध्यम से या बैंक मित्र/संवाददाता के पास जाकर भी अपने खाते की शेष राशि की जांच कर सकते हैं।",
        },
      ],
    },
    contact: {
      title: "संपर्क और संसाधन",
      subtitle: "आधिकारिक संपर्क जानकारी और डाउनलोड करने योग्य बैंक फॉर्म प्राप्त करें।",
      helpline: "राष्ट्रीय छात्रवृत्ति पोर्टल हेल्पलाइन: 0120 - 6619540",
      resources: "बैंक आधार सीडिंग फॉर्म",
      bankForms: [
        { name: "भारतीय स्टेट बैंक (एसबीआई)", description: "एसबीआई ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://sbi.co.in/documents/16012/25194947/Aadhaar+Seeding+Process+for+Customers+of+Other+Banks+having+SBI+account.pdf" },
        { name: "पंजाब नेशनल बैंक (पीएनबी)", description: "पीएनबी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35" },
        { name: "बैंक ऑफ बड़ौदा (बीओबी)", description: "बीओबी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf" },
        { name: "एचडीएफसी बैंक", description: "एचडीएफसी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c" },
        { name: "आईसीआईसीआई बैंक", description: "आईसीआईसीआई ग्राहकों के लिए आधार सीडिंग निर्देश।", link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card" },
        { name: "ऐक्सिस बैंक", description: "ऐक्सिस बैंक ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf" }
      ]
    },
    about: {
      title: "डीबीटी मिशन के बारे में",
      mandate: {
        title: "डीबीटी मिशन का जनादेश",
        subtitle: "भारत में प्रत्यक्ष लाभ हस्तांतरण का आधिकारिक जनादेश और इतिहास।",
        aboutText: [
            "प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) योजना 1 जनवरी 2013 को भारत में कल्याणकारी वितरण प्रणाली में सुधार के लिए एक बड़े सरकारी सुधार के तौर पर शुरू की गई थी।",
            "इसका प्राथमिक लक्ष्य सरल, तेज और अधिक सटीक वितरण के लिए मौजूदा प्रक्रियाओं को फिर से डिजाइन करके सरकारी सब्सिडी और लाभों के प्रवाह को बेहतर बनाना है, जबकि धोखाधड़ी और नकल को कम करना है।",
            "डीबीटी मिशन, कार्यान्वयन के लिए नोडल बॉडी, शुरू में योजना आयोग में था, 2013 में व्यय विभाग में स्थानांतरित हुआ, और 2015 से, इसके काम को और गति देने के लिए कैबिनेट सचिवालय के तहत काम कर रहा है।",
            "डीबीटी जेएएम ट्रिनिटी (જન ધન બેંક खाते, આધાર विशिष्ट आईडी, और मोबाइल फोन) का लाभ उठाता है ताकि लाभार्थियों के खातों में सीधे लाभ हस्तांतरित करने के लिए एक पारदर्शी और कुशल मंच प्रदान किया जा सके।"
        ],
        orgChartTitle: "डीबीटी मिशन संगठनात्मक संरचना"
      },
       institutionalFramework: {
        title: "संस्थागत ढांचा",
        subtitle: "डीबीटी को संभव बनाने वाले प्रमुख सरकारी निकाय।",
        points: [
            {
                title: "डीबीटी मिशन (कैबिनेट सचिवालय)",
                description: "नीति, સંકલન અને દેશભરમાં ડીબીટીના અમલીકરણની દેખરેખ માટે જવાબદાર નોડલ એજન્સી."
            },
            {
                title: "वित्त मंत्रालय (सीजीए और पीएफएमएस)",
                description: "नियंत्रक महालेखाकार (सीजीए) सार्वजनिक वित्तीय प्रबंधन प्रणाली (पीएफएमएस) चलाता है, जो सभी डीबीटी भुगतानों और सुलह के लिए मुख्य इलेक्ट्रॉनिक मंच है।"
            },
            {
                title: "एनपीसीआई (भारतीय राष्ट्रीय भुगतान निगम)",
                description: "आधार भुगतान ब्रिज (एपीबी) चलाता है, जो आधार नंबर का उपयोग करके सही बैंक खाते में लाभ पहुंचाने वाला सिस्टम है।"
            },
            {
                title: "यूआईडीएआई (आधार)",
                description: "विशिष्ट पहचान सत्यापन (ई-केवाईसी) और प्रमाणीकरण सेवाएं प्रदान करता है जो पूरे डीबीटी ढांचे की नींव हैं।"
            },
             {
                title: "कार्यान्वयन मंत्रालय और राज्य",
                description: "व्यक्तिगत मंत्रालय (जैसे, मनरेगा के लिए ग्रामीण विकास) और राज्य सरकारें अपनी योजनाएं और लाभार्थी सूचियाँ प्रबंधित करती हैं, जो केंद्रीय डीबीटी प्लेटफार्मों के साथ एकीकृत होती हैं।"
            }
        ]
      },
      ourTeam: {
          title: "टीम के बारे में",
          subtitle: "एसआईएच 2025 के लिए डीबीटी सहायक के पीछे के छात्र।"
      }
    },
    printKit: {
      title: "प्रिंट करने योग्य जागरूकता किट",
      subtitle: "स्कूलों और समुदायों में ऑफ़लाइन अभियानों के लिए इन सामग्रियों को डाउनलोड और प्रिंट करें।",
      poster: {
        title: "क्या आपका बैंक खाता आपकी छात्रवृत्ति के लिए तैयार है?",
        subtitle: "एक साधारण सी गलती को अपने फंड को रोकने न दें! सुनिश्चित करें कि आपका खाता डीबीटी-सक्षम है।",
        point1: "सभी सरकारी छात्रवृत्तियों के लिए एक डीबीटी-सक्षम (आधार सीडेड) खाता अनिवार्य है।",
        point2: "सिर्फ अपने आधार को 'लिंक' करना ही काफी नहीं है। सीडिंग एक अलग, महत्वपूर्ण कदम है।",
        cta: "आज ही अपनी स्थिति जांचें!",
      },
      flyer1: {
        title: "डीबीटी-तैयार कैसे बनें",
        text: "यह सुनिश्चित करने के लिए इन चरणों का पालन करें कि आपका बैंक खाता आधार के साथ सीड किया गया है और प्रत्यक्ष लाभ हस्तांतरણ (डीबीटी) के लिए तैयार है।",
        stepsTitle: "4 सरल चरण:",
        steps: [
          "अपने बैंक की वेबसाइट या हमारे पोर्टल से 'आधार सीडिंग फॉर्म' डाउनलोड करें।",
          "फॉर्म को पूरी तरह से भरें। त्रुटियों से बचने के लिए हमारे एआई फॉर्म चेकर का ऑनलाइन उपयोग करें।",
          "फॉर्म और अपने आधार कार्ड की एक प्रति के साथ अपनी बैंक शाखा में जाएँ।",
          "दस्तावेज जमा करें और एक पावती पर्ची प्राप्त करें।",
        ],
      },
      flyer2: {
        title: "डीबीटी तथ्य और मिथक",
        text: "छात्रवृत्ति प्रक्रिया के बारे में आम भ्रांतियों में न पड़ें।",
        myths: {
          title: "आम मिथक:",
          list: [
            "मेरा आधार-लिंक्ed खाता स्वतः ही छात्रवृत्ति प्राप्त कर लेगा।",
            "मैं अपने किसी भी खाते में फंड प्राप्त कर सकता हूँ।",
            "आधार सीडिंग एक बार की प्रक्रिया है और इसे कभी जांचने की आवश्यकता नहीं है।",
          ],
        },
        tip: "प्रो टिप: छात्रवृत्ति के मौसम से पहले हमेशा आधिकारिक यूआईडीएआई वेबसाइट पर अपनी सीडिंग स्थिति जांचें!",
      },
      instructions: {
        printButton: "प्रिंटिंग के लिए किट तैयार करें",
        visitWebsite: "अधिक उपकरणों और जानकारी के लिए, यहां जाएं:",
        mythLabel: "मिथक:",
        footer: "यह किट केवल शैक्षिक और जागरूकता उद्देश्यों के लिए है। डीबीटी सहायक द्वारा निर्मित।",
      },
    },
    footer: {
      tagline: "प्रौद्योगिकी के माध्यम से नागरिकों और सरकारी कल्याण के बीच की खाई को पाटना।",
      credits: "स्मार्ट इंडिया हैकथॉन २०२५ के लिए एक पहल।",
      navigation: "नेविगेशन",
      resources: "संसाધન",
      about: "हमारे बारे में",
      learnMore: "और जानें",
      github: "गिटहब",
      telegram: "टेलीग्राम"
    },
    languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી"
    }
  },
  gu: {
    header: {
      title: "ડીબીટી સહાયક",
      nav: {
        education: "જાણો",
        videos: "વીડિયો",
        status: "સ્થિતિ તપાસો",
        takeAction: "પગલાં લો",
        scholarships: "યોજનાઓ",
        myths: "માન્યતા તોડો",
        faq: "વારંવાર પૂછાતા પ્રશ્નો",
        contact: "સંપર્ક",
        about: "અમારા વિશે",
        resources: "સંસાધનો",
        governance: "શાસન",
        aboutTeam: "ટીમ વિશે",
        printKit: "પ્રિન્ટ કીટ",
        requestDrive: "ડ્રાઇવની વિનંતી કરો",
        formChecker: "એઆઈ ફોર્મ તપાસ",
        eligibilityChecker: "પાત્રતા તપાસનાર",
        awareness: "ડીબીટી યોજનાઓ",
        dbtMap: "પ્રદર્શન નકશો",
      },
      login: "લોગિન/રજીસ્ટર કરો"
    },
    hero: {
      tagline: "ભારતનું ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર, સરળ બનાવ્યું.",
      title: "ડીબીટી ઇકોસિસ્ટમ માટે એક વ્યાપક માર્ગદર્શિકા",
      subtitle: "સબસિડી અને પેન્શનથી લઈને મજૂરી અને શિષ્યવૃત્તિ સુધી, સમજો કે ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) સમગ્ર ભારતમાં લાખો લોકોના જીવનને કેવી રીતે અસર કરે છે. ખાતરી કરો કે તમે ડીબીટી-તૈયાર છો.",
      cta: "ડીબીટી યોજનાઓ શોધો",
    },
    education: {
      title: "જ્ઞાન એ જ શક્તિ છે",
      subtitle: "મુશ્કેલી-મુક્ત લાભ વિતરણ માટે જરૂરી બાબતોને સમજો.",
      card1: {
        title: "આધાર લિંક્ડ એકાઉન્ટ",
        description: "તમારો આધાર નંબર ફક્ત ઓળખ ચકાસણી (e-KYC) માટે તમારા બેંક ખાતા સાથે જોડાયેલ છે. આ સરકારી લાભોની પ્રાપ્તિની ખાતરી આપતું નથી.",
      },
      card2: {
        title: "ડીબીટી-સક્ષમ આધાર સીડેડ એકાઉન્ટ",
        description: "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) મેળવવા માટે તમારું આધાર નેશનલ પેમેન્ટ્સ કોર્પોરેશન ઓફ ઈન્ડિયા (NPCI) સર્વર પર ચોક્કસ બેંક ખાતા સાથે મેપ થયેલું છે. આ ફરજિયાત છે.",
      },
       comparison: {
        title: "આમને-સામને તુલના",
        subtitle: "એક નજરમાં મુખ્ય તફાવતો.",
        feature: "વિશેષતા",
        linked: "આધાર લિંક્ડ",
        seeded: "ડીબીટી-સક્ષમ (સીડેડ)",
        features: [
            { feature: "હેતુ", linked: "ઓળખ ચકાસણી (કેવાયસી)", seeded: "સરકારી લાભો મેળવવા (ડીબીટી)" },
            { feature: "પ્રણાલી", linked: "બેંકની આંતરિક સિસ્ટમ સાથે જોડાયેલ.", seeded: "રાષ્ટ્રીય એનપીસીઆઈ સર્વર દ્વારા મેપ થયેલ." },
            { feature: "ડીબીટી ભંડોળ", linked: "પ્રાપ્તિની ગેરંટી નથી.", seeded: "ડીબીટી ભંડોળની પ્રાપ્તિની ગેરંટી આપે છે." },
            { feature: "જરૂરિયાત", linked: "બેંકિંગ માટે સારી પ્રથા.", seeded: "બધી ડીબીટી યોજનાઓ માટે ફરજિયાત." },
        ]
      }
    },
    videos: {
      title: "જુઓ અને શીખો",
      subtitle: "આધાર સીડિંગને વધુ સારી રીતે સમજવા માટે આ ટૂંકી વિડિઓઝ જુઓ.",
      videos: [
        { title: "ડીબીટી શું છે?", description: "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફરની મૂળભૂત બાબતો જાણો." },
        { title: "લિંકિંગ વિરુદ્ધ સીડિંગ", description: "મહત્વપૂર્ણ તફાવતને સમજો." },
        { title: "કેવી રીતે સીડ કરવું", description: "તેને પૂર્ણ કરવા માટે પગલું-દર-પગલું માર્ગદર્શિકા." },
        { title: "સામાન્ય માન્યતાઓ", description: "લોકપ્રિય ગેરસમજોનું ખંડન." },
      ]
    },
    statusChecker: {
      title: "તમારા આધાર અને બેંક એકાઉન્ટ સીડિંગની સ્થિતિ તપાસો",
      description: "ડીબીટી ચુકવણીઓ મેળવવા માટે તમારું બેંક ખાતું આધાર સાથે યોગ્ય રીતે સીડ થયેલ છે તેની ખાતરી કરવી મહત્વપૂર્ણ છે. અધિકૃત યુઆઈડીએઆઈ પોર્ટલ પર આ સરળ પગલાં અનુસરો.",
      steps: [
        "અધિકૃત UIDAI વેબસાઇટ (myaadhaar.uidai.gov.in) ની મુલાકાત લો. બતાવેલ સ્થિતિ NPCI સર્વર પરથી મેળવવામાં આવે છે અને તે નિર્ણાયક સ્ત્રોત છે.",
        "UIDAI પર: 'માય આધાર' > 'આધાર સેવાઓ' > 'આધાર/બેંક લિંકિંગ સ્થિતિ તપાસો' પર જાઓ.",
        "તમારો આધાર નંબર અને સુરક્ષા કોડ દાખલ કરો.",
        "તમારા નોંધાયેલા મોબાઇલ નંબર પર એક OTP મોકલવામાં આવશે. તમારી સક્રિય સીડિંગ સ્થિતિ જોવા માટે તેને દાખલ કરો.",
        "આ બતાવશે કે કયું બેંક ખાતું હાલમાં DBT ભંડોળ મેળવવા માટે સીડ થયેલ છે."
      ],
      cta: "યુઆઈડીએઆઈ પોર્ટલ પર સ્થિતિ તપાસો",
    },
     takeAction: {
      title: "હવે પગલાં લો",
      subtitle: "તમે ડીબીટી-સક્ષમ ખાતાનું મહત્વ જાણ્યું છે. હવે તમે આગળ કેવી રીતે વધી શકો છો તે અહીં છે.",
      card1: {
        title: "તમારી યાત્રાને ટ્રેક કરો",
        description: "જો તમારું એકાઉન્ટ ડીબીટી-સક્ષમ નથી, તો અમારું વ્યક્તિગત ડેશબોર્ડ તમને દરેક પગલામાં માર્ગદર્શન આપશે, ફોર્મ ડાઉનલોડ કરવાથી માંડીને તમારી અંતિમ સ્થિતિ તપાસવા સુધી.",
        cta: "ડેશબોર્ડ પર જાઓ"
      },
      card2: {
        title: "ડ્રાઇવની વિનંતી કરો",
        description: "અમે શાળાઓ, કોલેજો અને સ્થાનિક સમુદાયોમાં મફત જાગૃતિ સેમિનાર યોજીએ છીએ. તમારા વિસ્તારમાં ડ્રાઇવની વિનંતી કરવા માટે એક સરળ ફોર્મ ભરો.",
        cta: "જાગૃતિ ડ્રાઇવની વિનંતી કરો"
      }
    },
    scholarships: {
      title: "ડીબીટી યોજના એક્સપ્લોરર",
      subtitle: "ડીબીટી હેઠળની યોજનાઓની વ્યાપક શ્રેણીનું અન્વેષણ કરો, શિષ્યવૃત્તિથી લઈને પેન્શન અને સબસિડી સુધી.",
      categories: {
        all: "બધી",
        scholarships: "શિષ્યવૃત્તિ",
        pensions: "પેન્શન",
        subsidies: "સબસિડી",
      },
      schemes: [
        {
          title: "SC/OBC/EBC માટે પોસ્ટ-મેટ્રિક શિષ્યવૃત્તિ",
          description: "અનુસૂચિત જાતિ, અન્ય પછાત વર્ગ અને આર્થિક રીતે પછાત વર્ગના વિદ્યાર્થીઓને મેટ્રિક પછીના અભ્યાસ માટે આર્થિક સહાય.",
          eligibility: "વાલીની આવક મર્યાદા લાગુ (દા.ત., SC માટે ₹2.5 લાખ સુધી).",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 250000, categories: ['SC', 'OBC', 'EBC'], occupations: ['Student'] }
        },
        {
          title: "રાષ્ટ્રીય મીન્સ-કમ-મેરિટ શિષ્યવૃત્તિ (NMMS)",
          description: "આર્થિક રીતે નબળા વર્ગના હોશિયાર વિદ્યાર્થીઓ માટે જેથી તેઓ ધોરણ 8 માં અભ્યાસ ન છોડે.",
          eligibility: "વાલીની આવક ₹3.5 લાખ સુધી. ધોરણ 7 માં ઓછામાં ઓછા 55% ગુણ હોવા જોઈએ.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 350000, occupations: ['Student'] }
        },
        {
          title: "કોલેજ/યુનિવર્સિટીના વિદ્યાર્થીઓ માટે CSSS",
          description: "ઓછી આવક ધરાવતા પરિવારોના હોશિયાર વિદ્યાર્થીઓને ઉચ્ચ અભ્યાસ દરમિયાન ખર્ચ પહોંચી વળવા.",
          eligibility: "ધોરણ 12 માં ટોચના 20 પર્સેન્ટાઇલમાં, વાલીની આવક < ₹4.5 લાખ.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 450000, occupations: ['Student'] }
        },
         {
          title: "પીએમ-કિસાન સન્માન નિધિ",
          description: "એક આવક સહાય યોજના જે તમામ પાત્ર ખેડૂત પરિવારોને ત્રણ હપ્તામાં પ્રતિ વર્ષ ₹6,000 પૂરા પાડે છે.",
          eligibility: "બધા જમીન-ધારક ખેડૂત પરિવારો.",
          link: "https://pmkisan.gov.in/",
          category: "subsidy",
          eligibilityCriteria: { occupations: ['Farmer'] }
        },
        {
          title: "રાષ્ટ્રીય સામાજિક સહાય કાર્યક્રમ (NSAP)",
          description: "વૃદ્ધો, વિધવાઓ અને વિકલાંગ વ્યક્તિઓને વૃદ્ધાવસ્થા પેન્શન જેવા વિવિધ ઘટકો હેઠળ નાણાકીય સહાય પૂરી પાડે છે.",
          eligibility: "યોજનાના ઘટક મુજબ બદલાય છે, સામાન્ય રીતે BPL પરિવારો માટે.",
          link: "https://nsap.nic.in/",
          category: "pension",
          eligibilityCriteria: { minAge: 60 }
        },
        {
            title: "પહેલ (LPG સબસિડી)",
            description: "LPG રાંધણ ગેસ સિલિન્ડરો પરની સબસિડી સીધા પાત્ર ગ્રાહકોના બેંક ખાતામાં ટ્રાન્સફર કરવામાં આવે છે.",
            eligibility: "ઘરેલું LPG કનેક્શન ધરાવતા તમામ પરિવારો.",
            link: "https://dbtbharat.gov.in/scheme/pahal/",
            category: "subsidy",
            eligibilityCriteria: {}
        },
        {
          title: "ઈન્દિરા ગાંધી રાષ્ટ્રીય વૃદ્ધાવસ્થા પેન્શન યોજના",
          description: "NSAP નો એક ઘટક, જે BPL પરિવારના વૃદ્ધ વ્યક્તિઓને માસિક પેન્શન પૂરું પાડે છે.",
          eligibility: "ઉંમર 60+ વર્ષ, BPL પરિવારમાંથી.",
          link: "https://nsap.nic.in/nsap/About_NSAP/ignop_guidelines.pdf",
          category: "pension",
          eligibilityCriteria: { minAge: 60 }
        },
        {
          title: "SC વિદ્યાર્થીઓ માટે ટોચના વર્ગનું શિક્ષણ",
          description: "આઈઆઈટી, આઈઆઈએમ અને એનઆઈટી જેવી પ્રીમિયર સંસ્થાઓમાં એસસી વિદ્યાર્થીઓ માટે સંપૂર્ણ નાણાકીય સહાય પૂરી પાડે છે.",
          eligibility: "સૂચિત સંસ્થાઓમાં પ્રવેશ મેળવનાર SC વિદ્યાર્થીઓ. વાલીની આવક < ₹8 લાખ.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 800000, categories: ['SC'], occupations: ['Student'] }
        },
        {
            title: "આરપીએફ/આરપીએસએફ માટે પ્રધાનમંત્રી શિષ્યવૃત્તિ યોજના",
            description: "રેલવે સુરક્ષા દળ (આરપીએફ) ના કર્મચારીઓના આશ્રિત બાળકો માટે વ્યાવસાયિક ડિગ્રી શિષ્યવૃત્તિ.",
            eligibility: "સેવારત/ભૂતપૂર્વ કર્મચારીઓના આશ્રિતો. 12મા/ડિપ્લોમા/સ્નાતકમાં ન્યૂનતમ 60%.",
            link: "https://scholarships.gov.in/",
            category: "scholarship",
            eligibilityCriteria: { occupations: ['Student'] }
        },
        {
          title: "લઘુમતીઓ માટે પ્રી-મેટ્રિક શિષ્યવૃત્તિ",
          description: "લઘુમતી સમુદાયના વિદ્યાર્થીઓને ધોરણ I થી X સુધીના શિક્ષણ માટે ટેકો આપવા.",
          eligibility: "મુસ્લિમ, ખ્રિસ્તી, શીખ, બૌદ્ધ, જૈન, પારસી સમુદાયના વિદ્યાર્થીઓ. વાલીની આવક < ₹1 લાખ.",
          link: "https://scholarships.gov.in/",
          category: "scholarship",
          eligibilityCriteria: { maxIncome: 100000, categories: ['Minority'], occupations: ['Student'] }
        },
        {
          title: "અટલ પેન્શન યોજના (APY)",
          description: "અસંગઠિત ક્ષેત્રને લક્ષ્યાંકિત કરતી સરકાર સમર્થિત પેન્શન યોજના.",
          eligibility: "18-40 વર્ષની વયના કોઈપણ ભારતીય નાગરિક.",
          link: "https://www.npscra.nsdl.co.in/scheme-details.php",
          category: "pension",
          eligibilityCriteria: { minAge: 18, maxAge: 40 }
        },
        {
          title: "પ્રધાનમંત્રી ઉજ્જવલા યોજના (PMUY)",
          description: "પુખ્ત BPL પરિવારોની મહિલાઓને ડિપોઝિટ-મુક્ત LPG કનેક્શન પૂરા પાડે છે.",
          eligibility: "BPL પરિવારની મહિલા જેના નામે LPG કનેક્શન નથી.",
          link: "https://www.pmuy.gov.in/",
          category: "subsidy",
          eligibilityCriteria: {}
        }
      ],
    },
    mythBusters: {
      title: "માન્યતા તોડો",
      subtitle: "તમારા જ્ઞાનનું પરીક્ષણ કરો! શું તમે ડીબીટીની માન્યતા અને હકીકત વચ્ચેનો તફાવત કહી શકો છો?",
      resultText: "તમે હવે પ્રમાણિત માન્યતા અને હકીકત નિષ્ણાત છો! બીજાઓને મદદ કરવા માટે તમારું જ્ઞાન શેર કરો.",
      myths: [
        {
          myth: "જો મારું બેંક ખાતું આધાર સાથે જોડાયેલું હોય, તો મને આપમેળે મારી ડીબીટી ભંડોળ મળી જશે.",
          fact: "આ એક મોટી માન્યતા છે. તમારું ખાતું ડીબીટી માટે આધાર સાથે 'સીડ' થયેલું હોવું જોઈએ. લિંકિંગ ફક્ત કેવાયસી માટે છે."
        },
        {
          myth: "હું મારા કોઈપણ આધાર-લિંક્ડ બેંક ખાતામાં મારી ડીબીટી ભંડોળ મેળવી શકું છું.",
          fact: "આ એક માન્યતા છે. તમે ફક્ત તે જ એક બેંક ખાતામાં ડીબીટી ચુકવણીઓ મેળવી શકો છો જે હાલમાં તમારા આધાર સાથે સીડ થયેલ છે."
        },
        {
          myth: "મારી બેંક પાસે મારા આધાર કાર્ડની ફોટોકોપી છે, તેથી મારું ખાતું સીડ થયેલું છે.",
          fact: "આ એક માન્યતા છે. તમારે વિશિષ્ટ 'આધાર સીડિંગ સંમતિ ફોર્મ' ભરવું પડશે અને સ્પષ્ટપણે સીડિંગની વિનંતી કરવી પડશે."
        },
        {
          myth: "જો મારી સીડિંગ નિષ્ફળ જાય, તો તે એનપીસીઆઈ અથવા યુઆઈડીએઆઈ સાથેની સમસ્યા છે.",
          fact: "આ એક માન્યતા છે. એનપીસીઆઈ મેપરને અપડેટ કરવાની જવાબદારી સંપૂર્ણપણે બેંકોની છે. તમારે તમારી બેંક શાખાનો સંપર્ક કરવો પડશે."
        },
        {
          myth: "ડીબીટી ફક્ત શિષ્યવૃત્તિ માટે છે.",
          fact: "આ એક મોટી માન્યતા છે. ડીબીટી ૩૦૦ થી વધુ યોજનાઓ માટે એક પ્લેટફોર્મ છે, જેમાં પેન્શન (એનએસએપી), સબસિડી (પીએમ-કિસાન, પહેલ), અને વેતન ચુકવણી (મનરેગા) શામેલ છે."
        }
      ],
      facts: [
        {
          fact: "ડીબીટીને સક્ષમ કરવા માટે તમારે તમારી બેંકમાં એક વિશિષ્ટ 'આધાર સીડિંગ સંમતિ ફોર્મ' સબમિટ કરવું આવશ્યક છે.",
          explanation: "આ એક હકીકત છે. ફક્ત લિંક કરેલું એકાઉન્ટ હોવું પૂરતું નથી; તમારે સીડિંગ માટે સ્પષ્ટ સંમતિ આપવી આવશ્યક છે."
        },
        {
          fact: "કોઈપણ સમયે ડીબીટી માટે ફક્ત એક જ બેંક ખાતું આધાર-સીડ કરી શકાય છે.",
          explanation: "આ એક હકીકત છે. જો તમે નવું ખાતું સીડ કરો છો, તો તે આપમેળે પાછલા ખાતાને એનપીસીઆઈ મેપરથી ડિ-લિંક કરે છે."
        },
        {
          fact: "જો બાયોમેટ્રિક પ્રમાણીકરણ નિષ્ફળ જાય, તો લાભ મેળવવાના વૈકલ્પિક રસ્તાઓ છે.",
          explanation: "આ એક હકીકત છે. સરકારી માર્ગદર્શિકાઓમાં 'અપવાદ સંભાળવાની પદ્ધતિ' શામેલ છે જેથી ખાતરી કરી શકાય કે તમને લાભ મળે."
        },
        {
          fact: "જો આધાર અને બેંક ખાતા પર તમારું નામ બરાબર મેળ ખાતું નથી, તો સીડિંગ નિષ્ફળ જશે.",
          explanation: "આ એક હકીકત છે. સીડિંગ પ્રક્રિયા સફળ થવા માટે તમારું નામ બંને રેકોર્ડમાં સરખું હોવું આવશ્યક છે."
        },
        {
          fact: "તમે યુઆઈડીએઆઈ અને એનપીસીઆઈ બંને વેબસાઇટ્સ પર તમારી આધાર સીડિંગની સ્થિતિ ચકાસી શકો છો.",
          explanation: "આ એક હકીકત છે. બંને અધિકૃત પોર્ટલ હાલમાં કયું બેંક ખાતું ડીબીટી માટે સીડ થયેલ છે તે તપાસવાની સુવિધા પૂરી પાડે છે."
        }
      ]
    },
    awareness: {
        title: "ભારતમાં ડીબીટીનો વ્યાપ",
        subtitle: "ડીબીટી ફક્ત શિષ્યવૃત્તિ કરતાં ઘણું વધારે છે. તે 50+ મંત્રાલયોની 300 થી વધુ યોજનાઓ માટે એકીકૃત પ્લેટફોર્મ છે. મુખ્ય શ્રેણીઓનું અન્વેષણ કરો.",
        tableHeaders: {
            scheme: "મુખ્ય યોજનાઓ",
            ministry: "અમલીકરણ મંત્રાલય",
            beneficiaries: "લાભાર્થીઓ"
        },
        categories: [
            {
                category: "સબસિડી",
                description: "આવશ્યક ચીજવસ્તુઓનો ખર્ચ ઘટાડવા માટે સીધી નાણાકીય સહાય.",
                schemes: [
                    { name: "પહેલ (LPG સબસિડી), ખાતર સબસિડી (પાયલોટ), ખાદ્ય સબસિડી (કેટલાક રાજ્યોમાં PDS)", ministry: "પેટ્રોલિયમ મંત્રાલય, રસાયણ અને ખાતર મંત્રાલય, ગ્રાહક બાબતોનું મંત્રાલય", beneficiaries: "LPG વાપરતા પરિવારો, ખેડૂતો, રેશનકાર્ડ ધારકો" }
                ]
            },
            {
                category: "આવક સહાય",
                description: "નાગરિકોની આવકને પૂરક બનાવવા માટે સીધા રોકડ ટ્રાન્સફર.",
                schemes: [
                    { name: "પીએમ-કિસાન સન્માન નિધિ (ખેડૂતોને ₹6000/વર્ષ), રાજ્ય સ્તરીય ખેડૂત આવક સહાય", ministry: "કૃષિ અને ખેડૂત કલ્યાણ મંત્રાલય", beneficiaries: "નાના અને સીમાંત ખેડૂતો" }
                ]
            },
            {
                category: "વેતન ચુકવણી",
                description: "જાહેર બાંધકામ કાર્યક્રમો માટે વેતનની સીધી ચુકવણી.",
                schemes: [
                    { name: "મહાત્મા ગાંધી રાષ્ટ્રીય ગ્રામੀણ રોજગાર ગેરંટી અધિનિયમ (MGNREGA)", ministry: "ગ્રામીણ વિકાસ મંત્રાલય", beneficiaries: "રોજગાર ઇચ્છતા ગ્રામીણ પરિવારો" }
                ]
            },
            {
                category: "સામાજિક સુરક્ષા પેન્શન",
                description: "નબળા વર્ગના લોકો માટે નિયમિત નાણાકીય સહાય.",
                schemes: [
                    { name: "રાષ્ટ્રીય સામાજિક સહાય કાર્યક્રમ (NSAP), વૃદ્ધાવસ્થા, વિધવા અને વિકલાંગતા પેન્શન", ministry: "ગ્રામીણ વિકાસ મંત્રાલય, રાજ્ય સમાજ કલ્યાણ વિભાગો", beneficiaries: "વૃદ્ધો, વિધવાઓ, વિકલાંગ વ્યક્તિઓ" }
                ]
            },
            {
                category: "આરોગ્ય-સંબંધિત",
                description: "તબીબી ખર્ચ અને માતૃત્વ સંભાળ માટે નાણાકીય સહાય.",
                schemes: [
                    { name: "જનની સુરક્ષા યોજના (JSY), આયુષ્માન ભારત ભરપાઈ, PMMVY", ministry: "આરોગ્ય અને પરિવાર કલ્યાણ મંત્રાલય, MoWCD", beneficiaries: "સગર્ભા સ્ત્રીઓ, નવજાત શિશુઓ, ઓછી આવક ધરાવતા દર્દીઓ" }
                ]
            },
            {
                category: "શૈક્ષણિક લાભો",
                description: "વિદ્યાર્થીઓને તેમનું શિક્ષણ ચાલુ રાખવા માટે સહાય.",
                schemes: [
                    { name: "શિષ્યવૃત્તિ (પ્રી-મેટ્રિક, પોસ્ટ-મેટ્રિક), ફેલોશિપ, મધ્યાહન ભોજન રોકડ ટ્રાન્સફર", ministry: "શિક્ષણ મંત્રાલય, સામાજિક ન્યાય મંત્રાલય, લઘુમતી બાબતોનું મંત્રાલય", beneficiaries: "વિદ્યાર્થીઓ (SC, ST, OBC, લઘુમતીઓ, વગેરે)" }
                ]
            },
            {
                category: "આવાસ અને સંપત્તિ સહાય",
                description: "ઘર બનાવવા અને સંપત્તિ બનાવવા માટે નાણાકીય સહાય.",
                schemes: [
                    { name: "પ્રધાનમંત્રી આવાસ યોજના (PMAY), ઇન્દિરા આવાસ યોજના (IAY - જૂની)", ministry: "આવાસ અને શહેરી બાબતોનું મંત્રાલય, MoRD", beneficiaries: "ગ્રામીણ અને શહેરી ગરીબ પરિવારો" }
                ]
            },
            {
                category: "રાહત અને કટોકટી ટ્રાન્સફર",
                description: "આપત્તિઓ અથવા કટોકટી દરમિયાન તાત્કાલિક નાણાકીય સહાય.",
                schemes: [
                    { name: "પીએમ ગરીબ કલ્યાણ યોજના (કોવિડ રાહત), રાજ્ય સ્તરીય આપત્તિ રાહત ભંડોળ", ministry: "નાણા મંત્રાલય, રાજ્ય રાહત વિભાગો", beneficiaries: "ગરીબ પરિવારો, સ્થળાંતર કરનારાઓ, આપત્તિગ્રસ્ત પરિવારો" }
                ]
            },
            {
                category: "અન્ય",
                description: "ચોક્કસ સમુદાયો માટે લક્ષિત કલ્યાણકારી યોજનાઓ.",
                schemes: [
                    { name: "વિકલાંગો માટે સીધા રોકડ ટ્રાન્સફર, આદિવાસી કલ્યાણ યોજનાઓ, લઘુમતી કલ્યાણ ડીબીટી", ministry: "સામાજિક ન્યાય મંત્રાલય, આદિજાતિ બાબતોનું મંત્રાલય, MoMA", beneficiaries: "વિકલાંગ, આદિવાસીઓ, લઘુમતીઓ" }
                ]
            }
        ]
    },
    faq: {
      title: "વારંવાર પૂછાતા પ્રશ્નો",
      subtitle: "આધાર સીડિંગ અને ડીબીટી વિશેના સામાન્ય પ્રશ્નોના જવાબો મેળવો.",
      faqs: [
        {
          question: "આધાર લિંકિંગ અને આધાર સીડિંગ વચ્ચે શું તફાવત છે?",
          answer: "આધાર લિંકિંગ તમારા આધારને ઓળખ ચકાસણી (KYC) માટે બેંક ખાતા સાથે જોડે છે. આધાર સીડિંગ તમારા આધારને ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) મેળવવા માટે NPCI સર્વર પર એક જ બેંક ખાતા સાથે મેપ કરવાની એક અલગ, વિશિષ્ટ પ્રક્રિયા છે. શિષ્યવૃત્તિ અને અન્ય યોજનાઓ માટે સીડિંગ ફરજિયાત છે.",
        },
        {
          question: "શું મારી પાસે બહુવિધ આધાર-સીડેડ ખાતા હોઈ શકે છે?",
          answer: "ના, તમારી પાસે કોઈ પણ સમયે DBT મેળવવા માટે ફક્ત એક જ આધાર-સીડેડ ખાતું હોઈ શકે છે. જો તમે નવું ખાતું સીડ કરો છો, તો પાછલું ખાતું આપમેળે ડી-લિંક થઈ જાય છે. સબસિડી છેલ્લા સફળતાપૂર્વક સીડ થયેલા બેંક ખાતામાં જમા કરવામાં આવશે.",
        },
        {
          question: "મારી ડીબીટી ચુકવણી નિષ્ફળ ગઈ. મારે શું કરવું જોઈએ?",
          answer: "પ્રથમ, યુઆઈડીએઆઈ પોર્ટલ પર તમારી સીડિંગ સ્થિતિ તપાસો. જો તે નિષ્ક્રિય હોય અથવા ખોટા ખાતા સાથે જોડાયેલ હોય, તો સીડિંગ ફોર્મ સાથે તમારી બેંક શાખાની મુલાકાત લો. એ પણ સુનિશ્ચિત કરો કે તમારું નામ અને અન્ય વિગતો તમારા બેંક અને આધાર રેકોર્ડ્સ વચ્ચે બરાબર મેળ ખાય છે.",
        },
        {
          question: "ડીબીટી ફંડ મેળવવા માટે હું મારું બેંક ખાતું કેવી રીતે બદલી શકું?",
          answer: "તમારું ડીબીટી-સક્ષમ ખાતું બદલવા માટે, તમારે તે *નવી* બેંકની શાખાની મુલાકાત લેવી આવશ્યક છે જ્યાં તમે ભંડોળ મેળવવા માંગો છો. ત્યાં આધાર સીડિંગ સંમતિ ફોર્મ સબમિટ કરો. તેઓ NPCI મેપરને અપડેટ કરશે, જે જૂના ખાતાને આપમેળે ઓવરરાઇડ કરશે.",
        },
        {
            question: "મારું નામ મારા આધાર કાર્ડ વિરુદ્ધ મારા બેંક ખાતામાં અલગ છે. મારે શું કરવું જોઈએ?",
            answer: "તમારે તમારા નામને દસ્તાવેજોમાંથી એકમાં સુધારવું પડશે જેથી તે બરાબર મેળ ખાય. તમે તમારા આધારની વિગતો અપડેટ કરવા માટે આધાર નોંધણી કેન્દ્રની મુલાકાત લઈ શકો છો, અથવા તમારા બેંક રેકોર્ડને અપડેટ કરવા માટે તમારી બેંક શાખાની મુલાકાત લઈ શકો છો. સીડિંગ સફળ થવા માટે નામ એકસરખું હોવું આવશ્યક છે.",
        },
        {
            question: "શું આધાર સીડિંગની કોઈ સમયમર્યાદા છે?",
            answer: "કોઈ સત્તાવાર સમયમર્યાદા નથી, પરંતુ શક્ય તેટલી વહેલી તકે પ્રક્રિયા પૂર્ણ કરવાની ભારપૂર્વક ભલામણ કરવામાં આવે છે. ઘણી યોજનાઓ બિન-સીડ કરેલા ખાતાઓમાં ભંડોળનું વિતરણ કરશે નહીં, તેથી જો તમે વિલંબ કરો તો તમે લાભોથી વંચિત રહી શકો છો."
        },
        {
            question: "શું મારી પેન્શન કે સબસિડી મેળવવા માટે આધાર ફરજિયાત છે?",
            answer: "જ્યારે આધાર પસંદગીની અને સૌથી કાર્યક્ષમ પદ્ધતિ છે, ત્યારે સુપ્રીમ કોર્ટે ચુકાદો આપ્યો છે કે ફક્ત આધાર નંબર ન હોવાને કારણે આવશ્યક લાભો નકારી શકાય નહીં. જો તમારી પાસે આધાર નથી, તો તમે યોજના દ્વારા નિર્દિષ્ટ વૈકલ્પિક સરકારી-માન્ય ID નો ઉપયોગ કરી શકો છો.",
        },
        {
          question: "મને કેવી રીતે ખબર પડે કે મારા ખાતામાં ડીબીટી ફંડ આવ્યું છે?",
          answer: "જો તમે તમારી બેંકમાંથી એસએમએસ એલર્ટ સક્ષમ કર્યું હોય, તો તમને એક સૂચના પ્રાપ્ત થશે. તમે એટીએમ, તમારી બેંકની મોબાઇલ એપ્લિકેશન, ઇન્ટરનેટ બેંકિંગ દ્વારા અથવા બેંક મિત્ર/સંવાદદાતાની મુલાકાત લઈને પણ તમારા ખાતાની બેલેન્સ ચકાસી શકો છો.",
        },
      ],
    },
    contact: {
      title: "સંપર્ક અને સંસાધનો",
      subtitle: "અધિકૃત સંપર્ક માહિતી અને ડાઉનલોડ કરી શકાય તેવા બેંક ફોર્મ્સ શોધો.",
      helpline: "નેશનલ સ્કોલરશીપ પોર્ટલ હેલ્પલાઇન: 0120 - 6619540",
      resources: "બેંક આધાર સીડિંગ ફોર્મ્સ",
      bankForms: [
        { name: "સ્ટેટ બેંક ઓફ ઈન્ડિયા (SBI)", description: "SBI ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.", link: "https://sbi.co.in/documents/16012/25194947/Aadhaar+Seeding+Process+for+Customers+of+Other+Banks+having+SBI+account.pdf" },
        { name: "પંજાબ નેશનલ બેંક (PNB)", description: "PNB ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.", link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35" },
        { name: "બેંક ઓફ બરોડા (BOB)", description: "BOB ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.", link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf" },
        { name: "HDFC બેંક", description: "HDFC ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.", link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c" },
        { name: "ICICI બેંક", description: "ICICI ગ્રાહકો માટે આધાર સીડિંગ સૂચનાઓ.", link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card" },
        { name: "Axis બેંક", description: "Axis ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.", link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf" }
      ]
    },
    about: {
      title: "ડીબીટી મિશન વિશે",
      mandate: {
        title: "ડીબીટી મિશનનો આદેશ",
        subtitle: "ભારતમાં ડાયરેક્ટ બેનિફિટ ટ્રાન્સફરનો સત્તાવાર આદેશ અને ઇતિહાસ.",
        aboutText: [
            "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) યોજના 1 જાન્યુઆરી, 2013 ના રોજ ભારતમાં કલ્યાણકારી વિતરણ પ્રણાલીમાં સુધારો કરવા માટે એક મુખ્ય શાસન સુધારણા તરીકે શરૂ કરવામાં આવી હતી.",
            "તેનો પ્રાથમિક ધ્યેય સરળ, ઝડપી અને વધુ સચોટ વિતરણ માટે હાલની પ્રક્રિયાઓનું પુનઃ-ઇੰਜિનિયરિંગ કરીને સરકારી સબસિડી અને લાભોના પ્રવાહને સુધારવાનો છે, જ્યારે છેતરપિંડી અને ડુપ્લિકેશન ઘટાડવાનો છે.",
            "ડીબીટી મિશન, અમલીકરણ માટેની નોડલ સંસ્થા, શરૂઆતમાં આયોજન પંચમાં હતી, 2013 માં ખર્ચ વિભાગમાં સ્થાનાંતરિત થઈ, અને 2015 થી, તેના કામને વધુ ગતિ આપવા માટે કેબિનેટ સચિવાલય હેઠળ કાર્યરત છે.",
            "ડીબીટી જેએએમ ટ્રિનિટી (જન ધન બેંક ખાતા, આધાર અનન્ય ID, અને મોબાઇલ ફોન) નો લાભ ઉઠાવે છે જેથી લાભાર્થીઓના ખાતામાં સીધા લાભો ટ્રાન્સફર કરવા માટે એક પારદર્શક અને કાર્યક્ષમ પ્લેટફોર્મ પૂરું પાડી શકાય."
        ],
        orgChartTitle: "ડીબીટી મિશન સંસ્થાકીય માળખું"
      },
      institutionalFramework: {
        title: "સંસ્થાકીય માળખું",
        subtitle: "ડીબીટીને શક્ય બનાવતી મુખ્ય સરકારી સંસ્થાઓ.",
        points: [
            {
                title: "ડીબીટી મિશન (કેબિનેટ સચિવાલય)",
                description: "નીતિ, સંકલન અને દેશભરમાં ડીબીટીના અમલીકરણની દેખરેખ માટે જવાબદાર નોડલ એજન્સી."
            },
            {
                title: "નાણા મંત્રાલય (CGA અને PFMS)",
                description: "નિયંત્રક મહાલેખાકાર (CGA) સાર્વજનિક નાણાકીય વ્યવસ્થાપન પ્રણાલી (PFMS) ચલાવે છે, જે તમામ ડીબીટી ચુકવણીઓ અને સમાધાન માટે મુખ્ય ઇલેક્ટ્રોનિક પ્લેટફોર્મ છે."
            },
            {
                title: "એનપીસીઆઈ (ભારતીય રાષ્ટ્રીય ચુકવણી નિગમ)",
                description: "આધાર ચુકવણી બ્રિજ (APB) ચલાવે છે, જે આધાર નંબરનો ઉપયોગ કરીને સાચા બેંક ખાતામાં લાભ પહોંચાડતી સિસ્ટમ છે."
            },
            {
                title: "યુઆઈડીએઆઈ (આધાર)",
                description: "વિશિષ્ટ ઓળખ ચકાસણી (e-KYC) અને પ્રમાણીકરણ સેવાઓ પૂરી પાડે છે જે સમગ્ર ડીબીટી માળખાનો આધાર છે."
            },
             {
                title: "અમલીકરણ મંત્રાલયો અને રાજ્યો",
                description: "વ્યક્તિગત મંત્રાલયો (દા.ત., મનરેગા માટે ગ્રામીણ વિકાસ) અને રાજ્ય સરકારો તેમની પોતાની યોજનાઓ અને લાભાર્થી યાદીઓનું સંચાલન કરે છે, જે કેન્દ્રીય ડીબીટી પ્લેટફોર્મ સાથે સંકલિત થાય છે."
            }
        ]
      },
      ourTeam: {
          title: "ટીમ વિશે",
          subtitle: "SIH 2025 માટે ડીબીટી સહાયક પાછળના વિદ્યાર્થીઓ."
      }
    },
    printKit: {
      title: "છાપવા યોગ્ય જાગૃતિ કિટ",
      subtitle: "શાળાઓ અને સમુદાયોમાં ઑફલાઇન ઝુંબેશ માટે આ સામગ્રી ડાઉનલોડ અને છાપો.",
      poster: {
        title: "શું તમારું બેંક ખાતું તમારી શિષ્યવૃત્તિ માટે તૈયાર છે?",
        subtitle: "એક સામાન્ય ભૂલને તમારા ભંડોળને રોકવા ન દો! ખાતરી કરો કે તમારું ખાતું ડીબીટી-સક્ષમ છે.",
        point1: "તમામ સરકારી શિષ્યવૃત્તિઓ માટે ડીબીટી-સક્ષમ (આધાર સીડેડ) ખાતું ફરજિયાત છે.",
        point2: "ફક્ત તમારા આધારને 'લિંક' કરવું પૂરતું નથી. સીડિંગ એ એક અલગ, નિર્ણાયક પગલું છે.",
        cta: "આજે જ તમારી સ્થિતિ તપાસો!",
      },
      flyer1: {
        title: "ડીબીટી-તૈયાર કેવી રીતે થવું",
        text: "તમારું બેંક ખાતું આધાર સાથે સીડ થયેલ છે અને ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) માટે તૈયાર છે તેની ખાતરી કરવા માટે આ પગલાં અનુસરો.",
        stepsTitle: "૪ સરળ પગલાં:",
        steps: [
          "તમારી બેંકની વેબસાઇટ અથવા અમારા પોર્ટલ પરથી 'આધાર સીડિંગ ફોર્મ' ડાઉનલોડ કરો.",
          "ફોર્મ સંપૂર્ણપણે ભરો. ભૂલો ટાળવા માટે અમારા એઆઈ ફોર્મ ચેકરનો ઑનલાઇન ઉપયોગ કરો.",
          "ફોર્મ અને તમારા આધાર કાર્ડની નકલ સાથે તમારી બેંક શાખાની મુલાકાત લો.",
          "દસ્તાવેજો જમા કરો અને સ્વીકૃતિ સ્લિપ મેળવો.",
        ],
      },
      flyer2: {
        title: "ડીબીટી હકીકતો અને માન્યતાઓ",
        text: "શિષ્યવૃત્તિ પ્રક્રિયા વિશેની સામાન્ય ਗેરસમજોમાં પડશો નહીં.",
        myths: {
          title: "સામાન્ય માન્યતાઓ:",
          list: [
            "મારું આધાર-લિંક્ડ ખાતું આપમેળે શિષ્યવૃત્તિ મેળવશે.",
            "હું મારા કોઈપણ ખાતામાં ભંડોળ મેળવી શકું છું.",
            "આધાર સીડિંગ એક-વખતની પ્રક્રિયા છે અને તેને ક્યારેય તપાસવાની જરૂર નથી.",
          ],
        },
        tip: "પ્રો ટિપ: શિષ્યવૃત્તિની મોસમ પહેલાં હંમેશા અધિકૃત યુઆઈડીએઆઈ વેબસાઇટ પર તમારી સીડિંગ સ્થિતિ તપાસો!",
      },
      instructions: {
        printButton: "પ્રિન્ટિંગ માટે કિટ તૈયાર કરો",
        visitWebsite: "વધુ સાધનો અને માહિતી માટે, મુલાકાત લો:",
        mythLabel: "માન્યતા:",
        footer: "આ કિટ ફક્ત શૈક્ષણિક અને જાગૃતિના હેતુઓ માટે છે. ડીબીટી સહાયક દ્વારા ઉત્પાદિત.",
      },
    },
    footer: {
      tagline: "ટેકનોલોજી દ્વારા નાગરિકો અને સરકારી કલ્યાણ વચ્ચેનું અંતર પૂરવું.",
      credits: "સ્માર્ટ ઇન્ડિયા હેકાથોન ૨૦૨૫ માટે એક પહેલ।",
      navigation: "નેવિગેશન",
      resources: "સંસાધનો",
      about: "અમારા વિશે",
      learnMore: "વધુ જાણો",
      github: "ગિટહબ",
      telegram: "ટેલિગ્રામ"
    },
    languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી"
    }
  },
};
