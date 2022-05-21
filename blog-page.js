import navComponent from "../pages/components/nav-components";

class blogPage {
  get openBlog() {
    return browser.url("/blog");
  }

  get recentPost() {
    return $$("#recent-posts-5>ul>li");
  }

  get navComponent() {
    return navComponent;
  }
}

export default new blogPage();
