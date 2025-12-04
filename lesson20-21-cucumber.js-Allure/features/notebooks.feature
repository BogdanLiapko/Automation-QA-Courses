Feature: Rozetka Notebooks Page tests

  Background:
    Given the user open Rozetka Notebooks page

  Scenario: Catalog loads and displays products
    Then the first product tile should be visible

  Scenario: Open first product
    When the user open the first product
    Then the user should see the product details page
