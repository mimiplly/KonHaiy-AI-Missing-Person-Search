import React, { useEffect, useState } from 'react'
import missingimg from "./missingguy.png"
import "./Missing_persons.css"
import PersonCard from './PersonCard'

const Missing_persons = () => {
    const [cases, setCases] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const getdata= async ()=>{
        setLoading(true)
        setError('')
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'
            const endpoint = `${API_URL}/api/missingpeople/getallpersons`
            console.log('[DEBUG] Fetching missing persons from:', endpoint)
            
            const response= await fetch(endpoint);
            console.log('[DEBUG] Response status:', response.status)
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            let data=await response.json();
            console.log('[DEBUG] Received data:', data)
            setCases(data)
        } catch (err) {
            console.error('[ERROR] Failed to fetch missing persons:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getdata();
    
    }, [])
    function arrayBufferToBase64(buffer) {
        if (!buffer) return ''
        try {
            var binary = '';
            var bytes = [].slice.call(new Uint8Array(buffer));
            bytes.forEach((b) => binary += String.fromCharCode(b));
            return window.btoa(binary);
        } catch (e) {
            console.error('[ERROR] Failed to convert image buffer:', e)
            return ''
        }
    }

  return (
    <div className='personwhole' style={{backgroundColor:'#ffffff'}}>
    <div className="personheader">
    <div className="subheadingmissing">
        <div className='text-4xl' style={{color:'#000000'}}>Missing People</div>
        <img src={missingimg} alt="Missing people illustration" srcSet="" width="70px"/>
    </div>
    </div>

    <div className='contentlist'>
        {loading && (
            <div style={{textAlign: 'center', padding: '40px', color: '#666'}}>
                Loading missing persons...
            </div>
        )}
        
        {error && (
            <div style={{textAlign: 'center', padding: '20px', color: '#dc2626', backgroundColor: '#fee2e2', borderRadius: '8px', margin: '20px'}}>
                Error loading data: {error}
            </div>
        )}
        
        {!loading && !error && cases.length === 0 && (
            <div style={{textAlign: 'center', padding: '40px', color: '#666'}}>
                No missing persons registered yet.
            </div>
        )}
        
        {!loading && cases.map((element, index)=>{
            try {
                const base64string = element.image?.data?.data 
                    ? arrayBufferToBase64(element.image.data.data) 
                    : ''
                
                const src = base64string ? `data:image/png;base64,${base64string}` : '';
                const heightVal = element.height?.$numberDecimal || element.height || ''
                
                return (
                    <PersonCard 
                        key={element._id || index}
                        name={element.name || 'Unknown'} 
                        identification_number={element.identification_number || element.adhaar_number || ''} 
                        email={element.email || ''} 
                        date={element.Date_missing?.substring(0,10) || ''} 
                        height={heightVal} 
                        identification={element.identification || ''} 
                        gender={element.Gender || ''} 
                        address={element.address || ''} 
                        image={src} 
                        totalcases={cases} 
                        changecase={setCases}
                    />
                )
            } catch (err) {
                console.error('[ERROR] Failed to render person card:', err, element)
                return (
                    <div key={index} style={{color: 'red', padding: '10px'}}>
                        Error rendering person: {element.name || 'Unknown'}
                    </div>
                )
            }
        })}
    </div>



    </div>
  )
}

export default Missing_persons