const test = (name, fn) => {
  dispatch({ type: "ADD_TEST", fn, name });
};

const global = {};

global["STATE_SYMBOL"] = {
  testBlock: [],
};

const dispatch = (event) => {
  const { fn, type, name } = event;
  switch (type) {
    case "ADD_TEST":
      const { testBlock } = global["STATE_SYMBOL"];
      testBlock.push({ fn, name });
      break;
  }
};

const expect = (actual) => ({
  toBe(expected) {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  },
});

const testPath = process.argv.slice(2)[0];
const code = fs.readFileSync(path.join(process.cwd(), testPath)).toString();
