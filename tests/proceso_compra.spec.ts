import {test,expect} from '@playwright/test';

test('inicio sesion' , async({ page })=> {

        // ir a la url
        await page.goto('');

        //clic en login
        await page.getByRole('link',{name:'Log in'}).click();

        // se loguea con los datos de la creacion de usuario 
        // ejemplo  Email:bowaho4721@goldvester.com
        //  Password:123456
        await page.getByRole('textbox', {name:'Email'}).fill('bowaho4721@goldvester.com');
        await page.getByRole('textbox', {name:'Password'}).fill('123456');

        //clic boton login

        await page.getByRole('button',{name:'log in'}).click(  );
        await expect(page.getByText('bowaho4721@goldvester.com')).toBeVisible();

        console.log('Log in exitoso');

    });

    test('seleccion producto', async({page})=>{

         // ir a la url
        await page.goto('');

        //clic en login
        await page.getByRole('link',{name:'Log in'}).click();

        // se loguea con los datos de la creacion de usuario 
        // ejemplo  Email:bowaho4721@goldvester.com
        //  Password:123456
        await page.getByRole('textbox', {name:'Email'}).fill('bowaho4721@goldvester.com');
        await page.getByRole('textbox', {name:'Password'}).fill('123456');

        //clic boton login

        await page.getByRole('button',{name:'log in'}).click(  );
        //clic en un submenu de producto 
        await page.getByRole('link',{name:'Books'}).nth(1).click();

        //seleccion producto 
        await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();

        await expect(page.getByText('The product has been added to')).toBeVisible();

        console.log('producto agregado al carrito');


    }
);

test('Proceso de compra completo', async({page})=>{

         // ir a la url
        await page.goto('');

        //clic en login
        await page.getByRole('link',{name:'Log in'}).click();

        // se loguea con los datos de la creacion de usuario 
        // ejemplo  Email:xeyeje3703@goldvester.com
        //  Password:123456
        await page.getByRole('textbox', {name:'Email'}).fill('xeyeje3703@goldvester.com');
        await page.getByRole('textbox', {name:'Password'}).fill('123456');

        //clic boton login

        await page.getByRole('button',{name:'log in'}).click(  );
        //clic en un submenu de producto 
        await page.getByRole('link',{name:'Books'}).nth(1).click();

        //seleccion producto 
        await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();

        // clic en boton carrito de compra 
        await page.getByRole('link', { name: 'shopping cart', exact: true }).click();

        // check en los terminos 
        await page.locator('#termsofservice').click()

        //clic en boton checkout
        await page.getByRole('button', { name: 'Checkout' }).click();
        
        // llenar datos 
        /*
        await page.getByLabel('Country:').selectOption('Colombia');
        await page.getByRole('textbox', { name: 'City:' }).fill('bogota');
        await page.getByRole('textbox', { name: 'Address 1:' }).fill('calle 4 25');
        await page.getByRole('textbox', { name: 'Zip / postal code:' }).fill ('11111')
        await page.getByRole('textbox', { name: 'Phone number:' }). fill('3114981511')
        */

        //clic en continue
        await page.getByRole('button', { name: 'Continue' }).click();

       // seleccionar check recoger en tienda 
       await page.getByRole('checkbox', { name: 'In-Store Pickup' }).click();
       
       // clic en boton continuar 
       await page.getByRole('button', { name: 'Continue' }).click();

       // seleccionar metodo de pago 
       await page.getByRole('radio', { name: 'Credit Card Credit Card' }).click();

       // clic en boton continuar 
       await page.getByRole('button', { name: 'Continue' }).click();

       // llenar campos de la tarjera 
       await page.locator('#CreditCardType').selectOption('Visa');
       await page.getByRole('textbox', { name: 'Cardholder name' }).fill('Barbara Gordon');
       await page.getByRole('textbox', { name: 'Card number' }). fill ('4485564059489345');
       await page.getByLabel('Expiration date').selectOption('04');
       await page.locator('#ExpireYear').selectOption('2039');
       await page.getByRole('textbox', { name: 'Card code' }).fill('123')

       // clic en boton continuar 
       await page.getByRole('button', { name: 'Continue' }).click();

              // clic en boton confirmar 
       await page.getByRole('button', { name: 'Confirm' }).click();

       //validar compra exitosa "Your order has been successfully processed!"
       //await expect(page.getByRole('strong',{name:'Your order has been successfully processed!'})).toBeVisible();
       await expect(page.getByText('Your order has been successfully processed!')).toBeVisible();

       console.log('compra exitosa')


     // await expect(page.getByText('The product has been added to')).toBeVisible();




    
        


    }
);

