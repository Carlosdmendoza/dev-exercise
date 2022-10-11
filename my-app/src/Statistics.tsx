import React from 'react';
import MainHeader from './MainHeader';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import ToDoItems from './NewToDoItem';
import ToDoOptions from './ToDoOptions';
import { Card } from '@partnerhero/phds.ui.card';
import { FontAwesomeSizeEnum, Icon } from '@partnerhero/phds.ui.icons.icon';
import { Grid } from '@partnerhero/phds.ui.layouts.grid';
import './Statistics.css'
import { CommentCard } from '@partnerhero/phds.ui.comment_card';
 
const Statistics: React.FC=()=>{
    return(

        <React.Fragment>
          <MainHeader />
          <Container
              backgroundColor='white'
              style={{ 
              maxWidth:'604px', 
              height: '72px', 
              margin:'auto', 
              marginTop: '25px', 
              paddingTop:'0px', 
              paddingBottom: '0px', 
              backgroundColor:'#ffd78f', 
              borderRadius:'3px', 
              justifyContent:'space-between'}}
              >

                        <Card
                            backgroundColor= "transparent"
                            minWidth='604px'
                            title="Introducing Statistics!"
                            text="Here is the new statistics page, in might be the light now, but it will grow."
                            left={<Icon icon="faBullhorn" />}
                            right={<Icon icon="faTimes" />}
                            
                        />
                </Container>

                      <Container
                        
                        style={{ 
                          maxWidth:'604px', 
                          height: '114px', 
                          margin:'auto', 
                          marginTop: '25px', 
                          paddingTop:'0px', 
                          paddingBottom: '0px', 
                          backgroundColor:'#ffd78f', 
                          borderRadius:'3px', 
                          justifyContent:'space-between'}}
                        >
                    
                    <CommentCard
                        avatarProps={{ username: '' }}
                        userName="Tasks"
                        dateString=""
                        comment="12"
                        labelProps={{ text: '2%' }}
                    />
                </Container>

                


         

          
        </React.Fragment>
         
     

        
    )
}




export default Statistics;