import type { Language, LanguageContent } from './types';

export const pageContent: Record<Language, LanguageContent> = {
  en: {
    header: {
      title: "DBT Sahayak",
      nav: {
        education: "Learn",
        status: "Check Status",
        scholarships: "Scholarships",
        faq: "FAQ",
      },
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
      videoTitle: "Visual Guide: Linking vs. Seeding",
      videoDescription: "Watch this short video to clearly understand the process and importance of Aadhaar seeding for DBT.",
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
          question: "How do I seed my bank account with Aadhaar?",
          answer: "Visit your bank branch with a copy of your Aadhaar card and fill out the Aadhaar Seeding form. You can also do it through the bank's mobile app or internet banking if the option is available.",
        },
        {
          question: "What if my scholarship is delayed?",
          answer: "The most common reason for delay is the bank account not being Aadhaar-seeded for DBT. First, check your status on the UIDAI portal. If it's active, contact your school/college or the scholarship provider.",
        },
      ],
    },
    chatbot: {
      title: "Aadhaar Dost",
      placeholder: "Ask about DBT, Aadhaar, scholarships...",
      initialMessage: "Hello! I am Aadhaar Dost. How can I help you today with your questions about DBT, Aadhaar seeding, or scholarships?",
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
        status: "स्थिति जांचें",
        scholarships: "छात्रवृत्तियाँ",
        faq: "अक्सर पूछे जाने वाले प्रश्न",
      },
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
      videoTitle: "विज़ुअल गाइड: लिंकिंग बनाम सीडिंग",
      videoDescription: "डीबीटी के लिए आधार सीडिंग की प्रक्रिया और महत्व को स्पष्ट रूप से समझने के लिए यह छोटा वीडियो देखें।",
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
      subtitle: "उन छात्रवृत्ति अवसरों का अन्वेषण करें जिनके लिए डीबीटी-सक्षम खाता आवश्यक है।",
      scholarships: [
        {
          title: "अनुसूचित जाति के छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति",
          description: "कक्षा 9वीं और 10वीं में पढ़ने वाले अनुसूचित जाति के छात्रों के लिए।",
          eligibility: "माता-पिता की आय 2.5 लाख रुपये प्रति वर्ष से अधिक नहीं होनी चाहिए।",
          link: "https://scholarships.gov.in/",
        },
        {
          title: "अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
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
          question: "मैं अपना बैंक खाता आधार से कैसे सीड करूं?",
          answer: "अपने आधार कार्ड की एक प्रति के साथ अपनी बैंक शाखा में जाएं और आधार सीडिंग फॉर्म भरें। यदि विकल्प उपलब्ध है तो आप इसे बैंक के मोबाइल ऐप या इंटरनेट बैंकिंग के माध्यम से भी कर सकते हैं।",
        },
        {
          question: "यदि मेरी छात्रवृत्ति में देरी हो तो क्या होगा?",
          answer: "देरी का सबसे आम कारण बैंक खाते का डीबीटी के लिए आधार-सीड न होना है। सबसे पहले, यूआईडीएआई पोर्टल पर अपनी स्थिति जांचें। यदि यह सक्रिय है, तो अपने स्कूल/कॉलेज या छात्रवृत्ति प्रदाता से संपर्क करें।",
        },
      ],
    },
    chatbot: {
      title: "आधार दोस्त",
      placeholder: "डीबीटी, आधार, छात्रवृत्ति के बारे में पूछें...",
      initialMessage: "नमस्ते! मैं आधार दोस्त हूँ। मैं आज डीबीटी, आधार सीडिंग, या छात्रवृत्ति के बारे में आपके सवालों में कैसे मदद कर सकता हूँ?",
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
        status: "સ્થિતિ તપાસો",
        scholarships: "શિષ્યવૃત્તિ",
        faq: "વારંવાર પૂછાતા પ્રશ્નો",
      },
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
      videoTitle: "વિઝ્યુઅલ માર્ગદર્શિકા: લિંકિંગ વિરુદ્ધ સીડિંગ",
      videoDescription: "ડીબીટી માટે આધાર સીડિંગની પ્રક્રિયા અને મહત્વને સ્પષ્ટપણે સમજવા માટે આ ટૂંકી વિડિઓ જુઓ.",
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
          question: "હું મારું બેંક ખાતું આધાર સાથે કેવી રીતે સીડ કરું?",
          answer: "તમારા આધાર કાર્ડની નકલ સાથે તમારી બેંક શાખાની મુલાકાત લો અને આધાર સીડિંગ ફોર્મ ભરો. જો વિકલ્પ ઉપલબ્ધ હોય તો તમે બેંકની મોબાઇલ એપ્લિકેશન અથવા ઇન્ટરનેટ બેંકિંગ દ્વારા પણ તે કરી શકો છો.",
        },
        {
          question: "જો મારી શિષ્યવૃત્તિમાં વિલંબ થાય તો શું?",
          answer: "વિલંબનું સૌથી સામાન્ય કારણ બેંક ખાતું ડીબીટી માટે આધાર-સીડ ન હોવું છે. પ્રથમ, યુઆઈડીએઆઈ પોર્ટલ પર તમારી સ્થિતિ તપાસો. જો તે સક્રિય હોય, તો તમારી શાળા/કોલેજ અથવા શિષ્યવૃત્તિ પ્રદાતાનો સંપર્ક કરો.",
        },
      ],
    },
    chatbot: {
      title: "આધાર દોસ્ત",
      placeholder: "ડીબીટી, આધાર, શિષ્યવૃત્તિ વિશે પૂછો...",
      initialMessage: "નમસ્તે! હું આધાર દોસ્ત છું. હું આજે ડીબીટી, આધાર સીડિંગ, અથવા શિષ્યવૃત્તિ વિશેના તમારા પ્રશ્નોમાં કેવી રીતે મદદ કરી શકું?",
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
