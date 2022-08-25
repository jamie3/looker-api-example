# looker api example

An express app that connects to Google Looker and runs a Look and sends the data back as JSON. The front end is a Vue3 app that displays the  

Sample project that connects to Looker and runs queries.

## Setup API

Go to https://rafflebox.cloud.looker.com/admin/users/api3_key/3 and generate your api keys

Create a `looker.ini` file and add the keys.

```
[Looker]
# Base URL for API. Do not include /api/* in the url
base_url=https://rafflebox.cloud.looker.com

# API 3 client id
client_id=<client_id>

# API 3 client secret
client_secret=<client_secret>
```

### Run

Run the API

`cd api`

`yarn dev`

Run the client

`cd client`

`yarn dev`

## Help Guides

https://www.npmjs.com/package/@looker/sdk-node