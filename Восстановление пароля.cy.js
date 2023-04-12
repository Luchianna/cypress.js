describe('Автотест восстановление пароля', function () {
   it('Проверка, что при восстановлении отправляется письмо с запросом', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('anna.shtam@icloud.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
