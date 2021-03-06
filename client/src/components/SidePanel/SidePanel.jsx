import React from "react";
import {List} from "@material-ui/core";

import SidePanelItem from "./SidePanelItem";


const SidePanel = ({listItems,handleListItem}) => {

  return (
    
      <List>
        {listItems.map((item,index) => (
          <SidePanelItem item={item} key={index} handleListItem={handleListItem}/>
        ))}
      </List>
  );
};

export default SidePanel;
