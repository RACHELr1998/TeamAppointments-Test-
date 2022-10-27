import { SyntheticEvent, useEffect, useState } from "react";
import TeamModel from "../../../Models/TeamModel";
import AppointmentModel from "../../../Models/AppointmentModel";
import appointmentService from "../../../Services/AppointmentService";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import "./AppointmentList.css";

function AppointmentList(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [appointments, setAppointments] = useState<AppointmentModel[]>([]);

    useEffect( () => {
        appointmentService.getAllTeams()
                    .then(teams => setTeams(teams))
                    .catch(err => alert(err.message));
    }, [])

    async function getAllAppointmentsByTeamId(args: SyntheticEvent) {
        try{
            const select = args.target as HTMLSelectElement;
            const teamId = +select.value;
            const appointments = await appointmentService.getAllAppointmentsByTeamId(teamId);
            setAppointments(appointments);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AppointmentList">
			<select defaultValue="" onChange={getAllAppointmentsByTeamId}>
                <option disabled value="">Select Team...</option>
                {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.teamName}</option>)}
            </select>
            <br/><br/>
            {appointments.map(a => <AppointmentCard key={a.appointmentId} appointment={a} />)}
        </div>
    );
}
export default AppointmentList;


