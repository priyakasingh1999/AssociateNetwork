import axios from "axios"

export const  RecentSes=()=>{
  setTimeout(()=>{
    window.location.href="http://localhost:3000/login"
  }, 15000);
  return  axios.get('https://studiomyraa.com/assoc/api/get_session').then((result)=>{
    
  return result.data.results

  })
}

