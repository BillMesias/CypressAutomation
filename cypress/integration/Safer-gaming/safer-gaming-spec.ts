/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


before(() => {
  Given(`Admin is in web staging`, () => {
    cy.visit(`http://web-staging.aonewallet.com/`);
  });
});
// Visit Safer gaming page
When(`Admin clicks {string}`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`).contains(str).click();
});

Then(`Admin should see Safer Gaming page`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});

// Safer Gaming Drop Down Option
When(`Admin clicks {string}`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`).contains(str).click();
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});

And(`Admin clicks Safer Gaming button` , () => {
  cy.get(`#menu-button-15 > .chakra-button__icon > .chakra-icon`).click();
});

Then(`Admin should see Safer Gaming option` ,(dataTable: any) => {
  const value =dataTable.hashes();
  for (let i=0; i < value.length; i++) {
    cy.get(`#menu-list-15`).contains(value[i].tab).should(`exist`);
  };
});

// // Play Safe Drop Down Option
When(`Admin clicks {string}`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`).contains(str).click();
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});

And(`Admin clicks Play Safe button` , () => {
  cy.get(`#menu-button-22 > .chakra-button__icon > .chakra-icon`).click();
});

Then(`Admin should see Play Safe option` ,(dataTable: any) => {
  const value =dataTable.hashes();
  for (let i=0; i < value.length; i++) {
    cy.get(`#menu-list-22`).contains(value[i].tab).should(`exist`);
  };
});

// Support Drop Down Option
When(`Admin clicks {string}`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`).contains(str).click();
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});

And(`Admin clicks Support button` , () => {
  cy.get(`#menu-button-29 > .chakra-button__icon > .chakra-icon`).click();
});

Then(`Admin should see Support & Tips` , () => {
  cy.get(`#menu-list-29-menuitem-30 > .chakra-text`).contains(`Support & Tips`).should(`exist`);
});
And(`Admin should see Underage Gambling` , () => {
  cy.get(`#menu-list-29-menuitem-31 > .chakra-text`).contains(`Underage Gambling`).should(`exist`);
});
And(`Admin should see Helpful Organisations` , () => {
  cy.get(`#menu-list-29-menuitem-32 > .chakra-text`).contains(`Helpful Organisation`).should(`exist`);
    });


// Then(`Admin should see Support option` ,(dataTable: any) => {
//   const value =dataTable.hashes();
//   for (let i=0; i < value.length; i++) {
//     cy.get(`#menu-button-29`).findAllByText(value[i].tab).should(`exist`);
//   };
// });

// View Centre page
When(`Admin clicks {string}`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`).contains(str).click();
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});
And (`Admin clicks Help Centre button` , () => {
  cy.get(`[href="/help-centre"]`).contains(`Help Centre`).click();
})
Then(`Admin should see Help Centre page` , () => {
  cy.url().should("include" , "help-centre");
  cy.get(`[src="https://static.nexiux.io/images/@sites/betvision/images/help-centre.jpg"]`).should(`exist`);
})


