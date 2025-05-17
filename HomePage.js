class HomePage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.daraz.pk/');
    }

    async searchItem(product) {
        await this.page.fill('input[name="q"]', product);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = HomePage;