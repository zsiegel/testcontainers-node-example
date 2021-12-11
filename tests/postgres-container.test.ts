import { StartedTestContainer, GenericContainer, Wait } from "testcontainers";


describe("PostgresContainer", () => {
    let container: StartedTestContainer;

    beforeAll(async () => {
        container = await new GenericContainer("postgres:12")
          .start();
    }, 30000);
  
    afterAll(async () => {
        await container.stop();
    }, 30000);

    it("postgres container started", async () => {
        expect(container.getHost()).toBeDefined();
    }, 30000);
});
