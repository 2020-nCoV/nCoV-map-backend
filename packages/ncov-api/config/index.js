module.exports = {
    paths: {
        dbmodels: 'models',
        logroot: './logs',
        webroot: './',
        uploads: './public/uploads'
    },
    models:[],
    server:{
        port:"8888"
    },
    manager:{
        uname: "管理员", phone: "66666666666", email: "123@123.com", pass: "ncov2020"
    },
    dbs: {
        defaults: {
            name: "ncovdb", user: "pgncov", pass: "plAXL1S%5E", host: "127.0.0.1", dialect: "postgres",
            port:"5432", pool: { "max": 5, "min": 0, "acquire": 30000, "idel": 10000 }
        }
    }
}
