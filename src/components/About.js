import React from 'react';

// functional component About that displays an image and text in an aside element
// The image URL can be customized with the 'image' prop, 
//and the text is specified with the 'text' prop
function About({image="https://via.placeholder.com/215",text}){
    return(
        <aside>
            <img src={image} alt="blog logo" />
            <p>{text}</p>
        </aside>
    )
}

export default About;
