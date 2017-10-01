

// Go to initial commit
goToInitialCommit();

// (hint from https://github.com/FarhadG/init/blob/master/src/index.js)
function goToInitialCommit(){
  // The element of the number of commits
  const nCommitsElm = document.querySelector('.num.text-emphasized');

  if(nCommitsElm){
    // The number of commits
    const nCommits = parseInt(nCommitsElm.innerText);

    fetch(`https://api.github.com/repos${window.location.pathname}/commits`)

      .then(res => {
        console.log(res);
        console.log(res.headers.get('link'));
        return Promise.all([res.headers.get('link'), res.json()])
      })

      .then(results => {
        // Get commits
        return results[1];
      })

      .then(commits => {
        // Get latest commit (not initial commit)
        return commits[0];
      })

      // navigate there
      .then(latestCommit => {
        // Get sha
        const sha = latestCommit.sha;
        // Go to initial commit page
        window.location = `https://github.com${window.location.pathname}/commits/master?after=${sha}+${nCommits-2}`
      });

  } else {
    alert("Go repository top page!")
  }
}
