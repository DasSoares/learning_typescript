export default class Time {
  constructor() {}

  async sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
}

const time = new Time();

const main = async () => {
  console.log("Olá");
  await time.sleep(3);
  console.log("Mundo");
};

main();
