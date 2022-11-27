import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.css'

export default function LargeCards({pic, title, children, links, team="", members=[] }) {
    return (
        <div className='container-fluid large-card my-3'>
            <div className="row">
                <div className="col-4 carousel">
                    <Carousel variant="dark" interval={null}>
                        {pic.map(p => 
                            <Carousel.Item >
                                <a href={p.src} target="_blank">
                                    <img 
                                    id = {p.name}
                                    className = "d-block w-100" 
                                    src = {p.src} 
                                    alt = {p.name} 
                                    style = {{maxHeight:"30vh"}}
                                    />
                                </a>
                                <Carousel.Caption>
                                    <p className='caption'>{p.name[0].toUpperCase() + p.name.slice(1,p.name.length).toLowerCase()}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    </Carousel>
                    <small><em>Click the image to open the enlarged image in a new window.</em></small>
                </div>
                <div className="col-8 card-text">
                    <div className="row title my-2"><div className="col"><h3>{title}</h3></div></div>
                    <div className="row description my-2"><div className="col">
                        {children}
                        </div></div>
                    <div className="row members my-2" style={{display: members.length? "initial" : "none"}}>
                        <div className='col'> Members of team, <b>{team}</b>: <br />
                            {members.map(m => <a href={m.url}>{m.name}</a>)}
                        </div>
                    </div>
                    <div className="row links my-2">
                        <div className='col'>Deployed:
                            <a href={links.fedl}>Front-End</a>
                            <a href={links.bedl}>Back-End</a>
                        </div>
                        <div className='col'>Repository:
                            <a href={links.ferl}>Front-End</a>
                            <a href={links.berl}>Back-End</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

                                // style = {{ paddingTop: `calc((25vh - ${ 
                                //     document.getElementById(p.name).height 
                                // }px)/2)`, paddingBottom: `calc((25vh - ${ 
                                //     document.getElementById(p.name).height 
                                // }px)/2)`
                                // }}
