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
        rep_image: "assets/images/.webp",
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
        rep_image:"assets/images/.webp",
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

const questions_zh = [
    {
        text: "面对未知的威胁，你会：",
        options: [
            {
                text: "提前布置防御仪式",
                paths: ["占卜家"],
                score: 1
            },
            {
                text: "打造针对性武器",
                paths: ["学徒"],
                score: 1
            },
            {
                text: "隐藏在阴影中观察",
                paths: ["偷盗者"],
                score: 1
            },
            {
                text: "直接外出寻找危险来源",
                paths: ["偷盗者"],
                score: 1
            }
        ]
    },
    {
        text: "当你发现一个神秘的古代遗物时，你会：",
        options: [
            {
                text: "用仪式占卜它的来历",
                paths: ["占卜家"],
                score: 1
            },
            {
                text: "尝试解析它的机械结构",
                paths: ["学徒"],
                score: 1
            },
            {
                text: "悄悄带走它研究",
                paths: ["偷盗者"],
                score: 1
            },
            {
                text: "公开寻求专家帮助",
                paths: ["占卜家", "学徒"],
                score: 1
            }
        ]
    },
    {
        text: "在团队中，你通常扮演什么角色？",
        options: [
            {
                text: "预知危险并警告队友",
                paths: ["占卜家"],
                score: 1
            },
            {
                text: "发明工具解决问题",
                paths: ["学徒"],
                score: 1
            },
            {
                text: "暗中收集情报和信息",
                paths: ["偷盗者"],
                score: 1
            },
            {
                text: "直接领导团队行动",
                paths: ["占卜家", "学徒"],
                score: 1
            }
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
        score: 4
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
        paths: ["Spectator", "Secrets Supplicant"],
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
        score: 3
      },
      {
        text: "Alert others and take a defensive stance until help arrives.",
        paths: ["Arbiter", "Warrior", "Sailor"],
        score: 4
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
        score: 4
      },
      {
        text: "Use the knowledge to your advantage later.",
        paths: ["Lawyer", "Assassin", "Criminal"],
        score: 4
      },
      {
        text: "Try to convince them to change through emotion or belief.",
        paths: ["Apothecary", "Secrets Supplicant", "Seer"],
        score: 4
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
        score: 4
      },
      {
        text: "Experiment with their abilities and push their limits.",
        paths: ["Apprentice", "Savant", "Corpse Collector"],
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
        paths: ["Seer", "Monster"],
        score: 6
      },
      {
        text: "Use the chaos to test your own strength or exploit others.",
        paths: ["Criminal", "Assassin", "Hunter"],
        score: 4
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
        score: 4
      },
      {
        text: "Turn back — nothing good ever comes from following strange lights.",
        paths: ["Assassin", "Prisoner"],
        score: 3
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
        score: 5
      },
      {
        text: "Try to build communication tools from debris and local materials",
        paths: ["Savant", "Lawyer"],
        score: 5
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
        score: 4
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
        score: 4
      },
      {
        text: "Follow your inner voice and leave the place, even if no one else sees the danger.",
        paths: ["Seer", "Secrets Supplicant"],
        score: 5
      }
    ]
  },
  {
    text: "A stranger hands you a sealed letter with your name written in an unfamiliar script. What do you do?",
    options: [
      {
        text: "Wait until night and consult the stars before opening it.",
        paths: ["Seer", "Monster", "Secret"],
        score: 5
      },
      {
        text: "Open it immediately and search for any hidden codes or meanings.",
        paths: ["Reader", "Apprentice"],
        score: 5
      },
      {
        text: "Toss it aside—it's probably a trick or a trap.",
        paths: ["Marauder", "Criminal", "Prisoner"],
        score: 4
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
        score: 4
      }
    ]
  },//Check Here
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
        paths: ["Marauder", "Criminal"],
        score: 5
      },
      {
        text: "Turn the suspicion onto someone else through subtle manipulation.",
        paths: ["Assassin", "Spectator", "Hunter"],
        score: 4
      },
      {
        text: "Summon a supernatural force to reveal the truth.",
        paths: ["Seer", "Death", "Secrets Supplicant"],
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
        paths: ["Sailor", "Lawyer"],
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
    text: "A child falls gravely ill in a remote village. The villagers ask for your help. You...",
    options: [
      {
        text: "Prepare herbal medicine and perform healing rituals rooted in moonlight traditions.",
        paths: ["Apothecary", "Sleepless"],
        score: 6
      },
      {
        text: "Investigate the child's surroundings and examine unnatural symptoms scientifically.",
        paths: ["Savant", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Whisper an old sea chanty to calm the child and use water magic to stabilize them.",
        paths: ["Sailor", "Bard"],
        score: 4
      },
      {
        text: "Search for any spiritual bindings or lingering souls causing the sickness.",
        paths: ["Corpse Collector", "Prisoner"],
        score: 5
      }
    ]
  },
  {
    text: "You enter a vault containing ancient seeds and vials. What do you do first?",
    options: [
      {
        text: "Analyze and crossbreed the seeds to create something entirely new.",
        paths: ["Planter", "Savant"],
        score: 6
      },
      {
        text: "Test each vial to determine whether it heals or harms.",
        paths: ["Apothecary", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Take the most volatile ones and see how they react to ocean pressure.",
        paths: ["Sailor", "Prisoner"],
        score: 4
      },
      {
        text: "Catalog the materials under proper international codes for sealed artifacts.",
        paths: ["Lawyer", "Sleepless"],
        score: 5
      }
    ]
  },
  {
    text: "You're being watched by something invisible. How do you respond?",
    options: [
      {
        text: "Lure it close by pretending to be unaware, then bind it with ghost-thread rituals.",
        paths: ["Corpse Collector", "Sleepless"],
        score: 5
      },
      {
        text: "Use your crafted lenses to detect residual energies and document their movement.",
        paths: ["Savant", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Prepare potions with silver and mistleaf to force it into physical form.",
        paths: ["Apothecary", "Prisoner"],
        score: 6
      },
      {
        text: "Call upon maritime protection chants and mark the doorway with sea salt.",
        paths: ["Sailor", "Planter"],
        score: 4
      }
    ]
  },
  {
    text: "You're offered forbidden knowledge sealed by a dead civilization. You...",
    options: [
      {
        text: "Decipher it carefully, ensuring every law and clause is still valid before using.",
        paths: ["Lawyer", "Mystery Pryer"],
        score: 6
      },
      {
        text: "Use it to restore lost cures and refine healing concoctions.",
        paths: ["Apothecary", "Savant"],
        score: 5
      },
      {
        text: "Embed the knowledge into an aquatic symbiote for preservation.",
        paths: ["Sailor", "Planter"],
        score: 4
      },
      {
        text: "Bind it into your body through ritual, even if it changes you.",
        paths: ["Prisoner", "Corpse Collector"],
        score: 5
      }
    ]
  },
  {
    text: "You're tasked with keeping watch over an ancient tree with a sleeping spirit inside.",
    options: [
      {
        text: "Mix potions to maintain the soil and spirit's balance.",
        paths: ["Apothecary", "Planter"],
        score: 5
      },
      {
        text: "Study the tree's history and unlock the meaning behind its whispers.",
        paths: ["Mystery Pryer", "Sleepless"],
        score: 5
      },
      {
        text: "Seal the area with legal glyphs and warding agreements enforced by oath.",
        paths: ["Lawyer", "Savant"],
        score: 6
      },
      {
        text: "Connect the tree to distant waters to help it breathe better.",
        paths: ["Sailor", "Prisoner"],
        score: 4
      }
    ]
  },
  {
    text: "You're lost in a dreamlike forest with no memory of how you arrived. What do you do?",
    options: [
      {
        text: "Search for signs and patterns to map a way out.",
        paths: ["Apprentice", "Savant"],
        score: 5
      },
      {
        text: "Ask the trees for guidance and follow the path they open.",
        paths: ["Planter", "Apothecary"],
        score: 4
      },
      {
        text: "Let the dream unfold and try to take control of it from within.",
        paths: ["Spectator", "Sleepless"],
        score: 6
      },
      {
        text: "Carve a direct path forward, ignoring illusions and obstacles.",
        paths: ["Warrior", "Assassin"],
        score: 5
      }
    ]
  },
  {
    text: "You overhear two nobles conspiring in secret. What is your first instinct?",
    options: [
      {
        text: "Record everything and find the right leverage to use later.",
        paths: ["Lawyer", "Marauder"],
        score: 5
      },
      {
        text: "Hypnotize them subtly to get them to confess more.",
        paths: ["Spectator", "Visionary"],
        score: 6
      },
      {
        text: "Alert the local authority and help enforce order.",
        paths: ["Arbiter", "Justiciar"],
        score: 5
      },
      {
        text: "Blackmail them using faked evidence and clever forgeries.",
        paths: ["Assassin", "Criminal"],
        score: 5
      }
    ]
  },
  {
    text: "You're challenged to a duel. What kind of preparation do you make?",
    options: [
      {
        text: "Study your opponent's previous battles and build a strategy.",
        paths: ["Savant", "Reader"],
        score: 5
      },
      {
        text: "Trust your instincts and prepare to adapt in the moment.",
        paths: ["Monster", "Seer"],
        score: 4
      },
      {
        text: "Hide traps and tricks around the battleground beforehand.",
        paths: ["Hunter", "Assassin"],
        score: 6
      },
      {
        text: "Practice your technique relentlessly until the duel begins.",
        paths: ["Warrior", "Twilight Giant"],
        score: 5
      }
    ]
  },
  {
    text: "You discover a magical mirror that shows people's true intentions. How do you use it?",
    options: [
      {
        text: "Use it in secret to investigate criminals and manipulators.",
        paths: ["Arbiter", "Spectator"],
        score: 5
      },
      {
        text: "Sell access to it for favors and influence.",
        paths: ["Lawyer", "Marauder"],
        score: 6
      },
      {
        text: "Hide it away so no one can misuse its power.",
        paths: ["Sleepless", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Channel its power through a ritual to awaken your latent sight.",
        paths: ["Seer", "Supplicant"],
        score: 4
      }
    ]
  },
  {
    text: "A raging storm is destroying the coastline. What's your response?",
    options: [
      {
        text: "Sail into the chaos to redirect the winds and calm the sea.",
        paths: ["Sailor"],
        score: 6
      },
      {
        text: "Set up a system to evacuate people and enforce order.",
        paths: ["Arbiter", "Bard"],
        score: 5
      },
      {
        text: "Use the confusion to sneak into a sealed temple revealed by the waves.",
        paths: ["Marauder", "Mystery Pryer"],
        score: 5
      },
      {
        text: "Summon spirits of water to shield the town from destruction.",
        paths: ["Corpse Collector", "Apothecary"],
        score: 4
      }
    ]
  },
  {
    text: "You're invited to join an elite secret society. What convinces you?",
    options: [
      {
        text: "The rare access to long-lost knowledge and tomes.",
        paths: ["Mystery Pryer", "Reader"],
        score: 6
      },
      {
        text: "A chance to sway world events from the shadows.",
        paths: ["Lawyer", "Black Emperor"],
        score: 5
      },
      {
        text: "An opportunity to test and improve forbidden sciences.",
        paths: ["Savant", "Paragon"],
        score: 5
      },
      {
        text: "The thrill of danger and whispered rituals.",
        paths: ["Criminal", "Prisoner"],
        score: 5
      }
    ]
  },
  {
    text: "You stumble into a library that exists outside time. What do you seek?",
    options: [
      {
        text: "Spells that alter fate and probability.",
        paths: ["Monster", "Seer"],
        score: 5
      },
      {
        text: "Historical documents that explain ancient civilizations.",
        paths: ["Reader", "Mystery Pryer"],
        score: 6
      },
      {
        text: "Knowledge about restoring or enhancing the body.",
        paths: ["Planter", "Apothecary"],
        score: 5
      },
      {
        text: "The rules of divine contracts and celestial law.",
        paths: ["Lawyer", "Arbiter"],
        score: 5
      }
    ]
  },
  {
    text: "You're given an unfamiliar artifact that pulses with a heartbeat. What do you do?",
    options: [
      {
        text: "Bind it to your soul with a protective ritual.",
        paths: ["Corpse Collector", "Prisoner"],
        score: 5
      },
      {
        text: "Take it to your lab and dissect it safely.",
        paths: ["Savant", "Apothecary"],
        score: 6
      },
      {
        text: "Meditate with it and observe how it affects the world around you.",
        paths: ["Seer", "Supplicant"],
        score: 4
      },
      {
        text: "Sell it to someone powerful and extract long-term favors.",
        paths: ["Lawyer", "Marauder"],
        score: 5
      }
    ]
  },
  {
    text: "You find a sealed door with a phrase that constantly changes. What is your method?",
    options: [
      {
        text: "Speak back to it in riddles and observe the result.",
        paths: ["Spectator", "Visionary"],
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
        text: "Pray to the forces behind the door and wait for revelation.",
        paths: ["Supplicant", "Mystery Pryer"],
        score: 4
      }
    ]
  },
  {
    text: "A soul begs for rest but cannot leave the world. How do you help it?",
    options: [
      {
        text: "Perform a sacred lullaby ritual until they sleep forever.",
        paths: ["Sleepless", "Bard"],
        score: 5
      },
      {
        text: "Discover the injustice tying them to the world and correct it legally.",
        paths: ["Arbiter", "Lawyer"],
        score: 6
      },
      {
        text: "Feed the soul into a lantern to fuel your own power.",
        paths: ["Prisoner", "Corpse Collector"],
        score: 5
      },
      {
        text: "Create a new host body using plant and alchemical means.",
        paths: ["Planter", "Apothecary"],
        score: 4
      }
    ]
  }
];