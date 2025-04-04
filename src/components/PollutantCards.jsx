import React, { useEffect, useState, useRef } from 'react';

const PollutantCards = ({ pollutantData }) => {
  // Store previous values to animate from
  const [prevValues, setPrevValues] = useState({});
  // Store the current animated values
  const [animatedValues, setAnimatedValues] = useState({});
  // Track if this is the first render
  const isFirstRender = useRef(true);

  // Pollutant information with names and custom SVG icons
  const pollutants = [
    {
      id: 'pm2_5',
      code: 'PM2.5',
      name: 'Fine Particulate Matter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="18" cy="12" r="1.5" />
          <path d="M3 8h18" />
          <path d="M3 16h18" />
        </svg>
      )
    },
    {
      id: 'pm10',
      code: 'PM10',
      name: 'Coarse Particulate Matter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="3" />
          <circle cx="14" cy="12" r="2" />
          <circle cx="20" cy="12" r="1" />
          <path d="M3 8h18" />
          <path d="M3 16h18" />
        </svg>
      )
    },
    {
      id: 'o3',
      code: 'O3',
      name: 'Ozone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="4" x2="12" y2="8" />
          <line x1="12" y1="16" x2="12" y2="20" />
        </svg>
      )
    },
    {
      id: 'no2',
      code: 'NO2',
      name: 'Nitrogen Dioxide',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
          <line x1="5" y1="9" x2="19" y2="9" />
          <line x1="5" y1="15" x2="19" y2="15" />
        </svg>
      )
    },
    {
      id: 'so2',
      code: 'SO2',
      name: 'Sulfur Dioxide',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M6 15H18" />
          <path d="M6 9H18" />
        </svg>
      )
    },
    {
      id: 'co',
      code: 'CO',
      name: 'Carbon Monoxide',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
          <line x1="11" y1="12" x2="13" y2="12" />
        </svg>
      )
    },
    {
      id: 'no',
      code: 'NO',
      name: 'Nitric Oxide',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="12" r="3" />
          <circle cx="17" cy="12" r="3" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      )
    },
    {
      id: 'nh3',
      code: 'NH3',
      name: 'Ammonia',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M8 9L16 9" />
          <path d="M6 12L18 12" />
          <path d="M8 15L16 15" />
        </svg>
      )
    }
  ];

  // Animation function to smoothly transition between values
  const animateValue = (start, end, duration = 800) => {
    return new Promise((resolve) => {
      const startTime = performance.now();
      
      const updateValue = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime >= duration) {
          resolve(end);
          return;
        }
        
        const progress = elapsedTime / duration;
        // Easing function for smoother animation
        const easedProgress = -Math.cos(progress * Math.PI) / 2 + 0.5;
        const currentValue = start + (end - start) * easedProgress;
        
        resolve(currentValue);
        requestAnimationFrame(updateValue);
      };
      
      requestAnimationFrame(updateValue);
    });
  };

  // Update animated values when pollutantData changes
  useEffect(() => {
    // Initialize on first render
    if (isFirstRender.current) {
      const initialValues = {};
      
      pollutants.forEach(pollutant => {
        const value = pollutantData[pollutant.id];
        initialValues[pollutant.id] = value || 0;
      });
      
      setAnimatedValues(initialValues);
      setPrevValues(initialValues);
      isFirstRender.current = false;
      return;
    }

    // Store the current values before updating
    const newPrevValues = {};
    pollutants.forEach(pollutant => {
      newPrevValues[pollutant.id] = animatedValues[pollutant.id] || 0;
    });
    setPrevValues(newPrevValues);

    // Animate to the new values
    const animateValues = async () => {
      const newAnimatedValues = { ...animatedValues };
      
      // Create animation steps for each pollutant
      for (const pollutant of pollutants) {
        const targetValue = pollutantData[pollutant.id] || 0;
        const startValue = prevValues[pollutant.id] || 0;
        
        // Only animate if values are different
        if (targetValue !== startValue) {
          let frames = 20; // Number of frames for the animation
          for (let i = 1; i <= frames; i++) {
            const progress = i / frames;
            // Use easing function for smoother animation
            const easedProgress = -Math.cos(progress * Math.PI) / 2 + 0.5;
            const currentValue = startValue + (targetValue - startValue) * easedProgress;
            
            newAnimatedValues[pollutant.id] = currentValue;
            setAnimatedValues({ ...newAnimatedValues });
            
            // Wait for next frame
            await new Promise(resolve => setTimeout(resolve, 800 / frames));
          }
        }
      }
    };
    
    animateValues();
  }, [pollutantData]);

  // Determine if a value has increased or decreased for styling
  const getValueChangeClass = (pollutantId) => {
    const currentValue = pollutantData[pollutantId];
    const previousValue = prevValues[pollutantId];
    
    if (currentValue > previousValue) {
      return "value-increased";
    } else if (currentValue < previousValue) {
      return "value-decreased";
    }
    return "";
  };

  return (
    <div className="pollutant-cards" style={{ gridColumn: '1 / -1' }}>
      <h3>Pollutant Concentrations (μg/m³)</h3>
      <div className="cards-grid">
        {pollutants.map((pollutant) => (
          <div className="pollutant-card" key={pollutant.id}>
            <div className="card-header">
              <div className="icon-container">
                {pollutant.icon}
              </div>
              <div className="pollutant-info">
                <h4>{pollutant.code}</h4>
                <span className="pollutant-name">{pollutant.name}</span>
              </div>
            </div>
            <div className={`value ${getValueChangeClass(pollutant.id)}`}>
              {(animatedValues[pollutant.id] || 0).toFixed(1)}
            </div>
          </div>
        ))}
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        .pollutant-card {
         
          position: relative;
          padding: 1rem;
          border-radius: 8px;
          background-color: #f8f9fa;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 1rem;
        }

        
        .pollutant-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        
        .icon-container {
          width: 32px;
          height: 32px;
          margin-right: 0.75rem;
          color: #4a5568;
        }
        
        .pollutant-info h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .pollutant-name {
          font-size: 0.8rem;
          color: #718096;
        }
        
        .value {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.5s ease, color 0.5s ease;
        }
        
        .value-increased {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          animation: pulse 1s ease;
        }
        
        .value-decreased {
          background-color: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          animation: pulse 1s ease;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
      `}</style>
    </div>
  );
};

export default PollutantCards;







// import React from 'react';

// const PollutantCards = ({ pollutantData }) => {
//   // Pollutant information with names and custom SVG icons
//   const pollutants = [
//     {
//       id: 'pm2_5',
//       code: 'PM2.5',
//       name: 'Fine Particulate Matter',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="6" cy="12" r="2" />
//           <circle cx="12" cy="12" r="1" />
//           <circle cx="18" cy="12" r="1.5" />
//           <path d="M3 8h18" />
//           <path d="M3 16h18" />
//         </svg>
//       )
//     },
//     {
//       id: 'pm10',
//       code: 'PM10',
//       name: 'Coarse Particulate Matter',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="6" cy="12" r="3" />
//           <circle cx="14" cy="12" r="2" />
//           <circle cx="20" cy="12" r="1" />
//           <path d="M3 8h18" />
//           <path d="M3 16h18" />
//         </svg>
//       )
//     },
//     {
//       id: 'o3',
//       code: 'O3',
//       name: 'Ozone',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="8" />
//           <circle cx="12" cy="12" r="4" />
//           <line x1="12" y1="4" x2="12" y2="8" />
//           <line x1="12" y1="16" x2="12" y2="20" />
//         </svg>
//       )
//     },
//     {
//       id: 'no2',
//       code: 'NO2',
//       name: 'Nitrogen Dioxide',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="8" cy="12" r="3" />
//           <circle cx="16" cy="12" r="3" />
//           <line x1="5" y1="9" x2="19" y2="9" />
//           <line x1="5" y1="15" x2="19" y2="15" />
//         </svg>
//       )
//     },
//     {
//       id: 'so2',
//       code: 'SO2',
//       name: 'Sulfur Dioxide',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="6" cy="12" r="3" />
//           <circle cx="18" cy="12" r="3" />
//           <path d="M6 15H18" />
//           <path d="M6 9H18" />
//         </svg>
//       )
//     },
//     {
//       id: 'co',
//       code: 'CO',
//       name: 'Carbon Monoxide',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="8" cy="12" r="3" />
//           <circle cx="16" cy="12" r="3" />
//           <line x1="11" y1="12" x2="13" y2="12" />
//         </svg>
//       )
//     },
//     {
//       id: 'no',
//       code: 'NO',
//       name: 'Nitric Oxide',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="7" cy="12" r="3" />
//           <circle cx="17" cy="12" r="3" />
//           <line x1="10" y1="12" x2="14" y2="12" />
//         </svg>
//       )
//     },
//     {
//       id: 'nh3',
//       code: 'NH3',
//       name: 'Ammonia',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="3" />
//           <path d="M8 9L16 9" />
//           <path d="M6 12L18 12" />
//           <path d="M8 15L16 15" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div className="pollutant-cards">
//       <h3>Pollutant Concentrations (μg/m³)</h3>
//       <div className="cards-grid">
//         {pollutants.map((pollutant) => (
//           <div className="pollutant-card" key={pollutant.id}>
//             <div className="card-header">
//               <div className="icon-container">
//                 {pollutant.icon}
//               </div>
//               <div className="pollutant-info">
//                 <h4>{pollutant.code}</h4>
//                 <span className="pollutant-name">{pollutant.name}</span>
//               </div>
//             </div>
//             <div className="value">
//               {pollutantData[pollutant.id]?.toFixed(1) || '--'}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PollutantCards;