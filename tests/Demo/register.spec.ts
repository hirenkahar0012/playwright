import { test,expect } from '@playwright/test';
import { registerPage } from './registerPage';


test.describe('Register Page', () => {
    let register: registerPage;
    test.beforeEach(async ({ page }) => {
        register = new registerPage(page);
        await register.gotoUrl();
    });

 
    test('Verify Full Name Label', async () => {
        await expect(register.NameLabel).toBeVisible();
        await expect(register.NameLabel).toHaveText('Name');
    });

    test('Verify First Name Text Box', async () => {
        await expect(register.firstNameTextBox).toBeVisible();
        await expect(register.firstNameTextBox).toHaveAttribute('placeholder', 'First Name');
        await register.firstNameTextBox.fill('John');
        await expect(register.firstNameTextBox).toHaveValue('John');
    });

});
