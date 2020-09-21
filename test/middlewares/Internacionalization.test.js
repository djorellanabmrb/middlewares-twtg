const { expect } = require("chai");
const {RepliesMockups:{ReqMockup, ResMockup}} = require("../mockups");
const InternationalizationMiddleware = require("../../src/internationalization");
const internationalizationMiddleware = new InternationalizationMiddleware();
describe("Internationalization Middleware", ()=>{
    test("Accept-Language doesnt exist", async () =>{
        const reqMockup = new ReqMockup();
        const resMockup = new ResMockup();
        const nextMockup = () => {};
        
        reqMockup.headers({});
        await internationalizationMiddleware.attachI18(reqMockup, resMockup, nextMockup)

        expect(resMockup.status).to.be.eql(406);
        expect(resMockup.json.message).to.be.eql('You must add the header, Accept-Language, with the values of "es" or "en".');
    });

    test("Accept-Language invalid", async () =>{
        const reqMockup = new ReqMockup();
        const resMockup = new ResMockup();
        const nextMockup = () => {};
        
        reqMockup.headers({"Accept-Language":"fr"});
        await internationalizationMiddleware.attachI18(reqMockup, resMockup, nextMockup)

        expect(resMockup.status).to.be.eql(406);
        expect(resMockup.json.message).to.be.eql('You must add the header, Accept-Language, with the values of "es" or "en".');
    });

    test("Accept-Language valid", async () =>{
        const reqMockup = new ReqMockup();
        const resMockup = new ResMockup();
        const nextMockup = () => {};
        
        reqMockup.headers({"Accept-Language":"es"});
        await internationalizationMiddleware.attachI18(reqMockup, resMockup, nextMockup)

        expect(resMockup.polyglot).not.to.be.null;
    });
})