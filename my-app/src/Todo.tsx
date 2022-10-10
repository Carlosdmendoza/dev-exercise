import React from 'react';
import MainHeader from './MainHeader';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import ToDoItems from './NewToDoItem';
import ToDoOptions from './ToDoOptions';
import './Todo.css';


const Todo: React.FC=()=>{
    return(

        <React.Fragment>
          <MainHeader />
          <ToDoItems />
          <ToDoOptions />
        </React.Fragment>
         
     

        
    )
}




export default Todo;