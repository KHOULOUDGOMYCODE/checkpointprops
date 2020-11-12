import React from 'react';

const ChildrenComponent = (props) =>{
    return(<div>

    <img src={props.image}style={{height:'400px', width:'500px', marginLeft:'700px',position:'absolute',top:'30px' }} alt="icon-image" />
    </div>
    )
}

export default ChildrenComponent;
