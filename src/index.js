// import _ from 'lodash';
import './style.css';
// import MyImage from './icon.png';
// import data from './mock/data.xml';
// import printMe from './print.js';
import { cube } from './math.js';

function component() {
  var element = document.createElement('div');
  // var btn = document.createElement('button');

  // // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);
  element.innerHTML = [
       'Hello webpack!',
       '5 cubed is equal to ' + cube(5)   
      ].join('\n\n');
    
  return element;
}
document.body.appendChild(component());
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');

  })
  module.hot.accept();
}
  // if (module.hot) {
    // module.hot.dispose( function(data) { console.log('dispose',data)
    // console.log('Accepting the updated printMe11 module!');
    // function component() {
    //   var element = document.createElement('div');
    //   var btn = document.createElement('button');

    //   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //   element.classList.add('hello');

    //   btn.innerHTML = 'Click me and check the console!';
    //   btn.onclick = printMe;

    //   element.appendChild(btn);
    //   return element;
    // }
    // document.body.appendChild(component());
  // })
//   module.hot.accept(()=>{console.log('accept')})
// }