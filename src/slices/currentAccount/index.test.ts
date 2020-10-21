import reducers from ".";
import { setCurrentAccountId } from ".";
test("test reducers", () => {
  //the magic of Immer library!
  expect(
    reducers({ selectedId: "undefined" }, setCurrentAccountId("t1"))
  ).toMatchObject({ selectedId: "t1" });
});
