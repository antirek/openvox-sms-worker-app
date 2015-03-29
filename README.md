# openvox-sms-worker-app

Sample of Openvox sms worker


Use
===


Step 1. Install

>> git clone https://github.com/antirek/openvox-sms-worker-app.git

>> npm install


Step 2. Configure

Edit **config.js** to your settings


Step 3. Run

>> node app.js


Step 4. Send message

Send special formatted JSON to RabbitMQ queue

> You can use **send.js** for sending sample SMS to RabbitMQ queue



## Format JSON for SMS ##


`````
{
    span: 1,   //span module of gsms gateway, default 1, not required
    source: 'From Alaska server', //define source of message
    targetNumber: '89135292926',  // or '+79135292926', string format
    msgText: 'Some text for sending as SMS to my dear friends!'   // short or long sms text
}

`````



Bugs?!
======

Please, send it to me.