# Sample NodeJS Token Server@express

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/choui666/dynamic_token_server_nodejs)

1. Click the deploy link above to start
2. Fill in your app name, APP_ID and SERVER_SECRET and press `Deploy App`
3. Make a cup of coffee and wait for heroku to finish :)
4. Once done you will get an url for your instance, try accessing `https://<heroku url>/access_token?userID=1234&&roomID=5678` to check if it works
> Token valid in 3600 seconds by default. If you want to change the expired time, request with the `expired_ts` parameter. e.g. `https://<heroku url>/access_token?userID=1234&&roomID=5678&expired_ts=7200`


## Console

Get your AppID from ZEGOCLOUD Console [My Projects] : https://console.zegocloud.com/project

Get your ServerSecret from ZEGOCLOUD Console [My Projects -> project's Edit -> Basic Configurations] : https://console.zegocloud.com/project

## About us

https://www.zegocloud.com/

## License
The MIT License (MIT).
