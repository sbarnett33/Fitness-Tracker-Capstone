import React from 'react';
import { useNavigate } from "react-router-dom";


function Footer() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/favorites`; 
    navigate(path);
  }
  
  return (
     <div className="save-work">
      <Container>       
          <Button 
          color="primary" 
          className="px-4"
          onClick={routeChange}>
              Go To Your Workout!
            </Button>
       </Container>
    </div>
  );
}

export default Footer;