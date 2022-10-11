import React from 'react';
import MainHeader from './MainHeader';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import ToDoItems from './NewToDoItem';
import ToDoOptions from './ToDoOptions';
import { Card } from '@partnerhero/phds.ui.card';
import { FontAwesomeSizeEnum, Icon } from '@partnerhero/phds.ui.icons.icon';
import { Grid } from '@partnerhero/phds.ui.layouts.grid'
import './Statistics.css';

const Statistics: React.FC=()=>{
    return(

        <React.Fragment>
          <MainHeader />
          <Container
          backgroundColor='white'
          style={{ maxWidth:'712px', height: '72px', margin:'auto', marginTop: '25px', paddingTop:'0px', paddingBottom: '0px', backgroundColor:'#ffd78f', borderRadius:'3px', justifyContent:'space-between'}}
          >

                        <Card
                            backgroundColor= "transparent"
                            minWidth='632px'
                            title="Introducing Statistics!"
                            text="Here is the new statistics page, in might be the light now, but it will grow."
                            left={<Icon icon="faBullhorn" />}
                            right={<Icon icon="faTimes" />}
                            
                        />
                </Container>

            <Container
            style={{ maxWidth:'712px', height: '114px', margin:'auto', marginTop: '25px', paddingTop:'0px', paddingBottom: '0px', borderRadius:'3px', justifyContent:'space-between'}}
            >    
              <Grid item xs={5} >
                <Container
                addFullWidth
                addShadow
                withBorders
                >
                        <Card
                            backgroundColor= "transparent"
                            minWidth='632px'
                            title="Introducing Statistics!"
                            text="12."
                            left={<Icon icon="faBullhorn" /> }
                            right={<Icon icon="faTimes" />}
                            
                            
                        />
                 </Container>
              </Grid>

              <Grid item xs={5}>
                  <div style={{ height: '114px', width:'335px', border: '1px solid grey' }}>xs=5</div>
              </Grid>
            </Container>

               

          
        </React.Fragment>
         
     

        
    )
}




export default Statistics;