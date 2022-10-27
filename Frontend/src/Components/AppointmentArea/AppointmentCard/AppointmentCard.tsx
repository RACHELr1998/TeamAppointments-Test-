import AppointmentModel from "../../../Models/AppointmentModel";
import "./AppointmentCard.css";

interface AppointmentCardProps{
    appointment: AppointmentModel
}

function AppointmentCard(props: AppointmentCardProps): JSX.Element {
    return (
        <div className="AppointmentCard">
            
            <span>{props.appointment.teamName}</span>
            <br/>
            <br/>
            <span>From: {props.appointment.startDateTime.toString().slice(0, 16).replace('T', ' ')}</span>
            <br/>
            <br/>
            <span>To: {props.appointment.endDateTime.toString().slice(0, 16).replace('T', ' ')}</span>
            <br/>
            <br/>
            <span>Description: {props.appointment.description}</span>
            <br/>
            <br/>
            <span>Room: {props.appointment.room}</span>
           
        </div>
    );
}

export default AppointmentCard;
