// src/components/VehicleInspectionForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const VehicleInspectionForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [startTimestamp, setStartTimestamp] = useState('');
  const [endTimestamp, setEndTimestamp] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [officerName, setOfficerName] = useState('');
  const [interiorCondition, setInteriorCondition] = useState('good');
  const [exteriorCondition, setExteriorCondition] = useState('good');
  const [fuelLevel, setFuelLevel] = useState('');
  const [startMiles, setStartMiles] = useState('');
  const [nextServiceMiles, setNextServiceMiles] = useState('');
  const [radioNumber, setRadioNumber] = useState('');
  const [fireExtinguisherExpiration, setFireExtinguisherExpiration] = useState('');
  const [narcanExpiration, setNarcanExpiration] = useState('');
  const [headlightsWorking, setHeadlightsWorking] = useState(false);
  const [turnSignalsWorking, setTurnSignalsWorking] = useState(false);
  const [reverseLightsWorking, setReverseLightsWorking] = useState(false);
  const [parkingLightsWorking, setParkingLightsWorking] = useState(false);
  const [lightBarWorking, setLightBarWorking] = useState(false);
  const [sirenWorking, setSirenWorking] = useState(false);
  const [brakesWorking, setBrakesWorking] = useState(false);
  const [tiresCondition, setTiresCondition] = useState('good');
  const [oilLevel, setOilLevel] = useState('');
  const [washerFluidLevel, setWasherFluidLevel] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/vehicle-inspections', {
        vehicleNumber,
        startTimestamp,
        endTimestamp,
        currentDate,
        officerName,
        interiorCondition,
        exteriorCondition,
        fuelLevel,
        startMiles,
        nextServiceMiles,
        radioNumber,
        fireExtinguisherExpiration,
        narcanExpiration,
        headlightsWorking,
        turnSignalsWorking,
        reverseLightsWorking,
        parkingLightsWorking,
        lightBarWorking,
        sirenWorking,
        brakesWorking,
        tiresCondition,
        oilLevel,
        washerFluidLevel,
      });
      console.log(response.data); // Handle success response
      // Optionally, clear form fields or show success message
    } catch (error) {
      console.error('Vehicle inspection submission error:', error);
      setError('Failed to submit vehicle inspection. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Vehicle Inspection Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Vehicle Number:</label>
        <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
      </div>
      <div>
        <label>Start Timestamp:</label>
        <input type="datetime-local" value={startTimestamp} onChange={(e) => setStartTimestamp(e.target.value)} required />
      </div>
      <div>
        <label>End Timestamp:</label>
        <input type="datetime-local" value={endTimestamp} onChange={(e) => setEndTimestamp(e.target.value)} required />
      </div>
      <div>
        <label>Current Date:</label>
        <input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
      </div>
      <div>
        <label>Officer Name:</label>
        <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} required />
      </div>
      <div>
        <label>Interior Condition:</label>
        <select value={interiorCondition} onChange={(e) => setInteriorCondition(e.target.value)} required>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label>Exterior Condition:</label>
        <select value={exteriorCondition} onChange={(e) => setExteriorCondition(e.target.value)} required>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label>Fuel Level:</label>
        <input type="text" value={fuelLevel} onChange={(e) => setFuelLevel(e.target.value)} required />
      </div>
      <div>
        <label>Start Miles:</label>
        <input type="text" value={startMiles} onChange={(e) => setStartMiles(e.target.value)} required />
      </div>
      <div>
        <label>Next Service Miles:</label>
        <input type="text" value={nextServiceMiles} onChange={(e) => setNextServiceMiles(e.target.value)} required />
      </div>
      <div>
        <label>Portable Radio Number:</label>
        <input type="text" value={radioNumber} onChange={(e) => setRadioNumber(e.target.value)} required />
      </div>
      <div>
        <label>Fire Extinguisher Expiration:</label>
        <input type="date" value={fireExtinguisherExpiration} onChange={(e) => setFireExtinguisherExpiration(e.target.value)} required />
      </div>
      <div>
        <label>Narcan Expiration:</label>
        <input type="date" value={narcanExpiration} onChange={(e) => setNarcanExpiration(e.target.value)} required />
      </div>
      <div>
        <label>Checks:</label><br />
        <label><input type="checkbox" checked={headlightsWorking} onChange={(e) => setHeadlightsWorking(e.target.checked)} /> Headlights</label><br />
        <label><input type="checkbox" checked={turnSignalsWorking} onChange={(e) => setTurnSignalsWorking(e.target.checked)} /> Turn Signals</label><br />
        <label><input type="checkbox" checked={reverseLightsWorking} onChange={(e) => setReverseLightsWorking(e.target.checked)} /> Reverse Lights</label><br />
        <label><input type="checkbox" checked={parkingLightsWorking} onChange={(e) => setParkingLightsWorking(e.target.checked)} /> Parking Lights</label><br />
        <label><input type="checkbox" checked={lightBarWorking} onChange={(e) => setLightBarWorking(e.target.checked)} /> Light Bar</label><br />
        <label><input type="checkbox" checked={sirenWorking} onChange={(e) => setSirenWorking(e.target.checked)} /> Siren</label><br />
        <label><input type="checkbox" checked={brakesWorking} onChange={(e) => setBrakesWorking(e.target.checked)} /> Brakes</label><br />
        <label>Tires Condition:</label>
        <select value={tiresCondition} onChange={(e) => setTiresCondition(e.target.value)} required>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label>Oil Level:</label>
        <input type="text" value={oilLevel} onChange={(e) => setOilLevel(e.target.value)} required />
      </div>
      <div>
        <label>Windshield Washer Fluid Level:</label>
        <input type="text" value={washerFluidLevel} onChange={(e) => setWasherFluidLevel(e.target.value)} required />
      </div>
      <button type="submit">Submit Vehicle Inspection</button>
    </form>
  );
};

export default VehicleInspectionForm;
