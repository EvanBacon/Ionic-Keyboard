import { Component } from '@angular/core';
// import $ from "jquery";

/*
Generated class for the IosKeyboard component.

See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
for more info on Angular 2 Components.
*/
@Component({
  selector: 'ios-keyboard',
  templateUrl: 'ios-keyboard.html'
})
export class IosKeyboardComponent {

  is_alphabetical = true;

  is_numeric = false;

  is_uppercase = false;
  // lowercase = [
  //   ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  //   ['a','s','d','f','g','h','j','k','l'],
  //   ['&#8679;', 'z','x','c','v','b','n','m','&#9003;']
  // ]

  keys = {
    numeric: '123',
    alphabetical: 'ABC',
    symbol: '#+=',
    lowercase: '&#8679;',
    uppercase: '&#11014;',
    backspace: '&#9003;'
  }



  numeric_keys = [
    [
      {key: '1', color: 'white'},
      {key: '2', color: 'white'},
      {key: '3', color: 'white'},
      {key: '4', color: 'white'},
      {key: '5', color: 'white'},
      {key: '6', color: 'white'},
      {key: '7', color: 'white'},
      {key: '8', color: 'white'},
      {key: '9', color: 'white'},
      {key: '0', color: 'white'}
    ],

    [
      {key: '-', color: 'white'},
      {key: '/', color: 'white'},
      {key: ':', color: 'white'},
      {key: ';', color: 'white'},
      {key: '(', color: 'white'},
      {key: ')', color: 'white'},
      {key: '$', color: 'white'},
      {key: '&', color: 'white'},
      {key: '@', color: 'white'},
      {key: '"', color: 'white'}
    ],
    [
      {key: this.keys.symbol, color: 'gray'},
      {key: '.', color: 'white'},
      {key: ',', color: 'white'},
      {key: '?', color: 'white'},
      {key: '!', color: 'white'},
      {key: "'", color: 'white'},
      {key: this.keys.backspace, color: 'gray'}
    ],
    [
      {key: this.keys.alphabetical, color: 'gray'},
      {key: 'space', color: 'white'},
      {key: 'return', color: 'gray'}
    ]
  ];


  symbol_keys = [
    [
      {key: '[', color: 'white'},
      {key: ']', color: 'white'},
      {key: '{', color: 'white'},
      {key: '}', color: 'white'},
      {key: '#', color: 'white'},
      {key: '%', color: 'white'},
      {key: '^', color: 'white'},
      {key: '*', color: 'white'},
      {key: '+', color: 'white'},
      {key: '=', color: 'white'}
    ],

    [
      {key: '_', color: 'white'},
      {key: '\\', color: 'white'},
      {key: '|', color: 'white'},
      {key: '~', color: 'white'},
      {key: '<', color: 'white'},
      {key: '>', color: 'white'},
      {key: '€', color: 'white'},
      {key: '£', color: 'white'},
      {key: '¥', color: 'white'},
      {key: '•', color: 'white'}
    ],
    [
      {key: this.keys.numeric, color: 'gray'},
      {key: '.', color: 'white'},
      {key: ',', color: 'white'},
      {key: '?', color: 'white'},
      {key: '!', color: 'white'},
      {key: "'", color: 'white'},
      {key: this.keys.backspace, color: 'gray'}
    ],
    [
      {key: this.keys.alphabetical, color: 'gray'},
      {key: 'space', color: 'white'},
      {key: 'return', color: 'gray'}
    ]
  ];



  uppercase_keys = [
    [
      {key: 'Q', color: 'white'},
      {key: 'W', color: 'white'},
      {key: 'E', color: 'white'},
      {key: 'R', color: 'white'},
      {key: 'T', color: 'white'},
      {key: 'Y', color: 'white'},
      {key: 'U', color: 'white'},
      {key: 'I', color: 'white'},
      {key: 'O', color: 'white'},
      {key: 'P', color: 'white'}
    ],

    [
      {key: 'A', color: 'white'},
      {key: 'S', color: 'white'},
      {key: 'D', color: 'white'},
      {key: 'F', color: 'white'},
      {key: 'G', color: 'white'},
      {key: 'H', color: 'white'},
      {key: 'J', color: 'white'},
      {key: 'K', color: 'white'},
      {key: 'L', color: 'white'}
    ],
    [
      {key: this.keys.uppercase, color: 'gray'},
      {key: 'Z', color: 'white'},
      {key: 'X', color: 'white'},
      {key: 'C', color: 'white'},
      {key: 'V', color: 'white'},
      {key: 'B', color: 'white'},
      {key: 'N', color: 'white'},
      {key: 'M', color: 'white'},
      {key: this.keys.backspace, color: 'gray'}
    ],
    [
      {key: this.keys.numeric, color: 'gray'},
      {key: 'space', color: 'white'},
      {key: 'return', color: 'gray'}
    ]
  ];

  lowercase_keys = [
    [
      {key: 'q', color: 'white'},
      {key: 'w', color: 'white'},
      {key: 'e', color: 'white'},
      {key: 'r', color: 'white'},
      {key: 't', color: 'white'},
      {key: 'y', color: 'white'},
      {key: 'u', color: 'white'},
      {key: 'i', color: 'white'},
      {key: 'o', color: 'white'},
      {key: 'p', color: 'white'}
    ],

    [
      {key: 'a', color: 'white'},
      {key: 's', color: 'white'},
      {key: 'd', color: 'white'},
      {key: 'f', color: 'white'},
      {key: 'g', color: 'white'},
      {key: 'h', color: 'white'},
      {key: 'j', color: 'white'},
      {key: 'k', color: 'white'},
      {key: 'l', color: 'white'}
    ],
    [
      {key: this.keys.lowercase, color: 'gray'},
      {key: 'z', color: 'white'},
      {key: 'x', color: 'white'},
      {key: 'c', color: 'white'},
      {key: 'v', color: 'white'},
      {key: 'b', color: 'white'},
      {key: 'n', color: 'white'},
      {key: 'm', color: 'white'},
      {key: this.keys.backspace, color: 'gray'}
    ],
    [
      {key: this.keys.numeric, color: 'gray'},
      {key: 'space', color: 'white'},
      {key: 'return', color: 'gray'}
    ]
  ];

  current_keys = this.lowercase_keys;

  constructor() {

  }

  select(symbol) {
    console.log('Got a ', symbol);

    switch (symbol) {
      case this.keys.lowercase:
      this.current_keys = this.lowercase_keys;
      this.is_alphabetical = true;
      break;
      case this.keys.uppercase:
      this.current_keys = this.uppercase_keys;
      this.is_alphabetical = true;
      break;
      case this.keys.numeric:
      this.current_keys = this.numeric_keys;
      this.is_alphabetical = false;
      break;
      case this.keys.symbol:
      this.current_keys = this.symbol_keys;
      this.is_alphabetical = false;
      break;
      case this.keys.alphabetical:
      this.current_keys = this.lowercase_keys;
      this.is_alphabetical = true;
      break;
      default:
      document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + symbol;
      break;
    }

    if (symbol == this.keys.lowercase) {
      this.is_uppercase = true;
      this.current_keys = this.uppercase_keys;
    } else if (symbol == this.keys.uppercase) {
      this.current_keys = this.lowercase_keys;
    } else if (symbol == this.keys.numeric) {
      this.current_keys = this.numeric_keys;
    }
  }




  ngAfterViewInit() {
  }
}
