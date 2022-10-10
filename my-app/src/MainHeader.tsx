import React from 'react';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import {MenuItem} from '@partnerhero/phds.ui.menu.menu_item';
import { FontAwesomeSizeEnum, Icon } from '@partnerhero/phds.ui.icons.icon';
import { Avatar } from '@partnerhero/phds.ui.avatar';
import { Size } from '@partnerhero/phds.utilities.enums';



const avatarURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2QL4r_lVl4Jc3jNSPwDbUU85KNAWJurhedZhvW6j0zN47wkbu9lqTm9DX96WMJpOcps&usqp=CAU';
    
const MainHeader: React.FC=()=>{
    return(

  //Start of the header container
      

       
        <Container   
        style={{ top:'0px',  backgroundColor: 'white!important' , zIndex:'999', position: 'static'}}
        backgroundColor='white'
        addShadow
        addFullWidth
        height='75px'
       
        >

          <Container 
          style={{width:"80%"  , height: "74px", position:"static", top:"25px", backgroundColor: 'transparent'}}
                    >

            <MenuItem style={{marginLeft:"62px"}}
             className = "MenuItem1" 
             label="Todo Items"
             onClick={() => window.open("/Todo" , "_Current")}
             iconProps={{ icon: 'faClipboardListCheck' }}
            />

           <MenuItem className = "MenuItem2"
             label="Statistics"
             onClick={() => window.open("/Statistics" , "_Current")}
             iconProps={{ icon: 'faChartLine' }}
           
            />

           <MenuItem 
             className = "MenuItem3" 
             label="Invite Friends"
             onClick={() => window.open("/Invite" , "_Current")}
             iconProps={{ icon: 'faEnvelopesBulk'}}
            />

            </Container>

         
   
        
        <Container
        //start secondary container
        style={{  width:"20%" , height: "auto", position: "static",  top: "25px", right: "0px", background: "transparent" , justifyContent: "space-evenly"}}
        
        >
          
         <Avatar
            username="First Name"
            size={Size.extraSmall}
            src={avatarURL}
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