import { options_up_downer,options_destroyer } from "./arrow_key_event.js";

export var focussed_element = { value: 0 };
export var previous_switch = { value: "none" };

const instructions = [
  "Use 'Tab' to move to the next field & 'Shift+Tab' to move to the  previous field",
  "You can leave all the other fields empty (except gender and caste) to list out everything.",
  "You can fill in inst code and leave out rest of fields (except gender and caste) to output everybranch in that college.",
  "range_min and range_max is where you specify the cutoff range in which you want to list out the cutoffs.",
  "You can fill all the desired branches you want in the branch_code field (use commas ',' to separate them (cse,inf,ece)) and submit it.",
  "You can find all codes  and its abbreviations in Codes_and_Names which is at the Top.",
  "Use a computer for better view.",
];
const mistakes = [
  "Not opting gender and caste.",
  "Filling inst_code and dist_code which don't match.",
  "Filling multiple caste's.",
];
const ol_append=(list,data)=>{
   for (let i = 0; i < data.length; i++) {
     let li = document.createElement("li");
     li.innerHTML = data[i];
     list.appendChild(li);
   }
}

const ol_create=(h6_text,data)=>{
      let ol = document.createElement("ol");
      let h6 = document.createElement("h6");
      ol.setAttribute("class", "ordered_list");
      h6.innerHTML = h6_text;
      ol.appendChild(h6);
      ol_append(ol, data);
      return(ol);
}

const child_div_create=(h6_text,data)=>{
    let div = document.createElement("div");
    div.setAttribute("class", "container-fluid help_div");
    let ol=ol_create(h6_text,data)
    div.appendChild(ol);
    return(div);
}
export function help() {
  let help_div = document.getElementById("help");
  let side_bar_text = document.getElementById("instructions");
  
  if (help_div.style.display == "block") {
     help_div.style.display = "none";
     side_bar_text.innerHTML = "Show_instructions";
     
    } else {
    help_div.style.display = "block";
    side_bar_text.innerHTML = "Hide_instructions";
    help_div.innerHTML="";
    let how_to_use_div=child_div_create("How To Use",instructions);
    let common_mistakes_div=child_div_create("Common Mistakes:",mistakes);
    help_div.appendChild(how_to_use_div);
    help_div.appendChild(common_mistakes_div);
   
  }
}
export function initialize_all_event_listeners() {
  options_destroyer();
  options_up_downer();
}
