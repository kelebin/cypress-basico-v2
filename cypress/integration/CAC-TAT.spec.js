/// <reference types="Cypress" />

    var chuckFactAPI

describe('Central de atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html');
      
      
    //     cy.request('https://api.chucknorris.io/jokes/random').then( response => )

       
    //     cy.request('https://api.chucknorris.io/jokes/random', { name: 'Jane' }).then(
    //         (response) => {
    //              chuckFactAPI  =  expect(response.body).to.have.property('value')
    //         }
    //     )
        

    //    var chuckFactAPI = cy.request('https://api.chucknorris.io/jokes/random')
    })


    it('verifica o titulo da aplicacao', function(){

        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT');
    })

    it('preenche os campos obrigatorios e envia o formulario', function(){

        const chuckNorris = 'No one has ever spoken during review of Chuck Norris code and lived to tell about it.';

        cy.get('#firstName').type('Kevin');
        cy.get('#lastName').type('Ferreira');
        cy.get('#email').type('kevin@email.com');
        cy.get('#open-text-area').type(chuckNorris, {delay: 0});
        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');

    } )

    
    it('preenche campo email com formatacao invalida e tenta submeter', function(){

        const chuckNorris = 'No one has ever spoken during review of Chuck Norris code and lived to tell about it.';

        cy.get('#firstName').type('Kevin');
        cy.get('#lastName').type('Ferreira');
        cy.get('#email').type('!@(*!@¨¨%#%¨@&');
        cy.get('#open-text-area').type(chuckNorris, {delay: 0});
        cy.get('button[type="submit"]').click();

        cy.get('.error').should('be.visible');

    } )


    
    it('preenche campo telefone com valores nao-numericos', function(){

        cy.get('#phone')
        .type('lasjdlaksjdlkaj')
        .should('have.value', '')

    } )

    
    it('Clica em submit sem informar campos obrigatorios', function(){
        
        cy.get('button[type="submit"]').click();

        cy.get('.error').should('be.visible');
       
    } )


    it('preenche os campos obrigatorios com comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible');
    } )


    it('preenche os campos obrigatorios e envia o formulario utilizando o contains do cypress', function(){

        const chuckNorris = 'No one has ever spoken during review of Chuck Norris code and lived to tell about it.';

        cy.get('#firstName').type('Kevin');
        cy.get('#lastName').type('Ferreira');
        cy.get('#email').type('kevin@email.com');
        cy.get('#open-text-area').type(chuckNorris, {delay: 0});
        cy.contains('button', 'Enviar').click();

        cy.get('.success').should('be.visible');

    } )

    it('seleciona campo select pelo texto', function(){
       cy.get('#product')
       .select('YouTube')
       .should('have.value', 'youtube')
    } )
    
    
    it('seleciona campo select pelo valor', function(){
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
     } )
    
    
     it('seleciona campo select pelo indice', function(){
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
     } )

     it('Marca campo radio (feedback)', function(){
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
     } )
     
     it.only('Marca cada campo radio ', function(){
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check();
            cy.wrap($radio).should('be.checked')
        })
     } )

     
     
})


