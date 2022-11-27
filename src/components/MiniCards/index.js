import React from 'react'
import './style.css'

export default function MiniCard({iClass="", src="", title, href = null}) {
    return (
        <div className="col card ms-3 mt-3" style={{ width: "100px" }}>
            <a className="mt-2" href={href} >
                {iClass? <i className={`${iClass}`} /> : <img className="mt-2" src={src} width="70px" height="70px" alt={title} />}
            </a>
            
            <div className="card-body p-0 pt-2">
                <h5 className='card-title' style={{fontSize: "13px"}}>{title}</h5>
            </div>
        </div>
    )
}
