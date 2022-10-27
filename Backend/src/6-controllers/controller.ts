import express, { NextFunction, Request, Response } from "express";
import AppointmentModel from "../4-models/appointment-model";
import logic from "../5-logic/logic";

const router = express.Router();

router.get("/api/teams", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teams = await logic.getAllTeams();
        response.json(teams);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/api/appointments-by-teamId/:teamId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teamId = +request.params.teamId;
        const appointments = await logic.getAllAppointmentsByTeamId(teamId);
        response.json(appointments);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/api/appointments", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const appointment = new AppointmentModel(request.body);
        const addedAppointment = await logic.addAppointment(appointment);
        response.send(201).json(addedAppointment);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
