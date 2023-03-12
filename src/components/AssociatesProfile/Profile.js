import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Progress from "./CIrcleProgressBar";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsVoiceOutlinedIcon from '@mui/icons-material/SettingsVoiceOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const Profile = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
      <Grid
        container
        spacing={0}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={10}>
          <Item sx={{ backgroundColor: "#1688ca", color: "#fff",display: "flex",
  justifyContent: "space-between",
  alignItems: "center",borderRadius: 'unset' }}>
            <Box>
              <MenuIcon />
            </Box>
            <Box sx={{ fontSize: "20px", color: "#fff" }}>
              Associates Profile
            </Box>
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{
                  backgroundColor: "#fff",
                  fontSize: "12px",
                  width: "22px",
                  height: "22px",
                  color: "black",
                }}
              >
                AA
              </Avatar>
              <Avatar
                sx={{
                  backgroundColor: "#fff",
                  fontSize: "12px",
                  width: "22px",
                  height: "22px",
                  color: "black",
                }}
              >
                SP
              </Avatar>
            </Stack>
          </Item>
          <Box sx={{ flexGrow: 1, display:'flex'}}>
          <Grid item xs={8} sx={{ borderRadius: 'unset'}}>
            <Item sx={{backgroundImage:'url(./img/profile-img.jpg)',backgroundBlendMode:'overlay', backgroundColor:'rgba(0,0,0,.5)', backgroundSize:'cover',color:'#fff',borderRadius: 'unset'}}   >
                <Box sx={{display:'flex',justifyContent:'space-between',paddingTop:'10px'}}   >
                <Box>
                <Typography sx={{fontSize:"12px"}}>puja patel</Typography>
                <Typography sx={{fontSize:"14px"}}>IT Technician</Typography>
                <Typography sx={{fontSize:"14px"}}>mpujapatel@gmail.com</Typography>
                <Typography sx={{fontSize:"14px"}}>Department Name</Typography>
                <Typography sx={{fontSize:"14px"}}>Street Address*</Typography>
                <Typography sx={{fontSize:"12px"}}>City*</Typography>
                <Typography sx={{fontSize:"12px"}}>State*</Typography>
                <Typography sx={{fontSize:"12px"}}>787878</Typography>
                <Typography sx={{fontSize:"12px"}}>6786875756756</Typography>
                <Typography sx={{fontSize:"12px"}}>Company Name</Typography>
                </Box>
                <Box>
                    <Box sx={{display:'flex', justifyContent:'center',gap:'50px'}}>
                  <Box> <Progress data={1}/><Typography sx={{fontSize:"12px"}}>Tenure</Typography></Box>
                  <Box> <Progress data={1}/><Typography sx={{fontSize:"12px"}}>Training</Typography></Box>
                  <Box> <Progress data={6}/><Typography sx={{fontSize:"12px"}}>Experience</Typography></Box>
                </Box>
                <Box sx={{textAlign:'center',marginTop:'15px',marginBottom:'15px'}}>
                    <Typography>Accomplishments</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center',gap:'10px'}}>
                  <Stack direction="row" spacing={2}>
                    <Avatar variant="rounded" src="./img/john.jpg" />
                    <Avatar variant="rounded" src="./img/john.jpg" />
                  </Stack>
                </Box>
                </Box>
                </Box>
                <Stack sx={{paddingTop:'10px',paddingBottom:'10px'}}>
                    <Avatar variant="rounded" src="./img/invite.png"/>
                </Stack>
                <Stack sx={{textAlign:'center'}}>
                    <Typography>Recognize Your Associate <ExpandCircleDownIcon/></Typography>
                </Stack>
                <Stack direction="row">
                <Grid xs={2}>
                <ImageList sx={{ width: 100}} cols={1} rowHeight={100}>
      
        <ImageListItem>
          <img
            src="./img/puja1.png"
            loading="Puja"
          />
        </ImageListItem>
    </ImageList>
                </Grid>
                <Grid xs={10}>
                    <Item sx={{backgroundColor:'transparent',boxShadow:'none',color:'#fff'}}>Puja, you were amazing in getting all our IT equipment back up after the power outage today. That was so helpful. Thanks again Pat Link, Mar 19, 2019</Item>
                </Grid>
                </Stack>
            </Item>
          </Grid>


          <Grid item xs={4}>
            <Item sx={{borderRadius: 'unset', backgroundColor:'Black'}}>
                <Box>
                <Typography sx={{textAlign:'center', color:'#fff'}}>Contact Associate</Typography>
                <Stack direction="row" sx={{justifyContent:'center',paddingTop:'2px',paddingBottom:'2px',backgroundColor:'grey',marginTop:'10px'}} spacing={2}>
                    <Avatar sx={{width:'25px',height:'25px', backgroundColor:'transparent', border:'2px solid #fff'}}>
                <EmailIcon sx={{fontSize:'15px'}}/>
                    </Avatar>
                    <Avatar sx={{width:'25px',height:'25px', backgroundColor:'transparent', border:'2px solid #fff'}}>
                <EmailOutlinedIcon sx={{fontSize:'15px'}}/>
                    </Avatar>
                    <Avatar sx={{width:'25px',height:'25px', backgroundColor:'transparent', border:'2px solid #fff'}}>
                <AddIcCallOutlinedIcon sx={{fontSize:'15px'}}/>
                    </Avatar>
                    <Avatar sx={{width:'25px',height:'25px', backgroundColor:'transparent', border:'2px solid #fff'}}>
                <ForumOutlinedIcon sx={{fontSize:'15px'}}/>
                    </Avatar>
                    <Avatar sx={{width:'25px',height:'25px', backgroundColor:'transparent', border:'2px solid #fff'}}>
                <SettingsVoiceOutlinedIcon sx={{fontSize:'15px'}}/>
                    </Avatar>
                    <Avatar sx={{width:'25px',height:'25px', backgroundColor:'transparent', border:'2px solid #fff'}}>
                <AlternateEmailOutlinedIcon sx={{fontSize:'15px'}}/>
                    </Avatar>
                </Stack>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'10px',paddingBottom:'0'}}>
                    <Box> <Avatar
                sx={{
                  backgroundColor: "#fff",
                  fontSize: "12px",
                  width: "22px",
                  height: "22px",
                  color: "black",
                }}
              >
                PA
              </Avatar></Box>
                <Typography sx={{color:'#fff'}}>Member of these Stations </Typography>
                <Box>
                <ExpandCircleDownIcon sx={{color:'#fff'}}/>
                </Box>

                </Box>
            </Item>
            <Box sx={{backgroundColor:'#fff',padding:'5px', marginTop:'2px'}}>
            <ImageList sx={{ width:'100%'}} cols={2} rowHeight={137}>
      
      <ImageListItem >
        <img
          src="./img/stations8.png"
          loading="Puja"
          sx={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </ImageListItem>
      <ImageListItem >
        <img
          src="./img/stations3.jpg"
          loading="Puja"
          sx={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </ImageListItem>
      <ImageListItem >
        <img
          src="./img/stations3.jpg"
          loading="Puja"
          sx={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </ImageListItem>
      <ImageListItem >
        <img
          src="./img/stations3.jpg"
          loading="Puja"
          sx={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </ImageListItem>
  </ImageList>
            </Box>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>




<Box sx={{ flexGrow: 1, marginTop: "5px" }}>
<Grid
  container
  spacing={0}
  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <Grid item xs={10}>
   
    
      <Item sx={{backgroundImage:'url(./img/binary-3441007_640.jpg)',backgroundBlendMode:'overlay', backgroundColor:'rgba(0,0,0,.5)', backgroundSize:'cover',backgroundRepeat:'no-repeat',color:'#fff',borderRadius: 'unset'}}   >
         <Box sx={{paddingBottom:'50px'}}>
         <Typography sx={{fontWeight:'bold'}}>puja's Bio</Typography>
          <Typography>10 years experience in IT projects and program implementation in healthcare, Worked on all types of IT projects and programs initiatives. Work with leadership on program implementation. Experienced on complex IT projects in numerous hospitals.</Typography>
         </Box>
         <Box sx={{paddingBottom:'50px'}}>
         <Typography sx={{fontWeight:'bold'}}>Skills</Typography>
          <Typography>IT skilled in project management for hospitals throughout the west coast</Typography>
         </Box>
         <Box sx={{paddingBottom:'50px'}}>
         <Typography sx={{fontWeight:'bold'}}>Projects</Typography>
          <Typography>Smart room technology and electronic health records</Typography>
         </Box>
         <Box sx={{paddingBottom:'50px'}}>
         <Typography>Video Link http://www.youtube.com</Typography>
         </Box>
         <Box sx={{}}>
         <Typography>Link http://wwww/ashe.com</Typography>
         </Box>
 
      </Item>
  </Grid>
</Grid>
</Box>
</>
  );
};

export default Profile;
