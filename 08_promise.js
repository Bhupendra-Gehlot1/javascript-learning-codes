const promiseOne = new Promise((resolve, reject) => {
  let flag = true;
  if (flag) {
    setTimeout(() => {
      console.log("timeout");
      resolve({ user: "Bhupendra", email: "bhupendragehlotatwork@gmail.com" });
    }, 1000);
  } else {
    reject("Error is Back");
  }
});

promiseOne
  .then((data) => {
    return data.email;
  })
  .then((finalData) => {
    console.log(finalData);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((final) => {
    console.log("all done");
  });

const promiseTwo = new Promise((resolve, reject) => {
  let flag = true;
  if (flag) {
    setTimeout(() => {
      console.log("timeout-2");
      resolve({ user: "BhupendraGehlot", email: "bkg@gmail.com" });
    }, 1000);
  } else {
    reject("Error is Back2");
  }
});

async function consumePromiseTwo() {
  try {
    const response = await promiseTwo;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseTwo();
