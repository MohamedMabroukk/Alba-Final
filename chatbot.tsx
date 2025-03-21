"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

type Language = "en" | "ru" | "kk"

// Multilingual welcome messages
const welcomeMessages: Record<Language, string> = {
  en: "Hello! I'm Alba's emergency assistant. How can I help you with first aid questions today?",
  ru: "Здравствуйте! Я экстренный помощник Alba. Чем я могу помочь вам сегодня с вопросами по оказанию первой помощи?",
  kk: "Сәлеметсіз бе! Мен Alba-ның төтенше жағдай көмекшісімін. Бүгін алғашқы көмек сұрақтарымен қалай көмектесе аламын?",
}

// Emergency number by language
const emergencyNumbers: Record<Language, string> = {
  en: "For any life-threatening emergency, call 103 immediately.",
  ru: "При любой угрожающей жизни чрезвычайной ситуации немедленно звоните по номеру 103.",
  kk: "Кез-келген өмірге қауіп төндіретін төтенше жағдайда 103 нөміріне дереу қоңырау шалыңыз.",
}

// Comprehensive emergency responses in multiple languages
const emergencyResponses: Record<string, Record<Language, string>> = {
  cpr: {
    en: "To perform CPR (Cardiopulmonary Resuscitation):\n\n1. Check responsiveness: Tap the person and shout 'Are you okay?'\n2. Call for emergency help (103) or ask someone to do it\n3. Place the person on their back on a firm surface\n4. Expose the chest\n5. Place the heel of one hand on the center of the chest (between nipples), put your other hand on top\n6. Position your shoulders directly above your hands\n7. Push hard and fast: Compress at least 5-6 cm deep at a rate of 100-120 compressions per minute\n8. Allow complete chest recoil after each compression\n9. Minimize interruptions\n10. If trained, give 2 rescue breaths after every 30 compressions\n11. Continue until emergency services arrive or the person shows signs of life",
    ru: "Для выполнения СЛР (сердечно-легочной реанимации):\n\n1. Проверьте реакцию: Похлопайте человека и громко спросите 'Вы в порядке?'\n2. Вызовите скорую помощь (103) или попросите кого-нибудь сделать это\n3. Положите человека на спину на твердую поверхность\n4. Освободите грудную клетку\n5. Поместите основание одной ладони на центр грудной клетки (между сосками), положите вторую руку сверху\n6. Расположите плечи прямо над руками\n7. Нажимайте сильно и быстро: Компрессии глубиной не менее 5-6 см с частотой 100-120 компрессий в минуту\n8. Позволяйте грудной клетке полностью расправляться после каждого сжатия\n9. Минимизируйте перерывы\n10. Если обучены, делайте 2 вдоха после каждых 30 компрессий\n11. Продолжайте до прибытия скорой помощи или появления признаков жизни",
    kk: "ЖЖЖ (жүрек-өкпе жандандыру) жасау үшін:\n\n1. Жауап беруін тексеріңіз: Адамды түртіп, 'Сіз жақсысыз ба?' деп айқайлаңыз\n2. Жедел жәрдем шақырыңыз (103) немесе біреуден оны жасауды сұраңыз\n3. Адамды қатты бетке арқасымен жатқызыңыз\n4. Кеудесін ашыңыз\n5. Бір қолыңыздың өкшесін кеуденің ортасына (емшек арасына) қойыңыз, екінші қолыңызды үстіне қойыңыз\n6. Иықтарыңызды қолдарыңыздың үстінде тікелей орналастырыңыз\n7. Қатты және жылдам басыңыз: Минутына 100-120 компрессия жылдамдығымен кемінде 5-6 см тереңдікте қысыңыз\n8. Әр қысудан кейін кеуденің толық кеңеюіне мүмкіндік беріңіз\n9. Үзілістерді азайтыңыз\n10. Егер үйретілген болсаңыз, әр 30 компрессиядан кейін 2 құтқару демін беріңіз\n11. Жедел жәрдем келгенше немесе адам өмір белгілерін көрсеткенше жалғастырыңыз",
  },
  bleeding: {
    en: "To control severe bleeding:\n\n1. Apply direct pressure to the wound using a clean cloth, gauze pad, or your hand if nothing else is available\n2. If possible, elevate the injured area above the level of the heart\n3. Apply pressure continuously for at least 15 minutes\n4. If blood soaks through, add more material without removing the original dressing\n5. For limb wounds, if bleeding continues and you're trained, consider applying a tourniquet 5-7 cm above the wound (note time of application)\n6. Secure the injured person to prevent movement\n7. Keep the person warm and calm\n8. Call emergency services (103) immediately\n9. Do not remove embedded objects from wounds\n10. Once bleeding stops, secure dressing with bandage",
    ru: "Для остановки сильного кровотечения:\n\n1. Приложите прямое давление на рану, используя чистую ткань, марлевую подушечку или руку, если ничего другого нет\n2. По возможности поднимите травмированную область выше уровня сердца\n3. Непрерывно применяйте давление не менее 15 минут\n4. Если кровь пропитывает материал, добавьте еще, не удаляя первоначальную повязку\n5. Для ран конечностей, если кровотечение продолжается и вы обучены, рассмотрите возможность наложения жгута на 5-7 см выше раны (отметьте время наложения)\n6. Обеспечьте неподвижность пострадавшего\n7. Держите человека в тепле и спокойствии\n8. Немедленно вызовите скорую помощь (103)\n9. Не удаляйте застрявшие в ранах предметы\n10. Когда кровотечение остановится, закрепите повязку бинтом",
    kk: "Қатты қан кетуді бақылау үшін:\n\n1. Таза мата, дәке немесе басқа ештеңе болмаса, қолыңызды пайдаланып, жараға тікелей қысым жасаңыз\n2. Мүмкін болса, жарақаттанған аймақты жүрек деңгейінен жоғары көтеріңіз\n3. Кемінде 15 минут бойы үздіксіз қысым жасаңыз\n4. Егер қан сіңіп кетсе, бастапқы таңғышты алмай, қосымша материал қосыңыз\n5. Аяқ-қол жаралары үшін, егер қан кету жалғасса және сіз үйретілген болсаңыз, жарадан 5-7 см жоғары турникет қолдануды қарастырыңыз (қолдану уақытын белгілеңіз)\n6. Жарақаттанған адамның қозғалуын болдырмаңыз\n7. Адамды жылы және тыныш ұстаңыз\n8. Дереу жедел жәрдем қызметіне (103) қоңырау шалыңыз\n9. Жарадан кірістірілген заттарды алмаңыз\n10. Қан тоқтағаннан кейін, таңғышты бинтпен бекітіңіз",
  },
  choking: {
    en: "For choking (adult or child over 1 year):\n\n1. Ask 'Are you choking?' If the person can speak, cough, or breathe, encourage them to keep coughing\n2. If they cannot speak, cough effectively, or are making high-pitched noises:\n   a. Stand behind them and slightly to one side\n   b. Support their chest with one hand and lean them forward\n   c. Give up to 5 sharp back blows between the shoulder blades with the heel of your hand\n   d. Check if the obstruction has cleared after each blow\n3. If back blows fail, perform abdominal thrusts (Heimlich maneuver):\n   a. Stand behind the person and wrap your arms around their waist\n   b. Place your fist, thumb side in, just above their navel (belly button)\n   c. Grasp your fist with your other hand\n   d. Pull sharply inward and upward up to 5 times\n4. Alternate between 5 back blows and 5 abdominal thrusts until the object is dislodged\n5. If the person becomes unconscious, begin CPR\n6. Call emergency services (103) if the obstruction doesn't clear quickly",
    ru: "При удушье (взрослый или ребенок старше 1 года):\n\n1. Спросите 'Вы подавились?' Если человек может говорить, кашлять или дышать, поощряйте его продолжать кашлять\n2. Если он не может говорить, эффективно кашлять или издает высокие звуки:\n   a. Встаньте позади него и немного сбоку\n   b. Поддерживайте его грудь одной рукой и наклоните вперед\n   c. Сделайте до 5 резких ударов по спине между лопатками основанием ладони\n   d. Проверяйте, устранилась ли закупорка после каждого удара\n3. Если удары по спине не помогают, выполните толчки в живот (прием Геймлиха):\n   a. Встаньте позади человека и обхватите руками его талию\n   b. Поместите кулак, большим пальцем внутрь, чуть выше пупка\n   c. Обхватите кулак другой рукой\n   d. Резко потяните внутрь и вверх до 5 раз\n4. Чередуйте 5 ударов по спине и 5 толчков в живот, пока предмет не будет вытолкнут\n5. Если человек теряет сознание, начните СЛР\n6. Вызовите скорую помощь (103), если закупорка быстро не устраняется",
    kk: "Тұншығу кезінде (ересек немесе 1 жастан асқан бала):\n\n1. 'Сіз тұншығып жатырсыз ба?' деп сұраңыз. Егер адам сөйлей алса, жөтелсе немесе тыныс ала алса, оны жөтелуді жалғастыруға шақырыңыз\n2. Егер олар сөйлей алмаса, тиімді жөтеле алмаса немесе жоғары дыбыстар шығарса:\n   a. Олардың артында және біраз жанында тұрыңыз\n   b. Бір қолыңызбен олардың кеудесін қолдап, алға қарай еңкейтіңіз\n   c. Қолыңыздың өкшесімен жауырын арасына 5-ке дейін қатты соққы беріңіз\n   d. Әр соққыдан кейін кедергінің кеткенін тексеріңіз\n3. Егер арқаға соққылар сәтсіз болса, іш тартпаларын орындаңыз (Геймлих әдісі):\n   a. Адамның артында тұрып, қолдарыңызды белінің айналасына ораңыз\n   b. Жұдырығыңызды, бас бармағы ішке қарай, кіндіктен сәл жоғары қойыңыз\n   c. Жұдырығыңызды екінші қолыңызбен ұстаңыз\n   d. Резко потяните внутрь и вверх до 5 раз\n4. Зат шыққанша 5 арқа соққысы мен 5 іш тартпасын кезектестіріңіз\n5. Егер адам есінен танса, ЖЖЖ бастаңыз\n6. Егер кедергі тез арада тазармаса, жедел жәрдем қызметіне (103) қоңырау шалыңыз",
  },
  burn: {
    en: "For burns treatment:\n\n1. Ensure safety: Remove the person from danger and stop the burning process\n2. Remove any clothing or jewelry near the burned area (unless stuck to the skin)\n3. Cool the burn:\n   a. Run cool (not cold) water over the burn for 10-20 minutes\n   b. Don't use ice, ice water, or any creams or greasy substances (like butter)\n   c. Don't break blisters\n4. Cover the burn:\n   a. Use a clean, non-stick bandage or clean cloth\n   b. Wrap loosely to avoid pressure on the burned skin\n   c. Don't use fluffy cotton or materials that may stick to the burn\n5. For minor burns (redness, minor swelling, mild pain):\n   a. Take over-the-counter pain relievers if needed\n   b. Apply aloe vera gel or moisturizer\n6. Seek immediate medical attention for:\n   a. Large burns (larger than 3 inches/7.5 cm)\n   b. Deep burns affecting all layers of skin\n   c. Burns on the face, hands, feet, genitals, or major joints\n   d. Chemical or electrical burns\n   e. Burns with white or charred appearance\n7. Call emergency services (103) for serious burns",
    ru: "Для лечения ожогов:\n\n1. Обеспечьте безопасность: Уведите человека от опасности и остановите процесс горения\n2. Снимите любую одежду или украшения рядом с обожженной областью (если они не прилипли к коже)\n3. Охладите ожог:\n   a. Подержите обожженное место под прохладной (не холодной) водой 10-20 минут\n   b. Не используйте лед, ледяную воду или любые кремы или жирные вещества (например, масло)\n   c. Не вскрывайте волдыри\n4. Накройте ожог:\n   a. Используйте чистую, неприлипающую повязку или чистую ткань\n   b. Оберните свободно, чтобы избежать давления на обожженную кожу\n   c. Не используйте пушистый хлопок или материалы, которые могут прилипнуть к ожогу\n5. При незначительных ожогах (покраснение, небольшой отек, легкая боль):\n   a. При необходимости примите обезболивающие без рецепта\n   b. Нанесите гель алоэ вера или увлажняющий крем\n6. Немедленно обратитесь за медицинской помощью при:\n   a. Больших ожогах (больше 7,5 см)\n   b. Глубоких ожогах, затрагивающих все слои кожи\n   c. Ожогах на лице, руках, ногах, гениталиях или крупных суставах\n   d. Химических или электрических ожогах\n   e. Ожогах с белым или обугленным видом\n7. Вызовите скорую помощь (103) при серьезных ожогах",
    kk: "Күйіктерді емдеу үшін:\n\n1. Қауіпсіздікті қамтамасыз етіңіз: Адамды қауіптен алып тастаңыз және жану процесін тоқтатыңыз\n2. Күйген аймаққа жақын киімдерді немесе зергерлік бұйымдарды алып тастаңыз (егер теріге жабыспаса)\n3. Күйікті салқындатыңыз:\n   a. Күйікке 10-20 минут бойы салқын (суық емес) су ағызыңыз\n   b. Мұз, мұзды су немесе кез-келген кремдер немесе майлы заттарды (мысалы, май) қолданбаңыз\n   c. Көпіршіктерді жармаңыз\n4. Күйікті жабыңыз:\n   a. Таза, жабыспайтын таңғыш немесе таза мата қолданыңыз\n   b. Күйген теріге қысым түсірмеу үшін бос ораңыз\n   c. Күйікке жабысуы мүмкін түкті мақта немесе материалдарды қолданбаңыз\n5. Шағын күйіктер үшін (қызару, шағын ісіну, жеңіл ауырсыну):\n   a. Қажет болса, рецептсіз ауырсынуды басатын дәрілерді қабылдаңыз\n   b. Алоэ вера гелін немесе ылғалдандырғышты жағыңыз\n6. Келесі жағдайларда дереу медициналық көмекке жүгініңіз:\n   a. Үлкен күйіктер (7,5 см-ден үлкен)\n   b. Терінің барлық қабаттарын зақымдайтын терең күйіктер\n   c. Бетте, қолдарда, аяқтарда, жыныс мүшелерінде немесе негізгі буындарда күйіктер\n   d. Химиялық немесе электрлік күйіктер\n   e. Ақ немесе күйген түрі бар күйіктер\n7. Ауыр күйіктер үшін жедел жәрдем қызметіне (103) қоңырау шалыңыз",
  },
  unconscious: {
    en: "For an unconscious person who is breathing:\n\n1. Check responsiveness: Tap their shoulders and ask loudly if they're okay\n2. Call for emergency help (103) or ask someone to do it\n3. Open the airway: Place the person on their back and tilt the head back slightly to lift the chin\n4. Check breathing: Look, listen, and feel for breathing for no more than 10 seconds\n5. If breathing, place them in the recovery position:\n   a. Kneel beside the person and straighten their legs\n   b. Place the arm nearest to you at a right angle to their body, elbow bent, palm up\n   c. Bring the far arm across the chest and hold the back of the hand against the person's cheek nearest to you\n   d. With your other hand, grab the far leg just above the knee and pull it up, keeping the foot on the ground\n   e. While holding their hand against their cheek, pull on the far leg to roll them toward you onto their side\n   f. Adjust the top leg so both hip and knee are bent at right angles\n   g. Tilt the head back to ensure the airway remains open\n6. Monitor their breathing and pulse until emergency help arrives\n7. If they stop breathing, begin CPR immediately",
    ru: "Для человека без сознания, который дышит:\n\n1. Проверьте реакцию: Похлопайте по плечам и громко спросите, все ли в порядке\n2. Вызовите скорую помощь (103) или попросите кого-нибудь сделать это\n3. Откройте дыхательные пути: Положите человека на спину и слегка наклоните голову назад, чтобы приподнять подбородок\n4. Проверьте дыхание: Посмотрите, послушайте и почувствуйте дыхание не более 10 секунд\n5. Если дышит, поместите его в положение восстановления:\n   a. Встаньте на колени рядом с человеком и выпрямите его ноги\n   b. Расположите ближайшую к вам руку под прямым углом к телу, локоть согнут, ладонь вверх\n   c. Приведите дальнюю руку через грудь и держите тыльную сторону ладони у щеки человека, ближайшей к вам\n   d. Другой рукой возьмитесь за дальнюю ногу чуть выше колена и потяните ее вверх, держа ступню на земле\n   e. Удерживая руку у щеки, потяните за дальнюю ногу, чтобы перевернуть человека к себе на бок\n   f. Отрегулируйте верхнюю ногу так, чтобы бедро и колено были согнуты под прямым углом\n   g. Наклоните голову назад, чтобы дыхательные пути оставались открытыми\n6. Следите за дыханием и пульсом до прибытия скорой помощи\n7. Если дыхание прекратится, немедленно начните СЛР",
    kk: "Тыныс алып жатқан есінен танған адам үшін:\n\n1. Жауап беруін тексеріңіз: Иықтарынан түртіп, қатты дауыспен жағдайы жақсы ма деп сұраңыз\n2. Жедел жәрдем шақырыңыз (103) немесе біреуден оны жасауды сұраңыз\n3. Ауа жолын ашыңыз: Адамды арқасына жатқызып, иегін көтеру үшін басын сәл артқа еңкейтіңіз\n4. Тыныс алуын тексеріңіз: 10 секундтан аспайтын уақыт ішінде тыныс алуды көріңіз, тыңдаңыз және сезініңіз\n5. Егер тыныс алса, оны қалпына келтіру позициясына қойыңыз:\n   a. Адамның жанында тізерлеп, аяқтарын түзетіңіз\n   b. Сізге ең жақын қолын денесіне тік бұрышпен, шынтағын бүгіп, алақанын жоғары қаратып қойыңыз\n   c. Алыс қолын кеуде арқылы әкеліп, қолының сыртын адамның сізге ең жақын бетіне қарсы ұстаңыз\n   d. Другой рукой возьмитесь за дальнюю ногу чуть выше колена и потяните ее вверх, держа ступню на земле\n   e. Удерживая руку у щеки, потяните за дальнюю ногу, чтобы перевернуть человека к себе на бок\n   f. Отрегулируйте верхнюю ногу так, чтобы бедро и колено были согнуты под прямым углом\n   g. Наклоните голову назад, чтобы дыхательные пути оставались открытыми\n6. Жедел жәрдем келгенше олардың тыныс алуы мен пульсін бақылаңыз\n7. Егер олар тыныс алуды тоқтатса, дереу ЖЖЖ бастаңыз",
  },
  emergency: {
    en: "For any life-threatening emergency, call 103 immediately. Stay calm, clearly state your location, and follow the dispatcher's instructions. If possible, send someone to meet the ambulance and guide them to your location.",
    ru: "При любой угрожающей жизни чрезвычайной ситуации немедленно звоните по номеру 103. Сохраняйте спокойствие, четко укажите свое местоположение и следуйте инструкциям диспетчера. По возможности отправьте кого-нибудь встретить скорую помощь и проводить их к вашему местоположению.",
    kk: "Кез-келген өмірге қауіп төндіретін төтенше жағдайда 103 нөміріне дереу қоңырау шалыңыз. Сабыр сақтаңыз, орналасқан жеріңізді анық айтыңыз және диспетчердің нұсқауларын орындаңыз. Мүмкін болса, біреуді жедел жәрдемді күтіп алып, сіздің орналасқан жеріңізге бағыттау үшін жіберіңіз.",
  },
}

// Keywords for each emergency type
const emergencyKeywords: Record<string, string[]> = {
  cpr: [
    "cpr",
    "chest compression",
    "cardiac arrest",
    "heart attack",
    "не дышит",
    "сердечный приступ",
    "жүрек соғысы",
    "жүрек ұстамасы",
  ],
  bleeding: [
    "bleeding",
    "blood",
    "wound",
    "cut",
    "кровотечение",
    "кровь",
    "рана",
    "порез",
    "қан кету",
    "қан",
    "жара",
    "кесу",
  ],
  choking: ["choking", "heimlich", "obstruction", "airway", "удушье", "подавился", "тұншығу", "тамақ тұру"],
  burn: ["burn", "scald", "fire", "ожог", "ошпаривание", "огонь", "күйік", "күйдіру", "от"],
  unconscious: [
    "unconscious",
    "fainted",
    "passed out",
    "recovery position",
    "без сознания",
    "обморок",
    "потерял сознание",
    "положение восстановления",
    "есінен танған",
    "естен танды",
    "қалпына келтіру позициясы",
  ],
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [language, setLanguage] = useState<Language>("en")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize messages when language changes
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: welcomeMessages[language],
        sender: "bot",
        timestamp: new Date(),
      },
    ])
  }, [language])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages([...messages, userMessage])
    setInput("")

    // Generate bot response
    setTimeout(() => {
      const botResponse = generateResponse(input.toLowerCase(), language)
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const generateResponse = (query: string, lang: Language): string => {
    // Check for headache related queries
    if (
      query.includes("headache") ||
      query.includes("head ache") ||
      query.includes("головная боль") ||
      query.includes("бас ауруы")
    ) {
      if (lang === "en") {
        return "For headaches:\n\n1. Rest in a quiet, dark room\n2. Apply a cold compress to your forehead or neck\n3. Stay hydrated and drink water\n4. Take over-the-counter pain relievers if appropriate\n5. For severe, sudden, or unusual headaches, seek medical attention\n6. If the headache follows a head injury or is accompanied by fever, confusion, stiff neck, or rash, call emergency services (103)"
      } else if (lang === "ru") {
        return "При головной боли:\n\n1. Отдохните в тихой, темной комнате\n2. Приложите холодный компресс ко лбу или шее\n3. Пейте достаточно воды\n4. При необходимости примите безрецептурные обезболивающие\n5. При сильной, внезапной или необычной головной боли обратитесь к врачу\n6. Если головная боль возникла после травмы головы или сопровождается лихорадкой, спутанностью сознания, скованностью шеи или сыпью, вызовите скорую помощь (103)"
      } else {
        return "Бас ауруы кезінде:\n\n1. Тыныш, қараңғы бөлмеде демалыңыз\n2. Маңдайыңызға немесе мойныңызға суық компресс қойыңыз\n3. Жеткілікті су ішіңіз\n4. Қажет болса, рецептсіз ауырсынуды басатын дәрілерді қабылдаңыз\n5. Қатты, кенеттен немесе әдеттен тыс бас ауруы болса, дәрігерге қаралыңыз\n6. Егер бас ауруы бас жарақатынан кейін пайда болса немесе қызба, сананың шатасуы, мойын қаттылығы немесе бөртпемен бірге жүрсе, жедел жәрдем шақырыңыз (103)"
      }
    }

    // Check for emergency keywords
    for (const [emergencyType, keywords] of Object.entries(emergencyKeywords)) {
      for (const keyword of keywords) {
        if (query.includes(keyword)) {
          return emergencyResponses[emergencyType][lang]
        }
      }
    }

    // Default responses based on language
    if (
      query.includes("help") ||
      query.includes("emergency") ||
      query.includes("помощь") ||
      query.includes("экстренный") ||
      query.includes("көмек") ||
      query.includes("төтенше")
    ) {
      return emergencyNumbers[lang]
    }

    if (
      query.includes("course") ||
      query.includes("learn") ||
      query.includes("training") ||
      query.includes("курс") ||
      query.includes("учить") ||
      query.includes("обучение") ||
      query.includes("курс") ||
      query.includes("үйрену") ||
      query.includes("оқыту")
    ) {
      if (lang === "en") {
        return "We offer both free basic and premium first aid courses. Would you like to learn more about our course options?"
      } else if (lang === "ru") {
        return "Мы предлагаем как бесплатные базовые, так и премиум-курсы по оказанию первой помощи. Хотите узнать больше о наших вариантах курсов?"
      } else {
        return "Біз тегін негізгі және премиум алғашқы көмек курстарын ұсынамыз. Біздің курс нұсқалары туралы көбірек білгіңіз келе ме?"
      }
    }

    // Language-specific default responses
    if (lang === "en") {
      return "I'm here to help with first aid questions. For emergencies, always call 103. Could you provide more details about your question?"
    } else if (lang === "ru") {
      return "Я здесь, чтобы помочь с вопросами по оказанию первой помощи. В экстренных случаях всегда звоните 103. Не могли бы вы предоставить больше деталей о вашем вопросе?"
    } else {
      return "Мен алғашқы көмек сұрақтарына көмектесу үшін осындамын. Төтенше жағдайларда әрқашан 103-ке қоңырау шалыңыз. Сұрағыңыз туралы қосымша мәліметтер бере аласыз ба?"
    }
  }

  const switchLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 p-0 bg-red-500 hover:bg-red-600 shadow-lg"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-80 sm:w-96 h-[500px] shadow-xl flex flex-col z-50">
          <CardHeader className="bg-red-500 text-white py-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alba Assistant" />
                <AvatarFallback className="bg-red-300 text-red-800">A</AvatarFallback>
              </Avatar>
              <CardTitle className="text-base">Alba Assistant</CardTitle>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => switchLanguage("en")}
                className={`h-7 w-7 p-0 rounded-full text-white hover:bg-red-400 ${language === "en" ? "bg-red-400" : ""}`}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => switchLanguage("ru")}
                className={`h-7 w-7 p-0 rounded-full text-white hover:bg-red-400 ${language === "ru" ? "bg-red-400" : ""}`}
              >
                RU
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => switchLanguage("kk")}
                className={`h-7 w-7 p-0 rounded-full text-white hover:bg-red-400 ${language === "kk" ? "bg-red-400" : ""}`}
              >
                KK
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full text-white hover:bg-red-400 ml-1"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-red-100 text-gray-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < message.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-2 border-t">
            <div className="flex items-center w-full gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full flex-shrink-0 border-red-200 text-red-500 hover:bg-red-50"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Emergency call</span>
              </Button>
              <Input
                placeholder={
                  language === "en"
                    ? "Type your question..."
                    : language === "ru"
                      ? "Введите ваш вопрос..."
                      : "Сұрағыңызды теріңіз..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-9 w-9 rounded-full flex-shrink-0 bg-red-500 hover:bg-red-600"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

