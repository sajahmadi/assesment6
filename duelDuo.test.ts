
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking the Draw button displays the choices div", async () => {
  const drawButton = await driver.findElement(By.id("draw-button"));
  drawButton.click();

  // wait for the page to load
  await driver.sleep(1000);

  const choicesDiv = await driver.findElement(By.id("choices"));
  const displayed = await choicesDiv.isDisplayed();
  expect(displayed).toBe(true);
});

test('Clicking an "Add to Duo" button displays the player-duo div', async () => {
  const addToDuoButton = await driver.findElement(
    By.className("add-to-duo-button")
  );
  addToDuoButton.click();

  // wait for page to load
  await driver.sleep(1000);

  const playerDuoDiv = await driver.findElement(By.id("player-duo"));
  const displayed = await playerDuoDiv.isDisplayed();
  expect(displayed).toBe(true);
});
