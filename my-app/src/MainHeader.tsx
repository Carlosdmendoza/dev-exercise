import React from 'react';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import { Label } from '@partnerhero/phds.ui.buttons.label';
import {MenuItem} from '@partnerhero/phds.ui.menu.menu_item';
import { FontAwesomeSizeEnum, Icon } from '@partnerhero/phds.ui.icons.icon';


const MainHeader: React.FC=()=>{
    return(

  //Start of the header container
  
        <div>
          <MenuItem
             label="Menu Item"
             onClick={() => {}}
             iconProps={{ icon: 'faTwitter' }}
            />
        </div>
  
    
  //End MainHEader
    )
}

export default MainHeader;