// chmod 755 functionDeclaration.js
// osascript -l JavaScript functionDeclaration.js

function namedFunc(message) {
  console.log(message)
}
const arrowFunc = (message) => {
  console.log(message)
}

const users = {
  hoge: 'hassy'
}

const getUsername = (userId) => users[userId];

const oneLineArrowFunc = (message) => console.log(message);

namedFunc('これは名前付き関数です')
arrowFunc('これはアロー関数です')
oneLineArrowFunc('これは一行で書いたアロー関数です')

const username = getUsername('hoge')
console.log(username)
