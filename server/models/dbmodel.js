const { Pool } = require("pg");
// does this need to be an enviroment variable
// const TEST_URI = "postgres://pscvcobi:rkm3nojS6zognbFZJ-JnLkhcOzXm3J0i@drona.db.elephantsql.com:5432/pscvcobi";
<<<<<<< HEAD
const TEST_URI = "postgres://postgres:postgres@192.168.64.6:30406"; //192.168.99.100:30406/postgres
=======
const TEST_URI = "postgres://postgres:postgres@192.168.99.100:31398/postgres";
>>>>>>> integration
const PG_URI = TEST_URI;//process.env.NODE_ENV === 'test' ? TEST_URI : GEN_URI;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed query: ${text}`);
    return pool.query(text, params, callback);
  }
};
