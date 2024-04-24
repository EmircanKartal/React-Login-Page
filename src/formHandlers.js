import { useState } from 'react';
import infosecImg from '../src/assets/meydan.png';
import edevletbutonImg from '../src/assets/edevletbuton.png';

// Define your state logic here
export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return {
      value,
      onChange: handleChange,
    };
  }
  
  export function handleSubmit(event, email, password) {
    event.preventDefault();
    console.log("Login girildi");
    
    
  }
  
export const styles = {
    cardStyle: {
        display: 'flex',
        maxWidth: '900px', 
        margin: 'auto', 
        marginTop: '50px', 
        flexDirection: 'row', 
        marginBottom: '50px', 
        borderRadius: '8px',
        zIndex: 7,
        overflow: 'hidden',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        height: 'auto', 
        '@media (maxwidth: 600px)': { 
          maxWidth: '100%', 
          marginTop: '20px',
          width: '100%', 
          height: 'auto',
        },
    },
    loginSectionStyle: {
        padding: '40px',
        display: 'flex',
        zIndex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '45%', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        fontFamily: "'Roboto', sans-serif",
    },
          
    infoSectionStyle: {
        flexBasis: '20%',
        backgroundImage: `url(${infosecImg})`,
        backgroundColor: 'rgba(50,180,40, 0.75)', 
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '70px',
        zIndex: 7,
        color: '#fff',
        flex: 5, 
        height: '600px',
        width:'100px',
        '@media (maxwidth: 800px)': { 
          maxWidth: '100%', 
          marginTop: '20px',
          width: '100%', 
          height: 'auto',
          padding: '20px', 
        },
    },
    loginingStyle:  {
        fontWeight: 'normal', 
        textAlign: 'center', 
        marginTop: '-2px', 
        marginBottom: '0px', 
    },

    formGroupStyle: {
        marginBottom: '15px',
    },
    
    buttonStyle: {
        width: '100%',
        background: '#009E49',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
        height:'44px',
        fontSize: '16px',
    },
    
    edevletButtonStyle: {
        maxWidth: '800px',
        height: '100px',
        width: '280px',
        padding: '20px 0',
        background: 'transparent',
        border: '5px',
        borderRadius: '12px',
        cursor: 'pointer',
        marginTop: '10px',
        marginLeft: '63px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${edevletbutonImg})`,
        backgroundSize: '92%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },
      
    linkStyle: {
        display: 'block',
        textAlign: 'center',
        marginTop: '20px',
        color: '#333',
        textDecoration: 'none'
    },
    
    checkboxLabelStyle: {
        order: 2,
        marginLeft: '10px',
        fontSize: '14px'
    },
    checkboxStyle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    
    forgotPasswordContainerStyle: {
        textAlign: 'right',
        marginTop: '10px',
    },
    forgotPasswordStyle: {
        order: 1,
        color: '#333',
        textDecoration: 'none',
        fontSize: '14px'
    },
    
    buttonVariants: {
        hover: {
          scale: 1.05,
          boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
        },
    },
};
  
  