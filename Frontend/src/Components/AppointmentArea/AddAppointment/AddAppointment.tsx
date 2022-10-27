import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TeamModel from "../../../Models/TeamModel";
import AppointmentModel from "../../../Models/AppointmentModel";
import appointmentService from "../../../Services/AppointmentService";
import "./AddAppointment.css";


function AddAppointment(): JSX.Element {

    const {register, handleSubmit} = useForm<AppointmentModel>();

    const [teams, setTeams] = useState<TeamModel[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        appointmentService.getAllTeams()
                    .then(teams =>setTeams(teams))
                    .catch(err => alert(err.message));
    }, [])

    async function send(appointment: AppointmentModel) {
        try{
            await appointmentService.addAppointments(appointment);
            alert("Added!");
            navigate("/appointments");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddAppointment">
			<form onSubmit={handleSubmit(send)}>
                <h2>Add Appointment</h2>

                <label>Team Name:</label>
                <select defaultValue="" {...register ("teamId")} required>
                    <option disabled value="">Select Team...</option>
                    {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.teamName}</option>)}
                </select>
                <br/>

                <label>From: </label>
                <input type="datetime-local" {...register ("startDateTime")} required/>

                <label>To: </label>
                <input type="datetime-local" {...register ("endDateTime")} required/>

                <label>Description: </label>
                <input type="text" {...register ("description")} required/>

                <label>Room: </label>
                <input type="text" {...register ("room")} required/>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddAppointment;
