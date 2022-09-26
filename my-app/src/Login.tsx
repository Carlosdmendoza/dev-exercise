import React from 'react';
import { Container } from '@partnerhero/phds.ui.layouts.container';
import { Typography } from '@partnerhero/phds.utilities.typography';
import { TypographyOptions } from '@partnerhero/phds.utilities.typography';
import { Button } from '@partnerhero/phds.ui.buttons.button';
import { Size } from '@partnerhero/phds.utilities.enums';
import { Input } from '@partnerhero/phds.form_elements.input';
import { Selection } from '@partnerhero/phds.ui.form_elements.selection';



const Login: React.FC=()=>{
   return(
<Container style={{ marginTop: '10vh' }}
    borderColor ="greyLighter"
    
     
    
  >
   <Container  style={{display:'inline-block', paddingBottom:'0px'}}
   margin='auto'
   >
    
      <div style={{ padding: '0px' , marginBottom: '0px'}}>
           <Typography color="black" variant="h2" align='center' >
             Design System Todo
           </Typography>

           <Typography style={{ marginBottom: '20px'}}
            color="black" variant="bodyLarge" align="center">
             A basic Todo application to show the power of design system
           </Typography>
      </div>
 <div>
       {/*Form elements****************************************************************/}
      <Container 
      style={{display:'inline-block' , backgroundColor: 'rgb(255, 255, 255)', width: '440px', margin:'auto' , height: '365px', paddingTop:'0px'}}
      addShadow
      margin='auto'
      borderColor ="greyDarker"
    
      >
        
 
    
   {/*Email Field****************************************************************/}
      <div style={{ width: '400px' }}>
    <Input
        label="Email"
        placeholder="you@awesome.com"
        fullWidth
        required
        margin="5px 5px 0px 0px"      
        type="email"
    />
     </div>
     {/*End Email Field****************************************************************/}

     {/*Password Field****************************************************************/}
     <div style={{ width: '400px' }}>
    <Input
        label="Password"
        placeholder = "***********"
        fullWidth
        required
        margin="0px 5px 0px 0px"      
        type="password"
    />
     </div>
     {/*End Password Field****************************************************************/}
    <div>
    <Selection 
     type= "checkbox"
     label="Remember Me" 
     size = '20px'
     activeColor='primary'
     margin= '20px 0px 0px 20px'
    
     />
    </div>
    
      {/*End Checkbox****************************************************************/}

      {/*Start Button****************************************************************/}
            <Button style = {{margin: '30px 20px 20px 20px', background: '#186bed' , height: '46px', width: '400px'}}
              onClick={() => window.open("/Todo")}
              size="small"
              fullWidth
              borderRadius = '0px'

             
              
             >
                Login            
           </Button>;

      {/*End Button****************************************************************/}

      </Container>
      {/*End Form elements****************************************************************/}
 </div>

     </Container>



  </Container>

  ) 
}

export default Login;