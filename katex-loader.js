(function(){
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
  document.head.appendChild(link);

  var katexScript = document.createElement('script');
  katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
  katexScript.onload = function(){
    var autoRender = document.createElement('script');
    autoRender.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js';
    autoRender.onload = function(){
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ]
      });
    };
    document.head.appendChild(autoRender);
  };
  document.head.appendChild(katexScript);
})();
