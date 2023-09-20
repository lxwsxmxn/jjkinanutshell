// data.js is reponsible for the organization, containment and provision of data

// '-info-container' Selections

const jjkworld_info_container = document.getElementById("jjkworld-info-container");
const cursedenergy_info_container = document.getElementById("cursedenergy-info-container");
const cursedspirit_info_container = document.getElementById("cursedspirit-info-container");
const cursedtechnique_info_container = document.getElementById("cursedtechnique-info-container");
const cursedobject_info_container = document.getElementById("cursedobject-info-container");
const cursedtool_info_container = document.getElementById("cursedtool-info-container");
const jscu_info_container = document.getElementById("jscu-info-container");
const extrajjk_info_container = document.getElementById("extrajjk-info-container");
const barriertechnique_info_container = document.getElementById("barriertechnique-info-container");

function createInfoUnit() {
    let info_unit = document.createElement("div");
    info_unit.classList.add("info-unit");
    return info_unit;
}


// Adding info_unit nodes to all info-container nodes
jjkworld_info_container.appendChild(createInfoUnit());
cursedenergy_info_container.appendChild(createInfoUnit());
cursedspirit_info_container.appendChild(createInfoUnit());
cursedtechnique_info_container.appendChild(createInfoUnit());
cursedobject_info_container.appendChild(createInfoUnit());
cursedtool_info_container.appendChild(createInfoUnit());
jscu_info_container.appendChild(createInfoUnit());
barriertechnique_info_container.appendChild(createInfoUnit());
extrajjk_info_container.appendChild(createInfoUnit());

// DATA
/*
    explanatory_data - information explaining the topic contained in a paragraph(p);
    extra_data - extra information about topic contained in a list(ul);
*/

    // DATA REPRESENTATION COMPONENTS

        // info-container Paragraph Component
const ic_p = (content) => `<p class="info-container-paragraph">${content}</p>`;
        // info-container Link Component
const ic_a = (content, info_section_id="") => `<a href="#${info_section_id}">${content}</a>`;
        // info-container list item title Component
const ic_li_span = (content) => `<span class="li-title">${content}</span>`;
        // info-container list item Comoponent
const ic_li = (content) => `<li class="info-container-li">${content}</li>`;

    // SIMPLE DATABASE - JS OBJECT
const data = {
    jjkworld_data: {
        explanatory_data: `${ic_p(`Imagine a world where curses are a real danger, and in that world curses are the cause of
many mysterious deaths. In the world of Jujutsu Kaisen this is exactly the case, ${ic_a("Curses", "cursedspirit-section")}, which are
grotesque looking beings are the main reason behind the many mysterious deaths that happen each year.`)}
${ic_p(`There are people who can see curses and also manipulate the energy that they are made off, and some of this people who are known as 
${ic_a("Jujutsu Sorcerers", "jscu-section")} use this power to rid the world of curses. 
${ic_a("Curse Users", "jscu-section")} unlike Jujutsu Sorcerers, use this power for selfish reasons, 
and it is also the duty of Jujutsu Sorcerers to protect against this individuals.`)}
${ic_p(`Tokyo Jujutsu High and Kyoto Jujutsu High are educational institutions dedicated to fostering the next generation of Jujutsu Sorceres.`)}`,
    },
    cursedenergy_data: {
        explanatory_data: `${ic_p(`The source of power used by ${ic_a("Cursed Spirits", "cursedspirit-section")} and ${ic_a("Sorceres", "jscu-section")} to fuel their
${ic_a("jujutsu", "cursedtechnique-section")} is known as Cursed Energy. Negative emotions such as grief and anger are the foundation of cursed energy, this means a vast majority
of humans possess this energy. Cursed energy leaks from non-sorcerers, accumaltes and ferments over time until a cursed spirit manifests, this because they are not trained to control
this energy. If the amount of this energy is higher than a certain degree, a person will be able to see cursed spirits. The a higher the amount of cursed energy
in a sorcerer or cursed spirit the stronger they are.`)}
${ic_p(`Things such as ${ic_a("Cursed Objects", "cursedobject-section")}, ${ic_a("Cursed Tools", "cursedtool-section")} and Cursed Corpses all contain cursed energy. The properties of
cursed energy vary from person to person.`)}`,
        extra_data: [
            ic_li(`Cursed energy is used to fuel cursed techniques, reinforce the body, or activate talisman. It also other uses.`),
            ic_li(`The properties of cursed energy vary from person to person.`),
            ic_li(`Its connection to the human brain is shrouded in mystery.`),
            ic_li(`There are rare cases where cursed energy carries a special property unique to its user. e.g Kinji Hakari's cursed energy has a rough texture to it.`),
            ic_li(`In rare are some people are born with no cursed energy. e.g Toji and Maki`)
        ]
    },
    cursedspirit_data: {
        explanatory_data: `${ic_p(`Cursed Spirits or Curses, are the result of ${ic_a("Cursed Energy", "cursedenergy-section")} that leaks out of humans over time
because their negative emotions. Cursed spirits haunt and bring harm to humanity and are the major reason there are ${ic_a("Jujutsu Sorcerers", "jscu-section")}.
`)}${ic_p(`The origin of curses and jujutsu is for the most part unknown. The working theory is that since cursed energy comes from negative emotions, curses have always
existed alongside humanity. Annually in Japan, the number of unexplained deaths and disappearance exceeds ten thousand. This is the due the effect cursed spirits have on society.`)}
${ic_p(`Cursed spirits are created when the cursed energy leaks from non-sorcerers as a result of habouring negative emotions. The cursed energy thus gathers in one spot, building
up until a cursed spirit takes form. Populated places such as schools and hospitals are hotspots fro bearing curses becuase many negative emotions are associated with memories of those
places. An image of fear shared by the masses can create a powerful curse even if the subject is not real, like famous monsters and ghosts. The negative emotions that humanity
directs a this image is what causes it to menifest.`)}`,
        extra_data: [
            ic_li(`${ic_li_span("Ryomen Sukuna")} was recognized as the undisputed King of Curse during the Heian Era, the golden age of Jujutsu.`),
            ic_li(`A cursed spirit's body is entirely made up of cursed energy.`),
            ic_li(`Non-socerers can not see cursed spirits, however when in danger because of a curse they may gain the ability to see it in that life or death situation.`),
            ic_li(`They come in all kinds of grotesque shapes and sizes.`),
            ic_li(`They tend to linger around their point of origin.`),
            ic_li(`Sorcerers should be killed with jujutsu or they can become a vengeful spirit after death.`),
            ic_li(`Cursed spirits can only be demaged and exorcised with cursed energy.`)
]
    },
    cursedtechnique_data: {
        explanatory_data: `${ic_p(`A Cursed Technique is an ability fueled by ${ic_a("Cursed Energy", "cursedenergy-section")}. There are different types of cursed techniques;
innate techniques, ${ic_a("barrier techniques", "barriertechnique-section")}, shikigami conjuration, and more.`)}
${ic_p(`A cursed technique is activated by pouring cursed energy into it, by using the process of Lapse or Reversal. Lapse refers to the default or neutral state of activation of
a cursed technique. To activate a cursed technique in lapse, the caster circulates their cursed energy in a forward direction to channel it into their ability. Reversal produces 
positive energy by multiplying negative energy with negative energy. Positive energy can heal physical injuries. Reversal requires a high level of cursed energy manipulation, thus
the ability to use reversal is rare.`)}
${ic_p(`Cursed techniques often require hand signs, empowered word, or other gestures to activate. A sorcerer's skill is determined by the degree to which they can minimize
and omit these factors to make their abilities more efficient. The purposeful inclusion of incantations or rituals can elevate a cursed techniques's effectiveness.`)
}`,
        extra_data: [
            ic_li(`${ic_li_span("Innate Techniques")} are unique abilities congenitally engraved into the user's body. e.g. Straw Doll Technique, Ratio Technique, and Construction`),
            ic_li(`${ic_li_span("Inherited Techiques")} are innate techniques passed down to sorcerers in the same bloodline. e.g. Ten Shadows Technique, Limitless, and Cursed Speech`),
            ic_li(`${ic_li_span("Extension Techniques")} are original abilities derived from innate techniques. e.g Straw Doll Technique: Resonance and Ration Technique: Collapse`),
            ic_li(`${ic_li_span("Maximum Output")} extension techniques with the highest possible cursed energy output channeled into then. e.g Flowing Red Scale: Stack`),
            ic_li(`${ic_li_span("Maximum Techniques")} are extension techniques that bring out the greates potential of their derived innate technique. e.g. Maximum: Uzumaki`),
            ic_li(`${ic_li_span("Shikigami Techniques")} conjure shikigami to aid the user using a variety of methods. e.g. Ten Shadows Technique, Moon Dregs.`)
]
    },
    barriertechnique_data: {
        explanatory_data: `${ic_p(`Barrier Techniques are ${ic_a("Cursed Techinques", "curesedtechnique-section")} that employ barrier zones to trap entities within a space or
to prevent thme from entering one. Simple barriers, like curtains, are often utilized by those without an innate technique.`)}
${ic_p(`Creating a barrier, requires an individual to construct a formula within themselves from scratch, after that they add empowered words, and then flow 
${("cursed energy", "cursedenergy-section")} through the formula to activate the technique. This is a very complex for even the most talented jujutsu practioners. Many powerful
${ic_a("Sorcerers", "jscu-section")} with innate techniques can not even perform barrier techniques.`)}
`,
        extra_data: [
            ic_li(`${ic_li_span("Curtains")} are vast simple barriers with a spherical shell that conceal jujutsu activity from non-sorcerers. They also force cursed spirits to reveal
themselves within the barrier.`),
            ic_li(`${ic_li_span("Domain Expansions")} are a innate domain manifested using cursed energy inside a barrier imbued with the user's innate technique. Expanding this domain
improves one's abilities and ensures that all techniques employed within the barrier are guaranteed to hit their target.`),
            ic_li(`${ic_li_span("Empty Barriers")} are vacant zones where the edge is defined by an outer shell made of hexagon-shaped panels, the structure of which can be freely
changed by skilled barrier technique user.`),
            ic_li(`${ic_li_span("Pure and Bon Barriers")} are superior versions of a barrier, with the latter being more advanced.`),
            ic_li(`${ic_li_span("Anti-Domain Techniques")} are countermeasures designed to withstand the can't-miss attack of opposing domain expansions. e.g. New Shadow Style:
Simple Domain`)
        ]
    },
    cursedobject_data: {
        explanatory_data: `${ic_p(`A Cursed objects is an item with a dark history that contains ${ic_a("cursed energy", "cursedenergy-section")}. In most cases these item consists of 
remnants of an ancient ${ic_a("sorcerer", "jscu-section")} that can be incarnated into a new body if the cursed object is consumed by a compatible vessel.`)}
${ic_p(`With the exception of cursed ${ic_a("tools", "cursedtool-section")} and corpses, items that contain cursed energy are reffered to as cursed objects. A cursed object is ranked in
the same way as a cursed tool, based on the strength of the cursed energy they contain. Dangerous cursed objects such as Ryomen Sukuna's fingers, are ranked special grade. Special
grade cursed objects cannot be destroyed and their continued existence is guaranteed under the binding vow used to create them; which dictates that the individuals who become cursed
objects cease to live and cannot harm others.`)}`,
        extra_data: [
            ic_li(`Sealed special grade cursed objects can be used as amulets to ward of cursed spirits.`),
            ic_li(`Sukuna is the only individual throughout history who was able to transform himself into a cursed object after death.`),
            ic_li(`${ic_li_span("Ryomen Sukuna's Fingers")} are twenty fingers of Sukuna's original body from the Heian Era. Each one contains immense curse energy and is capable
of attracting cursed spirits as they are unsealed.`),
            ic_li(`${ic_li_span("Cursed Womb: Death Paintings")} are born from a pregnant woman in the Meiji Era which contain human DNA. They can incarnate when ingested by any
human, taking the form of a powerful cursed spirit with a physical body.`),
            ic_li(`${ic_li_span("Prison Realm")} is a living barrier capabale of sealing its targer within another inescapable dimension.`)
]
    },
    cursedtool_data: {
        explanatory_data: `${ic_p(`Cursed Tools are weapons and support items that are purpsosefully infused with cursed energy. Conventional weapons like katanas can become
semi cursed tools over time if the user constantly imbues it with their cursed energy, however this does not apply to weapons new to user. Cursed tools are ranked based on their
potency. The higher the grade of a cursed tool, the greater the advantage granted to the user in a battle.`)}
${ic_p(`Except for Playful Cloud, all special grade cursed tools are imbued with a ${ic_a("cursed tecnique", "cursedtechnique-section")}. Powerful cursed tools are extremely
valuable. All the cursed tools collected by the Big Three SSorcerer Families were stored in a vault called the cursed warehouse. However following the events of the Shibuya
Incident the Zenin and Kamo clans reclaimed their respective weapons, emptying the warehouse of cursed tools.`)}`,
        extra_data: [
            ic_li(`${ic_li_span("Black Rope")} has the ability to mess with the effects of cursed techniques. The more its used, the more it burns away`),
            ic_li(`${ic_li_span("Playful Cloud")} is a special grade cursed tool not imbued with a technique, its just destructive power that reflects the user's physical strength.`),
            ic_li(`${ic_li_span("Inverted Spear of Heaven")} is a special grade cursed tool that has the ability to nullify all cursed techniques on contact.`),
            ic_li(`${ic_li_span("Chain of a Thousand Miles")} is a cursed chain that can extend forever as long as the user keeps the chain from being seen.`),
            ic_li(`${ic_li_span("Sword of Extermination")} is a blade used Mahoraga that is coated in positive energy.`)
        ]
    },
    jscu_data: { explanatory_data: `${ic_p(`Jujutsu Sorcerers are sorcerers who are secretly trained and employed by the government of Japan to defend humanity from 
${ic_a("cursed spirits", "cursedspirit-section")}. There are only two educational institutions where the training of sorcers is done, Tokyo and Kyoto Jujutsu High.`)}
${ic_p(`Jujutsu sorcerers have been around for thousands of years. The King of Curses Ryomen Sukuna who was human over two thousand years ago claims jujutsu sorcerers have been
an issue in every era. As a result of the ongoing conflict between sorcerers and curses that has spanned thousands of years, a society of sorcerers have organized themselves
to work in the shadows to suppress curses in an effort to protect non-sorcerers. In the modern era, the Big Three Families and the jujutsu higher-ups control the jujutsu
community.`)}
${ic_p(`The bare minimun to be considered a sorcerer is the ability to see cursed spirits. To be a jujutsu sorcerer as a profession, one must possess high levels of cursed
energy and is born with the innate talent to use cursed techniques. There are exceptions to this, those without an innate technique, Yuji Itadori and and Atsuya Kusakabe;
and even those without cursed energy at all, like Maki Zen'nit, can become jujutsu sorceres.`)}
${ic_p(`There are sorcerers who use Jujutsu for evil and malicious deeds such as killing, and they are known as Curse Users. This individual have been around as long as jujtsu
sorcerers, and were also prominent threats during the Heian Era alongside cursed spirits. The high number of cursed spirits in the modern era has made being a professional
jujutsus sorcerer a demanding job, and not all born with the talent for jujutsu want to use it to exorcise curses. And because of this Jujutsu High is always understaffed with
jujutsu sorcerers.`)}
${ic_p(`Before 1989, curse users could freely make money by operating in the underworld and doing any dark deed asked of them. These individuals were able to live selfishly to
their heart's content until the birth of Satoru Gojo.`)}`,
        extra_data: [
            ic_li(`Notable Jujutsu Sorcerers: Satoru Gojo, Mei Mei, Kento Nanami.`),
            ic_li(`Notable Curse Users: Geto Suguru, Miguel, Kenjaku, Uraume.`)
        ]
    },
    extrajjk_data: {
        explanatory_data: ``,
        extra_data: []
    } 
};

function prepareExtraData(extra_data_array) {
    // Combines all the data found in the extra_data field into a string and attaches it to a extrajjk-list ul using .innerHTML
	let ul = document.createElement("ul");
    ul.classList.add("extrainfo-list");
    let ul_li_str = "";
    for (let index=0; index < extra_data_array.length; index++) {
        ul_li_str = ul_li_str + extra_data_array[index];
    };
	ul.innerHTML = ul_li_str;
    return ul;
}

function getData(data_key, info_container) {
    // This function gets takes informtion from the data object to and renders it on the specified info-container
    try {
        info_container.firstElementChild.innerHTML = data_key.explanatory_data;
    } catch(error) {
        null
    }
    try {
        info_container.appendChild(prepareExtraData(data_key.extra_data));
    } catch(error) {
        null
    }
}

getData(data["jjkworld_data"], jjkworld_info_container);
getData(data["cursedenergy_data"], cursedenergy_info_container);
getData(data["cursedspirit_data"], cursedspirit_info_container);
getData(data["cursedtechnique_data"], cursedtechnique_info_container);
getData(data["barriertechnique_data"], barriertechnique_info_container);
getData(data["cursedobject_data"], cursedobject_info_container);
getData(data["cursedtool_data"], cursedtool_info_container);
getData(data["jscu_data"], jscu_info_container);
getData(data["extrajjk_data"], extrajjk_info_container);
