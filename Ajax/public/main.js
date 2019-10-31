console.log("fs.readFileSync你好");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log("succeed");
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("failed");
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log("succeed");
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const html = document.createElement("div");
        html.innerHTML = request.response;
        document.body.appendChild(html);
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const xml = request.responseXML;
      const txt = xml.getElementsByTagName("warning")[0].textContent;
      console.log(txt.trim());
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  console.log("我执行了");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const json = JSON.parse(request.response);
      myName.innerHTML = json.name;
    }
  };
  request.send();
};

let n = 1;

getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const arr = JSON.parse(request.response);
      arr.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        myUl.appendChild(li);
      });
    }
  };
  n += 1;
  request.send();
};
