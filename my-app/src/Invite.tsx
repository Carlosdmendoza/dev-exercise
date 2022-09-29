import React from 'react';
import MainHeader from './MainHeader';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import ToDoItems from './NewToDoItem';
import ToDoOptions from './ToDoOptions';


const Invite: React.FC=()=>{
    return(

        <React.Fragment>
          <MainHeader />
            <Container
            addFullWidth
             addShadow
             >
                 The Invite Friends page will be displayed here
             </Container>

        </React.Fragment>
         
     

        
    )
}

export default Invite