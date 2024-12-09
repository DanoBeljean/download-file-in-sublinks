function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
}

let subLink = document.getElementsByTagName("a") // get every link on the home page
let fileName = [] // put every output file name
let cName = "" // class name of the file (which is a subdirectory) you want to download


// select only the link where you want to download a file into
for (let i = 0; i < sublink.length; i ++) {
	if (/^Lecture/.test(sublink[i].innerHTML)) {
		a.push(sublink[i])
}
}

async function fetchAndDownload() {
  for (let i = 0; i < a.length; i++) {
    

      try {
        const response = await fetch(a[i].href);
        const htmlString = await response.text();
        
        // transform string into HTML code
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        
        const code = doc.documentElement;
        const tel = code.getElementsByClassName(cName)[0].href;
        console.log(tel);
        downloadFile(tel, "");
      } catch (error) {
        console.error('Erreur lors de la récupération de la page:', error);
      }
      
      // sleep 1 sec
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }


// call function
fetchAndDownload();
