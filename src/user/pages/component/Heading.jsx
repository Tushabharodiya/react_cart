import React from 'react'
import { Paragrap } from '../../../atoms/Atoms'

const Heading = ({content}) => {
    return (
        <>
            <div className="heading-data text-center">
                <h2>{content}</h2>
                <Paragrap content="Contemporary, minimal and modern designs embody the Lavish Alice handwriting" style="paragrapp mb-0" />
            </div>
        </>
    )
}

export default Heading
