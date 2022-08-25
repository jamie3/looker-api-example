# looker api example

Sample project that connects to Looker and runs queries.

## Setup

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

## Help Guides

https://www.npmjs.com/package/@looker/sdk-node