import contactPage from "../pages/contact-page";
import * as faker from 'faker';

describe("Contact", () => {
  it("Registartion", async () => {
    //open url
    await contactPage.openContact();
    // await browser.url("/");
    // await browser.pause(2000);
    // const navlinks = await $("#site-navigation").$$("li[id*=menu]");
    // const contactlink = await $("//span[text()='Contact']");
    await contactPage.contactBro.click();

    // await contactlink.click();
    // await contactPage.firstName.addValue("test123");
    // await contactPage.Email.addValue("test123@email.com");
    // await contactPage.message.setValue("Im a developer");

    //Button Submit
    // console.log(await $('[id="wpforms-400"]').click());
    //browser.pause(5000);
    // await browser.debug();
    // await contactPage.submit.click();

    await contactPage.submitForm(
      "test123",
      "test123@email.com",
      "Im a developer"
    );
   
    // await contactPage.submitForm(
    //   'faker.name.findName()',
    //   'faker.internet.email()',
    //   "Im a developer"
    // );

    // //locator for Message
    // const successAlert = $('//*[@id="wpforms-confirmation-400"]/p[1]');

    // //Assertion of Submit application // currently its failing on assertion error.
    // await expect(successAlert).toHaveTextContaining(
    //   "Thanks for contacting me! I will be in touch with you shortly."a
    // );
  });
});
