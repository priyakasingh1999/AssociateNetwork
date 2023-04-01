import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import CancelIcon from "@mui/icons-material/Cancel";
import { createGlobalStyle } from "styled-components";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from 'prop-types';
import Menucollased from "./Menucollased";
import { ToggleButton } from "react-bootstrap";


const Style = createGlobalStyle`
.iconlist,.close{
    visibility:hidden;
    
}
.css-zsg7nt-MuiStack-root>:not(style)+:not(style){
  margin:0px;
}
.boxes:hover{
    border:4px solid #ffad00;
    background-image: url(./img/firstreply.jpg);
    padding:10px 0px;
}
.boxes:hover .iconlist{
    visibility:visible;
    
}
.boxes:hover .close{
    visibility:visible;
}
.boxes:hover .name{
    display:none;
}
li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root{
  display:none;
}
.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
  padding:0px;
}
`;


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}


Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};


const AllAssociates = () => {
  const [age, setAge] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const handleChangemenu = () => {
    setChecked((prev) => !prev);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Style />
      <Container maxWidth="lg">
        <Box sx={{ padding: "15px" }}>
          <Box sx={{ backgroundColor: "#fff",position:"relative"}}>
            <Box
              sx={{
                backgroundColor: "#1688ca",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "unset",
                flexWrap: "wrap",
                padding: "6px 10px",
              }}
            >
              <Box>
               <MenuIcon  onClick={()=>{
                setChecked((value)=>{
                  return !value
                })
               }}/>
             
              </Box>

              <Box sx={{ fontSize: "18px" }}>My Associates</Box>

              <Box>
                <AddAPhotoIcon />
                <ExpandMoreIcon />
              </Box>

              
            </Box>

            
          
          {    <Menucollased checked={checked}setChecked={setChecked}/>}
          
            

            <Stack
              direction="row"
              sx={{
                display: "grid",
                columnGap: 1,
                rowGap: 1,
                gridTemplateColumns: "repeat(5, 1fr)",
                padding:"10px"
              }}
            >
              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/john.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/2.png"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                     
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/3.png"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/4.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/5.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/4.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/4.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/2.png"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/5.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                      bottom:"0px",
                      left:"0px",
                      right:"0px"
                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/john.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                    bottom:"0px",
                    left:"0px",
                    right:"0px"

                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
                
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/john.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                    bottom:"0px",
                    left:"0px",
                    right:"0px"

                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
                
              </Item>

              <Item
                className="boxes"
                sx={{
                  border: "none",
                  marginBottom: "5px",
                  position: "relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/john.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                      position:"absolute",
                    bottom:"0px",
                    left:"0px",
                    right:"0px"

                    }}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                    <Avatar
                      sx={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "transparent",
                        border: "2px solid #fff",
                      }}
                    >
                      <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                    </Avatar>
                  </Stack>
                </Box>
                
              </Item>
              
            </Stack>
            <Box>
                  <Stack direction="row" spacing={0} sx={{justifyContent:"end", padding:"10px"}}>
                  <Box sx={{boxShadow:"1px 1px 4px rgba(0,0,0,0.2),-1px -1px 4px rgba(0,0,0,0.2)",padding:"10px",display:"flex"}}>
                  <ToggleButton value="web">First</ToggleButton>
                    <Pagination count={3} color="primary" sx={{margin:"0px"}}/>
                    <ToggleButton value="web">Last</ToggleButton>
                  </Box>
                  </Stack>
                </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AllAssociates;
