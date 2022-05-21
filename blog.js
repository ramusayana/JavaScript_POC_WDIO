import blogPage from "../pages/blog-page";

describe("Blog", () => {
  it("Get the list", async () => {
    // await browser.url("/blog");
    await blogPage.openBlog();

    // get the recent post list of elements
    const recentpostlist = await blogPage.recentPost();

    //loop through the list and assert the text length

    for (const post of recentpostlist) {
      const text = await post.getText();
      //   console.log(text);
      await expect(text.length).toBeGreaterThan(1);
    }

    // assert the total length
    await expect(recentpostlist).toHaveLength(5);
  });
});
