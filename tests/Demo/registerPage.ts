import { Locator , Page } from 'playwright';
import { expect } from 'playwright/test';

export class registerPage { 
   readonly page: Page;

  

   readonly NameLabel: Locator;
   readonly firstNameTextBox: Locator;

    

    constructor(page: Page) {
        this.page = page;

        
        this.NameLabel = page.locator('label', { hasText: 'Name' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        
    }       

    async gotoUrl() {
        
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

}

