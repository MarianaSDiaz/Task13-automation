describe('test wikipedia', () => {
    it('Open Google page', () => {
        browser.url('https://www.google.com/');
        browser.pause(1000);
    });

    it('Search Wikipedia and click the first link', () => {
        let input = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        input.addValue('Wikipedia');
        browser.keys('Enter');
    });

    it('Enter Wikipedia and verify the url', () => {
        let wikipedia = $('#rso > div:nth-child(1) > div:nth-child(1) > div > div.tF2Cxc > div.yuRUbf > a');
        wikipedia.click();
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });
});