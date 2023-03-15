import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import{createGlobalStyle} from 'styled-components'
import React from 'react'

const Iconstyle = createGlobalStyle`
.profile_icon{
    position: absolute !important;
    left: 1.6rem;
}
`;



const IconList = () => {
  return (
    <div>
        <List className='profile_icon' sx={{backgroundColor:'#fff',mt:1}}>
            <Iconstyle/>
            
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                    <img src='./img/associate_icon1.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon2.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon3.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon4.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon5.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon6.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon7.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon8.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon9.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon10.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon11.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon11.png'/>
                </ListItemButton>
            </ListItem>
        </List>
    </div>
  )
}

export default IconList