import React from 'react';

export const Title = ({children}) =>
{
    return(
        <div className="row">
            <div className="col">
                <h1 className="title text-center">{children}</h1>
            </div>
        </div>
        
    )
}
