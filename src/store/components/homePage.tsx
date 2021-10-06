import React, {useState} from "react"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@material-ui/icons//MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { useTypeSelector } from "../reducers/combineReducer";
import axios from "axios"
import {useDispatch} from "react-redux";
import { caseTypes } from "../reducers/caseReducer";
import { autorActionTypes } from '../reducers/autorReducer';



const HomePage = () => {

  const [open, setOpen] = useState(false);  
  const handleClick = () => {
    setOpen(!open);}
  
    const dispatch = useDispatch();
    const state = useTypeSelector(state => state.autor);

  const exit = () =>{
   localStorage.removeItem("isLogined");
    dispatch({type: autorActionTypes.FETCH_AUTOR})
  }

    const data = axios.get("http://localhost:3000/topic/getTopicChilds", { params: { id: topicId } })
  .then(function (data) {
     console.log(data)
       dispatch({type: caseTypes.VISIBLE_ALL_CASE, payload: data})
    }
  )
  .catch((e) => {
    dispatch({type: caseTypes.CASE_ERROR, payload: "Произошла ошибка"})
  });

    return (
<div>
      <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} 
        onClick = {()=> exit()}
        > 
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          TestPages
        </Typography>
      </Toolbar>
     
    </AppBar>
 
  
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Nested List Items
      </ListSubheader>
    }
  >
 
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Starred" />          
        </ListItemButton>
      </List>
      
    </Collapse>
    
  </List>



</div>
    );
  
}
export default HomePage;
