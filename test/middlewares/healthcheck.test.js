const { expect } = require("chai");
const HealthCheckMiddleware = require("../../src/healthcheck");
const healthCheckMiddleware = new HealthCheckMiddleware();
const {RepliesMockups:{ReqMockup, ResMockup}} = require("../mockups");

const nameApi = "Fake name";
healthCheckMiddleware.apiName(nameApi);

describe("Healthcheck middleware", ()=>{
    const reqMockup = new ReqMockup();
    const resMockup = new ResMockup();

    beforeAll(async () => {
        await healthCheckMiddleware.getStatus(reqMockup, resMockup);
    });

    test("it must get the api name", async () =>{
        expect(healthCheckMiddleware.apiName).to.be.eql(nameApi);
    })
    
    test("get status", async () =>{
        expect(resMockup.status).to.be.eql(200);
        expect(resMockup.json.name).to.be.eql(nameApi);
        expect(isNaN(resMockup.json.uptime)).to.be.false;
    })
})