
import type { Language, LanguageContent, Myth, Fact } from './types';

export const pageContent: Record<Language, LanguageContent> = {
  en: {
    header: {
      title: "DBT Sahayak",
      nav: {
        education: "Learn",
        videos: "Videos",
        status: "Check Status",
        scholarships: "Scholarships",
        myths: "Myth Busters",
        faq: "FAQ",
        contact: "Contact",
        about: "About Us",
      },
      login: "Login/Register"
    },
    hero: {
      tagline: "Empowering Students, Ensuring Scholarships",
      title: "Unlock Your Scholarship with a DBT-Enabled Account",
      subtitle: "Understand the key difference between an Aadhaar-linked account and a DBT-enabled Aadhaar-seeded account to ensure you receive your scholarship funds without delay.",
      cta: "Learn More",
    },
    education: {
      title: "Knowledge is Power",
      subtitle: "Understand the essentials for hassle-free scholarship disbursement.",
      card1: {
        title: "Aadhaar Linked Account",
        description: "Your Aadhaar number is simply connected to your bank account for identity verification. This does not guarantee receipt of government benefits.",
      },
      card2: {
        title: "DBT-Enabled Aadhaar Seeded Account",
        description: "Your Aadhaar is mapped with a specific bank account through NPCI to receive Direct Benefit Transfers (DBT) like scholarships. This is mandatory.",
      },
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
        "Visit the official UIDAI website (myaadhaar.uidai.gov.in) or the NPCI website.",
        "On UIDAI: Go to 'My Aadhaar' > 'Aadhaar Services' > 'Check Aadhaar/Bank Linking Status'.",
        "Enter your Aadhaar number and the security code.",
        "An OTP will be sent to your registered mobile number. Enter it to see your active seeding status.",
        "The status shown is fetched from the NPCI server and is the definitive source."
      ],
      cta: "Check Status on UIDAI Portal",
    },
    scholarships: {
      title: "Available Scholarships",
      subtitle: "Explore scholarship opportunities for which a DBT-enabled account is essential.",
      scholarships: [
        {
          title: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
          description: "State-level scheme for meritorious students of Gujarat to pursue higher education.",
          eligibility: "Varies by course. Requires specific percentile in 10th/12th and income criteria.",
          link: "https://mysy.guj.nic.in/",
        },
        {
          title: "Post-Matric Scholarship for OBC Students",
          description: "Financial assistance to students of Other Backward Classes (OBC) for post-matric studies.",
          eligibility: "Parental income should not exceed Rs. 1.5 lakh per annum.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "Central Sector Scheme for College Students (CSSS)",
          description: "For meritorious students from low-income families to meet day-to-day expenses while pursuing higher studies.",
          eligibility: "Must be in the top 20th percentile of successful candidates in Class XII.",
          link: "https://scholarships.gov.in/",
        },
         {
          title: "Food Bill Assistance for Hostellers (Gujarat)",
          description: "Assistance for students staying in hostels attached to educational institutions in Gujarat.",
          eligibility: "For SC/ST/OBC/EBC students residing in approved hostels.",
          link: "https://samajkalyan.gujarat.gov.in/en",
        },
        {
          title: "Post-Matric Scholarship for SC Students",
          description: "For SC students studying in post-matriculation or post-secondary stage across India.",
          eligibility: "Parental income should not exceed Rs. 2.5 lakh per annum.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "National Means-cum-Merit Scholarship",
          description: "For meritorious students of economically weaker sections to arrest their drop out at class VIII.",
          eligibility: "Parental income up to Rs. 3.5 lakh. Must have scored at least 55% in Class VII.",
          link: "https://scholarships.gov.in/",
        },
        {
            title: "Scholarships for Top Class Education for Students with Disabilities",
            description: "For differently-abled students pursuing graduate and postgraduate degrees in specified institutions.",
            eligibility: "Students with more than 40% disability and a valid certificate. Income ceiling of Rs. 6 lakh per annum.",
            link: "https://scholarships.gov.in/"
        },
        {
            title: "Prime Minister's Scholarship Scheme for RPF/RPSF",
            description: "Professional degree scholarships for the dependent wards of RPF/RPSF personnel.",
            eligibility: "Dependent wards of serving, ex-RPF/RPSF personnel and widows. Minimum 60% in 12th/Diploma/Graduation.",
            link: "https://scholarships.gov.in/"
        }
      ],
    },
    mythBusters: {
      title: "Myth Busters",
      subtitle: "Test your knowledge! Can you tell the difference between a DBT myth and a fact?",
      resultText: "You're now a certified Myth & Fact expert!",
      myths: [
        {
          myth: "If my bank account is linked to Aadhaar, I will automatically get my scholarship.",
          fact: "This is a myth. Your account must be specifically 'seeded' with Aadhaar for DBT on the NPCI mapper, not just linked. It is a separate process."
        },
        {
          myth: "I can receive my scholarship in any of my Aadhaar-linked bank accounts.",
          fact: "This is a myth. You can only receive DBT payments in the one bank account that is currently seeded with your Aadhaar. This is your designated DBT-enabled account."
        },
        {
          myth: "My bank has my Aadhaar card photocopy, so my account is seeded.",
          fact: "This is a myth. Submitting a photocopy is not enough. You must fill out and submit the specific 'Aadhaar Seeding Consent Form' and explicitly request the bank to seed your account."
        },
        {
          myth: "If my seeding fails, it's an issue with NPCI or UIDAI.",
          fact: "This is a myth. The responsibility of updating the NPCI mapper rests solely with the banks. If your seeding fails, you must follow up with your bank branch."
        },
        {
          myth: "My bank app shows my Aadhaar is 'active', so I'm ready for DBT.",
          fact: "This is a myth. A bank's internal system (CBS) showing 'active' does not guarantee your account is on the NPCI mapper. The only way to be sure is by checking on the UIDAI or NPCI websites."
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
          fact: "The responsibility to handle authentication failures (like fingerprint issues) lies with the implementing agencies.",
          explanation: "This is a fact. Government notifications include an 'exception handling mechanism' to ensure you still get benefits if biometric authentication fails."
        },
        {
          fact: "You can receive DBT funds at your doorstep through a Bank Mitra/Correspondent.",
          explanation: "This is a fact. Services like cash withdrawal and balance enquiry are available through micro-ATMs in many areas."
        },
        {
          fact: "If your name on Aadhaar and bank account don't match, seeding will fail.",
          explanation: "This is a fact. Your name must be identical in both records for the seeding process to be successful. You must get it corrected in one of the documents."
        },
        {
          fact: "You can check your Aadhaar seeding status on both the UIDAI and NPCI websites.",
          explanation: "This is a fact. Both official portals provide a facility to check which bank account is currently seeded for DBT."
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
          answer: "Aadhaar linking is simply connecting your Aadhaar to a bank account for KYC. Aadhaar seeding is a specific process of linking your Aadhaar to your bank account with the NPCI mapper to receive Direct Benefit Transfers (DBT). Seeding is required for scholarships.",
        },
        {
          question: "Can I have multiple Aadhaar-seeded accounts?",
          answer: "No, you can only have one Aadhaar-seeded account for receiving DBT. If you seed a new account, the previous one gets de-linked automatically. The subsidy will be credited to the last bank account that was successfully seeded.",
        },
        {
          question: "How do I know that DBT funds have come to my account?",
          answer: "If you have enabled SMS alerts from your bank, you will receive a notification. You can also check your account balance via ATM, your bank's mobile app, internet banking, or by visiting a Bank Mitra/Correspondent.",
        },
        {
          question: "How do I change my bank account to receive DBT funds?",
          answer: "To change your DBT-enabled account, you must visit the branch of the *new* bank where you want to receive funds. Submit the Aadhaar seeding consent form there, and they will update the NPCI mapper, which will automatically override the old account.",
        },
        {
          question: "What should I do if my Aadhaar seeding request fails or is pending?",
          answer: "Revisit your bank branch. Common reasons for failure include a name mismatch between your Aadhaar and bank records, or an incorrect account number on the form. The responsibility for updating lies with the bank, so you must follow up with them.",
        },
        {
          question: "My name is different in my Aadhaar card versus my bank account. What should I do?",
          answer: "You must get your name corrected in one of the documents so they match exactly. You can visit an Aadhaar Enrolment Centre to update your Aadhaar details, or your bank branch to update your bank records.",
        },
        {
            question: "What happens if my biometric (fingerprint) authentication fails?",
            answer: "Don't worry. Government guidelines have an exception handling process. Agencies are required to provide alternate ways for you to prove your identity, such as through an OTP to your registered mobile number or other physical verification."
        },
        {
          question: "I don't have an Aadhaar card. Can I still get scheme benefits?",
          answer: "If you are not yet enrolled, you must visit an Aadhaar enrolment centre. Until your Aadhaar is assigned, you can typically use your Aadhaar Enrolment ID (EID) slip along with other alternate IDs (like a bank passbook) as specified by the scholarship scheme.",
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
      title: "About Us",
      mandate: {
        title: "DBT Mission Mandate",
        subtitle: "The official mandate and history of Direct Benefit Transfer in India.",
        aboutText: [
            "With the aim of reforming Government delivery system by re-engineering the existing process in welfare schemes for simpler and faster flow of information/funds and to ensure accurate targeting of the beneficiaries, de-duplication and reduction of fraud Direct Benefit Transfer (DBT) was started on 1st January, 2013.",
            "The DBT Mission was created in the Planning Commission to act as the nodal point for the implementation of the DBT programmes. The Mission was transferred to the Department of Expenditure in July, 2013. To give more impetus, the DBT Mission was placed in the Cabinet Secretariat w.e.f. 14.9.2015.",
            "The JAM trinity (Jan Dhan, Aadhaar and Mobile) are DBT enablers that provide a unique opportunity to implement DBT in all welfare schemes across the country, bringing efficiency, transparency, and accountability.",
            "Aadhaar is not mandatory in DBT schemes. However, since Aadhaar provides unique identity and is useful in targeting the intended beneficiaries, beneficiaries are encouraged to have Aadhaar to avail benefits."
        ],
        orgChartTitle: "DBT Mission Organizational Structure"
      },
      ourTeam: {
          title: "Our Team",
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
        scholarships: "छात्रवृत्तियाँ",
        myths: "मिथक तोड़ें",
        faq: "अक्सर पूछे जाने वाले प्रश्न",
        contact: "संपर्क",
        about: "हमारे बारे में",
      },
      login: "लॉगિન/રજીસ્ટર કરો"
    },
    hero: {
      tagline: "छात्रों को सशक्त बनाना, छात्रवृत्ति सुनिश्चित करना",
      title: "डीबीटी-सक्षम खाते के साथ अपनी छात्रवृत्ति अनलॉक करें",
      subtitle: "यह सुनिश्चित करने के लिए कि आपको अपनी छात्रवृत्ति राशि बिना किसी देरी के मिले, आधार-लिंक्ड खाते और डीबीटी-सक्षम आधार-सीडेड खाते के बीच मुख्य अंतर को समझें।",
      cta: "और जानें",
    },
    education: {
      title: "ज्ञान ही शक्ति है",
      subtitle: "परेशानी मुक्त छात्रवृत्ति वितरण के लिए आवश्यक बातें समझें।",
      card1: {
        title: "आधार लिंक्ड खाता",
        description: "आपका आधार नंबर पहचान सत्यापन के लिए आपके बैंक खाते से जुड़ा होता है। यह सरकारी लाभों की प्राप्ति की गारंटी नहीं देता है।",
      },
      card2: {
        title: "डीबीटी-सक्षम आधार सीडेड खाता",
        description: "छात्रवृत्ति जैसे प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए आपका आधार एनपीसीआई के माध्यम से एक विशिष्ट बैंक खाते से मैप किया गया है। यह अनिवार्य है।",
      },
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
        "अपनी स्थिति की जांच के लिए आधिकारिक यूआईडीएआई वेबसाइट (myaadhaar.uidai.gov.in) या एनपीसीआई वेबसाइट पर जाएं।",
        "यूआईडीएआई पर: 'माई आधार' > 'आधार सेवाएं' > 'आधार/बैंक लिंकिंग स्थिति जांचें' पर जाएं।",
        "अपना आधार नंबर और सुरक्षा कोड दर्ज करें।",
        "आपके पंजीकृत मोबाइल नंबर पर एक ओटीपी भेजा जाएगा। अपनी सक्रिय सीडिंग स्थिति देखने के लिए इसे दर्ज करें।",
        "दिखाई गई स्थिति एनपीसीआई सर्वर से प्राप्त की जाती है और यह निश्चित स्रोत है।"
      ],
      cta: "यूआईडीएआई पोर्टल पर स्थिति जांचें",
    },
    scholarships: {
      title: "उपलब्ध छात्रवृत्तियाँ",
      subtitle: "उन छात्रवृत्ति अवसरों का अन्वेષણ करें जिनके लिए डीबीटी-सक्षम खाता आवश्यक है।",
      scholarships: [
        {
          title: "मुख्यमंत्री युवा स्वावलंबन योजना (MYSY)",
          description: "गुजरात के मेधावी छात्रों के लिए उच्च शिक्षा प्राप्त करने हेतु राज्य स्तरीय योजना।",
          eligibility: "पाठ्यक्रम के अनुसार बदलता है। 10वीं/12वीं में विशिष्ट प्रतिशत और आय मानदंड की आवश्यकता है।",
          link: "https://mysy.guj.nic.in/",
        },
        {
          title: "ओबीसी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
          description: "अन्य पिछड़ा वर्ग (ओबीसी) के छात्रों को पोस्ट-मैट्रिक अध्ययन के लिए वित्तीय सहायता।",
          eligibility: "माता-पिता की आय 1.5 लाख रुपये प्रति वर्ष से अधिक नहीं होनी चाहिए।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "कॉलेज छात्रों के लिए केंद्रीय क्षेत्र योजना (CSSS)",
          description: "कम आय वाले परिवारों के मेधावी छात्रों के लिए उच्च शिक्षा प्राप्त करते समय दिन-प्रतिदिन के खर्चों को पूरा करने के लिए।",
          eligibility: "कक्षा बारहवीं में सफल उम्मीदवारों के शीर्ष 20 प्रतिशत में होना चाहिए।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "हॉस्टलर्स के लिए भोजन बिल सहायता (गुजरात)",
          description: "गुजरात में शैक्षणिक संस्थानों से जुड़े हॉस्टल में रहने वाले छात्रों के लिए सहायता।",
          eligibility: "स्वीकृत हॉस्टल में रहने वाले एससी/एसटी/ओबीसी/ईबीसी छात्रों के लिए।",
          link: "https://samajkalyan.gujarat.gov.in/en",
        },
        {
          title: "अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट્રિક छात्रवृत्ति",
          description: "मैट्रिकोत्तर या माध्यमिकोत्तर चरण में पढ़ने वाले अनुसूचित जाति के छात्रों के लिए।",
          eligibility: "माता-पिता की आय 2.5 लाख रुपये प्रति वर्ष से अधिक नहीं होनी चाहिए।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति",
          description: "आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों के लिए ताकि वे कक्षा आठवीं में पढ़ाई न छोड़ें।",
          eligibility: "माता-पिता की आय 3.5 लाख रुपये तक। कक्षा सातवीं में कम से कम 55% अंक प्राप्त किए हों।",
          link: "https://scholarships.gov.in/",
        },
        {
            title: "विकलांग छात्रों के लिए शीर्ष श्रेणी की शिक्षा के लिए छात्रवृत्ति",
            description: "निर्दिष्ट संस्थानों में स्नातक और स्नातकोत्तर डिग्री प्राप्त करने वाले विकलांग छात्रों के लिए।",
            eligibility: "40% से अधिक विकलांगता और वैध प्रमाण पत्र वाले छात्र। प्रति वर्ष 6 लाख रुपये की आय सीमा।",
            link: "https://scholarships.gov.in/"
        },
        {
            title: "आरपीएफ/आरपीएसएफ के लिए प्रधानमंत्री छात्रवृत्ति योजना",
            description: "आरपीएफ/आरपीएसएफ कर्मियों के आश्रित बच्चों के लिए व्यावसायिक डिग्री छात्रवृत्ति।",
            eligibility: "सेवारत, पूर्व आरपीएफ/आरपीएसएफ कर्मियों और विधवाओं के आश्रित बच्चे। 12वीं/डिप्लोमा/स्नातक में न्यूनतम 60%।",
            link: "https://scholarships.gov.in/"
        }
      ],
    },
     mythBusters: {
      title: "मिथक तोड़ें",
      subtitle: "अपने ज्ञान का परीक्षण करें! क्या आप डीबीटी मिथक और तथ्य के बीच अंतर बता सकते हैं?",
      resultText: "अब आप एक प्रमाणित मिथक और तथ्य विशेषज्ञ हैं!",
      myths: [
        {
          myth: "यदि मेरा बैंक खाता आधार से जुड़ा हुआ है, तो मुझे स्वतः ही मेरी छात्रवृत्ति मिल जाएगी।",
          fact: "यह एक मिथक है। आपके खाते को केवल लिंक ही नहीं, बल्कि एनपीसीआई मैपर पर डीबीटी के लिए आधार के साथ विशेष रूप से 'सीड' किया जाना चाहिए। यह एक अलग प्रक्रिया है।"
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
          fact: "यह एक मिथक है। एनपीसीआई मैपर को अपडेट करने की जिम्मेदारी पूरी तरह से बैंकों की है। यदि आपकी सीडिंग विफल हो जाती है, तो आपको अपनी बैंक शाखा से संपर्क करना होगा।"
        },
        {
          myth: "मेरा बैंक ऐप दिखाता है कि मेरा आधार 'सक्रिय' है, इसलिए मैं डीबीटी के लिए तैयार हूं।",
          fact: "यह एक मिथक है। किसी बैंक की आंतरिक प्रणाली (सीबीएस) में 'सक्रिय' दिखाना इस बात की गारंटी नहीं देता है कि आपका खाता एनपीसीआई मैपर पर है। सुनिश्चित होने का एकमात्र तरीका यूआईडीएआई या एनपीसीआई वेबसाइटों पर जांच करना है।"
        }
      ],
      facts: [
        {
          fact: "डीबीटी को सक्षम करने के लिए आपको अपने बैंक में एक विशिष्ट 'आधार सीडिंग सहमति फॉर्म' जमा करना होगा।",
          explanation: "यह एक तथ्य है। केवल एक लिंक किया हुआ खाता होना पर्याप्त नहीं है; आपको सीडिंग के लिए स्पष्ट सहमति देनी होगी।"
        },
        {
          fact: "किसी भी समय डीबीटी के लिए केवल एक बैंक खाता आधार-सीड किया जा सकता है।",
          explanation: "यह एक तथ्य है। यदि आप कोई नया खाता सीड करते हैं, तो यह स्वचालित रूप से पिछले खाते को एनपीसीआई मैपर से डी-लिंक कर देता है।"
        },
        {
          fact: "प्रमाणीकरण विफलताओं (जैसे फिंगरप्रिंट समस्याएं) को संभालने की जिम्मेदारी कार्यान्वयन एजेंसियों की है।",
          explanation: "यह एक तथ्य है। सरकारी अधिसूचनाओं में एक 'अपवाद हैंडलिंग तंत्र' शामिल है ताकि यह सुनिश्चित हो सके कि यदि बॉयोमीट्रिक प्रमाणीकरण विफल हो जाता है तो भी आपको लाभ मिले।"
        },
        {
          fact: "आप बैंक मित्र/संवाददाता के माध्यम से अपने दरवाजे पर डीबीटी फंड प्राप्त कर सकते हैं।",
          explanation: "यह एक तथ्य है। कई क्षेत्रों में माइक्रो-एटीएम के माध्यम से नकद निकासी और शेष राशि पूछताछ जैसी सेवाएं उपलब्ध हैं।"
        },
        {
          fact: "यदि आधार और बैंक खाते पर आपका नाम मेल नहीं खाता है, तो सीडिंग विफल हो जाएगी।",
          explanation: "यह एक तथ्य है। सीडिंग प्रक्रिया के सफल होने के लिए आपका नाम दोनों रिकॉर्ड में समान होना चाहिए। आपको इसे किसी एक दस्तावेज़ में ठीक करवाना होगा।"
        },
        {
          fact: "आप यूआईडीएआई और एनपीसीआई दोनों वेबसाइटों पर अपनी आधार सीडिंग स्थिति की जांच कर सकते हैं।",
          explanation: "यह एक तथ्य है। दोनों आधिकारिक पोर्टल यह जांचने की सुविधा प्रदान करते हैं कि वर्तमान में कौन सा बैंक खाता डीबीटी के लिए सीड किया गया है।"
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
          name: "रोહન के.",
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
          answer: "आधार लिंकिंग केवल केवाईसी के लिए आपके आधार को बैंक खाते से जोड़ना है। आधार सीडिंग आपके आधार को प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए एनपीसीआई मैपर के साथ आपके बैंक खाते से जोड़ने की एक विशिष्ट प्रक्रिया है। छात्रवृत्ति के लिए सीडिंग आवश्यक है।",
        },
        {
          question: "क्या मेरे पास कई आधार-सीडेड खाते हो सकते हैं?",
          answer: "नहीं, डीबीटी प्राप्त करने के लिए आपके पास केवल एक आधार-सीडेड खाता हो सकता है। यदि आप कोई नया खाता सीड करते हैं, तो पिछला खाता स्वतः डी-लिंक हो जाता है। सब्सिडी अंतिम सफलतापूर्वक सीड किए गए बैंक खाते में जमा की जाएगी।",
        },
        {
            question: "मुझे कैसे पता चलेगा कि मेरे खाते में डीबीटी फंड आ गया है?",
            answer: "यदि आपने अपने बैंक से एसएमएस अलर्ट सक्षम किया है, तो आपको एक सूचना प्राप्त होगी। आप एटीएम, अपने बैंक के मोबाइल ऐप, इंटरनेट बैंकिंग के माध्यम से या बैंक मित्र/संवाददाता के पास जाकर भी अपने खाते की शेष राशि की जांच कर सकते हैं।",
        },
        {
            question: "डीबीटी फंड प्राप्त करने के लिए मैं अपना बैंक खाता कैसे बदलूं?",
            answer: "अपना डीबीटी-सक्षम खाता बदलने के लिए, आपको उस *नए* बैंक की शाखा में जाना होगा जहाँ आप फंड प्राप्त करना चाहते हैं। वहां आधार सीडिंग सहमति फॉर्म जमा करें, और वे एनपीसीआई मैपर को अपडेट कर देंगे, जो पुराने खाते को स्वतः ओवरराइड कर देगा।",
        },
        {
            question: "यदि मेरा आधार सीडिंग अनुरोध विफल हो जाए या लंबित हो तो मुझे क्या करना चाहिए?",
            answer: "अपनी बैंक शाखा में फिर से जाएँ। विफलता के सामान्य कारणों में आपके आधार और बैंक रिकॉर्ड के बीच नाम का मेल न होना, या फॉर्म पर गलत खाता संख्या शामिल है। अपडेट करने की जिम्मेदारी बैंक की है, इसलिए आपको उनसे संपर्क करना होगा।",
        },
        {
            question: "मेरा नाम मेरे आधार कार्ड बनाम मेरे बैंक खाते में अलग है। मुझे क्या करना चाहिए?",
            answer: "आपको अपने नाम को किसी एक दस्तावेज़ में ठीक करवाना होगा ताकि वे बिल्कुल मेल खाएं। आप अपने आधार विवरण को अपडेट करने के लिए किसी आधार नामांकन केंद्र पर जा सकते हैं, या अपने बैंक रिकॉर्ड को अपडेट करने के लिए अपनी बैंक शाखा में जा सकते हैं।",
        },
        {
            question: "यदि मेरा बॉयोमीट्रिक (फिंगरप्रिंट) प्रमाणीकरण विफल हो जाता है तो क्या होगा?",
            answer: "चिंता न करें। सरकारी दिशानिर्देशों में एक अपवाद हैंडलिंग प्रक्रिया है। एजेंसियों को आपको अपनी पहचान साबित करने के वैकल्पिक तरीके प्रदान करने की आवश्यकता होती है, जैसे कि आपके पंजीकृत मोबाइल नंबर पर ओटीपी के माध्यम से या अन्य भौतिक सत्यापन।"
        },
        {
          question: "मेरे पास आधार कार्ड नहीं है। क्या मुझे अभी भी योजना का लाभ मिल सकता है?",
          answer: "यदि आप अभी तक नामांकित नहीं हैं, तो आपको एक आधार नामांकन केंद्र पर जाना होगा। जब तक आपका आधार आवंटित नहीं हो जाता, तब तक आप आमतौर पर अपनी आधार नामांकन आईडी (ईआईडी) पर्ची का उपयोग अन्य वैकल्पिक आईडी (जैसे बैंक पासबुक) के साथ कर सकते हैं जैसा कि छात्रवृत्ति योजना द्वारा निर्दिष्ट है।",
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
        { name: "पंजाब नेशनल बैंक (पीएनબી)", description: "पीएनबी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35" },
        { name: "बैंक ऑफ बड़ौदा (बीoबी)", description: "बीओबी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf" },
        { name: "एचडीएफसी बैंक", description: "एचडीएफसी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।", link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c" },
        { name: "आईसीआईसीआई बैंक", description: "आईसीआईसीआई ग्राहकों के लिए आधार सीडिंग निर्देश।", link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card" },
        { name: "ऐक्सिस बैंक", description: "ऐक्सिस बैंक ग्राहकों के लिए आधार सीडING आवेदन पत्र।", link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf" }
      ]
    },
    about: {
      title: "हमारे बारे में",
      mandate: {
        title: "डीबीटी मिशन का जनादेश",
        subtitle: "भारत में प्रत्यक्ष लाभ हस्तांतरण का आधिकारिक जनादेश और इतिहास।",
        aboutText: [
            "सरकारी वितरण प्रणाली में सुधार के उद्देश्य से, कल्याणकारी योजनाओं में मौजूदा प्रक्रिया को सरल और तेज सूचना/धन प्रवाह के लिए फिर से डिजाइन करके और लाभार्थियों के सटीक लक्ष्यीकरण, डी-डुप्लीकेशन और धोखाधड़ी में कमी सुनिश्चित करने के लिए प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) 1 जनवरी 2013 को शुरू किया गया था।",
            "डीबीटी मिशन को योजना आयोग में डीबीटी कार्यक्रमों के कार्यान्वयन के लिए नोडल बिंदु के रूप में बनाया गया था। मिशन को जुलाई, 2013 में व्यय विभाग में स्थानांतरित कर दिया गया था। अधिक प्रोत्साहन देने के लिए, डीबीटी मिशन को 14.9.2015 से कैबिनेट सचिवालय में रखा गया है।",
            "जेएएम ट्रिनિટી (जन धन, आधार और मोबाइल) डीबीटी के प्रवर्तक हैं जो देश भर में सभी कल्याणकारी योजनाओं में डीबीटी को लागू करने, दक्षता, पारदर्शिता और जवाबदेही लाने का एक अनूठा अवसर प्रदान करते हैं।",
            "डीबीटी योजनाओं में आधार अनिवार्य नहीं है। हालांकि, चूंकि आधार अद्वितीय पहचान प्रदान करता है और इच्छित लाभार्थियों को लक्षित करने में उपयोगी है, इसलिए लाभार्थियों को लाभ प्राप्त करने के लिए आधार रखने के लिए प्रोत्साहित किया जाता है।"
        ],
        orgChartTitle: "डीबीटी मिशन संगठनात्मक संरचना"
      },
      ourTeam: {
          title: "हमारी टीम",
          subtitle: "SIH 2025 के लिए डीबीटी सहायक के पीछे के छात्र।"
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
      tagline: "स्मार्ट इंडिया हैकथॉन 2025 के लिए टीम कोड टेक्नीशियन की एक पहल।",
      credits: "सामाजिक न्याय और अधिकारिता मंत्रालय के मार्गदर्शन में।",
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
        scholarships: "શિષ્યવૃત્તિ",
        myths: "માન્યતા તોડો",
        faq: "વારંવાર પૂછાતા પ્રશ્નો",
        contact: "સંપર્ક",
        about: "અમારા વિશે",
      },
      login: "લોગિન/રજીસ્ટર કરો"
    },
    hero: {
      tagline: "વિદ્યાર્થીઓને સશક્ત બનાવવા, શિષ્યવૃત્તિ સુનિશ્ચિત કરવી",
      title: "ડીબીટી-સક્ષમ ખાતા સાથે તમારી શિષ્યવૃત્તિ અનલૉક કરો",
      subtitle: "તમને તમારી શિષ્યવૃત્તિની રકમ વિલંબ વિના મળે તેની ખાતરી કરવા માટે આધાર-લિંક્ડ ખાતા અને ડીબીટી-સક્ષમ આધાર-સીડેડ ખાતા વચ્ચેનો મુખ્ય તફાવત સમજો.",
      cta: "વધુ શીખો",
    },
    education: {
      title: "જ્ઞાન એ જ શક્તિ છે",
      subtitle: "મુશ્કેલી-મુક્ત શિષ્યવૃત્તિ વિતરણ માટે જરૂરી બાબતોને સમજો.",
      card1: {
        title: "આધાર લિંક્ડ એકાઉન્ટ",
        description: "તમારો આધાર નંબર ફક્ત ઓળખ ચકાસણી માટે તમારા બેંક ખાતા સાથે જોડાયેલ છે. આ સરકારી લાભોની પ્રાપ્તિની ખાતરી આપતું નથી.",
      },
      card2: {
        title: "ડીબીટી-સક્ષમ આધાર સીડેડ એકાઉન્ટ",
        description: "શિષ્યવૃત્તિ જેવા ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) મેળવવા માટે તમારું આધાર એનપીસીઆઈ દ્વારા ચોક્કસ બેંક ખાતા સાથે મેપ થયેલું છે. આ ફરજિયાત છે.",
      },
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
        "તમારી સ્થિતિ તપાસવા માટે સત્તાવાર UIDAI વેબસાઇટ (myaadhaar.uidai.gov.in) અથવા NPCI વેબસાઇટની મુલાકાત લો.",
        "UIDAI પર: 'માય આધાર' > 'આધાર સેવાઓ' > 'આધાર/બેંક લિંકિંગ સ્થિતિ તપાસો' પર જાઓ.",
        "તમારો આધાર નંબર અને સુરક્ષા કોડ દાખલ કરો.",
        "તમારા નોંધાયેલા મોબાઇલ નંબર પર એક OTP મોકલવામાં આવશે. તમારી સક્રિય સીડિંગ સ્થિતિ જોવા માટે તેને દાખલ કરો.",
        "બતાવેલ સ્થિતિ NPCI સર્વર પરથી મેળવવામાં આવે છે અને તે નિર્ણાયક સ્ત્રોત છે."
      ],
      cta: "યુઆઈડીએઆઈ પોર્ટલ પર સ્થિતિ તપાસો",
    },
    scholarships: {
      title: "ઉપલબ્ધ શિષ્યવૃત્તિઓ",
      subtitle: "શિષ્યવૃત્તિની તકોનું અન્વેષણ કરો જેના માટે ડીબીટી-સક્ષમ ખાતું જરૂરી છે.",
      scholarships: [
        {
          title: "મુખ્યમંત્રી યુવા સ્વાવલંબન યોજના (MYSY)",
          description: "ગુજરાતના હોશિયાર વિદ્યાર્થીઓને ઉચ્ચ શિક્ષણ મેળવવા માટે રાજ્ય સ્તરની યોજના.",
          eligibility: "અભ્યાસક્રમ મુજબ બદલાય છે. ૧૦મા/૧૨મા ધોરણમાં ચોક્કસ પર્સેન્ટાઇલ અને આવકના માપદંડની જરૂર છે.",
          link: "https://mysy.guj.nic.in/",
        },
        {
          title: "OBC વિદ્યાર્થીઓ માટે પોસ્ટ-મેટ્રિક શિષ્યવૃત્તિ",
          description: "અન્ય પછાત વર્ગ (OBC) ના વિદ્યાર્થીઓને પોસ્ટ-મેટ્રિક અભ્યાસ માટે આર્થિક સહાય.",
          eligibility: "વાલીની આવક વાર્ષિક રૂ. 1.5 લાખથી વધુ ન હોવી જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "કોલેજના વિદ્યાર્થીઓ માટે કેન્દ્રીય ક્ષેત્રની યોજના (CSSS)",
          description: "ઓછી આવક ધરાવતા પરિવારોના હોશિયાર વિદ્યાર્થીઓને ઉચ્ચ અભ્યાસ દરમિયાન રોજીંદા ખર્ચાઓને પહોંચી વળવા માટે.",
          eligibility: "ધોરણ 12 માં સફળ ઉમેદવારોના ટોચના 20મા પર્સેન્ટાઇલમાં હોવા જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "હોસ્ટેલના વિદ્યાર્થીઓ માટે ફૂડ બિલ સહાય (ગુજરાત)",
          description: "ગુજરાતમાં શૈક્ષણિક સંસ્થાઓ સાથે જોડાયેલ છાત્રાલયોમાં રહેતા વિદ્યાર્થીઓ માટે સહાય.",
          eligibility: "માન્ય છાત્રાલયોમાં રહેતા SC/ST/OBC/EBC વિદ્યાર્થીઓ માટે.",
          link: "https://samajkalyan.gujarat.gov.in/en",
        },
        {
          title: "એસસી વિદ્યાર્થીઓ માટે પોસ્ટ-મેટ્રિક શિષ્યવૃત્તિ",
          description: "પોસ્ટ-મેટ્રિક્યુલેશન અથવા પોસ્ટ-સેકન્ડરી તબક્કામાં અભ્યાસ કરતા એસસી વિદ્યાર્થીઓ માટે.",
          eligibility: "વાલીની આવક વાર્ષિક રૂ. 2.5 લાખથી વધુ ન હોવી જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "રાષ્ટ્રીય મીન્સ-કમ-મેરિટ શિષ્યવૃત્તિ",
          description: "આર્થિક રીતે નબળા વર્ગના હોશિયાર વિદ્યાર્થીઓને ધોરણ 8 માં અભ્યાસ છોડતા અટકાવવા માટે.",
          eligibility: "વાલીની આવક રૂ. 3.5 લાખ સુધી. ધોરણ 7 માં ઓછામાં ઓછા 55% ગુણ મેળવેલા હોવા જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
         {
            title: "વિકલાંગ વિદ્યાર્થીઓ માટે શ્રેષ્ઠ વર્ગ શિક્ષણ માટે શિષ્યવૃત્તિ",
            description: "નિર્દિષ્ટ સંસ્થાઓમાં સ્નાતક અને અનુસ્નાતક ડિગ્રી મેળવતા વિકલાંગ વિદ્યાર્થીઓ માટે.",
            eligibility: "40% થી વધુ વિકલાંગતા અને માન્ય પ્રમાણપત્ર ધરાવતા વિદ્યાર્થીઓ. વાર્ષિક રૂ. 6 લાખની આવક મર્યાદા.",
            link: "https://scholarships.gov.in/"
        },
        {
            title: "આરપીએફ/આરપીએસએફ માટે પ્રધાનમંત્રી શિષ્યવૃત્તિ યોજના",
            description: "આરપીએફ/આરપીએસએફ કર્મચારીઓના આશ્રિત બાળકો માટે વ્યાવસાયિક ડિગ્રી શિષ્યવૃત્તિ.",
            eligibility: "સેવારત, ભૂતપૂર્વ આરપીએફ/આરપીએસએફ કર્મચારીઓ અને વિધવાઓના આશ્રિત બાળકો. 12મા/ડિપ્લોમા/સ્નાતકમાં ન્યૂનતમ 60%.",
            link: "https://scholarships.gov.in/"
        }
      ],
    },
    mythBusters: {
      title: "માન્યતા તોડો",
      subtitle: "તમારા જ્ઞાનનું પરીક્ષણ કરો! શું તમે ડીબીટીની માન્યતા અને હકીકત વચ્ચેનો તફાવત કહી શકો છો?",
      resultText: "તમે હવે પ્રમાણિત માન્યતા અને હકીકત નિષ્ણાત છો!",
      myths: [
        {
          myth: "જો મારું બેંક ખાતું આધાર સાથે જોડાયેલું હોય, તો મને આપમેળે મારી શિષ્યવૃત્તિ મળી જશે.",
          fact: "આ એક માન્યતા છે। તમારું ખાતું ફક્ત લિંક જ નહીં, પણ એનપીસીઆઈ મેપર પર ડીબીટી માટે આધાર સાથે ખાસ 'સીડ' થયેલું હોવું જોઈએ. આ એક અલગ પ્રક્રિયા છે."
        },
        {
          myth: "હું મારા કોઈપણ આધાર-લિંક્ડ બેંક ખાતામાં મારી શિષ્યવૃત્તિ મેળવી શકું છું.",
          fact: "આ એક માન્યતા છે। તમે ફક્ત તે જ એક બેંક ખાતામાં ડીબીટી ચુકવણીઓ મેળવી શકો છો જે હાલમાં તમારા આધાર સાથે સીડ થયેલ છે. આ તમારું નિયુક્ત ડીબીટી-સક્ષમ ખાતું છે."
        },
        {
          myth: "મારી બેંક પાસે મારા આધાર કાર્ડની ફોટોકોપી છે, તેથી મારું ખાતું સીડ થયેલું છે.",
          fact: "આ એક માન્યતા છે। ફોટોકોપી સબમિટ કરવી પૂરતી નથી. તમારે ચોક્કસ 'આધાર સીડિંગ સંમતિ ફોર્મ' ભરીને સબમિટ કરવું પડશે અને બેંકને તમારું એકાઉન્ટ સીડ કરવા માટે સ્પષ્ટપણે વિનંતી કરવી પડશે."
        },
        {
          myth: "જો મારી સીડિંગ નિષ્ફળ જાય, તો તે એનપીસીઆઈ અથવા યુઆઈડીએઆઈ સાથેની સમસ્યા છે.",
          fact: "આ એક માન્યતા છે। એનપીસીઆઈ મેપરને અપડેટ કરવાની જવાબદારી સંપૂર્ણપણે બેંકોની છે. જો તમારી સીડિંગ નિષ્ફળ જાય, તો તમારે તમારી બેંક શાખાનો સંપર્ક કરવો આવશ્યક છે."
        },
        {
          myth: "મારી બેંક એપ બતાવે છે કે મારું આધાર 'સક્રિય' છે, તેથી હું ડીબીટી માટે તૈયાર છું.",
          fact: "આ એક માન્યતા છે। બેંકની આંતરિક સિસ્ટમ (CBS) માં 'સક્રિય' બતાવવું એ ખાતરી આપતું નથી કે તમારું ખાતું એનપીસીઆઈ મેપર પર છે. ખાતરી કરવાનો એકમાત્ર રસ્તો UIDAI અથવા NPCI વેબસાઇટ્સ પર તપાસ કરવાનો છે."
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
          fact: "પ્રમાણીકરણ નિષ્ફળતાઓ (જેમ કે ફિંગરપ્રિન્ટ સમસ્યાઓ) ને સંભાળવાની જવાબદારી અમલીકરણ એજન્સીઓની છે.",
          explanation: "આ એક હકીકત છે. સરકારી સૂચનાઓમાં 'અપવાદ સંભાળવાની પદ્ધતિ' શામેલ છે જેથી જો બાયોમેટ્રિક પ્રમાણીકરણ નિષ્ફળ જાય તો પણ તમને લાભ મળે તેની ખાતરી કરી શકાય."
        },
        {
          fact: "તમે બેંક મિત્ર/સંવાદદાતા દ્વારા તમારા ઘરઆંગણે ડીબીટી ભંડોળ મેળવી શકો છો.",
          explanation: "આ એક હકીકત છે. ઘણા વિસ્તારોમાં માઇક્રો-એટીએમ દ્વારા રોકડ ઉપાડ અને બેલેન્સ પૂછપરછ જેવી સેવાઓ ઉપલબ્ધ છે."
        },
        {
          fact: "જો આધાર અને બેંક ખાતા પર તમારું નામ મેળ ખાતું નથી, તો સીડિંગ નિષ્ફળ જશે.",
          explanation: "આ એક હકીકત છે. સીડિંગ પ્રક્રિયા સફળ થવા માટે તમારું નામ બંને રેકોર્ડમાં સરખું હોવું આવશ્યક છે. તમારે તેને દસ્તાવેજોમાંથી એકમાં સુધારવું પડશે."
        },
        {
          fact: "તમે યુઆઈડીએઆઈ અને એનપીસીઆઈ બંને વેબસાઇટ્સ પર તમારી આધાર સીડિંગની સ્થિતિ ચકાસી શકો છો.",
          explanation: "આ એક હકીકત છે. બંને અધિકૃત પોર્ટલ હાલમાં કયું બેંક ખાતું ડીબીટી માટે સીડ થયેલ છે તે તપાસવાની સુવિધા પૂરી પાડે છે."
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
          answer: "આધાર લિંકિંગ એ ફક્ત કેવાયસી માટે તમારા આધારને બેંક ખાતા સાથે જોડવું છે. આધાર સીડિંગ એ ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) મેળવવા માટે એનપીસીઆઈ મેપર સાથે તમારા આધારને તમારા બેંક ખાતા સાથે લિંક કરવાની એક વિશિષ્ટ પ્રક્રિયા છે. શિષ્યવૃત્તિ માટે સીડિંગ જરૂરી છે.",
        },
        {
          question: "શું મારી પાસે બહુવિધ આધાર-સીડેડ ખાતા હોઈ શકે છે?",
          answer: "ના, ડીબીટી મેળવવા માટે તમારી પાસે ફક્ત એક જ આધાર-સીડેડ ખાતું હોઈ શકે છે. જો તમે નવું ખાતું સીડ કરો છો, તો પાછલું ખાતું આપમેળે ડી-લિંક થઈ જાય છે. સબસિડી છેલ્લા સફળતાપૂર્વક સીડ થયેલા બેંક ખાતામાં જમા કરવામાં આવશે.",
        },
        {
          question: "મને કેવી રીતે ખબર પડે કે મારા ખાતામાં ડીબીટી ફંડ આવ્યું છે?",
          answer: "જો તમે તમારી બેંકમાંથી એસએમએસ એલર્ટ સક્ષમ કર્યું હોય, તો તમને એક સૂચના પ્રાપ્ત થશે. તમે એટીએમ, તમારી બેંકની મોબાઇલ એપ્લિકેશન, ઇન્ટરનેટ બેંકિંગ દ્વારા અથવા બેંક મિત્ર/સંવાદદાતાની મુલાકાત લઈને પણ તમારા ખાતાની બેલેન્સ ચકાસી શકો છો.",
        },
        {
          question: "ડીબીટી ફંડ મેળવવા માટે હું મારું બેંક ખાતું કેવી રીતે બદલી શકું?",
          answer: "તમારું ડીબીટી-સક્ષમ ખાતું બદલવા માટે, તમારે તે *નવી* બેંકની શાખાની મુલાકાત લેવી આવશ્યક છે જ્યાં તમે ફંડ મેળવવા માંગો છો. ત્યાં આધાર સીડિંગ સંમતિ ફોર્મ સબમિટ કરો, અને તેઓ એનપીસીઆઈ મેપરને અપડેટ કરશે, જે જૂના ખાતાને આપમેળે ઓવરરાઇડ કરશે.",
        },
        {
            question: "જો મારી આધાર સીડિંગ વિનંતી નિષ્ફળ જાય અથવા બાકી રહે તો મારે શું કરવું જોઈએ?",
            answer: "તમારી બેંક શાખાની ફરી મુલાકાત લો. નિષ્ફળતાના સામાન્ય કારણોમાં તમારા આધાર અને બેંક રેકોર્ડ વચ્ચે નામનો મેળ ન ખાવો, અથવા ફોર્મ પર ખોટો ખાતા નંબર શામેલ છે. અપડેટ કરવાની જવાબદારી બેંકની છે, તેથી તમારે તેમની સાથે ફોલો-અપ કરવું પડશે.",
        },
        {
            question: "મારું નામ મારા આધાર કાર્ડ વિરુદ્ધ મારા બેંક ખાતામાં અલગ છે. મારે શું કરવું જોઈએ?",
            answer: "તમારે તમારા નામને દસ્તાવેજોમાંથી એકમાં સુધારવું પડશે જેથી તે બરાબર મેળ ખાય. તમે તમારા આધારની વિગતો અપડેટ કરવા માટે આધાર નોંધણી કેન્દ્રની મુલાકાત લઈ શકો છો, અથવા તમારા બેંક રેકોર્ડને અપડેટ કરવા માટે તમારી બેંક શાખાની મુલાકાત લઈ શકો છો.",
        },
        {
            question: "જો મારું બાયોમેટ્રિક (ફિંગરપ્રિન્ટ) પ્રમાણીકરણ નિષ્ફળ જાય તો શું થશે?",
            answer: "ચિંતા કરશો નહીં. સરકારી માર્ગદર્શિકાઓમાં એક અપવાદ સંભાળવાની પ્રક્રિયા છે. એજન્સીઓને તમને તમારી ઓળખ સાબિત કરવાના વૈકલ્પિક માર્ગો પ્રદાન કરવાની જરૂર છે, જેમ કે તમારા નોંધાયેલા મોબાઇલ નંબર પર OTP દ્વારા અથવા અન્ય ભૌતિક ચકાસણી."
        },
        {
            question: "મારી પાસે આધાર કાર્ડ નથી. શું હું હજી પણ યોજનાનો લાભ મેળવી શકું?",
            answer: "જો તમે હજી નોંધાયેલ નથી, તો તમારે આધાર નોંધણી કેન્દ્રની મુલાકાત લેવી આવશ્યક છે. જ્યાં સુધી તમારો આધાર ફાળવવામાં ન આવે ત્યાં સુધી, તમે સામાન્ય રીતે તમારી આધાર નોંધણી ID (EID) સ્લિપનો ઉપયોગ અન્ય વૈકલ્પિક ID (જેમ કે બેંક પાસબુક) સાથે કરી શકો છો, જે શિષ્યવૃત્તિ યોજના દ્વારા નિર્દિષ્ટ કરેલ છે.",
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
      title: "અમારા વિશે",
      mandate: {
        title: "ડીબીટી મિશનનો આદેશ",
        subtitle: "ભારતમાં ડાયરેક્ટ બેનિફિટ ટ્રાન્સફરનો સત્તાવાર આદેશ અને ઇતિહાસ.",
        aboutText: [
            "સરકારી વિતરણ પ્રણાલીમાં સુધારો કરવાના ઉદ્દેશ્ય સાથે, કલ્યાણકારી યોજનાઓમાં હાલની પ્રક્રિયાને સરળ અને ઝડપી માહિતી/ભંડોળના પ્રવાહ માટે પુનઃ-રચના કરીને અને લાભાર્થીઓના સચોટ લક્ષ્યીકરણ, ડુપ્લિકેશનની નાબૂદી અને છેતરપિંડીમાં ઘટાડો સુનિશ્ચિત કરવા માટે ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) 1 જાન્યુઆરી, 2013 ના રોજ શરૂ કરવામાં આવી હતી.",
            "ડીબીટી કાર્યક્રમોના અમલીકરણ માટે નોડલ પોઈન્ટ તરીકે કાર્ય કરવા માટે આયોજન પંચમાં ડીબીટી મિશનની રચના કરવામાં આવી હતી. આ મિશનને જુલાઈ, 2013 માં ખર્ચ વિભાગમાં સ્થાનાંતરિત કરવામાં આવ્યું હતું. વધુ ગતિ આપવા માટે, ડીબીટી મિશનને 14.9.2015 થી કેબિનેટ સચિવાલયમાં મૂકવામાં આવ્યું છે.",
            "જેએએમ ટ્રિનિટી (જન ધન, આધાર અને મોબાઇલ) ડીબીટી સક્ષમકર્તાઓ છે જે દેશભરમાં તમામ કલ્યાણકારી યોજનાઓમાં ડીબીટી અમલમાં મૂકવાની, કાર્યક્ષમતા, પારદર્શિતા અને જવાબદારી લાવવાની અનન્ય તક પૂરી પાડે છે.",
            "ડીબીટી યોજનાઓમાં આધાર ફરજિયાત નથી. જો કે, આધાર અનન્ય ઓળખ પૂરી પાડે છે અને ઉદ્દેશિત લાભાર્થીઓને લક્ષ્ય બનાવવામાં ઉપયોગી છે, તેથી લાભાર્થીઓને લાભો મેળવવા માટે આધાર રાખવા પ્રોત્સાહિત કરવામાં આવે છે."
        ],
        orgChartTitle: "ડીબીટી મિશન સંસ્થાકીય માળખું"
      },
      ourTeam: {
          title: "અમારી ટીમ",
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
      tagline: "સ્માર્ટ ઇન્ડિયા હેકાથોન 2025 માટે ટીમ કોડ ટેકનિશિયન દ્વારા એક પહેલ.",
      credits: "સામાજિક ન્યાય અને સશક્તિકરણ મંત્રાલયના માર્ગદર્શન હેઠળ.",
    },
    languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી"
    }
  },
};
