

// Go to initial commit
goToInitialCommit();

// (hint from https://github.com/FarhadG/init/blob/master/src/index.js)
async function goToInitialCommit(){
  // The element of the number of commits
  const nCommitsElm = document.querySelector('.num.text-emphasized');

  if(nCommitsElm){
    // The number of commits
    const nCommits = parseInt(nCommitsElm.innerText);

    const res = await fetch(`https://api.github.com/repos${window.location.pathname}/commits`)
    
    const results = await Promise.all([res.headers.get('link'), res.json()])

    // Get commits
    const commits = results[1];

    // Get latest commit (not initial commit)
    const latestCommit = commits[0];

    // Get sha
    const sha = latestCommit.sha;
    // Go to initial commit page
    window.location = `https://github.com${window.location.pathname}/commits/master?after=${sha}+${nCommits-2}`


  } else {
    alert("Go repository top page!")
  }
}
