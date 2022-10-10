import React from 'react';
import MainHeader from './MainHeader';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import ToDoItems from './NewToDoItem';
import ToDoOptions from './ToDoOptions';
import { Typography } from '@partnerhero/phds.utilities.typography';
import { Input } from '@partnerhero/phds.form_elements.input';
import { Selection } from '@partnerhero/phds.ui.form_elements.selection';
import { FontAwesomeSizeEnum, Icon } from '@partnerhero/phds.ui.icons.icon';
import { Button } from '@partnerhero/phds.ui.buttons.button';



const Invite: React.FC=()=>{
    return(

        <React.Fragment>
          <MainHeader />
            <Container
            addFullWidth
             addShadow
             >
                 <Container
                 margin='auto'
                 style={{display:'inline-block', paddingBottom:'0px', width:'672px'}}
                 addFullWidth
                 
                 
                 >
                    <Typography 
                    variant='h3'
                    align='left'
                    > Invite your friends!
                    </Typography>

                    <Typography 
                    variant='bodyMedium'
                    > Todo is under beta, but you can invite your friends!
                    </Typography>

                    <Container
                     style={{ width: '672px', verticalAlign:'middle', paddingLeft:'0px'}}

                    addShadow
                    
                    >
               {/*Email Field****************************************************************/}
                
                <Input
                        style={{width: '524px!important', float: 'left'}}
                        placeholder="you@awesome.com"
                        required   
                        fullWidth
                        type="email"
                        prefixIcon = {<Icon icon={"faEnvelope"}/>}   
                                      
                />

                    <Button
                    style={{width:'88px', height: '44px', marginTop: '20px'}}
                    background= 'rgba(255, 255, 255, 0)'
                    >
                        Invite 
                    </Button>
                    
     {/*End Email Field****************************************************************/}
                        
                    </Container>

                    <Container
                      style={{display:'inline-block', paddingBottom:'0px', width:'652px', marginTop:'25px'}}
                    addShadow
                    backgroundColor='white'
                    >

                        <Typography
                        style={{marginTop:'25px'}}
                        align= 'center'
                        variant='boldLarge'
                        >
                            Invites Sent

                        </Typography>
                        
                    </Container>
                 </Container>

                 



             </Container>
            

        </React.Fragment>
         
     

        
    )
}

export default Invite