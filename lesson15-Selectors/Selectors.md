## Пошук товару

### Кроки:
1. Відкрити головну сторінку.
2. Поле пошуку  
   - **CSS:** `input[name="search"]`  
   - **XPath:** `//input[@name='search']`
3. Ввести “ноутбук”.
4. Натиснути кнопку пошуку  
   - **CSS:** `button.button_color_green`  
   - **XPath:** `//button[contains(@class, 'button_color_green')]`
5. Сторінка з назвою "Ноутбуки" відображається
   - **CSS:** `h1.catalog-heading`
   - **XPath:** `//h1[contains(@class, 'catalog-heading')]`

## Додавання товару в кошик

### Кроки:
1. Відкрити сторінку товару.
2. Кнопка “Купити”  
   - **CSS:** `button.buy-button`  
   - **XPath:** `//button[contains(@class, 'buy-button')]`
3. Натиснути кнопку.
4. Перевірити що модальне вікно "Кошик" відображається
   - **CSS:** `rz-modal-layout.modal-layout`
   - **XPath:** `//rz-modal-layout[contains(@class, 'modal-layout')]`
5. Кнопка "Оформити замовлення"
   - **CSS:** `a.cart-receipt__submit`
   - **XPath:** `//a[contains(@class, 'cart-receipt__submit') and contains(., 'Оформити замовлення')]`