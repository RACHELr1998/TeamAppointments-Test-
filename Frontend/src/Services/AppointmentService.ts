import axios from "axios";
import TeamModel from "../Models/TeamModel";
import AppointmentModel from "../Models/AppointmentModel";
import appConfig from "../Utils/Config";

class AppointmentService {

    public async getAllTeams(): Promise<TeamModel[]> {
        const response = await axios.get<TeamModel[]>(appConfig.teamsUrl);
        const teams = response.data;
        return teams;
    }

    public async getAllAppointmentsByTeamId(teamId: number): Promise<AppointmentModel[]> {
        const response = await axios.get<AppointmentModel[]>(appConfig.appointmentsByTeamIdUrl + teamId);
        const appointments = response.data;
        return appointments;
    }

    public async addAppointments(appointment: AppointmentModel): Promise<void> {
       await axios.post<AppointmentModel>(appConfig.appointmentsUrl, appointment);  
    }

}

const appointmentService = new AppointmentService();
export default appointmentService;