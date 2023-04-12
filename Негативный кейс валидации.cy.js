describe('Автотест проверки на негативный кейс валидации', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message');
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
 })
})