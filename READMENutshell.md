# Nutshell Dusty-Pickups

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

Authors: Michael Stiles, Brantley Jones, Allie Patton
Thanks: Jenna, Bryan, and Andy we appreaciate you!
Installing Instructions:
-technologies used: React, ReactStrap


Dummy Data:
{
"users": [
    {
      "id": 1,
      "username": "bj@bj.com",
      "password": "1234"
    },
    {
      "username": "ms@ms.com",
      "password": "1234",
      "id": 2
    },
    {
      "username": "ha@ha.com",
      "password": "1234",
      "id": 3
    },
    {
      "username": "ap@ap.com",
      "password": "1234",
      "id": 4
    },
    {
      "username": "allie@allie.com",
      "password": "1234",
      "id": 5
    },
  ],
  "messages": [
    {
      "id": 1,
      "userId": 1,
      "message": "Brantley says hi"
    },
    {
      "id": 2,
      "userId": 2,
      "message": "Michael says hi"
    },
    {
      "id": 3,
      "userId": 3,
      "message": "Humberto says hi"
    },
    {
      "userId": 5,
      "message": "B found a bug",
      "id": 8
    },
    {
      "userId": 5,
      "message": "did this fix the bug",
      "id": 9
    },
    {
      "userId": 5,
      "message": "I fixed the bug",
      "id": 10
    }
  ],
  "tasks": [
    {
      "taskName": "test edit",
      "taskDate": "2019-09-11",
      "id": 2
    },
    {
      "taskName": "test",
      "taskDate": "2019-09-12",
      "userId": 5,
      "id": 3
    }
  ],
  "events": [
    {
      "id": 1,
      "userId": 1,
      "eventName": "start sweating",
      "eventDate": "2019-09-04",
      "eventLocation": "Hackery"
    },
    {
      "eventName": "sweat more",
      "eventDate": "2019-09-04",
      "eventLocation": "nss",
      "userId": 1,
      "id": 2
    }
  ]
}