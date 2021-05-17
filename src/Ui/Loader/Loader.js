import React from 'react'
import {Spinner} from "react-bootstrap"
const Loader = () => {
    return (
        <div>
            <Spinner size="lg" animation="grow" variant="info" />
        </div>
    )
}

export default Loader
