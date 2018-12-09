window.onscroll=function(){

  var distance=window.pageXOffset;

  console.log(distance);


  if(distance > 600 ){
    document.getElementById('burner').style.top="200px";
  }else{
    document.getElementById('burner').style.top="-700px";
  }


  if(distance > 2486 ){
      document.getElementById('butter3').style.top="125px";
    }else{
      document.getElementById('butter3').style.top="-700px";
    }

  if(distance > 1675 ){
      document.getElementById('butter').style.top="275px";
    }else{
      document.getElementById('butter').style.top="-700px";
    }

  if(distance > 2010 ){
      document.getElementById('butter2').style.top="220px";
    }else{
      document.getElementById('butter2').style.top="-700px";
    }

  if(distance > 1271 ){
      document.getElementById('lines').style.left="1800px";
    }else{
      document.getElementById('lines').style.left="1400px";
    }

  if(distance > 1271 ){
      document.getElementById('lines').style.opacity="1";
    }else{
      document.getElementById('lines').style.opacity="0";
    }

  if(distance > 1271 ){
      document.getElementById('closeup').style.left="1910px";
    }else{
      document.getElementById('closeup').style.left="1400px";
    }

  if(distance > 1271 ){
      document.getElementById('closeup').style.opacity="1";
    }else{
      document.getElementById('closeup').style.opacity="0";
    }

  if(distance > 1275 ){
      document.getElementById('flame1').style.top="160px";
    }else{
      document.getElementById('flame1').style.top="-100px";
    }

  if(distance > 1275 ){
      document.getElementById('flame2').style.top="105px";
    }else{
      document.getElementById('flame2').style.top="-100px";
    }

  if(distance > 1275 ){
      document.getElementById('flame3').style.top="50px";
    }else{
      document.getElementById('flame3').style.top="-100px";
    }

  if(distance > 2160 ){
      document.getElementById('knife').style.top="110px";
    }else{
      document.getElementById('knife').style.top="-500px";
    }

  if(distance > 2486 ){
        document.getElementById('pan').style.top="145px";
    }else{
        document.getElementById('pan').style.top="-700px";
    }

  if(distance > 2486 ){
        document.getElementById('pan').style.top="145px";
    }else{
        document.getElementById('pan').style.top="-700px";
    }

  if(distance > 3414 ){
      document.getElementById('egg').style.top="20px";
    }else{
      document.getElementById('egg').style.top="-500px";
    }

  if(distance > 3640 ){
      document.getElementById('cracked-egg').style.left="4590px";
    }else{
      document.getElementById('cracked-egg').style.left="4490px";
    }

  if(distance > 3640 ){
      document.getElementById('cracked-egg').style.opacity="1";
    }else{
      document.getElementById('cracked-egg').style.opacity="0";
    }

  if(distance > 4425 ){
      document.getElementById('lid').style.top="75px";
    }else{
      document.getElementById('lid').style.top="-500px";
    }

  if(distance > 5031 ){
      document.getElementById('time').style.top="100px";
    }else{
      document.getElementById('time').style.top="-500px";
    }

  if(distance > 6662 ){
      document.getElementById('plate').style.top="215px";
    }else{
      document.getElementById('plate').style.top="-300px";
    }

  if(distance > 6662 ){
      document.getElementById('finalegg').style.top="235px";
    }else{
      document.getElementById('finalegg').style.top="-300px";
    }
}
