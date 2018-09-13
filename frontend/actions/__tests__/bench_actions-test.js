import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../bench_actions";
import * as ApiUtil from "../../util/bench_api_util";

import { testBenches } from "../../testUtil/bench_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  test("fetchBenches creates RECEIVE_BENCHES after fetching benches", () => {
    // const expectedActions = [
    //   {
    //     type:
    //     benches:
    //   }
    // ];
  });

  test("receiveBench should create an action to receive one bench", () => {

  });

  test("fetchBench creates RECEIVE_BENCH after fetching new bench", () => {
    const store = mockStore({ benches: {} });
    // You can call .getActions() on the store to return an array of actions
  });
});
