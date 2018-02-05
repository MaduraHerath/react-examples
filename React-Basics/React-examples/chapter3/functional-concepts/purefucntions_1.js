// ------------------------impure function----------------------

// function Header(text){
//     let h1 = document.createElement('h1');
//     h1.innnerText = text;
//     document.body.appendChild(h1);
// }

// Header("Header() caused side effects");

// --------------------------pure function------------------

const Header = (props) =><h1>{props.title}</h1>

// pure function rules
// 1. The function should take in at least one argument.
// 2. The function should return a value or another function.
// 3. The function should not change or mutate any of its arguments.