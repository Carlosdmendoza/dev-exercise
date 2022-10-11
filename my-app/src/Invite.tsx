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
import { Card } from '@partnerhero/phds.ui.card';
import { Avatar } from '@partnerhero/phds.ui.avatar';
import './Invite.css';

const avatarURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2QL4r_lVl4Jc3jNSPwDbUU85KNAWJurhedZhvW6j0zN47wkbu9lqTm9DX96WMJpOcps&usqp=CAU';

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
                 style={{display:'inline-block', paddingBottom:'0px', width:'672px', paddingLeft: '0px'}}
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
                     style={{ width: '692px', verticalAlign:'middle', paddingLeft:'0px'}}

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
                    style={{width:'88px', height: '44px', marginTop: '20px', background: 'rgb(24 107 237)'}}

                    >
                        Invite 
                    </Button>
                    
     {/*End Email Field****************************************************************/}
                        
                    </Container>

                    <Container
                      style={{display:'inline-block', paddingTop:'0px',paddingBottom:'0px', width:'672px', marginTop:'25px', paddingLeft:'0px'}}
                
                    backgroundColor='white'
                    >

                        <Typography
                        style={{marginTop: '25px'}}
                        align= 'center'
                        variant='boldLarge'
                        >
                            Invites Sent

                        </Typography>
                        
                        <Container
                        addShadow
                        style={{width:'672px', height: '52px'}}
                        >
                        <Card
                            minWidth='652px'
                            title="andrew.love@partnerhero.com"
                            left={<Icon icon="faPaperPlane" />}
                            right={<Icon icon="faEllipsis" />}
                            
                        />
                        </Container>
                        
                        <Typography
                        style={{marginTop: '25px'}}
                        align= 'center'
                        variant='boldLarge'
                        >
                            Signups

                        </Typography>
                        <Container
                        addShadow
                        style={{width:'672px', height: '52px', marginTop:'15px'}}
                        >
                        <Card

                            minWidth='640px'
                            type="list"
                            title="Paul Mackenzie"
                            text="paul.mackenzie@partnerhero.com"
                            left={
                                <div>
                                    <Avatar
                                        username="Example"
                                        src={avatarURL}
                                        borderColor="successLightest"
                                        margin="0"
                                    />
                                </div>
                            }
                            right={<Icon margin="0" icon="faEnvelope" />}
                        />
                        </Container>


                        <Container
                        addShadow
                        style={{width:'672px', height: '52px', marginTop:'15px'}}
                        >
                        <Card

                            minWidth='640px'
                            type="list"
                            title="Lauren Frost"
                            text="lauren.frost@partnerhero.com"
                            left={
                                <div>
                                    <Avatar
                                        username="Example"
                                        src={avatarURL}
                                        borderColor="successLightest"
                                        margin="0"
                                    />
                                </div>
                            }
                            right={<Icon margin="0" icon="faEnvelope" />}
                        />
                        </Container>

                    </Container>
                 </Container>

                 



             </Container>
            

        </React.Fragment>
         
     

        
    )
}

export default Invite