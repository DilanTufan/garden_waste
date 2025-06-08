import React from 'react'
import ImgYarder4 from '../images/4-yarder-skip.jpg'
import { FaAngleRight } from "react-icons/fa";

function Card({ location }) {
    const { id, size, hire_period_days, transport_cost, per_tonne_cost, price_before_vat,
        vat, postcode, area, forbidden, created_at, updated_at, allowed_on_road, allows_heavy_waste } = location;
    const price = price_before_vat + (price_before_vat * 0.20);
    return (
        <>
            <div className='card'>
                <div>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <img src={ImgYarder4} width={220} height={110} />
                        <div style={{
                            position: 'absolute',
                            top: '4px',
                            right: '85px',
                            backgroundColor: '#0050ff',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                        }}>
                            {size} Yard
                        </div>
                    </div>
                    <h3 className='card-title '>{size} Yard Skip</h3>
                    <p className='text-gray margin-top-5 '>{hire_period_days} day hire period</p>

                    <h3 className='text-blue'>£{price}</h3>
                    <button className='card-button'><span>Select This Skip</span> <FaAngleRight style={{ position: 'relative', top: '2px' }} /></button>
                </div>
            </div >
        </>
    )
}

export default Card