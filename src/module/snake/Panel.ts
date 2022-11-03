class Panel {
   // score和level用来记录分数和等级
   score:number = 0;
   level:number = 1;

   // 分数和等级所在的元素，在构造函数中进行初始化
//    scoreEle: HTMLElement;
//    levelEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分时升级
    upScore: number;

   constructor(maxLevel: number = 10, upScore: number = 10) {
    //    this.scoreEle = document.getElementById('score')!;
    //    this.levelEle = document.getElementById('level')!;
       this.maxLevel = maxLevel;
       this.upScore = upScore;
   }

   addScore() {
    // 使分数自增
    this.score++
    // 判断分数是多少
    if (this.score % this.upScore === 0) {
        this.levelUp();
    }
    console.log(`此时的分数${this.score}`);
    
}

    // 提升等级的方法
    levelUp() {
    if (this.level < this.maxLevel) {
       this.level++
    }
    }
}
export default Panel;