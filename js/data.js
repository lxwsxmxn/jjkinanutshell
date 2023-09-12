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
        explanatory_data: ``,
        extra_data: []
    },
    barriertechnique_data: {
        explanatory_data: ``,
        extra_data: []
    },
    cursedobject_data: {
        explanatory_data: ``,
        extra_data: []
    },
    cursedtool_data: {
        explanatory_data: ``,
        extra_data: []
    },
    jscu_data: {
        explanatory_data: ``,
        extra_data: []
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
