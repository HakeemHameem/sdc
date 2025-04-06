
import { colors } from ".";
import allPeople from "./people";
// // Import images
import Aparna from "../images/Aparna.jpg";
import Ana from "../images/Ana.jpeg";
import Adi  from "../images/aditi.jpg";
import Ashish from "../images/Ashish.jpg";
import Chandana from "../images/Chandana.jpg";
import Adrija from "../images/Das.jpeg";
import Divit from "../images/divit.jpg";
import Divya from "../images/Divya.jpg";
import Greeshma from "../images/Greeshma.jpeg";
import Heerat from "../images/Heerat.jpg";
import Jaiswal from "../images/Jaish.jpg";
import Joel from "../images/Joel.jpg";
import Kashish from "../images/kashish.jpg";
import Kathrine from "../images/KatharineKennedy - Katharine.jpg";
import Kunal from "../images/kunal.jpg";
import Kushik from "../images/kushik.jpeg";
import Majeti from "../images/Maja.jpeg";
import Megashree from "../images/Megashree.jpg";
import Nisar from "../images/Nisar.jpg";
import Pande from "../images/pande.jpeg";
import Pradip from "../images/pradip.jpeg";
import Prashant from "../images/Prashant.jpeg";
import Prem from "../images/Prem.jpg";
import Prush from "../images/purush.jpg";
import Rishabh from "../images/Rishabh.jpg";
import Rohit from "../images/Rohith.jpg";
import Sahil from "../images/sahil.jpeg";
import Sanja from "../images/sanja.jpg";
import Shreenath from "../images/Shreenath.jpg";
import Shreesh from "../images/Shrish.jpg";
import Singh from "../images/Singh.jpg";
import Sinha from "../images/Sinha.jpg";
import Sravan from "../images/sravan.jpg";
import Thejaswini from "../images/Thejasw.jpg";
import Ullas from "../images/Ullas.jpeg";
import Vatsala from "../images/Vatsala.jpg";
import Visvas from "../images/visvas.jpg";
import yuvi from "../images/yuvi.jpg";
import Nara from "../images/Nara.jpg";
import Hameem1 from "../images/Hameem.jpeg";
import kk from "../images/kk.jpg";



let team = [];

let parsedTeam = allPeople;

parsedTeam.forEach((e) => {
    let parsedObj = {
        name: e["Name"],
        email: e["Email Address"],
        mail: e["Personal Email"],
        tel: e["Phone No."],
        image: e["Profile Photo (preferably focused on face)"],
        title: e["Designation(E.g:- Web Developer, Graphic Designer, CP, etc)"],
        status: e[
            "A one liner to describe yourself.(E.g:- I am an avid learner, always on the hunt for new experiences)"
        ],
        insta: e["Instagram username"],
        linkedin: e["LinkedIn Username"],
        twitter: e["Twitter Username"],
        roll: e["Roll No."],
    };
    let obj = {
        name: parsedObj.name,
        image: getImage(parsedObj.image), // Use appropriate image based on condition
        title: parsedObj.title,
        status: parsedObj.status,
        email: parsedObj.email,
        socials: [
            {
                service: "Linkedin",
                username: parsedObj.linkedin,
            },
            {
                service: "Instagram",
                username: parsedObj.insta,
            },
            {
                service: "Phone",
                username: parsedObj.tel,
            },
            {
                service: "Mail",
                username: parsedObj.mail,
            },
            {
                service: "Twitter",
                username: parsedObj.twitter,
            },
        ],
        color: colors[Math.floor(Math.random() * 15)],
    };
    team = [...team, obj];
});

function getImage(imageName) {
    console.log("Current Image Name:", imageName); // Log the current imageName
    switch (imageName) {
        case "Aparna.jpg":
            return Aparna;
        case "Ana.jpg":
            return Ana;
        case "aditi.jpg":
            return Adi;
        case "Hameem.jpeg":
            return Hameem1;
        case "Ashish.jpg":
            return Ashish;
        case "Chandana.jpg":
            return Chandana;
        case "Das.jpeg":
            return Adrija;
        case "divit.jpg":
            return Divit;
        case "Divya.jpg":
            return Divya;
        case "Greeshma.jpeg":
            return Greeshma;
        case "Heerat.jpg":
            return Heerat;
        case "Jaish.jpg":
            return Jaiswal;
        case "Joel.jpg":
            return Joel;
        case "kashish.jpg":
            return Kashish;
        case "KatharineKennedy - Katharine.jpg":
            return Kathrine;
        case "kunal.jpg":
            return Kunal;
        case "kushik.jpeg":
            return Kushik;
        case "Maja.jpeg":
            return Majeti;
        case "Megashree.jpg":
            return Megashree;
        case "Nisar.jpg":
            return Nisar;
        case "pande.jpeg":
            return Pande;
        case "pradip.jpeg":
            return Pradip;
        case "Prashant.jpeg":
            return Prashant;
        case "Prem.jpg":
            return Prem;
        case "purush.jpg":
            return Prush;
        case "Rishabh.jpg":
            return Rishabh;
        case "Rohith.jpg":
            return Rohit;
        case "sahil.jpeg":
            return Sahil;
        case "sanja.jpg":
            return Sanja;
        case "Shreenath.jpg":
            return Shreenath;
        case "Shrish.jpg":
            return Shreesh;
        case "Singh.jpg":
            return Singh;
        case "Sinha.jpg":
            return Sinha;
        case "sravan.jpg":
            return Sravan;
        case "Thejasw.jpg":
            return Thejaswini;
        case "Ullas.jpeg":
            return Ullas;
        case "Vatsala.jpg":
            return Vatsala;
        case "visvas.jpg":
            return Visvas;
        case "yuvi.jpg":
            return yuvi;
        case "Nara.jpg":
            return Nara;
        case "kk.jpg":
            return kk;
        default:
            console.log("No matching case found, returning default image"); // Log when no matching case is found
            return null; // Return null or a default image if imageName doesn't match any case
    }
}


let cooridnators = [];
let volunteers = [];
let mentors = [];
let designer = [];
let contentt = [];
let sozial = [];
let office = [];

team.forEach((member) => {
    if (member.email.slice(0, 2) === "19") mentors = [...mentors, member];
    else if (member.email.slice(0, 2) === "20") cooridnators = [...cooridnators, member];
    else if (member.email.slice(0, 2) === "21") volunteers = [...volunteers, member];
    else if (member.email.slice(0, 2) === "22") designer = [...designer, member];
    else if (member.email.slice(0, 2) === "23") contentt = [...contentt, member];
    else if (member.email.slice(0, 2) === "24") sozial = [...sozial, member];
    if (
        member.email === "19331@iiitu.ac.in" ||
        member.email === "19137@iiitu.ac.in" ||
        member.email === "19307@iiitu.ac.in"
    )
        office = [...office, member];
});

export { cooridnators, volunteers, designer, contentt, sozial, mentors, office };

team = [
   
    {
        title: "Core Team",
        members: mentors,
    },
    {
        title: "Tech Team",
        members: cooridnators,
    },
    {
        title: "Media team",
        members: volunteers,
    },
    {
        title: "Design Team",
        members: designer,
    },
    {
        title: "Content Team",
        members: contentt,
    },
    {
        title: "Social-Media Team ",
        members: sozial,
    },
];

export default team;
