// import React from 'react';
// import './FlightTable.css';

// function FlightTable() {
//     return (
//       <div className='tableContainer'>
//       <div className="containerrr">
//         {/* Airline Logo */}
//         <img
//           alt="airline logo"
//           className="airline-logo"
//           src="https://www.gstatic.com/flights/airline_logos/70px/6E.png"
//           style={{
//             height: '40px',
//             width: '40px',
//           }}
//         />
  
//         {/* Flight Details */}
//         <div
//           className="trip-details data-field"
//           style={{
//             display: 'grid',
//             margin: '0 16px',
//             color: 'var(--gem-sys-color--on-surface)',
//             paddingLeft: '1rem'
//           }}
//         >
//           <div className="flight-times" style={{ fontWeight: 'bold' }}>
//             2:45 AM – 3:50 AM
//           </div>
//           <div className="airline-name" style={{ fontSize: '0.85rem', color: '#6b7280' }}>
//             IndiGo 6E359
//           </div>
//         </div>
  
//         {/* Flight Overview */}
//         <div
//           className="flight-overview data-field"
//           style={{
//             margin: '0 16px',
//             color: 'var(--gem-sys-color--on-surface)',
//             textAlign: 'center',
//           }}
//         >
//           AMD – PNQ
//         </div>
  
//         {/* Stop Info */}
//         <div
//           className="stop-info data-field"
//           style={{
//             margin: '0 16px',
//             textAlign: 'center',
//           }}
//         >
//         <span className="duration">1 hr 5 min</span>
//         </div>

//         <div
//           className="flight-overview-hidden data-field"
//           style={{
//             margin: '0 16px',
//             color: 'var(--gem-sys-color--on-surface)',
//             textAlign: 'center',
//           }}
//         >
//           AMD – PNQ
//         </div>
  
//         {/* Price */}
//         <div
//           className="price data-field"
//           style={{
//             margin: '0 16px',
//             textAlign: 'right',
//             paddingRight: '1rem'
//           }}
//         >
//         <div className="flight-times" style={{ fontWeight: 'bold' }}>
//           ₹8,339
//           </div>
//           <div className="airline-name" style={{ color: '#6b7280' }}>
//           one way
//           </div>        
//           </div>
//       </div>
//       </div>
//     );
// };

// export default FlightTable;

import React from 'react';
import './FlightTable.css';

function calculateDuration(departureTime, arrivalTime) {
    const dep = new Date(departureTime);
    const arr = new Date(arrivalTime);
    const diffMs = arr - dep;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${diffHrs} hr ${diffMins} min`;
}

function FlightTable({ flightData }) {
    return (
        <div className="tableContainer">
            {flightData.map((flight, index) => (
                <div key={index} className="containerrr">
                    {/* Airline Logo */}
                    <img
                        alt="airline logo"
                        className="airline-logo"
                        src="https://www.gstatic.com/flights/airline_logos/70px/6E.png" // Update this with dynamic logos if available
                        style={{
                            height: '40px',
                            width: '40px',
                        }}
                    />

                    {/* Flight Details */}
                    <div
                        className="trip-details data-field"
                        style={{
                            display: 'grid',
                            margin: '0 16px',
                            color: 'var(--gem-sys-color--on-surface)',
                            paddingLeft: '1rem',
                        }}
                    >
                        <div className="flight-times" style={{ fontWeight: 'bold' }}>
                          {new Date(flight.DepartureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} – { } 
                          {new Date(flight.ArrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </div>
                        <div className="airline-name" style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                            {flight.Airline} {flight.FlightNumber}
                        </div>
                    </div>

                    {/* Flight Overview */}
                    <div
                        className="flight-overview data-field"
                        style={{
                            margin: '0 16px',
                            color: 'var(--gem-sys-color--on-surface)',
                            textAlign: 'center',
                        }}
                    >
                        {flight.Departure} – {flight.Arrival}
                    </div>

                    {/* Stop Info (Duration) */}
                    <div
                        className="stop-info data-field"
                        style={{
                            margin: '0 16px',
                            textAlign: 'center',
                        }}
                    >
                        <span className="duration">{calculateDuration(flight.DepartureTime, flight.ArrivalTime)}</span>
                    </div>

                    {/* Price */}
                    <div
                        className="price data-field"
                        style={{
                            margin: '0 16px',
                            textAlign: 'right',
                            paddingRight: '1rem',
                        }}
                    >
                        <div className="flight-times" style={{ fontWeight: 'bold' }}>
                            {flight.Price}
                        </div>
                        <div className="airline-name" style={{ color: '#6b7280' }}>
                            one way
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FlightTable;
