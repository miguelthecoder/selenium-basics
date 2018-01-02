// BY  as a variable
// Finding the element by
const By = require("selenium-webdriver").By;
// initiate the driver create a new selenium builder

//build object
class HomePage {
    //add method called when we make the object.
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id('registrar'),
            inviteeNameField: By.css("#registrar input[name='name']"),
            toggleNonRespondersVisibility: By.css('.main > div input'),
            // backticks are amazing, able to make it more dynamic
            // by ${invitee} will be replaced by whom ever you pass in 
            removeButtomForInvitee: invitee => By.xpath(`//span[text() = "${invitee}"]/../button[last()]`)
        };
    }

    // remember to use the keyword this
    // because this is an istance of the object
    open() {
        this.driver.get(process.env.URL);
        // location of the element you're testing or modifiying
    }

     addInvitee(name) {
        this.driver.findElement(this.locators.inviteeNameField)
        // name is being called 
        .sendKeys(name);
        this.driver.findElement(this.locators.inviteeForm).submit();
    }
    
      removeInvitee(invitee) {
        this.driver.findElement(this.locators.removeButtomForInvitee(invitee))
            .click();
    }
    
     toggleNonRespondersVisibility() {
        this.driver.findElement(this.locators.toggleNonRespondersVisibility)
            .click();
    }
}

module.exports = HomePage;