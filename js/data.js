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
        explanatory_data: ic_p(`This is ${ic_a("information")}`),
        extra_data: [ic_li(`${ic_li_span("title")} information`), ic_li(`${ic_li_span("title")} information`)]
    },
    cursedenergy_data: {
        explanatory_data: ``,
        extra_data: []
    },
    cursedspirit_data: {
        explanatory_data: ``,
        extra_data: []
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
    ul.classList.add("extrajjk-list");
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
