
browser.runtime.onMessage.addListener(
  (data, sender) => { 
    if (data.action === "filter") { 
      filter(); 
    }
  }
);

function filter() { 
  let filesMarked = 0;
  const files = [... document.getElementsByClassName("file")];
  console.log("Looking through " + files.length + " files");
  files.forEach(f => {
    const deletions = f.getElementsByClassName("blob-code-deletion");
    const additions = f.getElementsByClassName("blob-code-addition");
    const delsToKeep = [... deletions].filter(row => !row.textContent.trim().match(/^package/) && 
      !row.textContent.trim().match(/^import/));
    const addsToKeep = [... additions].filter(row => !row.textContent.trim().match(/^package/) && 
      !row.textContent.trim().match(/^import/));
    const loadDiff = f.getElementsByClassName("load-diff-button")
    if (loadDiff.length == 0 && delsToKeep.length == 0 && addsToKeep.length == 0) {
      const toggle = f.getElementsByClassName("js-reviewed-toggle")[0];
      if (!toggle.getElementsByTagName('input')[0].checked) {
        filesMarked++;    
        f.getElementsByClassName("js-reviewed-toggle")[0].click()
      }
    }
  });
  console.log("Marked " + filesMarked + " files as viewed");
}; 

