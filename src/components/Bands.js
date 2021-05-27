import React, {Component} from 'react'
import Band from './Band'



    const Bands = props => {
        const bands = props.bands.map(b => <Band key={b.id} {...b} deleteBand={props.deleteBand}/>)
    
        return (
            <div>
                {bands}
            </div>
        )
    }

export default Bands
