

import {test,expect} from '@playwright/test';

// proceso registro usuario 
test(' registro nuevo usuario' , async ({page}) =>{

    // ir a la URL
    await page.goto('');

    //clic en login
    await page.getByRole('link',{ name:'Log in'}).click();

    //clic en registrar 
    await page.getByRole('button', { name: 'Register' }).click();

    //clic en genero

    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    
    //llenar campos 
    await page.getByRole('textbox', { name: 'First name:' }).fill('lucas');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('camacho');
    await page.getByRole('textbox', { name: 'Email:' }).fill('xeyeje3703@goldvester.com');
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('123456');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('123456');
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByText('Your registration completed')).toBeVisible();
    // captura de pantalla 
    await page.screenshot({ path: 'registro-exitos.png' });

});