let spark=document.getElementById('spark');
      let skull=document.getElementById('skull');
      let mid=document.getElementById('mid');
      let front=document.getElementById('front');
      window.addEventListener('scroll', function(){
        let value = window.scrollY;
        spark.style.left = value * 0.25 + 'px';
        skull.style.top = value * 1.05 + 'px';
        mid.style.top = value * 0.5 + 'px';
        front.style.top = value * 0.5 + 'px';
      })
  
      var i = 0;
      var j = 0;
      var txt = 'Hello, Im Jordan...';
      var txt1 = 'adalah seorang Mahasiswa dari Universitas Ahmad Dahlan. Berasal dari Palembang, berumur 19 tahun, mempunyai hobi otomotif dan juga senang mempelajari hal hal baru.';
      var speed = 50;
      var speed1 = 100;
      
      function tulis() {
          if (i < txt.length) {
              document.getElementById("desc").innerHTML += txt.charAt(i);
              i++;
              setTimeout(tulis, speed1);
          }
      }
      function tulis1() {
          if (j < txt1.length) {
              document.getElementById("tls").innerHTML += txt1.charAt(j);
              j++;
              setTimeout(tulis1, speed);
          }
      }
      