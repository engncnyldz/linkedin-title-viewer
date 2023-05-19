var postTitlesCount = 0;
var invitationsCount = 0;
var peopleCount = 0;

setInterval(exposeTitle, 3000);

function exposeTitle() {
  //console.log("Expose title started.");

  // Feed posts
  var postTitles = document.querySelectorAll("span[class~='update-components-actor__description']");

  if (postTitles.length != postTitlesCount) {
    //console.log("Updating posts...")

    for (var i = 0; i < postTitles.length; i++) {
      const post = postTitles[i];

      post.style = "white-space:normal";

    }
    postTitlesCount = postTitles.length;
  }

  // MyNetwork invitations
  var invitations = document.querySelectorAll("span[class~='invitation-card__subtitle']");

    if (invitations.length != invitationsCount) {
        //console.log("Updating invitations...");

        for (var i = 0; i < invitations.length; i++) {
            const inv = invitations[i];

            inv.style = "max-height:5rem;";
            inv.style.display = "block";

        }
        invitationsCount = invitations.length;
    }

    // MyNetwork people you may know
    var people = document.querySelectorAll("span[class~='discover-person-card__occupation']");

    if (people.length != peopleCount) {
       //console.log("Updating people cards...");
        
        for (var i = 0; i < people.length; i++) {
            const p = people[i];

            p.style = "max-height:10rem;";
            p.style.display = "block";

        }
        peopleCount = people.length;
    }

}