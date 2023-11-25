import React from 'react';

// Styles 
import './ZoomButtons.styles.css'

const ZoomButtons = ({ 
  onZoomIn, 
  onZoomOut,
  disabledZoomIn, 
  disabledZoomOut 
}) => (
  <div 
    className="zoom-buttons"
  >
    <button 
      onClick={onZoomIn} 
      className="zoom-in"
      disabled={disabledZoomIn}
    >
      +
    </button>
    <button 
      onClick={onZoomOut} 
      className="zoom-out"
      disabled={disabledZoomOut}
    >
      -
    </button>
  </div>
)

export default ZoomButtons
