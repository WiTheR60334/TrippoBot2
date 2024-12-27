import React from 'react'

function FlightTable() {
  return (
    <div
    className="container flight-trip"
    style={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1.75fr 1fr 1.25fr 1.25fr',
      alignItems: 'center',
      fontSize: '16px',
      lineHeight: 1.3,
      padding: '16px 0',
      minHeight: '72px',
      backgroundColor: '#f0f4f9',
      borderRadius: '12px',
    }}
  >
    {/* Airline Logo */}
    <img
      alt="airline logo"
      className="airline-logo"
      src="https://www.gstatic.com/flights/airline_logos/70px/6E.png"
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
        paddingLeft: '1rem'
      }}
    >
      <div className="flight-times" style={{ fontWeight: 'bold' }}>
        2:45 AM – 3:50 AM
      </div>
      <div className="airline-name" style={{ fontSize: '0.85rem', color: '#6b7280' }}>
        IndiGo
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
      AMD – PNQ
    </div>

    {/* Stop Info */}
    <div
      className="stop-info data-field"
      style={{
        margin: '0 16px',
        textAlign: 'center',
      }}
    >
    <span className="duration">1 hr 5 min</span>
    </div>

    {/* Price */}
    <div
      className="price data-field"
      style={{
        margin: '0 16px',
        textAlign: 'right',
        paddingRight: '1rem'
      }}
    >
<div className="flight-times" style={{ fontWeight: 'bold' }}>
      ₹8,339
      </div>
      <div className="airline-name" style={{ fontSize: '0.85rem', color: '#6b7280' }}>
      round trip
      </div>        </div>
  </div>

  )
}

export default FlightTable