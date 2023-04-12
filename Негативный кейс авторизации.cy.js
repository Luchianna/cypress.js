
describe('Автотест проверки на негативный кейс авторизации с неверным паролем', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLove');
         cy.get('#loginButton').click();
         cy.get('#message');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
 })
})