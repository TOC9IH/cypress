describe('Автотесты формы логина и пароля', function () {
    it('Верный логин и пароль, нажать войти, проверить текст и наличие кнопки крестик', function (){
        cy.visit('https://login.qa.studio/'); // Зашел на сайт  
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click(); // Разлогинился
    })
    


    it('Восстановление пароля', function (){
        cy.visit('https://login.qa.studio/'); // Зашел на сайт  
        cy.get('#forgotEmailButton').click(); // нажал забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел логин(Почту)
        cy.get('#restoreEmailButton').click(); //Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click(); // Разлогинился
    })


 it('Верный логин и НЕправильный пароль, нажать войти, проверить текст и наличие кнопки крестик', function (){
        cy.visit('https://login.qa.studio/'); // Зашел на сайт  
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел логин 
        cy.get('#pass').type('iLoveqastudio12'); // Ввел НЕправильный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click(); // Разлогинился
})


it('НЕправильный логин и пароль, нажать войти, проверить текст и наличие кнопки крестик', function (){
        cy.visit('https://login.qa.studio/'); // Зашел на сайт  
        cy.get('#mail').type('gerrman@dolnikov.ru'); // НЕправильный логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click(); // Разлогинился
    })



    it('Логин без @ и пароль, нажать войти, проверить текст и наличие кнопки крестик', function (){
        cy.visit('https://login.qa.studio/'); // Зашел на сайт  
        cy.get('#mail').type('gerrmandolnikov.ru'); //  Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click(); // Разлогинился
    })



it('Логин приведенный к строчным буквам и пароль, нажать войти, проверить текст и наличие кнопки крестик', function (){
        cy.visit('https://login.qa.studio/'); // Зашел на сайт  
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //  Ввел логин с строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click(); // Разлогинился
    })












})