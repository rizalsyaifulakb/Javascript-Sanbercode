import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {DashboardChart} from "./pages/dashboard_pages"
import {DashboardRemove} from "./pages/dashboard_pages"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let dashboardChart = new DashboardChart()
let dashboardRemove = new DashboardRemove()
const URL = 'https://www.saucedemo.com/'

// Testing Login Page
it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

//Testing login using invalid password
it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

//Testing login and Click Dashboard
it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

//Testing New Flow Empty Password
it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','')
    loginPage.assertLogin() 
})

//Testing New Flow Click Add To Chart
it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardChart.sauceLabsBackpackChart() 
})

//Testing New Flow Click Remove
it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardChart.sauceLabsBackpackChart() 
    dashboardRemove.sauceLabsBackpackRemove()
})