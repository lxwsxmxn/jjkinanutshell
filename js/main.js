// Navigation
        // This array contains all the strings that are used for HTML element id
const section_ids = ["home", "jjkworld", "cursedenergy",
    "cursedspirit", "cursedtechnique", "barriertechnique",
    "cursedobject", "cursedtool", "jscu", "extrajjk"]

        // This array contains all text for the navigation links and for the Section headings
const headings_and_link_text = ["JJK IN A NUTSHELL", "WORLD OF JUJUTSU KAINSEN", 
    "CURSED ENERGRY", "CURSED SPIRIT",
    "CURSED TECHNIQUE", "BARRIER TECHNIQUE", "CURSED OBJECT", "CURSED TOOL",
    "JUJUTSU SORCERER & CURSE USER", "EXTRA JJK"];

function navbar(initial_index=0) {
    // This functions generates a navigation bar
    let nav = document.createElement("nav");
    for (let index=initial_index; index < 10; index++) {
        let anchor = document.createElement("a");
        anchor.id = section_ids[index] + "-link";
	    anchor.href = "#" + section_ids[index] + "-section";
        anchor.innerHTML =	headings_and_link_text[index];
        nav.appendChild(anchor);
    }
    if (initial_index === 0) {
        nav.classList.add("hidden");
    }
    return nav; 
}

    // Home Navigation

const home_nav = navbar(1);
home_nav.id = "home-nav"
document.getElementById("home-nav-container").appendChild(home_nav);

function dropdownButton() {
    // Button to hide and show the navigation bar found in each section except the home section
    let button = document.createElement("button");
    button.classList.add("dropdown-nav-button");
    button.innerHTML = "Menu";
    return button;
}

function toggleInfoSectionNavbar(nav_node) {
	// Toggles the visiblity of the navbars located in the info sections
    let node_navbar = nav_node.lastElementChild;
    nav_node.firstElementChild.addEventListener("click", () => {
        if (node_navbar.classList[0] === "hidden") {
            node_navbar.classList.add("info-section-nav")
            node_navbar.classList.remove("hidden");
        } else {
            node_navbar.classList.remove("info-section-nav");
            node_navbar.classList.add("hidden");
        }
    });
}

function infoSectionGenerator(section_id, section_heading_title) {
	// This function is reponsible for generating info-sections
    let section = document.createElement("section");
    section.classList.add("info-section", "viewport-sized-container");
    section.id = section_id + "-section";

    let section_header = document.createElement("header");
    section_header.id = section_id + "-section-header";
    section_header.classList.add("info-section-header");
    let section_heading = document.createElement("h2");
    section_heading.innerHTML = section_heading_title;
	section_header.appendChild(section_heading);

    let section_nav_container = document.createElement("div");
    section_nav_container.classList.add("info-section-nav-container");
    section_nav_container.id = section_id + "-nav-container";
    section_nav_container.appendChild(dropdownButton());
    section_nav_container.appendChild(navbar());

    let section_info_container = document.createElement("div");
    section_info_container.id = section_id + "-info-container";
	section_info_container.classList.add("info-container");

    section.appendChild(section_header);
    section.appendChild(section_nav_container);
	section.appendChild(section_info_container);
    console.log(section);
    return section;
}

// Node Generating and Selection
const body = document.querySelector("body");
const jjkworld = infoSectionGenerator(section_ids[1], headings_and_link_text[1]);
const cursedenergy = infoSectionGenerator(section_ids[2], headings_and_link_text[2]);
const cursedspirit = infoSectionGenerator(section_ids[3], headings_and_link_text[3]);
const cursedtechnique = infoSectionGenerator(section_ids[4], headings_and_link_text[4]);
const barriertechnique = infoSectionGenerator(section_ids[5], headings_and_link_text[5]);
const cursedobject = infoSectionGenerator(section_ids[6], headings_and_link_text[6]);
const cursedtool = infoSectionGenerator(section_ids[7], headings_and_link_text[7]);
const jscu = infoSectionGenerator(section_ids[8], headings_and_link_text[8]);
const extrajjk = infoSectionGenerator(section_ids[9], headings_and_link_text[9]);

// Adding the info-section Nodes to the body Node
// and attaching the toggleInfoSectionNavbar(...) to each info-section's navbar

body.appendChild(jjkworld);
toggleInfoSectionNavbar(jjkworld.childNodes[1]);

body.appendChild(cursedenergy);
toggleInfoSectionNavbar(cursedenergy.childNodes[1]);

body.appendChild(cursedspirit);
toggleInfoSectionNavbar(cursedspirit.childNodes[1]);

body.appendChild(cursedtechnique);
toggleInfoSectionNavbar(cursedtechnique.childNodes[1]);

body.appendChild(barriertechnique);
toggleInfoSectionNavbar(barriertechnique.childNodes[1]);

body.appendChild(cursedobject);
toggleInfoSectionNavbar(cursedobject.childNodes[1]);

body.appendChild(cursedtool);
toggleInfoSectionNavbar(cursedtool.childNodes[1]);

body.appendChild(jscu);
toggleInfoSectionNavbar(jscu.childNodes[1]);

body.appendChild(extrajjk);
toggleInfoSectionNavbar(extrajjk.childNodes[1]);
