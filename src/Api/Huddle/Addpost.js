import axios from "axios";


export const Huddlepost=(data)=>{
    const { POST,
    filehuddle,
    VIDEO}=data
    console.log(filehuddle);
    console.log(VIDEO);
    var formdata = new FormData();
formdata.append("textbox", POST,);
formdata.append("file", filehuddle,filehuddle.name);
formdata.append("record", VIDEO,VIDEO.name);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://studiomyraa.com/assoc/api/add_huddle", requestOptions)
  .then(response => response.text())
  .then(result => {return result })
  .catch(error => console.log('error', error));
}
export const gethuddle=()=>{
   return  axios.get('https://assoc.studiomyraa.com/api/huddle').then((data)=>{
   
    console.log(data.data.results.data);
       return data.data.results.data
    })
}