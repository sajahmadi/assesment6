
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

test('clicking the "add to due" button display the "player-duo"', async () => {
  await driver.sleep(2000);
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(2000);
  await driver.findElement(By.css(".bot-btn")).click();

  const playerDuo = await driver.findElement(By.id("player-duo"));

  const displayed = await playerDuo.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(2000);
});
test('click the "remove from duo" button goes back to the "choices"', async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(3000);
  await driver.findElement(By.css(".bot-btn")).click();
  // const backChoices= await driver.findElement(By.id('player-duo'))
  const selectRoboName = await driver
    .findElement(By.xpath('//div[@id="player-duo"]/div/h3'))
    .getText();

  await driver
    .findElement(By.xpath('//button[text()="Remove from Duo"]'))
    .click();
  await driver.sleep(3000);
  const returnRobo = await driver.findElement(
    By.xpath(
      '//div[@id="choices"]/div/h3[contains(text(), ' + selectRoboName + ")]"
    )
  );
  const displayed = await returnRobo.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(3000);
});

