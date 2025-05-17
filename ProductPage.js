class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async isFreeShippingAvailable() {
        return await this.page.locator('text=Free Shipping').isVisible();
    }
}

module.exports = ProductPage;