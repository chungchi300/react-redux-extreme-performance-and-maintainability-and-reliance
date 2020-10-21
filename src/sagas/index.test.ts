import { delay } from "redux-saga/effects";
import { loadTransaction } from ".";

test("test saga", () => {
  const gen = loadTransaction();

  expect(gen.next().value).toMatchObject({
    payload: { action: { type: "transaction/fetch/pending" } },
  });
  expect(gen.next().value).toMatchObject(delay(1000));
  expect(gen.next().value).toMatchObject({
    payload: { action: { type: "transaction/fetch/fulfilled" } },
  });
});
