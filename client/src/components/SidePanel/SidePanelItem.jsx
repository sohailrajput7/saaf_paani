import React, { useState } from "react";
import {
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  link:{
    color:'white',
    textDecoration:'none',
  },
  listIcon: {
    color: "#fff",
  },
  listItem: {
    color: "#000",
    textAlign: "left",
  },
  nestedList: {
    background: "#282b2f",
  },
  nestedListItem: {
    paddingLeft: "10px",
  },
  nestedListColor:{
    color:'#a5a8ad',
  }
}));

const SidePanelItem = ({ item,handleListItem }) => {
  const [isNestedListOpen, setNestedListOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setNestedListOpen(!isNestedListOpen);
    handleListItem(item);
    
  };

  return (
    <React.Fragment>
      <Link className={classes.link} to={item.path}>
        <ListItem button key={item.label} onClick={handleClick} >
          <ListItemIcon color="#fff" >
            {<item.IconComponent className={classes.listIcon} />}
          </ListItemIcon>
          <ListItemText >{item.label}</ListItemText>
          {item.subMenu ? (
            isNestedListOpen ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </ListItem>
      </Link>
      {item.subMenu && (
        <Collapse in={isNestedListOpen}>
          <List className={classes.nestedList}>
            {item.subMenu.map((sub,index) => {
              return (
                <Link key={index} className={classes.link} to={sub.path}>
                  
                  <ListItem button key={sub.lable} onClick={()=>handleListItem(sub)}>
                    <ListItemIcon className={classes.nestedListItem}>
                      {sub.IconComponent && (
                        <sub.IconComponent className={classes.listIcon} />
                      )}
                    </ListItemIcon>
                    <ListItemText className={classes.nestedListColor}>{sub.label}</ListItemText>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
};

export default SidePanelItem;
