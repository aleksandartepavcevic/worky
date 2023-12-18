import {
    MIN_PASSWORD,
    PASSWORD_MATCH,
    REQUIRED_FIELD,
    TYPE_EMAIL,
} from '@/constants/messages';
import test, { expect } from '@playwright/test';

test.describe('User register flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/register');
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Register | Worky/);
    });

    test('user submits empty form', async ({ page }) => {
        const emailInput = await page.getByRole('textbox', {
            name: /email/i,
        });
        const passwordInput = await page.getByRole('textbox', {
            name: 'Password',
            exact: true,
        });
        const confirmPasswordInput = await page.getByRole('textbox', {
            name: 'Confirm password',
            exact: true,
        });
        const submitBtn = await page.getByRole('button', {
            name: /sign up/i,
        });

        await expect(emailInput).toBeEmpty();
        await expect(passwordInput).toBeEmpty();
        await expect(confirmPasswordInput).toBeEmpty();

        await submitBtn.click();

        await expect(page.getByText(REQUIRED_FIELD)).toHaveCount(3);
    });

    test('user inputs an invalid email, password and confirm password doesn`t match', async ({
        page,
    }) => {
        const emailInput = await page.getByRole('textbox', {
            name: /email/i,
        });
        const passwordInput = await page.getByRole('textbox', {
            name: 'Password',
            exact: true,
        });
        const confirmPasswordInput = await page.getByRole('textbox', {
            name: 'Confirm password',
            exact: true,
        });
        const submitBtn = await page.getByRole('button', {
            name: /sign up/i,
        });

        await emailInput.fill('invalid email address');
        await passwordInput.fill('123');
        await confirmPasswordInput.fill('12345');

        await submitBtn.click();

        await expect(page.getByText(TYPE_EMAIL)).toBeVisible();
        await expect(page.getByText(MIN_PASSWORD)).toBeVisible();
        await expect(page.getByText(PASSWORD_MATCH)).toBeVisible();
    });

    // test('user inputs a valid email, password and confirm password and gets successfull message', async ({
    //     page,
    // }) => {
    //     const emailInput = await page.getByRole('textbox', {
    //         name: /email/i,
    //     });
    //     const passwordInput = await page.getByRole('textbox', {
    //         name: 'Password',
    //         exact: true,
    //     });
    //     const confirmPasswordInput = await page.getByRole('textbox', {
    //         name: 'Confirm password',
    //         exact: true,
    //     });
    //     const submitBtn = await page.getByRole('button', {
    //         name: /sign up/i,
    //     });

    //     await emailInput.fill(process.env.PLAYWRIGHT_TEST_EMAIL as string);
    //     await passwordInput.fill(
    //         process.env.PLAYWRIGHT_TEST_PASSWORD as string,
    //     );
    //     await confirmPasswordInput.fill(
    //         process.env.PLAYWRIGHT_TEST_PASSWORD as string,
    //     );

    //     await submitBtn.click();

    //     await expect(submitBtn).toBeDisabled();

    //     const spinner = await page.getByRole('progressbar');

    //     await expect(spinner).toBeVisible();

    //     const alert = await page.getByRole('alert');
    //     const successMessage = await alert.getByRole('heading', {
    //         name: /you've successfully created an account\./i,
    //     });

    //     await expect(successMessage).toBeVisible();
    // });
});
