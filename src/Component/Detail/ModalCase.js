import React from 'react'
import './ModalCase.css'; 

export default function ModalCase({ setIsOpen, film}) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '35%' }}>
                <div className="modal-content">
                    <h2>Video Trailer for <i>{film.title}</i></h2>
                    <p><iframe width="95%" height="500px" src={film.clip} title={film.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></p>
                </div>
                <div className="modal-footer">
                    {/* <a className="modal-close red-text">Close</a> */}
                </div>
            </div>
        </div >

    )
}
