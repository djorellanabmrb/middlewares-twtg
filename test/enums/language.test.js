const { expect } = require("chai");
const { LanguageEnum } = require("../../src/enums")

describe("Language enum", ()=>{
    test("check iso 639-1", async () =>{
        expect(LanguageEnum.EN).to.be.eql("en");
        expect(LanguageEnum.ES).to.be.eql("es");
    });

    test("language does not support on the sistem", async () =>{
        let hasError = false;
        try {
            LanguageEnum.isValidEnum("fr");
        } catch (error) {
            hasError = true;
        }
        expect(hasError).to.be.eql(true);
    });

    test("language support on the sistem", async () =>{
        let hasError = false;
        try {
            LanguageEnum.isValidEnum("en");
        } catch (error) {
            hasError = true;
        }
        expect(hasError).to.be.eql(false);
    });
})