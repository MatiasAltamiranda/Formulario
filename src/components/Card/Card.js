const Card = ({ appointment,setAppointments,appointments}) => {
 
  const deleteCita =(e)=>{
    const valor = e.target.id;
    setAppointments(appointments.filter(e => e.id !== Number(valor)))
    localStorage.removeItem('citas')
  }

  return (
    
    <div className="cita mt-4" id={appointment.id}>
      <p>Paciente: <span>{appointment.patient}</span></p>
      <p>Fecha: <span>{appointment.date}</span></p>
      <p>Hora: <span>{appointment.time}</span></p>
      <p>Síntomas: <span>{appointment.symptoms}</span></p>
      <div className="text-end">  
        <button className="btn btn-danger" id={appointment.id} onClick={deleteCita}>Eliminar cita</button>  
      </div>
      {localStorage.setItem("citas", JSON.stringify(appointments))}
    </div>
    
  );
}

export default Card;