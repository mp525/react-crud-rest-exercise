import utils from "./utils";
let URL = "http://localhost:3456/api";
//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing



function apiFacade() {
  //OBSERVE fetchAny takes a url and a callback. The callback handles the data from the response body.
  function getPersons(callback) {
    // Change me to do something with data
    utils.fetchAny(URL,callback);
  }

  function addEditPerson(person, callback) {

    if(!person.id){
      utils.fetchAny(URL, callback, "POST", person);
    } else{
      const putURL = URL + "/" + person.id;
      utils.fetchAny(putURL, callback, "PUT", person);
    }
   //Complete me. A smart version will handle both Add and Edit, but focus on Add (POST) only first
  } 

  function deletePerson(id,callback) {
    const delURL = URL + "/" + id;
    utils.fetchAny(delURL, callback, "DELETE");
    
    //Complete me
  }
  
  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}
const returnValue = apiFacade();
export default returnValue;

