const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');
const ProductPage = require('../pages/ProductPage');

test('Daraz search, brand filter, price filter, and check free shipping', async ({ page }) => {
    const home = new HomePage(page);
    const search = new SearchResultsPage(page);
    const product = new ProductPage(page);

    await home.navigate();
    await home.searchItem('electronics');
    await search.applyBrandFilter('Headphones & Headsets');
    await search.applyPriceFilter(500, 5000);

    const count = await search.getProductCount();
    expect(count).toBeGreaterThan(0);

    await search.clickOnFirstProduct();

    const isFreeShipping = await product.isFreeShippingAvailable();
    expect(isFreeShipping).toBeTruthy();
});