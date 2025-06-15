const paths_zh = ['占卜家', '学徒', '偷盗者', '水手', '猎人', '仲裁人', '秘祈人', '药师', '歌颂者', '囚犯', '律师', '窥秘人', '观众', '收尸人', '战士', '刺客', '通识者', '耕种者', '阅读者', '罪犯', '怪物', '不眠者'];
const paths_en = ['Seer', 'Apprentice', 'Marauder', 'Sailor', 'Hunter', 'Arbiter', 'Secrets Supplicant', 'Apothecary', 'Bard', 'Prisoner', 'Lawyer', 'Mystery Pryer', 'Spectator', 'Corpse Collector', 'Warrior', 'Assassin', 'Savant', 'Planter', 'Reader', 'Criminal', 'Monster', 'Sleepless'];

const pathInfo = {
    "占卜家": {
        name: "占卜家途径",
        image: "assets/images/Fool_Symbol.png",
        description: "游走于虚实之间，洞悉星象之秘，聆听梦境低语。世人虽不解其意，却敬畏这份力量。",
        representative: "『愚者』克莱恩·莫雷蒂",
        rep_image: "assets/images/Klein_Moretti_Official.webp",
        art: "assets/images/Fool_Official_Art.webp"
    },
    "学徒": {
        name: "学徒途径",
        image: "assets/images/Door_Symbol.png",
        description: "门扉不能阻，樊笼不可囚。如风过水无痕，取所需，学所缺，逍遥天地间。",
        representative: "『魔术师』佛尔思·沃尔",
        rep_image: "assets/images/Fors_Wall_Official.webp",
        art: "assets/images/Door_Official_Art.webp"
    },
    "偷盗者": {
        name: "偷盗者途径",
        image: "assets/images/Error_Symbol.png",
        description: "盗亦有道，非为生存，实乃艺术。破机关如解棋局，戏谎言似演戏剧，取所需如探囊物。",
        representative: "『亵渎者』阿蒙",
        rep_image: "assets/images/Amon_Official.webp",
        art: "assets/images/Error_Official_Art.webp"
    },
    "水手": {
        name: "水手途径",
        image: "assets/images/Tyrant_Symbol.png",
        description: "踏浪而行，非为果腹，实求逍遥。驭怒涛如驯烈马，破迷雾似解谜题，寻彼岸若追晨曦。",
        representative: "『倒吊人』阿尔杰·威尔逊",
        rep_image: "assets/images/Alger_Wilson_Official.webp",
        art: "assets/images/Tyrant_Official_Art.webp"
    },
    "猎人": {
        name: "猎人途径",
        image: "assets/images/Red_Priest_Symbol.png",
        description: "林间追迹者，洞悉弱点，操纵恐惧。看似猎物，实为猎手，纵火焚天亦从容。",
        representative: "『红天使恶灵』索伦-艾因霍恩-梅迪奇",
        rep_image: "assets/images/Sauron-Einhorn-Medici_Offcial.webp",
        art: "assets/images/Red_Priest_Official_Art.webp"
    },
    "仲裁人": {
        name: "仲裁人途径",
        image: "assets/images/Justiciar_Symbol.png",
        description: "执天平，持律典。一言可为法，怒目可诛邪。不求荣华，但求公道。",
        representative: "『审判者』休·迪尔查",
        rep_image: "assets/images/Xio_Derecha_Official.webp",
        art: "assets/images/Justiciar_Official_Art.webp"
    },
    "秘祈人": {
        name: "秘祈人途径",
        image: "assets/images/Hanged_Man_Symbol.png",
        description: "背负禁忌真知，以痛楚为钥，开启深渊奥秘。世人谓汝癫狂，殊不知癫者近神。",
        representative: "『堕落造物主』真实造物主",
        rep_image: "assets/images/True_Creator_Official_Art.webp",
        art: "assets/images/Hanged_Man_Official_Art.webp"
    },
    "药师": {
        name: "药师途径",
        image: "assets/images/Moon_Symbol.png",
        description: "掌月华之力，愈伤痛，抚心灵，通万物之语。静默如月，柔光照山河。",
        representative: "『月亮』埃姆林·怀特",
        rep_image: "assets/images/Emlyn_White_Official.webp",
        art: "assets/images/Moon_Official_Art.webp"
    },
    "歌颂者": {
        name: "歌颂者途径",
        image: "assets/images/Sun_Symbol.png",
        description: "言可振奋人心，光可涤荡邪恶。持正守心，邪祟自退。",
        representative: "『太阳』戴里克·伯格",
        rep_image: "assets/images/Derrick_Berg_Official.webp",
        art: "assets/images/Sun_Official_Art.webp"
    },
    "囚犯": {
        name: "囚犯途径",
        image: "assets/images/Chained_Symbol.png",
        description: "身负诅咒之力，愈战愈狂，愈强愈堕。枷锁缠身，却令众生战栗。",
        representative: "『保镖小姐』莎伦",
        rep_image: "assets/images/Sharron_Cropped_Official.webp",
        art: "assets/images/Chained_Official_Art.webp"
    },
    "律师": {
        name: "律师途径",
        image: "assets/images/Black_Emperor_Symbol.png",
        description: "操弄律法如戏玩偶，扭曲真相似捏泥塑。众人俯首，非因威逼，实无他选。",
        representative: "『罗塞尔大帝』罗塞尔·古斯塔夫",
        rep_image: "assets/images/Roselle_Gustav_Official.webp",
        art: "assets/images/Black_Emperor_Official_Art.webp"
    },
    "窥秘人": {
        name: "窥秘人途径",
        image: "assets/images/Hermit_Symbol.png",
        description: "独行古籍间，仰望星河。以笔为剑，以思为盾，一语可动星辰。",
        representative: "『隐者』嘉德丽雅",
        rep_image: "assets/images/Cattleya_Official.webp",
        art: "assets/images/Hermit_Official_Art.webp"
    },
    "观众": {
        name: "观众途径",
        image: "assets/images/Visionary_Symbol.png",
        description: "观人心如阅书卷，化恐惧，塑渴望。是先知或是骗子？全凭一念而定。",
        representative: "『正义』奥黛丽·霍尔",
        rep_image: "assets/images/Audrey_Hall_Official.webp",
        art: "assets/images/Visionary_Official_Art.webp"
    },
    "收尸人": {
        name: "收尸人途径",
        image: "assets/images/Death_Symbol.png",
        description: "往来生死间，通幽冥语。予亡者安息，予生者警示，予邪祟毁灭。",
        representative: "『通灵者』戴莉·西蒙妮",
        rep_image: "assets/images/Daly Simone_Official.webp",
        art: "assets/images/Death_Official_Art.webp"
    },
    "战士": {
        name: "战士途径",
        image: "assets/images/Twilight_Giant_Symbol.png",
        description: "立如孤峰，守若坚城。邪祟见之退避，非惧其力，实畏其正。",
        representative: "『猎魔者』科林·伊利亚特",
        rep_image: "assets/images/Colin_Iliad_Official.webp",
        art: "assets/images/Twilight_Giant_Official_Art.webp"
    },
    "刺客": {
        name: "刺客途径",
        image: "assets/images/Demoness_Symbol.png",
        description: "美若昙花，毒胜蛇蝎。一颦可乱人心，一笑可覆城邦。",
        representative: "『污秽与黑暗的容器』特莉丝",
        rep_image: "assets/images/Trissy_Official.webp",
        art: "assets/images/Demoness_Official_Art.webp"
    },
    "通识者": {
        name: "通识者途径",
        image: "assets/images/Paragon_Symbol.png",
        description: "通晓万物之理，铸神器，驭遗物。他人施法，你制兵武。",
        representative: "『蒸汽之子』罗塞尔·古斯塔夫",
        rep_image: "assets/images/Roselle_Gustav_Official.webp",
        art: "assets/images/Paragon_Official_Art.webp"
    },
    "耕种者": {
        name: "耕种者途径",
        image: "assets/images/Mother_Symbol.png",
        description: "抚育众生，化朽为荣。掌造化之妙，通自然之语。",
        representative: "『蘑菇大王』弗兰克·李",
        rep_image: "assets/images/Frank_Lee_Official.webp",
        art: "assets/images/Mother_Official_Art.webp"
    },
    "阅读者": {
        name: "阅读者途径",
        image: "assets/images/White_Tower_Symbol.png",
        description: "过目不忘，见招拆招。天下秘术，皆可为你所用。",
        representative: "『冰上将』艾德雯娜·爱德华兹",
        rep_image: "assets/images/Edwina_Edwards_Official.webp",
        art: "assets/images/White_Tower_Official_Art.webp"
    },
    "罪犯": {
        name: "罪犯途径",
        image: "assets/images/Abyss_Symbol.png",
        description: "放纵欲望，化恶为刃。看似野兽，实为清醒的堕落者。",
        representative: "『魔鬼君主』法布提",
        rep_image: "assets/images/Farbauti_Official.webp",
        art: "assets/images/Abyss_Official_Art.webp"
    },
    "怪物": {
        name: "怪物途径",
        image: "assets/images/Wheel_of_Fortune_Symbol.png",
        description: "天命所归，厄运缠身。福兮祸所伏，祸兮福所倚。",
        representative: "『水银之蛇』威尔·昂赛汀",
        rep_image: "assets/images/Wil_Auceptin_Official.webp",
        art: "assets/images/Wheel_of_Fortune_Official_Art.webp"
    },
    "不眠者": {
        name: "不眠者途径",
        image: "assets/images/Darkness_Symbol.png",
        description: "夜不能寐，暗为吾友。掌梦境之力，予人安眠或疯狂。",
        representative: "『队长』邓恩·史密斯",
        rep_image: "assets/images/Dunn_Smith_Official.webp",
        art: "assets/images/Darkness_Official_Art.webp"
    },

    "Seer": {
        name: "Seer Pathway",
        image: "assets/images/Fool_Symbol.png",
        description: "You walk the line between worlds — seen and unseen, known and unknown. You interpret signs in the stars, patterns in the cards, and whispers in dreams. People may not always understand you, but they sense your power. Whether as a silent observer or a hidden puppeteer, your wisdom guides events more than anyone suspects.",
        representative: "『The Fool』Klein Moretti",
        rep_image:"assets/images/Klein_Moretti_Official.webp",
        art:"assets/images/Fool_Official_Art.webp"
    },
    "Apprentice": {
        name: "Apprentice Pathway",
        image: "assets/images/Door_Symbol.png",
        description: "No door holds you, no path traps you. You move through life like wind over water — always forward, always free. You borrow what you need, learn as you go, and disappear before anyone can catch you. Where others seek control, you seek the next horizon. Your gift is freedom — and your curse is never standing still.",
        representative: "『The Magician』Fors Wall",
        rep_image:"assets/images/Fors_Wall_Official.webp",
        art:"assets/images/Door_Official_Art.webp"
    },
    "Marauder": {
        name: "Marauder Pathway",
        image: "assets/images/Error_Symbol.png",
        description: "You live for the heist — not for survival, but for the art of it. Every lock is a challenge, every code a dance, every lie a masterpiece. You move through society like a ghost in a vault, charming some, outwitting others, and always taking exactly what you need — not to survive, but to feel alive.",
        representative: "『The Blasphemer』Amon",
        rep_image:"assets/images/Amon_Official.webp",
        art:"assets/images/Error_Official_Art.webp"
    },
    "Sailor": {
        name: "Sailor Pathway",
        image: "assets/images/Tyrant_Symbol.png",
        description: "You live for the heist — not for survival, but for the art of it. Every lock is a challenge, every code a dance, every lie a masterpiece. You move through society like a ghost in a vault, charming some, outwitting others, and always taking exactly what you need — not to survive, but to feel alive.",
        representative: "『The Hanged Man』Alger Wilson ",
        rep_image:"assets/images/Alger_Wilson_Official.webp",
        art:"assets/images/Tyrant_Official_Art.webp"
    },
    "Hunter": {
        name: "Hunter Pathway",
        image: "assets/images/Red_Priest_Symbol.png",
        description: "You are a predator in both forest and thought — tracking not just paths but patterns, weaknesses, and fear. You thrive in chaos, wield fire like a language, and lure enemies into their own undoing. People think they see you, but they only see the bait. You're a survivor, a spark in the dry brush — underestimated, but never outrun.",
        representative: "『Red Angel Evil Spirit』Sauron-Einhorn-Medici",
        rep_image:"assets/images/Sauron-Einhorn-Medici_Offcial.webp",
        art:"assets/images/Red_Priest_Official_Art.webp"
    },
    "Arbiter": {
        name: "Arbiter Pathway",
        image: "assets/images/Justiciar_Symbol.png",
        description: "You are the voice of judgment, the weight of consequence. When you speak, laws are written. When others sin, your gaze finds them — no lie survives your scrutiny, and no evil escapes your wrath. You do not chase glory, only justice. You are a weapon of balance, and a shield for the righteous. Order is not your path — it is your nature.",
        representative: "『The Judgement』Xio Derecha",
        rep_image:"assets/images/Xio_Derecha_Official.webp",
        art:"assets/images/Justiciar_Official_Art.webp"
    },
    "Secrets Supplicant": {
        name: "Secrets Supplicant Pathway",
        image: "assets/images/Hanged_Man_Symbol.png",
        description: "You carry truths too heavy for the sane. Through pain, ritual, and sacrifice, you unlock the secrets buried in the dark — not for glory, but because someone must. You commune with shadows, bleed meaning from silence, and give form to the unspeakable. People may call you mad, but they forget: it is the mad who often hear the gods.",
        representative: "『Fallen Creator』True Creator",
        rep_image:"assets/images/True_Creator_Official_Art.webp",
        art:"assets/images/Hanged_Man_Official_Art.webp"
    },
    "Apothecary": {
        name: "Apothecary Pathway",
        image: "assets/images/Moon_Symbol.png",
        description: "Gentle but wild, healer but guardian — your power flows with the tides of nature and soul. You mend what is broken, uplift the weary, and commune with beasts and shadow alike. You are not loud, but your silence speaks deeply. You may walk in darkness, but you carry the moon's light within — soft, silver, yet strong enough to pull oceans.",
        representative: "『The Moon』Emlyn White",
        rep_image:"assets/images/Emlyn_White_Official.webp",
        art:"assets/images/Moon_Official_Art.webp"
    },
    "Prisoner": {
        name: "Prisoner Pathway",
        image: "assets/images/Chained_Symbol.png",
        description: "You are cursed with power that should not exist — and you bear it like a prison. Your body regenerates, your strength is monstrous, and your soul is haunted. You can raise the dead, tear through space, and twist the battlefield — but the more power you use, the more of yourself you lose. You are both hunter and haunted, master and marionette. Control is slipping… but even broken, you are terrifyingly whole.",
        representative: "『Miss Bodyguard』Sharron",
        rep_image:"assets/images/Sharron_Cropped_Official.webp",
        art:"assets/images/Chained_Official_Art.webp"
    },
    "Bard": {
        name: "Bard Pathway",
        image: "assets/images/Sun_Symbol.png",
        description: "Your words uplift, your light purifies, and your fire burns away the false. You are the oath-keeper, the exorcist, and the radiant source of strength for those who follow the path. Where others may falter in shadow or doubt, you cast clarity and conviction. Evil cannot hide from you — not because you seek it, but because your soul demands the truth.",
        representative: "『The Sun』Derrick Berg ",
        rep_image:"assets/images/Derrick_Berg_Official.webp",
        art:"assets/images/Sun_Official_Art.webp"
    },
    "Lawyer": {
        name: "Lawyer Pathway",
        image: "assets/images/Black_Emperor_Symbol.png",
        description: "You don't break the rules — you own them. Where others see boundaries, you see doorways. With every word, every glance, you distort what's true into what is useful. You command by corruption, charm, and control. You may call it influence. Others call it tyranny. But in the end, they kneel — not because you force them, but because you leave them no other path.",
        representative: "『Emperor Roselle』Roselle Gustav",
        rep_image:"assets/images/Roselle_Gustav_Official.webp",
        art:"assets/images/Black_Emperor_Official_Art.webp"
    },
    "Mystery Pryer": {
        name: "Mystery Pryer Pathway",
        image: "assets/images/Hermit_Symbol.png",
        description: "You walk alone through the halls of the forgotten, eyes lifted toward the stars. You seek not power for its own sake, but the truths hidden in old words and distant constellations. With ink, ritual, and thought, you shape the world around you. While others rage, you prepare. While they guess, you know. When you speak, stars move — and the universe listens.",
        representative: "『The Hermit』Cattleya",
        rep_image:"assets/images/Cattleya_Official.webp",
        art:"assets/images/Hermit_Official_Art.webp"
    },
    "Spectator": {
        name: "Spectator Pathway",
        image: "assets/images/Visionary_Symbol.png",
        description: "You don't just understand people — you become what they fear, want, or trust. With a smile, a glance, or a word, you enter minds, rewrite dreams, and turn doubt into certainty or chaos. You're the master of masks, the dream sculptor, the emotional shapeshifter. Whether you are a prophet or a liar depends on who's asking — and what you need them to believe.",
        representative: "『The Justice』Audrey Hall",
        rep_image:"assets/images/Audrey_Hall_Official.webp",
        art:"assets/images/Visionary_Official_Art.webp"
    },
    "Corpse Collector": {
        name: "Corpse Collector Pathway",
        image: "assets/images/Death_Symbol.png",
        description: "Where others fear silence, you find meaning. You walk between worlds, speaking with the departed, commanding the still and the soulless. You are not evil — you are necessary. Death is not your enemy, but your language, your tool, your domain. When the corrupted rise, it is you they fear. You bring peace to the dead — and sometimes, war to the living.",
        representative: "『Spirit Medium』Daly Simone",
        rep_image:"assets/images/Daly Simone_Official.webp",
        art:"assets/images/Death_Official_Art.webp"
    },
    "Warrior": {
        name: "Warrior Pathway",
        image: "assets/images/Twilight_Giant_Symbol.png",
        description: "You are the mountain between the innocent and the abyss. With sword in hand and shield made of dawn, you stand firm — unmoved by shadow or spell. You do not seek glory. You exist to protect, to endure, to conquer with restraint and righteousness. Evil recoils at your step, for it knows that you do not fall. You are the final defense — and the first to charge when others cannot.",
        representative: "『Demon Hunter』Colin Iliad",
        rep_image:"assets/images/Colin_Iliad_Official.webp",
        art:"assets/images/Twilight_Giant_Official_Art.webp"
    },
    "Assassin": {
        name: "Assassin Pathway",
        image: "assets/images/Demoness_Symbol.png",
        description: "Beautiful, terrifying, and utterly untouchable — you are the catastrophe no one sees coming. Whether through whispered curses, a kiss of manipulation, or riots sparked with a look, you dismantle reality with flair. Shadows wrap around you like silk. Power dances on your fingertips. You don't just destroy — you inspire others to do it for you.",
        representative: "『Vessel Of Dirtiness Darkness』Trissy",
        rep_image:"assets/images/Trissy_Official.webp",
        art:"assets/images/Demoness_Official_Art.webp"
    },
    "Savant": {
        name: "Savant Pathway",
        image: "assets/images/Paragon_Symbol.png",
        description: "You are the mind behind the miracles. Your memory never fails, your hands build what others only dream of. History, science, and lost technologies all bend to your will — not because of magic, but because you understand the principles behind everything. Where others summon, you forge. Where others fear cursed relics, you master them. You don't cast fireballs — you make the cannon.",
        representative: "『Son of Steam』Roselle Gustav",
        rep_image:"assets/images/Roselle_Gustav_Official.webp",
        art:"assets/images/Paragon_Official_Art.webp"
    },
    "Planter": {
        name: "Planter Pathway",
        image: "assets/images/Mother_Symbol.png",
        description: "Life answers to your touch. Whether healing the sick, coaxing roots from barren soil, or weaving insects into living armor, you shape the world with patient wisdom. A priest of harvests and a gardener of genomes, you nurture not just what exists — but what could be. Life flourishes around you, and death becomes compost for your future creations.",
        representative: "『Mushroom King』Frank Lee",
        rep_image:"assets/images/Frank_Lee_Official.webp",
        art:"assets/images/Mother_Official_Art.webp"
    },
    "Reader": {
        name: "Reader Pathway",
        image: "assets/images/White_Tower_Symbol.png",
        description: "You don't take power — you learn it. Whether from ancient texts, enemy spells, or whispered secrets, you absorb and reproduce what others thought was unique. Part ritualist, part mimic, part scholar — you are a one-person archive of everything you've seen. Your mind is your weapon, and your knowledge is limitless. There's no power you can't understand… and no one you can't become.",
        representative: "『Vice Admiral Iceberg』Edwina Edwards",
        rep_image:"assets/images/Edwina_Edwards_Official.webp",
        art:"assets/images/White_Tower_Official_Art.webp"
    },
    "Criminal": {
        name: "Criminal Pathway",
        image: "assets/images/Abyss_Symbol.png",
        description: "You're not evil… not completely. But when others restrain their desires, you sharpen yours. Power, hunger, pain — all of it is yours to command. You know the darkness within yourself, and instead of suppressing it, you've weaponized it. Yet some part of you — deep beneath the blood and fire — still remembers what it meant to care. That's what makes you dangerous. You are not a beast. You are a choice.",
        representative: "『Devil Monarch』Farbauti",
        rep_image:"assets/images/Farbauti_Official.webp",
        art:"assets/images/Abyss_Official_Art.webp"
    },
    "Monster": {
        name: "Monster Pathway",
        image: "assets/images/Wheel_of_Fortune_Symbol.png",
        description: "Blessed and cursed, you walk a line few can survive. Luck clings to you — sometimes a shield, sometimes a blade — twisting fate itself in your favor... or against everyone around you. Your insight borders on prophecy, and your presence distorts probability like gravity. You didn't ask for this power. But it found you anyway. And whether the world calls you chosen or cursed — you always endure.",
        representative: "『Snake of Mercury』Will Auceptin",
        rep_image:"assets/images/Wil_Auceptin_Official.webp",
        art:"assets/images/Wheel_of_Fortune_Official_Art.webp"
    },
    "Sleepless": {
        name: "Sleepless Pathway",
        image: "assets/images/Darkness_Symbol.png",
        description: "You are the quiet breath between dreams, the shadow behind the stars. You don't sleep — not because you can't, but because the night gives you strength. You pacify chaos with a whisper, draw power from silence, and bring sleep to the restless — or madness to the unwary. In darkness, you find clarity. In dreams, you find power. And in solitude, you find yourself.",
        representative: "『Captain』Dunn Smith",
        rep_image:"assets/images/Dunn_Smith_Official.webp",
        art:"assets/images/Darkness_Official_Art.webp"
    },
};

const questions_zh = 
[
  {
    text: "当前往未知区域时，你更喜欢...",
    options: [
      { text: "使用地图、星象和自然标志导航", paths: ["水手", "猎人", "学徒"], score: 5 },
      { text: "依靠直觉，相信自己的本能", paths: ["占卜家", "怪物", "秘祈人"], score: 6 },
      { text: "低调融入并且谨慎地收集信息", paths: ["偷盗者", "刺客", "不眠者", "观众"], score: 4 },
      { text: "大胆前行，遇到麻烦再处理", paths: ["战士", "罪犯", "歌颂者"], score: 4 }
    ]
  },
  {
    text: "如果你突然获得超常能力，会如何应对？",
    options: [
      { text: "仔细研究并尝试掌握控制方法", paths: ["学徒", "阅读者", "通识者"], score: 5 },
      { text: "暗中测试能力", paths: ["不眠者", "刺客", "收尸人"], score: 4 },
      { text: "随心所欲地使用", paths: ["怪物", "罪犯", "猎人"], score: 4 },
      { text: "寻求他人帮助", paths: ["占卜家", "药师", "歌颂者"], score: 4 }
    ]
  },
  {
    text: "当阴暗的存在要求以代价换取知识时，你会...",
    options: [
      { text: "拒绝 —— 没有平衡的力量导致毁灭", paths: ["歌颂者", "战士", "仲裁人"], score: 4 },
      { text: "接受 —— 知识永远值得付出代价", paths: ["阅读者", "收尸人", "窥秘人"], score: 5 },
      { text: "想方设法诱骗知识而不支付代价。", paths: ["偷盗者", "刺客", "律师"], score: 4 },
      { text: "谈判 —— 也是有转圜的余地", paths: ["秘祈人"], score: 5 }
    ]
  },
  {
    text: "在一片寂静中，你听到了不为人知真相的低语时，你...",
    options: [
      { text: "记录下来并重视这个启示", paths: ["占卜家", "秘祈人"], score: 5 },
      { text: "置之不理", paths: ["战士", "歌颂者", "通识者"], score: 3 },
      { text: "主动接纳寻求力量", paths: ["收尸人", "罪犯", "怪物", "窥秘人"], score: 4 },
      { text: "尝试策略性利用这些信息", paths: ["观众", "学徒", "刺客"], score: 4 }
    ]
  },
  {
    text: "一个小镇集体遇上噩梦事件，你会...",
    options: [
      { text: "通过直觉调查源头", paths: ["占卜家", "秘祈人"], score: 5 },
      { text: "寻找事件的逻辑 —— 一切都有合理的解释。", paths: ["阅读者", "通识者", "观众"], score: 4 },
      { text: "暗中收集情报观察反应", paths: ["偷盗者", "不眠者", "刺客"], score: 4 },
      { text: "联合镇民恢复秩序", paths: ["仲裁人", "歌颂者", "战士"], score: 4 }
    ]
  },
  {
    text: "你在森林发现一个没有知觉的伤者并且持有持神秘器物时，你会...",
    options: [
      { text: "救治伤者并了解遭遇", paths: ["药师", "歌颂者", "耕种者"], score: 5 },
      { text: "优先研究器物奥秘", paths: ["阅读者", "收尸人", "占卜家"], score: 4 },
      { text: "夺取器物并逃离现场", paths: ["偷盗者", "罪犯", "律师"], score: 5 },
      { text: "呼叫支援并且警戒", paths: ["仲裁人", "战士", "水手"], score: 4 }
    ]
  },
  {
    text: "目睹熟人犯罪时，你的反应是...",
    options: [
      { text: "立即举报", paths: ["仲裁人", "歌颂者", "战士", "占卜家"], score: 5 },
      { text: "静观其变分析动机", paths: ["不眠者", "猎人", "观众", "囚犯"], score: 6 },
      { text: "留作把柄日后利用", paths: ["律师", "刺客", "罪犯"], score: 6 },
      { text: "尝试感化对方", paths: ["药师", "秘祈人"], score: 6 }
    ]
  },
  {
    text: "你被要求领导特殊能力强大但不稳定的团队时，你会先...",
    options: [
      { text: "建立严格的管理制度", paths: ["仲裁人", "歌颂者", "战士"], score: 5 },
      { text: "理解需求并获取忠诚", paths: ["药师", "秘祈人", "观众"], score: 6 },
      { text: "测试每人能力的边界", paths: ["学徒", "收尸人"], score: 4 },
      { text: "通过威胁来掌控局面", paths: ["刺客", "罪犯", "律师"], score: 4 }
    ]
  },
  {
    text: "你带领该团队在暴风雨海域航行时，你会负责...",
    options: [
      { text: "导航并稳定军心", paths: ["水手", "歌颂者", "战士", "观众"], score: 5 },
      { text: "规划最优航线", paths: ["通识者", "阅读者", "学徒"], score: 4 },
      { text: "凭直觉指引方向", paths: ["占卜家", "怪物", "水手"], score: 5 },
      { text: "趁乱谋取私利", paths: ["罪犯", "刺客", "猎人"], score: 5 }
    ]
  },
  {
    text: "在一片迷雾中看见诡异的光亮时，你会...",
    options: [
      { text: "跟随直觉指引", paths: ["占卜家", "怪物"], score: 5 },
      { text: "做标记谨慎探索", paths: ["猎人", "战士", "罪犯"], score: 5 },
      { text: "发出信号求援", paths: ["水手", "不眠者"], score: 4 },
      { text: "立即撤离危险", paths: ["学徒", "囚犯"], score: 6 }
    ]
  },
  {
    text: "你在遭遇海难后登陆了一座神秘岛屿，你会首先...",
    options: [
      { text: "观察天象海流寻找出路", paths: ["水手", "窥秘人"], score: 6 },
      { text: "采集草药治疗伤员", paths: ["药师", "耕种者"], score: 5 },
      { text: "趁夜色探索岛屿", paths: ["不眠者", "囚犯"], score: 6 },
      { text: "尝试寻找材料制造通讯设备", paths: ["通识者", "律师"], score: 6 }
    ]
  },
  {
    text: "发现记载生死实验的日记后，你决定...",
    options: [
      { text: "秘密重现实验", paths: ["收尸人", "窥秘人"], score: 6 },
      { text: "用于改良动植物", paths: ["耕种者", "药师"], score: 5 },
      { text: "转化科研成果", paths: ["通识者", "律师"], score: 5 },
      { text: "封印并设置防护措施", paths: ["不眠者", "囚犯"], score: 5 }
    ]
  },
  {
    text: "你正在目睹声势浩大的仪式，感觉有些......不对劲。你会怎么办...",
    options: [
      { text: "立即打断仪式", paths: ["仲裁人", "歌颂者", "战士"], score: 4 },
      { text: "观察学习奥秘", paths: ["阅读者", "收尸人", "观众"], score: 4 },
      { text: "暗中干扰结果", paths: ["刺客", "猎人", "律师"], score: 6 },
      { text: "献祭自身加速进程", paths: ["秘祈人"], score: 6 }
    ]
  },
  {
    text: "一个陌生人递给你一封密封的信，上面用怪异的字体写着你的名字。你会怎么做？",
    options: [
      { text: "午夜时分再开启", paths: ["占卜家", "怪物", "秘祈人"], score: 5 },
      { text: "立即解码查验", paths: ["阅读者", "学徒"], score: 5 },
      { text: "以血为契验证", paths: ["秘祈人", "囚犯"], score: 6 },
      { text: "上交权威鉴定", paths: ["仲裁人", "歌颂者"], score: 4 }
    ]
  },
  {
    text: "在睡梦中，一棵巨树轻声呼唤你的名字。醒来后你会做什么？",
    options: [
      { text: "解梦析兆", paths: ["窥秘人", "阅读者", "观众"], score: 5 },
      { text: "尝试寻找对应地点", paths: ["耕种者", "药师", "通识者"], score: 5 },
      { text: "做好准备 —— 这一定是冒险或危险的召唤。", paths: ["猎人", "罪犯"], score: 4 },
      { text: "当作普通梦境遗忘", paths: ["偷盗者", "战士"], score: 3 }
    ]
  },
  {
    text: "你迷失在一个陌生的森林里，完全不记得自己是怎么抵达这里的。你该怎么办？",
    options: [
      { text: "分析环境寻找规律，找出自己的位置", paths: ["学徒", "通识者"], score: 5 },
      { text: "跟随动植物的指引", paths: ["耕种者", "药师"], score: 4 },
      { text: "相信直觉的引路", paths: ["怪物", "占卜家"], score: 6 },
      { text: "登高处勘察地形", paths: ["战士", "刺客", "水手"], score: 5 }
    ]
  },
  {
    text: "你偶然进入一个陌生且荒废的图书馆，里面全是陌生的书籍。你会找什么？",
    options: [
      { text: "科技原理书籍", paths: ["通识者", "学徒"], score: 6 },
      { text: "草药医疗典籍", paths: ["耕种者", "药师"], score: 5 },
      { text: "心理学著作", paths: ["观众"], score: 5 },
      { text: "古代律法文献", paths: ["仲裁人", "律师"], score: 6 }
    ]
  },
  {
    text: "无意中听到两个重要人物的私下谈话，你决定...",
    options: [
      { text: "记录以备后用", paths: ["律师", "偷盗者", "药师"], score: 6 },
      { text: "分析肢体语言尝试找出隐藏的信息", paths: ["观众", "窥秘人"], score: 6 },
      { text: "向当局报告", paths: ["仲裁人", "歌颂者"], score: 5 },
      { text: "用作谈判筹码", paths: ["刺客", "罪犯"], score: 5 }
    ]
  },
  {
    text: "受邀加入秘密组织时，最吸引你的点会是...",
    options: [
      { text: "稀有知识资源", paths: ["阅读者", "窥秘人"], score: 6 },
      { text: "幕后影响力", paths: ["律师"], score: 6 },
      { text: "研发新理念", paths: ["通识者", "歌颂者"], score: 5 },
      { text: "接触禁忌领域", paths: ["囚犯", "罪犯"], score: 5 }
    ]
  },
  {
    text: "你被给予资金用于实施一个项目，你会选择...",
    options: [
      { text: "创造生存能力超群生物", paths: ["耕种者", "通识者"], score: 6 },
      { text: "建造能在海洋与天空之间穿梭的载具", paths: ["水手", "通识者"], score: 5 },
      { text: "研制万能解毒剂", paths: ["药师", "收尸人"], score: 5 },
      { text: "研究灵魂收容系统", paths: ["窥秘人", "不眠者"], score: 5 }
    ]
  },
  {
    text: "调解部落冲突时，你...",
    options: [
      { text: "抛硬币决定", paths: ["占卜家", "怪物"], score: 5 },
      { text: "暗访收集情报", paths: ["观众", "刺客", "阅读者"], score: 5 },
      { text: "公开投票裁决", paths: ["歌颂者", "战士", "仲裁人"], score: 4 },
      { text: "要求比武解决", paths: ["囚犯", "罪犯"], score: 5 }
    ]
  },
  {
    text: "被诬陷犯罪时你的第一反应会是...",
    options: [
      { text: "冷静搜集证据", paths: ["仲裁人", "阅读者", "学徒"], score: 5 },
      { text: "一笑置之离开", paths: ["偷盗者", "学徒"], score: 5 },
      { text: "转移嫌疑目标", paths: ["刺客", "观众", "猎人"], score: 4 },
      { text: "沉默等待真相", paths: ["囚犯", "死亡"], score: 6 }
    ]
  },
  {
    text: "朋友向你倾诉被噩梦困扰时，你...",
    options: [
      { text: "耐心倾听分析含义", paths: ["观众", "秘祈人"], score: 5 },
      { text: "建议他们记录规律", paths: ["阅读者", "学徒"], score: 6 },
      { text: "帮忙提供安神物品", paths: ["药师", "耕种者"], score: 5 },
      { text: "彻夜给予陪伴守护", paths: ["不眠者", "战士"], score: 5 }
    ]
  },
  {
    text: "有人向你挑战决斗。你的准备是？",
    options: [
      { text: "学习并研究对手战术", paths: ["通识者", "阅读者"], score: 5 },
      { text: "找借口回避", paths: ["学徒", "囚犯", "偷盗者", "收尸人"], score: 6 },
      { text: "提前在竞技场布置陷阱", paths: ["猎人", "刺客"], score: 6 },
      { text: "疯狂练习备战", paths: ["战士"], score: 5 }
    ]
  },
  {
    text: "面对致命枯萎病摧毁村子的农作物，你...",
    options: [
      { text: "科学分析病原", paths: ["通识者", "学徒"], score: 5 },
      { text: "与植物沟通溯源", paths: ["耕种者"], score: 6 },
      { text: "组织焚烧田地", paths: ["战士", "歌颂者"], score: 4 },
      { text: "放任发展", paths: ["战士", "歌颂者"], score: 4 }
    ]
  },
  {
    text: "一场强风暴即将来临，你的应对策略是...",
    options: [
      { text: "组织人员避难", paths: ["仲裁人", "歌颂者", "不眠者"], score: 5 },
      { text: "深入风暴中心", paths: ["水手", "战士"], score: 6 },
      { text: "静待风暴过去", paths: ["不眠者", "窥秘人"], score: 4 },
      { text: "趁乱潜入禁区", paths: ["偷盗者", "刺客", "学徒"], score: 5 }
    ]
  },
  {
    text: "面对一个神秘变化铭文的秘门，你...",
    options: [
      { text: "通过镜像复现符号变化来反向推导", paths: ["观众", "窥秘人"], score: 5 },
      { text: "破译文字规律", paths: ["阅读者", "通识者"], score: 6 },
      { text: "破坏符文源头", paths: ["学徒", "刺客"], score: 5 },
      { text: "以血为祭尝试开门", paths: ["秘祈人", "窥秘人"], score: 6 }
    ]
  }
];

const questions_en = 
[
  {
    text: "When traveling to an unknown region, you prefer ...",
    options: [
      {
        text: "Navigate using maps, stars, and natural signs.",
        paths: ["Sailor", "Hunter", "Apprentice"],
        score: 5
      },
      {
        text: "Rely on your instincts and trust your gut.",
        paths: ["Seer", "Monster", "Secrets Supplicant"],
        score: 6
      },
      {
        text: "Blend in and gather information discreetly.",
        paths: ["Marauder", "Assassin", "Sleepless","Spectator"],
        score: 4
      },
      {
        text: "Travel boldly and deal with trouble as it comes.",
        paths: ["Warrior", "Criminal", "Bard"],
        score: 4
      }
    ]
  },
  {
    text: "If you were gifted with a strange new ability overnight, how would you handle it?",
    options: [
      {
        text: "Study it intensely and learn how to control it.",
        paths: ["Apprentice", "Reader", "Savant"],
        score: 5
      },
      {
        text: "Keep it hidden while testing its limits.",
        paths: ["Sleepless", "Assassin", "Corpse Collector"],
        score: 4
      },
      {
        text: "Use it immediately, instinctively and freely.",
        paths: ["Monster", "Criminal", "Hunter"],
        score: 4
      },
      {
        text: "Ask others for advice or guidance on what to do.",
        paths: ["Seer", "Apothecary", "Bard"],
        score: 4
      }
    ]
  },
  {
    text: "A shadowy figure offers you knowledge, but warns of a great price. You...",
    options: [
      {
        text: "Decline — power without balance leads to ruin.",
        paths: ["Bard", "Warrior", "Arbiter"],
        score: 4
      },
      {
        text: "Accept. Knowledge is always worth the risk.",
        paths: ["Reader", "Corpse Collector", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Try to trick them into giving the knowledge without payment.",
        paths: ["Marauder", "Assassin", "Lawyer"],
        score: 4
      },
      {
        text: "Negotiate — perhaps there's a middle ground.",
        paths: ["Secrets Supplicant"],
        score: 5
      }
    ]
  },
  {
    text: "In a moment of silence, you hear a voice whispering truths you never asked for. You...",
    options: [
      {
        text: "Write them down and follow the insight — it feels important.",
        paths: ["Seer", "Secrets Supplicant"],
        score: 5
      },
      {
        text: "Ignore it. Hallucinations aren't something to entertain.",
        paths: ["Warrior", "Bard", "Savant"],
        score: 3
      },
      {
        text: "Embrace the voice — it might lead to power or forbidden knowledge.",
        paths: ["Corpse Collector", "Criminal", "Monster", "Mystery Pryer"],
        score: 4
      },
      {
        text: "Use the information tactically, even if you don't understand it fully.",
        paths: ["Spectator", "Apprentice", "Assassin"],
        score: 4
      }
    ]
  },
  {
    text: "A quiet town has recently been plagued by strange dreams and whispers at night. What's your instinct?",
    options: [
      {
        text: "Investigate the dreams and try to understand their source through intuition and symbols.",
        paths: ["Seer", "Secrets Supplicant"],
        score: 5
      },
      {
        text: "Look for patterns in behavior and events — everything has a logical explanation.",
        paths: ["Reader", "Savant", "Spectator"],
        score: 4
      },
      {
        text: "Silently gather information and see how the town reacts before stepping in.",
        paths: ["Marauder", "Sleepless", "Assassin"],
        score: 4
      },
      {
        text: "Approach the town leaders and work with them to restore order.",
        paths: ["Arbiter", "Bard", "Warrior"],
        score: 4
      }
    ]
  },
  {
    text: "You come across a person injured in a forest, barely conscious and holding a strange artifact.",
    options: [
      {
        text: "Try to heal them and understand what happened through empathy.",
        paths: ["Apothecary", "Bard", "Planter"],
        score: 5
      },
      {
        text: "Focus on the artifact — it might be dangerous or hold valuable secrets.",
        paths: ["Reader", "Corpse Collector", "Seer"],
        score: 4
      },
      {
        text: "Leave the person and take the artifact for your own ends.",
        paths: ["Marauder", "Criminal", "Lawyer"],
        score: 5
      },
      {
        text: "Alert others and take a defensive stance until help arrives.",
        paths: ["Arbiter", "Warrior", "Sailor"],
        score: 4
      }
    ]
  },
  {
    text: "You witness a crime committed by someone you know in the forest. What's your response?",
    options: [
      {
        text: "Report them immediately — laws exist for a reason.",
        paths: ["Arbiter", "Bard", "Warrior", "Seer"],
        score: 5
      },
      {
        text: "Keep silent for now and observe their motives.",
        paths: ["Sleepless", "Hunter", "Spectator", "Prisoner"],
        score: 6
      },
      {
        text: "Use the knowledge to your advantage later.",
        paths: ["Lawyer", "Assassin", "Criminal"],
        score: 6
      },
      {
        text: "Try to convince them to change through emotion or belief.",
        paths: ["Apothecary", "Secrets Supplicant"],
        score: 6
      }
    ]
  },
  {
    text: "You're given the chance to command a group with powerful, unstable abilities. What's your first move?",
    options: [
      {
        text: "Set firm rules and prepare punishment if they step out of line.",
        paths: ["Arbiter", "Bard", "Warrior"],
        score: 5
      },
      {
        text: "Gain their loyalty by understanding their conditions.",
        paths: ["Apothecary", "Secrets Supplicant", "Spectator"],
        score: 6
      },
      {
        text: "Experiment with their abilities and push their limits.",
        paths: ["Apprentice", "Corpse Collector"],
        score: 4
      },
      {
        text: "Use manipulation or threats to ensure control.",
        paths: ["Assassin", "Criminal", "Lawyer"],
        score: 4
      }
    ]
  },
  {
    text: "You're asked to lead the group through a deadly, stormy sea. What is your role?",
    options: [
      {
        text: "Navigate and calm the crew — keep them united.",
        paths: ["Sailor", "Bard", "Warrior", "Spectator"],
        score: 5
      },
      {
        text: "Chart the safest course using maps and records.",
        paths: ["Savant", "Reader", "Apprentice"],
        score: 4
      },
      {
        text: "Trust your senses and guide by instinct.",
        paths: ["Seer", "Monster", "Sailor"],
        score: 5
      },
      {
        text: "Use the chaos to test your own strength or exploit others.",
        paths: ["Criminal", "Assassin", "Hunter"],
        score: 5
      }
    ]
  },
  {
    text: "You're walking through a dense fog and see flickering lights ahead. You:",
    options: [
      {
        text: "Follow them, trusting your gut and the pull of unseen forces.",
        paths: ["Seer", "Monster"],
        score: 5
      },
      {
        text: "Mark your trail and proceed carefully, ready for anything.",
        paths: ["Hunter", "Warrior", "Criminal"],
        score: 5
      },
      {
        text: "Sing softly to let others know you're there.",
        paths: ["Sailor", "Sleepless"],
        score: 5
      },
      {
        text: "Turn back — nothing good ever comes from following strange lights.",
        paths: ["Apprentice", "Prisoner"],
        score: 6
      }
    ]
  },
  {
    text: "You're shipwrecked on a mysterious island. What do you do first?",
    options: [
      {
        text: "Search for signs in the sky or sea currents that could guide you",
        paths: ["Sailor", "Mystery Pryer"],
        score: 6
      },
      {
        text: "Use herbs and natural remedies to tend your wounds and those of others",
        paths: ["Apothecary", "Planter"],
        score: 5
      },
      {
        text: "Explore the island by night, trusting in your body's unnatural stamina",
        paths: ["Sleepless", "Prisoner"],
        score: 6
      },
      {
        text: "Try to build communication tools from debris and local materials",
        paths: ["Savant", "Lawyer"],
        score: 6
      }
    ]
  },
  {
    text: "You find an old journal filled with experiments on life and death. You decide to",
    options: [
      {
        text: "Replicate the experiments in secrecy to uncover their truths",
        paths: ["Corpse Collector", "Mystery Pryer"],
        score: 6
      },
      {
        text: "Use the information to improve the vitality of plants and animals",
        paths: ["Planter", "Apothecary"],
        score: 5
      },
      {
        text: "Translate the formulas and turn them into scientific breakthroughs",
        paths: ["Savant", "Lawyer"],
        score: 5
      },
      {
        text: "Lock the journal away and set up protective wards just in case",
        paths: ["Sleepless", "Prisoner"],
        score: 5
      }
    ]
  },
  {
    text: "You're watching a powerful ritual take place. Something feels... off. What do you do?",
    options: [
      {
        text: "Interrupt it immediately — danger overrides etiquette.",
        paths: ["Arbiter", "Bard", "Warrior"],
        score: 4
      },
      {
        text: "Watch carefully — you might learn something.",
        paths: ["Reader", "Corpse Collector", "Spectator"],
        score: 4
      },
      {
        text: "Try to subtly sabotage or redirect the outcome.",
        paths: ["Assassin", "Hunter", "Lawyer"],
        score: 6
      },
      {
        text: "Offer a personal sacrifice to speed up the process, even if it puts you at risk.",
        paths: ["Secrets Supplicant"],
        score: 6
      }
    ]
  },
  {
    text: "A stranger hands you a sealed letter with your name written in an unfamiliar script. What do you do?",
    options: [
      {
        text: "Wait until night before opening it.",
        paths: ["Seer", "Monster", "Secrets Supplicant"],
        score: 5
      },
      {
        text: "Open it immediately and search for any hidden codes or meanings.",
        paths: ["Reader", "Apprentice"],
        score: 5
      },
      {
        text: "Let the letter absorb your blood before opening - only the worthy may read it",
        paths: ["Secrets Supplicant", "Prisoner"],
        score: 6
      },
      {
        text: "Bring it to a local authority to verify its origin.",
        paths: ["Arbiter", "Bard"],
        score: 4
      }
    ]
  },
  {
    text: "In your dream, a giant tree whispers your name. What do you do upon waking?",
    options: [
      {
        text: "Sketch the dream and try to interpret its meaning.",
        paths: ["Mystery Pryer", "Reader", "Spectator"],
        score: 5
      },
      {
        text: "Seek out a place in nature that matches what you saw.",
        paths: ["Planter", "Apothecary", "Savant"],
        score: 5
      },
      {
        text: "Prepare yourself — it must be a call to adventure or danger.",
        paths: ["Hunter", "Criminal"],
        score: 4
      },
      {
        text: "Forget it — it's just a dream.",
        paths: ["Marauder", "Warrior"],
        score: 3
      }
    ]
  },
  {
    text: "You're lost in a strange forest with no memory of how you got there. What do you do?",
    options: [
      {
        text: "Look for patterns in the environment to figure out where you are.",
        paths: ["Apprentice", "Savant"],
        score: 5
      },
      {
        text: "Pay attention to how the animals or plants react and follow them.",
        paths: ["Planter", "Apothecary"],
        score: 4
      },
      {
        text: "Stay calm and trust your instincts to guide you.",
        paths: ["Monster", "Seer"],
        score: 6
      },
      {
        text: "Climb the highest tree or hill to get your bearings.",
        paths: ["Warrior", "Assassin", "Sailor"],
        score: 5
      }
    ]
  },
  {
    text: "You stumble into a strange library full of unfamiliar books. What do you look for?",
    options: [
      {
        text: "Books on science or how things work.",
        paths: ["Savant", "Apprentice"],
        score: 6
      },
      {
        text: "Guides on natural remedies and healing practices.",
        paths: ["Planter", "Apothecary"],
        score: 5
      },
      {
        text: "Writings that reveal how people think and behave.",
        paths: ["Spectator"],
        score: 5
      },
      {
        text: "Rules, laws, or codes from old civilizations.",
        paths: ["Arbiter", "Lawyer"],
        score: 6
      }
    ]
  },
  {
    text: "You overhear two important people having a private conversation. What do you do?",
    options: [
      {
        text: "Write down what you heard and consider how it might be useful later.",
        paths: ["Lawyer", "Marauder", "Apothecary"],
        score: 6
      },
      {
        text: "Watch their body language to figure out what they're hiding.",
        paths: ["Spectator", "Visionary"],
        score: 6
      },
      {
        text: "Report it to someone in charge who should know.",
        paths: ["Arbiter", "Bard"],
        score: 5
      },
      {
        text: "Use the information to get leverage or protect yourself.",
        paths: ["Assassin", "Criminal"],
        score: 5
      }
    ]
  },
  {
    text: "You're offered membership in a secret group. What's most appealing?",
    options: [
      {
        text: "Access to rare knowledge and resources.",
        paths: ["Reader", "Mystery Pryer"],
        score: 6
      },
      {
        text: "Having influence behind the scenes.",
        paths: ["Lawyer"],
        score: 6
      },
      {
        text: "The chance to develop and test new ideas.",
        paths: ["Savant", "Paragon"],
        score: 5
      },
      {
        text: "Getting involved in things others don't dare to explore.",
        paths: ["Prisoner", "Criminal"],
        score: 5
      }
    ]
  },
  {
    text: "You're granted funding to pursue any one of the project — what do you choose?",
    options: [
      {
        text: "Engineer a new form of life that can survive any climate",
        paths: ["Planter", "Savant"],
        score: 6
      },
      {
        text: "Build a vessel that can travel between the sea and the sky",
        paths: ["Sailor", "Savant"],
        score: 5
      },
      {
        text: "Craft a tonic to resist all known diseases and toxins",
        paths: ["Apothecary", "Corpse Collector"],
        score: 5
      },
      {
        text: "Design a system to document and contain spirits safely",
        paths: ["Mystery Pryer", "Sleepless"],
        score: 5
      }
    ]
  },
  {
    text: "You're asked to judge a dispute between two communities. How do you decide?",
    options: [
      {
        text: "Toss a coin and decide.",
        paths: ["Seer", "Monster"],
        score: 5
      },
      {
        text: "Visit both sides in secret to gather information.",
        paths: ["Spectator", "Assassin", "Reader"],
        score: 5
      },
      {
        text: "Weigh their contributions and vote publicly.",
        paths: ["Bard", "Warrior", "Arbiter"],
        score: 4
      },
      {
        text: "Declare that both sides must resolve it through challenge.",
        paths: ["Prisoner", "Criminal"],
        score: 5
      }
    ]
  },
  {
    text: "Someone accuses you of a crime you didn't commit. Your first reaction is:",
    options: [
      {
        text: "Calmly build a logical defense and collect evidence.",
        paths: ["Arbiter", "Reader", "Apprentice"],
        score: 5
      },
      {
        text: "Laugh it off and vanish before things escalate.",
        paths: ["Marauder", "Apprentice"],
        score: 5
      },
      {
        text: "Turn the suspicion onto someone else through subtle manipulation.",
        paths: ["Assassin", "Spectator", "Hunter"],
        score: 4
      },
      {
        text: "Remain silence and wait for the truth to be revealed",
        paths: ["Prisoner", "Death"],
        score: 6
      }
    ]
  },
  {
    text: "A friend tells you they've been having recurring nightmares. How do you respond?",
    options: [
      {
        text: "Listen carefully and help them unpack the meaning.",
        paths: ["Spectator", "Secrets Supplicant"],
        score: 5
      },
      {
        text: "Encourage them to write it down and track patterns.",
        paths: ["Reader", "Apprentice"],
        score: 6
      },
      {
        text: "Help them find something soothing to ease their sleep.",
        paths: ["Apothecary", "Planter"],
        score: 5
      },
      {
        text: "Stay up with them at night to help them feel safe.",
        paths: ["Sleepless", "Warrior"],
        score: 5
      }
    ]
  },
  {
    text: "You're challenged to a duel. How do you prepare?",
    options: [
      {
        text: "Study your opponent's previous battles and build a strategy.",
        paths: ["Savant", "Reader"],
        score: 5
      },
      {
        text: "Avoid the challenge entirely and find an excuse not to participate.",
        paths: ["Apprentice", "Prisoner", "Marauder", "Corpse Collector"],
        score: 6
      },
      {
        text: "Set up the arena with traps and distractions beforehand.",
        paths: ["Hunter", "Assassin"],
        score: 6
      },
      {
        text: "Practice your technique relentlessly until the duel begins.",
        paths: ["Warrior"],
        score: 5
      }
    ]
  },
  {
    text: "A blight is killing crops across the village. You:",
    options: [
      {
        text: "Analyze soil samples to develop a cure (Science)",
        paths: ["Savant", "Apprentice"],
        score: 5
      },
      {
        text: "Commune with the plants to learn the blight's origin",
        paths: ["Planter"], 
        score: 6
      },
      {
        text: "Organize villagers to burn infected fields",
        paths: ["Warrior", "Bard"],
        score: 4
      },
      {
        text: "Let it be - it is none of my business", 
        paths: ["Warrior", "Bard"],
        score: 4
      }
    ]
  },
  {
    text: "There's a powerful storm coming. What's your response?",
    options: [
      {
        text: "Coordinate people and get everyone to safety.",
        paths: ["Arbiter", "Bard", "Sleepless"],
        score: 5
      },
      {
        text: "Go straight into the storm to help or observe closely.",
        paths: ["Sailor", "Warrior"],
        score: 6
      },
      {
        text: "Find somewhere safe and use the time to reflect or plan.",
        paths: ["Sleepless", "Mystery Pryer"],
        score: 4
      },
      {
        text: "Use the chaos to sneak in a place that's usually restricted.",
        paths: ["Marauder", "Assassin", "Apprentice"],
        score: 5
      }
    ]
  },
  {
    text: "You find a sealed door with a symbol that constantly changes. What is your method?",
    options: [
      {
        text: "Try to open the seal by mirroring symbol pattern",
        paths: ["Spectator", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Analyze the shifting text to decode a deeper logic.",
        paths: ["Reader", "Savant"],
        score: 6
      },
      {
        text: "Trace the glyphs to their source and disrupt the enchantment.",
        paths: ["Apprentice", "Assassin"],
        score: 5
      },
      {
        text: "Try to open the door with a blood sacrifice.",
        paths: ["Secrets Supplicant", "Mystery Pryer"],
        score: 4
      }
    ]
  }
];