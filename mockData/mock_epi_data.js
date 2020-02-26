const pool = require('../lib/pool');

let insertQueries = "INSERT INTO epidemic_data VALUES (1, 420100, '110E', '29N', 'WGS-84', 4109, 0, 100, 224, 138, 100);"+
                    "INSERT INTO epidemic_data VALUES (2, 421100, '110E', '29N', 'WGS-84', 1002, 300, 200, 15, 27, 100);"+
                    "INSERT INTO epidemic_data VALUES (3, 432100, '110E', '29N', 'WGS-84', 740, 1000, 113, 14, 12, 100);"+
                    "INSERT INTO epidemic_data VALUES (4, 420100, '110E', '29N', 'WGS-84', 1000, 2133, 200, 59, 142, 100);"+
                    "INSERT INTO epidemic_data VALUES (5, 421100, '110E', '29N', 'WGS-84', 300, 1234, 8, 50, 200, 100);"+
                    "INSERT INTO epidemic_data VALUES (6, 432100, '110E', '29N', 'WGS-84', 800, 2324, 300, 20, 150, 100);"+
                    "INSERT INTO epidemic_data VALUES (7, 410000, '110E', '28N', 'WGS-84', 200, 402, 20, 11, 22, 100);";

async function mock_epi_data(){
    pool.query(insertQueries, (error, result) => {
        if(error){
            throw error;
        }

    })
}

module.exports = mock_epi_data;