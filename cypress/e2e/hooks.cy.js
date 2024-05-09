describe('Hooks', () => {
    
  let data;

  before('Before', () => {
              cy.fixture('datosdesafio2Fixture').then(datos => {  
              data = datos;
      })
  });

  beforeEach('beforeEach', () => {
      cy.visit('');
      cy.get('#registertoggle').dblclick();
      cy.get('#user').type(Cypress.env().usuario)
      cy.get('#pass').type(Cypress.env().contraseña)
      cy.get('#submitForm').click();
      cy.get('#todolistlink').click();
      cy.contains('Remove all').click({ force: true });
      cy.wait(3000);
  });
  
  it('Test 1', () => {
    cy.get('#task').type(data.tareas.tarea1);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.contains('p', data.tareas.tarea1);
    cy.get('#task').type(data.tareas.tarea2);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.contains('p', data.tareas.tarea2);
    cy.get('#task').type(data.tareas.tarea3);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.contains('p', data.tareas.tarea3);
    cy.get('#task').type(data.tareas.tarea4);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.contains('p', data.tareas.tarea4);
    cy.get('#task').type(data.tareas.tarea5);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.contains('p', data.tareas.tarea5);
  });

  it('Test 2', () => {
    cy.xpath('//button[@id="all"]').should('exist').and('have.text', 'All');;
    cy.xpath('//button[@id="completed"]').should('exist').and('have.text', 'Completed');
    cy.xpath('//button[@id="active"]').should('exist').and('have.text', 'Active');
    cy.xpath('//button[@id="removeAll"]').should('exist').and('have.text', 'Remove all');
  });

  it('Test 3', () => {
      cy.get('#task').type(data.tareas.tarea3);
      cy.get('#sendTask').click();
      cy.contains('p', data.tareas.tarea3).click();
      cy.contains('p',data.tareas.tarea3).should('have.text', data.tareas.tarea3);
      cy.wait(3000);
      cy.get('#task').type(data.tareas.tarea1);
      cy.get('#sendTask').click();
      cy.contains('p', data.tareas.tarea1).click();
      cy.contains('p',data.tareas.tarea1).should('have.text', data.tareas.tarea1);
      cy.wait(3000);
      cy.contains('p', data.tareas.tarea1).siblings('button').click();
      cy.contains('p', data.tareas.tarea1).should('not.exist');
  });

  it('Test 4', () => {
    cy.get('#task').type(data.tareas.tarea1);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.get('#task').type(data.tareas.tarea2);
    cy.get('#sendTask').click();
    cy.wait(3000);
    cy.contains('p', data.tareas.tarea1).siblings('button').click();
    cy.contains('p', data.tareas.tarea1).should('not.exist');
  });
});