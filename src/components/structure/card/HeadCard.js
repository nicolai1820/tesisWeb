import React from 'react'

export const HeadCard = ({titulo=""}) => {


    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{titulo}</h1>
                    </div>
                    <div className="col-sm-6">
                        {/* <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to={redirection} >{migapan1}</Link></li>
                            <li className="breadcrumb-item active">{migapan2}</li>
                        </ol> */}
                    </div>
                </div>
            </div>
        </section>
    )

    
}
