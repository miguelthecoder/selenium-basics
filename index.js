//initiate selenium
const selenium = require('selenium-webdriver');
//class definition
const HomePage = require('./pages/home');

const driver = new selenium.Builder()
    // all items are chained I just wanted to make it readable
    // where Chrome webdriver
    .forBrowser('chrome')
    // the build(); method build the function
    .build();
    // gets the url assigned at the bottom

    const homePage = new HomePage(driver);
    homePage.open();

    const invitees = [
        'Gonzalo Torres del Fierro',
        'Shadd Anderson',
        'George Aparece',
        'Shadab Khan',
        'Joseph Michael Casey',
        'Jennifer Nordell',
        'Faisal Albinali',
        'Taron Foxworth',
        'David Riesz',
        'Maicej Torbus',
        'Martin Luckett',
        'Joel Bardsley',
        'Reuben Varzea',
        'Ken Alger',
        'Amrit Pandey',
        'Rafal Rudzinski',
        'Brian Lynch',
        'Lupe Camacho',
        'Luke Fiji',
        'Sean Christensen',
        'Philip Graf',
        'Mike Norman',
        'Michael Hulet',
        'Brent Suggs'
     ];



// make the adding invitees function an object literal
// to make it dynamic.
// passing the "name parameter let's you add more names"

// // name is being populated.
// invitees.forEach(invitee => addInvitee(invitee));
// the second paremeter in the function refers to the this. keyword
invitees.forEach(homePage.addInvitee, homePage);
homePage.removeInvitee('Shadd Anderson');

// addInvitee("Muhammad Hassan");
// addInvitee("Laquisha Jones");
// addInvitee("Sarita Patel");
// addInvitee("Lidsey Kwadski");  
// addInvitee("Renne Lewis");
// addInvitee("Tae-Tae Greene ");

//call the fuction... toggleNonResponsersVisibility()

homePage.toggleNonRespondersVisibility();

//span[text() = "Shadd Anderson"]/..button[last()]
                              // /parent::li
                              // /..
                              // /parent::* ... select by text ...


