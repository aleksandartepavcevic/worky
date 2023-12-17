import { MIN_PASSWORD, REQUIRED_FIELD, TYPE_EMAIL } from '@/constants/messages';
import test, { expect } from '@playwright/test';

test.describe('User login flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Login | Worky/);
    });

    test('user submits empty form', async ({ page }) => {
        const emailInput = await page.getByRole('textbox', {
            name: /email/i,
        });
        const passwordInput = await page.getByRole('textbox', {
            name: /password/i,
        });
        const submitBtn = await page.getByRole('button', {
            name: /sign in/i,
        });

        await expect(emailInput).toBeEmpty();
        await expect(passwordInput).toBeEmpty();

        await submitBtn.click();

        await expect(page.getByText(REQUIRED_FIELD)).toHaveCount(2);
    });

    test('user inputs an invalid email and password', async ({ page }) => {
        const emailInput = await page.getByRole('textbox', {
            name: /email/i,
        });
        const passwordInput = await page.getByRole('textbox', {
            name: /password/i,
        });
        const submitBtn = await page.getByRole('button', {
            name: /sign in/i,
        });

        await emailInput.fill('invalid email address');
        await passwordInput.fill('123');

        await submitBtn.click();

        await expect(page.getByText(TYPE_EMAIL)).toBeVisible();
        await expect(page.getByText(MIN_PASSWORD)).toBeVisible();
    });

    test('user inputs a valid email and password and gets an error from the server', async ({
        page,
    }) => {
        const emailInput = await page.getByRole('textbox', {
            name: /email/i,
        });
        const passwordInput = await page.getByRole('textbox', {
            name: /password/i,
        });
        const submitBtn = await page.getByRole('button', {
            name: /sign in/i,
        });

        // TODO: Find out how to mock server actions
        await emailInput.fill('playwrighttest@mail.com');
        await passwordInput.fill('123123');

        await submitBtn.click();

        await expect(submitBtn).toBeDisabled();

        const spinner = await page.getByRole('progressbar');

        await expect(spinner).toBeVisible();

        const alert = await page.getByRole('alert');
        const errorMessage = await alert.getByRole('heading', {
            name: /could not authenticate user\./i,
        });

        await expect(errorMessage).toBeVisible();
    });

    test('user inputs a valid email and password and gets successfully authenticated', async ({
        page,
    }) => {
        const emailInput = await page.getByRole('textbox', {
            name: /email/i,
        });
        const passwordInput = await page.getByRole('textbox', {
            name: /password/i,
        });
        const submitBtn = await page.getByRole('button', {
            name: /sign in/i,
        });

        await emailInput.fill('playwrighttest@mail.com');
        await passwordInput.fill('playwrighttest');

        await submitBtn.click();

        await expect(submitBtn).toBeDisabled();

        const spinner = await page.getByRole('progressbar');

        await expect(spinner).toBeVisible();

        await page.waitForURL('/dashboard');
        await expect(page).toHaveTitle(/Dashboard | Worky/);
    });
});
