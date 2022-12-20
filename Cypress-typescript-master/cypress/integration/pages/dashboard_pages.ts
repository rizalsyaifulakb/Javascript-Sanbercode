export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
}

export class DashboardChart{
    link_sauceLabsBackpackChart = 'ADD TO CHART'

    sauceLabsBackpackChart(){
        cy.contains(this.link_sauceLabsBackpackChart).click()

    }

}

export class DashboardRemove{
    link_sauceLabsBackpackRemove = 'Remove'

    sauceLabsBackpackRemove(){
        cy.contains(this.link_sauceLabsBackpackRemove).click()
        
    }

}