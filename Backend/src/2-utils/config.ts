class Config {
    public port = 3001;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDatabase = "teamAppointments"; // Must fill in...
}

const config = new Config();

export default config;
