/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

before(()=>{
    Given(`User is in web staging`,() => {
        cy.visit(`http://web-staging.aonewallet.com/`);
    });
});

When(`User enters correct credentials`,() =>{
        cy.get("button").contains("Login").click();
        cy.get("[placeholder=Username]").type("decbmtest");
        cy.get("[type=Password]").type("password@1");
        cy.get("[type=submit]").contains("Login").click();
});

Then(`User should successfully log in` ,() =>{
    cy.get(".chakra-alert").contains(`Successfully Authenticated`);
});


When(`User enters incorrect Username`,() =>{
    cy.get("button").contains("Login").click();
    cy.get("[placeholder=Username]").type("decbm");
    cy.get("[type=Password]").type("password@1");
    cy.get("[type=submit]").contains("Login").click();
});
Then(`User should unsuccessfully log in` ,() =>{
    cy.get(".chakra-toast").contains(`Your details have not been found`);
});

When(`User enters incorrect Password`,() =>{
    cy.get("button").contains("Login").click();
    cy.get("[placeholder=Username]").type("decbmtest");
    cy.get("[type=Password]").type("password");
    cy.get("[type=submit]").contains("Login").click();
});
Then(`User should unsuccessfully log in` ,() =>{
    cy.get(".chakra-toast").contains(`Your details have not been found`);
});

When(`User enters incorrect credentials`,() =>{
    cy.get("button").contains("Login").click();
    cy.get("[placeholder=Username]").type("decbm");
    cy.get("[type=Password]").type("password");
    cy.get("[type=submit]").contains("Login").click();
});
 Then(`User should unsuccessfully log in` ,() =>{
    cy.get(".chakra-toast").contains(`Your details have not been found`);
});   




