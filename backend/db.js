import mysql from "mysql2/promise";

const connStr = process.env.MYSQLCONNSTR_localdb;

function parseConnStr(str) {
  const parts = Object.fromEntries(
    str.split(";").filter(Boolean).map(p => p.split("="))
  );
  return {
    host: parts["Data Source"],
    user: parts["User Id"],
    password: parts["Password"],
    database: parts["Database"],
    ssl: { rejectUnauthorized: true }
  };
}

let dbConfig = {};
if (connStr) dbConfig = parseConnStr(connStr);

export async function getConnection() {
  return mysql.createConnection(dbConfig);
}
