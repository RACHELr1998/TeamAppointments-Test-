import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import TeamModel from "../4-models/team-model";
import AppointmentModel from "../4-models/appointment-model";

async function getAllTeams(): Promise<TeamModel[]> {

    const sql = `SELECT * FROM teams`;
    const teams = await dal.execute(sql, []);
    return teams;
}

async function getAllAppointmentsByTeamId(teamId: number): Promise<AppointmentModel[]> {

    const sql = `SELECT appointments.*, teamName 
                    FROM appointments JOIN teams ON appointments.teamId = teams.teamId
                    WHERE appointments.teamId = ?`;
    const appointments = await dal.execute(sql, [teamId]);
    return appointments;
}

async function addAppointment(appointment: AppointmentModel): Promise<AppointmentModel> {

    const sql = `INSERT INTO appointments VALUES (
                                DEFAULT, ?, ?, ?, ?, ?)`;
    const result: OkPacket = await dal.execute(sql, [appointment.teamId, appointment.startDateTime, appointment.endDateTime, appointment.description, 
                                                    appointment.room, appointment.appointmentId]);
    appointment.appointmentId = result.insertId;
    return appointment;
}


export default {
    getAllTeams,
    getAllAppointmentsByTeamId,
    addAppointment
};
