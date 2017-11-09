# Axios Promises and the github API

    Axios Promise based HTTP client for the browser and node.js
    
```javascript
function getProfile (username) {
    return axios.get('https://api.github.com/users/' + username);
}
```
```json
{
    "login": "xgirma",
    "id": 5876481,
    "avatar_url": "https://avatars1.githubusercontent.com/u/5876481?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/xgirma",
    "html_url": "https://github.com/xgirma",
    "followers_url": "https://api.github.com/users/xgirma/followers",
    "following_url": "https://api.github.com/users/xgirma/following{/other_user}",
    "gists_url": "https://api.github.com/users/xgirma/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/xgirma/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/xgirma/subscriptions",
    "organizations_url": "https://api.github.com/users/xgirma/orgs",
    "repos_url": "https://api.github.com/users/xgirma/repos",
    "events_url": "https://api.github.com/users/xgirma/events{/privacy}",
    "received_events_url": "https://api.github.com/users/xgirma/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Girma Nigusse",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 11,
    "following": 0,
    "created_at": "2013-11-07T05:19:48Z",
    "updated_at": "2017-10-15T17:44:17Z"
}
```

```javascript
function getRepos (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + '&per_page=100')
}
```

```json
[
    {},
    {
            "id": 91948769,
            "name": "latex-javaScript",
            "full_name": "xgirma/latex-javaScript",
            "owner": {
                "login": "xgirma",
                "id": 5876481,
                "avatar_url": "https://avatars1.githubusercontent.com/u/5876481?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/xgirma",
                "html_url": "https://github.com/xgirma",
                "followers_url": "https://api.github.com/users/xgirma/followers",
                "following_url": "https://api.github.com/users/xgirma/following{/other_user}",
                "gists_url": "https://api.github.com/users/xgirma/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/xgirma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/xgirma/subscriptions",
                "organizations_url": "https://api.github.com/users/xgirma/orgs",
                "repos_url": "https://api.github.com/users/xgirma/repos",
                "events_url": "https://api.github.com/users/xgirma/events{/privacy}",
                "received_events_url": "https://api.github.com/users/xgirma/received_events",
                "type": "User",
                "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/xgirma/latex-javaScript",
            "description": "typeset JavaScript codes in Latex",
            "fork": false,
            "url": "https://api.github.com/repos/xgirma/latex-javaScript",
            "forks_url": "https://api.github.com/repos/xgirma/latex-javaScript/forks",
            "keys_url": "https://api.github.com/repos/xgirma/latex-javaScript/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/xgirma/latex-javaScript/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/xgirma/latex-javaScript/teams",
            "hooks_url": "https://api.github.com/repos/xgirma/latex-javaScript/hooks",
            "issue_events_url": "https://api.github.com/repos/xgirma/latex-javaScript/issues/events{/number}",
            "events_url": "https://api.github.com/repos/xgirma/latex-javaScript/events",
            "assignees_url": "https://api.github.com/repos/xgirma/latex-javaScript/assignees{/user}",
            "branches_url": "https://api.github.com/repos/xgirma/latex-javaScript/branches{/branch}",
            "tags_url": "https://api.github.com/repos/xgirma/latex-javaScript/tags",
            "blobs_url": "https://api.github.com/repos/xgirma/latex-javaScript/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/xgirma/latex-javaScript/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/xgirma/latex-javaScript/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/xgirma/latex-javaScript/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/xgirma/latex-javaScript/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/xgirma/latex-javaScript/languages",
            "stargazers_url": "https://api.github.com/repos/xgirma/latex-javaScript/stargazers",
            "contributors_url": "https://api.github.com/repos/xgirma/latex-javaScript/contributors",
            "subscribers_url": "https://api.github.com/repos/xgirma/latex-javaScript/subscribers",
            "subscription_url": "https://api.github.com/repos/xgirma/latex-javaScript/subscription",
            "commits_url": "https://api.github.com/repos/xgirma/latex-javaScript/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/xgirma/latex-javaScript/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/xgirma/latex-javaScript/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/xgirma/latex-javaScript/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/xgirma/latex-javaScript/contents/{+path}",
            "compare_url": "https://api.github.com/repos/xgirma/latex-javaScript/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/xgirma/latex-javaScript/merges",
            "archive_url": "https://api.github.com/repos/xgirma/latex-javaScript/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/xgirma/latex-javaScript/downloads",
            "issues_url": "https://api.github.com/repos/xgirma/latex-javaScript/issues{/number}",
            "pulls_url": "https://api.github.com/repos/xgirma/latex-javaScript/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/xgirma/latex-javaScript/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/xgirma/latex-javaScript/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/xgirma/latex-javaScript/labels{/name}",
            "releases_url": "https://api.github.com/repos/xgirma/latex-javaScript/releases{/id}",
            "deployments_url": "https://api.github.com/repos/xgirma/latex-javaScript/deployments",
            "created_at": "2017-05-21T10:20:27Z",
            "updated_at": "2017-09-26T20:21:06Z",
            "pushed_at": "2017-05-26T01:21:42Z",
            "git_url": "git://github.com/xgirma/latex-javaScript.git",
            "ssh_url": "git@github.com:xgirma/latex-javaScript.git",
            "clone_url": "https://github.com/xgirma/latex-javaScript.git",
            "svn_url": "https://github.com/xgirma/latex-javaScript",
            "homepage": null,
            "size": 166,
            "stargazers_count": 4,
            "watchers_count": 4,
            "language": "TeX",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 1,
            "forks": 0,
            "open_issues": 1,
            "watchers": 4,
            "default_branch": "master"
        },
    {}
]
```

What we are doing here is basically creating a bunch of these micro `functions` do one thing really well and eventually
what we will do is we will compose them together to get back the information we need. 

> .reduce takes an array and reduce it into a single value. 

```javascript
function getStarCount (repos) {
    return repos.data.reduce(function (count, repo) {
        return count + repo.stargazers_count; // e.g. 0 + 4
    }, 0) // init count with zero
}
```

````javascript
function calculateScore (profile, repos) {
    let followers = profile.followers;
    let totalStars = getStarCount(repos);

    return (followers * 3) + totalStars;
}
````

````javascript
function sortPlayers(players) {
    return players.sort(function (a,b) {
        return b.score - a.score; // high first
    });
}
````

```javascript
function handleError (error) {
    console.warn(error);
    return null;
}
```

## Composing all of the above micro functions
```javascript
function getUserData (player) {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(function (data) {
        let profile = data[0];
        let repos = data[1];
        
        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    })
}

module.exports = {
    battle: function (players) {
        return axios.all(players.map(getUserData))
            .then(sortPlayers)
            .catch(handleError)
    },
};
```
 
## Conclusion
What we have done is there is a lot of complex thing going on here, so we try to break that complexity into function
just as we have done with component before. Then now we can compose all of that complexity together. Now, when we call
`battle` it is going to do a lot of things, but we kind of encapsulate all of that into this `little micro functions` and the
last thing we want to do is if there is an error and then go ahead and pass error to our handleError function. 