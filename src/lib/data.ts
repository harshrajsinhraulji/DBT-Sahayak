
import type { Language, LanguageContent, Myth, Fact } from './types';

export const pageContent: Record<Language, LanguageContent> = {
  en: {
    header: {
      title: "DBT Sahayak",
      nav: {
        education: "Learn",
        videos: "Videos",
        status: "Check Status",
        takeAction: "Take Action",
        scholarships: "Scholarships",
        myths: "Myth Busters",
        faq: "FAQ",
        contact: "Contact",
        about: "About Us",
        resources: "Resources",
        governance: "Governance",
        aboutTeam: "About Team",
        printKit: "Print Kit",
        requestDrive: "Request a Drive",
        formChecker: "AI Form Check"
      },
      login: "Login/Register"
    },
    hero: {
      tagline: "Direct Benefit Transfers made transparent and accessible.",
      title: "Unlock Your Scholarship with a DBT-Enabled Account",
      subtitle: "Understand the key difference between an Aadhaar-linked account and a DBT-enabled Aadhaar-seeded account to ensure you receive your scholarship funds without delay.",
      cta: "Learn More",
    },
    education: {
      title: "Knowledge is Power",
      subtitle: "Understand the essentials for hassle-free scholarship disbursement.",
      card1: {
        title: "Aadhaar Linked Account",
        description: "Your Aadhaar number is connected to your bank account, primarily for identity verification (e-KYC). This does NOT guarantee receipt of government benefits.",
      },
      card2: {
        title: "DBT-Enabled Aadhaar Seeded Account",
        description: "Your Aadhaar is mapped to a specific bank account on the National Payments Corporation of India (NPCI) server. This is MANDATORY to receive Direct Benefit Transfers (DBT) like scholarships.",
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
            { feature: "Scholarship Funds", linked: "Does NOT guarantee receipt.", seeded: "GUARANTEES receipt of DBT funds." },
            { feature: "Requirement", linked: "Good practice for banking.", seeded: "MANDATORY for all scholarships." },
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
      title: "Available Scholarships",
      subtitle: "Explore scholarship opportunities for which a DBT-enabled account is essential.",
      scholarships: [
        {
          title: "Post-Matric Scholarship for SC/OBC/EBC Students",
          description: "Financial assistance for students from Scheduled Castes, Other Backward Classes, and Economically Backward Classes for studies beyond matriculation.",
          eligibility: "Parental income limits apply (e.g., up to ₹2.5 lakh for SC, up to ₹1.5 lakh for OBC).",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "National Means-cum-Merit Scholarship (NMMS)",
          description: "For meritorious students of economically weaker sections to prevent drop-outs at class VIII and encourage them to continue their education.",
          eligibility: "Parental income up to ₹3.5 lakh. Must have scored at least 55% in Class VII.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "Central Sector Scheme of Scholarship for College and University Students (CSSS)",
          description: "For meritorious students from low-income families to meet day-to-day expenses while pursuing higher studies.",
          eligibility: "Must be in the top 20th percentile of successful candidates in Class XII from the respective board, with parental income less than ₹4.5 lakh.",
          link: "https://scholarships.gov.in/",
        },
         {
          title: "Mukhyamantri Yuva Swavalamban Yojana (MYSY, Gujarat)",
          description: "State-level scheme for meritorious students of Gujarat to pursue higher education.",
          eligibility: "Varies by course. Requires specific percentile in 10th/12th and income criteria.",
          link: "https://mysy.guj.nic.in/",
        },
        {
          title: "Scholarships for Students with Disabilities",
          description: "For differently-abled students pursuing graduate and postgraduate degrees in specified institutions of excellence.",
          eligibility: "Students with more than 40% disability and a valid certificate. Parental income ceiling of ₹6 lakh per annum.",
          link: "https://scholarships.gov.in/"
        },
        {
            title: "Prime Minister's Scholarship Scheme for RPF/RPSF",
            description: "Professional degree scholarships for the dependent wards of Railway Protection Force (RPF) and Railway Protection Special Force (RPSF) personnel.",
            eligibility: "Dependent wards of serving/ex-personnel and widows. Minimum 60% in 12th/Diploma/Graduation.",
            link: "https://scholarships.gov.in/"
        }
      ],
    },
    mythBusters: {
      title: "Myth Busters",
      subtitle: "Test your knowledge! Can you tell the difference between a DBT myth and a fact?",
      resultText: "You're now a certified Myth & Fact expert! Share your knowledge to help others.",
      myths: [
        {
          myth: "If my bank account is linked to Aadhaar, I will automatically get my scholarship.",
          fact: "This is a major myth. Your account must be specifically 'Seeded' with Aadhaar for DBT on the NPCI mapper. Linking is just for KYC and is a separate process."
        },
        {
          myth: "I can receive my scholarship in any of my Aadhaar-linked bank accounts.",
          fact: "This is a myth. You can only receive DBT payments in the ONE bank account that is currently seeded with your Aadhaar. This is your designated DBT-enabled account."
        },
        {
          myth: "My bank has my Aadhaar card photocopy, so my account is seeded.",
          fact: "This is a myth. Submitting a photocopy is not enough. You must fill out and submit the specific 'Aadhaar Seeding Consent Form' and explicitly request the bank to seed your account."
        },
        {
          myth: "If my seeding fails, it's an issue with the NPCI or UIDAI.",
          fact: "This is a myth. The responsibility of updating the NPCI mapper rests solely with the banks. If your seeding fails, you must follow up directly with your bank branch."
        },
        {
          myth: "My bank app shows my Aadhaar is 'active', so I'm ready for DBT.",
          fact: "This is a myth. A bank's internal system showing an 'active' Aadhaar link does not guarantee your account is on the NPCI mapper. The only way to be sure is by checking on the UIDAI or NPCI websites."
        }
      ],
      facts: [
        {
          fact: "You must submit a specific 'Aadhaar Seeding Consent Form' to your bank to enable DBT.",
          explanation: "This is a fact. Simply having a linked account is not enough; you must give explicit consent for seeding, which the bank then updates on the NPCI server."
        },
        {
          fact: "Only one bank account can be Aadhaar-seeded for DBT at any given time.",
          explanation: "This is a fact. If you seed a new account, it automatically de-links the previous one from the NPCI mapper. The latest seeded account gets the funds."
        },
        {
          fact: "If biometric authentication (fingerprint/iris) fails, there are alternative ways to get benefits.",
          explanation: "This is a fact. Government guidelines include an 'exception handling mechanism' to ensure you still get benefits, such as using OTP or other physical verification."
        },
        {
          fact: "If your name on Aadhaar and the bank account don't match exactly, seeding will fail.",
          explanation: "This is a fact. Your name must be identical in both records for the seeding process to succeed. You must get it corrected in either the Aadhaar or bank records."
        },
        {
          fact: "Aadhaar is not legally mandatory to receive subsidies.",
          explanation: "This is a fact. The Supreme Court has ruled that while Aadhaar is preferred for its efficiency, benefits cannot be denied solely because someone lacks an Aadhaar number. Other forms of ID must be accepted."
        },
        {
          fact: "You can check your Aadhaar seeding status on both the UIDAI and NPCI websites.",
          explanation: "This is a fact. Both official portals provide a facility to check which bank account is currently seeded for DBT, as they fetch data from the same NPCI mapper."
        }
      ]
    },
    awareness: {
      title: "Success Stories",
      subtitle: "Hear from students who benefited from timely scholarship disbursement.",
      stories: [
        {
          name: "Priya S.",
          story: "\"Thanks to my DBT-enabled account, I received my scholarship just in time to pay my college fees. The process was so smooth!\"",
        },
        {
          name: "Rohan K.",
          story: "\"I was confused about the seeding process, but DBT Sahayak's guide helped me get it done. I got my funds without any issues.\"",
        },
        {
          name: "Anjali M.",
          story: "\"Don't delay! Getting your account Aadhaar-seeded is the most important step. It made a huge difference for me and my family.\"",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions about Aadhaar seeding and DBT.",
      faqs: [
        {
          question: "What is the difference between Aadhaar linking and Aadhaar seeding?",
          answer: "Aadhaar linking connects your Aadhaar to a bank account for identity verification (KYC). Aadhaar seeding is a separate, specific process of mapping your Aadhaar to a single bank account on the NPCI server to receive Direct Benefit Transfers (DBT). Seeding is mandatory for scholarships.",
        },
        {
          question: "Can I have multiple Aadhaar-seeded accounts?",
          answer: "No, you can only have one Aadhaar-seeded account for receiving DBT at any given time. If you seed a new account, the previous one gets de-linked automatically. The subsidy will be credited to the last bank account that was successfully seeded.",
        },
         {
          question: "How do I change my bank account to receive DBT funds?",
          answer: "To change your DBT-enabled account, you must visit the branch of the *new* bank where you want to receive funds. Submit the Aadhaar seeding consent form there. They will update the NPCI mapper, which automatically overrides the old account.",
        },
        {
          question: "What should I do if my Aadhaar seeding request fails or is pending?",
          answer: "Revisit your bank branch. Common reasons for failure include a name mismatch between your Aadhaar and bank records, or an incorrect account number on the form. The responsibility for updating the NPCI mapper lies solely with the banks, so you must follow up with them.",
        },
        {
          question: "My name is different in my Aadhaar card versus my bank account. What should I do?",
          answer: "You must get your name corrected in one of the documents so they match exactly. You can visit an Aadhaar Enrolment Centre to update your Aadhaar details, or your bank branch to update your bank records. The name must be identical for seeding to succeed.",
        },
        {
            question: "What happens if my biometric (fingerprint/iris) authentication fails?",
            answer: "Don't worry. Government guidelines have an 'exception handling mechanism'. Implementing agencies are required to provide alternate ways for you to prove your identity, such as through an OTP to your registered mobile number, or other physical verification methods to ensure you are not denied benefits."
        },
        {
          question: "Is Aadhaar mandatory to receive my scholarship?",
          answer: "While Aadhaar is the preferred and most efficient method, the Supreme Court has ruled that essential benefits cannot be denied solely for lack of an Aadhaar number. If you don't have Aadhaar, you can typically use your Aadhaar Enrolment ID (EID) slip along with other alternate government-approved IDs (like a bank passbook) as specified by the scholarship scheme.",
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
      tagline: "An initiative by Team Code Technicians for Smart India Hackathon 2025.",
      credits: "Under the guidance of the Ministry of Social Justice & Empowerment.",
      navigation: "Navigation",
      resources: "Resources",
      about: "About",
      learnMore: "Learn About DBT",
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
        scholarships: "छात्रवृत्तियाँ",
        myths: "मिथक तोड़ें",
        faq: "अक्सर पूछे जाने वाले प्रश्न",
        contact: "संपर्क",
        about: "हमारे बारे में",
        resources: "संसाधन",
        governance: "शासन",
        aboutTeam: "टीम के बारे में",
        printKit: "प्रिंट किट",
        requestDrive: "ड्राइव का अनुरोध करें",
        formChecker: "एआई फॉर्म जांच"
      },
      login: "लॉगिन/रजिस्टर करें"
    },
    hero: {
      tagline: "प्रत्यक्ष लाभ हस्तांतरण को पारदर्शी और सुलभ बनाया गया।",
      title: "डीबीटी-सक्षम खाते के साथ अपनी छात्रवृत्ति अनलॉक करें",
      subtitle: "यह सुनिश्चित करने के लिए कि आपको अपनी छात्रवृत्ति राशि बिना किसी देरी के मिले, आधार-लिंक्ड खाते और डीबीटी-सक्षम आधार-सीडेड खाते के बीच मुख्य अंतर को समझें।",
      cta: "और जानें",
    },
    education: {
      title: "ज्ञान ही शक्ति है",
      subtitle: "परेशानी मुक्त छात्रवृत्ति वितरण के लिए आवश्यक बातें समझें।",
      card1: {
        title: "आधार लिंक्ड खाता",
        description: "आपका आधार नंबर पहचान सत्यापन (ई-केवाईसी) के लिए आपके बैंक खाते से जुड़ा होता है। यह सरकारी लाभों की प्राप्ति की गारंटी नहीं देता है।",
      },
      card2: {
        title: "डीबीटी-सक्षम आधार सीडेड खाता",
        description: "छात्रवृत्ति जैसे प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए आपका आधार भारतीय राष्ट्रीय भुगतान निगम (एनपीसीआई) सर्वर पर एक विशिष्ट बैंक खाते से मैप किया गया है। यह अनिवार्य है।",
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
            { feature: "छात्रवृत्ति निधि", linked: "प्राप्ति की गारंटी नहीं।", seeded: "डीबीटी फंड की प्राप्ति की गारंटी देता है।" },
            { feature: "आवश्यकता", linked: "बैंकिंग के लिए अच्छी आदत।", seeded: "सभी छात्रवृत्तियों के लिए अनिवार्य।" },
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
      title: "उपलब्ध छात्रवृत्तियाँ",
      subtitle: "उन छात्रवृत्ति अवसरों का अन्वेषण करें जिनके लिए डीबीटी-सक्षम खाता आवश्यक है।",
      scholarships: [
        {
          title: "SC/OBC/EBC छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
          description: "अनुसूचित जाति, अन्य पिछड़ा वर्ग और आर्थिक रूप से पिछड़े वर्ग के छात्रों को मैट्रिक के बाद की पढ़ाई के लिए वित्तीय सहायता।",
          eligibility: "माता-पिता की आय सीमा लागू होती है (जैसे, एससी के लिए ₹2.5 लाख तक, ओबीसी के लिए ₹1.5 लाख तक)।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति (NMMS)",
          description: "आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों के लिए ताकि वे कक्षा आठवीं में पढ़ाई न छोड़ें और अपनी शिक्षा जारी रख सकें।",
          eligibility: "माता-पिता की आय ₹3.5 लाख तक। कक्षा सातवीं में कम से कम 55% अंक प्राप्त किए हों।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "कॉलेज और विश्वविद्यालय के छात्रों के लिए छात्रवृत्ति की केंद्रीय क्षेत्र योजना (CSSS)",
          description: "कम आय वाले परिवारों के मेधावी छात्रों के लिए उच्च शिक्षा प्राप्त करते समय दिन-प्रतिदिन के खर्चों को पूरा करने के लिए।",
          eligibility: "संबंधित बोर्ड से कक्षा बारहवीं में सफल उम्मीदवारों के शीर्ष 20 प्रतिशत में होना चाहिए, माता-पिता की आय ₹4.5 लाख से कम हो।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "मुख्यमंत्री युवा स्वावलंबन योजना (MYSY, गुजरात)",
          description: "गुजरात के मेधावी छात्रों के लिए उच्च शिक्षा प्राप्त करने हेतु राज्य स्तरीय योजना।",
          eligibility: "पाठ्यक्रम के अनुसार बदलता है। 10वीं/12वीं में विशिष्ट प्रतिशत और आय मानदंड की आवश्यकता है।",
          link: "https://mysy.guj.nic.in/",
        },
        {
          title: "विकलांग छात्रों के लिए छात्रवृत्ति",
          description: "उत्कृष्टता के निर्दिष्ट संस्थानों में स्नातक और स्नातकोत्तर डिग्री प्राप्त करने वाले विकलांग छात्रों के लिए।",
          eligibility: "40% से अधिक विकलांगતા और वैध प्रमाण पत्र वाले छात्र। प्रति वर्ष ₹6 लाख की माता-पिता की आय सीमा।",
          link: "https://scholarships.gov.in/"
        },
        {
            title: "आरपीएफ/आरपीएसएफ के लिए प्रधानमंत्री छात्रवृत्ति योजना",
            description: "रेलवे सुरक्षा बल (आरपीएफ) और रेलवे सुरक्षा विशेष बल (आरपीएसएफ) के कर्मियों के आश्रित बच्चों के लिए व्यावसायिक डिग्री छात्रवृत्ति।",
            eligibility: "सेवारत/पूर्व कर्मियों और विधवाओं के आश्रित बच्चे। 12वीं/डिप्लोमा/स्नातक में न्यूनतम 60%।",
            link: "https://scholarships.gov.in/"
        }
      ],
    },
     mythBusters: {
      title: "मिथक तोड़ें",
      subtitle: "अपने ज्ञान का परीक्षण करें! क्या आप डीबीटी मिथक और तथ्य के बीच अंतर बता सकते हैं?",
      resultText: "अब आप एक प्रमाणित मिथक और तथ्य विशेषज्ञ हैं! दूसरों की मदद करने के लिए अपना ज्ञान साझा करें।",
      myths: [
        {
          myth: "यदि मेरा बैंक खाता आधार से जुड़ा हुआ है, तो मुझे स्वतः ही मेरी छात्रवृत्ति मिल जाएगी।",
          fact: "यह एक बड़ा मिथक है। आपके खाते को केवल लिंक ही नहीं, बल्कि एनपीसीआई मैपर पर डीबीटी के लिए आधार के साथ विशेष रूप से 'सीड' किया जाना चाहिए। लिंकिंग केवल KYC के लिए है और यह एक अलग प्रक्रिया है।"
        },
        {
          myth: "मैं अपने किसी भी आधार-लिंक्ड बैंक खाते में अपनी छात्रवृत्ति प्राप्त कर सकता हूँ।",
          fact: "यह एक मिथक है। आप केवल उसी एक बैंक खाते में डीबीटी भुगतान प्राप्त कर सकते हैं जो वर्तमान में आपके आधार के साथ सीड किया गया है। यह आपका निर्दिष्ट डीबीटी-सक्षम खाता है।"
        },
        {
          myth: "मेरे बैंक के पास मेरे आधार कार्ड की फोटोकॉपी है, इसलिए मेरा खाता सीडेड है।",
          fact: "यह एक मिथक है। फोटोकॉपी जमा करना पर्याप्त नहीं है। आपको विशिष्ट 'आधार सीडिंग सहमति फॉर्म' भरना और जमा करना होगा और बैंक से अपने खाते को सीड करने का स्पष्ट रूप से अनुरोध करना होगा।"
        },
        {
          myth: "यदि मेरी सीडिंग विफल हो जाती है, तो यह एनपीसीआई या यूआईडीएआई के साथ एक समस्या है।",
          fact: "यह एक मिथक है। एनपीसीआई मैपर को अपडेट करने की जिम्मेदारी पूरी तरह से बैंकों की है। यदि आपकी सीडिंग विफल हो जाती है, तो आपको सीधे अपनी बैंक शाखा से संपर्क करना होगा।"
        },
        {
          myth: "मेरा बैंक ऐप दिखाता है कि मेरा आधार 'सक्रिय' है, इसलिए मैं डीबीटी के लिए तैयार हूं।",
          fact: "यह एक मिथक है। किसी बैंक की आंतरिक प्रणाली में 'सक्रिय' आधार लिंक दिखाना इस बात की गारंटी नहीं देता है कि आपका खाता एनपीसीआई मैपर पर है। सुनिश्चित होने का एकमात्र तरीका यूआईडीएआई या एनपीसीआई वेबसाइटों पर जांच करना है।"
        }
      ],
      facts: [
        {
          fact: "डीबीटी को सक्षम करने के लिए आपको अपने बैंक में एक विशिष्ट 'आधार सीडिंग सहमति फॉर्म' जमा करना होगा।",
          explanation: "यह एक तथ्य है। केवल एक लिंक किया हुआ खाता होना पर्याप्त नहीं है; आपको सीडिंग के लिए स्पष्ट सहमति देनी होगी, जिसे बैंक फिर एनपीसीआई सर्वर पर अपडेट करता है।"
        },
        {
          fact: "किसी भी समय डीबीटी के लिए केवल एक बैंक खाता आधार-सीड किया जा सकता है।",
          explanation: "यह एक तथ्य है। यदि आप कोई नया खाता सीड करते हैं, तो यह स्वचालित रूप से पिछले खाते को एनपीसीआई मैपर से डी-लिंक कर देता है। नवीनतम सीड किए गए खाते में फंड आता है।"
        },
        {
          fact: "यदि बॉयोमीट्रिक प्रमाणीकरण (फिंगरप्रिंट/आइरिस) विफल हो जाता है, तो लाभ प्राप्त करने के वैकल्पिक तरीके हैं।",
          explanation: "यह एक तथ्य है। सरकारी दिशानिर्देशों में एक 'अपवाद हैंडलिंग तंत्र' शामिल है ताकि यह सुनिश्चित हो सके कि आपको लाभ मिले, जैसे ओटीपी या अन्य भौतिक सत्यापन का उपयोग करना।"
        },
        {
          fact: "यदि आधार और बैंक खाते पर आपका नाम बिल्कुल मेल नहीं खाता है, तो सीडिंग विफल हो जाएगी।",
          explanation: "यह एक तथ्य है। सीडिंग प्रक्रिया के सफल होने के लिए आपका नाम दोनों रिकॉर्ड में समान होना चाहिए। आपको इसे आधार या बैंक रिकॉर्ड में से किसी एक में ठीक करवाना होगा।"
        },
        {
          fact: "सब्सिडी प्राप्त करने के लिए आधार कानूनी रूप से अनिवार्य नहीं है।",
          explanation: "यह एक तथ्य है। सुप्रीम कोर्ट ने फैसला सुनाया है कि यद्यपि आधार इसकी दक्षता के लिए पसंदीदा है, केवल आधार संख्या न होने के कारण लाभों से इनकार नहीं किया जा सकता है। अन्य आईडी के रूपों को स्वीकार किया जाना चाहिए।"
        },
        {
          fact: "आप यूआईडीएआई और एनपीसीआई दोनों वेबसाइटों पर अपनी आधार सीडिंग स्थिति की जांच कर सकते हैं।",
          explanation: "यह एक तथ्य है। दोनों आधिकारिक पोर्टल यह जांचने की सुविधा प्रदान करते हैं कि वर्तमान में कौन सा बैंक खाता डीबीटी के लिए सीड किया गया है, क्योंकि वे एक ही एनपीसीआई मैपर से डेटा प्राप्त करते हैं।"
        }
      ]
    },
    awareness: {
      title: "सफलता की कहानियाँ",
      subtitle: "समय पर छात्रवृत्ति वितरण से लाभान्वित होने वाले छात्रों से सुनें।",
      stories: [
        {
          name: "प्रिया एस.",
          story: "\"मेरे डीबीटी-सक्षम खाते के लिए धन्यवाद, मुझे अपनी कॉलेज की फीस का भुगतान करने के लिए समय पर मेरी छात्रवृत्ति मिली। प्रक्रिया बहुत आसान थी!\"",
        },
        {
          name: "रोहन के.",
          story: "\"मैं सीडिंग प्रक्रिया के बारे में उलझन में था, लेकिन डीबीटी सहायक की गाइड ने मुझे इसे पूरा करने में मदद की। मुझे बिना किसी समस्या के मेरा फंड मिल गया।\"",
        },
        {
          name: "अंजलि एम.",
          story: "\"देर न करें! अपने खाते को आधार-सीड करवाना सबसे महत्वपूर्ण कदम है। इसने मेरे और मेरे परिवार के लिए बहुत बड़ा बदलाव किया।\"",
        },
      ],
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "आधार सीडिंग और डीबीटी के बारे में सामान्य प्रश्नों के उत्तर प्राप्त करें।",
      faqs: [
        {
          question: "आधार लिंकिंग और आधार सीडिंग में क्या अंतर है?",
          answer: "आधार लिंकिंग आपके आधार को पहचान सत्यापन (केवाईसी) के लिए बैंक खाते से जोड़ता है। आधार सीडिंग आपके आधार को प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए एनपीसीआई सर्वर पर एक ही बैंक खाते से मैप करने की एक अलग, विशिष्ट प्रक्रिया है। छात्रवृत्ति के लिए सीडिंग अनिवार्य है।",
        },
        {
          question: "क्या मेरे पास कई आधार-सीडेड खाते हो सकते हैं?",
          answer: "नहीं, आपके पास किसी भी समय डीबीटी प्राप्त करने के लिए सिर्फ एक आधार-सीडेड खाता हो सकता है। यदि आप कोई नया खाता सीड करते हैं, तो पिछला खाता स्वचालित रूप से डी-लिंक हो जाता है। सब्सिडी अंतिम सफलतापूर्वक सीड किए गए बैंक खाते में जमा की जाएगी।",
        },
        {
          question: "डीबीटी फंड प्राप्त करने के लिए मैं अपना बैंक खाता कैसे बदलूं?",
          answer: "अपना डीबीटी-सक्षम खाता बदलने के लिए, आपको उस *नए* बैंक की शाखा में जाना होगा जहां आप फंड प्राप्त करना चाहते हैं। वहां आधार सीडिंग सहमति फॉर्म जमा करें। वे एनपीसीआई मैपर को अपडेट कर देंगे, जो पुराने खाते को स्वचालित रूप से ओवरराइड कर देगा।",
        },
        {
          question: "यदि मेरा आधार सीडिंग अनुरोध विफल हो जाए या लंबित हो तो मुझे क्या करना चाहिए?",
          answer: "अपनी बैंक शाखा में फिर से जाएँ। विफलता के सामान्य कारणों में आपके आधार और बैंक रिकॉर्ड के बीच नाम का मेल न होना, या फॉर्म पर गलत खाता संख्या शामिल है। एनपीसीआई मैपर को अपडेट करने की जिम्मेदारी पूरी तरह से बैंकों की है, इसलिए आपको उनसे संपर्क करना होगा।",
        },
        {
          question: "मेरा नाम मेरे आधार कार्ड बनाम मेरे बैंक खाते में अलग है। मुझे क्या करना चाहिए?",
          answer: "आपको अपने नाम को किसी एक दस्तावेज़ में ठीक करवाना होगा ताकि वे बिल्कुल मेल खाएं। आप अपने आधार की विवरण अपडेट करने के लिए किसी आधार नामांकन केंद्र पर जा सकते हैं, या अपने बैंक रिकॉर्ड को अपडेट करने के लिए अपनी बैंक शाखा में जा सकते हैं। सीडिंग के सफल होने के लिए नाम एक जैसा होना चाहिए।",
        },
        {
          question: "यदि मेरा बॉयोमीट्रिक (फिंगरप्रिंट/आइरिस) प्रमाणीकरण विफल हो जाता है तो क्या होगा?",
          answer: "चिंता न करें। सरकारी दिशानिर्देशों में एक 'अपवाद हैंडलिंग तंत्र' है। कार्यान्वयन एजेंसियों को आपको अपनी पहचान साबित करने के वैकल्पिक तरीके प्रदान करने की आवश्यकता होती है, जैसे कि आपके पंजीकृत मोबाइल नंबर पर ओटीपी के माध्यम से, या अन्य भौतिक सत्यापन तरीकों से ताकि आपको लाभों से इनकार न किया जाए।",
        },
        {
          question: "क्या मेरी छात्रवृत्ति प्राप्त करने के लिए आधार अनिवार्य है?",
          answer: "जबकि आधार पसंदीदा और सबसे कुशल तरीका है, सुप्रीम कोर्ट ने फैसला सुनाया है कि सिर्फ आधार संख्या न होने के कारण आवश्यक लाभों से इनकार नहीं किया जा सकता है। यदि आपके पास आधार नहीं है, तो आप आमतौर पर अपनी आधार नामांकन ID (EID) पर्ची का उपयोग अन्य वैकल्पिक सरकारी-अनुमोदित ID (जैसे बैंक पासबुक) के साथ कर सकते हैं जैसा कि छात्रवृत्ति योजना द्वारा निर्दिष्ट है।",
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
                description: "नीति, समन्वय और देश भर में डीबीटी के कार्यान्वयन की निगरानी के लिए जिम्मेदार नोડલ एजेंसी।"
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
        text: "यह सुनिश्चित करने के लिए इन चरणों का पालन करें कि आपका बैंक खाता आधार के साथ सीड किया गया है और प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) के लिए तैयार है।",
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
            "मेरा आधार-लिंक्ड खाता स्वतः ही छात्रवृत्ति प्राप्त कर लेगा।",
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
      tagline: "स्मार्ट इंडिया हैकथॉन २०२५ के लिए टीम कोड टेक्नीशियन की एक पहल।",
      credits: "सामाजिक न्याय और अधिकारिता मंत्रालय के मार्गदर्शन में।",
      navigation: "नेविगेशन",
      resources: "संसाधन",
      about: "हमारे बारे में",
      learnMore: "डीबीटी के बारे में जानें",
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
        scholarships: "શિષ્યવૃત્તિ",
        myths: "માન્યતા તોડો",
        faq: "વારંવાર પૂછાતા પ્રશ્નો",
        contact: "સંપર્ક",
        about: "અમારા વિશે",
        resources: "સંસાધનો",
        governance: "શાસન",
        aboutTeam: "ટીમ વિશે",
        printKit: "પ્રિન્ટ કીટ",
        requestDrive: "ડ્રાઇવની વિનંતી કરો",
        formChecker: "એઆઈ ફોર્મ તપાસ"
      },
      login: "લોગિન/રજીસ્ટર કરો"
    },
    hero: {
      tagline: "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફરને પારદર્શક અને સુલભ બનાવ્યું.",
      title: "ડીબીટી-સક્ષમ ખાતા સાથે તમારી શિષ્યવૃત્તિ અનલૉક કરો",
      subtitle: "તમને તમારી શિષ્યવૃત્તિની રકમ વિલંબ વિના મળે તેની ખાતરી કરવા માટે આધાર-લિંક્ડ ખાતા અને ડીબીટી-સક્ષમ આધાર-સીડેડ ખાતા વચ્ચેનો મુખ્ય તફાવત સમજો.",
      cta: "વધુ જાણો",
    },
    education: {
      title: "જ્ઞાન એ જ શક્તિ છે",
      subtitle: "મુશ્કેલી-મુક્ત શિષ્યવૃત્તિ વિતરણ માટે જરૂરી બાબતોને સમજો.",
      card1: {
        title: "આધાર લિંક્ડ એકાઉન્ટ",
        description: "તમારો આધાર નંબર ફક્ત ઓળખ ચકાસણી (e-KYC) માટે તમારા બેંક ખાતા સાથે જોડાયેલ છે. આ સરકારી લાભોની પ્રાપ્તિની ખાતરી આપતું નથી.",
      },
      card2: {
        title: "ડીબીટી-સક્ષમ આધાર સીડેડ એકાઉન્ટ",
        description: "શિષ્યવૃત્તિ જેવા ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) મેળવવા માટે તમારું આધાર નેશનલ પેમેન્ટ્સ કોર્પોરેશન ઓફ ઈન્ડિયા (NPCI) સર્વર પર ચોક્કસ બેંક ખાતા સાથે મેપ થયેલું છે. આ ફરજિયાત છે.",
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
            { feature: "શિષ્યવૃત્તિ ભંડોળ", linked: "પ્રાપ્તિની ગેરંટી નથી.", seeded: "ડીબીટી ભંડોળની પ્રાપ્તિની ગેરંટી આપે છે." },
            { feature: "જરૂરિયાત", linked: "બેંકિંગ માટે સારી પ્રથા.", seeded: "બધી શિષ્યવૃત્તિઓ માટે ફરજિયાત." },
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
      title: "ઉપલબ્ધ શિષ્યવૃત્તિઓ",
      subtitle: "શિષ્યવૃત્તિની તકોનું અન્વેષણ કરો જેના માટે ડીબીટી-સક્ષમ ખાતું જરૂરી છે.",
      scholarships: [
        {
          title: "SC/OBC/EBC વિદ્યાર્થીઓ માટે પોસ્ટ-મેટ્રિક શિષ્યવૃત્તિ",
          description: "અનુસૂચિત જાતિ, અન્ય પછાત વર્ગ અને આર્થિક રીતે પછાત વર્ગના વિદ્યાર્થીઓને મેટ્રિક પછીના અભ્યાસ માટે આર્થિક સહાય.",
          eligibility: "વાલીની આવક મર્યાદા લાગુ પડે છે (દા.ત., SC માટે ₹2.5 લાખ સુધી, OBC માટે ₹1.5 લાખ સુધી).",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "રાષ્ટ્રીય મીન્સ-કમ-મેરિટ શિષ્યવૃત્તિ (NMMS)",
          description: "આર્થિક રીતે નબળા વર્ગના હોશિયાર વિદ્યાર્થીઓને ધોરણ 8 માં અભ્યાસ છોડતા અટકાવવા અને તેમને તેમનું શિક્ષણ ચાલુ રાખવા પ્રોત્સાહિત કરવા માટે.",
          eligibility: "વાલીની આવક ₹3.5 લાખ સુધી. ધોરણ 7 માં ઓછામાં ઓછા 55% ગુણ મેળવેલા હોવા જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "કૉલેજ અને યુનિવર્સિટીના વિદ્યાર્થીઓ માટે શિષ્યવૃત્તિની કેન્દ્રીય ક્ષેત્ર યોજના (CSSS)",
          description: "ઓછી આવક ધરાવતા પરિવારોના હોશિયાર વિદ્યાર્થીઓને ઉચ્ચ અભ્યાસ દરમિયાન રોજીંદા ખર્ચાઓને પહોંચી વળવા માટે.",
          eligibility: "સંબંધિત બોર્ડમાંથી ધોરણ 12 માં સફળ ઉમેદવારોના ટોચના 20મા પર્સેન્ટાઇલમાં હોવા જોઈએ, વાલીની આવક ₹4.5 લાખથી ઓછી હોય.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "મુખ્યમંત્રી યુવા સ્વાવલંબન યોજના (MYSY, ગુજરાત)",
          description: "ગુજરાતના હોશિયાર વિદ્યાર્થીઓને ઉચ્ચ શિક્ષણ મેળવવા માટે રાજ્ય સ્તરની યોજના.",
          eligibility: "અભ્યાસક્રમ મુજબ બદલાય છે. ૧૦મા/૧૨મા ધોરણમાં ચોક્કસ પર્સેન્ટાઇલ અને આવકના માપદંડની જરૂર છે.",
          link: "https://mysy.guj.nic.in/",
        },
        {
          title: "વિકલાંગ વિદ્યાર્થીઓ માટે શિષ્યવૃત્તિ",
          description: "ઉત્કૃષ્ટતાની નિર્દિષ્ટ સંસ્થાઓમાં સ્નાતક અને અનુસ્નાતક ડિગ્રી મેળવતા વિકલાંગ વિદ્યાર્થીઓ માટે.",
          eligibility: "40% થી વધુ વિકલાંગતા અને માન્ય પ્રમાણપત્ર ધરાવતા વિદ્યાર્થીઓ. વાલીની વાર્ષિક આવક મર્યાદા ₹6 લાખ.",
          link: "https://scholarships.gov.in/"
        },
        {
            title: "આરપીએફ/આરપીએસએફ માટે પ્રધાનમંત્રી શિષ્યવૃત્તિ યોજના",
            description: "રેલવે સુરક્ષા દળ (આરપીએફ) અને રેલવે સુરક્ષા વિશેષ દળ (આરપીએસએફ) ના કર્મચારીઓના આશ્રિત બાળકો માટે વ્યાવસાયિક ડિગ્રી શિષ્યવૃત્તિ.",
            eligibility: "સેવારત/ભૂતપૂર્વ કર્મચારીઓ અને વિધવાઓના આશ્રિત બાળકો. 12મા/ડિપ્લોમા/સ્નાતકમાં ન્યૂનતમ 60%.",
            link: "https://scholarships.gov.in/"
        }
      ],
    },
    mythBusters: {
      title: "માન્યતા તોડો",
      subtitle: "તમારા જ્ઞાનનું પરીક્ષણ કરો! શું તમે ડીબીટીની માન્યતા અને હકીકત વચ્ચેનો તફાવત કહી શકો છો?",
      resultText: "તમે હવે પ્રમાણિત માન્યતા અને હકીકત નિષ્ણાત છો! બીજાઓને મદદ કરવા માટે તમારું જ્ઞાન શેર કરો.",
      myths: [
        {
          myth: "જો મારું બેંક ખાતું આધાર સાથે જોડાયેલું હોય, તો મને આપમેળે મારી શિષ્યવૃત્તિ મળી જશે.",
          fact: "આ એક મોટી માન્યતા છે. તમારું ખાતું ફક્ત લિંક જ નહીં, પણ NPCI મેપર પર DBT માટે આધાર સાથે ખાસ 'સીડ' થયેલું હોવું જોઈએ. લિંકિંગ ફક્ત KYC માટે છે અને તે એક અલગ પ્રક્રિયા છે."
        },
        {
          myth: "હું મારા કોઈપણ આધાર-લિંક્ડ બેંક ખાતામાં મારી શિષ્યવૃત્તિ મેળવી શકું છું.",
          fact: "આ એક માન્યતા છે. તમે ફક્ત તે જ એક બેંક ખાતામાં DBT ચુકવણીઓ મેળવી શકો છો જે હાલમાં તમારા આધાર સાથે સીડ થયેલ છે. આ તમારું નિયુક્ત DBT-સક્ષમ ખાતું છે."
        },
        {
          myth: "મારી બેંક પાસે મારા આધાર કાર્ડની ફોટોકોપી છે, તેથી મારું ખાતું સીડ થયેલું છે.",
          fact: "આ એક માન્યતા છે. ફોટોકોપી સબમિટ કરવી પૂરતી નથી. તમારે ચોક્કસ 'આધાર સીડિંગ સંમતિ ફોર્મ' ભરીને સબમિટ કરવું પડશે અને બેંકને તમારું એકાઉન્ટ સીડ કરવા માટે સ્પષ્ટપણે વિનંતી કરવી પડશે."
        },
        {
          myth: "જો મારી સીડિંગ નિષ્ફળ જાય, તો તે NPCI અથવા UIDAI સાથેની સમસ્યા છે.",
          fact: "આ એક માન્યતા છે. NPCI મેપરને અપડેટ કરવાની જવાબદારી સંપૂર્ણપણે બેંકોની છે. જો તમારી સીડિંગ નિષ્ફળ જાય, તો તમારે સીધી તમારી બેંક શાખાનો સંપર્ક કરવો આવશ્યક છે."
        },
        {
          myth: "મારી બેંક એપ બતાવે છે કે મારું આધાર 'સક્રિય' છે, તેથી હું DBT માટે તૈયાર છું.",
          fact: "આ એક માન્યતા છે. બેંકની આંતરિક સિસ્ટમમાં 'સક્રિય' આધાર લિંક બતાવવું એ ખાતરી આપતું નથી કે તમારું ખાતું NPCI મેપર પર છે. ખાતરી કરવાનો એકમાત્ર રસ્તો UIDAI અથવા NPCI વેબસાઇટ્સ પર તપાસ કરવાનો છે."
        }
      ],
      facts: [
        {
          fact: "ડીબીટીને સક્ષમ કરવા માટે તમારે તમારી બેંકમાં એક વિશિષ્ટ 'આધાર સીડિંગ સંમતિ ફોર્મ' સબમિટ કરવું આવશ્યક છે.",
          explanation: "આ એક હકીકત છે. ફક્ત લિંક કરેલું એકાઉન્ટ હોવું પૂરતું નથી; તમારે સીડિંગ માટે સ્પષ્ટ સંમતિ આપવી આવશ્યક છે, જેને બેંક પછી NPCI સર્વર પર અપડેટ કરે છે."
        },
        {
          fact: "કોઈપણ સમયે ડીબીટી માટે ફક્ત એક જ બેંક ખાતું આધાર-સીડ કરી શકાય છે.",
          explanation: "આ એક હકીકત છે. જો તમે નવું ખાતું સીડ કરો છો, તો તે આપમેળે પાછલા ખાતાને NPCI મેપરથી ડિ-લિંક કરે છે. નવીનતમ સીડ થયેલ ખાતામાં ભંડોળ આવે છે."
        },
        {
          fact: "જો બાયોમેટ્રિક પ્રમાણીકરણ (ફિંગરપ્રિન્ટ/આઇરિસ) નિષ્ફળ જાય, તો લાભ મેળવવાના વૈકલ્પિક રસ્તાઓ છે.",
          explanation: "આ એક હકીકત છે. સરકારી માર્ગદર્શિકાઓમાં 'અપવાદ સંભાળવાની પદ્ધતિ' શામેલ છે જેથી ખાતરી કરી શકાય કે તમને લાભ મળે, જેમ કે OTP અથવા અન્ય ભૌતિક ચકાસણીનો ઉપયોગ કરવો."
        },
        {
          fact: "જો આધાર અને બેંક ખાતા પર તમારું નામ બરાબર મેળ ખાતું નથી, તો સીડિંગ નિષ્ફળ જશે.",
          explanation: "આ એક હકીકત છે. સીડિંગ પ્રક્રિયા સફળ થવા માટે તમારું નામ બંને રેકોર્ડમાં સરખું હોવું આવશ્યક છે. તમારે તેને આધાર અથવા બેંક રેકોર્ડમાંથી કોઈ એકમાં સુધારવું પડશે."
        },
        {
          fact: "સબસિડી મેળવવા માટે આધાર કાયદેસર રીતે ફરજિયાત નથી.",
          explanation: "આ એક હકીકત છે. સુપ્રીમ કોર્ટે ચુકાદો આપ્યો છે કે જયારે આધાર તેની કાર્યક્ષમતા માટે પસંદગીનો છે, ત્યારે ફક્ત આધાર નંબર ન હોવાના કારણે લાભો નકારી શકાય નહીં. ID ના અન્ય સ્વરૂપો સ્વીકારવા આવશ્યક છે."
        },
        {
          fact: "તમે યુઆઈડીએઆઈ અને એનપીસીઆઈ બંને વેબસાઇટ્સ પર તમારી આધાર સીડિંગની સ્થિતિ ચકાસી શકો છો.",
          explanation: "આ એક હકીકત છે. બંને અધિકૃત પોર્ટલ હાલમાં કયું બેંક ખાતું DBT માટે સીડ થયેલ છે તે તપાસવાની સુવિધા પૂરી પાડે છે, કારણ કે તેઓ એક જ NPCI મેપરથી ડેટા મેળવે છે."
        }
      ]
    },
    awareness: {
      title: "સફળતાની ગાથાઓ",
      subtitle: "સમયસર શિષ્યવૃત્તિ વિતરણથી લાભ મેળવનારા વિદ્યાર્થીઓ પાસેથી સાંભળો.",
      stories: [
        {
          name: "પ્રિયા એસ.",
          story: "\"મારા ડીબીટી-સક્ષમ ખાતાનો આભાર, મને મારી કોલેજની ફી ભરવા માટે સમયસર શિષ્યવૃત્તિ મળી. પ્રક્રિયા ખૂબ જ સરળ હતી!\"",
        },
        {
          name: "રોહન કે.",
          story: "\"હું સીડિંગ પ્રક્રિયા વિશે મૂંઝવણમાં હતો, પરંતુ ડીબીટી સહાયકની માર્ગદર્શિકાએ મને તે પૂર્ણ કરવામાં મદદ કરી. મને કોઈપણ સમસ્યા વિના મારું ભંડોળ મળ્યું.\"",
        },
        {
          name: "અંજલિ એમ.",
          story: "\"વિલંબ કરશો નહીં! તમારું ખાતું આધાર-સીડ કરાવવું એ સૌથી મહત્વપૂર્ણ પગલું છે. તેનાથી મારા અને મારા પરિવાર માટે ઘણો મોટો ફેરફાર થયો.\"",
        },
      ],
    },
    faq: {
      title: "વારંવાર પૂછાતા પ્રશ્નો",
      subtitle: "આધાર સીડિંગ અને ડીબીટી વિશેના સામાન્ય પ્રશ્નોના જવાબો મેળવો.",
      faqs: [
        {
          question: "આધાર લિંકિંગ અને આધાર સીડિંગ વચ્ચે શું તફાવત છે?",
          answer: "આધાર લિંકિંગ તમારા આધારને ઓળખ ચકાસણી (KYC) માટે બેંક ખાતા સાથે જોડે છે. આધાર સીડિંગ તમારા આધારને ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) મેળવવા માટે NPCI સર્વર પર એક જ બેંક ખાતા સાથે મેપ કરવાની એક અલગ, વિશિષ્ટ પ્રક્રિયા છે. શિષ્યવૃત્તિ માટે સીડિંગ ફરજિયાત છે.",
        },
        {
          question: "શું મારી પાસે બહુવિધ આધાર-સીડેડ ખાતા હોઈ શકે છે?",
          answer: "ના, તમારી પાસે કોઈ પણ સમયે DBT મેળવવા માટે ફક્ત એક જ આધાર-સીડેડ ખાતું હોઈ શકે છે. જો તમે નવું ખાતું સીડ કરો છો, તો પાછલું ખાતું આપમેળે ડી-લિંક થઈ જાય છે. સબસિડી છેલ્લા સફળતાપૂર્વક સીડ થયેલા બેંક ખાતામાં જમા કરવામાં આવશે.",
        },
        {
          question: "ડીબીટી ફંડ મેળવવા માટે હું મારું બેંક ખાતું કેવી રીતે બદલી શકું?",
          answer: "તમારું ડીબીટી-સક્ષમ ખાતું બદલવા માટે, તમારે તે *નવી* બેંકની શાખાની મુલાકાત લેવી આવશ્યક છે જ્યાં તમે ભંડોળ મેળવવા માંગો છો. ત્યાં આધાર સીડિંગ સંમતિ ફોર્મ સબમિટ કરો. તેઓ NPCI મેપરને અપડેટ કરશે, જે જૂના ખાતાને આપમેળે ઓવરરાઇડ કરશે.",
        },
        {
            question: "જો મારી આધાર સીડિંગ વિનંતી નિષ્ફળ જાય અથવા બાકી રહે તો મારે શું કરવું જોઈએ?",
            answer: "તમારી બેંક શાખાની ફરી મુલાકાત લો. નિષ્ફળતાના સામાન્ય કારણોમાં તમારા આધાર અને બેંક રેકોર્ડ વચ્ચે નામનો મેળ ન ખાવો, અથવા ફોર્મ પર ખોટો ખાતા નંબર શામેલ છે. NPCI મેપરને અપડેટ કરવાની જવાબદારી સંપૂર્ણપણે બેંકોની છે, તેથી તમારે તેમની સાથે ફોલો-અપ કરવું પડશે.",
        },
        {
            question: "મારું નામ મારા આધાર કાર્ડ વિરુદ્ધ મારા બેંક ખાતામાં અલગ છે. મારે શું કરવું જોઈએ?",
            answer: "તમારે તમારા નામને દસ્તાવેજોમાંથી એકમાં સુધારવું પડશે જેથી તે બરાબર મેળ ખાય. તમે તમારા આધારની વિગતો અપડેટ કરવા માટે આધાર નોંધણી કેન્દ્રની મુલાકાત લઈ શકો છો, અથવા તમારા બેંક રેકોર્ડને અપડેટ કરવા માટે તમારી બેંક શાખાની મુલાકાત લઈ શકો છો. સીડિંગ સફળ થવા માટે નામ એકસરખું હોવું આવશ્યક છે.",
        },
        {
            question: "જો મારું બાયોમેટ્રિક (ફિંગરપ્રિન્ટ/આઇરિસ) પ્રમાણીકરણ નિષ્ફળ જાય તો શું થશે?",
            answer: "ચિંતા કરશો નહીં. સરકારી માર્ગદર્શિકાઓમાં એક 'અપવાદ સંભાળવાની પદ્ધતિ' છે. અમલીकरण એજન્સીઓને તમને તમારી ઓળખ સાબિત કરવાના વૈકલ્પિક માર્ગો પ્રદાન કરવાની જરૂર છે, જેમ કે તમારા નોંધાયેલા મોબાઇલ નંબર પર OTP દ્વારા, અથવા અન્ય ભૌતિક ચકાસણી પદ્ધતિઓ દ્વારા જેથી તમને લાભો નકારવામાં ન આવે.",
        },
        {
            question: "શું મારી શિષ્યવૃત્તિ મેળવવા માટે આધાર ફરજિયાત છે?",
            answer: "જ્યારે આધાર પસંદગીની અને સૌથી કાર્યક્ષમ પદ્ધતિ છે, ત્યારે સુપ્રીમ કોર્ટે ચુકાદો આપ્યો છે કે ફક્ત આધાર નંબર ન હોવાના કારણે આવશ્યક લાભો નકારી શકાય નહીં. જો તમારી પાસે આધાર નથી, તો તમે સામાન્ય રીતે તમારી આધાર નોંધણી ID (EID) સ્લિપનો ઉપયોગ અન્ય વૈકલ્પિક સરકારી-માન્ય ID (જેમ કે બેંક પાસબુક) સાથે કરી શકો છો, જે શિષ્યવૃત્તિ યોજના દ્વારા નિર્દિષ્ટ છે.",
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
        text: "શિષ્યવૃત્તિ પ્રક્રિયા વિશેની સામાન્ય ગેરસમજોમાં પડશો નહીં.",
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
      tagline: "સ્માર્ટ ઇન્ડિયા હેકાથોન ૨૦૨૫ માટે ટીમ કોડ ટેકનિશિયન દ્વારા એક પહેલ.",
      credits: "સામાજિક ન્યાય અને સશક્તિકરણ મંત્રાલયના માર્ગદર્શન હેઠળ।",
      navigation: "નેવિગેશન",
      resources: "સંસાધનો",
      about: "અમારા વિશે",
      learnMore: "ડીબીટી વિશે જાણો",
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
