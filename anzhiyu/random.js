var posts=["2024/07/28/7月28日巅峰赛-均分1450/","2024/06/29/点评新诸神/","2024/05/01/你的回溯不要钱啊/","2024/08/08/巅峰赛真的公平吗？/","2024/05/01/ut-传说之下同人/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };