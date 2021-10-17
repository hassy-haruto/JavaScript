// chmod 755 variablescope.js
//　osascript -l JavaScript variablescope.js

const testScope = (scope) => {
  if (scope === 'function') {
    var functionScope = '関数スコープ内ならどこからでも参照できます'
  }　else if (scope === 'block') {
    let blockScope = 'ブロックスコープ内でしか参照できません'
    console.log(blockScope)
  }
  console.log(functionScope)
}

testScope('function');

// 実行↓
// 関数スコープ内ならどこからでも参照できます

