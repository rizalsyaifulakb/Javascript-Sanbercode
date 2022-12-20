
describe('My Register application', () => {
    it('should regist new account', async () => {
        await browser.url('https://parabank.parasoft.com/parabank/index.htm');

        
        await $('#loginPanel > p:nth-child(3) > a').click()         //click register
        await $('//*[@id="customer.firstName"]').setValue('rizal')  //input nama
        await $('//*[@id="customer.lastName"]').setValue('syaiful')          //input nama terakhir
        await $('//*[@id="customer.address.street"]').setValue('bandung')   //input address
        await $('//*[@id="customer.address.city"]').setValue('bandung')     //input city
        await $('//*[@id="customer.address.state"]').setValue('bandung')    //input state
        await $('//*[@id="customer.address.zipCode"]').setValue('1234')     //input zipcode
        await $('//*[@id="customer.phoneNumber"]').setValue('081122334455')  //input phone number
        await $('//*[@id="customer.ssn"]').setValue('12234')                 //input ssn
        await $('//*[@id="customer.username"]').setValue('testing1234')      //input username
        await $('//*[@id="customer.password"]').setValue('testing12345')     //input password
        await $('//*[@id="repeatedPassword"]').setValue('testing12345')

        await $('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()



        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
         //   'You logged into a secure area!');

    
    })
})


