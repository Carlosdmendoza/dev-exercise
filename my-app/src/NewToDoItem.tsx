import React from 'react';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import { Typography } from '@partnerhero/phds.utilities.typography';
import { TypographyOptions } from '@partnerhero/phds.utilities.typography';
import { Button } from '@partnerhero/phds.ui.buttons.button';
import { Size } from '@partnerhero/phds.utilities.enums';
import { Input } from '@partnerhero/phds.form_elements.input';
import { Selection } from '@partnerhero/phds.ui.form_elements.selection';

const ToDoItems: React.FC=()=>{
    return(
        <Container
        addFullWidth
        height='auto'
        
        >

            <Container  style={{display:'inline-block', paddingBottom:'0px', width: '500px'}}
                margin='auto'
            >
              
                    <div style={{ width: '440px' }}>
                        <Input style={{fontFamily:'Inter', fontWeight:'sei-bold'}}
                            label="New Todo Item"
                            placeholder="Take out the trash..."
                            fullWidth
                            required
                            margin="5px 5px 0px 0px"      
                            type="text"
                        />
                    </div>

                     <Button 
                            style = {{margin: '20px 20px 20px 20px', background: '#186bed' , height: '46px', width: '440px', font:'14px'}}
                            onClick={() => window.open("/Todo")}
                            size="small"
                            fullWidth
                            borderRadius = '0px'              
                        >
                            Add Todo Item            
                      </Button>

                
            </Container>
    

        </Container>
    )



}

export default ToDoItems;