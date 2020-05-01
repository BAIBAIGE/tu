
<script>
  // 计算页面的实际高度，iframe自适应会用到
  function calcPageHeight(doc) {
      var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
      var height  = Math.max(cHeight, sHeight)
      return height
  }
  //根据ID获取iframe对象
  var ifr = document.getElementById('main')
  ifr.onload = function() {
  	  //解决打开高度太高的页面后再打开高度较小页面滚动条不收缩
  	  ifr.style.height='0px';
      var iDoc = ifr.contentDocument || ifr.document
      var height = calcPageHeight(iDoc)
      if(height < 850){
      	height = 850;
      }
      ifr.style.height = height + 'px'
  }
</script>
