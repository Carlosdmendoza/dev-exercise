import react from 'react-dom'
import { TabBar } from '@partnerhero/phds.ui.navigation.tab_bar';
import { Tab } from '@partnerhero/phds.ui.navigation.tab';
import { Alignment, Direction } from '@partnerhero/phds.utilities.enums';
import { Container } from "@partnerhero/phds.layouts.container";


const action = () => {
    return console.log("Clicked!");
  };
  
  export const ToDoOptions: React.FC = () => {
    return (

        <Container style={{width:'500px', margin:'auto', justifyContent: 'space-evenly' , paddingTop: '0px'}}
        addFullWidth
        >
      
        <TabBar selectedIndex={0} tabAlignment= {Alignment.center}  >
          <Tab title={"Current Items"} tabIndex={0} onClick={action} />
          <Tab title={"Completed Items"} tabIndex={1} onClick={action} />
          <Tab title={"Deleted Items"} tabIndex={2} onClick={action} />
        </TabBar>
        </Container>

    );
  };

  export default ToDoOptions