import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 基础类型

let isDone: boolean = true; // 布尔值
let decLiteral: number = 6; // 数值
let name: string = 'liuyong'; // 字符
let list: Array<any> = [1, '2']; // 数组
let x: [number, string] = [10, 'guo']; // 元组
enum color { red, blue, green }; // 枚举
let c: color = color.blue;

// 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
// 你可能认为 Object有相似的作用，就像它在其它语言中那样。
// 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
let any: any = 4; // 任意类型
console.log(any.toFixed(2));

function fn(): void { // void类型 表示没有返回值
  console.log('void');
}

let n: null = null; // null类型
let u: undefined = undefined; // undefined类型
let lh: string | null | undefined = '联合类型';// 联合类型

function nv(): never { // never类型
  throw Error('never')
}

let obj: object = {}; // object类型 表示非原始类型  object和Object效果并不一致

let len: number = (list as Array<number>).length; // 断言
let strLength: number = (name as string).length; // 断言

// 接口
interface labelValue {
  readonly label: string, // 接口属性 // 只读属性
  color?: string, // 接口可选属性
}

function printLabel(labelObj: labelValue): void {
  console.log(labelObj.label);
}

printLabel({ label: 'label' });

let onlyreadlist: ReadonlyArray<number> = [1, 2, 3]; // 只读数组



class App extends Component {
  greeting: string;
  constructor(props: object) {
    super(props);
    this.greeting = 'greeting';
  }

  componentDidMount() {
    console.log(this.greeting);
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }

}

export default App;
