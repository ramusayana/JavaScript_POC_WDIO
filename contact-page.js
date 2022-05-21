import navComponent from "../pages/components/nav-components";

class contactPage {
  get openContact() {
    return browser.url("/");
  }

  get contactBro() {
    return $("//span[text()='Contact']");
  }

  get firstName() {
    return $("#wpforms-400-field_0");
  }

  get Email() {
    return $('[id="wpforms-400-field_1"]');
  }

  get message() {
    return $('[id="wpforms-400-field_2"]');
  }

  get submit() {
    return $('[id="wpforms-400"]');
  }

  get navComponent() {
    return navComponent;
  }

  async submitForm(name, email, message) {
    await this.firstName.addValue(name);
    await this.Email.addValue(email);
    await (await this.message).setValue(message);
  }
}

export default new contactPage();
