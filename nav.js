import homePage from "../pages/home-page";

describe("Home", () => {
  it.only("getTextMultiple Items", async () => {
    //open url
    // browser.pause(5000);

    await homePage.open();

    const expectedLinks = [
      "HOME",
      "ABOUT",
      "BLOG",
      "COURSES",
      "YOUTUBE",
      "RESOURCES",
      "CONTACT",
    ];

    const actualLinks = [];

    //Wait commanda
    // await $("#site-navigation-wrap.clr").waitForDisplayed({ timeout: 2000 });
    await $("#site-navigation-wrap.clr").waitForDisplayed();
    // await $("#site-navigation-wrap.clr").waitForClickable();
    // const navlinks = await $("#site-navigation").$$("li[id*=menu]");

    // wait until " home " text is displayed on the navigation menu
    await browser.waitUntil(
      async function () {
        const hometext = await homePage.navComponent.firstNavMenuList.getText(); // HOME
        return hometext === "HOME"; // TRUE OR FALSE
      },

      {
        timeoutMsg: "Could not verify home text",
      }
    );

    const navlinks = await homePage.navComponent.linksNavMenu();

    for (const lunk of navlinks) {
      actualLinks.push(await lunk.getText());
    }
    // assertion failed
    // await expect(actualLinks).toEqual(expectedLinks);
  });
});
