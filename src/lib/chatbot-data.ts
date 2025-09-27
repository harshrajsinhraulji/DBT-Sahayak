
import type { Language } from './types';

export interface ChatNode {
  id: string;
  text: string;
  options?: { text: string; nextNodeId: string }[];
  isEnd?: boolean;
  isContact?: boolean;
}

type ChatTree = Record<string, ChatNode>;

type LocalizedChatData = Record<Language, ChatTree>;

export const chatbotData: LocalizedChatData = {
  en: {
    start: {
      id: 'start',
      text: "Hello! I am Aadhaar Dost, your assistant. How can I help you today?",
      options: [
        { text: "About DBT & Aadhaar Seeding", nextNodeId: 'about_dbt' },
        { text: "How to check my status?", nextNodeId: 'check_status' },
        { text: "Common problems", nextNodeId: 'common_problems' },
        { text: "About Scholarships", nextNodeId: 'scholarships' },
      ],
    },
    about_dbt: {
      id: 'about_dbt',
      text: "DBT means Direct Benefit Transfer. For scholarships, your bank account must be 'Aadhaar Seeded' to receive funds, which is different from just being 'Aadhaar Linked'.",
      options: [
        { text: "What's the difference?", nextNodeId: 'difference' },
        { text: "Go back", nextNodeId: 'start' },
      ],
    },
    difference: {
      id: 'difference',
      text: "Aadhaar 'Linking' is for ID verification. Aadhaar 'Seeding' connects your account to the NPCI database, making it DBT-enabled. This is mandatory for scholarships.",
      isEnd: true,
    },
    check_status: {
      id: 'check_status',
      text: "You can check your Aadhaar seeding status on the official UIDAI portal. Visit 'My Aadhaar' > 'Check Aadhaar/Bank Linking Status'.",
      isEnd: true,
    },
    common_problems: {
      id: 'common_problems',
      text: "What problem are you facing?",
      options: [
        { text: "My scholarship failed", nextNodeId: 'scholarship_failed' },
        { text: "My status is inactive", nextNodeId: 'status_inactive' },
        { text: "Go back", nextNodeId: 'start' },
      ],
    },
    scholarship_failed: {
      id: 'scholarship_failed',
      text: "The most common reason is that your account is not Aadhaar-seeded for DBT. Please check your status on the UIDAI portal first.",
      isEnd: true,
    },
    status_inactive: {
      id: 'status_inactive',
      text: "If your status is inactive, you must visit your bank branch. Download the 'Aadhaar Seeding Form' from our contact section, fill it, and submit it with a copy of your Aadhaar card.",
      isEnd: true,
    },
    scholarships: {
      id: 'scholarships',
      text: "You can find a list of available scholarships on the 'Scholarships' section of our website. A DBT-enabled account is required for all of them.",
      isEnd: true,
    },
    end_contact: {
      id: 'end_contact',
      text: "If your issue is not resolved, please use the resources in our 'Contact' section or reach out to the official helpline.",
      isContact: true,
    }
  },
  hi: {
    start: {
      id: 'start',
      text: "नमस्ते! मैं आधार दोस्त हूँ, आपका सहायक। मैं आज आपकी कैसे मदद कर सकता हूँ?",
      options: [
        { text: "डीबीटी और आधार सीडिंग के बारे में", nextNodeId: 'about_dbt' },
        { text: "मैं अपनी स्थिति कैसे जांचूं?", nextNodeId: 'check_status' },
        { text: "आम समस्याएं", nextNodeId: 'common_problems' },
        { text: "छात्रवृत्ति के बारे में", nextNodeId: 'scholarships' },
      ],
    },
    about_dbt: {
      id: 'about_dbt',
      text: "डीबीटी का मतलब है डायरेक्ट बेनिफिट ट्रांसफर। छात्रवृत्ति के लिए, धन प्राप्त करने के लिए आपका बैंक खाता 'आधार सीडेड' होना चाहिए, जो केवल 'आधार लिंक्ड' होने से अलग है।",
      options: [
        { text: "क्या अंतर है?", nextNodeId: 'difference' },
        { text: "वापस जाओ", nextNodeId: 'start' },
      ],
    },
    difference: {
      id: 'difference',
      text: "आधार 'लिंकिंग' आईडी सत्यापन के लिए है। आधार 'सीडिंग' आपके खाते को एनपीसीआई डेटाबेस से जोड़ता है, जिससे यह डीबीटी-सक्षम हो जाता है। छात्रवृत्ति के लिए यह अनिवार्य है।",
      isEnd: true,
    },
    check_status: {
      id: 'check_status',
      text: "आप अपनी आधार सीडिंग स्थिति आधिकारिक यूआईडीएआई पोर्टल पर देख सकते हैं। 'माई आधार' > 'आधार/बैंक लिंकिंग स्थिति जांचें' पर जाएं।",
      isEnd: true,
    },
    common_problems: {
      id: 'common_problems',
      text: "आप किस समस्या का सामना कर रहे हैं?",
      options: [
        { text: "मेरी छात्रवृत्ति विफल रही", nextNodeId: 'scholarship_failed' },
        { text: "मेरी स्थिति निष्क्रिय है", nextNodeId: 'status_inactive' },
        { text: "वापस जाओ", nextNodeId: 'start' },
      ],
    },
    scholarship_failed: {
      id: 'scholarship_failed',
      text: "सबसे आम कारण यह है कि आपका खाता डीबीटी के लिए आधार-सीड नहीं है। कृपया पहले यूआईडीएआई पोर्टल पर अपनी स्थिति जांचें।",
      isEnd: true,
    },
    status_inactive: {
      id: 'status_inactive',
      text: "यदि आपकी स्थिति निष्क्रिय है, तो आपको अपनी बैंक शाखा में जाना होगा। हमारे संपर्क अनुभाग से 'आधार सीडिंग फॉर्म' डाउनलोड करें, इसे भरें, और इसे अपने आधार कार्ड की एक प्रति के साथ जमा करें।",
      isEnd: true,
    },
    scholarships: {
      id: 'scholarships',
      text: "आप हमारी वेबसाइट के 'छात्रवृत्ति' अनुभाग पर उपलब्ध छात्रवृत्तियों की सूची पा सकते हैं। उन सभी के लिए एक डीबीटी-सक्षम खाता आवश्यक है।",
      isEnd: true,
    },
    end_contact: {
      id: 'end_contact',
      text: "यदि आपकी समस्या का समाधान नहीं होता है, तो कृपया हमारे 'संपर्क' अनुभाग में संसाधनों का उपयोग करें या आधिकारिक हेल्पलाइन पर संपर्क करें।",
      isContact: true,
    }
  },
  gu: {
    start: {
      id: 'start',
      text: "નમસ્તે! હું આધાર દોસ્ત છું, તમારો સહાયક। હું આજે તમારી કેવી રીતે મદદ કરી શકું?",
      options: [
        { text: "ડીબીટી અને આધાર સીડિંગ વિશે", nextNodeId: 'about_dbt' },
        { text: "હું મારી સ્થિતિ કેવી રીતે તપાસું?", nextNodeId: 'check_status' },
        { text: "સામાન્ય સમસ્યાઓ", nextNodeId: 'common_problems' },
        { text: "શિષ્યવૃત્તિ વિશે", nextNodeId: 'scholarships' },
      ],
    },
    about_dbt: {
      id: 'about_dbt',
      text: "ડીબીટી એટલે ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર. શિષ્યવૃત્તિ માટે, ભંડોળ મેળવવા માટે તમારું બેંક ખાતું 'આધાર સીડેડ' હોવું આવશ્યક છે, જે ફક્ત 'આધાર લિંક્ડ' હોવાથી અલગ છે.",
      options: [
        { text: "શું તફાવત છે?", nextNodeId: 'difference' },
        { text: "પાછા જાઓ", nextNodeId: 'start' },
      ],
    },
    difference: {
      id: 'difference',
      text: "આધાર 'લિંકિંગ' આઈડી ચકાસણી માટે છે। આધાર 'સીડિંગ' તમારા ખાતાને એનપીસીઆઈ ડેટાબેઝ સાથે જોડે છે, તેને ડીબીટી-સક્ષમ બનાવે છે। શિષ્યવૃત્તિ માટે આ ફરજિયાત છે.",
      isEnd: true,
    },
    check_status: {
      id: 'check_status',
      text: "તમે તમારી આધાર સીડિંગની સ્થિતિ અધિકૃત યુઆઈડીએઆઈ પોર્ટલ પર ચકાસી શકો છો. 'માય આધાર' > 'આધાર/બેંક લિંકિંગ સ્થિતિ તપાસો' પર જાઓ.",
      isEnd: true,
    },
    common_problems: {
      id: 'common_problems',
      text: "તમે કઈ સમસ્યાનો સામનો કરી રહ્યા છો?",
      options: [
        { text: "મારી શિષ્યવૃત્તિ નિષ્ફળ ગઈ", nextNodeId: 'scholarship_failed' },
        { text: "મારી સ્થિતિ નિષ્ક્રિય છે", nextNodeId: 'status_inactive' },
        { text: "પાછા જાઓ", nextNodeId: 'start' },
      ],
    },
    scholarship_failed: {
      id: 'scholarship_failed',
      text: "સૌથી સામાન્ય કારણ એ છે કે તમારું ખાતું ડીબીટી માટે આધાર-સીડ કરેલું નથી। કૃપા કરીને પહેલા યુઆઈડીએઆઈ પોર્ટલ પર તમારી સ્થિતિ તપાસો.",
      isEnd: true,
    },
    status_inactive: {
      id: 'status_inactive',
      text: "જો તમારી સ્થિતિ નિષ્ક્રિય છે, તો તમારે તમારી બેંક શાખાની મુલાકાત લેવી આવશ્યક છે. અમારા સંપર્ક વિભાગમાંથી 'આધાર સીડિંગ ફોર્મ' ડાઉનલોડ કરો, તેને ભરો, અને તેને તમારા આધાર કાર્ડની નકલ સાથે સબમિટ કરો.",
      isEnd: true,
    },
    scholarships: {
      id: 'scholarships',
      text: "તમે અમારી વેબસાઇટના 'શિષ્યવૃત્તિ' વિભાગ પર ઉપલબ્ધ શિષ્યવૃત્તિઓની સૂચિ શોધી શકો છો. તે બધા માટે ડીબીટી-સક્ષમ ખાતું જરૂરી છે.",
      isEnd: true,
    },
    end_contact: {
      id: 'end_contact',
      text: "જો તમારી સમસ્યા હલ ન થાય, તો કૃપા કરીને અમારા 'સંપર્ક' વિભાગમાં સંસાધનોનો ઉપયોગ કરો અથવા સત્તાવાર હેલ્પલાઇનનો સંપર્ક કરો.",
      isContact: true,
    }
  },
};
