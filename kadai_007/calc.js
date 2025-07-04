//変数numの定義
let num = 60;

//変数が１５の倍数nのとき
if (num % 15 == 0) {
  console.log('３と５の倍数です')
}

//変数が５の倍数のとき
else if (num % 5 == 0) {
  console.log('５の倍数です')
}

//変数が３の倍数のとき
else if (num % 3 == 0) {
  console.log('３の倍数です')
}

//いずれにも当てはまらない場合
else {
  console.log(num)
}