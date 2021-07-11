import {initialize_all_event_listeners,help,focussed_element,previous_switch} from "../functions/help.js"
import { ShowSidebar } from "../functions/side_bar.js";
import { update_input_text, focus_on_next_input,recommend_input_options } from "../functions/input_focuser.js";
import {data,curr_data} from "../data_holders/first_phase_2019.js";

window.ShowSidebar=ShowSidebar;
window.initialize_all_event_listeners=initialize_all_event_listeners;
window.help=help;
window.sortion=sortion;
initialize_all_event_listeners();

export function sortion(){
     document.getElementById("tablebody").textContent="";
     // setTimeout(function(){console.log("Displaying");},392000);

     let ranks = {"OC BOYS": 9, "OC GIRLS": 10, "BC-A BOYS": 11, "BC-A GIRLS": 12, "BC-B BOYS": 13, "BC-B GIRLS": 14, "BC-C BOYS": 15, "BC-C GIRLS": 16, "BC-D BOYS": 17, "BC-D GIRLS": 18, "BC-E BOYS": 19, "BC-E GIRLS": 20, "SC BOYS": 21, "SC GIRLS": 22, "ST BOYS": 23, "ST GIRLS": 24}
     let real=[0,1,2,3,4,5,7,8,0,0,26,25];
     var key=-1;
     let dummy = ['OC BOYS', 'OC GIRLS', 'BC-A BOYS', 'BC-A GIRLS', 'BC-B BOYS', 'BC-B GIRLS', 'BC-C BOYS', 'BC-C GIRLS', 'BC-D BOYS', 'BC-D GIRLS', 'BC-E BOYS', 'BC-E GIRLS', 'SC BOYS', 'SC GIRLS', 'ST BOYS', 'ST GIRLS'];
     if (document.getElementById("boys").checked && document.getElementById("caste").value.split(",")[0] != ""){

          let caste = document.getElementById("caste");
         key = caste.value.toUpperCase() + " BOYS";
         real[9]=ranks[key];
     //     console.log(key)

     }
     else if(document.getElementById("girls").checked && document.getElementById("caste").value.split(",")[0]!=""){

          let caste=document.getElementById("caste")
          key = caste.value.toUpperCase() + " GIRLS";
          real[9] = ranks[key];
     }
     else{
          alert("Fill the cast field and opt your gender");
     }
     if(dummy.includes(key)==false && key!=-1){
          key=-1;
          alert("Enter correct formatted caste such as bc-d (or) oc (or) sc");
     }
     // console.log(document.getElementById("caste").value.split(",").length)
     var branchcodes=document.getElementById("course").value.toUpperCase().split(",")
     var distcodes = document.getElementById("place").value.toUpperCase().split(",")
     var instcodes = document.getElementById("collegeid").value.toUpperCase().split(",")
     var affiliation = document.getElementById("affiliation").value.toUpperCase().split(",")
     var college_type = document.getElementById("college_type").value.toUpperCase().split(",")
     var coed_girls= document.getElementById("coed_girls").value.toUpperCase()
     var lowest_cutoff = document.getElementById("lowest_cutoff").value;
     var highest_cutoff = document.getElementById("highest_cutoff").value;
     if(coed_girls==""){
          coed_girls=curr_data["specificities"];
     }
     if (lowest_cutoff == "") {
          lowest_cutoff = 0;
     }
     else {
          lowest_cutoff = Number(lowest_cutoff);
     }
     if (highest_cutoff == "") {
          highest_cutoff = 100000000;
     }
     else {
          highest_cutoff = Number(highest_cutoff);
     }
      if(affiliation[0]==""){
          affiliation=curr_data["affiliations"];
     }
     if(college_type[0]==""){
          college_type=curr_data["college_types"];
     }
     // console.log(Number(lowest_cutoff),Number(highest_cutoff))

     if(branchcodes[0]==""){
          branchcodes=curr_data["branchcodes"];
     }
     if(distcodes[0]==""){
          distcodes =curr_data["distcodes"];
     }
     if(instcodes[0]==""){
          instcodes=curr_data["instcodes"];
     }

     if(key!=-1){
          function Magic(a,b){
               let ranks = { "OC BOYS": 9, "OC GIRLS": 10, "BC-A BOYS": 11, "BC-A GIRLS": 12, "BC-B BOYS": 13, "BC-B GIRLS": 14, "BC-C BOYS": 15, "BC-C GIRLS": 16, "BC-D BOYS": 17, "BC-D GIRLS": 18, "BC-E BOYS": 19, "BC-E GIRLS": 20, "SC BOYS": 21, "SC GIRLS": 22, "ST BOYS": 23, "ST GIRLS": 24 }
               let caste = document.getElementById("caste");
               key = caste.value.toUpperCase() + " GIRLS";
               // console.log(a[ranks[key]], b[ranks[key]], Number(Number(a[ranks[key]] - Number(b[ranks[key]]))))
               return (Number(Number(a[ranks[key]]) - Number(b[ranks[key]])));
          }
          function Magic_1(a, b) {
               let ranks = { "OC BOYS": 9, "OC GIRLS": 10, "BC-A BOYS": 11, "BC-A GIRLS": 12, "BC-B BOYS": 13, "BC-B GIRLS": 14, "BC-C BOYS": 15, "BC-C GIRLS": 16, "BC-D BOYS": 17, "BC-D GIRLS": 18, "BC-E BOYS": 19, "BC-E GIRLS": 20, "SC BOYS": 21, "SC GIRLS": 22, "ST BOYS": 23, "ST GIRLS": 24 }
               let caste = document.getElementById("caste")
               key = caste.value.toUpperCase() + " BOYS";
               return (Number(Number(a[ranks[key]]) - Number(b[ranks[key]])));
          }
          if(key.split(" ")[1]=="GIRLS"){
          data.sort(Magic);
          // console.log(key.split(" "));
     }
          else{
               data.sort(Magic_1);
          }
          let i=0,j=0;
     var key_1=-1;
     console.log(key)
     for(i=0;i<791;i++){
          //  console.log(data[i],ranks[key])
          if ((data[i][ranks[key]] != -1 && data[i][ranks[key]] != "NA") && (affiliation.includes(data[i][26])) && (college_type.includes(data[i][5])) && (branchcodes.includes(data[i][7]) && distcodes.includes(data[i][3])) && (instcodes.includes(data[i][0])) && (Number(data[i][real[9]]) <= Number(highest_cutoff) && Number(data[i][real[9]]) >= Number(lowest_cutoff)) && (coed_girls.includes(data[i][4]))){
                    // console.log(data[i][real[9]])
                    let table_row=document.createElement("tr");
                    document.getElementById("tablebody").appendChild(table_row);

                    for(j=0;j<12;j++){
                         let table_data=document.createElement("td");
                              if(j!=8){
                              table_data.textContent=data[i][real[j]];
                         }
                         else{
                              table_data.textContent=caste.value.toUpperCase();
                         }
                              table_row.appendChild(table_data);

                         }
                         key_1=0;
                         // console.log(data[i][real[9]])
                    
                    }
          }
    }
    if(key_1==-1){
         alert("No data found according to your formatted input ");
    }
}

document.querySelectorAll('input[type="text"]').forEach((item) => {
  item.addEventListener(
    "keyup",
    function (event) {
      if (event.key != "ArrowUp" && event.key != "ArrowDown") {
        focussed_element.value = 0;
        previous_switch.value = "none";
        let data = [];
        let id = this.id;
        if (id == "collegeid") {
          data = curr_data["instcodes"];
        } else if (id == "place") {
          data = curr_data["distcodes"];
        } else if (id == "course") {
          data = curr_data["branchcodes"];
        } else if (id == "caste") {
          data = curr_data["castes"];
        } else if (id == "coed_girls") {
          data = curr_data["specificities"];
        } else if (id == "affiliation") {
          data = curr_data["affiliations"];
        } else if (id == "college_type") {
          data = curr_data["college_types"];
        }

        try {
          let child = this.parentElement.querySelector(".input_options");
          this.parentElement.removeChild(child);
        } catch (err) {
          console.log("No Child having class input_option");
        }
        let input_value = this.value.toUpperCase();
        if (input_value != "") {
             let current=this;
             recommend_input_options(current,data,input_value);
        }
      }
    },
    false
  );
  item.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      console.log("enter pressed");
      let colored_option = document.querySelector(".color_up");
      if (colored_option != null) {
        update_input_text(event, colored_option);
      }
      focus_on_next_input(this.tabIndex);
    }
  });
});