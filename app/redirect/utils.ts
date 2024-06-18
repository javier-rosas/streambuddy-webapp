export const checkExtensionInstalled = async () => {
  const message = {
    type: "check_extension_installed",
    fromContentScript: false,
  };

  const response = await new Promise((resolve) => {
    const listener = (event: any) => {
      if (
        event.source === window &&
        event.data &&
        event.data.type === "check_extension_installed" &&
        event.data.fromContentScript
      ) {
        window.removeEventListener("message", listener);
        resolve(event.data.extensionInstalled);
      }
    };
    window.addEventListener("message", listener);

    // Post message to the content script
    window.postMessage(message, "*");

    // Set a timeout to resolve the promise if no response is received
    setTimeout(() => {
      window.removeEventListener("message", listener);
      resolve(false); // Resolve with false if no response is received
    }, 1000); // 1 second timeout
  });

  if (response) {
    console.log("Extension is installed");
    return true;
  } else {
    console.log("Extension is not installed");
    return false;
  }
};

export const checkUserIsLoggedIn = async () => {
  const message = {
    type: "check_user_logged_in",
    fromContentScript: false,
  };

  const response = await new Promise((resolve) => {
    const listener = (event: any) => {
      if (
        event.source === window &&
        event.data &&
        event.data.type === "check_user_logged_in" &&
        event.data.fromContentScript
      ) {
        window.removeEventListener("message", listener);
        resolve(event.data.userLoggedIn);
      }
    };
    window.addEventListener("message", listener);

    // Post message to the content script
    window.postMessage(message, "*");

    // Set a timeout to resolve the promise if no response is received
    setTimeout(() => {
      window.removeEventListener("message", listener);
      resolve(false); // Resolve with false if no response is received
    }, 1000); // 1 second timeout
  });

  if (response) {
    console.log("User is logged in");
    return true;
  } else {
    console.log("User is not logged in");
    return false;
  }
};
