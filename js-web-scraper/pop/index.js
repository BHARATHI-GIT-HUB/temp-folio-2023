document.getElementById("push").onclick = currentTabUrl;
document.getElementById("get").onclick = fetchData;
function currentTabUrl() {
  chrome.tabs.query(
    {
      active: true,
      lastFocusedWindow: true,
    },
    function (tabs) {
      // and use that tab to fill in out title and url
      const tab = tabs[0];
      pushData(tab.url);
    }
  );
}

async function pushData(url) {
  document.getElementById("url").innerHTML = await url;

  const data = {
    id: "5",
    url: url,
  };

  await fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    document.getElementById("data").innerHTML = res;
    console.log("Request complete! response:", res);
  });
}

async function fetchData() {
  const res = await fetch("http://localhost:8080/");

  const record = await res.json();

  document.getElementById("data").innerHTML = record.map((item) => {
    return `<li>${item.title}</li>`;
  });
}
// fetchData();
