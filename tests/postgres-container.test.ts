import { StartedTestContainer, GenericContainer } from "testcontainers";

describe("PostgresContainer", () => {
    let container: StartedTestContainer;
  
    beforeAll(async () => {
        container = await new GenericContainer("postgres:12").start();
    }, 15000);
  
    afterAll(async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await container.stop();
    }, 15000);

    it("postgres container started", async () => {
        expect(container.getHost()).toBeDefined();
    }, 15000);
});
