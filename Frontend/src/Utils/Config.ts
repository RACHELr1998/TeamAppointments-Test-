class Config {
    public teamsUrl = "http://localhost:3001/api/teams/";
    public appointmentsByTeamIdUrl = "http://localhost:3001/api/appointments-by-teamId/";
    public appointmentsUrl = "http://localhost:3001/api/appointments/";
}

const appConfig = new Config();

export default appConfig;
