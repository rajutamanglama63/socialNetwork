// import {useState} from 'react'
import './technicians.css'
import CardList from '../cardList/CardList'

const Technicians = () => {
    return (
        <div>
            <div className="technician_page">
                <div className="list_container">
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                </div>
            </div>
        </div>
    )
}

export default Technicians
