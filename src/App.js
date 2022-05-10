import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Card from './components/Card/Card';

function App() {

  useEffect(() => 
    getHistory(),[]
   );
  
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (cita) => {
    setAppointments([ ...appointments, { ...cita, id: Date.now() }])

  }

  const getHistory = ()=>{
    setAppointments(JSON.parse(localStorage.getItem('citas')) || [])
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Form onAddFunction={addAppointment} />
          </div>
          <div className="col-lg-6">
            {
              appointments.map((appointment) => <Card key={appointment.id} appointment={appointment} setAppointments={setAppointments} appointments={appointments}/>)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
