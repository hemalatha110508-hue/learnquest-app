/**
 * LEARNQUEST — Gamified Learning Platform for Rural Education
 * SIH25048 Complete Mobile App Engine with 100% Full Multilingual Localization
 * "Your Village Becomes Your Classroom."
 */

// ==========================================================================
// 1. GLOBAL REACTIVE STATE & PERSISTENCE
// ==========================================================================
const AppState = {
  // Gamification Metrics
  xp: 320,
  level: 3,
  levelTitle: "Village Scout",
  streak: 5,
  missionsCompleted: 12,

  // User Profile
  user: {
    name: "கவின் (Kavin)",
    class: "10",
    language: "Tamil",
    langCode: "ta",
    avatar: "🧑‍🌾",
    school: "அரசு மேல்நிலைப் பள்ளி, மேலூர்"
  },

  // App Modes & Navigation
  currentScreen: "splash",
  currentRole: "student", // 'student' | 'teacher'
  isOffline: false,
  audioFxEnabled: true,
  syncStatus: "synced", // 'synced' | 'syncing' | 'pending'

  // Missions & Badges
  unlockedBadges: [
    "first_learner",
    "village_explorer",
    "water_saver",
    "quiz_master",
    "learning_champion"
  ],
  communityChallenge: {
    current: 2,
    total: 3,
    step3Done: false,
    completed: false
  },

  // Plant Botanical Database
  activePlant: "neem",
  plantDatabase: {
    neem: {
      name: {
        ta: "வேப்ப மரம் (Azadirachta indica)",
        en: "Neem Tree (Azadirachta indica)",
        hi: "नीम का पेड़ (Azadirachta indica)",
        or: "ନିମ୍ବ ଗଛ (Azadirachta indica)"
      },
      subname: {
        ta: "தமிழ்: வேப்ப மரம்",
        en: "English: Neem Tree",
        hi: "हिन्दी: नीम का पेड़",
        or: "ଓଡ଼ିଆ: ନିମ୍ବ ଗଛ"
      },
      emoji: "🌿",
      facts: {
        ta: [
          "வேர் & நீர்: ஆழமான ஆணிவேர் நிலத்தடி நீரை உறிஞ்சி வறட்சியைத் தாங்குகிறது.",
          "கிராமத்து மருத்துவம்: இலைகள் பூச்சிகளை விரட்டி, தோல் நோய்களைக் குணப்படுத்துகிறது.",
          "ஒளிச்சேர்க்கை: பரந்த இலைகள் சூரிய ஒளியை உறிஞ்சி அதிக பிராணவாயுவை (Oxygen) தருகின்றன."
        ],
        en: [
          "Root & Water: Deep taproots draw moisture from deep aquifers during dry seasons.",
          "Village Medicine: Leaves repel farm pests, purify skin, and cleanse air.",
          "Photosynthesis: Broad leaves capture harsh sunlight to produce oxygen."
        ],
        hi: [
          "जड़ और पानी: गहरी मूसला जड़ें सूखे के मौसम में गहरे पानी को सोखती हैं।",
          "गाँव की दवा: पत्तियां कीड़ों को भगाती हैं और त्वचा को स्वस्थ रखती हैं।",
          "प्रकाश संश्लेषण: चौड़ी पत्तियां धूप सोखकर भरपूर ऑक्सीजन बनाती हैं।"
        ],
        or: [
          "ଚେର ଏବଂ ଜଳ: ଗଭୀର ଚେର ଭୂତଳ ଜଳ ଶୋଷଣ କରେ।",
          "ଗ୍ରାମ୍ୟ ଔଷଧ: ପତ୍ର କୀଟନାଶକ ଏବଂ ଚର୍ମ ରୋଗ ଭଲ କରେ।",
          "ଆଲୋକ ସଂଶ୍ଳେଷଣ: ପତ୍ର ସୂର୍ଯ୍ୟାଲୋକରୁ ଅମ୍ଳଜାନ ଉତ୍ପାଦନ କରେ।"
        ]
      },
      voiceText: {
        ta: "வேப்ப மரம் சிறந்த மருத்துவ குணம் கொண்டது. இது பூச்சிகளை விரட்டவும், தோல் நோய்களை குணப்படுத்தவும் உதவுகிறது.",
        en: "Neem tree has great medicinal properties. It repels farm insects and purifies the atmosphere.",
        hi: "नीम का पेड़ बहुत गुणकारी होता है। यह कीटनाशक और औषधि के रूप में काम करता है।",
        or: "ନିମ୍ବ ଗଛ ଏକ ଉତ୍କୃଷ୍ଟ ଔଷଧୀୟ ବୃକ୍ଷ ଅଟେ।"
      }
    },
    tulsi: {
      name: {
        ta: "துளசி செடி (Ocimum tenuiflorum)",
        en: "Holy Basil (Ocimum tenuiflorum)",
        hi: "तुलसी का पौधा (Ocimum tenuiflorum)",
        or: "ତୁଳସୀ ଗଛ (Ocimum tenuiflorum)"
      },
      subname: {
        ta: "தமிழ்: துளசி செடி",
        en: "English: Tulsi / Holy Basil",
        hi: "हिन्दी: तुलसी का पौधा",
        or: "ଓଡ଼ିଆ: ତୁଳସୀ ଗଛ"
      },
      emoji: "🌱",
      facts: {
        ta: [
          "இலை & ஆரோக்கியம்: துளசி எண்ணெய் சுவாச மண்டல நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது.",
          "நீர் பயன்பாடு: குறைந்த நீரிலேயே வீட்டு முற்றங்களில் செழித்து வளர்கிறது.",
          "மண் வளம்: வேர்ப்பகுதி பாக்டீரியாக்கள் தோட்டத்து மண்ணின் வளத்தை கூட்டுகின்றன."
        ],
        en: [
          "Leaves & Immunity: Essential oils boost respiratory immunity and clear colds.",
          "Water Efficiency: Requires minimal water, thrives in village household courtyards.",
          "Soil Health: Root microbial flora enriches surrounding garden soil."
        ],
        hi: [
          "पत्तियां और स्वास्थ्य: तुलसी सर्दी-खांसी में रोग प्रतिरोधक क्षमता बढ़ाती है।",
          "पानी की बचत: कम पानी में भी घर के आंगन में अच्छी बढ़ती है।",
          "मिट्टी की गुणवत्ता: जड़ें आसपास की मिट्टी को उपजाऊ बनाती हैं।"
        ],
        or: [
          "ପତ୍ର ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ: ତୁଳସୀ ପତ୍ର ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତି ବୃଦ୍ଧି କରେ।",
          "ଜଳ ସଞ୍ଚୟ: କମ ପାଣିରେ ମଧ୍ୟ ବଢ଼ିଥାଏ।",
          "ମାଟି ଉର୍ବରତା: ମାଟିକୁ ଉର୍ବର କରେ।"
        ]
      },
      voiceText: {
        ta: "துளசி செடி சளி மற்றும் இருமலுக்கு சிறந்த கிராமத்து இயற்கை மருந்தாகும். இதன் இலைகள் நோய் எதிர்ப்பு சக்தியை தரும்.",
        en: "Tulsi leaves boost immunity and act as a natural remedy for colds and coughs.",
        hi: "तुलसी सर्दी और खांसी के लिए एक उत्तम प्राकृतिक औषधि है।",
        or: "ତୁଳସୀ ଶରୀରର ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତି ବଢ଼ାଇଥାଏ।"
      }
    },
    moringa: {
      name: {
        ta: "முருங்கை மரம் (Moringa oleifera)",
        en: "Drumstick Tree (Moringa oleifera)",
        hi: "सहजन / मोरिंगा (Moringa oleifera)",
        or: "ସଜନା ଗଛ (Moringa oleifera)"
      },
      subname: {
        ta: "தமிழ்: முருங்கை மரம்",
        en: "English: Drumstick Tree",
        hi: "हिन्दी: सहजन का पेड़",
        or: "ଓଡ଼ିଆ: ସଜନା ଗଛ"
      },
      emoji: "🍃",
      facts: {
        ta: [
          "ஊட்டச்சத்து: ஆரஞ்சை விட 7 மடங்கு வைட்டமின் சி மற்றும் அதிக இரும்புச்சத்து நிறைந்தது.",
          "வறட்சி தாங்கும் தன்மை: குறைந்த பாசனத்திலும் வறண்ட மண்ணில் வேகமாக வளரும்.",
          "நீர் சுத்திகரிப்பு: முருங்கை விதைகள் கலங்கிய குளத்து நீரை இயல்பாக தெளிவாக்குகின்றன."
        ],
        en: [
          "Nutrition Density: Leaves contain 7x more Vitamin C than oranges and high iron.",
          "Drought Resistance: Flourishes in arid soils with minimal irrigation.",
          "Seed Clarification: Crushed seeds naturally settle pond mud particles."
        ],
        hi: [
          "पोषण: इसमें संतरे से 7 गुना ज्यादा विटामिन सी और आयरन होता है।",
          "सूखा प्रतिरोधी: कम पानी में भी तेजी से फलता-फूलता है।",
          "पानी की सफाई: इसके बीज गंदे पानी को साफ करने में मदद करते हैं।"
        ],
        or: [
          "ପୋଷଣ: ଏଥିରେ ପ୍ରଚୁର ପରିମାଣରେ ଆଇରନ ଏବଂ ଭିଟାମିନ ଥାଏ।",
          "ଜଳବାୟୁ: କମ ପାଣିରେ ଭଲ ବଢ଼େ।",
          "ଜଳ ବିଶୋଧନ: ମଞ୍ଜି ପାଣି ସଫା କରେ।"
        ]
      },
      voiceText: {
        ta: "முருங்கை இலைகளில் அதிக இரும்புச்சத்து மற்றும் புரதம் நிறைந்துள்ளது. இது கிராம மக்களின் ஆரோக்கியத்திற்கு சிறந்தது.",
        en: "Moringa leaves are super-rich in iron and vitamins, vital for rural nutrition.",
        hi: "सहजन की पत्तियां आयरन और पोषण से भरपूर होती हैं।",
        or: "ସଜନା ପତ୍ର ସ୍ୱାସ୍ଥ୍ୟ ପାଇଁ ଅତ୍ୟନ୍ତ ହିତକର।"
      }
    },
    banana: {
      name: {
        ta: "வாழை மரம் (Musa paradisiaca)",
        en: "Banana Plant (Musa paradisiaca)",
        hi: "केले का पौधा (Musa paradisiaca)",
        or: "କଦଳୀ ଗଛ (Musa paradisiaca)"
      },
      subname: {
        ta: "தமிழ்: வாழை மரம்",
        en: "English: Banana Plant",
        hi: "हिन्दी: केले का पौधा",
        or: "ଓଡ଼ିଆ: କଦଳୀ ଗଛ"
      },
      emoji: "🍌",
      facts: {
        ta: [
          "நீர் சேமிப்பு: பஞ்சு போன்ற போலித்தண்டு நீரைச் சேமித்து காய்களை வளர்க்கிறது.",
          "பூஜ்ஜிய கழிவு: இலைகள் உணவுண்ணும் இயற்கை தட்டுகளாகவும், நார்கள் கயிறாகவும் பயன்படுகின்றன.",
          "இயற்கை உரம்: அழுகும் தண்டு மண்ணுக்கு சிறந்த மண்புழு உரத்தை உருவாக்குகிறது."
        ],
        en: [
          "Water Storage: Spongy pseudostem stores water to nourish large fruit bunches.",
          "Zero Waste: Large leaves serve as organic biodegradable dining plates.",
          "Compost: Decomposing trunks create rich organic matter for village soil."
        ],
        hi: [
          "जल संचयन: इसका तना पानी जमा करके फलों को पोषण देता है।",
          "शून्य अपशिष्ट: पत्ते भोजन की थाली और तने से रेशे बनते हैं।",
          "जैविक खाद: इसका अवशेष मिट्टी को उपजाऊ खाद देता है।"
        ],
        or: [
          "ଜଳ ସଂରକ୍ଷଣ: କାଣ୍ଡ ଜଳ ସଞ୍ଚୟ କରି ରଖେ।",
          "ଉପଯୋଗୀ: ପତ୍ର ଭୋଜନ ପାଇଁ ଏବଂ ଫଳ ସ୍ୱାସ୍ଥ୍ୟକର।",
          "ଖତ: ମାଟିକୁ ଉର୍ବର କରେ।"
        ]
      },
      voiceText: {
        ta: "வாழை மரத்தின் இலைகள், தண்டு, பூ மற்றும் காய் அனைத்தும் மக்களுக்கு பல வழிகளில் பயன் தருகிறது.",
        en: "Every part of the banana plant from leaves to stem serves the rural community.",
        hi: "केले के पौधे का हर हिस्सा भोजन और उपयोग में आता है।",
        or: "କଦଳୀ ଗଛର ସମସ୍ତ ଅଂଶ ଉପକାରୀ ଅଟେ।"
      }
    }
  },

  // Interactive Kirana Shop Game State
  shopGame: {
    items: {
      rice: { name: "Rice (அரிசி)", price: 40, qty: 0 },
      jaggery: { name: "Jaggery (வெல்லம்)", price: 50, qty: 0 },
      lentils: { name: "Lentils (பருப்பு)", price: 60, qty: 0 }
    },
    cashGiven: 100
  },

  // Interactive Farm Game State
  farmGame: {
    bags: 5,
    bagWeight: 25
  },

  // Active Quiz State
  quiz: {
    subject: "science",
    questionIndex: 0,
    score: 0,
    questions: []
  },

  // Student Roster Data for Teacher Inspector
  studentRoster: {
    kavin: {
      name: "கவின் (Kavin)",
      avatar: "🧑‍🌾",
      accuracy: "84%",
      missions: "12 Done",
      streak: "5 Days",
      weakTopics: {
        ta: ["பின்னங்கள் (1/4 பிரிவு கணக்கு)", "தாவர சைலம் (Xylem) நீர் உறிஞ்சுதல்"],
        en: ["Fractions (1/4 division)", "Plant Xylem Water Uptake"],
        hi: ["भिन्न (1/4 विभाजन)", "पौधों में जल संवहन"],
        or: ["ଭଗ୍ନାଂଶ (1/4)", "ଉଦ୍ଭିଦ ଜଳ ଶୋଷଣ"]
      }
    },
    ananya: {
      name: "அனன்யா (Ananya)",
      avatar: "👧",
      accuracy: "62%",
      missions: "8 Done",
      streak: "2 Days",
      weakTopics: {
        ta: ["பின்னங்கள் வகுத்தல்", "ஆங்கில இறந்தகால வினைச்சொற்கள்"],
        en: ["Fractions Division", "English Past Tense Irregular Verbs"],
        hi: ["भिन्न भाग", "अंग्रेजी भूतकाल क्रियाएं"],
        or: ["ଭଗ୍ନାଂଶ ହରଣ", "ଇଂରାଜୀ ବ୍ୟାକରଣ"]
      }
    },
    selvam: {
      name: "செல்வம் (Selvam)",
      avatar: "👦",
      accuracy: "92%",
      missions: "14 Done",
      streak: "7 Days",
      weakTopics: {
        ta: ["நிலப் பரப்பளவு வடிவியல் கணக்கீடுகள்"],
        en: ["Advanced Land Geometry Area Calculations"],
        hi: ["भूमि क्षेत्रफल ज्यामिति"],
        or: ["ଜମି କ୍ଷେତ୍ରଫଳ ଗଣନା"]
      }
    },
    priya: {
      name: "பிரியா (Priya)",
      avatar: "👧",
      accuracy: "58%",
      missions: "6 Done",
      streak: "0 Days (Inactive)",
      weakTopics: {
        ta: ["7-9 வாய்ப்பாடு பெருக்கல்", "ஒளிச்சேர்க்கை செயல்முறை"],
        en: ["Multiplication Tables 7-9", "Plant Photosynthesis Concepts"],
        hi: ["7-9 पहाड़ा गुणा", "प्रकाश संश्लेषण प्रक्रिया"],
        or: ["ଗୁଣନ ପଣିକିଆ 7-9", "ଆଲୋକ ସଂଶ୍ଳେଷଣ"]
      }
    }
  }
};

// ==========================================================================
// 2. WEB AUDIO FX SYNTHESIZER
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playCoin() {
    if (!AppState.audioFxEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(987.77, this.ctx.currentTime);
    osc.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playCorrect() {
    if (!AppState.audioFxEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.1);
    osc.frequency.setValueAtTime(783.99, now + 0.2);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  playFanfare() {
    if (!AppState.audioFxEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.12 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.12);
      osc.stop(this.ctx.currentTime + i * 0.12 + 0.4);
    });
  }
}

const AudioEngine = new SoundFX();

// ==========================================================================
// 3. COMPLETE MULTILINGUAL TRANSLATION DICTIONARIES
// ==========================================================================
const Translations = {
  // ---------------- TAMIL (தமிழ்) ----------------
  ta: {
    ctrl_teacher_view: "ஆசிரியர் பார்வை",
    ctrl_student_view: "மாணவர் பார்வை",
    ctrl_online: "இணையம் உண்டு",
    ctrl_offline: "இணையமில்லை",
    ctrl_sound_on: "ஒலி: இயக்கம்",
    ctrl_sound_off: "ஒலி: நிறுத்தம்",
    ctrl_full_view: "முழுத் திரை",
    ctrl_phone_shell: "மொபைல் கூடு",
    status_offline_badge: "இணையமில்லை",
    splash_tagline: "“கற்றுக்கொள் • விளையாடு • வளர்”",
    splash_quote: "“உங்கள் கிராமமே உங்கள் வகுப்பறை.”",
    choose_language_lbl: "விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்:",
    btn_get_started: "கற்றலைத் தொடங்குங்கள்",
    splash_sih_note: "கிராமப்புற பள்ளிகளுக்கான AI கற்றல் தளம்",
    greeting_welcome: "வணக்கம், மாணவரே!",
    stat_streak_lbl: "தொடர்",
    today_mission_badge: "🌾 இன்றைய கிராமத்துப் பணி",
    today_mission_title: "“உங்கள் வீட்டின் அருகிலுள்ள ஒரு தாவரத்தைக் கண்டறிந்து 3 உண்மைகளைக் கற்றுக்கொள்ளுங்கள்.”",
    today_mission_desc: "உங்கள் கிராமத்து தாவரங்களை அறிவியல் பாடத்துடன் இணையுங்கள். நேரடி கேமரா அல்லது லென்ஸைப் பயன்படுத்துங்கள்.",
    reward_lbl: "வெகுமதி:",
    btn_start_mission: "பணியைத் தொடங்குங்கள்",
    grow_badge: "அடாப்டிவ் AI கற்றல்",
    grow_title: "🌱 “என்னுடன் வளர்” AI",
    grow_desc: "உங்கள் பதில்களுக்கு ஏற்ப தானாகவே மாறும் தனிப்பயனாக்கப்பட்ட கல்வி.",
    explore_hub: "ஆராய்ந்து கற்றுக்கொள்ளுங்கள்",
    rural_curriculum_tag: "கிராமப்புற பாடத்திட்டம்",
    grade_tag: "10-ஆம் வகுப்பு",
    continue_learning: "கற்றலைத் தொடரவும்",
    continue_sub: "அறிவியல்: தாவர உறுப்புகள் மற்றும் ஒளிச்சேர்க்கை",
    offline_ready_tag: "ஆஃப்லைன் தயார்",
    offline_learning: "இணையமில்லா கல்வி",
    offline_sub: "4 பாடப் பொதிகள் தயார் (52 MB)",
    manage_downloads_cta: "பதிவிறக்கங்களை நிர்வகி ➔",
    language_title: "மொழி மற்றும் குரல்",
    language_sub: "தமிழ், English, हिन्दी, ଓଡ଼ିଆ குரல் வாசிப்புடன்",
    change_voice_cta: "குரலை மாற்று ➔",
    five_badges_tag: "5 பதக்கங்கள்",
    my_progress: "என் முன்னேற்றம்",
    progress_sub: "நிலை 3 கிராமத்து வழிகாட்டி • 12 பணிகள் முடிந்தது",
    view_stats_cta: "புள்ளிவிவரங்களைப் பார் ➔",
    comm_challenge_badge: "சமூக சவால்",
    comm_challenge_title: "கிராமத்து நீர் சேமிப்பாளர்",
    comm_challenge_sub: "கிராம நண்பர்களுடன் இணைந்து: 2/3 முடிந்தது",
    btn_view: "பார்",
    cert_banner_title: "கிராமத்து அறிஞர் சான்றிதழ்",
    cert_banner_sub: "உங்கள் அதிகாரப்பூர்வ சாதனை சான்றிதழைப் பெற்று பதிவிறக்கவும்",
    btn_claim_cert: "பெறுங்கள் ➔",
    teacher_shortcut_lbl: "👩‍🏫 நீங்கள் ஆசிரியரா?",
    teacher_shortcut_btn: "வகுப்பறை இடைவெளிகளைப் பாருங்கள் ➔",
    missions_title: "கிராமத்துப் பணிகள்",
    missions_sub: "“உங்கள் உலகத்திலிருந்து கற்றுக்கொள்ளுங்கள்”",
    filter_all: "அனைத்துப் பணிகள்",
    filter_science: "🌱 அறிவியல்",
    filter_math: "📐 கணிதம்",
    filter_community: "🌍 சமூகம்",
    tag_science: "அறிவியல்",
    tag_math: "கணிதம்",
    m1_title: "🌱 தாவர பணி",
    m1_desc: "“உங்கள் வீட்டின் அருகிலுள்ள ஒரு தாவரத்தை அடையாளம் கண்டு 3 உண்மைகளைக் கற்றுக்கொள்ளுங்கள்.”",
    m1_action: "உங்கள் தோட்டத்தில் உள்ள வேம்பு, துளசி அல்லது முருங்கையைக் கண்டறியவும்.",
    m2_title: "💧 நீர் பணி",
    m2_desc: "“உங்கள் குடும்பம் நீர் சேமிக்கும் இரண்டு வழிகளைக் கண்டறியுங்கள்.”",
    m2_action: "மழைநீர் சேகரிப்பு மற்றும் சமையலறை நீர் மறுபயன்பாட்டை ஆராயுங்கள்.",
    m3_title: "🛒 மளிகைக் கடை கணக்கு",
    m3_desc: "“உள்ளூர் மளிகைக் கடையில் வாங்கிய 3 பொருட்களின் மொத்த விலையைக் கணக்கிடுங்கள்.”",
    m3_action: "அரிசி, பருப்பு, வெல்லம் வாங்கி மீதி பணத்தைச் சரிபார்க்கவும்.",
    m4_title: "🌾 விவசாயக் கணக்கு",
    m4_desc: "“ஒரு விவசாயியிடம் 5 மூட்டை நெல் உள்ளது. ஒரு மூட்டை 25 கிலோ எனில் மொத்த எடையைக் கணக்கிடுங்கள்.”",
    m4_action: "அறுவடை மூட்டைகளுக்கு பெருக்கல் வாய்ப்பாட்டைப் பயன்படுத்துங்கள்.",
    context_action_tag: "நேரடி கிராமத்து செயல்பாடு:",
    btn_listen: "கேள்",
    btn_start_mission_cta: "பணியைத் தொடங்குங்கள் 🚀",
    btn_open_lab: "ஆய்வகம் திற 🚀",
    btn_open_shop: "கடை திற 🚀",
    btn_open_scale: "தராசு திற 🚀",
    rw_sub: "ஊடாடும் கிராமத்து ஆய்வு",
    step1_title: "படி 1",
    step1_desc: "“உங்கள் வீடு அல்லது பள்ளியைச் சுற்றிப் பாருங்கள்.”",
    step2_title: "படி 2",
    step2_desc: "“ஒரு தாவரத்தைக் கண்டறியுங்கள்.”",
    step3_title: "படி 3",
    step3_desc: "“அதன் பெயரையும் ஒரு பயனையும் கற்றுக்கொள்ளுங்கள்.”",
    lens_status: "📷 அறிவார்ந்த தாவர AI லென்ஸ்",
    btn_switch_live_cam: "📹 நேரடி கேமரா",
    match_confidence: "98% பொருத்தம்",
    point_plant_lbl: "தாவரத்தை நோக்கிப் பிடிக்கவும் அல்லது தேர்ந்தெடுக்கவும்:",
    btn_listen_local: "தமிழில் கேள்",
    btn_scan_next: "📷 அடுத்ததை ஸ்கேன் செய்",
    btn_full_lesson: "📚 முழு பாடம்",
    btn_complete_mission_xp: "🎉 பணியை முடிக்கவும் (+30 XP)",
    adaptive_sub: "அடாப்டிவ் AI கற்றல் இயந்திரம்",
    adaptive_banner_title: "“உங்கள் பதில்களின் அடிப்படையில் LearnQuest பயிற்சியை மாற்றியமைக்கிறது.”",
    adaptive_banner_sub: "எந்த மாணவரும் பின் தங்குவதில்லை! ஒரு தலைப்பு கடினமாக இருந்தால், எளிய கிராமத்து கதைகளுடன் மீண்டும் கற்பிக்கப்படும்.",
    simulate_perf_lbl: "மாணவர் செயல்பாட்டை சோதிக்கவும்:",
    btn_scen_struggling: "⚠️ குறைந்த மதிப்பெண் (பின்னங்கள்)",
    btn_scen_mastered: "🌟 அதிக மதிப்பெண் (தேர்ச்சி)",
    adaptive_struggle_title: "“இந்த தலைப்பை மீண்டும் பயிற்சி செய்வோம்.”",
    adaptive_struggle_sub: "கவலை வேண்டாம்! கணிதம் என்பது குடும்பத்துடன் உணவைப் பகிர்வது போன்றதே.",
    frac_exp_heading: "எளிய விளக்கம்: பின்னம் என்றால் என்ன?",
    frac_exp_body: "பின்னம் என்பது ஒரு முழுப் பொருளை சம பாகங்களாகப் பிரிப்பதாகும். உங்கள் தாய் 1 சூடான தோசையை உங்களுக்கும் உங்கள் சகோதரருக்கும் பாதியாக வெட்டிக் கொடுத்தால், ஒவ்வொருவருக்கும் கிடைப்பது 1/2 (அரை பாகம்)!",
    divide_dosa_lbl: "தோசையை பிரிக்கவும்:",
    dosa_2_parts: "2 பாகங்கள் (1/2)",
    dosa_4_parts: "4 பாகங்கள் (1/4)",
    village_example_heading: "எளிய கிராமத்து உதாரணம்",
    mango_story_title: "மாம்பழப் பகிர்வு:",
    mango_story_body: "ராஜுவிடம் 4 மாம்பழங்கள் உள்ளன. அவன் 1 பழத்தைத் தன் தங்கைக்குக் கொடுத்தான். அவன் கொடுத்தது 1/4 பாகம்!",
    guided_practice_heading: "வழிகாட்டப்பட்ட பயிற்சி வினா",
    practice_fraction_q: "“ஒரு தர்பூசணியை 4 சம துண்டுகளாக வெட்டி 1 துண்டு சாப்பிட்டால், நீங்கள் சாப்பிட்ட பின்னம் என்ன?”",
    adaptive_master_title: "“அருமை! அடுத்த கடினமான வினாவிற்கு தயாரா?”",
    adaptive_master_sub: "நீங்கள் அடிப்படை பின்னங்களில் தேர்ச்சி பெற்றுவிட்டீர்கள்! விவசாய விளைச்சல் கணக்குகளுக்குச் செல்வோம்.",
    adv_farm_yield_heading: "விவசாய விளைச்சல் சவால்",
    practice_adv_q: "“ஒரு விவசாயியிடம் 12 ஏக்கர் நிலம் உள்ளது. அவர் 1/3 நிலத்தில் நெல்லும், 1/2 நிலத்தில் கரும்பும் பயிரிடுகிறார். பயிரிடப்பட்ட மொத்த நிலம் எத்தனை ஏக்கர்?”",
    subjects_title: "பாடத்தைத் தேர்ந்தெடுக்கவும்",
    subjects_curriculum_sub: "10-ஆம் வகுப்பு கிராமப்புற பாடத்திட்டம்",
    three_subjects_tag: "3 பாடங்கள்",
    subj_math_title: "கணிதம் (Mathematics)",
    subj_math_sub: "கணிதம் • அன்றாட கிராமத்துக் கணக்கீடுகள்",
    topic_numbers: "🔢 எண்கள்",
    topic_multiplication: "✖️ பெருக்கல்",
    topic_fractions: "🍰 பின்னங்கள்",
    topic_money: "💰 பணக் கணக்கீடு",
    btn_read_lesson: "பாடம் படி 📖",
    btn_take_math_quiz: "கணித Quiz ➔",
    subj_science_title: "அறிவியல் (Science)",
    subj_science_sub: "அறிவியல் • இயற்கை, தாவரங்கள் & சுற்றுச்சூழல்",
    topic_plants: "🌱 தாவரங்கள்",
    topic_human_body: "🫀 மனித உடல்",
    topic_water: "💧 நீர் மேலாண்மை",
    topic_environment: "🌾 சுற்றுச்சூழல்",
    btn_take_science_quiz: "அறிவியல் Quiz ➔",
    subj_english_title: "ஆங்கிலம் (English)",
    subj_english_sub: "ஆங்கிலம் • தினசரி கிராமத்து உரையாடல்கள்",
    topic_grammar: "✍️ இலக்கணம்",
    topic_vocabulary: "🔤 சொற்களஞ்சியம்",
    topic_reading: "📖 வாசிப்பு",
    topic_everyday: "🗣️ தினசரி ஆங்கிலம்",
    btn_take_english_quiz: "ஆங்கில Quiz ➔",
    btn_read: "வாசி",
    btn_practice_topic_quiz: "பாடப் பயிற்சி வினாடி வினா ➔",
    btn_submit_answer: "பதிலைச் சமர்ப்பி ➔",
    result_great_job: "அருமை! நன்று செய்தீர்கள்!",
    result_subtitle: "பள்ளிப் படிப்பை உங்கள் கிராமத்துடன் இணைத்துவிட்டீர்கள்!",
    score_lbl: "மதிப்பெண்",
    xp_earned_msg: "+30 XP பெறப்பட்டது",
    new_badge_unlocked_ribbon: "🏆 புதிய பதக்கம் திறக்கப்பட்டது!",
    badge_village_explorer: "“கிராமத்து ஆய்வாளர்”",
    badge_explorer_desc: "உங்கள் முதல் தாவர ஆய்வு மற்றும் அறிவியல் வினாடி வினாவை வெற்றிகரமாக முடித்துவிட்டீர்கள்!",
    btn_next_mission: "அடுத்த பணி 🚀",
    btn_view_progress: "முன்னேற்றத்தைப் பார் 📊",
    btn_practice_grow: "🌱 “என்னுடன் வளர்” உடன் பயிற்சி செய்",
    offline_screen_title: "📶 இணையமில்லா கல்வி",
    offline_screen_sub: "இணையம் இல்லாமல் எங்கும் படிக்கலாம்",
    offline_ready_badge: "🟢 ஆஃப்லைன் தயார்",
    offline_hero_title: "“இணையம் இருக்கும்போது பாடங்களைப் பதிவிறக்கி, இணையம் இல்லாதபோதும் தொடர்ந்து படிக்கவும்.”",
    offline_hero_sub: "வகுப்பறையிலோ வயல்வெளியிலோ இணையம் தேவையில்லை. அனைத்துப் பாடங்களும் உங்கள் போனிலேயே இயங்கும்.",
    sim_network_lbl: "நெட்வொர்க் நிலையை சோதிக்கவும்:",
    btn_switch_to_offline: "ஆஃப்லைன் முறைக்கு மாறு",
    sync_offline_mode: "ஆஃப்லைன் முறை செயலில் உள்ளது",
    sync_offline_desc: "“உங்கள் முன்னேற்றம் சாதனத்தில் பாதுகாப்பாக சேமிக்கப்பட்டுள்ளது.”",
    btn_sync_now: "☁️ இப்போது ஒத்திசை",
    available_packs_heading: "கிடைக்கும் ஆஃப்லைன் பொதிகள்",
    local_storage_tag: "உள்ளூர் சேமிப்பு",
    pack_math_sub: "10-ஆம் வகுப்பு • 12 பாடங்கள் • 14 MB",
    pack_science_sub: "10-ஆம் வகுப்பு • 15 பாடங்கள் • 18 MB",
    pack_english_sub: "10-ஆம் வகுப்பு • 10 பாடங்கள் • 12 MB",
    pack_missions_sub: "20 கிராமத்துப் பணிகள் • 8 MB",
    downloaded_check: "பதிவிறக்கம் ஆனது ✓",
    choose_lang_title: "🌐 உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    multilingual_sub: "கிராமப்புற பன்மொழி ஆதரவு",
    lang_tag_primary: "முதன்மை",
    trans_preview_lbl: "நேரடி மொழிபெயர்ப்பு முன்னோட்டம்:",
    voice_assist_title: "குரல் வழி கற்றல் உதவி",
    voice_assist_sub: "எழுத்து வாசிப்பில் சிரமப்படும் மாணவர்களுக்கான ஆடியோ உதவி",
    progress_title: "என் முன்னேற்றம்",
    milestones_sub: "கிராமப்புற கற்றல் மைல்கற்கள்",
    stat_total_xp: "மொத்த XP",
    badge_scout: "கிராமத்து வழிகாட்டி",
    stat_missions_done: "முடித்த பணிகள்",
    subject_mastery_heading: "பாடத் தேர்ச்சி",
    unlocked_badges_heading: "திறக்கப்பட்ட பதக்கங்கள்",
    five_earned_tag: "5 பெறப்பட்டது",
    badge_first_learner: "முதல் கற்றவர்",
    badge_water_saver: "நீர் சேமிப்பாளர்",
    badge_quiz_master: "வினாடி வினா மன்னன்",
    badge_learning_champion: "கற்றல் நாயகன்",
    badge_eco_champion: "சுற்றுச்சூழல் நாயகன்",
    unlocked_tag: "திறக்கப்பட்டது",
    community_quest_tag: "சமூக சவால்",
    btn_generate_cert: "📜 கிராமத்து அறிஞர் சான்றிதழை உருவாக்கு",
    profile_title: "👤 சுயவிவரம்",
    student_account_sub: "மாணவர் கணக்கு",
    class_lbl: "வகுப்பு",
    language_lbl: "மொழி",
    level_lbl: "நிலை",
    btn_edit_profile: "✏️ சுயவிவரத்தை திருத்து",
    btn_settings: "⚙️ அமைப்புகள்",
    teacher_mode_title: "ஆசிரியர் தகவல் பலகை",
    teacher_mode_sub: "வகுப்பு புள்ளிவிவரங்கள் & கற்றல் இடைவெளிகளைப் பாருங்கள்",
    btn_switch_view: "பார்வையை மாற்று ➔",
    app_tagline_footer: "“உங்கள் உலகத்திலிருந்து கற்றுக்கொள்ளுங்கள், சமூகத்துடன் வளருங்கள்.”",
    sih_footer_note: "SIH25048 • ஸ்மார்ட் இந்தியா ஹேக்கத்தான் முன்மாதிரி",
    edit_profile_title: "✏️ சுயவிவரத்தை திருத்து",
    edit_profile_sub: "மாணவர் விவரங்களை புதுப்பிக்கவும்",
    choose_avatar_lbl: "அவதாரைத் தேர்ந்தெடுக்கவும்:",
    student_name_lbl: "மாணவர் பெயர்:",
    class_grade_lbl: "வகுப்பு:",
    primary_lang_lbl: "முதன்மை மொழி:",
    school_village_lbl: "பள்ளி / கிராமத்தின் பெயர்:",
    btn_cancel: "ரத்து செய்",
    btn_save_changes: "மாற்றங்களைச் சேமி ✓",
    teacher_dashboard_title: "👩‍🏫 வகுப்பறை கற்றல் நுண்ணறிவுகள்",
    teacher_school_sub: "10-ஆம் வகுப்பு • அரசு பள்ளி, மேலூர்",
    btn_student_view: "மாணவர் பார்வை ➔",
    total_students_lbl: "மொத்த மாணவர்கள்",
    active_learners_lbl: "செயலில் உள்ளவர்கள்",
    missions_done_lbl: "முடித்த பணிகள்",
    class_subject_averages: "📊 வகுப்பு பாட சராசரிகள்",
    weekly_realtime_tag: "வாராந்திர நிகழ்நேரம்",
    students_needing_support: "உதவி தேவைப்படும் மாணவர்கள்",
    gap_analytics_sub: "தானியங்கி வினாடி வினா பகுப்பாய்வு மூலம் கண்டறியப்பட்டது",
    gap1_title: "பின்னங்கள் (கணிதம்)",
    gap1_sub: "5 மாணவர்களுக்கு பின்னங்களில் கூடுதல் பயிற்சி தேவை.",
    gap2_title: "தாவர உறுப்புகள் (அறிவியல்)",
    gap2_sub: "4 மாணவர்களுக்கு தாவர சைலம் நீர் உறிஞ்சுதலில் குழப்பம் உள்ளது.",
    gap3_title: "இறந்தகால இலக்கணம் (ஆங்கிலம்)",
    gap3_sub: "3 மாணவர்களுக்கு வினைச்சொற்கள் திருத்தம் தேவை.",
    btn_assign_remedial: "பரிகாரப் பணி ஒதுக்கு ➔",
    student_roster_heading: "👥 மாணவர் பட்டியல் முன்னேற்றம்",
    filter_needs_help: "வடிகட்டு: உதவி தேவைப்படுபவர்கள்",
    badge_on_track: "சரியான பாதையில் 🌟",
    badge_needs_practice: "பயிற்சி தேவை ⚠️",
    badge_top_learner: "சிறந்த மாணவர் 🏆",
    badge_needs_nudge: "கவனிக்க வேண்டும் 📩",
    ananya_sub: "8 பணிகள் • பின்னங்களில் உதவி தேவை",
    priya_sub: "6 பணிகள் • 2 நாட்கள் வரவில்லை",
    btn_view_student_details: "[ மாணவர் முழு விவரங்களைப் பார் ]",
    village_comm_challenge_title: "🌍 கிராமத்து கற்றல் சவால்",
    comm_impact_sub: "சமூக அளவிலான தாக்கம்",
    comm_hero_badge: "🌍 மேலூர் கிராமத்து சுற்றுச்சூழல் பணி",
    comm_quest_q: "“உங்கள் சமூகம் நீர் விரயத்தைக் குறைக்க 3 வழிகளைக் கண்டறியுங்கள்.”",
    comm_quest_desc: "கிராமத்து குளங்கள் மற்றும் நிலத்தடி நீரைப் பாதுகாக்க குடும்பத்தினருடன் இணைந்து செயல்படுங்கள்.",
    challenge_progress_lbl: "சவால் முன்னேற்றம்:",
    comm_check1_title: "1. தெருவில் கசியும் பொதுக் குழாயை சரிசெய்தல்",
    comm_check1_desc: "புகைப்பட ஆதாரத்துடன் பஞ்சாயத்திற்கு தகவல் தெரிவிக்கப்பட்டது.",
    comm_check2_title: "2. சமையலறை நீரை வீட்டுத் தோட்டத்திற்கு திருப்புதல்",
    comm_check2_desc: "வாழை மற்றும் கத்தரி செடிகளுக்கு நீர் மறுபயன்பாடு செய்யப்பட்டது.",
    comm_check3_title: "3. கூரை மழைநீர் சேகரிப்பு தொட்டி அமைத்தல்",
    comm_check3_desc: "மழைக்கால தூய நீரை சேகரிக்க வாளி அமைக்கப்பட்டது.",
    btn_mark_done: "முடிந்தது என குறி",
    comm_reward_title: "வெகுமதி: +50 XP & சுற்றுச்சூழல் நாயகன் பதக்கம்",
    comm_reward_desc: "உங்கள் சுயவிவரத்தில் சிறப்புப் பதக்கம் திறக்கப்படும்!",
    btn_complete_challenge: "சவாலை முடிக்கவும் 🚀",
    nav_home: "முகப்பு",
    nav_subjects: "பாடங்கள்",
    nav_missions: "பணிகள்",
    nav_progress: "முன்னேற்றம்",
    nav_profile: "சுயவிவரம்",
    shop_modal_title: "🛒 கிராமத்து மளிகைக் கடை கணக்கு",
    shop_modal_desc: "பொருட்களைத் தேர்ந்தெடுத்து மொத்த பில் மற்றும் மீதிப் பணத்தைக் கணக்கிடுங்கள்.",
    shop_item_rice: "அரிசி",
    shop_item_jaggery: "வெல்லம்",
    shop_item_lentils: "பருப்பு",
    shop_total_bill_lbl: "மொத்த பில்:",
    shop_cash_given_lbl: "கொடுத்த பணம்:",
    shop_change_due_lbl: "தரவேண்டிய மீதி:",
    btn_shop_checkout: "பில் சரிபார்த்து +30 XP பெறு ➔",
    farm_modal_title: "🌾 நெல் அறுவடை எடை தராசு",
    farm_modal_desc: "ஒவ்வொரு மூட்டையும் 25 கிலோ. தராசில் மூட்டைகளை வைத்து மொத்த எடையைக் கணக்கிடுங்கள்.",
    bags_on_scale_lbl: "தராசில் உள்ள மூட்டைகள்:",
    btn_confirm_weight: "எடையை உறுதிசெய்து +30 XP பெறு ➔",
    cert_modal_title: "📜 கிராமத்து அறிஞர் சான்றிதழ்",
    btn_download_png: "💾 PNG பதிவிறக்கு",
    btn_print_cert: "🖨️ சான்றிதழ் அச்சிடு",
    stat_accuracy_lbl: "துல்லியம்",
    stat_missions_lbl: "பணிகள்",
    weak_topics_heading: "கவனம் தேவைப்படும் கருத்துகள்:",
    btn_send_targeted_quest: "நேரடி கிராமத்து பணியை அனுப்பு ➔"
  },

  // ---------------- ENGLISH ----------------
  en: {
    ctrl_teacher_view: "Teacher View",
    ctrl_student_view: "Student View",
    ctrl_online: "Online",
    ctrl_offline: "Offline",
    ctrl_sound_on: "Sound: ON",
    ctrl_sound_off: "Sound: OFF",
    ctrl_full_view: "Full View",
    ctrl_phone_shell: "Phone Shell",
    status_offline_badge: "OFFLINE",
    splash_tagline: "“Learn • Play • Grow”",
    splash_quote: "“Your village is your classroom.”",
    choose_language_lbl: "Choose Preferred Language:",
    btn_get_started: "Get Started",
    splash_sih_note: "AI-Powered Experiential Learning for Rural Schools",
    greeting_welcome: "Welcome, Student!",
    stat_streak_lbl: "Streak",
    today_mission_badge: "🌾 TODAY'S VILLAGE MISSION",
    today_mission_title: "“Find a plant near your home and learn 3 facts about it.”",
    today_mission_desc: "Connect real-life village flora with your Science curriculum. Use live camera or simulated lens.",
    reward_lbl: "Reward:",
    btn_start_mission: "Start Mission",
    grow_badge: "ADAPTIVE AI ENGINE",
    grow_title: "🌱 “Grow With Me” AI",
    grow_desc: "Personalized learning that adjusts automatically based on your answers.",
    explore_hub: "Explore & Learn",
    rural_curriculum_tag: "Rural Curriculum",
    grade_tag: "Grade 10",
    continue_learning: "Continue Learning",
    continue_sub: "Science: Plant Anatomy & Photosynthesis",
    offline_ready_tag: "Offline Ready",
    offline_learning: "Offline Learning",
    offline_sub: "4 Subject Packs Ready Offline (52 MB)",
    manage_downloads_cta: "Manage Downloads ➔",
    language_title: "Language & Voice",
    language_sub: "Tamil, English, Hindi, Odia with Voice Read-aloud",
    change_voice_cta: "Change Voice ➔",
    five_badges_tag: "5 Badges",
    my_progress: "My Progress",
    progress_sub: "Level 3 Village Scout • 12 Missions done",
    view_stats_cta: "View Stats ➔",
    comm_challenge_badge: "COMMUNITY CHALLENGE",
    comm_challenge_title: "Village Water Saver",
    comm_challenge_sub: "Collaborate with village peers: 2/3 complete",
    btn_view: "View",
    cert_banner_title: "Village Scholar Certificate",
    cert_banner_sub: "Generate & download your official achievement certificate",
    btn_claim_cert: "Claim ➔",
    teacher_shortcut_lbl: "👩‍🏫 Are you a Teacher?",
    teacher_shortcut_btn: "View Class Gap Insights ➔",
    missions_title: "Village Missions",
    missions_sub: "“Learn From Your World”",
    filter_all: "All Missions",
    filter_science: "🌱 Science",
    filter_math: "📐 Mathematics",
    filter_community: "🌍 Community",
    tag_science: "SCIENCE",
    tag_math: "MATHEMATICS",
    m1_title: "🌱 PLANT MISSION",
    m1_desc: "“Identify a plant near your home and learn 3 facts about it.”",
    m1_action: "Find Neem, Tulsi, or Moringa in your backyard.",
    m2_title: "💧 WATER MISSION",
    m2_desc: "“Find two ways your family can save water.”",
    m2_action: "Inspect rainwater collection and kitchen runoff usage.",
    m3_title: "🛒 SHOPPING MATH",
    m3_desc: "“Calculate the total cost of three items from a local shop.”",
    m3_action: "Buy rice, lentils, and jaggery; check the balance returned.",
    m4_title: "🌾 FARMING MATH",
    m4_desc: "“A farmer has 5 bags of rice. Each bag weighs 25 kg. Calculate the total weight.”",
    m4_action: "Apply multiplication to local harvest bags and tractor loads.",
    context_action_tag: "Real-World Action:",
    btn_listen: "Listen",
    btn_start_mission_cta: "Start Mission 🚀",
    btn_open_lab: "Open Lab 🚀",
    btn_open_shop: "Open Shop 🚀",
    btn_open_scale: "Open Scale 🚀",
    rw_sub: "Interactive Real-World Quest",
    step1_title: "STEP 1",
    step1_desc: "“Look around your home or school.”",
    step2_title: "STEP 2",
    step2_desc: "“Find a plant.”",
    step3_title: "STEP 3",
    step3_desc: "“Learn its name and one use.”",
    lens_status: "📷 Smart Botanical AI Lens",
    btn_switch_live_cam: "📹 Switch Live Camera",
    match_confidence: "98% Match",
    point_plant_lbl: "Point at plant or select:",
    btn_listen_local: "Listen in English",
    btn_scan_next: "📷 Scan Next",
    btn_full_lesson: "📚 Full Lesson",
    btn_complete_mission_xp: "🎉 Complete Mission (+30 XP)",
    adaptive_sub: "Adaptive AI Learning Engine",
    adaptive_banner_title: "“LearnQuest adjusts practice based on your answers.”",
    adaptive_banner_sub: "No student is left behind. When you find a topic tricky, LearnQuest offers simpler village-story examples before trying again.",
    simulate_perf_lbl: "Simulate Student Performance:",
    btn_scen_struggling: "⚠️ Low Score (Fractions)",
    btn_scen_mastered: "🌟 High Score (Mastery)",
    adaptive_struggle_title: "“Let's practice this topic again.”",
    adaptive_struggle_sub: "Don't worry! Math is just like sharing food with family.",
    frac_exp_heading: "Simple Explanation: What is a Fraction?",
    frac_exp_body: "A fraction simply means dividing a whole item into equal parts. If your mother bakes 1 warm Dosa and cuts it equally for you and your brother, each gets 1/2 (half)!",
    divide_dosa_lbl: "Divide Dosa into:",
    dosa_2_parts: "2 Parts (1/2)",
    dosa_4_parts: "4 Parts (1/4)",
    village_example_heading: "Easy Village Example",
    mango_story_title: "Mango Harvest Sharing:",
    mango_story_body: "Raju has 4 mangoes. He gives 1 mango to his sister. He gave away 1/4 of his mangoes!",
    guided_practice_heading: "Guided Practice Question",
    practice_fraction_q: "“If you divide a watermelon into 4 equal slices and eat 1 slice, what fraction did you eat?”",
    adaptive_master_title: "“Great! Ready for a harder question?”",
    adaptive_master_sub: "You have mastered basic fractions! Let's level up to rural land and crop distribution.",
    adv_farm_yield_heading: "Farming Yield Challenge",
    practice_adv_q: "“A village farmer has 12 acres of fertile land. He plants paddy on 1/3 of the land and sugarcane on 1/2 of the land. How many total acres are planted?”",
    subjects_title: "Choose Your Subject",
    subjects_curriculum_sub: "Grade 10 Rural Curriculum",
    three_subjects_tag: "3 Subjects",
    subj_math_title: "Mathematics",
    subj_math_sub: "Mathematics • Practical Village Calculations",
    topic_numbers: "🔢 Numbers",
    topic_multiplication: "✖️ Multiplication",
    topic_fractions: "🍰 Fractions",
    topic_money: "💰 Money calculations",
    btn_read_lesson: "Read Lesson 📖",
    btn_take_math_quiz: "Take Math Quiz ➔",
    subj_science_title: "Science",
    subj_science_sub: "Science • Nature, Flora & Ecosystems",
    topic_plants: "🌱 Plants",
    topic_human_body: "🫀 Human Body",
    topic_water: "💧 Water",
    topic_environment: "🌾 Environment",
    btn_take_science_quiz: "Take Science Quiz ➔",
    subj_english_title: "English",
    subj_english_sub: "English • Daily Rural Communication",
    topic_grammar: "✍️ Grammar",
    topic_vocabulary: "🔤 Vocabulary",
    topic_reading: "📖 Reading",
    topic_everyday: "🗣️ Everyday English",
    btn_take_english_quiz: "Take English Quiz ➔",
    btn_read: "Read",
    btn_practice_topic_quiz: "Practice Topic Quiz ➔",
    btn_submit_answer: "Submit Answer ➔",
    result_great_job: "Great Job!",
    result_subtitle: "You connected school learning with your village!",
    score_lbl: "Score",
    xp_earned_msg: "+30 XP Earned",
    new_badge_unlocked_ribbon: "🏆 NEW BADGE UNLOCKED!",
    badge_village_explorer: "“Village Explorer”",
    badge_explorer_desc: "Completed your first real-world plant identification & science quiz in the village!",
    btn_next_mission: "Next Mission 🚀",
    btn_view_progress: "View Progress 📊",
    btn_practice_grow: "🌱 Practice with Grow With Me",
    offline_screen_title: "📶 Offline Learning",
    offline_screen_sub: "Learn Without Internet",
    offline_ready_badge: "🟢 Offline Ready",
    offline_hero_title: "“Download lessons when internet is available and continue learning when you are offline.”",
    offline_hero_sub: "Zero internet required in the classroom or fields. All quizzes and missions run directly on your phone.",
    sim_network_lbl: "Simulate Network State:",
    btn_switch_to_offline: "Switch to Offline Mode",
    sync_offline_mode: "Offline Mode Active",
    sync_offline_desc: "“Your progress is saved on the device.”",
    btn_sync_now: "☁️ Sync Now",
    available_packs_heading: "Available Offline Packs",
    local_storage_tag: "Local Storage",
    pack_math_sub: "Grade 10 • 12 Lessons • 14 MB",
    pack_science_sub: "Grade 10 • 15 Lessons • 18 MB",
    pack_english_sub: "Grade 10 • 10 Lessons • 12 MB",
    pack_missions_sub: "20 Real-World Quests • 8 MB",
    downloaded_check: "Downloaded ✓",
    choose_lang_title: "🌐 Choose Your Language",
    multilingual_sub: "Multilingual Rural Support",
    lang_tag_primary: "Primary",
    trans_preview_lbl: "UI Translation Live Preview:",
    voice_assist_title: "Voice Assisted Learning",
    voice_assist_sub: "Read-aloud for low-literacy & first-generation learners",
    progress_title: "My Progress",
    milestones_sub: "Village Learning Milestones",
    stat_total_xp: "Total XP",
    badge_scout: "Village Scout",
    stat_missions_done: "Missions Done",
    subject_mastery_heading: "Subject Mastery",
    unlocked_badges_heading: "Unlocked Badges",
    five_earned_tag: "5 Earned",
    badge_first_learner: "First Learner",
    badge_water_saver: "Water Saver",
    badge_quiz_master: "Quiz Master",
    badge_learning_champion: "Learning Champion",
    badge_eco_champion: "Eco Champion",
    unlocked_tag: "Unlocked",
    community_quest_tag: "Community Quest",
    btn_generate_cert: "📜 Generate Village Scholar Certificate",
    profile_title: "👤 Profile",
    student_account_sub: "Student Account",
    class_lbl: "Class",
    language_lbl: "Language",
    level_lbl: "Level",
    btn_edit_profile: "✏️ Edit Profile",
    btn_settings: "⚙️ Settings",
    teacher_mode_title: "Teacher Dashboard Mode",
    teacher_mode_sub: "View class analytics & learning gap insights",
    btn_switch_view: "Switch View ➔",
    app_tagline_footer: "“Learn from your world, grow with your community.”",
    sih_footer_note: "SIH25048 • Smart India Hackathon Prototype",
    edit_profile_title: "✏️ Edit Profile",
    edit_profile_sub: "Update Student Details",
    choose_avatar_lbl: "Choose Avatar:",
    student_name_lbl: "Student Name:",
    class_grade_lbl: "Class / Grade:",
    primary_lang_lbl: "Primary Language:",
    school_village_lbl: "School / Village Name:",
    btn_cancel: "Cancel",
    btn_save_changes: "Save Changes ✓",
    teacher_dashboard_title: "👩‍🏫 Class Learning Insights",
    teacher_school_sub: "Grade 10 • Melur Village School",
    btn_student_view: "Student View ➔",
    total_students_lbl: "Total Students",
    active_learners_lbl: "Active Learners",
    missions_done_lbl: "Missions Done",
    class_subject_averages: "📊 Class Subject Averages",
    weekly_realtime_tag: "Weekly Real-Time",
    students_needing_support: "Students Needing Support",
    gap_analytics_sub: "Identified via automated real-world quiz & mission analytics",
    gap1_title: "Fractions (Math)",
    gap1_sub: "5 students need additional practice in Fractions.",
    gap2_title: "Plants & Root Absorption (Science)",
    gap2_sub: "4 students struggling with Plant Anatomy terminology.",
    gap3_title: "Past Tense Grammar (English)",
    gap3_sub: "3 students need revision on regular verbs.",
    btn_assign_remedial: "Assign Remedial ➔",
    student_roster_heading: "👥 Student Roster Progress",
    filter_needs_help: "Filter: Needs Help",
    badge_on_track: "On Track 🌟",
    badge_needs_practice: "Needs Practice ⚠️",
    badge_top_learner: "Top Learner 🏆",
    badge_needs_nudge: "Needs Nudge 📩",
    ananya_sub: "Missions: 8 • Needs help in Fractions",
    priya_sub: "Missions: 6 • Inactive 2 days",
    btn_view_student_details: "[ View Student Progress Details ]",
    village_comm_challenge_title: "🌍 Village Learning Challenge",
    comm_impact_sub: "Community-Wide Impact",
    comm_hero_badge: "🌍 Melur Village Eco Mission",
    comm_quest_q: "“Find 3 ways your community can reduce water waste.”",
    comm_quest_desc: "Work with your family and neighbors to protect village water tables and tanks (குளம்).",
    challenge_progress_lbl: "Challenge Progress:",
    comm_check1_title: "1. Fix leaking public tap in Melur street",
    comm_check1_desc: "Reported to village Panchayat with photo proof.",
    comm_check2_title: "2. Divert kitchen wastewater to vegetable garden",
    comm_check2_desc: "Greywater reused for banana and brinjal plants.",
    comm_check3_title: "3. Place a rooftop rainwater catchment bucket",
    comm_check3_desc: "Collect clean runoff during evening rains.",
    btn_mark_done: "Mark Done",
    comm_reward_title: "Reward: +50 XP & Eco Champion Badge",
    comm_reward_desc: "Unlocks special community badge on your profile!",
    btn_complete_challenge: "Complete Challenge 🚀",
    nav_home: "Home",
    nav_subjects: "Subjects",
    nav_missions: "Missions",
    nav_progress: "Progress",
    nav_profile: "Profile",
    shop_modal_title: "🛒 Village Kirana Store Math",
    shop_modal_desc: "Select grocery items and calculate customer bill & change.",
    shop_item_rice: "Rice",
    shop_item_jaggery: "Jaggery",
    shop_item_lentils: "Lentils",
    shop_total_bill_lbl: "Total Bill:",
    shop_cash_given_lbl: "Cash Given:",
    shop_change_due_lbl: "Change Due:",
    btn_shop_checkout: "Verify Bill & Earn +30 XP ➔",
    farm_modal_title: "🌾 Rice Harvest Weighing Scale",
    farm_modal_desc: "Each bag weighs 25 kg. Place bags on scale to calculate total harvest load.",
    bags_on_scale_lbl: "Bags on scale:",
    btn_confirm_weight: "Confirm Weight & Earn +30 XP ➔",
    cert_modal_title: "📜 Village Scholar Certificate",
    btn_download_png: "💾 Download PNG",
    btn_print_cert: "🖨️ Print Certificate",
    stat_accuracy_lbl: "Accuracy",
    stat_missions_lbl: "Missions",
    weak_topics_heading: "Concepts Needing Focus:",
    btn_send_targeted_quest: "Send Targeted Village Quest ➔"
  },

  // ---------------- HINDI (हिन्दी) ----------------
  hi: {
    ctrl_teacher_view: "शिक्षक दृश्य",
    ctrl_student_view: "विद्यार्थी दृश्य",
    ctrl_online: "ऑनलाइन",
    ctrl_offline: "ऑफ़लाइन",
    ctrl_sound_on: "ध्वनि: चालू",
    ctrl_sound_off: "ध्वनि: बंद",
    ctrl_full_view: "फुल स्क्रीन",
    ctrl_phone_shell: "मोबाइल फ्रेम",
    status_offline_badge: "ऑफ़लाइन",
    splash_tagline: "“सीखें • खेलें • आगे बढ़ें”",
    splash_quote: "“आपका गाँव ही आपकी कक्षा है।”",
    choose_language_lbl: "पसंदीदा भाषा चुनें:",
    btn_get_started: "सीखना शुरू करें",
    splash_sih_note: "ग्रामीण स्कूलों के लिए AI-आधारित लर्निंग प्लेटफॉर्म",
    greeting_welcome: "नमस्ते, विद्यार्थी!",
    stat_streak_lbl: "लगातार दिन",
    today_mission_badge: "🌾 आज का गाँव मिशन",
    today_mission_title: "“अपने घर के पास एक पौधा खोजें और उसके 3 तथ्य सीखें।”",
    today_mission_desc: "गाँव की वनस्पतियों को अपने विज्ञान से जोड़ें। लाइव कैमरा या लेंस का उपयोग करें।",
    reward_lbl: "पुरस्कार:",
    btn_start_mission: "मिशन शुरू करें",
    grow_badge: "एडाप्टिव AI लर्निंग",
    grow_title: "🌱 “मेरे साथ सीखें” AI",
    grow_desc: "व्यक्तिगत शिक्षा जो आपके उत्तरों के अनुसार ढलती है।",
    explore_hub: "खोजें और सीखें",
    rural_curriculum_tag: "ग्रामीण पाठ्यक्रम",
    grade_tag: "कक्षा 10",
    continue_learning: "सीखना जारी रखें",
    continue_sub: "विज्ञान: पौधों के अंग और प्रकाश संश्लेषण",
    offline_ready_tag: "ऑफ़लाइन तैयार",
    offline_learning: "ऑफ़लाइन पढ़ाई",
    offline_sub: "4 विषय पैक उपलब्ध (52 MB)",
    manage_downloads_cta: "डाउनलोड प्रबंधित करें ➔",
    language_title: "भाषा और आवाज",
    language_sub: "तमिल, अंग्रेजी, हिन्दी, ओडिया आवाज के साथ",
    change_voice_cta: "आवाज बदलें ➔",
    five_badges_tag: "5 बैज",
    my_progress: "मेरी प्रगति",
    progress_sub: "लेवल 3 ग्रामीण गाइड • 12 मिशन पूरे",
    view_stats_cta: "प्रगति देखें ➔",
    comm_challenge_badge: "सामुदायिक चुनौती",
    comm_challenge_title: "गाँव जल संरक्षक",
    comm_challenge_sub: "गाँव के साथियों के साथ: 2/3 पूर्ण",
    btn_view: "देखें",
    cert_banner_title: "ग्रामीण स्कॉलर प्रमाणपत्र",
    cert_banner_sub: "अपना आधिकारिक उपलब्धि प्रमाणपत्र प्राप्त करें और डाउनलोड करें",
    btn_claim_cert: "प्राप्त करें ➔",
    teacher_shortcut_lbl: "👩‍🏫 क्या आप शिक्षक हैं?",
    teacher_shortcut_btn: "कक्षा की कमजोरियां देखें ➔",
    missions_title: "गाँव के मिशन",
    missions_sub: "“अपनी दुनिया से सीखें”",
    filter_all: "सभी मिशन",
    filter_science: "🌱 विज्ञान",
    filter_math: "📐 गणित",
    filter_community: "🌍 समुदाय",
    tag_science: "विज्ञान",
    tag_math: "गणित",
    m1_title: "🌱 पौधा मिशन",
    m1_desc: "“अपने घर के पास एक पौधा खोजें और उसके 3 तथ्य सीखें।”",
    m1_action: "अपने आँगन में नीम, तुलसी या सहजन खोजें।",
    m2_title: "💧 जल मिशन",
    m2_desc: "“पानी बचाने के दो तरीके खोजें।”",
    m2_action: "वर्षा जल संचयन और रसोई के पानी के पुनर्चक्रण का निरीक्षण करें।",
    m3_title: "🛒 किराने की दुकान गणित",
    m3_desc: "“गाँव की दुकान से 3 वस्तुओं की कुल कीमत और बाकी राशि की गणना करें।”",
    m3_action: "चावल, दाल, गुड़ खरीदकर शेष राशि की जांच करें।",
    m4_title: "🌾 कृषि गणित",
    m4_desc: "“एक किसान के पास 5 बोरी चावल हैं। प्रत्येक का वजन 25 किलो है। कुल वजन की गणना करें।”",
    m4_action: "फसल बोरियों पर गुणन सारणी का प्रयोग करें।",
    context_action_tag: "गाँव की वास्तविक गतिविधि:",
    btn_listen: "सुनें",
    btn_start_mission_cta: "मिशन शुरू करें 🚀",
    btn_open_lab: "लैब खोलें 🚀",
    btn_open_shop: "दुकान खोलें 🚀",
    btn_open_scale: "तराजू खोलें 🚀",
    rw_sub: "वास्तविक गाँव खोज",
    step1_title: "चरण 1",
    step1_desc: "“अपने घर या स्कूल के आसपास देखें।”",
    step2_title: "चरण 2",
    step2_desc: "“एक पौधा खोजें।”",
    step3_title: "चरण 3",
    step3_desc: "“उसका नाम और एक उपयोग सीखें।”",
    lens_status: "📷 स्मार्ट बॉटनिकल AI लेंस",
    btn_switch_live_cam: "📹 लाइव कैमरा",
    match_confidence: "98% मिलान",
    point_plant_lbl: "पौधे पर कैमरा लगाएं या चुनें:",
    btn_listen_local: "हिन्दी में सुनें",
    btn_scan_next: "📷 अगला पौधा स्कैन करें",
    btn_full_lesson: "📚 पूरा पाठ",
    btn_complete_mission_xp: "🎉 मिशन पूरा करें (+30 XP)",
    adaptive_sub: "अनुकूली AI लर्निंग इंजन",
    adaptive_banner_title: "“LearnQuest आपके उत्तरों के अनुसार अभ्यास को ढालता है।”",
    adaptive_banner_sub: "कोई भी छात्र पीछे नहीं छूटता! अगर कोई विषय कठिन लगे, तो गाँव की सरल कहानियों से दोबारा समझाया जाता है।",
    simulate_perf_lbl: "छात्र प्रदर्शन का अनुकरण करें:",
    btn_scen_struggling: "⚠️ कम अंक (भिन्न)",
    btn_scen_mastered: "🌟 उच्च अंक (महारत)",
    adaptive_struggle_title: "“आइए इस विषय का फिर से अभ्यास करें।”",
    adaptive_struggle_sub: "चिंता न करें! गणित परिवार के साथ भोजन बांटने जैसा ही है।",
    frac_exp_heading: "सरल व्याख्या: भिन्न क्या है?",
    frac_exp_body: "भिन्न का अर्थ है किसी पूरी वस्तु को बराबर भागों में बांटना। यदि 1 डोसा आपके और आपके भाई के बीच बराबर काटा जाए, तो प्रत्येक को 1/2 (आधा) मिलता है!",
    divide_dosa_lbl: "डोसा को विभाजित करें:",
    dosa_2_parts: "2 भाग (1/2)",
    dosa_4_parts: "4 भाग (1/4)",
    village_example_heading: "सरल ग्रामीण उदाहरण",
    mango_story_title: "आम बांटने की कहानी:",
    mango_story_body: "राजू के पास 4 आम हैं। उसने 1 आम अपनी बहन को दिया। उसने 1/4 भाग दिया!",
    guided_practice_heading: "मार्गदर्शित अभ्यास प्रश्न",
    practice_fraction_q: "“यदि आप तरबूज को 4 बराबर टुकड़ों में काटते हैं और 1 टुकड़ा खाते हैं, तो आपने कितना भिन्न खाया?”",
    adaptive_master_title: "“बहुत बढ़िया! कठिन प्रश्न के लिए तैयार?”",
    adaptive_master_sub: "आपने बुनियादी भिन्न सीख लिया है! अब खेत की पैदावार गणना की ओर बढ़ें।",
    adv_farm_yield_heading: "कृषि उपज चुनौती",
    practice_adv_q: "“एक किसान के पास 12 एकड़ उपजाऊ भूमि है। वह 1/3 पर धान और 1/2 पर गन्ना उगाता है। कुल कितने एकड़ भूमि पर बुवाई हुई?”",
    subjects_title: "विषय चुनें",
    subjects_curriculum_sub: "कक्षा 10 ग्रामीण पाठ्यक्रम",
    three_subjects_tag: "3 विषय",
    subj_math_title: "गणित (Mathematics)",
    subj_math_sub: "गणित • दैनिक ग्रामीण गणनाएं",
    topic_numbers: "🔢 संख्याएं",
    topic_multiplication: "✖️ गुणा",
    topic_fractions: "🍰 भिन्न",
    topic_money: "💰 मुद्रा गणना",
    btn_read_lesson: "पाठ पढ़ें 📖",
    btn_take_math_quiz: "गणित Quiz ➔",
    subj_science_title: "विज्ञान (Science)",
    subj_science_sub: "विज्ञान • प्रकृति, पौधे और पर्यावरण",
    topic_plants: "🌱 पौधे",
    topic_human_body: "🫀 मानव शरीर",
    topic_water: "💧 जल प्रबंधन",
    topic_environment: "🌾 पर्यावरण",
    btn_take_science_quiz: "विज्ञान Quiz ➔",
    subj_english_title: "अंग्रेजी (English)",
    subj_english_sub: "अंग्रेजी • दैनिक बोलचाल",
    topic_grammar: "✍️ व्याकरण",
    topic_vocabulary: "🔤 शब्दावली",
    topic_reading: "📖 पढ़ना",
    topic_everyday: "🗣️ दैनिक अंग्रेजी",
    btn_take_english_quiz: "अंग्रेजी Quiz ➔",
    btn_read: "पढ़ें",
    btn_practice_topic_quiz: "विषय क्विज खेलें ➔",
    btn_submit_answer: "उत्तर जमा करें ➔",
    result_great_job: "शाबाश! बहुत अच्छा!",
    result_subtitle: "आपने स्कूल की पढ़ाई को अपने गाँव से जोड़ दिया!",
    score_lbl: "स्कोर",
    xp_earned_msg: "+30 XP अर्जित",
    new_badge_unlocked_ribbon: "🏆 नया बैज अनलॉक हुआ!",
    badge_village_explorer: "“गाँव का खोजकर्ता”",
    badge_explorer_desc: "आपने अपना पहला वास्तविक पौधा सर्वेक्षण और क्विज सफलतापूर्वक पूरा किया!",
    btn_next_mission: "अगला मिशन 🚀",
    btn_view_progress: "प्रगति देखें 📊",
    btn_practice_grow: "🌱 “मेरे साथ सीखें” अभ्यास करें",
    offline_screen_title: "📶 ऑफ़लाइन पढ़ाई",
    offline_screen_sub: "इंटरनेट के बिना कहीं भी सीखें",
    offline_ready_badge: "🟢 ऑफ़लाइन तैयार",
    offline_hero_title: "“इंटरनेट होने पर पाठ डाउनलोड करें और ऑफ़लाइन होने पर भी सीखते रहें।”",
    offline_hero_sub: "खेतों या कक्षाओं में इंटरनेट की आवश्यकता नहीं। सभी पाठ सीधे आपके फोन पर चलते हैं।",
    sim_network_lbl: "नेटवर्क स्थिति का परीक्षण करें:",
    btn_switch_to_offline: "ऑफ़लाइन मोड पर जाएं",
    sync_offline_mode: "ऑफ़लाइन मोड सक्रिय",
    sync_offline_desc: "“आपकी प्रगति फोन में सुरक्षित है।”",
    btn_sync_now: "☁️ अभी सिंक करें",
    available_packs_heading: "उपलब्ध ऑफ़लाइन पैक",
    local_storage_tag: "स्थानीय स्टोरेज",
    pack_math_sub: "कक्षा 10 • 12 पाठ • 14 MB",
    pack_science_sub: "कक्षा 10 • 15 पाठ • 18 MB",
    pack_english_sub: "कक्षा 10 • 10 पाठ • 12 MB",
    pack_missions_sub: "20 ग्रामीण मिशन • 8 MB",
    downloaded_check: "डाउनलोड हो गया ✓",
    choose_lang_title: "🌐 अपनी भाषा चुनें",
    multilingual_sub: "ग्रामीण बहुभाषी समर्थन",
    lang_tag_primary: "प्राथमिक",
    trans_preview_lbl: "लाइव अनुवाद पूर्वावलोकन:",
    voice_assist_title: "आवाज सहायता से सीखें",
    voice_assist_sub: "पढ़ने में कठिनाई महसूस करने वाले छात्रों के लिए ऑडियो सुविधा",
    progress_title: "मेरी प्रगति",
    milestones_sub: "ग्रामीण लर्निंग मील के पत्थर",
    stat_total_xp: "कुल XP",
    badge_scout: "ग्रामीण गाइड",
    stat_missions_done: "पूर्ण मिशन",
    subject_mastery_heading: "विषय दक्षता",
    unlocked_badges_heading: "अनलॉक किए गए बैज",
    five_earned_tag: "5 अर्जित",
    badge_first_learner: "पहला शिक्षार्थी",
    badge_water_saver: "जल रक्षक",
    badge_quiz_master: "क्विज मास्टर",
    badge_learning_champion: "लर्निंग चैंपियन",
    badge_eco_champion: "पर्यावरण रक्षक",
    unlocked_tag: "अनलॉक",
    community_quest_tag: "सामुदायिक खोज",
    btn_generate_cert: "📜 ग्रामीण स्कॉलर प्रमाणपत्र बनाएं",
    profile_title: "👤 प्रोफ़ाइल",
    student_account_sub: "विद्यार्थी खाता",
    class_lbl: "कक्षा",
    language_lbl: "भाषा",
    level_lbl: "लेवल",
    btn_edit_profile: "✏️ प्रोफ़ाइल संपादित करें",
    btn_settings: "⚙️ सेटिंग्स",
    teacher_mode_title: "शिक्षक डैशबोर्ड मोड",
    teacher_mode_sub: "कक्षा के आंकड़े और कमजोरियां देखें",
    btn_switch_view: "दृश्य बदलें ➔",
    app_tagline_footer: "“अपनी दुनिया से सीखें, समुदाय के साथ आगे बढ़ें।”",
    sih_footer_note: "SIH25048 • स्मार्ट इंडिया हैकाथॉन प्रोटोटाइप",
    edit_profile_title: "✏️ प्रोफ़ाइल संपादित करें",
    edit_profile_sub: "छात्र विवरण अपडेट करें",
    choose_avatar_lbl: "अवतार चुनें:",
    student_name_lbl: "छात्र का नाम:",
    class_grade_lbl: "कक्षा:",
    primary_lang_lbl: "मुख्य भाषा:",
    school_village_lbl: "स्कूल / गाँव का नाम:",
    btn_cancel: "रद्द करें",
    btn_save_changes: "परिवर्तन सहेजें ✓",
    teacher_dashboard_title: "👩‍🏫 कक्षा लर्निंग अंतर्दृष्टि",
    teacher_school_sub: "कक्षा 10 • सरकारी स्कूल, मेलूर",
    btn_student_view: "विद्यार्थी दृश्य ➔",
    total_students_lbl: "कुल विद्यार्थी",
    active_learners_lbl: "सक्रिय विद्यार्थी",
    missions_done_lbl: "पूर्ण मिशन",
    class_subject_averages: "📊 कक्षा औसत अंक",
    weekly_realtime_tag: "साप्ताहिक रीयल-टाइम",
    students_needing_support: "सहायता की आवश्यकता वाले छात्र",
    gap_analytics_sub: "स्वचालित क्विज विश्लेषण द्वारा पहचाना गया",
    gap1_title: "भिन्न (गणित)",
    gap1_sub: "5 छात्रों को भिन्न में अतिरिक्त अभ्यास की आवश्यकता है।",
    gap2_title: "पौधों के अंग (विज्ञान)",
    gap2_sub: "4 छात्रों को जाइलम जल संवहन समझने में कठिनाई है।",
    gap3_title: "भूतकाल व्याकरण (अंग्रेजी)",
    gap3_sub: "3 छात्रों को क्रियाओं में सुधार की आवश्यकता है।",
    btn_assign_remedial: "उपचारात्मक कार्य दें ➔",
    student_roster_heading: "👥 छात्र सूची प्रगति",
    filter_needs_help: "फ़िल्टर: जिन्हें मदद चाहिए",
    badge_on_track: "सही दिशा में 🌟",
    badge_needs_practice: "अभ्यास चाहिए ⚠️",
    badge_top_learner: "सर्वश्रेष्ठ छात्र 🏆",
    badge_needs_nudge: "ध्यान दें 📩",
    ananya_sub: "8 मिशन • भिन्न में मदद चाहिए",
    priya_sub: "6 मिशन • 2 दिन से अनुपस्थित",
    btn_view_student_details: "[ छात्र का पूरा विवरण देखें ]",
    village_comm_challenge_title: "🌍 ग्रामीण शिक्षा चुनौती",
    comm_impact_sub: "समुदाय स्तर का प्रभाव",
    comm_hero_badge: "🌍 मेलूर गाँव पर्यावरण मिशन",
    comm_quest_q: "“अपने समुदाय में पानी की बर्बादी रोकने के 3 तरीके खोजें।”",
    comm_quest_desc: "गाँव के तालाबों और भूजल की सुरक्षा के लिए परिवार के साथ काम करें।",
    challenge_progress_lbl: "चुनौती प्रगति:",
    comm_check1_title: "1. सार्वजनिक नल का रिसाव ठीक किया",
    comm_check1_desc: "पंचायत को फोटो के साथ सूचना दी गई।",
    comm_check2_title: "2. रसोई के पानी को सब्जियों के बगीचे में डाला",
    comm_check2_desc: "केले और बैंगन के पौधों के लिए पानी का पुनर्चक्रण किया गया।",
    comm_check3_title: "3. छत पर वर्षा जल संचयन बाल्टी लगाई",
    comm_check3_desc: "बारिश का साफ पानी इकट्ठा किया गया।",
    btn_mark_done: "पूर्ण हुआ",
    comm_reward_title: "पुरस्कार: +50 XP और पर्यावरण रक्षक बैज",
    comm_reward_desc: "आपकी प्रोफ़ाइल पर विशेष बैज अनलॉक होगा!",
    btn_complete_challenge: "चुनौती पूरी करें 🚀",
    nav_home: "होम",
    nav_subjects: "विषय",
    nav_missions: "मिशन",
    nav_progress: "प्रगति",
    nav_profile: "प्रोफ़ाइल",
    shop_modal_title: "🛒 गाँव की किराने की दुकान गणित",
    shop_modal_desc: "सामान चुनें और कुल बिल तथा बाकी पैसे की गणना करें।",
    shop_item_rice: "चावल",
    shop_item_jaggery: "गुड़",
    shop_item_lentils: "दाल",
    shop_total_bill_lbl: "कुल बिल:",
    shop_cash_given_lbl: "दिया गया नकद:",
    shop_change_due_lbl: "बकाया राशि:",
    btn_shop_checkout: "बिल जांचें और +30 XP पाएं ➔",
    farm_modal_title: "🌾 धान की फसल वजन तराजू",
    farm_modal_desc: "प्रत्येक बोरी 25 किलो की है। कुल वजन की गणना करें।",
    bags_on_scale_lbl: "तराजू पर बोरियां:",
    btn_confirm_weight: "वजन की पुष्टि करें और +30 XP पाएं ➔",
    cert_modal_title: "📜 ग्रामीण स्कॉलर प्रमाणपत्र",
    btn_download_png: "💾 PNG डाउनलोड करें",
    btn_print_cert: "🖨️ प्रमाणपत्र प्रिंट करें",
    stat_accuracy_lbl: "सटीकता",
    stat_missions_lbl: "मिशन",
    weak_topics_heading: "जिन अवधारणाओं पर ध्यान देना है:",
    btn_send_targeted_quest: "सीधा ग्रामीण मिशन भेजें ➔"
  },

  // ---------------- ODIA (ଓଡ଼ିଆ) ----------------
  or: {
    ctrl_teacher_view: "ଶିକ୍ଷକ ଦୃଶ୍ୟ",
    ctrl_student_view: "ଛାତ୍ର ଦୃଶ୍ୟ",
    ctrl_online: "ଅନଲାଇନ୍",
    ctrl_offline: "ଅଫଲାଇନ୍",
    ctrl_sound_on: "ଶବ୍ଦ: ଅନ୍",
    ctrl_sound_off: "ଶବ୍ଦ: ଅଫ୍",
    ctrl_full_view: "ପୂର୍ଣ୍ଣ ଦୃଶ୍ୟ",
    ctrl_phone_shell: "ମୋବାଇଲ୍ ଫ୍ରେମ୍",
    status_offline_badge: "ଅଫଲାଇନ୍",
    splash_tagline: "“ଶିଖନ୍ତୁ • ଖେଳନ୍ତୁ • ବଢ଼ନ୍ତୁ”",
    splash_quote: "“ଆପଣଙ୍କ ଗ୍ରାମ ହିଁ ଆପଣଙ୍କ ଶ୍ରେଣୀଗୃହ।”",
    choose_language_lbl: "ପସନ୍ଦର ଭାଷା ବାଛନ୍ତୁ:",
    btn_get_started: "ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ",
    splash_sih_note: "ଗ୍ରାମାଞ୍ଚଳ ବିଦ୍ୟାଳୟ ପାଇଁ AI-ଆଧାରିତ ଶିକ୍ଷା ପ୍ଲାଟଫର୍ମ",
    greeting_welcome: "ନମସ୍କାର, ଛାତ୍ର!",
    stat_streak_lbl: "ଧାରାବାହିକ ଦିନ",
    today_mission_badge: "🌾 ଆଜିର ଗ୍ରାମ ମିଶନ",
    today_mission_title: "“ନିଜ ଘର ପାଖରେ ଗଛଟିଏ ଖୋଜି ୩ଟି ତଥ୍ୟ ଶିଖନ୍ତୁ।”",
    today_mission_desc: "ଗାଁର ଗଛଲତାକୁ ବିଜ୍ଞାନ ସହ ଯୋଡନ୍ତୁ। ଲାଇଭ କ୍ୟାମେରା ବ୍ୟବହାର କରନ୍ତୁ।",
    reward_lbl: "ପୁରସ୍କାର:",
    btn_start_mission: "ମିଶନ ଆରମ୍ଭ କରନ୍ତୁ",
    grow_badge: "ଆଡାପ୍ଟିଭ୍ AI ଲର୍ଣ୍ଣିଂ",
    grow_title: "🌱 “ମୋ ସହ ବଢ଼ନ୍ତୁ” AI",
    grow_desc: "ଆପଣଙ୍କ ଉତ୍ତର ଅନୁଯାୟୀ ବଦଳୁଥିବା ଶିକ୍ଷା।",
    explore_hub: "ଅନ୍ୱେଷଣ ଏବଂ ଶିଖନ୍ତୁ",
    rural_curriculum_tag: "ଗ୍ରାମ୍ୟ ପାଠ୍ୟକ୍ରମ",
    grade_tag: "ଦଶମ ଶ୍ରେଣୀ",
    continue_learning: "ଶିଖିବା ଜାରି ରଖନ୍ତୁ",
    continue_sub: "ବିଜ୍ଞାନ: ଉଦ୍ଭିଦ ଅଙ୍ଗ ଏବଂ ଆଲୋକ ସଂଶ୍ଳେଷଣ",
    offline_ready_tag: "ଅଫଲାଇନ୍ ପ୍ରସ୍ତୁତ",
    offline_learning: "ଅଫଲାଇନ ଶିକ୍ଷା",
    offline_sub: "୪ଟି ବିଷୟ ପ୍ୟାକ୍ ଉପଲବ୍ଧ (52 MB)",
    manage_downloads_cta: "ଡାଉନଲୋଡ୍ ପରିଚାଳନା ➔",
    language_title: "ଭାଷା ଏବଂ ସ୍ୱର",
    language_sub: "ତାମିଲ, ଇଂରାଜୀ, ହିନ୍ଦୀ, ଓଡ଼ିଆ ସ୍ୱର ସହିତ",
    change_voice_cta: "ସ୍ୱର ପରିବର୍ତ୍ତନ ➔",
    five_badges_tag: "୫ଟି ବ୍ୟାଜ୍",
    my_progress: "ମୋର ପ୍ରଗତି",
    progress_sub: "ଲେଭଲ ୩ ଗ୍ରାମ୍ୟ ଗାଇଡ୍ • ୧୨ଟି ମିଶନ ସମାପ୍ତ",
    view_stats_cta: "ପ୍ରଗତି ଦେଖନ୍ତୁ ➔",
    comm_challenge_badge: "ସାମୂହିକ ଆହ୍ୱାନ",
    comm_challenge_title: "ଗ୍ରାମ ଜଳ ସଂରକ୍ଷକ",
    comm_challenge_sub: "ସାଙ୍ଗମାନଙ୍କ ସହିତ: ୨/୩ ପୂର୍ଣ୍ଣ",
    btn_view: "ଦେଖନ୍ତୁ",
    cert_banner_title: "ଗ୍ରାମ୍ୟ ସ୍କଲାର ପ୍ରମାଣପତ୍ର",
    cert_banner_sub: "ଆପଣଙ୍କ ସଫଳତା ପ୍ରମାଣପତ୍ର ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
    btn_claim_cert: "ହାସଲ କରନ୍ତୁ ➔",
    teacher_shortcut_lbl: "👩‍🏫 ଆପଣ ଶିକ୍ଷକ କି?",
    teacher_shortcut_btn: "ଶ୍ରେଣୀ ବିଶ୍ଳେଷଣ ଦେଖନ୍ତୁ ➔",
    missions_title: "ଗ୍ରାମ ମିଶନ",
    missions_sub: "“ନିଜ ଦୁନିଆରୁ ଶିଖନ୍ତୁ”",
    filter_all: "ସମସ୍ତ ମିଶନ",
    filter_science: "🌱 ବିଜ୍ଞାନ",
    filter_math: "📐 ଗଣିତ",
    filter_community: "🌍 ସମୁଦାୟ",
    tag_science: "ବିଜ୍ଞାନ",
    tag_math: "ଗଣିତ",
    m1_title: "🌱 ଉଦ୍ଭିଦ ମିଶନ",
    m1_desc: "“ନିଜ ଘର ପାଖରେ ଗଛଟିଏ ଖୋଜି ୩ଟି ତଥ୍ୟ ଶିଖନ୍ତୁ।”",
    m1_action: "ବାଡ଼ିରେ ଥିବା ନିମ୍ବ, ତୁଳସୀ କିମ୍ବା ସଜନା ଗଛ ଖୋଜନ୍ତୁ।",
    m2_title: "💧 ଜଳ ମିଶନ",
    m2_desc: "“ପାଣି ବଞ୍ଚାଇବାର ଦୁଇଟି ଉପାୟ ଖୋଜନ୍ତୁ।”",
    m2_action: "ବର୍ଷା ଜଳ ଅମଳ ଏବଂ ପୁନଃବ୍ୟବହାର ଦେଖନ୍ତୁ।",
    m3_title: "🛒 ଦୋକାନ ଗଣିତ",
    m3_desc: "“ଗାଁ ଦୋକାନରୁ ୩ଟି ଜିନିଷର ମୋଟ ଦାମ ହିସାବ କରନ୍ତୁ।”",
    m3_action: "ଚାଉଳ, ଡାଲି ଏବଂ ଗୁଡ଼ କିଣି ବାକି ଟଙ୍କା ଗଣନ୍ତୁ।",
    m4_title: "🌾 କୃଷି ଗଣିତ",
    m4_desc: "“ଜଣେ ଚାଷୀଙ୍କ ପାଖରେ ୫ ବସ୍ତା ଧାନ ଅଛି। ପ୍ରତ୍ୟେକର ଓଜନ ୨୫ କିଗ୍ରା। ମୋଟ ଓଜନ ଗଣନା କରନ୍ତୁ।”",
    m4_action: "ଗୁଣନ ନିୟମ ପ୍ରୟୋଗ କରନ୍ତୁ।",
    context_action_tag: "ବାସ୍ତବ ଗ୍ରାମ କାର୍ଯ୍ୟ:",
    btn_listen: "ଶୁଣନ୍ତୁ",
    btn_start_mission_cta: "ମିଶନ ଆରମ୍ଭ କରନ୍ତୁ 🚀",
    btn_open_lab: "ଲ୍ୟାବ୍ ଖୋଲନ୍ତୁ 🚀",
    btn_open_shop: "ଦୋକାନ ଖୋଲନ୍ତୁ 🚀",
    btn_open_scale: "ନିକିତି ଖୋଲନ୍ତୁ 🚀",
    rw_sub: "ଗ୍ରାମ୍ୟ ଅନୁସନ୍ଧାନ",
    step1_title: "ପଦକ୍ଷେପ ୧",
    step1_desc: "“ଘର କିମ୍ବା ବିଦ୍ୟାଳୟ ଚାରିପାଖ ଦେଖନ୍ତୁ।”",
    step2_title: "ପଦକ୍ଷେପ ୨",
    step2_desc: "“ଗୋଟିଏ ଗଛ ଖୋଜନ୍ତୁ।”",
    step3_title: "ପଦକ୍ଷେପ ୩",
    step3_desc: "“ତାର ନାମ ଏବଂ ଗୋଟିଏ ବ୍ୟବହାର ଶିଖନ୍ତୁ।”",
    lens_status: "📷 ବଟାନିକାଲ AI ଲେନ୍ସ",
    btn_switch_live_cam: "📹 ଲାଇଭ କ୍ୟାମେରା",
    match_confidence: "୯୮% ମିଳନ",
    point_plant_lbl: "ଗଛ ଉପରେ କ୍ୟାମେରା ରଖନ୍ତୁ କିମ୍ବା ବାଛନ୍ତୁ:",
    btn_listen_local: "ଓଡ଼ିଆରେ ଶୁଣନ୍ତୁ",
    btn_scan_next: "📷 ପରବର୍ତ୍ତୀ ସ୍କାନ କରନ୍ତୁ",
    btn_full_lesson: "📚 ସମ୍ପୂର୍ଣ୍ଣ ପାଠ",
    btn_complete_mission_xp: "🎉 ମିଶନ ସମାପ୍ତ (+30 XP)",
    adaptive_sub: "ଆଡାପ୍ଟିଭ୍ AI ଲର୍ଣ୍ଣିଂ ଇଞ୍ଜିନ୍",
    adaptive_banner_title: "“LearnQuest ଆପଣଙ୍କ ଉତ୍ତର ଅନୁସାରେ ପାଠ ବଦଳାଇଥାଏ।”",
    adaptive_banner_sub: "କୌଣସି ଛାତ୍ର ପଛରେ ରହିବେ ନାହିଁ! ସରଳ କାହାଣୀ ସହ ପୁନର୍ବାର ବୁଝାଯିବ।",
    simulate_perf_lbl: "ଛାତ୍ର ପ୍ରଦର୍ଶନ ପରୀକ୍ଷା କରନ୍ତୁ:",
    btn_scen_struggling: "⚠️ କମ ମାର୍କ (ଭଗ୍ନାଂଶ)",
    btn_scen_mastered: "🌟 ଉଚ୍ଚ ମାର୍କ (ଦକ୍ଷତା)",
    adaptive_struggle_title: "“ଚାଲନ୍ତୁ ଏହି ବିଷୟ ପୁଣି ଅଭ୍ୟାସ କରିବା।”",
    adaptive_struggle_sub: "ବ୍ୟସ୍ତ ହୁଅନ୍ତୁ ନାହିଁ! ଗଣିତ ପରିବାର ସହ ଖାଦ୍ୟ ବାଣ୍ଟିବା ପରି ସହଜ।",
    frac_exp_heading: "ସରଳ ବ୍ୟାଖ୍ୟା: ଭଗ୍ନାଂଶ କଣ?",
    frac_exp_body: "ଭଗ୍ନାଂଶ ହେଉଛି ଏକ ପୂର୍ଣ୍ଣ ବସ୍ତୁକୁ ସମାନ ଭାଗରେ ବାଣ୍ଟିବା। ୧ଟି ଦୋସାକୁ ୨ ଜଣଙ୍କ ମଧ୍ୟରେ ସମାନ ଭାବେ ବାଣ୍ଟିଲେ ପ୍ରତ୍ୟେକଙ୍କୁ ୧/୨ (ଅଧା) ମିଳିଥାଏ!",
    divide_dosa_lbl: "ଦୋସାକୁ ଭାଗ କରନ୍ତୁ:",
    dosa_2_parts: "୨ ଭାଗ (1/2)",
    dosa_4_parts: "୪ ଭାଗ (1/4)",
    village_example_heading: "ସରଳ ଗ୍ରାମ୍ୟ ଉଦାହରଣ",
    mango_story_title: "ଆମ୍ବ ବଣ୍ଟନ:",
    mango_story_body: "ରାଜୁ ପାଖରେ ୪ଟି ଆମ୍ବ ଥିଲା। ସେ ଭଉଣୀକୁ ୧ଟି ଆମ୍ବ ଦେଲା। ସେ ୧/୪ ଭାଗ ଦେଲା!",
    guided_practice_heading: "ଅଭ୍ୟାସ ପ୍ରଶ୍ନ",
    practice_fraction_q: "“ଯଦି ଆପଣ ଏକ ତରଭୁଜକୁ ୪ ଖଣ୍ଡ କରି ୧ ଖଣ୍ଡ ଖାଆନ୍ତି, ତେବେ ଆପଣ କେତେ ଭଗ୍ନାଂଶ ଖାଇଲେ?”",
    adaptive_master_title: "“ବହୁତ ବଢ଼ିଆ! କଠିନ ପ୍ରଶ୍ନ ପାଇଁ ପ୍ରସ୍ତୁତ?”",
    adaptive_master_sub: "ଆପଣ ସରଳ ଭଗ୍ନାଂଶ ଶିଖିସାରିଛନ୍ତି! ଏବେ ଚାଷ ଜମି ହିସାବ ଶିଖିବା।",
    adv_farm_yield_heading: "କୃଷି ଉତ୍ପାଦନ ଆହ୍ୱାନ",
    practice_adv_q: "“ଜଣେ ଚାଷୀଙ୍କ ପାଖରେ ୧୨ ଏକର ଜମି ଅଛି। ସେ ୧/୩ ଭାଗରେ ଧାନ ଏବଂ ୧/୨ ଭାଗରେ ଆଖୁ ଚାଷ କଲେ। ମୋଟ କେତେ ଏକର ଚାଷ ହେଲା?”",
    subjects_title: "ବିଷୟ ବାଛନ୍ତୁ",
    subjects_curriculum_sub: "ଦଶମ ଶ୍ରେଣୀ ଗ୍ରାମ୍ୟ ପାଠ୍ୟକ୍ରମ",
    three_subjects_tag: "୩ଟି ବିଷୟ",
    subj_math_title: "ଗଣିତ (Mathematics)",
    subj_math_sub: "ଗଣିତ • ଦୈନନ୍ଦିନ ଗ୍ରାମ୍ୟ ଗଣନା",
    topic_numbers: "🔢 ସଂଖ୍ୟା",
    topic_multiplication: "✖️ ଗୁଣନ",
    topic_fractions: "🍰 ଭଗ୍ନାଂଶ",
    topic_money: "💰 ଟଙ୍କା ହିସାବ",
    btn_read_lesson: "ପାଠ ପଢ଼ନ୍ତୁ 📖",
    btn_take_math_quiz: "ଗଣିତ Quiz ➔",
    subj_science_title: "ବିଜ୍ଞାନ (Science)",
    subj_science_sub: "ବିଜ୍ଞାନ • ପ୍ରକୃତି, ଉଦ୍ଭିଦ ଏବଂ ପରିବେଶ",
    topic_plants: "🌱 ଉଦ୍ଭିଦ",
    topic_human_body: "🫀 ମାନବ ଶରୀର",
    topic_water: "💧 ଜଳ ପରିଚାଳନା",
    topic_environment: "🌾 ପରିବେଶ",
    btn_take_science_quiz: "ବିଜ୍ଞାନ Quiz ➔",
    subj_english_title: "ଇଂରାଜୀ (English)",
    subj_english_sub: "ଇଂରାଜୀ • ଦୈନନ୍ଦିନ କଥାବାର୍ତ୍ତା",
    topic_grammar: "✍️ ବ୍ୟାକରଣ",
    topic_vocabulary: "🔤 ଶବ୍ଦକୋଷ",
    topic_reading: "📖 ପଠନ",
    topic_everyday: "🗣️ ଦୈନନ୍ଦିନ ଇଂରାଜୀ",
    btn_take_english_quiz: "ଇଂରାଜୀ Quiz ➔",
    btn_read: "ପଢ଼ନ୍ତୁ",
    btn_practice_topic_quiz: "କ୍ୱିଜ୍ ଅଭ୍ୟାସ କରନ୍ତୁ ➔",
    btn_submit_answer: "ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ ➔",
    result_great_job: "ବହୁତ ଭଲ!",
    result_subtitle: "ଆପଣ ପାଠପଢ଼ାକୁ ନିଜ ଗାଁ ସହ ଯୋଡ଼ିଦେଲେ!",
    score_lbl: "ସ୍କୋର",
    xp_earned_msg: "+30 XP ମିଳିଲା",
    new_badge_unlocked_ribbon: "🏆 ନୂଆ ବ୍ୟାଜ୍ ଅନଲକ୍ ହେଲା!",
    badge_village_explorer: "“ଗ୍ରାମ୍ୟ ଅନୁସନ୍ଧାନକାରୀ”",
    badge_explorer_desc: "ଆପଣ ସଫଳତାର ସହ ପ୍ରଥମ ଉଦ୍ଭିଦ ସର୍ବେକ୍ଷଣ ସମାପ୍ତ କଲେ!",
    btn_next_mission: "ପରବର୍ତ୍ତୀ ମିଶନ 🚀",
    btn_view_progress: "ପ୍ରଗତି ଦେଖନ୍ତୁ 📊",
    btn_practice_grow: "🌱 “ମୋ ସହ ବଢ଼ନ୍ତୁ” ଅଭ୍ୟାସ କରନ୍ତୁ",
    offline_screen_title: "📶 ଅଫଲାଇନ ଶିକ୍ଷା",
    offline_screen_sub: "ଇଣ୍ଟରନେଟ୍ ବିନା ଶିଖନ୍ତୁ",
    offline_ready_badge: "🟢 ଅଫଲାଇନ ପ୍ରସ୍ତୁତ",
    offline_hero_title: "“ଇଣ୍ଟରନେଟ୍ ଥିବା ସମୟରେ ପାଠ ଡାଉନଲୋଡ୍ କରନ୍ତୁ ଏବଂ ଅଫଲାଇନରେ ମଧ୍ୟ ପଢ଼ନ୍ତୁ।”",
    offline_hero_sub: "କ୍ଲାସରୁମ୍ କିମ୍ବା ବିଲରେ ଇଣ୍ଟରନେଟ୍ ଦରକାର ନାହିଁ।",
    sim_network_lbl: "ନେଟୱାର୍କ ସ୍ଥିତି ପରୀକ୍ଷା କରନ୍ତୁ:",
    btn_switch_to_offline: "ଅଫଲାଇନ ମୋଡ୍ ବାଛନ୍ତୁ",
    sync_offline_mode: "ଅଫଲାଇନ ମୋଡ୍ ସକ୍ରିୟ",
    sync_offline_desc: "“ଆପଣଙ୍କ ପ୍ରଗତି ଫୋନରେ ସୁରକ୍ଷିତ ଅଛି।”",
    btn_sync_now: "☁️ ଏବେ ସିଙ୍କ୍ କରନ୍ତୁ",
    available_packs_heading: "ଉପଲବ୍ଧ ଅଫଲାଇନ ପ୍ୟାକ୍",
    local_storage_tag: "ଲୋକାଲ ଷ୍ଟୋରେଜ୍",
    pack_math_sub: "ଦଶମ ଶ୍ରେଣୀ • ୧୨ ପାଠ • 14 MB",
    pack_science_sub: "ଦଶମ ଶ୍ରେଣୀ • ୧୫ ପାଠ • 18 MB",
    pack_english_sub: "ଦଶମ ଶ୍ରେଣୀ • ୧୦ ପାଠ • 12 MB",
    pack_missions_sub: "୨୦ଟି ଗ୍ରାମ ମିଶନ • 8 MB",
    downloaded_check: "ଡାଉନଲୋଡ୍ ସମାପ୍ତ ✓",
    choose_lang_title: "🌐 ନିଜ ଭାଷା ବାଛନ୍ତୁ",
    multilingual_sub: "ଗ୍ରାମ୍ୟ ବହୁଭାଷୀ ସହାୟତା",
    lang_tag_primary: "ପ୍ରାଥମିକ",
    trans_preview_lbl: "ଲାଇଭ ଅନୁବାଦ ଦୃଶ୍ୟ:",
    voice_assist_title: "ସ୍ୱର ସହାୟତା ଶିକ୍ଷା",
    voice_assist_sub: "ପଢ଼ିବାରେ ସମସ୍ୟା ଥିବା ଛାତ୍ରଙ୍କ ପାଇଁ ଅଡିଓ ସୁବିଧା",
    progress_title: "ମୋର ପ୍ରଗତି",
    milestones_sub: "ଗ୍ରାମ୍ୟ ଶିକ୍ଷା ସଫଳତା",
    stat_total_xp: "ମୋଟ XP",
    badge_scout: "ଗ୍ରାମ୍ୟ ଗାଇଡ୍",
    stat_missions_done: "ସମାପ୍ତ ମିଶନ",
    subject_mastery_heading: "ବିଷୟ ଦକ୍ଷତା",
    unlocked_badges_heading: "ଅନଲକ୍ ବ୍ୟାଜ୍",
    five_earned_tag: "୫ଟି ମିଳିଛି",
    badge_first_learner: "ପ୍ରଥମ ଶିକ୍ଷାର୍ଥୀ",
    badge_water_saver: "ଜଳ ରକ୍ଷକ",
    badge_quiz_master: "କ୍ୱିଜ୍ ମାଷ୍ଟର",
    badge_learning_champion: "ଲର୍ଣ୍ଣିଂ ଚାମ୍ପିୟନ",
    badge_eco_champion: "ପରିବେଶ ରକ୍ଷକ",
    unlocked_tag: "ଅନଲକ୍",
    community_quest_tag: "ସାମୂହିକ ଲକ୍ଷ୍ୟ",
    btn_generate_cert: "📜 ଗ୍ରାମ୍ୟ ସ୍କଲାର ପ୍ରମାଣପତ୍ର ତିଆରି କରନ୍ତୁ",
    profile_title: "👤 ପ୍ରୋଫାଇଲ",
    student_account_sub: "ଛାତ୍ର ଆକାଉଣ୍ଟ",
    class_lbl: "ଶ୍ରେଣୀ",
    language_lbl: "ଭାଷା",
    level_lbl: "ଲେଭଲ",
    btn_edit_profile: "✏️ ପ୍ରୋଫାଇଲ ଏଡିଟ୍",
    btn_settings: "⚙️ ସେଟିଂସ",
    teacher_mode_title: "ଶିକ୍ଷକ ଡ୍ୟାସବୋର୍ଡ ମୋଡ୍",
    teacher_mode_sub: "ଶ୍ରେଣୀ ତଥ୍ୟ ଏବଂ ବିଶ୍ଳେଷଣ ଦେଖନ୍ତୁ",
    btn_switch_view: "ଦୃଶ୍ୟ ବଦଳାନ୍ତୁ ➔",
    app_tagline_footer: "“ନିଜ ଦୁନିଆରୁ ଶିଖନ୍ତୁ, ସମୁଦାୟ ସହ ଆଗକୁ ବଢ଼ନ୍ତୁ।”",
    sih_footer_note: "SIH25048 • ସ୍ମାର୍ଟ ଇଣ୍ଡିଆ ହ୍ୟାକାଥନ",
    edit_profile_title: "✏️ ପ୍ରୋଫାଇଲ ସଂଶୋଧନ",
    edit_profile_sub: "ଛାତ୍ର ବିବରଣୀ ଅଦ୍ୟତନ କରନ୍ତୁ",
    choose_avatar_lbl: "ଅବତାର ବାଛନ୍ତୁ:",
    student_name_lbl: "ଛାତ୍ରଙ୍କ ନାମ:",
    class_grade_lbl: "ଶ୍ରେଣୀ:",
    primary_lang_lbl: "ମୁଖ୍ୟ ଭାଷା:",
    school_village_lbl: "ବିଦ୍ୟାଳୟ / ଗ୍ରାମ ନାମ:",
    btn_cancel: "ବାତିଲ କରନ୍ତୁ",
    btn_save_changes: "ସେଭ୍ କରନ୍ତୁ ✓",
    teacher_dashboard_title: "👩‍🏫 ଶ୍ରେଣୀଗୃହ ଶିକ୍ଷା ବିଶ୍ଳେଷଣ",
    teacher_school_sub: "ଦଶମ ଶ୍ରେଣୀ • ସରକାରୀ ହାଇସ୍କୁଲ, ମେଲୁର",
    btn_student_view: "ଛାତ୍ର ଦୃଶ୍ୟ ➔",
    total_students_lbl: "ମୋଟ ଛାତ୍ର",
    active_learners_lbl: "ସକ୍ରିୟ ଛାତ୍ର",
    missions_done_lbl: "ସମାପ୍ତ ମିଶନ",
    class_subject_averages: "📊 ଶ୍ରେଣୀ ହାରାହାରି ମାର୍କ",
    weekly_realtime_tag: "ସାପ୍ତାହିକ ରିଅଲ-ଟାଇମ",
    students_needing_support: "ସହାୟତା ଆବଶ୍ୟକ ଛାତ୍ର",
    gap_analytics_sub: "କ୍ୱିଜ୍ ବିଶ୍ଳେଷଣ ଦ୍ୱାରା ଚିହ୍ନଟ",
    gap1_title: "ଭଗ୍ନାଂଶ (ଗଣିତ)",
    gap1_sub: "୫ ଜଣ ଛାତ୍ରଙ୍କୁ ଭଗ୍ନାଂଶରେ ଅଭ୍ୟାସ ଦରକାର।",
    gap2_title: "ଉଦ୍ଭିଦ ଅଙ୍ଗ (ବିଜ୍ଞାନ)",
    gap2_sub: "୪ ଜଣ ଛାତ୍ରଙ୍କୁ ଜଳ ପରିବହନ ବୁଝିବାରେ ଅସୁବିଧା ଅଛି।",
    gap3_title: "ଅତୀତ କାଳ ବ୍ୟାକରଣ (ଇଂରାଜୀ)",
    gap3_sub: "୩ ଜଣ ଛାତ୍ରଙ୍କୁ କ୍ରିୟାପଦ ସୁଧାର ଦରକାର।",
    btn_assign_remedial: "ଅତିରିକ୍ତ ପାଠ ଦିଅନ୍ତୁ ➔",
    student_roster_heading: "👥 ଛାତ୍ର ତାଲିକା ପ୍ରଗତି",
    filter_needs_help: "ଫିଲ୍ଟର: ସାହାଯ୍ୟ ଦରକାର",
    badge_on_track: "ସଠିକ ଧାରାରେ 🌟",
    badge_needs_practice: "ଅଭ୍ୟାସ ଦରକାର ⚠️",
    badge_top_learner: "ଶ୍ରେଷ୍ଠ ଛାତ୍ର 🏆",
    badge_needs_nudge: "ଧ୍ୟାନ ଦିଅନ୍ତୁ 📩",
    ananya_sub: "୮ ମିଶନ • ଭଗ୍ନାଂଶରେ ସାହାଯ୍ୟ ଦରକାର",
    priya_sub: "୬ ମିଶନ • ୨ ଦିନ ଅନୁପସ୍ଥିତ",
    btn_view_student_details: "[ ଛାତ୍ରଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ତଥ୍ୟ ଦେଖନ୍ତୁ ]",
    village_comm_challenge_title: "🌍 ଗ୍ରାମ ଶିକ୍ଷା ଆହ୍ୱାନ",
    comm_impact_sub: "ସମୁଦାୟ ସ୍ତରର ପ୍ରଭାବ",
    comm_hero_badge: "🌍 ପରିବେଶ ମିଶନ",
    comm_quest_q: "“ନିଜ ଗାଁରେ ଜଳ ଅପଚୟ ରୋକିବା ପାଇଁ ୩ଟି ଉପାୟ ଖୋଜନ୍ତୁ।”",
    comm_quest_desc: "ଗାଁ ପୋଖରୀ ଏବଂ ଭୂତଳ ଜଳ ସୁରକ୍ଷା ପାଇଁ କାର୍ଯ୍ୟ କରନ୍ତୁ।",
    challenge_progress_lbl: "ଆହ୍ୱାନ ପ୍ରଗତି:",
    comm_check1_title: "୧. ଖରାପ ଥିବା ସର୍ବସାଧାରଣ ନଳ ସଜଡ଼ା ଗଲା",
    comm_check1_desc: "ପଞ୍ଚାୟତକୁ ଜଣାଗଲା।",
    comm_check2_title: "୨. ରୋଷେଇ ଘର ପାଣି ବଗିଚାରେ ବ୍ୟବହାର ହେଲା",
    comm_check2_desc: "କଦଳୀ ଏବଂ ପନିପରିବା ଗଛରେ ପାଣି ଦିଆଗଲା।",
    comm_check3_title: "୩. ଛାତ ଉପରେ ବର୍ଷା ଜଳ ଅମଳ ବାଲଟି ରଖାଗଲା",
    comm_check3_desc: "ସଫା ବର୍ଷା ଜଳ ସଂଗ୍ରହ କରାଗଲା।",
    btn_mark_done: "ସମାପ୍ତ ହେଲା",
    comm_reward_title: "ପୁରସ୍କାର: +50 XP ଏବଂ ପରିବେଶ ରକ୍ଷକ ବ୍ୟାଜ୍",
    comm_reward_desc: "ଆପଣଙ୍କ ପ୍ରୋଫାଇଲରେ ସ୍ୱତନ୍ତ୍ର ବ୍ୟାଜ୍ ଅନଲକ୍ ହେବ!",
    btn_complete_challenge: "ଆହ୍ୱାନ ସମାପ୍ତ କରନ୍ତୁ 🚀",
    nav_home: "ମୁଖ୍ୟ",
    nav_subjects: "ବିଷୟ",
    nav_missions: "ମିଶନ",
    nav_progress: "ପ୍ରଗତି",
    nav_profile: "ପ୍ରୋଫାଇଲ",
    shop_modal_title: "🛒 ଗ୍ରାମ୍ୟ ଦୋକାନ ଗଣିତ",
    shop_modal_desc: "ଜିନିଷ ବାଛନ୍ତୁ ଏବଂ ମୋଟ ବିଲ୍ ହିସାବ କରନ୍ତୁ।",
    shop_item_rice: "ଚାଉଳ",
    shop_item_jaggery: "ଗୁଡ଼",
    shop_item_lentils: "ଡାଲି",
    shop_total_bill_lbl: "ମୋଟ ବିଲ୍:",
    shop_cash_given_lbl: "ଦିଆଯାଇଥିବା ଟଙ୍କା:",
    shop_change_due_lbl: "ବାକି ଟଙ୍କା:",
    btn_shop_checkout: "ବିଲ୍ ଯାଞ୍ଚ କରି +30 XP ପାଆନ୍ତୁ ➔",
    farm_modal_title: "🌾 ଧାନ ଫସଲ ନିକିତି",
    farm_modal_desc: "ପ୍ରତ୍ୟେକ ବସ୍ତା ୨୫ କିଗ୍ରା। ମୋଟ ଓଜନ ଗଣନା କରନ୍ତୁ।",
    bags_on_scale_lbl: "ନିକିତିରେ ଥିବା ବସ୍ତା:",
    btn_confirm_weight: "ଓଜନ ନିଶ୍ଚିତ କରି +30 XP ପାଆନ୍ତୁ ➔",
    cert_modal_title: "📜 ଗ୍ରାମ୍ୟ ସ୍କଲାର ପ୍ରମାଣପତ୍ର",
    btn_download_png: "💾 PNG ଡାଉନଲୋଡ୍",
    btn_print_cert: "🖨️ ପ୍ରମାଣପତ୍ର ପ୍ରିଣ୍ଟ",
    stat_accuracy_lbl: "ସଠିକତା",
    stat_missions_lbl: "ମିଶନ",
    weak_topics_heading: "ଧ୍ୟାନ ଦେବାକୁ ଥିବା ବିଷୟ:",
    btn_send_targeted_quest: "ସିଧାସଳଖ ମିଶନ ପଠାନ୍ତୁ ➔"
  }
};

// ==========================================================================
// 4. MULTILINGUAL QUESTION BANKS
// ==========================================================================
const QuestionBank = {
  science: {
    ta: [
      {
        q: "மண்ணிலிருந்து நீரையும் தாதுக்களையும் உறிஞ்சும் தாவரத்தின் பகுதி எது?",
        options: ["இலை (Leaf)", "வேர் (Root)", "பூ (Flower)", "காய் (Fruit)"],
        correct: 1,
        exp: "வேர்களில் உள்ள நுண் வேர்த்தூவிகள் மண்ணிலிருந்து நீரையும் தாது உப்புகளையும் உறிஞ்சி கடத்துகின்றன."
      },
      {
        q: "இயற்கை பூச்சிக்கொல்லியாகவும் கிருமிநாசினியாகவும் பயன்படும் கிராமத்து மரம் எது?",
        options: ["வேப்ப மரம் (Neem)", "யூகலிப்டஸ் (Eucalyptus)", "பைன் (Pine)", "தேக்கு (Teak)"],
        correct: 0,
        exp: "வேப்ப மரத்தின் இலைகளில் உள்ள அசாடிராக்டின் பூச்சிகளை இயற்கை வழியில் விரட்டுகிறது."
      },
      {
        q: "சூரிய ஒளியைப் பயன்படுத்தி இலைகள் உணவு தயாரிக்கும் முறைக்கு என்ன பெயர்?",
        options: ["நீராவிப்போக்கு", "ஒளிச்சேர்க்கை (Photosynthesis)", "சுவாசம்", "ஆவியாதல்"],
        correct: 1,
        exp: "பச்சையம் சூரிய ஒளியைப் பயன்படுத்தி கார்பன் டை ஆக்சைடு மற்றும் நீரிலிருந்து குளுக்கோஸ் தயாரிக்கிறது."
      },
      {
        q: "கிராமங்களில் மழைநீரை சேமிக்க உதவும் சிறந்த வழி எது?",
        options: ["திறந்தவெளியில் ஓடவிடுதல்", "கூரை மழைநீர் சேகரிப்பு", "மரங்களை வெட்டுதல்", "குழாயை திறந்து வைத்தல்"],
        correct: 1,
        exp: "கூரை மழைநீர் சேகரிப்பு தூய நீரை உறிஞ்சு குழிகளுக்கு அனுப்பி நிலத்தடி நீர்மட்டத்தை உயர்த்துகிறது."
      },
      {
        q: "மண்புழுக்கள் ஏன் விவசாயிகளின் உற்ற நண்பன் என அழைக்கப்படுகின்றன?",
        options: ["மண்ணை காற்றோட்டமாக்கி உரம் தருகிறது", "பயிர்களை தின்றுவிடும்", "பறவைகளை விரட்டும்", "அதிக நீர் குடிக்கும்"],
        correct: 0,
        exp: "மண்புழுக்கள் மண்ணைத் துளையிட்டு காற்றோட்டம் தந்து சத்தான மண்புழு உரத்தை உண்டாக்குகின்றன."
      }
    ],
    en: [
      {
        q: "Which part of a plant absorbs water and minerals from the soil?",
        options: ["Leaf", "Root", "Flower", "Fruit"],
        correct: 1,
        exp: "Roots have microscopic root hairs that draw water and essential minerals from the soil for photosynthesis."
      },
      {
        q: "Which village tree is traditionally known for natural pest control and antiseptic medicine?",
        options: ["Neem", "Eucalyptus", "Pine", "Teak"],
        correct: 0,
        exp: "Neem leaves contain Azadirachtin, a potent natural compound that repels agricultural insects."
      },
      {
        q: "What is the process by which green leaves prepare food using sunlight?",
        options: ["Transpiration", "Photosynthesis", "Respiration", "Evaporation"],
        correct: 1,
        exp: "Chlorophyll in leaves absorbs sunlight, converting water and carbon dioxide into glucose and oxygen."
      },
      {
        q: "Which method helps village communities harvest rainwater efficiently?",
        options: ["Open road runoff", "Rooftop Rainwater Harvesting", "Cutting village trees", "Leaving taps open"],
        correct: 1,
        exp: "Rooftop collection channels pure rainwater into recharge wells and percolation pits."
      },
      {
        q: "Why are earthworms called 'the farmer's best friend' in rural fields?",
        options: ["They aerate soil & make humus", "They eat crops", "They scare away birds", "They consume too much water"],
        correct: 0,
        exp: "Earthworms burrow through soil, creating air tunnels and leaving nutrient-rich vermicompost."
      }
    ],
    hi: [
      {
        q: "पौधे का कौन सा भाग मिट्टी से जल और खनिज लवण अवशोषित करता है?",
        options: ["पत्ती", "जड़ (Root)", "फूल", "फल"],
        correct: 1,
        exp: "जड़ों के बारीक मूलरोम मिट्टी से पानी और पोषक तत्वों को सोखते हैं।"
      },
      {
        q: "प्राकृतिक कीटनाशक और औषधि के लिए गाँव का कौन सा पेड़ प्रसिद्ध है?",
        options: ["नीम (Neem)", "सफेदा", "चीड़", "सागवान"],
        correct: 0,
        exp: "नीम की पत्तियों में प्राकृतिक गुण होते हैं जो कीटों को भगाते हैं।"
      },
      {
        q: "सूर्य के प्रकाश से पत्तियों द्वारा भोजन बनाने की प्रक्रिया क्या कहलाती है?",
        options: ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण (Photosynthesis)", "श्वसन", "वाष्पीकरण"],
        correct: 1,
        exp: "पत्तियों का क्लोरोफिल धूप से पानी और कार्बन डाइऑक्साइड को भोजन में बदलता है।"
      },
      {
        q: "गाँव में वर्षा जल संचयन का सबसे प्रभावी तरीका कौन सा है?",
        options: ["सड़क पर बहने देना", "छत का वर्षा जल संचयन", "पेड़ काटना", "नल खुला छोड़ना"],
        correct: 1,
        exp: "छत का वर्षा जल संचयन भूजल स्तर को बढ़ाने में मदद करता है।"
      },
      {
        q: "केंचुए को किसान का मित्र क्यों कहा जाता है?",
        options: ["मिट्टी को हवादार और उपजाऊ बनाता है", "फसलें खा जाता है", "पक्षियों को भगाता है", "ज्यादा पानी पीता है"],
        correct: 0,
        exp: "केंचुए मिट्टी में हवा पहुंचाते हैं और जैविक खाद बनाते हैं।"
      }
    ],
    or: [
      {
        q: "ମାଟିରୁ ଜଳ ଏବଂ ଖଣିଜ ଲବଣ ଶୋଷଣ କରୁଥିବା ଉଦ୍ଭିଦର ଅଂଶ କିଏ?",
        options: ["ପତ୍ର", "ଚେର (Root)", "ଫୁଲ", "ଫଳ"],
        correct: 1,
        exp: "ଚେର ମାଟିରୁ ଜଳ ଏବଂ ଖଣିଜ ପଦାର୍ଥ ଶୋଷଣ କରିଥାଏ।"
      },
      {
        q: "ପ୍ରାକୃତିକ କୀଟନାଶକ ଭାବରେ କେଉଁ ଗଛ ବ୍ୟବହୃତ ହୁଏ?",
        options: ["ନିମ୍ବ (Neem)", "ୟୁକାଲିପଟାସ", "ଦେବଦାରୁ", "ଶାଗୁଆନ"],
        correct: 0,
        exp: "ନିମ୍ବ ପତ୍ର କୀଟନାଶକ ଭାବରେ କାର୍ଯ୍ୟ କରେ।"
      },
      {
        q: "ସୂର୍ଯ୍ୟାଲୋକରୁ ଉଦ୍ଭିଦ ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରିବା ପ୍ରକ୍ରିୟାକୁ କଣ କୁହାଯାଏ?",
        options: ["ଉତ୍ସ୍ୱେଦନ", "ଆଲୋକ ସଂଶ୍ଳେଷଣ", "ଶ୍ୱାସକ୍ରିୟା", "ବାଷ୍ପୀକରଣ"],
        correct: 1,
        exp: "ସବୁଜ ପତ୍ର ସୂର୍ଯ୍ୟାଲୋକରୁ ଖାଦ୍ୟ ତିଆରି କରେ।"
      },
      {
        q: "ବର୍ଷା ଜଳ ସଂରକ୍ଷଣର ସର୍ବୋତ୍ତମ ଉପାୟ କଣ?",
        options: ["ରାସ୍ତାରେ ବୋହିବାକୁ ଦେବା", "ଛାତ ବର୍ଷା ଜଳ ଅମଳ", "ଗଛ କାଟିବା", "ନଳ ଖୋଲା ରଖିବା"],
        correct: 1,
        exp: "ଛାତ ବର୍ଷା ଜଳ ଅମଳ ଭୂତଳ ଜଳସ୍ତର ବୃଦ୍ଧି କରେ।"
      },
      {
        q: "ଜିଆକୁ ଚାଷୀର ବନ୍ଧୁ କାହିଁକି କୁହାଯାଏ?",
        options: ["ମାଟିକୁ ଉର୍ବର କରେ", "ଫସଲ ଖାଏ", "ପକ୍ଷୀ ଘଉଡ଼ାଏ", "ଅଧିକ ପାଣି ପିଏ"],
        correct: 0,
        exp: "ଜିଆ ମାଟିକୁ ଉର୍ବର ଏବଂ ନରମ କରିଥାଏ।"
      }
    ]
  },

  math: {
    ta: [
      {
        q: "ஒரு விவசாயியிடம் 5 மூட்டை நெல் உள்ளது. ஒரு மூட்டை 25 கிலோ எனில் மொத்த எடை எவ்வளவு?",
        options: ["100 கிலோ", "125 கிலோ (5 × 25)", "150 கிலோ", "115 கிலோ"],
        correct: 1,
        exp: "மூட்டைகளின் எண்ணிக்கையை ஒரு மூட்டையின் எடையுடன் பெருக்க வேண்டும்: 5 × 25 = 125 கிலோ."
      },
      {
        q: "1 சூடான தோசையை 4 குழந்தைகளுக்கு சமமாக பங்கிட்டால் ஒவ்வொருவருக்கும் கிடைக்கும் பின்னம் என்ன?",
        options: ["1/2", "1/4", "3/4", "1/8"],
        correct: 1,
        exp: "1 முழுப் பொருளை 4 சம பாகங்களாகப் பிரித்தால் 1/4 (கால் பாகம்) கிடைக்கும்."
      },
      {
        q: "கவின் ₹40-க்கு வெங்காயமும் ₹30-க்கு தக்காளியும் வாங்குகிறார். ₹100 கொடுத்தால் மீதி எவ்வளவு?",
        options: ["₹20", "₹30 (100 - 70)", "₹40", "₹25"],
        correct: 1,
        exp: "மொத்த செலவு = ₹40 + ₹30 = ₹70. மீதி = ₹100 - ₹70 = ₹30."
      },
      {
        q: "ஒரு கிராம குளத்தின் சுற்றளவு 400 மீட்டர். 3 முறை சுற்றினால் ஓடிய தூரம் எவ்வளவு?",
        options: ["800 மீ", "1200 மீ (3 × 400)", "1400 மீ", "1000 மீ"],
        correct: 1,
        exp: "3 சுற்றுகள் × 400 மீட்டர் = 1200 மீட்டர் (1.2 கி.மீ)."
      },
      {
        q: "சொட்டு நீர் பாசனம் ஒரு மரத்திற்கு 40 லிட்டர் நீர் சேமிக்கிறது. 10 மரங்களுக்கு சேமிக்கப்படும் நீர் எவ்வளவு?",
        options: ["300 லிட்டர்", "400 லிட்டர் (10 × 40)", "500 லிட்டர்", "350 லிட்டர்"],
        correct: 1,
        exp: "10 மரங்கள் × 40 லிட்டர் = 400 லிட்டர் நீர் தினமும் சேமிக்கப்படுகிறது."
      }
    ],
    en: [
      {
        q: "A farmer has 5 bags of rice. Each bag weighs 25 kg. What is the total weight?",
        options: ["100 kg", "125 kg (5 × 25)", "150 kg", "115 kg"],
        correct: 1,
        exp: "Multiply the number of bags by the weight per bag: 5 × 25 kg = 125 kg."
      },
      {
        q: "If you divide 1 warm Dosa equally among 4 children, what fraction does each child receive?",
        options: ["1/2", "1/4", "3/4", "1/8"],
        correct: 1,
        exp: "Dividing 1 whole unit into 4 equal slices yields 1/4 per person."
      },
      {
        q: "Kavin buys 2 kg of onions for ₹40 and 1 kg of tomatoes for ₹30. He pays ₹100. How much change will he get?",
        options: ["₹20", "₹30 (100 - 70)", "₹40", "₹25"],
        correct: 1,
        exp: "Total cost = ₹40 + ₹30 = ₹70. Change = ₹100 - ₹70 = ₹30."
      },
      {
        q: "A village pond has a perimeter of 400 meters. If a student runs around it 3 times, how many meters did they run?",
        options: ["800 m", "1200 m (3 × 400)", "1400 m", "1000 m"],
        correct: 1,
        exp: "3 rounds × 400 meters per round = 1200 meters (1.2 km)."
      },
      {
        q: "A drip irrigation system saves 40 liters of water per tree every day. How many liters are saved for 10 trees?",
        options: ["300 L", "400 L (10 × 40)", "500 L", "350 L"],
        correct: 1,
        exp: "10 trees × 40 liters = 400 liters saved per day."
      }
    ],
    hi: [
      {
        q: "एक किसान के पास 5 बोरी चावल हैं। प्रत्येक का वजन 25 किलो है। कुल वजन कितना होगा?",
        options: ["100 किलो", "125 किलो (5 × 25)", "150 किलो", "115 किलो"],
        correct: 1,
        exp: "कुल वजन = 5 × 25 = 125 किलो।"
      },
      {
        q: "यदि 1 डोसा 4 बच्चों में बराबर बांटा जाए, तो प्रत्येक को कितना भिन्न मिलेगा?",
        options: ["1/2", "1/4", "3/4", "1/8"],
        correct: 1,
        exp: "1 को 4 भागों में बांटने पर प्रत्येक को 1/4 मिलता है।"
      },
      {
        q: "कविन ₹40 का प्याज और ₹30 का टमाटर खरीदता है। ₹100 देने पर उसे कितने रुपये वापस मिलेंगे?",
        options: ["₹20", "₹30 (100 - 70)", "₹40", "₹25"],
        correct: 1,
        exp: "कुल खर्च = ₹40 + ₹30 = ₹70. वापसी = ₹100 - ₹70 = ₹30।"
      },
      {
        q: "गाँव के तालाब का घेरा 400 मीटर है। 3 चक्कर लगाने पर कुल दूरी कितनी होगी?",
        options: ["800 मी", "1200 मी (3 × 400)", "1400 मी", "1000 मी"],
        correct: 1,
        exp: "3 चक्कर × 400 मीटर = 1200 मीटर।"
      },
      {
        q: "ड्रिप सिंचाई प्रति पेड़ 40 लीटर पानी बचाती है। 10 पेड़ों के लिए कितना पानी बचेगा?",
        options: ["300 ली", "400 ली (10 × 40)", "500 ली", "350 ली"],
        correct: 1,
        exp: "10 पेड़ × 40 लीटर = 400 लीटर प्रतिदिन।"
      }
    ],
    or: [
      {
        q: "ଜଣେ ଚାଷୀଙ୍କ ପାଖରେ ୫ ବସ୍ତା ଧାନ ଅଛି। ପ୍ରତ୍ୟେକ ବସ୍ତା ୨୫ କିଗ୍ରା। ମୋଟ ଓଜନ କେତେ?",
        options: ["୧୦୦ କିଗ୍ରା", "୧୨୫ କିଗ୍ରା (5 × 25)", "୧୫୦ କିଗ୍ରା", "୧୧୫ କିଗ୍ରା"],
        correct: 1,
        exp: "ମୋଟ ଓଜନ = ୫ × ୨୫ = ୧୨୫ କିଗ୍ରା।"
      },
      {
        q: "୧ଟି ଦୋସାକୁ ୪ ଜଣ ପିଲାଙ୍କ ମଧ୍ୟରେ ସମାନ ବାଣ୍ଟିଲେ ପ୍ରତ୍ୟେକଙ୍କୁ କେତେ ଭଗ୍ନାଂଶ ମିଳିବ?",
        options: ["1/2", "1/4", "3/4", "1/8"],
        correct: 1,
        exp: "୧ଟି ବସ୍ତୁକୁ ୪ ଭାଗ କଲେ ପ୍ରତ୍ୟେକଙ୍କୁ ୧/୪ ମିଳେ।"
      },
      {
        q: "କବିନ ₹୪୦ ର ପିଆଜ ଏବଂ ₹୩୦ ର ବିଲାତି କିଣି ₹୧୦୦ ଦେଲେ। ବାକି କେତେ ଫେରି ପାଇବେ?",
        options: ["₹୨୦", "₹୩୦ (100 - 70)", "₹୪୦", "₹୨୫"],
        correct: 1,
        exp: "ମୋଟ ଖର୍ଚ୍ଚ = ₹୭୦. ବାକି = ₹୧୦୦ - ₹୭୦ = ₹୩୦।"
      },
      {
        q: "ଗୋଟିଏ ପୋଖରୀର ପରିଧି ୪୦୦ ମିଟର। ୩ ଥର ବୁଲିଲେ ମୋଟ ଦୂରତା କେତେ ହେବ?",
        options: ["୮୦୦ ମି", "୧୨୦୦ ମି (3 × 400)", "୧୪୦୦ ମି", "୧୦୦୦ ମି"],
        correct: 1,
        exp: "୩ × ୪୦୦ = ୧୨୦୦ ମିଟର।"
      },
      {
        q: "ବିନ୍ଦୁ ଜଳସେଚନରେ ଗୋଟିଏ ଗଛରେ ୪୦ ଲିଟର ପାଣି ବଞ୍ଚେ। ୧୦ଟି ଗଛରେ କେତେ ପାଣି ବଞ୍ଚିବ?",
        options: ["୩୦୦ ଲି", "୪୦୦ ଲି (10 × 40)", "୫୦୦ ଲି", "୩୫୦ ଲି"],
        correct: 1,
        exp: "୧୦ × ୪୦ = ୪୦୦ ଲିଟର ଜଳ ବଞ୍ଚିବ।"
      }
    ]
  },

  english: {
    ta: [
      {
        q: "Choose the correct past tense: 'Yesterday, the farmer ______ (plant) paddy in the field.'",
        options: ["planting", "planted (இறந்த காலம்)", "plants", "will plant"],
        correct: 1,
        exp: "'Planted' என்பது நேற்றைய செயலைக் குறிக்கும் சரியான இறந்தகால வினைச்சொல்."
      },
      {
        q: "What is the synonym of 'Fertile' (செழிப்பான நிலம்)?",
        options: ["Dry", "Productive / Rich (செழிப்பான)", "Rocky", "Barren"],
        correct: 1,
        exp: "'Fertile' என்றால் பயிர்கள் செழிப்பாக வளரக்கூடிய வளமான நிலம்."
      },
      {
        q: "Fill in the blank: 'We must ______ clean water to protect our health.'",
        options: ["wasted", "drink (குடிக்க வேண்டும்)", "drinking", "spill"],
        correct: 1,
        exp: "'Must' என்ற சொல்லுக்குப் பின் மூல வினைச்சொல் 'drink' வரும்."
      },
      {
        q: "Identify the noun (பெயர்ச்சொல்): 'The green tractor crossed the village bridge.'",
        options: ["Green", "Crossed", "Tractor (பெயர்ச்சொல்)", "Quickly"],
        correct: 2,
        exp: "'Tractor' மற்றும் 'bridge' என்பது கிராமத்து பொருள்களின் பெயர்ச்சொல் (Noun)."
      },
      {
        q: "Which word describes something that belongs to the whole village community?",
        options: ["Private", "Public / Communal (பொதுவான)", "Secret", "Single"],
        correct: 1,
        exp: "'Public' அல்லது 'Communal' என்பது கிராம மக்கள் அனைவருக்கும் பொதுவானதைக் குறிக்கும்."
      }
    ],
    en: [
      {
        q: "Choose the correct past tense: 'Yesterday, the farmer ______ (plant) paddy in the field.'",
        options: ["planting", "planted", "plants", "will plant"],
        correct: 1,
        exp: "'Planted' is the regular past tense verb indicating an action completed yesterday."
      },
      {
        q: "What is the synonym of 'Fertile' (rich soil for growing crops)?",
        options: ["Dry", "Productive / Rich", "Rocky", "Barren"],
        correct: 1,
        exp: "Fertile land is productive soil capable of sustaining robust crop yields."
      },
      {
        q: "Fill in the blank: 'We must ______ clean water to protect our health.'",
        options: ["wasted", "drink", "drinking", "spill"],
        correct: 1,
        exp: "The modal verb 'must' takes the base verb form 'drink'."
      },
      {
        q: "Identify the noun: 'The green tractor crossed the village bridge.'",
        options: ["Green", "Crossed", "Tractor", "Quickly"],
        correct: 2,
        exp: "'Tractor' and 'bridge' are naming words (nouns) for physical objects."
      },
      {
        q: "Which word describes something that belongs to the whole village community?",
        options: ["Private", "Public / Communal", "Secret", "Single"],
        correct: 1,
        exp: "'Public' or 'Communal' describes resources shared by everyone in the village."
      }
    ],
    hi: [
      {
        q: "सही भूतकाल चुनें: 'Yesterday, the farmer ______ (plant) paddy in the field.'",
        options: ["planting", "planted (भूतकाल)", "plants", "will plant"],
        correct: 1,
        exp: "'Planted' कल हुए कार्य को दर्शाने वाला सही भूतकाल रूप है।"
      },
      {
        q: "'Fertile' (उपजाऊ भूमि) का समानार्थी शब्द क्या है?",
        options: ["Dry", "Productive / Rich (उपजाऊ)", "Rocky", "Barren"],
        correct: 1,
        exp: "'Fertile' का अर्थ अच्छी फसल देने वाली उपजाऊ मिट्टी है।"
      },
      {
        q: "रिक्त स्थान भरें: 'We must ______ clean water to protect our health.'",
        options: ["wasted", "drink", "drinking", "spill"],
        correct: 1,
        exp: "'Must' के साथ क्रिया का मूल रूप 'drink' आता है।"
      },
      {
        q: "संज्ञा (Noun) पहचानें: 'The green tractor crossed the village bridge.'",
        options: ["Green", "Crossed", "Tractor (संज्ञा)", "Quickly"],
        correct: 2,
        exp: "'Tractor' और 'bridge' वस्तु के नाम (संज्ञा) हैं।"
      },
      {
        q: "पूरे गाँव के लिए साझा संसाधन को क्या कहते हैं?",
        options: ["Private", "Public / Communal (सार्वजनिक)", "Secret", "Single"],
        correct: 1,
        exp: "'Public' या 'Communal' गाँव के सभी लोगों के साझे संसाधन को दर्शाता है।"
      }
    ],
    or: [
      {
        q: "ସଠିକ ଅତୀତ କାଳ ବାଛନ୍ତୁ: 'Yesterday, the farmer ______ (plant) paddy in the field.'",
        options: ["planting", "planted (ଅତୀତ କାଳ)", "plants", "will plant"],
        correct: 1,
        exp: "'Planted' ଅତୀତ କାଳର ସଠିକ ଶବ୍ଦ ଅଟେ।"
      },
      {
        q: "'Fertile' (ଉର୍ବର) ଶବ୍ଦର ସମାନ ଅର୍ଥ କଣ?",
        options: ["Dry", "Productive / Rich (ଉର୍ବର)", "Rocky", "Barren"],
        correct: 1,
        exp: "'Fertile' ଅର୍ଥ ଫସଲ ପାଇଁ ଉପଯୁକ୍ତ ଉର୍ବର ମାଟି।"
      },
      {
        q: "ଶୂନ୍ୟସ୍ଥାନ ପୂରଣ କରନ୍ତୁ: 'We must ______ clean water to protect our health.'",
        options: ["wasted", "drink", "drinking", "spill"],
        correct: 1,
        exp: "'Must' ପରେ 'drink' ବ୍ୟବହୃତ ହୁଏ।"
      },
      {
        q: "ବିଶେଷ୍ୟ (Noun) ଚିହ୍ନଟ କରନ୍ତୁ: 'The green tractor crossed the village bridge.'",
        options: ["Green", "Crossed", "Tractor (ବିଶେଷ୍ୟ)", "Quickly"],
        correct: 2,
        exp: "'Tractor' ଗୋଟିଏ ବସ୍ତୁର ନାମ (Noun) ଅଟେ।"
      },
      {
        q: "ସମସ୍ତ ଗ୍ରାମବାସୀଙ୍କ ପାଇଁ ଉଦ୍ଦିଷ୍ଟ ଜିନିଷକୁ କଣ କୁହାଯାଏ?",
        options: ["Private", "Public / Communal (ସର୍ବସାଧାରଣ)", "Secret", "Single"],
        correct: 1,
        exp: "'Public' ସମସ୍ତଙ୍କ ପାଇଁ ଉଦ୍ଦିଷ୍ଟ ସମ୍ବଳ।"
      }
    ]
  }
};

// ==========================================================================
// 5. LESSON REPOSITORY (Multilingual)
// ==========================================================================
const LessonRepository = {
  science: {
    plants: {
      title: {
        ta: "தாவர உறுப்புகள் & கிராமத்து தாவரங்கள்",
        en: "Plant Anatomy & Village Flora",
        hi: "पौधों की संरचना और ग्रामीण वनस्पतियाँ",
        or: "ଉଦ୍ଭିଦ ଗଠନ ଏବଂ ଗ୍ରାମ୍ୟ ଉଦ୍ଭିଦ"
      },
      subject: "Science • தாவரவியல்",
      emoji: "🌱",
      heading: {
        ta: "தாவரங்கள் நீரையும் சூரிய ஒளியையும் எவ்வாறு பெறுகின்றன?",
        en: "How Plants Absorb Water & Sunlight",
        hi: "पौधे जल और धूप कैसे प्राप्त करते हैं?",
        or: "ଉଦ୍ଭିଦ କିପରି ଜଳ ଏବଂ ସୂର୍ଯ୍ୟାଲୋକ ଗ୍ରହଣ କରେ?"
      },
      sub: {
        ta: "கிராமத்து வயல்வெளிகள் மற்றும் தோட்டங்களை தாவரவியலுடன் இணைத்தல்.",
        en: "Connecting botany with the green fields and gardens of rural India.",
        hi: "ग्रामीण खेतों और पौधों को विज्ञान से जोड़ना।",
        or: "ଗ୍ରାମ୍ୟ ଚାଷ ଜମି ଏବଂ ଗଛଲତା ସହ ବିଜ୍ଞାନ।"
      },
      sections: {
        ta: [
          {
            title: "1. வேர் அமைப்பு (Root System)",
            desc: "வேர்கள் தாவரத்தை மண்ணில் உறுதியாகப் பற்றிக்கொள்கின்றன. வேர்த்தூவிகள் நிலத்தடி நீரையும் தாதுக்களையும் உறிஞ்சி சைலம் குழாய்கள் வழியே மேலே அனுப்புகின்றன.",
            keyPoint: "முக்கிய கருத்து: வேப்ப மரம் ஆழமான ஆணிவேரால் வறட்சியைத் தாங்குகிறது."
          },
          {
            title: "2. ஒளிச்சேர்க்கை (Photosynthesis)",
            desc: "பச்சையம் சூரிய ஒளியைப் பயன்படுத்தி கார்பன் டை ஆக்சைடு மற்றும் நீரிலிருந்து குளுக்கோஸ் (உணவு) தயாரித்து பிராணவாயுவை வெளியிடுகிறது.",
            keyPoint: "சூத்திரம்: 6CO₂ + 6H₂O + சூரிய ஒளி ➔ C₆H₁₂O₆ (சர்க்கரை) + 6O₂ (ஆக்சிஜன்)."
          }
        ],
        en: [
          {
            title: "1. The Root System",
            desc: "Roots anchor the plant firmly in the soil. Microscopic root hairs absorb groundwater and essential minerals, pumping them upwards through xylem vessels.",
            keyPoint: "Key Takeaway: Taproots in Neem reach deep ground aquifers, surviving droughts."
          },
          {
            title: "2. The Green Factory: Photosynthesis",
            desc: "Chlorophyll in green leaves captures sunlight. The plant takes CO2 from air and water from soil to create glucose energy and oxygen.",
            keyPoint: "Equation: 6CO₂ + 6H₂O + Sunlight ➔ C₆H₁₂O₆ (Sugar) + 6O₂ (Oxygen)."
          }
        ],
        hi: [
          {
            title: "1. जड़ प्रणाली (Root System)",
            desc: "जड़ें पौधे को मिट्टी में मजबूती से पकड़ती हैं और पानी तथा खनिजों को तने तक पहुंचाती हैं।",
            keyPoint: "मुख्य बिंदु: नीम की गहरी जड़ें सूखे में भी पानी सोखती हैं।"
          },
          {
            title: "2. प्रकाश संश्लेषण (Photosynthesis)",
            desc: "पत्तियां सूर्य की धूप, पानी और कार्बन डाइऑक्साइड से भोजन और ऑक्सीजन बनाती हैं।",
            keyPoint: "समीकरण: धूप + पानी + CO₂ ➔ भोजन + ऑक्सीजन।"
          }
        ],
        or: [
          {
            title: "1. ଚେର ବ୍ୟବସ୍ଥା (Root System)",
            desc: "ଚେର ମାଟିରୁ ଜଳ ଏବଂ ଖଣିଜ ଲବଣ ଶୋଷଣ କରେ।",
            keyPoint: "ମୁଖ୍ୟ କଥା: ନିମ୍ବ ଚେର ଗଭୀର ପାଣି ଶୋଷିପାରେ।"
          },
          {
            title: "2. ଆଲୋକ ସଂଶ୍ଳେଷଣ (Photosynthesis)",
            desc: "ପତ୍ର ସୂର୍ଯ୍ୟାଲୋକରୁ ଖାଦ୍ୟ ଏବଂ ଅମ୍ଳଜାନ ଉତ୍ପାଦନ କରେ।",
            keyPoint: "ସୂତ୍ର: ସୂର୍ଯ୍ୟାଲୋକ + ଜଳ + CO₂ ➔ ଖାଦ୍ୟ + ଅମ୍ଳଜାନ।"
          }
        ]
      }
    },
    water: {
      title: {
        ta: "நீர் மேலாண்மை & கிராமத்துக் குளங்கள்",
        en: "Water Conservation & Village Tanks",
        hi: "जल संरक्षण और ग्रामीण तालाब",
        or: "ଜଳ ସଂରକ୍ଷଣ ଏବଂ ପୋଖରୀ"
      },
      subject: "Science • நீர் மேலாண்மை",
      emoji: "💧",
      heading: {
        ta: "கிராமப்புறங்களில் ஒவ்வொரு துளி நீரையும் சேமிப்போம்",
        en: "Conserving Every Drop in Rural Communities",
        hi: "गाँव में जल की हर बूंद का संरक्षण",
        or: "ଗ୍ରାମରେ ଜଳ ସଂରକ୍ଷଣ"
      },
      sub: {
        ta: "மழைநீர் சேகரிப்பு மற்றும் விவசாய நீர் மேலாண்மை.",
        en: "Rainwater harvesting and preventing agricultural runoff.",
        hi: "वर्षा जल संचयन और कृषि जल प्रबंधन।",
        or: "ବର୍ଷା ଜଳ ଅମଳ ଏବଂ କୃଷି।"
      },
      sections: {
        ta: [
          {
            title: "1. கூரை மழைநீர் சேகரிப்பு",
            desc: "வீட்டுக் கூரைகளில் விழும் மழைநீரை குழாய் மூலம் சேமித்து நிலத்தடி நீர்மட்டத்தை உயர்த்தலாம்.",
            keyPoint: "பயன்: 1 கூரை ஆண்டுக்கு 50,000 லிட்டர் நிலத்தடி நீரை ரீசார்ஜ் செய்கிறது."
          }
        ],
        en: [
          {
            title: "1. Rooftop Rainwater Harvesting",
            desc: "Clean rainwater from roofs is channeled into percolation pits to recharge village borewells.",
            keyPoint: "Impact: 1 rooftop can recharge up to 50,000 liters per monsoon season."
          }
        ],
        hi: [
          {
            title: "1. छत का वर्षा जल संचयन",
            desc: "छत के बारिश के पानी को गड्ढों में डालकर भूजल स्तर बढ़ाया जा सकता है।",
            keyPoint: "लाभ: 1 छत 50,000 लीटर भूजल रिचार्ज कर सकती है।"
          }
        ],
        or: [
          {
            title: "1. ଛାତ ବର୍ଷା ଜଳ ଅମଳ",
            desc: "ବର୍ଷା ଜଳ ସଂଗ୍ରହ କରି ଭୂତଳ ଜଳସ୍ତର ବୃଦ୍ଧି କରାଯାଏ।",
            keyPoint: "ଲାଭ: ୫୦,୦୦୦ ଲିଟର ଜଳ ବଞ୍ଚାଏ।"
          }
        ]
      }
    }
  },

  math: {
    fractions: {
      title: {
        ta: "அன்றாட வாழ்வில் பின்னங்கள்",
        en: "Fractions in Everyday Village Life",
        hi: "दैनिक जीवन में भिन्न",
        or: "ଦୈନନ୍ଦିନ ଜୀବନରେ ଭଗ୍ନାଂଶ"
      },
      subject: "Mathematics • பின்னங்கள்",
      emoji: "🍰",
      heading: {
        ta: "உணவைப் பகிர்வதும் நிலத்தை பிரிப்பதும்",
        en: "Sharing Food & Distributing Crop Harvests",
        hi: "भोजन बांटना और फसल विभाजन",
        or: "ଖାଦ୍ୟ ବଣ୍ଟନ ଏବଂ ଭଗ୍ନାଂଶ"
      },
      sub: {
        ta: "கிராமத்துப் பொருட்களைப் பயன்படுத்தி பின்னங்களை எளிதாகக் கற்போம்.",
        en: "Mastering numerator and denominator using familiar village items.",
        hi: "ग्रामीण वस्तुओं से भिन्न को सरलता से समझें।",
        or: "ସରଳ ଭାବେ ଭଗ୍ନାଂଶ ଶିଖିବା।"
      },
      sections: {
        ta: [
          {
            title: "1. பின்னம் என்றால் என்ன?",
            desc: "ஒரு முழுப் பொருளை சமமாகப் பிரிக்கும்போது கிடைக்கும் பாகமே பின்னம். கீழ் எண் (பகுதி) மொத்தப் பிரிவுகளையும், மேல் எண் (தொகுதி) எடுத்த பாகத்தையும் குறிக்கும்.",
            keyPoint: "உதாரணம்: 1 தோசையை 4 சம துண்டுகளாக வெட்டினால் 1 துண்டு என்பது 1/4 (கால் பாகம்)."
          }
        ],
        en: [
          {
            title: "1. What is a Fraction?",
            desc: "A fraction represents part of a whole. Denominator shows total parts, numerator shows parts taken.",
            keyPoint: "Example: 1 Dosa cut into 4 equal slices = each slice is 1/4 (one quarter)."
          }
        ],
        hi: [
          {
            title: "1. भिन्न क्या है?",
            desc: "भिन्न किसी पूरी वस्तु का हिस्सा दर्शाती है। हर कुल भागों को और अंश लिए गए भाग को दर्शाता है।",
            keyPoint: "उदाहरण: 1 डोसा को 4 भागों में काटा = 1 भाग 1/4 है।"
          }
        ],
        or: [
          {
            title: "1. ଭଗ୍ନାଂଶ କଣ?",
            desc: "ଭଗ୍ନାଂଶ ଏକ ପୂର୍ଣ୍ଣ ବସ୍ତୁର ଅଂଶ ଅଟେ।",
            keyPoint: "ଉଦାହରଣ: ୪ ଖଣ୍ଡରୁ ୧ ଖଣ୍ଡ = ୧/୪।"
          }
        ]
      }
    }
  },

  english: {
    everyday: {
      title: {
        ta: "தினசரி கிராமத்து ஆங்கில உரையாடல்",
        en: "Everyday Rural English Communication",
        hi: "दैनिक ग्रामीण अंग्रेजी बोलचाल",
        or: "ଦୈନନ୍ଦିନ ଇଂରାଜୀ କଥାବାର୍ତ୍ତା"
      },
      subject: "English • தினசரி ஆங்கிலம்",
      emoji: "🗣️",
      heading: {
        ta: "கிராமப்புற மாணவர்களுக்கான எளிய ஆங்கிலப் பயிற்சி",
        en: "Confident Spoken English for Village Learners",
        hi: "ग्रामीण छात्रों के लिए आत्मविश्वासपूर्ण अंग्रेजी",
        or: "ସରଳ ଇଂରାଜୀ ଶିକ୍ଷା"
      },
      sub: {
        ta: "பள்ளி மற்றும் விவசாயத்தில் பயன்படுத்தும் வாக்கியங்கள்.",
        en: "Phrases for farming, school, and local community interaction.",
        hi: "स्कूल और खेती में काम आने वाले वाक्य।",
        or: "ସ୍କୁଲ ଏବଂ ଚାଷ ସମ୍ପର୍କିତ ବାକ୍ୟ।"
      },
      sections: {
        ta: [
          {
            title: "1. வாழ்த்துகள் & அறிமுகம்",
            desc: "'Good morning, teacher!' • 'My name is Kavin and I study in Class 10.'",
            keyPoint: "பயிற்சி: தெளிவான குரலில் பேசப் பழகுங்கள்."
          }
        ],
        en: [
          {
            title: "1. Greetings & Introductions",
            desc: "'Good morning, teacher!' • 'My name is Kavin and I study in Class 10.'",
            keyPoint: "Practice: Speak with a clear, polite tone."
          }
        ],
        hi: [
          {
            title: "1. अभिवादन और परिचय",
            desc: "'Good morning, teacher!' • 'My name is Kavin.'",
            keyPoint: "अभ्यास: विनम्रता से बोलें।"
          }
        ],
        or: [
          {
            title: "1. ପରିଚୟ ଏବଂ ଶୁଭେଚ୍ଛା",
            desc: "'Good morning, teacher!' • 'My name is Kavin.'",
            keyPoint: "ଅଭ୍ୟାସ କରନ୍ତୁ।"
          }
        ]
      }
    }
  }
};

// ==========================================================================
// 6. CORE NAVIGATION & SCREEN SWITCHER
// ==========================================================================
function navigateTo(screenId) {
  AppState.currentScreen = screenId;

  const allScreens = document.querySelectorAll(".screen");
  allScreens.forEach(screen => screen.classList.remove("active"));

  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) {
    targetScreen.classList.add("active");
    const scrollContainer = targetScreen.querySelector(".screen-scrollable-content");
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }

  const navTabs = document.querySelectorAll(".nav-tab");
  navTabs.forEach(tab => {
    if (tab.dataset.target === screenId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  if (screenId === "teacher") {
    AppState.currentRole = "teacher";
    updateRoleHeaderUI();
  } else if (screenId !== "splash") {
    AppState.currentRole = "student";
    updateRoleHeaderUI();
  }
}

function updateRoleHeaderUI() {
  const roleIcon = document.getElementById("roleIcon");
  const roleLabel = document.getElementById("roleLabel");
  if (!roleIcon || !roleLabel) return;

  const dict = Translations[AppState.user.langCode] || Translations.ta;

  if (AppState.currentRole === "teacher") {
    roleIcon.textContent = "🧑‍🌾";
    roleLabel.textContent = dict.ctrl_student_view;
  } else {
    roleIcon.textContent = "👩‍🏫";
    roleLabel.textContent = dict.ctrl_teacher_view;
  }
}

// ==========================================================================
// 7. TOAST NOTIFICATIONS & CELEBRATIONS
// ==========================================================================
function showToast(message, icon = "🌱") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function triggerCelebrationModal(title, subtitle, badgeName = "Village Explorer", badgeEmoji = "🌾", onContinue = null) {
  const modal = document.getElementById("celebrationModal");
  if (!modal) return;

  AudioEngine.playFanfare();

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalSubtitle").textContent = subtitle;
  document.getElementById("modalBadgeName").textContent = badgeName;
  document.querySelector(".badge-huge").textContent = badgeEmoji;

  modal.style.display = "flex";

  const btnContinue = document.getElementById("btnModalContinue");
  btnContinue.onclick = () => {
    modal.style.display = "none";
    if (onContinue) onContinue();
  };
}

function addXP(amount) {
  AppState.xp += amount;
  AudioEngine.playCoin();
  updateGlobalStatsUI();
  showToast(`+${amount} XP Earned! Great job!`, "⭐");
}

function updateGlobalStatsUI() {
  const homeXp = document.getElementById("homeXpVal");
  if (homeXp) homeXp.textContent = AppState.xp;

  const homeLevel = document.getElementById("homeLevelVal");
  if (homeLevel) homeLevel.textContent = `Level ${AppState.level}`;

  const homeStreak = document.getElementById("homeStreakVal");
  if (homeStreak) homeStreak.textContent = `${AppState.streak} Day`;

  const progXp = document.getElementById("progTotalXp");
  if (progXp) progXp.textContent = AppState.xp;

  const progLevel = document.getElementById("progLevel");
  if (progLevel) progLevel.textContent = `Level ${AppState.level}`;

  const progMissions = document.getElementById("progMissions");
  if (progMissions) progMissions.textContent = AppState.missionsCompleted;

  const profXp = document.getElementById("profileXpDisplay");
  if (profXp) profXp.textContent = AppState.xp;

  const profLevel = document.getElementById("profileLevelDisplay");
  if (profLevel) profLevel.textContent = AppState.level;

  const profName = document.getElementById("profileNameDisplay");
  if (profName) profName.textContent = AppState.user.name;

  const homeName = document.getElementById("homeUserName");
  if (homeName) homeName.textContent = AppState.user.name;

  const profAvatar = document.getElementById("profileAvatarDisplay");
  if (profAvatar) profAvatar.textContent = AppState.user.avatar;

  const homeAvatar = document.getElementById("homeAvatarEmoji");
  if (homeAvatar) homeAvatar.textContent = AppState.user.avatar;
}

// ==========================================================================
// 8. 100% COMPLETE MULTILINGUAL ENGINE (setLanguage)
// ==========================================================================
function setLanguage(langCode) {
  AppState.user.langCode = langCode;
  const langNames = { ta: "Tamil", en: "English", hi: "Hindi", or: "Odia" };
  AppState.user.language = langNames[langCode] || "Tamil";

  // Set HTML lang attribute & font family class
  document.documentElement.lang = langCode;
  if (langCode === "ta") {
    document.body.classList.add("lang-ta");
  } else {
    document.body.classList.remove("lang-ta");
  }

  const dict = Translations[langCode] || Translations.ta;

  // 1. Update ALL data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // 2. Update Active Language Badge on Home
  const activeLangTag = document.getElementById("homeActiveLangBadge");
  if (activeLangTag) {
    const nativeLabels = { ta: "தமிழ்", en: "English", hi: "हिन्दी", or: "ଓଡ଼ିଆ" };
    activeLangTag.textContent = nativeLabels[langCode] || "Tamil";
  }

  // 3. Update Dropdown and Cards
  const quickSelect = document.getElementById("quickLangSelect");
  if (quickSelect) quickSelect.value = langCode;

  document.querySelectorAll(".lang-option-card").forEach(card => {
    if (card.dataset.langCode === langCode) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  document.querySelectorAll(".splash-lang-btn").forEach(btn => {
    if (btn.dataset.lang === langCode) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 4. Update Student Profile Language display
  const profLang = document.getElementById("profileLangDisplay");
  if (profLang) profLang.textContent = AppState.user.language;

  // 5. Update Plant Lens Details
  switchDetectedPlant(AppState.activePlant);

  // 6. Update Role Header button
  updateRoleHeaderUI();

  // 7. If Quiz is currently open, re-render quiz
  if (AppState.currentScreen === "quiz") {
    renderQuizQuestion();
  }

  showToast(`Language set to ${AppState.user.language}`, "🌐");
}

function speakText(text) {
  const waves = document.querySelectorAll(".voice-wave-anim");
  waves.forEach(w => w.classList.add("speaking"));

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (AppState.user.langCode === "ta") {
      utterance.lang = "ta-IN";
    } else if (AppState.user.langCode === "hi") {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-IN";
    }

    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      waves.forEach(w => w.classList.remove("speaking"));
    };

    utterance.onerror = () => {
      waves.forEach(w => w.classList.remove("speaking"));
    };

    window.speechSynthesis.speak(utterance);
  } else {
    setTimeout(() => {
      waves.forEach(w => w.classList.remove("speaking"));
    }, 2500);
  }

  showToast("Audio Read-Aloud Playing", "🔊");
}

// ==========================================================================
// 9. LIVE WEBCAM & PLANT AI SIMULATOR
// ==========================================================================
let liveCameraStream = null;

async function toggleLiveWebcam() {
  const video = document.getElementById("liveCameraVideo");
  const btnToggle = document.getElementById("btnToggleLiveWebcam");
  const lensStatus = document.getElementById("lensStatusText");

  if (liveCameraStream) {
    liveCameraStream.getTracks().forEach(track => track.stop());
    liveCameraStream = null;
    video.style.display = "none";
    btnToggle.textContent = "📹 Switch Live Camera";
    lensStatus.textContent = "📷 Simulated Botanical AI Lens";
    showToast("Switched to Simulated AI Botanical Scanner", "🌿");
  } else {
    try {
      liveCameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      video.srcObject = liveCameraStream;
      video.style.display = "block";
      btnToggle.textContent = "🔄 Stop Live Camera";
      lensStatus.textContent = "🟢 Live Camera Active";
      showToast("Live Camera Active! Point at real leaves/plants.", "📷");
    } catch (err) {
      showToast("Camera access simulated (Permission not granted or no webcam)", "📷");
    }
  }
}

function switchDetectedPlant(plantKey) {
  const plant = AppState.plantDatabase[plantKey];
  if (!plant) return;

  AppState.activePlant = plantKey;
  const lang = AppState.user.langCode;

  const plantName = plant.name[lang] || plant.name.ta;
  const plantSub = plant.subname[lang] || plant.subname.ta;
  const factsList = plant.facts[lang] || plant.facts.ta;
  const voiceStr = plant.voiceText[lang] || plant.voiceText.ta;

  document.getElementById("plantEmoji").textContent = plant.emoji;
  document.getElementById("detectedPlantName").textContent = plantName;

  document.getElementById("factSheetTitle").textContent = plantName;
  document.getElementById("factSheetTamil").textContent = plantSub;
  document.getElementById("fact1Text").innerHTML = `<strong>1:</strong> ${factsList[0]}`;
  document.getElementById("fact2Text").innerHTML = `<strong>2:</strong> ${factsList[1]}`;
  document.getElementById("fact3Text").innerHTML = `<strong>3:</strong> ${factsList[2]}`;

  const btnTamil = document.getElementById("btnListenPlantTamil");
  if (btnTamil) {
    btnTamil.setAttribute("data-text", voiceStr);
  }

  document.querySelectorAll(".plant-pill").forEach(pill => {
    if (pill.dataset.plant === plantKey) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  const s2 = document.getElementById("questStep2");
  const s3 = document.getElementById("questStep3");
  if (s2) s2.classList.add("active");
  if (s3) s3.classList.add("active");
}

// ==========================================================================
// 10. INTERACTIVE VILLAGE LAB GAMES (Kirana Store & Harvest Scale)
// ==========================================================================
function openShopGame() {
  document.getElementById("modalShopGame").style.display = "flex";
  updateShopBillDisplay();
}

function closeShopGame() {
  document.getElementById("modalShopGame").style.display = "none";
}

function updateShopBillDisplay() {
  let total = 0;
  total += AppState.shopGame.items.rice.qty * AppState.shopGame.items.rice.price;
  total += AppState.shopGame.items.jaggery.qty * AppState.shopGame.items.jaggery.price;
  total += AppState.shopGame.items.lentils.qty * AppState.shopGame.items.lentils.price;

  const cashInput = document.getElementById("shopCashGiven");
  const cash = parseFloat(cashInput.value) || 0;
  const change = Math.max(0, cash - total);

  document.getElementById("shopTotalBill").textContent = `₹${total}`;
  document.getElementById("shopChangeDue").textContent = `₹${change}`;
}

function checkoutShopBill() {
  let total = 0;
  total += AppState.shopGame.items.rice.qty * AppState.shopGame.items.rice.price;
  total += AppState.shopGame.items.jaggery.qty * AppState.shopGame.items.jaggery.price;
  total += AppState.shopGame.items.lentils.qty * AppState.shopGame.items.lentils.price;

  if (total === 0) {
    showToast("Please add at least 1 item to the grocery cart!", "🛒");
    return;
  }

  closeShopGame();
  addXP(30);
  AppState.missionsCompleted++;
  updateGlobalStatsUI();

  triggerCelebrationModal(
    "Shopping Math Mission Complete!",
    `Total Bill ₹${total} calculated accurately! +30 XP`,
    "Kirana Math Master",
    "🛒",
    () => startQuiz("math")
  );
}

function openFarmGame() {
  document.getElementById("modalFarmGame").style.display = "flex";
  updateScaleWeight(AppState.farmGame.bags);
}

function closeFarmGame() {
  document.getElementById("modalFarmGame").style.display = "none";
}

function updateScaleWeight(bags) {
  AppState.farmGame.bags = bags;
  const totalKg = bags * AppState.farmGame.bagWeight;
  
  document.getElementById("scaleWeightNumber").textContent = totalKg;
  
  const stack = document.getElementById("scaleBagStack");
  stack.innerHTML = "";
  for (let i = 0; i < bags; i++) {
    const s = document.createElement("span");
    s.textContent = "🌾";
    stack.appendChild(s);
  }

  document.querySelectorAll(".scale-btn").forEach(btn => {
    if (parseInt(btn.dataset.bags) === bags) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function confirmFarmHarvest() {
  closeFarmGame();
  addXP(30);
  AppState.missionsCompleted++;
  updateGlobalStatsUI();

  triggerCelebrationModal(
    "Farming Math Mission Complete!",
    `5 Bags × 25 kg = 125 kg Harvest Total! +30 XP`,
    "Village Agronomist",
    "🌾",
    () => startQuiz("math")
  );
}

// ==========================================================================
// 11. LESSON READER ENGINE
// ==========================================================================
function openLesson(subjectKey, topicKey) {
  const subjectObj = LessonRepository[subjectKey];
  if (!subjectObj) return;

  const lesson = subjectObj[topicKey] || Object.values(subjectObj)[0];
  if (!lesson) return;

  const lang = AppState.user.langCode;

  const titleStr = typeof lesson.title === "object" ? (lesson.title[lang] || lesson.title.ta) : lesson.title;
  const headingStr = typeof lesson.heading === "object" ? (lesson.heading[lang] || lesson.heading.ta) : lesson.heading;
  const subStr = typeof lesson.sub === "object" ? (lesson.sub[lang] || lesson.sub.ta) : lesson.sub;
  const sectionsList = lesson.sections[lang] || lesson.sections.ta || lesson.sections;

  document.getElementById("lessonViewTitle").textContent = titleStr;
  document.getElementById("lessonViewSubject").textContent = lesson.subject;
  document.getElementById("lessonHeroEmoji").textContent = lesson.emoji;
  document.getElementById("lessonHeroHeading").textContent = headingStr;
  document.getElementById("lessonHeroSub").textContent = subStr;

  const bodyContent = document.getElementById("lessonBodyContent");
  bodyContent.innerHTML = "";

  sectionsList.forEach(sec => {
    const block = document.createElement("div");
    block.className = "lesson-section-block";
    block.innerHTML = `
      <h4>${sec.title}</h4>
      <p>${sec.desc}</p>
      <div class="lesson-key-point">${sec.keyPoint}</div>
    `;
    bodyContent.appendChild(block);
  });

  const btnAudio = document.getElementById("btnLessonAudioSpeak");
  if (btnAudio) {
    btnAudio.setAttribute("data-text", `${headingStr}. ${sectionsList[0].desc}`);
  }

  const btnTakeQuiz = document.getElementById("btnLessonTakeQuiz");
  btnTakeQuiz.onclick = () => startQuiz(subjectKey);

  navigateTo("lesson");
}

// ==========================================================================
// 12. DYNAMIC CERTIFICATE GENERATOR (HTML5 Canvas)
// ==========================================================================
function openCertificateModal() {
  const modal = document.getElementById("modalCertificate");
  modal.style.display = "flex";
  drawCertificateCanvas();
}

function closeCertificateModal() {
  document.getElementById("modalCertificate").style.display = "none";
}

function drawCertificateCanvas() {
  const canvas = document.getElementById("certCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = "#FFFDF3";
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "#F4B942";
  ctx.lineWidth = 6;
  ctx.strokeRect(8, 8, w - 16, h - 16);

  ctx.strokeStyle = "#356B3D";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(14, 14, w - 28, h - 28);

  ctx.fillStyle = "#356B3D";
  ctx.font = "bold 16px Outfit, 'Baloo Thambi 2', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🌱 LEARNQUEST • கிராமப்புற கல்வி இயக்கம்", w / 2, 38);

  ctx.fillStyle = "#8B6F47";
  ctx.font = "bold 11px 'Plus Jakarta Sans', 'Baloo Thambi 2', sans-serif";
  ctx.fillText("VILLAGE SCHOLAR OF EXCELLENCE • கிராமத்து அறிஞர் சான்றிதழ்", w / 2, 54);

  ctx.fillStyle = "#1D2D1F";
  ctx.font = "12px 'Plus Jakarta Sans', 'Baloo Thambi 2', sans-serif";
  ctx.fillText("இச்சான்றிதழ் பெருமையுடன் வழங்கப்படுகிறது:", w / 2, 85);

  ctx.fillStyle = "#254F2C";
  ctx.font = "bold 20px Outfit, 'Baloo Thambi 2', sans-serif";
  ctx.fillText(AppState.user.name, w / 2, 114);

  ctx.fillStyle = "#536955";
  ctx.font = "11px 'Plus Jakarta Sans', 'Baloo Thambi 2', sans-serif";
  ctx.fillText(`${AppState.user.class}-ஆம் வகுப்பு • ${AppState.user.school}`, w / 2, 134);
  ctx.fillText(`கிராமப்புற பணிகளை வெற்றிகரமாக முடித்து, நிலை ${AppState.level} (${AppState.xp} XP) அடைந்தமைக்காக.`, w / 2, 155);

  ctx.font = "20px sans-serif";
  ctx.fillText("🌱  🌾  💧  ⭐  🏆", w / 2, 188);

  ctx.fillStyle = "#79907C";
  ctx.font = "10px 'Plus Jakarta Sans', 'Baloo Thambi 2', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`நாள்: ${new Date().toLocaleDateString()}`, 30, 235);

  ctx.textAlign = "right";
  ctx.fillText("தலைமை ஆசிரியர் கையொப்பம் ✍️", w - 30, 235);
}

function downloadCertificatePNG() {
  const canvas = document.getElementById("certCanvas");
  if (!canvas) return;

  const link = document.createElement("a");
  link.download = `LearnQuest_Certificate_${AppState.user.name}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Certificate downloaded successfully!", "💾");
}

function printCertificate() {
  window.print();
}

// ==========================================================================
// 13. ADAPTIVE LEARNING ENGINE ("GROW WITH ME")
// ==========================================================================
function setAdaptiveScenario(mode) {
  AppState.activeAdaptiveScenario = mode;

  const btnStruggling = document.getElementById("btnScenarioStruggling");
  const btnMastered = document.getElementById("btnScenarioMastered");
  const boxStruggling = document.getElementById("adaptiveBoxStruggling");
  const boxMastered = document.getElementById("adaptiveBoxMastered");

  if (mode === "struggling") {
    btnStruggling.classList.add("active");
    btnMastered.classList.remove("active");
    boxStruggling.style.display = "block";
    boxMastered.style.display = "none";
    showToast("Adaptive Mode: Low Score detected → Remedial Village Story loaded", "🧠");
  } else {
    btnMastered.classList.add("active");
    btnStruggling.classList.remove("active");
    boxMastered.style.display = "block";
    boxStruggling.style.display = "none";
    showToast("Adaptive Mode: Mastery detected → Advanced Challenge loaded", "🌟");
  }
}

function setDosaSlices(parts) {
  const visual = document.getElementById("dosaVisual");
  if (!visual) return;

  if (parts === 2) {
    visual.innerHTML = `
      <div class="dosa-slice slice-1 active">1/2</div>
      <div class="dosa-slice slice-2">1/2</div>
    `;
  } else if (parts === 4) {
    visual.innerHTML = `
      <div class="dosa-slice slice-1 active">1/4</div>
      <div class="dosa-slice slice-2">1/4</div>
      <div class="dosa-slice slice-3">1/4</div>
      <div class="dosa-slice slice-4">1/4</div>
    `;
  }

  document.querySelectorAll(".btn-dosa-cut").forEach(b => {
    if (parseInt(b.dataset.parts) === parts) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

// ==========================================================================
// 14. INTERACTIVE QUIZ ENGINE
// ==========================================================================
function startQuiz(subjectKey) {
  AppState.quiz.subject = subjectKey;
  AppState.quiz.questionIndex = 0;
  AppState.quiz.score = 0;

  const lang = AppState.user.langCode;
  const bank = QuestionBank[subjectKey] || QuestionBank.science;
  AppState.quiz.questions = bank[lang] || bank.ta || bank.en;

  const subjectTitles = {
    science: { ta: "அறிவியல் (Science)", en: "Science", hi: "विज्ञान", or: "ବିଜ୍ଞାନ" },
    math: { ta: "கணிதம் (Mathematics)", en: "Mathematics", hi: "गणित", or: "ଗଣିତ" },
    english: { ta: "ஆங்கிலம் (English)", en: "English", hi: "अंग्रेजी", or: "ଇଂରାଜୀ" }
  };

  const title = (subjectTitles[subjectKey] && subjectTitles[subjectKey][lang]) || "Quiz";
  document.getElementById("quizHeaderSubject").textContent = title;
  renderQuizQuestion();
  navigateTo("quiz");
}

function renderQuizQuestion() {
  const { questions, questionIndex } = AppState.quiz;
  const currentQ = questions[questionIndex];
  if (!currentQ) return;

  document.getElementById("quizQuestionCount").textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  
  const pct = ((questionIndex + 1) / questions.length) * 100;
  document.getElementById("quizProgressFill").style.width = `${pct}%`;

  const titleElem = document.getElementById("quizQuestionTitle");
  titleElem.textContent = `“${currentQ.q}”`;

  const voiceBtn = document.getElementById("btnQuizVoice");
  if (voiceBtn) {
    voiceBtn.setAttribute("data-text", currentQ.q);
  }

  const expBox = document.getElementById("quizExplanationBox");
  expBox.style.display = "none";

  const optionsList = document.getElementById("quizOptionsList");
  optionsList.innerHTML = "";

  const letters = ["A", "B", "C", "D"];
  currentQ.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.dataset.index = idx;
    btn.innerHTML = `
      <span class="opt-letter">${letters[idx]}</span>
      <span class="opt-text">${optText}</span>
    `;

    btn.addEventListener("click", () => handleOptionSelection(idx));
    optionsList.appendChild(btn);
  });

  const submitBtn = document.getElementById("btnSubmitQuizAnswer");
  submitBtn.disabled = true;
  submitBtn.textContent = "Submit Answer ➔";
  submitBtn.onclick = handleSubmitQuizAnswer;
}

let selectedOptionIndex = null;

function handleOptionSelection(idx) {
  selectedOptionIndex = idx;
  const allBtns = document.querySelectorAll(".quiz-opt-btn");
  allBtns.forEach((btn, i) => {
    if (i === idx) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  const submitBtn = document.getElementById("btnSubmitQuizAnswer");
  submitBtn.disabled = false;
}

function handleSubmitQuizAnswer() {
  if (selectedOptionIndex === null) return;

  const { questions, questionIndex } = AppState.quiz;
  const currentQ = questions[questionIndex];
  const allBtns = document.querySelectorAll(".quiz-opt-btn");
  const expBox = document.getElementById("quizExplanationBox");
  const expTitle = document.getElementById("quizExpTitle");
  const expDetail = document.getElementById("quizExpDetail");
  const submitBtn = document.getElementById("btnSubmitQuizAnswer");

  const isCorrect = selectedOptionIndex === currentQ.correct;

  allBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.correct) {
      btn.classList.add("correct");
    } else if (idx === selectedOptionIndex && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    AppState.quiz.score++;
    AudioEngine.playCorrect();
    addXP(10);
    expTitle.textContent = "🎉 Correct Answer! / சரியான பதில்!";
    expTitle.style.color = "var(--dark-green)";
  } else {
    expTitle.textContent = "💡 Helpful Concept Review / கருத்து விளக்கம்:";
    expTitle.style.color = "#8C4700";
  }

  expDetail.textContent = currentQ.exp;
  expBox.style.display = "flex";

  if (questionIndex < questions.length - 1) {
    submitBtn.textContent = "Next Question / அடுத்த வினா ➔";
    submitBtn.disabled = false;
    submitBtn.onclick = () => {
      AppState.quiz.questionIndex++;
      selectedOptionIndex = null;
      renderQuizQuestion();
    };
  } else {
    submitBtn.textContent = "View Results / முடிவுகளைப் பார் 🎉";
    submitBtn.disabled = false;
    submitBtn.onclick = () => {
      showQuizResult();
    };
  }
}

function showQuizResult() {
  const { score } = AppState.quiz;
  document.getElementById("resultScoreVal").textContent = score;
  
  addXP(30);
  AppState.missionsCompleted++;
  updateGlobalStatsUI();

  navigateTo("result");
}

// ==========================================================================
// 15. OFFLINE ENGINE & DATA SYNC SIMULATOR
// ==========================================================================
function toggleOfflineSimulation() {
  AppState.isOffline = !AppState.isOffline;
  
  const offlineBadgeTop = document.getElementById("statusBarOfflineBadge");
  const offlineHomeDot = document.getElementById("homeOfflineDot");
  const offlineNotice = document.getElementById("homeOfflineNotice");
  const offlineBtnLabel = document.getElementById("offlineLabel");
  const offlineBtnIcon = document.getElementById("offlineIcon");
  const simNetLabel = document.getElementById("simNetLabel");
  const simNetIcon = document.getElementById("simNetIcon");
  const offlineStatusBadge = document.getElementById("offlineStatusBadge");

  const dict = Translations[AppState.user.langCode] || Translations.ta;

  if (AppState.isOffline) {
    if (offlineBadgeTop) offlineBadgeTop.style.display = "inline-block";
    if (offlineHomeDot) { offlineHomeDot.className = "status-dot offline"; }
    if (offlineNotice) offlineNotice.style.display = "flex";
    if (offlineBtnLabel) offlineBtnLabel.textContent = dict.ctrl_offline;
    if (offlineBtnIcon) offlineBtnIcon.textContent = "🟠";
    if (simNetLabel) simNetLabel.textContent = "Switch to Online Mode";
    if (simNetIcon) simNetIcon.textContent = "📶";
    if (offlineStatusBadge) {
      offlineStatusBadge.textContent = "🟠 " + dict.sync_offline_mode;
      offlineStatusBadge.style.background = "#FFF0DD";
      offlineStatusBadge.style.color = "#8C4700";
    }

    updateSyncBox("offline", dict.sync_offline_mode, dict.sync_offline_desc);
    showToast(dict.sync_offline_mode, "📶");
  } else {
    if (offlineBadgeTop) offlineBadgeTop.style.display = "none";
    if (offlineHomeDot) { offlineHomeDot.className = "status-dot online"; }
    if (offlineNotice) offlineNotice.style.display = "none";
    if (offlineBtnLabel) offlineBtnLabel.textContent = dict.ctrl_online;
    if (offlineBtnIcon) offlineBtnIcon.textContent = "🟢";
    if (simNetLabel) simNetLabel.textContent = dict.btn_switch_to_offline;
    if (simNetIcon) simNetIcon.textContent = "🟢";
    if (offlineStatusBadge) {
      offlineStatusBadge.textContent = "🟢 " + dict.offline_ready_badge;
      offlineStatusBadge.style.background = "var(--light-green)";
      offlineStatusBadge.style.color = "var(--dark-green)";
    }

    triggerCloudSync();
  }
}

function triggerCloudSync() {
  updateSyncBox("syncing", "☁️ Syncing Progress...", "Uploading local mission records to village school server...");
  showToast("Syncing progress with School Cloud Server...", "☁️");

  setTimeout(() => {
    updateSyncBox("synced", "✅ Progress Synced", "All offline records successfully uploaded at " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    showToast("Progress successfully synced!", "✅");
  }, 1800);
}

function updateSyncBox(status, title, desc) {
  const syncIcon = document.getElementById("syncIcon");
  const syncTitle = document.getElementById("syncTitle");
  const syncDesc = document.getElementById("syncDesc");

  if (syncTitle) syncTitle.textContent = title;
  if (syncDesc) syncDesc.textContent = desc;

  if (syncIcon) {
    if (status === "offline") syncIcon.textContent = "🟠";
    else if (status === "syncing") syncIcon.textContent = "⏳";
    else syncIcon.textContent = "🟢";
  }
}

// ==========================================================================
// 16. COMMUNITY CHALLENGE
// ==========================================================================
function completeCommunityStep3() {
  const check3 = document.getElementById("checkItem3");
  const circle3 = document.getElementById("circleCheck3");
  const btn3 = document.getElementById("btnCompleteCheck3");

  if (check3 && circle3) {
    check3.className = "check-item-card done";
    circle3.textContent = "✓";
    if (btn3) btn3.style.display = "none";

    AppState.communityChallenge.current = 3;
    AppState.communityChallenge.step3Done = true;

    document.getElementById("commProgressFraction").textContent = "3 / 3";
    document.getElementById("commTrackerFill").style.width = "100%";

    showToast("Checkpoint 3 marked complete! Challenge ready to submit!", "🎉");
  }
}

function finishCommunityChallenge() {
  if (!AppState.communityChallenge.step3Done) {
    completeCommunityStep3();
  }

  addXP(50);
  
  const ecoBadge = document.getElementById("badgeEcoChampion");
  if (ecoBadge) {
    ecoBadge.classList.remove("locked");
    ecoBadge.classList.add("unlocked");
    ecoBadge.querySelector(".badge-item-status").textContent = "Unlocked ✓";
  }

  triggerCelebrationModal(
    "Community Challenge Complete!",
    "+50 XP Earned • Water Saved for Melur",
    "Eco Champion",
    "🌍",
    () => navigateTo("progress")
  );
}

// ==========================================================================
// 17. TEACHER STUDENT INSPECTOR
// ==========================================================================
function openStudentDetailInspector(studentKey) {
  const data = AppState.studentRoster[studentKey] || AppState.studentRoster.kavin;
  const lang = AppState.user.langCode;
  
  document.getElementById("detailStudentName").textContent = `${data.avatar} ${data.name}'s Learning Profile`;
  document.getElementById("detailAccuracy").textContent = data.accuracy;
  document.getElementById("detailMissions").textContent = data.missions;
  document.getElementById("detailStreak").textContent = data.streak;

  const weakContainer = document.getElementById("detailWeakPills");
  weakContainer.innerHTML = "";
  const topics = data.weakTopics[lang] || data.weakTopics.ta || data.weakTopics.en;
  topics.forEach(topic => {
    const tag = document.createElement("span");
    tag.className = "weak-tag";
    tag.textContent = topic;
    weakContainer.appendChild(tag);
  });

  const btnSend = document.getElementById("btnSendStudentRemedial");
  btnSend.onclick = () => {
    showToast(`Dispatched Personalized Remedial Quest to ${data.name}!`, "📩");
    document.getElementById("modalStudentDetail").style.display = "none";
  };

  document.getElementById("modalStudentDetail").style.display = "flex";
}

function closeStudentDetailModal() {
  document.getElementById("modalStudentDetail").style.display = "none";
}

// ==========================================================================
// 18. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  setInterval(() => {
    const d = new Date();
    const clock = document.getElementById("statusClock");
    if (clock) {
      clock.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }, 1000);

  const btnSplash = document.getElementById("btnSplashGetStarted");
  if (btnSplash) {
    btnSplash.addEventListener("click", () => {
      navigateTo("home");
      showToast("Welcome to LearnQuest! Your village is your classroom.", "🌱");
    });
  }

  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;
      if (target) navigateTo(target);
    });
  });

  document.querySelectorAll("[data-back]").forEach(btn => {
    btn.addEventListener("click", () => {
      const backTarget = btn.dataset.back;
      navigateTo(backTarget || "home");
    });
  });

  const btnToggleFrame = document.getElementById("btnToggleFrame");
  if (btnToggleFrame) {
    btnToggleFrame.addEventListener("click", () => {
      const wrapper = document.getElementById("appWrapper");
      wrapper.classList.toggle("fullscreen-active");
      const isFull = wrapper.classList.contains("fullscreen-active");
      document.getElementById("frameToggleLabel").textContent = isFull ? "Phone Shell" : "Full View";
    });
  }

  const btnToggleAudioFx = document.getElementById("btnToggleAudioFx");
  if (btnToggleAudioFx) {
    btnToggleAudioFx.addEventListener("click", () => {
      AppState.audioFxEnabled = !AppState.audioFxEnabled;
      btnToggleAudioFx.innerHTML = AppState.audioFxEnabled
        ? `<span>🔊</span> <span data-i18n="ctrl_sound_on">Sound: ON</span>`
        : `<span>🔇</span> <span data-i18n="ctrl_sound_off">Sound: OFF</span>`;
      showToast(`Audio Sound FX: ${AppState.audioFxEnabled ? "ON" : "OFF"}`, "🔊");
    });
  }

  const btnToggleRole = document.getElementById("btnToggleRole");
  if (btnToggleRole) {
    btnToggleRole.addEventListener("click", () => {
      if (AppState.currentRole === "student") {
        navigateTo("teacher");
      } else {
        navigateTo("home");
      }
    });
  }

  const btnTeacherBack = document.getElementById("btnTeacherBackToStudent");
  if (btnTeacherBack) {
    btnTeacherBack.addEventListener("click", () => navigateTo("home"));
  }

  const cardHomeTeacher = document.getElementById("cardHomeTeacher");
  if (cardHomeTeacher) {
    cardHomeTeacher.addEventListener("click", () => navigateTo("teacher"));
  }

  const btnSwitchFromProfile = document.getElementById("btnSwitchToTeacherFromProfile");
  if (btnSwitchFromProfile) {
    btnSwitchFromProfile.addEventListener("click", () => navigateTo("teacher"));
  }

  const btnToggleOffline = document.getElementById("btnToggleOffline");
  if (btnToggleOffline) {
    btnToggleOffline.addEventListener("click", toggleOfflineSimulation);
  }

  const btnToggleSimNetwork = document.getElementById("btnToggleSimNetwork");
  if (btnToggleSimNetwork) {
    btnToggleSimNetwork.addEventListener("click", toggleOfflineSimulation);
  }

  const btnHeaderOffline = document.getElementById("btnHeaderOffline");
  if (btnHeaderOffline) {
    btnHeaderOffline.addEventListener("click", () => navigateTo("offline"));
  }

  const btnTriggerManualSync = document.getElementById("btnTriggerManualSync");
  if (btnTriggerManualSync) {
    btnTriggerManualSync.addEventListener("click", triggerCloudSync);
  }

  const btnBannerSyncCheck = document.getElementById("btnBannerSyncCheck");
  if (btnBannerSyncCheck) {
    btnBannerSyncCheck.addEventListener("click", () => navigateTo("offline"));
  }

  // Language selectors
  const quickLangSelect = document.getElementById("quickLangSelect");
  if (quickLangSelect) {
    quickLangSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  document.querySelectorAll(".splash-lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  document.querySelectorAll(".lang-option-card").forEach(card => {
    card.addEventListener("click", () => setLanguage(card.dataset.langCode));
  });

  // Voice Read-Aloud
  document.addEventListener("click", (e) => {
    const voiceBtn = e.target.closest(".btn-voice-speak");
    if (voiceBtn) {
      const textToSpeak = voiceBtn.getAttribute("data-text") || "Welcome to LearnQuest.";
      speakText(textToSpeak);
    }
  });

  const btnHeaderVoice = document.getElementById("btnHeaderVoice");
  if (btnHeaderVoice) {
    btnHeaderVoice.addEventListener("click", () => navigateTo("language"));
  }

  // Feature Cards
  const cardHomeGrow = document.getElementById("cardHomeGrowWithMe");
  if (cardHomeGrow) {
    cardHomeGrow.addEventListener("click", () => navigateTo("grow-with-me"));
  }

  const cardHomeSubjects = document.getElementById("cardHomeSubjects");
  if (cardHomeSubjects) {
    cardHomeSubjects.addEventListener("click", () => navigateTo("subjects"));
  }

  const cardHomeOffline = document.getElementById("cardHomeOffline");
  if (cardHomeOffline) {
    cardHomeOffline.addEventListener("click", () => navigateTo("offline"));
  }

  const cardHomeLanguage = document.getElementById("cardHomeLanguage");
  if (cardHomeLanguage) {
    cardHomeLanguage.addEventListener("click", () => navigateTo("language"));
  }

  const cardHomeProgress = document.getElementById("cardHomeProgress");
  if (cardHomeProgress) {
    cardHomeProgress.addEventListener("click", () => navigateTo("progress"));
  }

  const cardHomeCommunity = document.getElementById("cardHomeCommunity");
  if (cardHomeCommunity) {
    cardHomeCommunity.addEventListener("click", () => navigateTo("community"));
  }

  const btnHomeStartMission = document.getElementById("btnHomeStartMission");
  if (btnHomeStartMission) {
    btnHomeStartMission.addEventListener("click", () => navigateTo("real-world"));
  }

  // Mission Hub
  document.querySelectorAll(".btn-start-plant-mission").forEach(b => {
    b.addEventListener("click", () => navigateTo("real-world"));
  });

  const btnStartWater = document.getElementById("btnStartWaterMission");
  if (btnStartWater) {
    btnStartWater.addEventListener("click", () => openLesson("science", "water"));
  }

  const btnStartShop = document.getElementById("btnStartShopMission");
  if (btnStartShop) {
    btnStartShop.addEventListener("click", openShopGame);
  }

  const btnStartFarm = document.getElementById("btnStartFarmMission");
  if (btnStartFarm) {
    btnStartFarm.addEventListener("click", openFarmGame);
  }

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.dataset.filter;

      document.querySelectorAll(".mission-card").forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Plant Camera
  document.querySelectorAll(".plant-pill").forEach(pill => {
    pill.addEventListener("click", () => switchDetectedPlant(pill.dataset.plant));
  });

  const btnToggleCamera = document.getElementById("btnToggleLiveWebcam");
  if (btnToggleCamera) {
    btnToggleCamera.addEventListener("click", toggleLiveWebcam);
  }

  const btnReidentify = document.getElementById("btnReidentifyPlant");
  if (btnReidentify) {
    btnReidentify.addEventListener("click", () => {
      const keys = ["neem", "tulsi", "moringa", "banana"];
      const nextKey = keys[(keys.indexOf(AppState.activePlant) + 1) % keys.length];
      switchDetectedPlant(nextKey);
      showToast(`AI Lens scanning... Detected ${AppState.plantDatabase[nextKey].name[AppState.user.langCode]}!`, "✨");
    });
  }

  const btnOpenMiniLesson = document.getElementById("btnOpenMiniLesson");
  if (btnOpenMiniLesson) {
    btnOpenMiniLesson.addEventListener("click", () => openLesson("science", "plants"));
  }

  const btnCompleteMission = document.getElementById("btnCompleteMissionFlow");
  if (btnCompleteMission) {
    btnCompleteMission.addEventListener("click", () => {
      addXP(30);
      AppState.missionsCompleted++;
      updateGlobalStatsUI();

      triggerCelebrationModal(
        "Plant Mission Completed!",
        "+30 XP Earned • Real World Exploration",
        "Village Explorer",
        "🌾",
        () => startQuiz("science")
      );
    });
  }

  // Shop Game
  document.querySelectorAll(".shop-item-pill").forEach(pill => {
    const name = pill.dataset.name;
    const key = name.includes("Rice") ? "rice" : name.includes("Jaggery") ? "jaggery" : "lentils";
    const minusBtn = pill.querySelector(".qty-btn.minus");
    const plusBtn = pill.querySelector(".qty-btn.plus");
    const qtySpan = pill.querySelector(".item-qty");

    minusBtn.addEventListener("click", () => {
      if (AppState.shopGame.items[key].qty > 0) {
        AppState.shopGame.items[key].qty--;
        qtySpan.textContent = AppState.shopGame.items[key].qty;
        updateShopBillDisplay();
      }
    });

    plusBtn.addEventListener("click", () => {
      AppState.shopGame.items[key].qty++;
      qtySpan.textContent = AppState.shopGame.items[key].qty;
      updateShopBillDisplay();
    });
  });

  const shopCashInput = document.getElementById("shopCashGiven");
  if (shopCashInput) {
    shopCashInput.addEventListener("input", updateShopBillDisplay);
  }

  const btnCloseShop = document.getElementById("btnCloseShopModal");
  if (btnCloseShop) btnCloseShop.addEventListener("click", closeShopGame);

  const btnCheckoutShop = document.getElementById("btnShopCheckout");
  if (btnCheckoutShop) btnCheckoutShop.addEventListener("click", checkoutShopBill);

  // Farm Game
  document.querySelectorAll(".scale-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      updateScaleWeight(parseInt(btn.dataset.bags));
    });
  });

  const btnCloseFarm = document.getElementById("btnCloseFarmModal");
  if (btnCloseFarm) btnCloseFarm.addEventListener("click", closeFarmGame);

  const btnFarmComplete = document.getElementById("btnFarmHarvestComplete");
  if (btnFarmComplete) btnFarmComplete.addEventListener("click", confirmFarmHarvest);

  // Lessons
  document.querySelectorAll(".btn-open-lesson").forEach(btn => {
    btn.addEventListener("click", () => {
      openLesson(btn.dataset.subject, btn.dataset.topic);
    });
  });

  // Certificate Generator
  const btnClaimCert = document.getElementById("btnClaimCertificate");
  if (btnClaimCert) btnClaimCert.addEventListener("click", openCertificateModal);

  const btnCertTeaser = document.getElementById("btnOpenCertificateTeaser");
  if (btnCertTeaser) btnCertTeaser.addEventListener("click", openCertificateModal);

  const btnCloseCert = document.getElementById("btnCloseCertModal");
  if (btnCloseCert) btnCloseCert.addEventListener("click", closeCertificateModal);

  const btnDownloadCert = document.getElementById("btnDownloadCert");
  if (btnDownloadCert) btnDownloadCert.addEventListener("click", downloadCertificatePNG);

  const btnPrintCert = document.getElementById("btnPrintCert");
  if (btnPrintCert) btnPrintCert.addEventListener("click", printCertificate);

  // Grow With Me Adaptive
  const btnScenStruggling = document.getElementById("btnScenarioStruggling");
  if (btnScenStruggling) {
    btnScenStruggling.addEventListener("click", () => setAdaptiveScenario("struggling"));
  }

  const btnScenMastered = document.getElementById("btnScenarioMastered");
  if (btnScenMastered) {
    btnScenMastered.addEventListener("click", () => setAdaptiveScenario("mastered"));
  }

  document.querySelectorAll(".btn-dosa-cut").forEach(b => {
    b.addEventListener("click", () => setDosaSlices(parseInt(b.dataset.parts)));
  });

  document.querySelectorAll("#practiceFractionOptions .practice-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.correct === "true";
      const fbBox = document.getElementById("practiceFeedbackBox");
      
      document.querySelectorAll("#practiceFractionOptions .practice-opt-btn").forEach(b => {
        b.classList.remove("selected-correct", "selected-wrong");
      });

      if (isCorrect) {
        btn.classList.add("selected-correct");
        fbBox.className = "practice-feedback good";
        fbBox.textContent = "🎉 Excellent! 1 slice out of 4 is 1/4 (one quarter). / அருமை! 4-ல் 1 பாகம் என்பது 1/4.";
        AudioEngine.playCorrect();
        addXP(10);
      } else {
        btn.classList.add("selected-wrong");
        fbBox.className = "practice-feedback bad";
        fbBox.textContent = "💡 Try again! 1 slice divided by 4 total slices gives 1/4. / மீண்டும் முயற்சி செய்!";
      }
      fbBox.style.display = "block";
    });
  });

  document.querySelectorAll("#practiceAdvOptions .practice-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.correct === "true";
      const fbBox = document.getElementById("practiceAdvFeedbackBox");

      document.querySelectorAll("#practiceAdvOptions .practice-opt-btn").forEach(b => {
        b.classList.remove("selected-correct", "selected-wrong");
      });

      if (isCorrect) {
        btn.classList.add("selected-correct");
        fbBox.className = "practice-feedback good";
        fbBox.textContent = "🌟 Brilliant! 1/3 of 12 = 4 acres, 1/2 of 12 = 6 acres. Total = 10 acres!";
        AudioEngine.playCorrect();
        addXP(15);
      } else {
        btn.classList.add("selected-wrong");
        fbBox.className = "practice-feedback bad";
        fbBox.textContent = "💡 Hint: Calculate (1/3 × 12) + (1/2 × 12).";
      }
      fbBox.style.display = "block";
    });
  });

  // Quizzes
  document.querySelectorAll(".btn-launch-quiz").forEach(btn => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.subject || "science"));
  });

  document.querySelectorAll(".topic-pill").forEach(pill => {
    pill.addEventListener("click", () => startQuiz(pill.dataset.subject || "science"));
  });

  // Results
  const btnResNext = document.getElementById("btnResultNextMission");
  if (btnResNext) btnResNext.addEventListener("click", () => navigateTo("missions"));

  const btnResProg = document.getElementById("btnResultViewProgress");
  if (btnResProg) btnResProg.addEventListener("click", () => navigateTo("progress"));

  const btnResGrow = document.getElementById("btnResultGrowWithMe");
  if (btnResGrow) btnResGrow.addEventListener("click", () => navigateTo("grow-with-me"));

  // Community
  const btnCheck3 = document.getElementById("btnCompleteCheck3");
  if (btnCheck3) btnCheck3.addEventListener("click", completeCommunityStep3);

  const btnCompComm = document.getElementById("btnCompleteCommunityChallenge");
  if (btnCompComm) btnCompComm.addEventListener("click", finishCommunityChallenge);

  // Edit Profile
  const btnOpenEdit = document.getElementById("btnOpenEditProfile");
  if (btnOpenEdit) btnOpenEdit.addEventListener("click", () => navigateTo("edit-profile"));

  const btnCancelEdit = document.getElementById("btnCancelEditProfile");
  if (btnCancelEdit) btnCancelEdit.addEventListener("click", () => navigateTo("profile"));

  document.querySelectorAll(".avatar-pick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".avatar-pick-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  const formEdit = document.getElementById("editProfileForm");
  if (formEdit) {
    formEdit.addEventListener("submit", (e) => {
      e.preventDefault();
      const activeAvatar = document.querySelector(".avatar-pick-btn.active");
      if (activeAvatar) AppState.user.avatar = activeAvatar.dataset.avatar;

      const nameInput = document.getElementById("inputStudentName");
      if (nameInput && nameInput.value) AppState.user.name = nameInput.value;

      const classSelect = document.getElementById("selectStudentClass");
      if (classSelect) AppState.user.class = classSelect.value;

      const langSelect = document.getElementById("selectStudentLang");
      if (langSelect) AppState.user.language = langSelect.value;

      const schoolInput = document.getElementById("inputSchoolName");
      if (schoolInput && schoolInput.value) AppState.user.school = schoolInput.value;

      updateGlobalStatsUI();
      showToast("Profile changes saved successfully! ✓", "👤");
      navigateTo("profile");
    });
  }

  // Teacher Inspector
  document.querySelectorAll(".clickable-student").forEach(item => {
    item.addEventListener("click", () => openStudentDetailInspector(item.dataset.student));
  });

  const btnCloseStudent = document.getElementById("btnCloseStudentModal");
  if (btnCloseStudent) btnCloseStudent.addEventListener("click", closeStudentDetailModal);

  document.querySelectorAll(".btn-xs-remedial").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const topic = btn.dataset.topic;
      const count = btn.dataset.count;
      showToast(`Assigned Remedial "${topic} Village Mission" to ${count} students!`, "📩");
      btn.textContent = "Assigned ✓";
      btn.style.background = "var(--dark-green)";
      btn.style.color = "var(--white)";
    });
  });

  const btnViewAll = document.getElementById("btnViewAllStudents");
  if (btnViewAll) {
    btnViewAll.addEventListener("click", () => openStudentDetailInspector("kavin"));
  }

  const btnFilterNeedsHelp = document.getElementById("btnFilterNeedsHelp");
  if (btnFilterNeedsHelp) {
    btnFilterNeedsHelp.addEventListener("click", () => {
      showToast("Filtered view: Showing students needing support (Ananya, Priya)", "🔍");
    });
  }

  // Share Progress Handler
  const btnShare = document.getElementById("btnShareProgress");
  if (btnShare) {
    btnShare.addEventListener("click", async () => {
      const shareData = {
        title: "🌱 LearnQuest — Rural Learning Achievement",
        text: `🌾 I'm learning with LearnQuest! Level ${AppState.level} (${AppState.levelTitle}) • ${AppState.xp} XP • ${AppState.missionsCompleted} Village Missions Completed!`,
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {}
      } else {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`);
        }
        showToast("Achievement link copied to clipboard! 📋", "🔗");
      }
    });
  }

  // Initialize with Tamil as default
  setLanguage("ta");
  updateGlobalStatsUI();
});

