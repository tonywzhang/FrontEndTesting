const bench1 = { id: 1, description: "best!", lat: 1.2, lng: 3.4 };
const bench2 = { id: 2, description: "great!", lat: 5.6, lng: 7.8 };

export const newBench = {id: 3, description: "alright", lat: 2.3, lng: 5.4 };

export const testBenches = {
  [bench1.id]: bench1,
  [bench2.id]: bench2,
};
