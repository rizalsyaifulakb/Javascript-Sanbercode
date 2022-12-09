
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://parabank.parasoft.com/parabank/index.htm');
        //await LoginPage.open();

        await $('#loginPanel > form > div:nth-child(2) > input').setValue('akuntsting')
        await $('#loginPanel > form > div:nth-child(4) > input').setValue('akuntesting23')

        await $('//*[@id="loginPanel"]/form/div[3]/input').click()

        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
         //   'You logged into a secure area!');

    
    })
})


