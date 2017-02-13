var rewire = require('rewire');
var path = require('path');;
var gifsee = rewire(path.join(__dirname, '/gifsee.js'));
var gifsee_con = gifsee.__get__('gifsee');
// test('is gifsee defined', function () {
//     expect(x()).toBeDefined();
// });