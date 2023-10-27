require('dotenv').config()
const express = require('express')//import express from 'express' can also be used
const app = express()
const port = 4000

const github_data={
  "login": "anaghninja432",
  "id": 127871202,
  "node_id": "U_kgDOB58o4g",
  "avatar_url": "https://avatars.githubusercontent.com/u/127871202?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anaghninja432",
  "html_url": "https://github.com/anaghninja432",
  "followers_url": "https://api.github.com/users/anaghninja432/followers",
  "following_url": "https://api.github.com/users/anaghninja432/following{/other_user}",
  "gists_url": "https://api.github.com/users/anaghninja432/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anaghninja432/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anaghninja432/subscriptions",
  "organizations_url": "https://api.github.com/users/anaghninja432/orgs",
  "repos_url": "https://api.github.com/users/anaghninja432/repos",
  "events_url": "https://api.github.com/users/anaghninja432/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anaghninja432/received_events",
  "type": "User",
  "site_admin": false,
  "name": "anaghninja432",
  "company": "None",
  "blog": "",
  "location": "Kolkata",
  "email": null,
  "hireable": null,
  "bio": "I love to code.",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 7,
  "created_at": "2023-03-14T15:08:32Z",
  "updated_at": "2023-10-27T17:04:36Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!????')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')

})

app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube Page</h1>')

})


app.get('/github', (req, res) => { //get request to github page and send the github data
    res.json(github_data) // here req and res are objects and json is a method of res object which converts the data into json format and sends it to the browser 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})