← [back to home](https://andrewrobles.com)

# 📱 **Auth and license key system**

Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='badge' style='--badge-bg-color: #daecda; --badge-text-color: #1c3728;'> Mobile app</span> <span class='badge' style='--badge-bg-color: #d1e4ee; --badge-text-color: #183246;'> JSON Web Token</span> 

### JWT-based mobile login
↓ This feature enables secure user login by exchanging credentials for a JSON Web Token, which is used to authenticate API requests throughout the session

![](../images/2-1.jpg ':size=80%')

### API for purchasing license keys
↓ Users securely purchase license keys through the web app, with the backend handling payment processing, key generation, and delivery

![](../images/2-2.jpg ':size=80%')

### License key activation
↓ This feature allows the mobile app to securely call the API and claim a license key that is unclaimed and not expired, associating it with the authenticated user’s account

![](../images/2-3.jpg ':size=80%')
