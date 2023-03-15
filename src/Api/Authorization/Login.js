import axios from "axios";

export const login =(username,password)=>{
   
    axios.post('https://assoc.studiomyraa.com/api/login_action',{email:username,password:password}).then((data)=>{
       console.log(data.data.user);
       console.log(data.data.token);
       console.log(typeof(data.data.token));
       console.log(data.data);
      if(data){
        alert("thanks for login")
      }
    }).catch((data)=>{
        alert("wronng credential")
    })
}
