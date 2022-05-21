//Automation Bro - Begin Your Test Automation Journey Today
//https://automationbro.com/

import homePage from "../pages/home-page";
import Homepage from "../pages/home-page";

describe("Home", () => {
  it.only("OpenURL & assert title", async () => {
    //open url

    beforeEach(async () => {
      console.log("runs before each test");
    });
    await Homepage.open();

    // Assert the title

    await expect(browser).toHaveTitle(
      "Automation Bro - Begin Your Test Automation Journey Today"
    );
  });
  it("OpenURL & Click", async () => {
    //open url

    // await Homepage.open();

    await homePage.btnabout().click();

    // Assert the title

    await expect(browser).toHaveTitle(
      "About Me - Dilpreet Johal | Automation Bro"
    );
  });

  it("OpenAboutpage & assert URL", async () => {
    //open url

    await browser.url("https://automationbro.com/About/");

    // Assert the url

    await expect(browser).toHaveUrl("https://automationbro.com/About/");
  });

  it("URL that contains a value.", async () => {
    //open url

    // await browser.url("https://automationbro.com/");

    //click the blog
    let elm = await $('//span[text()="Blog"]');
    elm.click();

    // Assert the urlcontains

    await expect(browser).toHaveUrlContaining("blog");
  });
  it("clicklink & no blog", async () => {
    //open url

    await browser.url("https://automationbro.com/");

    //click the blog
    let elm = await $('a[class="custom-logo-link"]');
    elm.click();

    // Assert the urlcontains

    await expect(browser).not.toHaveUrlContaining("blog");
  });

  it("getTextfunction", async () => {
    //open url

    // await browser.url("https://automationbro.com/");

    //click the blog
    await $('//span[text()="Blog"]').click();
    //
    const headerelm = await $(
      '//*[@id="post-1568"]/div[1]/div[2]/header[1]/h2[1]/a[1]'
    );

    const headertext = await headerelm.getText();

    // two assertions
    await expect(headertext).toEqual("Selenium 4.0 — Major Changes");
    await expect(headerelm).toHaveText("Selenium 4.0 — Major Changes");
  });
});
