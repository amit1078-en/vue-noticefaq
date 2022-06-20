<template>
<div>
  <div class="notice-target-container" :project-id=projectid >  </div>
</div>
</template>
<script>

    if(!document.getElementById("noticefaq-js")){
        var s = document.createElement("script");
        s.src = "https://bundle.notice.studio/index.js";
        s.async = 1;
        s.id="noticefaq-js"
        document.getElementsByTagName("head")[0].appendChild(s);
    }
    if (!document.getElementById("noticefaq-css"))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = "noticefaq-css"; 
        link.rel  = 'stylesheet'; 
        link.type = 'text/css';
        link.href = 'https://bundle.notice.studio/index.css';
        head.appendChild(link);
    }	
export default
 {
    name: 'NoticeFaq',
    props: 
    {
       projectid : String 
    }
}
</script>