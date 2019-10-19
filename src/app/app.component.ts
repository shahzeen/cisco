import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  counter = 0;
  turnPlayed = [];
  winner = [[0, 4, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

  reset(){
    this.turnPlayed = [];
    this.winner = [[0, 4, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];
    this.counter = 0;
  }

  play(index) {
    if (!this.turnPlayed[index] && this.counter < 9) {
      if (this.counter == 0 || this.counter % 2 == 0) {
        this.turnPlayed[index] = 'X';
        for (var i = 0; i < this.winner.length; i++) {
          var _index = this.winner[i].indexOf(index);
          if (_index !== -1) this.winner[i].splice(_index, 1);
        }
        this.counter += 1;
      }
      this.playComputer();
    }
  }


  playComputer() {
    for (var i = 0; i < this.winner.length; i++) {
      if (this.winner[i].length == 0) {
        setTimeout(function(){
          alert('user wins');
        },100)
        return false;
      }
    }
    var _ = this;
    var vacantSpaceCombi = this.winner;
    if (vacantSpaceCombi.length > 0) {
      var yTurn = vacantSpaceCombi.reduce(function (a, b) {
        return a.length <= b.length ? a : b;
      });
      var randomValue = yTurn[Math.floor(Math.random() * yTurn.length)];
      for (var i = 0; i < this.winner.length; i++) {
        var _index = this.winner[i].indexOf(randomValue);
        if (_index !== -1) this.winner.splice(this.winner.indexOf(this.winner[i]), 1);
      }
      this.turnPlayed[randomValue] = '0';
      this.counter += 1;
    }
  }
}