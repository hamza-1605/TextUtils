import React from 'react'

function Alert(props) {

    const capt = (type) => {
        let word = (type).toLowerCase()  ;
        return word.charAt(0).toUpperCase() + word.slice(1)  
    }


    return (
        <div style={{ height: '50px'}}>
            {props.alert && 
            <div className="alert alert-warning alert-dismissible fade show" style={{backgroundColor : '#dad7fa'}} role="alert">
                <strong>{capt(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
  )
}

export default Alert
