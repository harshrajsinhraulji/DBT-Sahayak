import type { Language, LanguageContent, Myth } from './types';

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
        grievance: "Grievance",
        contact: "Contact",
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
        "Visit the official UIDAI website.",
        "Go to 'My Aadhaar' > 'Aadhaar Services'.",
        "Click on 'Check Aadhaar/Bank Linking Status'.",
        "Enter your Aadhaar number and security code.",
        "An OTP will be sent to your registered mobile. Enter it to see your status.",
      ],
      cta: "Check Status on UIDAI Portal",
    },
    scholarships: {
      title: "Available Scholarships",
      subtitle: "Explore scholarship opportunities for which a DBT-enabled account is essential.",
      scholarships: [
        {
          title: "Pre-Matric Scholarship for SC Students",
          description: "For SC students studying in classes 9th and 10th.",
          eligibility: "Parental income should not exceed Rs. 2.5 lakh per annum.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "Post-Matric Scholarship for SC Students",
          description: "For SC students studying in post-matriculation or post-secondary stage.",
          eligibility: "Parental income should not exceed Rs. 2.5 lakh per annum.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "National Means-cum-Merit Scholarship",
          description: "For meritorious students of economically weaker sections.",
          eligibility: "Class 8th students with parental income up to Rs. 3.5 lakh.",
          link: "https://scholarships.gov.in/",
        },
      ],
    },
    mythBusters: {
      title: "Myth Busters",
      subtitle: "Don't let misinformation stop you from getting your scholarship. Let's bust some common myths!",
      myths: [
        {
          myth: "If my bank account is linked to Aadhaar, I will automatically get my scholarship.",
          fact: "Fact: Not true! Your account must be specifically 'seeded' with Aadhaar for DBT on the NPCI mapper, not just linked. This is a separate process."
        },
        {
          myth: "I can receive my scholarship in any of my Aadhaar-linked bank accounts.",
          fact: "Fact: You can only receive DBT payments in the one bank account that is currently seeded with your Aadhaar. This is your designated DBT-enabled account."
        },
        {
          myth: "Aadhaar seeding is a one-time process and never needs to be checked.",
          fact: "Fact: It's a good practice to periodically check your Aadhaar seeding status on the UIDAI portal, especially before the scholarship season, to ensure it's active."
        },
        {
          myth: "My scholarship was rejected because of my grades, not my bank account.",
          fact: "Fact: While grades are important, a very common reason for fund disbursement failure is an inactive or incorrectly seeded bank account. Always verify your account status first!"
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
          answer: "No, you can only have one Aadhaar-seeded account for receiving DBT. If you seed a new account, the previous one gets de-linked automatically.",
        },
        {
          question: "How long does it take for Aadhaar seeding to be completed?",
          answer: "The process usually takes 3-5 business days after you submit the form at your bank branch. However, it's a good idea to check your status on the UIDAI portal after about a week.",
        },
        {
          question: "What should I do if my Aadhaar seeding request fails?",
          answer: "If your request fails, revisit your bank branch. Common reasons for failure include a name mismatch between your Aadhaar card and bank records, or an incorrect account number on the form. The bank official can tell you the exact reason.",
        },
        {
          question: "Do I need to have a minimum balance for a DBT-enabled account?",
          answer: "Many scholarship-related accounts are opened under schemes like the Pradhan Mantri Jan Dhan Yojana (PMJDY), which are often zero-balance accounts. However, you should confirm this with your specific bank.",
        },
        {
          question: "What if my scholarship is delayed?",
          answer: "The most common reason for delay is the bank account not being Aadhaar-seeded for DBT. First, check your status on the UIDAI portal. If it's active, contact your school/college or the scholarship provider.",
        },
      ],
    },
    grievance: {
      title: "AI-Powered Grievance Helper",
      subtitle: "Facing an issue? Describe your problem, and our AI will help you draft a formal grievance letter.",
      form: {
        name: "Your Full Name",
        namePlaceholder: "e.g., Priya S.",
        problem: "Describe your problem in simple words",
        problemPlaceholder: "e.g., My scholarship money has been delayed for 3 months...",
        generate: "Generate Grievance Letter",
        resultTitle: "Your Generated Grievance Letter",
        copy: "Copy Text",
        copied: "Copied!",
      }
    },
    formChecker: {
        subtitle: "Filled out your Aadhaar seeding form? Upload a photo, and our AI will double-check it for common mistakes before you visit the bank!",
        cardTitle: "Check Your Form",
        cardDescription: "Upload a clear photo of your completed Aadhaar Seeding / NPCI Mapping form.",
        uploadPrompt: "Click button to upload a photo",
        uploadHint: "PNG, JPG, or WEBP up to 5MB",
        uploadButton: "Upload Photo",
        changeButton: "Change Photo",
        checkButton: "Check for Errors",
        analyzingButton: "Analyzing...",
        analyzingText: "Our AI is analyzing your form. This may take a moment...",
        resultTitle: "AI Analysis Complete",
        error: {
            title: "Analysis Failed",
            suggestion: "Please review these points on your form before submitting it to the bank."
        },
        success: {
            title: "Looking Good!",
            subtitle: "Our AI analysis did not find any common errors. You look ready to visit the bank!"
        }
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
    chatbot: {
      title: "Aadhaar Dost",
      placeholder: "Ask about DBT, Aadhaar, scholarships...",
      initialMessage: "Hello! I am Aadhaar Dost. How can I help you today with your questions about DBT, Aadhaar seeding, or scholarships?",
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
        printButton: "Print Kit",
        visitWebsite: "For more tools and information, visit:",
        mythLabel: "Myth:",
        footer: "This kit is for educational and awareness purposes only. Produced by DBT Sahayak.",
      },
    },
    footer: {
      tagline: "An initiative by Team Code Technicians for Smart India Hackathon 2023.",
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
        grievance: "शिकायत",
        contact: "संपर्क",
      },
      login: "लॉगिन/रजिस्टर करें"
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
        "आधिकारिक यूआईडीएआई वेबसाइट पर जाएं।",
        "'माई आधार' > 'आधार सेवाएं' पर जाएं।",
        "'आधार/बैंक लिंकिंग स्थिति जांचें' पर क्लिक करें।",
        "अपना आधार नंबर और सुरक्षा कोड दर्ज करें।",
        "आपके पंजीकृत मोबाइल पर एक ओटीपी भेजा जाएगा। अपनी स्थिति देखने के लिए इसे दर्ज करें।",
      ],
      cta: "यूआईडीएआई पोर्टल पर स्थिति जांचें",
    },
    scholarships: {
      title: "उपलब्ध छात्रवृत्तियाँ",
      subtitle: "उन छात्रवृत्ति अवसरों का अन्वेષણ करें जिनके लिए डीबीटी-सक्षम खाता आवश्यक है।",
      scholarships: [
        {
          title: "अनुसूचित जाति के छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति",
          description: "कक्षा 9वीं और 10वीं में पढ़ने वाले अनुसूचित जाति के छात्रों के लिए।",
          eligibility: "माता-पिता की आय 2.5 लाख रुपये प्रति वर्ष से अधिक नहीं होनी चाहिए।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट્રિક छात्रवृत्ति",
          description: "मैट्रिकोत्तर या माध्यमिकोत्तर चरण में पढ़ने वाले अनुसूचित जाति के छात्रों के लिए।",
          eligibility: "माता-पिता की आय 2.5 लाख रुपये प्रति वर्ष से अधिक नहीं होनी चाहिए।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति",
          description: "आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों के लिए।",
          eligibility: "कक्षा 8वीं के छात्र जिनकी माता-पिता की आय 3.5 लाख रुपये तक है।",
          link: "https://scholarships.gov.in/",
        },
      ],
    },
    mythBusters: {
      title: "मिथक तोड़ें",
      subtitle: "गलत सूचना को आपको अपनी छात्रवृत्ति प्राप्त करने से रोकने न दें। आइए कुछ आम मिथकों को तोड़ें!",
      myths: [
        {
          myth: "यदि मेरा बैंक खाता आधार से जुड़ा हुआ है, तो मुझे स्वतः ही मेरी छात्रवृत्ति मिल जाएगी।",
          fact: "तथ्य: यह सच नहीं है! आपके खाते को केवल लिंक ही नहीं, बल्कि एनपीसीआई मैपर पर डीबीटी के लिए आधार के साथ विशेष रूप से 'सीड' किया जाना चाहिए। यह एक अलग प्रक्रिया है।"
        },
        {
          myth: "मैं अपने किसी भी आधार-लिंक्ड बैंक खाते में अपनी छात्रवृत्ति प्राप्त कर सकता हूँ।",
          fact: "तथ्य: आप केवल उसी एक बैंक खाते में डीबीटी भुगतान प्राप्त कर सकते हैं जो वर्तमान में आपके आधार के साथ सीड किया गया है। यह आपका निर्दिष्ट डीबीटी-सक्षम खाता है।"
        },
        {
          myth: "आधार सीडिंग एक बार की प्रक्रिया है और इसे कभी जांचने की आवश्यकता नहीं है।",
          fact: "तथ्य: यह सुनिश्चित करने के लिए कि यह सक्रिय है, समय-समय पर यूआईडीएआई पोर्टल पर अपनी आधार सीडिंग स्थिति की जांच करना एक अच्छा अभ्यास है, खासकर छात्रवृत्ति के मौसम से पहले।"
        },
        {
          myth: "मेरी छात्रवृत्ति मेरे ग्रेड के कारण खारिज कर दी गई थी, मेरे बैंक खाते के कारण नहीं।",
          fact: "तथ्य: जबकि ग्रेड महत्वपूर्ण हैं, फंड वितरण विफलता का एक बहुत ही सामान्य कारण एक निष्क्रिय या गलत तरीके से सीड किया गया बैंक खाता है। हमेशा पहले अपने खाते की स्थिति सत्यापित करें!"
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
          answer: "आधार लिंकिंग केवल केवाईसी के लिए आपके आधार को बैंक खाते से जोड़ना है। आधार सीडिंग आपके आधार को प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए एनपीसीआई मैपर के साथ आपके बैंक खाते से जोड़ने की एक विशिष्ट प्रक्रिया है। छात्रवृत्ति के लिए सीडिंग आवश्यक है।",
        },
        {
          question: "क्या मेरे पास कई आधार-सीडेड खाते हो सकते हैं?",
          answer: "नहीं, डीबीटी प्राप्त करने के लिए आपके पास केवल एक आधार-सीडेड खाता हो सकता है। यदि आप कोई नया खाता सीड करते हैं, तो पिछला खाता स्वतः डी-लिंक हो जाता है।",
        },
        {
            question: "आधार सीडिंग को पूरा होने में कितना समय लगता है?",
            answer: "जब आप अपनी बैंक शाखा में फॉर्म जमा करते हैं तो इस प्रक्रिया में आमतौर पर 3-5 कार्यदिवस लगते हैं। हालांकि, लगभग एक सप्ताह के बाद यूआईडीएआई पोर्टल पर अपनी स्थिति की जांच करना एक अच्छा विचार है।"
        },
        {
            question: "यदि मेरा आधार सीडिंग अनुरोध विफल हो जाए तो मुझे क्या करना चाहिए?",
            answer: "यदि आपका अनुरोध विफल हो जाता है, तो अपनी बैंक शाखा में फिर से जाएँ। विफलता के सामान्य कारणों में आपके आधार कार्ड और बैंक रिकॉर्ड के बीच नाम का मेल न होना, या फॉर्म पर गलत खाता संख्या शामिल है। बैंक अधिकारी आपको इसका सटीक कारण बता सकते हैं।"
        },
        {
            question: "क्या मुझे डीबीटी-सक्षम खाते के लिए न्यूनतम शेष राशि रखने की आवश्यकता है?",
            answer: "कई छात्रवृत्ति-संबंधी खाते प्रधानमंत्री जन धन योजना (पीएमजेडीवाई) जैसी योजनाओं के तहत खोले जाते हैं, जो अक्सर शून्य-शेष खाते होते हैं। हालांकि, आपको अपने विशिष्ट बैंक से इसकी पुष्टि करनी चाहिए।"
        },
        {
          question: "यदि मेरी छात्रवृत्ति में देरी हो तो क्या होगा?",
          answer: "देरी का सबसे आम कारण बैंक खाते का डीबीटी के लिए आधार-सीड न होना है। सबसे पहले, यूआईडीएआई पोर्टल पर अपनी स्थिति जांचें। यदि यह सक्रिय है, तो अपने स्कूल/कॉलेज या छात्रवृत्ति प्रदाता से संपर्क करें।",
        },
      ],
    },
    grievance: {
      title: "एआई-संचालित शिकायत सहायक",
      subtitle: "कोई समस्या आ रही है? अपनी समस्या का वर्णन करें, और हमारा एआई आपको एक औपचारिक शिकायत पत्र का मसौदा तैयार करने में मदद करेगा।",
      form: {
        name: "आपका पूरा नाम",
        namePlaceholder: "उदा., प्रिया एस.",
        problem: "अपनी समस्या का सरल शब्दों में वर्णन करें",
        problemPlaceholder: "उदा., मेरी छात्रवृत्ति का पैसा 3 महीने से रुका हुआ है...",
        generate: "शिकायत पत्र उत्पन्न करें",
        resultTitle: "आपका उत्पन्न शिकायत पत्र",
        copy: "टेक्स्ट कॉपी करें",
        copied: "कॉपी किया गया!",
      }
    },
    formChecker: {
        subtitle: "क्या आपने अपना आधार सीडिंग फॉर्म भर दिया है? एक फोटो अपलोड करें, और हमारा एआई बैंक जाने से पहले सामान्य गलतियों के लिए इसकी दोबारा जांच करेगा!",
        cardTitle: "अपना फॉर्म जांचें",
        cardDescription: "अपने पूरे किए गए आधार सीडिंग / एनपीसीआई मैपिंग फॉर्म का एक स्पष्ट फोटो अपलोड करें।",
        uploadPrompt: "फोटो अपलोड करने के لیے बटन पर क्लिक करें",
        uploadHint: "5MB तक पीएनजी, जेपीजी, या वेबपी",
        uploadButton: "फोटो अपलोड करें",
        changeButton: "फोटो बदलें",
        checkButton: "त्रुटियों के लिए जांचें",
        analyzingButton: "विश्लेषण हो रहा है...",
        analyzingText: "हमारा एआई आपके फॉर्म का विश्लेषण कर रहा है। इसमें कुछ समय लग सकता है...",
        resultTitle: "एआई विश्लेषण पूर्ण",
        error: {
            title: "विश्लेषण विफल",
            suggestion: "कृपया बैंक में जमा करने से पहले अपने फॉर्म पर इन बिंदुओं की समीक्षा करें।"
        },
        success: {
            title: "बहुत बढ़िया!",
            subtitle: "हमारे एआई विश्लेषण में कोई सामान्य त्रुटि नहीं मिली। आप बैंक जाने के लिए तैयार दिखते हैं!"
        }
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
    chatbot: {
      title: "आधार दोस्त",
      placeholder: "डीबीटी, आधार, छात्रवृत्ति के बारे में पूछें...",
      initialMessage: "नमस्ते! मैं आधार दोस्त हूँ। मैं आज डीबीटी, आधार सीडिंग, या छात्रवृत्ति के बारे में आपके सवालों में कैसे मदद कर सकता हूँ?",
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
        printButton: "किट प्रिंट करें",
        visitWebsite: "अधिक उपकरणों और जानकारी के लिए, यहां जाएं:",
        mythLabel: "मिथक:",
        footer: "यह किट केवल शैक्षिक और जागरूकता उद्देश्यों के لیے है। डीबीटी सहायक द्वारा निर्मित।",
      },
    },
    footer: {
      tagline: "स्मार्ट इंडिया हैकथॉन 2023 के लिए टीम कोड टेक्नीशियन की एक पहल।",
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
        grievance: "ફરિયાદ",
        contact: "સંપર્ક",
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
        "અધિકૃત યુઆઈડીએઆઈ વેબસાઇટની મુલાકાત લો.",
        "'માય આધાર' > 'આધાર સેવાઓ' પર જાઓ.",
        "'આધાર/બેંક લિંકિંગ સ્થિતિ તપાસો' પર ક્લિક કરો.",
        "તમારો આધાર નંબર અને સુરક્ષા કોડ દાખલ કરો.",
        "તમારા નોંધાયેલા મોબાઇલ પર એક ઓટીપી મોકલવામાં આવશે. તમારી સ્થિતિ જોવા માટે તેને દાખલ કરો.",
      ],
      cta: "યુઆઈડીએઆઈ પોર્ટલ પર સ્થિતિ તપાસો",
    },
    scholarships: {
      title: "ઉપલબ્ધ શિષ્યવૃત્તિઓ",
      subtitle: "શિષ્યવૃત્તિની તકોનું અન્વેષણ કરો જેના માટે ડીબીટી-સક્ષમ ખાતું જરૂરી છે.",
      scholarships: [
        {
          title: "એસસી વિદ્યાર્થીઓ માટે પ્રી-મેટ્રિક શિષ્યવૃત્તિ",
          description: "ધોરણ 9 અને 10 માં અભ્યાસ કરતા એસસી વિદ્યાર્થીઓ માટે.",
          eligibility: "વાલીની આવક વાર્ષિક રૂ. 2.5 લાખથી વધુ ન હોવી જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "એસસી વિદ્યાર્થીઓ માટે પોસ્ટ-મેટ્રિક શિષ્યવૃત્તિ",
          description: "પોસ્ટ-મેટ્રિક્યુલેશન અથવા પોસ્ટ-સેકન્ડરી તબક્કામાં અભ્યાસ કરતા એસસી વિદ્યાર્થીઓ માટે.",
          eligibility: "વાલીની આવક વાર્ષિક રૂ. 2.5 લાખથી વધુ ન હોવી જોઈએ.",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "રાષ્ટ્રીય મીન્સ-કમ-મેરિટ શિષ્યવૃત્તિ",
          description: "આર્થિક રીતે નબળા વર્ગના હોશિયાર વિદ્યાર્થીઓ માટે.",
          eligibility: "ધોરણ 8 ના વિદ્યાર્થીઓ જેમના વાલીની આવક રૂ. 3.5 લાખ સુધી હોય.",
          link: "https://scholarships.gov.in/",
        },
      ],
    },
    mythBusters: {
      title: "માન્યતા તોડો",
      subtitle: "ખોટી માહિતીને તમને તમારી શિષ્યવૃત્તિ મેળવવાથી રોકવા ન દો. ચાલો કેટલીક સામાન્ય માન્યતાઓને તોડીએ!",
      myths: [
        {
          myth: "જો મારું બેંક ખાતું આધાર સાથે જોડાયેલું હોય, તો મને આપમેળે મારી શિષ્યવૃત્તિ મળી જશે.",
          fact: "હકીકત: સાચું નથી! તમારું ખાતું ફક્ત લિંક જ નહીં, પણ એનપીસીઆઈ મેપર પર ડીબીટી માટે આધાર સાથે ખાસ 'સીડ' થયેલું હોવું જોઈએ. આ એક અલગ પ્રક્રિયા છે."
        },
        {
          myth: "હું મારા કોઈપણ આધાર-લિંક્ડ બેંક ખાતામાં મારી શિષ્યવૃત્તિ મેળવી શકું છું.",
          fact: "હકીકત: તમે ફક્ત તે જ એક બેંક ખાતામાં ડીબીટી ચુકવણીઓ મેળવી શકો છો જે હાલમાં તમારા આધાર સાથે સીડ થયેલ છે. આ તમારું નિયુક્ત ડીબીટી-સક્ષમ ખાતું છે."
        },
        {
          myth: "આધાર સીડિંગ એક-વખતની પ્રક્રિયા છે અને તેને ક્યારેય તપાસવાની જરૂર નથી.",
          fact: "હકીકત: તે સક્રિય છે તેની ખાતરી કરવા માટે, સમયાંતરે યુઆઈડીએઆઈ પોર્ટલ પર તમારી આધાર સીડિંગની સ્થિતિ તપાસવી એ એક સારી પ્રથા છે, ખાસ કરીને શિષ્યવૃત્તિની મોસમ પહેલાં."
        },
        {
          myth: "મારી શિષ્યવૃત્તિ મારા ગ્રેડને કારણે નકારી કાઢવામાં આવી હતી, મારા બેંક ખાતાને કારણે નહીં.",
          fact: "હકીકત: જ્યારે ગ્રેડ મહત્વપૂર્ણ છે, ભંડોળ વિતરણ નિષ્ફળતાનું એક ખૂબ જ સામાન્ય કારણ નિષ્ક્રિય અથવા ખોટી રીતે સીડ થયેલું બેંક ખાતું છે. હંમેશા પહેલા તમારા ખાતાની સ્થિતિ ચકાસો!"
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
          answer: "ના, ડીબીટી મેળવવા માટે તમારી પાસે ફક્ત એક જ આધાર-સીડેડ ખાતું હોઈ શકે છે. જો તમે નવું ખાતું સીડ કરો છો, તો પાછલું ખાતું આપમેળે ડી-લિંક થઈ જાય છે.",
        },
        {
          question: "આધાર સીડિંગ પૂર્ણ થવામાં કેટલો સમય લાગે છે?",
          answer: "તમે તમારી બેંક શાખામાં ફોર્મ જમા કરાવ્યા પછી આ પ્રક્રિયામાં સામાન્ય રીતે 3-5 કામકાજી દિવસ લાગે છે. જોકે, લગભગ એક અઠવાડિયા પછી યુઆઈડીએઆઈ પોર્ટલ પર તમારી સ્થિતિ તપાસવી એ સારો વિચાર છે.",
        },
        {
          question: "જો મારી આધાર સીડિંગ વિનંતી નિષ્ફળ જાય તો મારે શું કરવું જોઈએ?",
          answer: "જો તમારી વિનંતી નિષ્ફળ જાય, તો તમારી બેંક શાખાની ફરી મુલાકાત લો. નિષ્ફળતાના સામાન્ય કારણોમાં તમારા આધાર કાર્ડ અને બેંક રેકોર્ડ વચ્ચે નામનો મેળ ન ખાવો, અથવા ફોર્મ પર ખોટો ખાતા નંબર શામેલ છે. બેંક અધિકારી તમને ચોક્કસ કારણ જણાવી શકે છે.",
        },
        {
          question: "શું મારે ડીબીટી-સક્ષમ ખાતા માટે ન્યૂનતમ બેલેન્સ રાખવાની જરૂર છે?",
          answer: "ઘણા શિષ્યવૃત્તિ-સંબંધિત ખાતા પ્રધાનમંત્રી જન ધન યોજના (પીએમજેડીવાય) જેવી યોજનાઓ હેઠળ ખોલવામાં આવે છે, જે ઘણીવાર શૂન્ય-બેલેન્સ ખાતા હોય છે. જોકે, તમારે તમારી ચોક્કસ બેંક સાથે આની પુષ્ટિ કરવી જોઈએ.",
        },
        {
          question: "જો મારી શિષ્યવૃત્તિમાં વિલંબ થાય તો શું?",
          answer: "વિલંબનું સૌથી સામાન્ય કારણ બેંક ખાતું ડીબીટી માટે આધાર-સીડ ન હોવું છે. પ્રથમ, યુઆઈડીએઆઈ પોર્ટલ પર તમારી સ્થિતિ તપાસો. જો તે સક્રિય હોય, તો તમારી શાળા/કોલેજ અથવા શિષ્યવૃત્તિ પ્રદાતાનો સંપર્ક કરો.",
        },
      ],
    },
    grievance: {
      title: "AI-સંચાલિત ફરિયાદ સહાયક",
      subtitle: "કોઈ સમસ્યાનો સામનો કરી રહ્યા છો? તમારી સમસ્યાનું વર્ણન કરો, અને અમારું AI તમને ઔપચારિક ફરિયાદ પત્રનો મુસદ્દો તૈયાર કરવામાં મદદ કરશે.",
      form: {
        name: "તમારું પૂરું નામ",
        namePlaceholder: "દા.ત., પ્રિયા એસ.",
        problem: "તમારી સમસ્યાનું સરળ શબ્દોમાં વર્ણન કરો",
        problemPlaceholder: "દા.ત., મારી શિષ્યવૃત્તિના પૈસા 3 મહિનાથી મોડા પડ્યા છે...",
        generate: "ફરિયાદ પત્ર જનરેટ કરો",
        resultTitle: "તમારો જનરેટ થયેલ ફરિયાદ પત્ર",
        copy: "ટેક્સ્ટ કૉપિ કરો",
        copied: "કૉપિ થઈ ગયું!",
      }
    },
    formChecker: {
        subtitle: "તમારું આધાર સીડિંગ ફોર્મ ભર્યું છે? ફોટો અપલોડ કરો, અને અમારું AI તમે બેંક પર જાઓ તે પહેલાં સામાન્ય ભૂલો માટે તેની બે વાર તપાસ કરશે!",
        cardTitle: "તમારું ફોર્મ તપાસો",
        cardDescription: "તમારા પૂર્ણ થયેલ આધાર સીડિંગ / NPCI મેપિંગ ફોર્મનો સ્પષ્ટ ફોટો અપલોડ કરો.",
        uploadPrompt: "ફોટો અપલોડ કરવા માટે બટન પર ક્લિક કરો",
        uploadHint: "5MB સુધી PNG, JPG, અથવા WEBP",
        uploadButton: "ફોટો અપલોડ કરો",
        changeButton: "ફોટો બદલો",
        checkButton: "ભૂલો માટે તપાસો",
        analyzingButton: "વિશ્લેષણ કરી રહ્યું છે...",
        analyzingText: "અમારું AI તમારા ફોર્મનું વિશ્લેષણ કરી રહ્યું છે. આમાં થોડો સમય લાગી શકે છે...",
        resultTitle: "AI વિશ્લેષણ પૂર્ણ",
        error: {
            title: "વિશ્લેષણ નિષ્ફળ",
            suggestion: "કૃપા કરીને બેંકમાં સબમિટ કરતા પહેલા તમારા ફોર્મ પર આ મુદ્દાઓની સમીક્ષા કરો."
        },
        success: {
            title: "ખૂબ સરસ!",
            subtitle: "અમારા AI વિશ્લેષણમાં કોઈ સામાન્ય ભૂલો મળી નથી. તમે બેંકની મુલાકાત લેવા માટે તૈયાર લાગો છો!"
        }
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
    chatbot: {
      title: "આધાર દોસ્ત",
      placeholder: "ડીબીટી, આધાર, શિષ્યવૃત્તિ વિશે પૂછો...",
      initialMessage: "નમસ્તે! હું આધાર દોસ્ત છું. હું આજે ડીબીટી, આધાર સીડિંગ, અથવા શિષ્યવૃત્તિ વિશેના તમારા પ્રશ્નોમાં કેવી રીતે મદદ કરી શકું?",
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
        printButton: "કિટ છાપો",
        visitWebsite: "વધુ સાધનો અને માહિતી માટે, મુલાકાત લો:",
        mythLabel: "માન્યતા:",
        footer: "આ કિટ ફક્ત શૈક્ષણિક અને જાગૃતિના હેતુઓ માટે છે. ડીબીટી સહાયક દ્વારા ઉત્પાદિત.",
      },
    },
    footer: {
      tagline: "સ્માર્ટ ઇન્ડિયા હેકાથોન 2023 માટે ટીમ કોડ ટેકનિશિયન દ્વારા એક પહેલ.",
      credits: "સામાજિક ન્યાય અને સશક્તિકરણ મંત્રાલયના માર્ગદર્શન હેઠળ.",
    },
    languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી"
    }
  },
};
