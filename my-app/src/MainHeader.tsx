import React from 'react';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import {MenuItem} from '@partnerhero/phds.ui.menu.menu_item';
import { FontAwesomeSizeEnum, Icon } from '@partnerhero/phds.ui.icons.icon';
import { Avatar } from '@partnerhero/phds.ui.avatar';
import { Size } from '@partnerhero/phds.utilities.enums';

import './index.css';


const MainHeader: React.FC=()=>{
    return(

  //Start of the header container
      

       
        <Container   
        backgroundColor='white'
        addShadow
        addFullWidth
        height='75px'
       
        >

          <Container 
          style={{width:"80%"  , height: "74px", position:"fixed", top:"25px", backgroundColor: 'transparent'}}
                    >

            <MenuItem style={{marginLeft:"62px"}}
             className = "MenuItem" 
             label="Todo Items"
             onClick={() => {}}
             iconProps={{ icon: 'faClipboardListCheck' }}
            />

           <MenuItem className = "MenuItem"
             label="Statistics"
             onClick={() => {}}
             iconProps={{ icon: 'faChartLine' }}
           
            />

           <MenuItem 
             className = "MenuItem" 
             label="Invite Friends"
             onClick={() => {}}
             iconProps={{ icon: 'faEnvelopesBulk'}}
            />

            </Container>

         
   
        
        <Container
        //start secondary container
        style={{  width:"20%" , height: "auto", position: "fixed",  top: "25px", right: "0px", background: "transparent" , justifyContent: "space-evenly"}}
        
        >
          
         <Avatar
            username="First Name"
            
            size={Size.extraSmall}
            borderColor="primary"
            
          />
          

          <MenuItem 
    
             className = "SMenuItem" 
             label=""
             onClick={() => {}}
             iconProps={{ icon: 'faBell'}}
            />

            <MenuItem 
             className = "SMenuItem" 
             onClick={() => {}}
             iconProps={{ icon: 'faCog'}}
            
            //End of Secondary Container
             />
        </Container> 
 
        
  
   
    


          

         

          

       </Container>
  
    
  //End MainHEader
    )
}

export default MainHeader;