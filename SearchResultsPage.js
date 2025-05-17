class SearchResultsPage {
    constructor(page) {
        this.page = page;
    }

    async applyBrandFilter(brand) {
        await this.page.locator(`label:has-text("${brand}")`).first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async applyPriceFilter(min, max) {
        await this.page.fill('input[placeholder="Min"]', String(min));
        await this.page.fill('input[placeholder="Max"]', String(max));
        await this.page.click('button:has-text("Apply")');
        await this.page.waitForLoadState('networkidle');
    }

    async getProductCount() {
        await this.page.waitForSelector('.gridItem--Yd0sa');
        const items = await this.page.$$('.gridItem--Yd0sa');
        return items.length;
    }

    async clickOnFirstProduct() {
        await this.page.locator('.gridItem--Yd0sa').first().click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = SearchResultsPage;