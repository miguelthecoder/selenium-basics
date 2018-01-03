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
            inviteeByName: name => By.xpath(`//span[text() = "${name}"]/..`)            
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
    
    
     toggleNonRespondersVisibility() {
        this.driver.findElement(this.locators.toggleNonRespondersVisibility)
            .click();
    }
    findInviteeByName(name) {
        const el = this.driver
        .findElement(this.locators.inviteeByName(name));
        return new Invitee(el);
    }
}

class  Invitee {
    constructor(element) {
        this.element = element;
        this.locators = {
            removeButton: By.css("button:last-child"),
            confirmedCheckbox: By.css("input[type='checkbox']")
        };
    }
    remove() {
        this.element
        .findElement(this.locators.removeButton)
        .click();
    }
    toggleConfirmation() {
        this.element
        .findElement(this.locators.confirmedCheckbox)
        .click();
    }
}
module.exports = HomePage;