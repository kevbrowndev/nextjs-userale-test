const UserAle = require("../node_modules/flagon-userale/build/userale-2.1.1");

const changeMe = "me";
userale.options({
    "userId": changeMe,
    "url": "http://localhost:8000/",
    "version": "next",
    "logDetails": false,
    "sessionID": "this one"
});

export default function () {
    return null;
}