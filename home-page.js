import navComponent from "./components/nav-components";

class Homepage {
  open() {
    return browser.url("/");
  }

  get btnabout() {
    return $('//span[text()="About"]');
  }

  get navComponent() {
    return navComponent;
  }
}
export default new Homepage();
