import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Union from "../../services/Union.service"

//get_Repeated_Email_Clients

When(`request all Clients with repeated Name`, () => {
	Union.get_Union().then(response =>{
		cy.log("RESPONSE: " + JSON.stringify(response.body))
        cy.wrap({response}).as("Response")
	})
});

Then(`should return the response {string} status {int}`, (schema, status) => {
	cy.get("@Response").then(when => {
        //cy.validateSchema(when.response.body, `${schema}/${status}`)
        expect(when.response.status).to.equal(status)
    })
});