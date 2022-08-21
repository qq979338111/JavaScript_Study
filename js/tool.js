








function getStyle (obj, name) {
  return getComputedStyle(obj, null)[name]
}


/* 
     尝试创建一个可以执行移动的函数  
         // 参数：
               -obj:要执行动画的对象
               -attr:要执行动画的样式：left，top，width，height。。
               -target:执行动画的目标位置
               -speed:移动的速度（正数向右，负数向左）
               -callback:回调函数，这个函数将会在动画执行完毕的时候执行
 */

function move (obj, attr, target, speed, callback) {


  clearInterval(obj.timer)
  // box1.style.left = '200px'

  // 获取当前元素的位置
  var current = parseInt(getStyle(obj, attr))
  if (current > target) {
    speed = -speed
  }

  obj.timer = setInterval(function () {

    // 获取原来box1的left 值
    var oldValue = parseInt(getStyle(obj, attr))
    // 在旧值的基础上 加/减
    var newValue = oldValue + speed
    if (speed > 0 && newValue > target) {
      newValue = target
    } else if (speed < 0 && newValue < target) {
      newValue = target
    }
    // 将新值设置给box1
    obj.style[attr] = newValue + 'px'

    if (newValue == target) {
      clearInterval(obj.timer)
      callback && callback()
    }


  }, 30);

}