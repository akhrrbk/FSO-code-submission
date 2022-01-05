browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa

server-->browser: HTML-code

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.css

server-->browser: spa.css

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js

server-->browser: spa.js



note over browser:
browser starts executing js-code
that requests JSON data from server 
end note



browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

server-->browser: [{ content: "new content", date: "2021-01-05" }]




note over browser:
browser executes the event handler
that re-renders notes to display
end note

![image](https://user-images.githubusercontent.com/62600869/148238246-1c818c9e-2382-4287-afb9-e98a9183bc48.png)

