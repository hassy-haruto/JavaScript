// chmod 755 variableAndConstant.js
// osascript -l JavaScript variableAndConstant.js

let mutableText = 'let変更前';
mutableText = 'let変更後';
console.log(mutableText);

const immutableText = 'const変更前';
// immutableText =  'const変更後';
console.log(immutableText)

const mutableArray =[1, 2, 3];
mutableArray.push(4);
console.log(mutableArray)

const mutableObject ={id: 'hoge'}
mutableObject['name'] = 'bar'
console.log(JSON.stringify(mutableObject))
//memo: 中身を文字列にしないとobject Objectエラーが発生した
// https://qiita.com/camomile_cafe/items/d4e8ea250bf0ac521c2d
