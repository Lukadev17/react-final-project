import React from 'react';


const errorStyle ={
    color:'red',
    fontsize: '48px'
}
export const Error = (props) =>{
    return (
    <div className="postContainer">
        <h1 style={errorStyle}>Sorry !</h1>
        <div style={errorStyle}>No anime Was Founded!</div>
    </div>
    )
}

export default Error;