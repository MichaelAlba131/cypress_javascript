import { Before, After } from '@cucumber/cucumber';
import allure from '@shelex/cypress-allure-plugin';

Before(() => {
  allure.startStep('Before');
});

After(() => {
  allure.endStep('After');
});

