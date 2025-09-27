
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
        { text: "Why is seeding necessary?", nextNodeId: 'why_seeding' },
        { text: "Go back", nextNodeId: 'start' },
      ],
    },
    difference: {
      id: 'difference',
      text: "Aadhaar 'Linking' is for ID verification at your bank. Aadhaar 'Seeding' connects your account to the NPCI database, making it DBT-enabled. This is mandatory for receiving scholarship funds.",
      isEnd: true,
    },
     why_seeding: {
      id: 'why_seeding',
      text: "Seeding ensures that government benefits are transferred directly and securely to your designated bank account, reducing fraud and delays.",
      isEnd: true,
    },
    check_status: {
      id: 'check_status',
      text: "You can check your Aadhaar seeding status on the official UIDAI portal. Visit 'My Aadhaar' > 'Check Aadhaar/Bank Seeding Status'. The link is in our 'Check Status' section.",
      isEnd: true,
    },
    common_problems: {
      id: 'common_problems',
      text: "What problem are you facing?",
      options: [
        { text: "My scholarship failed", nextNodeId: 'scholarship_failed' },
        { text: "My status is inactive", nextNodeId: 'status_inactive' },
        { text: "Name mismatch issue", nextNodeId: 'name_mismatch' },
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
    name_mismatch: {
        id: 'name_mismatch',
        text: "If your name in the bank account does not exactly match your name on the Aadhaar card, the seeding process can fail. You will need to get it corrected at either the bank or an Aadhaar enrollment center.",
        isEnd: true,
    },
    scholarships: {
      id: 'scholarships',
      text: "A DBT-enabled account is required for all national scholarships. You can find a list of available scholarships on the 'Scholarships' section of our website. Do you have a question about a specific one?",
       options: [
        { text: "Pre-Matric for SC", nextNodeId: 'scholarship_info' },
        { text: "Post-Matric for SC", nextNodeId: 'scholarship_info' },
        { text: "Means-cum-Merit", nextNodeId: 'scholarship_info' },
        { text: "No, thanks", nextNodeId: 'end_ok' },
      ],
    },
     scholarship_info: {
      id: 'scholarship_info',
      text: "For detailed eligibility and application links for all scholarships, please visit the 'Scholarships' section on our main page. It has all the official information.",
      isEnd: true,
    },
    end_ok: {
        id: 'end_ok',
        text: 'Alright. If you have more questions, feel free to ask!',
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
        { text: "सीडिंग क्यों जरूरी है?", nextNodeId: 'why_seeding' },
        { text: "वापस जाओ", nextNodeId: 'start' },
      ],
    },
    difference: {
      id: 'difference',
      text: "आधार 'लिंकिंग' आपके बैंक में आईडी सत्यापन के लिए है। आधार 'सीडिंग' आपके खाते को एनपीसीआई डेटाबेस से जोड़ता है, जिससे यह डीबीटी-सक्षम हो जाता है। छात्रवृत्ति निधि प्राप्त करने के लिए यह अनिवार्य है।",
      isEnd: true,
    },
    why_seeding: {
      id: 'why_seeding',
      text: "सीडिंग यह सुनिश्चित करता है कि सरकारी लाभ धोखाधड़ी और देरी को कम करते हुए सीधे और सुरक्षित रूप से आपके निर्दिष्ट बैंक खाते में स्थानांतरित हो जाएं।",
      isEnd: true,
    },
    check_status: {
      id: 'check_status',
      text: "आप अपनी आधार सीडिंग स्थिति आधिकारिक यूआईडीएआई पोर्टल पर देख सकते हैं। 'माई आधार' > 'आधार/बैंक सीडिंग स्थिति जांचें' पर जाएं। लिंक हमारे 'स्थिति जांचें' अनुभाग में है।",
      isEnd: true,
    },
    common_problems: {
      id: 'common_problems',
      text: "आप किस समस्या का सामना कर रहे हैं?",
      options: [
        { text: "मेरी छात्रवृत्ति विफल रही", nextNodeId: 'scholarship_failed' },
        { text: "मेरी स्थिति निष्क्रिय है", nextNodeId: 'status_inactive' },
        { text: "नाम मेल नहीं खा रहा", nextNodeId: 'name_mismatch' },
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
    name_mismatch: {
        id: 'name_mismatch',
        text: "यदि बैंक खाते में आपका नाम आपके आधार कार्ड पर दिए गए नाम से बिल्कुल मेल नहीं खाता है, तो सीडिंग प्रक्रिया विफल हो सकती है। आपको इसे बैंक या आधार नामांकन केंद्र पर ठीक करवाना होगा।",
        isEnd: true,
    },
    scholarships: {
      id: 'scholarships',
      text: "सभी राष्ट्रीय छात्रवृत्तियों के लिए एक डीबीटी-सक्षम खाता आवश्यक है। आप हमारी वेबसाइट के 'छात्रवृत्ति' अनुभाग पर उपलब्ध छात्रवृत्तियों की सूची पा सकते हैं। क्या आपका किसी विशेष के बारे में कोई प्रश्न है?",
       options: [
        { text: "एससी के लिए प्री-मैट्रिक", nextNodeId: 'scholarship_info' },
        { text: "एससी के लिए पोस्ट-मैट्रिक", nextNodeId: 'scholarship_info' },
        { text: "मीन्स-कम-मेरिट", nextNodeId: 'scholarship_info' },
        { text: "नहीं, धन्यवाद", nextNodeId: 'end_ok' },
      ],
    },
    scholarship_info: {
      id: 'scholarship_info',
      text: "सभी छात्रवृत्तियों के लिए विस्तृत पात्रता और आवेदन लिंक के लिए, कृपया हमारे मुख्य पृष्ठ पर 'छात्रवृत्ति' अनुभाग पर जाएँ। इसमें सभी आधिकारिक जानकारी है।",
      isEnd: true,
    },
     end_ok: {
        id: 'end_ok',
        text: 'ठीक है। यदि आपके और कोई प्रश्न हैं, तो बेझिझक पूछें!',
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
        { text: "સીડિંગ શા માટે જરૂરી છે?", nextNodeId: 'why_seeding' },
        { text: "પાછા જાઓ", nextNodeId: 'start' },
      ],
    },
    difference: {
      id: 'difference',
      text: "આધાર 'લિંકિંગ' તમારી બેંકમાં ID ચકાસણી માટે છે। આધાર 'સીડિંગ' તમારા ખાતાને NPCI ડેટાબેઝ સાથે જોડે છે, તેને DBT-સક્ષમ બનાવે છે। શિષ્યવૃત્તિ ભંડોળ મેળવવા માટે આ ફરજિયાત છે.",
      isEnd: true,
    },
    why_seeding: {
      id: 'why_seeding',
      text: "સીડિંગ એ સુનિશ્ચિત કરે છે કે સરકારી લાભો છેતરપિંડી અને વિલંબને ઘટાડીને સીધા અને સુરક્ષિત રીતે તમારા નિયુક્ત બેંક ખાતામાં ટ્રાન્સફર થાય છે.",
      isEnd: true,
    },
    check_status: {
      id: 'check_status',
      text: "તમે તમારી આધાર સીડિંગની સ્થિતિ અધિકૃત UIDAI પોર્ટલ પર ચકાસી શકો છો. 'માય આધાર' > 'આધાર/બેંક સીડિંગ સ્થિતિ તપાસો' પર જાઓ। લિંક અમારા 'સ્થિતિ તપાસો' વિભાગમાં છે.",
      isEnd: true,
    },
    common_problems: {
      id: 'common_problems',
      text: "તમે કઈ સમસ્યાનો સામનો કરી રહ્યા છો?",
      options: [
        { text: "મારી શિષ્યવૃત્તિ નિષ્ફળ ગઈ", nextNodeId: 'scholarship_failed' },
        { text: "મારી સ્થિતિ નિષ્ક્રિય છે", nextNodeId: 'status_inactive' },
        { text: "નામમાં મેળ નથી", nextNodeId: 'name_mismatch' },
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
     name_mismatch: {
        id: 'name_mismatch',
        text: "જો બેંક ખાતામાં તમારું નામ તમારા આધાર કાર્ડ પરના નામ સાથે બરાબર મેળ ખાતું નથી, તો સીડિંગ પ્રક્રિયા નિષ્ફળ થઈ શકે છે. તમારે તેને બેંક અથવા આધાર નોંધણી કેન્દ્ર પર સુધારવાની જરૂર પડશે.",
        isEnd: true,
    },
    scholarships: {
      id: 'scholarships',
      text: "તમામ રાષ્ટ્રીય શિષ્યવૃત્તિઓ માટે ડીબીટી-સક્ષમ ખાતું જરૂરી છે। તમે અમારી વેબસાઇટના 'શિષ્યવૃત્તિ' વિભાગ પર ઉપલબ્ધ શિષ્યવૃત્તિઓની સૂચિ શોધી શકો છો। શું તમારી પાસે કોઈ ચોક્કસ વિશે પ્રશ્ન છે?",
       options: [
        { text: "SC માટે પ્રી-મેટ્રિક", nextNodeId: 'scholarship_info' },
        { text: "SC માટે પોસ્ટ-મેટ્રિક", nextNodeId: 'scholarship_info' },
        { text: "મીન્સ-કમ-મેરિટ", nextNodeId: 'scholarship_info' },
        { text: "ના, આભાર", nextNodeId: 'end_ok' },
      ],
    },
    scholarship_info: {
      id: 'scholarship_info',
      text: "તમામ શિષ્યવૃત્તિઓ માટે વિગતવાર યોગ્યતા અને અરજી લિંક્સ માટે, કૃપા કરીને અમારા મુખ્ય પૃષ્ઠ પર 'શિષ્યવૃત્તિ' વિભાગની મુલાકાત લો. તેમાં તમામ સત્તાવાર માહિતી છે.",
      isEnd: true,
    },
    end_ok: {
        id: 'end_ok',
        text: 'ભલે। જો તમને વધુ પ્રશ્નો હોય, તો પૂછવા માટે નિઃસંકોચ રહો!',
        isEnd: true,
    },
    end_contact: {
      id: 'end_contact',
      text: "જો તમારી સમસ્યા હલ ન થાય, તો કૃપા કરીને અમારા 'સંપર્ક' વિભાગમાં સંસાધનોનો ઉપયોગ કરો અથવા સત્તાવાર હેલ્પલાઇનનો સંપર્ક કરો.",
      isContact: true,
    }
  },
};

    